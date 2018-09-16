import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 49.2789;
  lng: number = 122.9192;
  constructor() { }

  ngOnInit() {
  }

}
