import { useMemo, useLayoutEffect } from 'react';
import { PlaceType } from './mapTypes';
import { useMap } from '../hooks/useMap';

interface MapMarkerProps {
  place: PlaceType;
}

const MapMarker = (props: MapMarkerProps) => {
  const map = useMap();
  const marker = useMemo(() => {
    const marker = new kakao.maps.Marker({
      position: props.place.position,
    });

    marker.setMap(map);

    return marker;
  }, []);

  useLayoutEffect(() => {
    marker.setMap(map);

    return () => {
      marker.setMap(null);
    };
  }, []);

  return <></>;
};

export default MapMarker;
