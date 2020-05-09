import { Directive, OnInit, ElementRef } from '@angular/core';

//import * as node from '@types/node';
//import * as polylabel from 'polylabel';
//import { HttpClient } from '@angular/common/http';
//import  *  as  data  from  './india_state_latest.topojson';

//import {ElementRef} from 'cesium';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  //state_data:any;

 // http:HttpClient;

  constructor(private el: ElementRef) { }

  ngOnInit() {

   // console.log(data);
    // Put initialization code for the Cesium viewer here
/*
    this.http.get('assets/india_state_latest.topojson', {responseType: 'text'})
        .subscribe(data => {
          this.state_data=data;
          console.log(data);
        }); */

    Cesium.Ion.defaultAccessToken = '<<place your token here>>';


    var west = 68.0;
    var south = 7.0;
    var east = 89.0;
    var north = 35.0;

    var rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);

    Cesium.Camera.DEFAULT_VIEW_FACTOR = .5;
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rectangle;

    const viewer = new Cesium.Viewer(this.el.nativeElement,{
      electionIndicator: false,
      timeline: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      mapMode2D: Cesium.MapMode2D.ROTATE
    });

    Cesium.Math.setRandomNumberSeed(0);

    var promise = Cesium.GeoJsonDataSource.load('assets/india_state_latest.topojson');
    promise.then(function (dataSource) {
         viewer.dataSources.add(dataSource);

         //Get the array of entities
         var entities = dataSource.entities.values;

         var colorHash = {};
         var labelHash ={};
         for (var i = 0; i < entities.length; i++) {
              //For each entity, create a random color based on the state name.
              //Some states have multiple entities, so we store the color in a
              //hash so that we use the same color for the entire state.
              var entity = entities[i];
              var name = entity.name;
              var color = colorHash[name];

              var green = Cesium.Color.fromCssColorString('#239B56');
              green.alpha = 1;

              var yellow = Cesium.Color.fromCssColorString('#F9E79F');
              yellow.alpha = 1;

              var light_red1 = Cesium.Color.fromCssColorString('#EB984E');
              light_red1.alpha = 1;
              var light_red2 = Cesium.Color.fromCssColorString('#FADBD8');
              light_red2.alpha = 1;
              var light_red3 = Cesium.Color.fromCssColorString('#F5B7B1');
              light_red3.alpha = 1;
              var light_red4 = Cesium.Color.fromCssColorString('#F1948A');
              light_red4.alpha = 1;
              var light_red5 = Cesium.Color.fromCssColorString('#EC7063');
              light_red5.alpha = 1;
              var light_red6 = Cesium.Color.fromCssColorString('#E74C3C');
              light_red6.alpha = 1;
              var light_red7 = Cesium.Color.fromCssColorString('#CB4335');
              light_red7.alpha = 1;
              var light_red8 = Cesium.Color.fromCssColorString('#B03A2E');
              light_red8.alpha = 1;
              var light_red9 = Cesium.Color.fromCssColorString('#943126');
              light_red9.alpha = 1;
              var light_red10 = Cesium.Color.fromCssColorString('#78281F');
              light_red10.alpha = 1;
              var light_red11 = Cesium.Color.fromCssColorString('#641E16');
              light_red11.alpha = 1;
              var light_red12 = Cesium.Color.fromCssColorString('#17202A');
              light_red12.alpha = 1;

              var outlineColour = Cesium.Color.fromCssColorString('#9a9b9c');
            outlineColour.aplha=1;



              var zone = entity.properties.Zone;

          if (zone == "Zone0") {
               entity.polygon.material = green;
          }
          else if (zone == "Zone1") {
               entity.polygon.material = light_red2; 
          }
          else if (zone == "Zone2") {
               entity.polygon.material = yellow; 
          }
          else if (zone == "Zone3") {
               entity.polygon.material = light_red1; 
          }
          else if (zone == "Zone4") {
               entity.polygon.material = light_red3;
          }
          else if (zone == "Zone5") {
               entity.polygon.material = light_red4;
          }
          else if (zone == "Zone6") {
               entity.polygon.material = light_red5;
          }
          else if (zone == "Zone7") {
               entity.polygon.material = light_red6;
          }
          else if (zone == "Zone8") {
               entity.polygon.material = light_red7;
          }
          else if (zone == "Zone9") {
               entity.polygon.material = light_red8;
          }
          else if (zone == "Zone10") {
               entity.polygon.material = light_red9;
          }
          else if (zone == "Zone11") {
               entity.polygon.material = light_red10;
          }
          else if (zone == "Zone12") {
               entity.polygon.material = light_red11;
          }
          else if (zone == "Zone13") {
               entity.polygon.material = light_red12;
          }




            /*  var total = entity.properties.Total;
              if (total == 0) {
                   entity.polygon.material = green;
              }
              else if (total >= 1 && total <= 25) {
                   entity.polygon.material = yellow;
              }
              else if (total > 25 && total < 75) {
                   entity.polygon.material = light_red1;
              }
              else if (total > 1 && total < 75) {
                   entity.polygon.material = light_red2;
              }
              else if (total > 75 && total < 150) {
                   entity.polygon.material = light_red3;
              }
              else if (total > 150 && total < 225) {
                   entity.polygon.material = light_red4;
              }
              else if (total > 225 && total < 300) {
                   entity.polygon.material = light_red5;
              }
              else if (total > 300 && total < 375) {
                   entity.polygon.material = light_red6;
              }
              else if (total > 375 && total < 450) {
                   entity.polygon.material = light_red7;
              }
              else if (total > 450 && total < 525) {
                   entity.polygon.material = light_red8;
              }
              else if (total > 525 && total < 600) {
                   entity.polygon.material = light_red9;
              }
              else if (total > 600 && total < 675) {
                   entity.polygon.material = light_red10;
              }
              else if (total > 675 && total < 750) {
                   entity.polygon.material = light_red11;
              }
              else if (total > 750) {
                   entity.polygon.material = light_red12;
              } */

              entity.polygon.outline = true;
              entity.polygon.outlineColor = outlineColour;
              //entity.polygon.extrudedHeight = entity.properties.Total * 100;

              //TODO-- Label is working, but need optimiation for display in proper position

             /*
              //Get the label if it already exist 
              label=labelHash[name];
              if(!label){

               //var p = polylabel(entity.polygon,1.0,false);
               //console.log(p);
                    //Make sure it's a polygon and doesn't already have a position.
              if (!entity.position && entity.polygon) {
                    var center =  Cesium.BoundingSphere.fromPoints(entity.polygon.hierarchy.getValue().positions).center;
                  Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(center);
                  entity.position = new Cesium.ConstantPositionProperty(center);
                  console.log(entity.position);
              }
          
              //Set up the label.
              var label = new Cesium.LabelGraphics();
              label.text = new Cesium.ConstantProperty(name);
              label.font = new Cesium.ConstantProperty('5pt SoberanaSans');
              label.fillColor = new Cesium.ConstantProperty(Cesium.Color.WHITE);
              label.outlineColor = new Cesium.ConstantProperty(Cesium.Color.BLACK);
              label.outlineWidth = new Cesium.ConstantProperty(1);
              label.style = new Cesium.ConstantProperty(Cesium.LabelStyle.FILL_AND_OUTLINE)
              label.eyeOffset = new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -1000000));
              entity.label = label;
              labelHash[name] = label;
          }else {
               //skip adding labels for remaining polygons belonging to same state/ut
          } */

         }
    }).otherwise(function (error) {
         //Display any errrors encountered while loading.
         window.alert(error);
    });

  
   }


   

}

