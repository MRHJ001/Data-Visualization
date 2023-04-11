import { AfterViewInit, Component } from '@angular/core';
import { AppService } from './services/app.service';
import { HttpClient } from '@angular/common/http';
import { GeoService } from './services/geo.service';
import { Papa } from 'ngx-papaparse';
import { Polygon } from 'ol/geom';

export class MyData {
  DirectorateSuburb: any | undefined;
  Directorate: any | undefined;
  Suburb: any | undefined;
  length: any | undefined;
  long: any | undefined;
  lat: any | undefined;
  color:any| undefined;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'Data_Visualisation';
  colors :any[] = []
  constructor(private appService: AppService,
    private papa: Papa, 
    private http: HttpClient,
    private geoService: GeoService,) {}
  ngAfterViewInit(): void {

  }
}
