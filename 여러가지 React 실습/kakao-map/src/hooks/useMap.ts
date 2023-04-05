import { createContext, useContext } from 'react';

export const KaKaoMapContext = createContext<kakao.maps.Map | null>(null);

export const useMap = () => {
  const kakaoMap = useContext(KaKaoMapContext);

  if (!kakaoMap) {
    throw new Error('kakaoMap not foutn');
  }

  return kakaoMap;
};
