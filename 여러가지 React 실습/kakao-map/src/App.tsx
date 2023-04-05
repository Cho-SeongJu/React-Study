import DynamicMap from './Map/DynamicMap';
import KakaoMapScriptLoader from './Map/KakaoMapScriptLoader';
import SearchLocation from './Map/SearchLocation';
import { useState } from 'react';
import { PlaceType } from './Map/mapTypes';
import MapMarkerController from './Map/MapMarkerController';

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelctedPlaceId] = useState('');

  return (
    <>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMarkerController
            places={places}
            selectedPlaceId={selectedPlaceId}
          />
          <SearchLocation
            onUpdatePlaces={(places) => {
              setPlaces(places);
            }}
            onSelect={(placeId) => {
              setSelctedPlaceId(placeId);
            }}
          />
        </DynamicMap>
      </KakaoMapScriptLoader>
    </>
  );
};

export default App;
