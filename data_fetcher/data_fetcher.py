#Author reacheswar@outlook.com

#!/usr/bin/python
import requests
import json
import io
from collections import OrderedDict
import datetime


# Function to get zone based on current state count vs state having highest count

def getZone(count, total):
    zone_average = total/13
   # print(zone_average)
    zone = ""
    if count == 0:
        zone = "Zone0"
    elif count > 0 and count <= zone_average:
        zone = "Zone1"
    elif count > zone_average*1 and count <= zone_average * 2:
        zone = "Zone2"
    elif count > zone_average*2 and count <= zone_average * 3:
        zone = "Zone3"
    elif count > zone_average*3 and count <= zone_average * 4:
        zone = "Zone4"
    elif count > zone_average*4 and count <= zone_average * 5:
        zone = "Zone5"
    elif count > zone_average*5 and count <= zone_average * 6:
        zone = "Zone6"
    elif count > zone_average*6 and count <= zone_average * 7:
        zone = "Zone7"
    elif count > zone_average*7 and count <= zone_average * 8:
        zone = "Zone8"
    elif count > zone_average*8 and count <= zone_average * 9:
        zone = "Zone9"
    elif count > zone_average*9 and count <= zone_average * 10:
        zone = "Zone10"
    elif count > zone_average*10 and count <= zone_average * 11:
        zone = "Zone11"
    elif count > zone_average*11 and count <= zone_average * 12:
        zone = "Zone12"
    elif count > zone_average*12:
        zone = "Zone13"
    return zone


#Function to convert all the string integers to int

def int_hook(obj):
    """If a value in obj is a string, try to convert it to an int"""
    rv = {}
    for k, v in obj.items():
        if isinstance(v, basestring):
            try:
                rv[k] = int(v)
            except ValueError:
                rv[k] = v
        else:
            rv[k] = v
    return rv


data_endpoint = "https://api.covid19india.org/data.json"

response = requests.get(data_endpoint)

now = datetime.datetime.now()

fileName = "/var/www/data/covid19data_"+str(now.year)+"_"+str(now.month)+"_"+str(
    now.day)+"_"+str(now.hour)+"_"+str(now.minute)+"_"+str(now.second)+".json"

print("File name is "+fileName)

dataSrc = "/var/www/data/covid19data_latest.json"

data_file = open(fileName, "w+")
dataSrc_file = open(dataSrc, "w")
dataSrc_file.write(response.text)
data_file.write(response.text)

data_file.close()
dataSrc_file.close()

if response.status_code == 200:
    print('Success!')
   # print(response.content)
    data = json.loads(response.text, object_hook=int_hook)
elif response.status_code == 404:
    print('Not Found.')

# print(data['statewise'][1]['state'])

countryTotal = float(data['statewise'][0]['confirmed'])

sub_data = data['statewise']
sorted_sub_data = sorted(sub_data, key=lambda i: i['confirmed'], reverse=True)
maxAffected = sub_data[1]['confirmed']

print("Max Affected:"+str(maxAffected))

print("Todays totals is:"+str(countryTotal))

topo_file = open("/var/www/data/india_state_latest.topojson", "r")
topo_object = json.load(topo_file, object_pairs_hook=OrderedDict)
topo_file.close()

for record in data['statewise']:
    state = record['state']
    total = float(record['confirmed'])
    active = record['active']
    recovered = record['recovered']
    deaths = record['deaths']
    lastUpdatedTime = record['lastupdatedtime']
    sharePercentage = round(float((total/countryTotal)*100), 1)
    zone = getZone(total, maxAffected)
    for topoRecord in topo_object['objects']['india_state_latest']['geometries']:
        current_state = topoRecord['properties']['Name']
        if current_state == state:
            topoRecord['properties']['Total'] = total
            topoRecord['properties']['Active'] = active
            topoRecord['properties']['Recovered'] = recovered
            topoRecord['properties']['Deceased'] = deaths
            topoRecord['properties']['LastUpdatedTime'] = lastUpdatedTime
            topoRecord['properties']['Percentage'] = sharePercentage
            topoRecord['properties']['Zone'] = zone
            break

jsonFile = open("/var/www/data/india_state_latest.topojson", "w+")
jsonFile.write(json.dumps(topo_object, sort_keys=False))
jsonFile.close()
