import { withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";

const MapWithAMarker = withGoogleMap(props => {
  let pathCoOrdinates = props?.props?.pathCoordinates
    ? props?.props?.pathCoordinates
    : [
        { lat: 18.2949165, lng: 83.89380179999999 },
        { lat: 18.5204303, lng: 73.8567437 }
      ];
  let bounds = new window.google.maps.LatLngBounds();
  for (let i = 0; i < pathCoOrdinates?.length; i++) {
    bounds.extend(pathCoOrdinates?.[i]);
  }
  const defaultMapOptions = {
    fullscreenControl: false,
    controlSize: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControlOptions: false,
    zoomControl: false
  };
  return (
    <GoogleMap
      ref={map => map && map.fitBounds(bounds)}
      options={defaultMapOptions}
    >
      <Polyline
        path={pathCoOrdinates}
        geodesic={true}
        options={{
          strokeColor: "#595a9b",
          strokeOpacity: 0.75,
          strokeWeight: 6,
          icons: [{ color: "#595a9b" }]
        }}
      />
      <Marker label={"A"} position={pathCoOrdinates[0]} />
      <Marker label={"B"} position={pathCoOrdinates[1]} />
    </GoogleMap>
  );
});

export default MapWithAMarker;
