import { Component, OnInit } from '@angular/core';
import { ViewerConfiguration } from 'angular-cesium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ViewerConfiguration]
})
export class AppComponent  {

  title = 'covid19';


  /* constructor(private viewerConf: ViewerConfiguration) {

    // viewerOptions will be passed the Cesium.Viewer contstuctor 
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      mapMode2D: Cesium.MapMode2D.ROTATE,
    };
  } */
}
