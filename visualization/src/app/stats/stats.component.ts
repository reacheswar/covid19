import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stats-india',
  templateUrl: 'stats.component.html'
})
export class StatsComponent implements OnInit {
  dtOptions: DataTables.Settings = {

  };

  ngOnInit(): void {
    var india_total = 0;
    this.dtOptions = {
      ajax: {
        "url": 'assets/covid19data_latest.json',
        "dataSrc": function (json) {
          var return_data = new Array();
          var data_set = json.statewise;
          //var state_total=data_set[0].confirmed;
          var state_total = 0;
          for (var i = 0; i < data_set.length; i++) {
            if (data_set[i].state == "Total") {
              state_total = data_set[i].confirmed;
            }
            return_data.push({
              'state': data_set[i].state,
              'confirmed': data_set[i].confirmed,
              'active': data_set[i].active,
              'recovered': data_set[i].recovered,
              'deaths': data_set[i].deaths,
              'sharePer': Math.round((data_set[i].confirmed / state_total) * 100),
              'recoverPer': Math.round((data_set[i].recovered / data_set[i].confirmed) * 100) || 0,
              'deceasedPer': Math.round((data_set[i].deaths / data_set[i].confirmed) * 100) || 0,
              'updatedOn': data_set[i].lastupdatedtime,
            })
          }
          return return_data;
        }
      },
      /* ajax: {
         "url": 'assets/actual_data_latest.json',
         "dataSrc": "statewise",
         "data": {
           "state": "Total"
         }
       }, */
      pageLength: 25,
      "order": [[1, 'dsc']],
      autoWidth: true,
      /*   "rowCallback": function (row, data, index) {
           if (data["state"] == "Total") {
             //$(row).hide();
             india_total += Number(data["confirmed"]);
             console.log(india_total);
           }
         },*/
      columns: [{
        title: 'State',
        data: 'state',

      }, {
        title: 'Total',
        data: 'confirmed'
      }, {
        title: 'Active',
        data: 'active'
      }, {
        title: 'Recovered',
        data: 'recovered'
      },
      {
        title: 'Deceased',
        data: 'deaths'
      },
      {
        title: 'Share%',
        data: 'sharePer',
        /*// "render": function(data,type,row) { return Math.round(((row.confirmed) / Number(india_total))*100) +"%" }
        render: function (data, type, row) {
          // console.log(row.confirmed);
          console.log(india_total);

          return Math.round(((row.confirmed) / india_total) * 100)
        }*/
      },
      {
        title: 'Recovery%',
        data: 'recoverPer'
      },
      {
        title: "Deaths%",
        data: 'deceasedPer'
      },

      {
        title: 'UpdatedOn',
        data: 'updatedOn'
      }
        /*,
        , {
          title: 'CR',
          data: 'contributionPercentage'
        }, {
          title: 'RR',
          data: 'recoveryPercentage'
        } */

      ]

    };

  }
}

