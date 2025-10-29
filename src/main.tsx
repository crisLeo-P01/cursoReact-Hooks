import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { TrafficLight } from './01-useState/TrafficLight';

//import { HooksApp } from "./HooksApp";

// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
// import { PokemonPage } from './03-exemple/PokemonPage';
import { FocusScreen } from './04-useRef/FocusScreen';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}

    {/* <PokemonPage /> */}

    <FocusScreen />
  </StrictMode>
);
