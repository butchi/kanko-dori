import ns from '../module/ns';

export default class Place {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.initMap();
  }

  initMap() {
    this.map = new GMaps({
      div: '.gmaps',
      lat: 35.3190056,
      lng: 139.5485442,
    });

    ns.spotArr.forEach((spot) => {
      this.map.addMarker({
        lat: spot.lat,
        lng: spot.lng,
        title: spot.name,
        // click: function(e) {
        //   alert('You clicked in this marker');
        // }
      });
    });
  }
}