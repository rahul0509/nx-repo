import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import TileLayer from '@arcgis/core/layers/TileLayer';

@Component({
  selector: 'lib-tile-layer',
  imports: [],
  templateUrl: './tile-layer.component.html',
  styleUrl: './tile-layer.component.scss',
})
export class TileLayerComponent implements OnInit {
  @ViewChild('tileLayer', { static: true })
  private tileLayer: ElementRef | undefined;
  
  ngOnInit(): void {
    const transportationLayer = new TileLayer({
      url: 'https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer',
      // This property can be used to uniquely identify the layer
      id: 'streets',
      visible: false,
    });

    const housingLayer = new TileLayer({
      url: 'https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer',
      id: 'ny-housing',
      opacity: 0.9,
    });

    const baseMap = new Map({
      basemap: 'oceans',
      layers: [housingLayer],
    });

    baseMap.add(transportationLayer);

   const mapView = new MapView({
      container: this.tileLayer && this.tileLayer.nativeElement,
      map: baseMap,
    });
  }
}
