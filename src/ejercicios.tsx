import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Contador } from './ejerciciosUseState/Contador';
import {ToggleText} from './ejerciciosUseState/ToggleText'
import { InputName } from './ejerciciosUseState/InputName';
import { TaskList } from './ejerciciosUseState/TaskList';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-gradient flex flex-col">
      <Contador />
      <ToggleText />
      <InputName />
      <TaskList />
    </div>

  </StrictMode>
);
