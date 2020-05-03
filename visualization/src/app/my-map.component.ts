
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import {CircleEditorObservable, CircleEditUpdate, CirclesEditorService, LabelProps, CircleEditOptions, CesiumEvent, ViewerConfiguration} from 'angular-cesium';

@Component({
    selector: 'my-map',
    templateUrl: './my-map.component.html',
    providers: [CirclesEditorService],
  /*  styles:[`
    .edit-buttons {
      display: flex;
      position: fixed;
      bottom: 10px;
      left: 50px;
      z-index: 1000;
      background-color: gray;
      background-color: rgba(150,150,150,0);
    }
    `] */
  })

  
  export class MyMapComponent implements OnInit {


    ngOnInit() {

      const circles = [];

      circles.push({
        id:"test",
        position: Cesium.Cartesian3.fromDegrees(11.088194,77.521225),
        radius:100000
      });

      circles.push({
        id:"test",
        position: Cesium.Cartesian3.fromDegrees(77.521225,11.088194),
        radius:100000
      });

    }

    show =true;

    datastore$: CircleEditorObservable;

    editing$: CircleEditorObservable;

  

    
    constructor(private circleEditor: CirclesEditorService) {
       
    }

    
    startDraw() {

        var options:CircleEditOptions = {
            
            circleProps: {
                material: Cesium.Color.BLUE.withAlpha(0.4),
                fill: false,
                outline: false,
                outlineWidth:1,
                outlineColor: Cesium.Color.WHITE.withAlpha(0.8),
                classificationType: Cesium.ClassificationType.BOTH,
                zIndex: 0,
                shadows: Cesium.ShadowMode.DISABLED,
              },
              polylineProps: {
                width: 10,
                material: () => Cesium.Color.WHITE.withAlpha(0.8),
              }
        }

         this.editing$ = this.circleEditor.create(options);
 
        // this.editing$ = this.circleEditor.edit();

         this.editing$.subscribe((editUpdate: CircleEditUpdate) => {
            // current edit value
            console.log(editUpdate);
            // or
            console.log('center', this.editing$.getCenter());
            console.log('radius', this.editing$.getRadius()/1000);
          });

          this.editing$.setLabelsRenderFn((update: CircleEditUpdate) => {
            const newLabels: LabelProps[] = [];
            newLabels.push(
              {
                text: 'Center',
                scale: 0.6,
                eyeOffset: new Cesium.Cartesian3(10, 10, -1000),
                fillColor: Cesium.Color.BLUE,
              },
              {
                text: Math.round(update.radius/1000).toString()+" km",
                scale: 0.6,
                eyeOffset: new Cesium.Cartesian3(10, 10, -1000),
                fillColor: Cesium.Color.RED,
              },
            );
            return newLabels;
          });

    console.log("..values=", this.editing$);

         // Or Edit from existing points  
         //const center = Cesium.Cartesian3.fromDegrees(-70, 0);
         //this.editing$ = this.circleEditor.edit(center, 800000);
    }

    saveCircle(){
           if (this.editing$) {
              this.datastore$ = this.editing$;
              this.editing$.dispose();
             this.editing$ = undefined;
            }
    }
  }
