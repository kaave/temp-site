export interface Location {
  lat: number;
  lng: number;
}

export interface Marker {
  location: Location;
  name: string;
  date: Date;
  category: string;
}

// export interface MapStyle {
//   featureType: string;
//   elementType: string;
//   stylers: Array<{ [key: string]: number | string }>;
// }

// export interface MapOption {
//   center: Location;
//   zoom: number;
//   styles: MapStyle[];
// }
