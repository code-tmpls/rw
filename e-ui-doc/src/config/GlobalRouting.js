import React from 'react';
import { ReactRoutes } from './react/Routing.js';
import { BackendRoutes } from './backend/Routing.js';
import { GetStarted } from '@DocCore/get-started.js';

export const Routes = [
    { path:"/", component:<GetStarted /> },
    ].concat(ReactRoutes, BackendRoutes);