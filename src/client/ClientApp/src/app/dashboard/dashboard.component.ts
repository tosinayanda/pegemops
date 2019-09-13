import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var mapboxgl: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public isCollapsed = true;
  
  ngOnInit() {
    $(function () {

      $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });

      mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZWh1bnRhIiwiYSI6ImNqZzIzMmtxbzBoZDgycHMxejhjOTY2a3kifQ.m4jKWEeBF3Q7pMo4-qpJKw';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [0, 0], // starting position [lng, lat]
        zoom: 1
      });

      var size = 100;

      var pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        onAdd: function () {
          var canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },

        render: function () {
          var duration = 1000;
          var t = (performance.now() % duration) / duration;

          var radius = size / 2 * 0.3;
          var outerRadius = size / 2 * 0.7 * t + radius;
          var context = this.context;

          // draw outer circle
          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
          context.fill();

          // draw inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(255, 100, 100, 1)';
          context.strokeStyle = 'white';
          context.lineWidth = 2 + 4 * (1 - t);
          context.fill();
          context.stroke();

          // update this image's data with data from the canvas
          this.data = context.getImageData(0, 0, this.width, this.height).data;

          // keep the map repainting
          map.triggerRepaint();

          // return `true` to let the map know that the image was updated
          return true;
        }
      };

      map.on('load', function () {

        map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

        map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [0, 0]
                }
              }
              , {
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [25.35, 51.18]
                }

                }
                , {
                  "type": "Feature",
                  "geometry": {
                  "type": "Point",
                  "coordinates": [14.35, 23.18]
                  }
  
                  }
              ]
            }
          },
          "layout": {
            "icon-image": "pulsing-dot"
          }
        });

      });
    });

  }

}
