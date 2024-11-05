import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import "../../../styles/main.scss";
import "../../../styles/scripts/loadingscreen.scss";
import ControlPanel from './ControlPanel';
import FunFact from './FunFact';
import Spinner from "./../../elements/Spinner";
import logo from '../../../images/logo.png';
import music from '../../../music/loadingscreen.mp3';
import { playMusic } from '../../../functions/Audio';

function useBackgroundImageRotation(intervalDuration, images) {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [images.length, intervalDuration]);

  return bgIndex;
}

const LoadingScreen = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const updateDots = () => {
      setDots(prevState => (prevState.length >= 3) ? "" : (prevState + "."));
      setTimeout(updateDots, 900);
    };

    const timeoutId = setTimeout(updateDots, 900);

    return () => clearTimeout(timeoutId); 
  }, []);
  

  const backgrounds = useMemo(() => {
    const imageContext = require.context('./../../../images/backgrounds', false, /\.jpg$/);
    return imageContext.keys().map(imageContext);
  }, []);

  const bgIndex = useBackgroundImageRotation(3600 * 2, backgrounds);
  const musicRef = useRef(null);

  const handleMouseMove =() => {
    playMusic(musicRef);
  };

  useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="loadingScreen"       
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      <FunFact />
      <Spinner />
      <img src={logo} alt="Logo" />
      <span className='loadingText'>Trwa ładowanie gry<span id="dots">{dots}</span></span>
      <audio ref={musicRef} src={music} loop />
      <ControlPanel musicRef={musicRef} />
    </div>
  );
};

export default LoadingScreen;