//TODO-- Get center of the polygon
/*

var Queue = require('tinyqueue');
//module.exports = polylabel;
//module.exports.default = polylabel;

function polylabel(polygon, precision, debug) {
     precision = precision || 1.0;
 
     // find the bounding box of the outer ring
     var minX, minY, maxX, maxY;
     for (var i = 0; i < polygon[0].length; i++) {
         var p = polygon[0][i];
         if (!i || p[0] < minX) minX = p[0];
         if (!i || p[1] < minY) minY = p[1];
         if (!i || p[0] > maxX) maxX = p[0];
         if (!i || p[1] > maxY) maxY = p[1];
     }
 
     var width = maxX - minX;
     var height = maxY - minY;
     var cellSize = Math.min(width, height);
     var h = cellSize / 2;
 
     if (cellSize === 0) return [minX, minY];
 
     // a priority queue of cells in order of their "potential" (max distance to polygon)
     var cellQueue = new Queue(undefined, compareMax);
 
     // cover polygon with initial cells
     for (var x = minX; x < maxX; x += cellSize) {
         for (var y = minY; y < maxY; y += cellSize) {
             cellQueue.push(new Cell(x + h, y + h, h, polygon));
         }
     }
 
     // take centroid as the first best guess
     var bestCell = getCentroidCell(polygon);
 
     // special case for rectangular polygons
     var bboxCell = new Cell(minX + width / 2, minY + height / 2, 0, polygon);
     if (bboxCell.d > bestCell.d) bestCell = bboxCell;
 
     var numProbes = cellQueue.length;
 
     while (cellQueue.length) {
         // pick the most promising cell from the queue
         var cell = cellQueue.pop();
 
         // update the best cell if we found a better one
         if (cell.d > bestCell.d) {
             bestCell = cell;
             if (debug) console.log('found best %d after %d probes', Math.round(1e4 * cell.d) / 1e4, numProbes);
         }
 
         // do not drill down further if there's no chance of a better solution
         if (cell.max - bestCell.d <= precision) continue;
 
         // split the cell into four cells
         h = cell.h / 2;
         cellQueue.push(new Cell(cell.x - h, cell.y - h, h, polygon));
         cellQueue.push(new Cell(cell.x + h, cell.y - h, h, polygon));
         cellQueue.push(new Cell(cell.x - h, cell.y + h, h, polygon));
         cellQueue.push(new Cell(cell.x + h, cell.y + h, h, polygon));
         numProbes += 4;
     }
 
     if (debug) {
         console.log('num probes: ' + numProbes);
         console.log('best distance: ' + bestCell.d);
     }
 
     return [bestCell.x, bestCell.y];
 }
 
 function compareMax(a, b) {
     return b.max - a.max;
 }
 
 function Cell(x, y, h, polygon) {
     this.x = x; // cell center x
     this.y = y; // cell center y
     this.h = h; // half the cell size
     this.d = pointToPolygonDist(x, y, polygon); // distance from cell center to polygon
     this.max = this.d + this.h * Math.SQRT2; // max distance to polygon within a cell
 }
 
 // signed distance from point to polygon outline (negative if point is outside)
 function pointToPolygonDist(x, y, polygon) {
     var inside = false;
     var minDistSq = Infinity;
 
     for (var k = 0; k < polygon.length; k++) {
         var ring = polygon[k];
 
         for (var i = 0, len = ring.length, j = len - 1; i < len; j = i++) {
             var a = ring[i];
             var b = ring[j];
 
             if ((a[1] > y !== b[1] > y) &&
                 (x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0])) inside = !inside;
 
             minDistSq = Math.min(minDistSq, getSegDistSq(x, y, a, b));
         }
     }
 
     return (inside ? 1 : -1) * Math.sqrt(minDistSq);
 }
 
 // get polygon centroid
 function getCentroidCell(polygon) {
     var area = 0;
     var x = 0;
     var y = 0;
     var points = polygon[0];
 
     for (var i = 0, len = points.length, j = len - 1; i < len; j = i++) {
         var a = points[i];
         var b = points[j];
         var f = a[0] * b[1] - b[0] * a[1];
         x += (a[0] + b[0]) * f;
         y += (a[1] + b[1]) * f;
         area += f * 3;
     }
     if (area === 0) return new Cell(points[0][0], points[0][1], 0, polygon);
     return new Cell(x / area, y / area, 0, polygon);
 }
 
 // get squared distance from a point to a segment
 function getSegDistSq(px, py, a, b) {
 
     var x = a[0];
     var y = a[1];
     var dx = b[0] - x;
     var dy = b[1] - y;
 
     if (dx !== 0 || dy !== 0) {
 
         var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);
 
         if (t > 1) {
             x = b[0];
             y = b[1];
 
         } else if (t > 0) {
             x += dx * t;
             y += dy * t;
         }
     }
 
     dx = px - x;
     dy = py - y;
 
     return dx * dx + dy * dy;
 } */
