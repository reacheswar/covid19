import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';

import {  AngularCesiumWidgetsModule } from 'angular-cesium';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsComponent } from './stats/stats.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CesiumDirective } from './cesium.directive';
import {DataTablesModule} from 'angular-datatables';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { InStatewiseComponent } from './in-statewise/in-statewise.component';
import { RouterModule } from '@angular/router';
import { InDistrictwiseComponent } from './in-districtwise/in-districtwise.component';
import { WorldComponent } from './world/world.component'



@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    CesiumDirective,
    InStatewiseComponent,
    InDistrictwiseComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    FlexLayoutModule,
    DataTablesModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot([
      { path: 'home', component: InStatewiseComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'in-district', component: InDistrictwiseComponent },
      { path: 'world', component: WorldComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
