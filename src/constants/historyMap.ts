import {} from '@types/googlemaps';

import { Marker } from '~/interfaces/GoogleMap';

export const markers: Marker[] = [
  {
    date: new Date('2016-12-07'),
    name: 'カサブランカ',
    category: 'モンゴル料理',
    location: { lat: 35.176359, lng: 136.912753 },
  },
  {
    date: new Date('2017-06-09'),
    name: '香膳',
    category: 'ウイグル料理',
    location: { lat: 35.2054127, lng: 136.9875685 },
  },
  {
    date: new Date('2017-07-28'),
    name: 'ロス・ノビオス',
    category: 'メキシコ料理',
    location: { lat: 35.1767371, lng: 136.9180909 },
  },
  {
    date: new Date('2017-12-08'),
    name: 'インカ飯',
    category: 'ペルー料理',
    location: { lat: 35.1669397, lng: 136.9152882 },
  },
  {
    date: new Date('2018-03-23'),
    name: 'インカ飯',
    category: 'トルコ料理',
    location: { lat: 35.165012, lng: 136.895624 },
  },
];

const center = (() => {
  const lats = markers.map(({ location: { lat } }) => lat).sort((a, b) => a - b);
  const lngs = markers.map(({ location: { lng } }) => lng).sort((a, b) => a - b);
  return {
    lat: lats[0] + (lats[lats.length - 1] - lats[0]) / 2,
    lng: lngs[0] + (lngs[lngs.length - 1] - lngs[0]) / 2,
  };
})();

export const option: google.maps.MapOptions = {
  center,
  zoom: 13,
  styles: [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [{ hue: '#00ffbc' }],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [{ saturation: -70 }],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [{ visibility: 'simplified' }, { saturation: -60 }],
    },
  ],
};
