// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Tab } from "./Tab";
import { MeetingConfig } from './MeetingConfig';
import { MeetingSample } from './MeetingSample';
import { Transcript } from '../pages/Transcript';
/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {
  // Initialize the Microsoft Teams SDK
  microsoftTeams.app.initialize().then(() => {
    if (window.location.href.includes('/meeting') && microsoftTeams.pages.config.isSupported()){
    microsoftTeams.pages.config.registerOnSaveHandler((saveEvent) => {
      microsoftTeams.pages.config.setConfig({
        entityId: 'caption-tab',
        contentUrl: window.location.origin + "/meeting/sample",
        suggestedDisplayName: "Meeting Test Tab",
    });
      saveEvent.notifySuccess();
  });
    }
    console.log('App initialized');
  });

  // Display the app home page hosted in Teams
  return (
    <Router>
      <Route exact path="/tab" component={Tab} />
      <Route exact path="/transcript" component={Transcript} />
      <Route exact path="/meeting" component={MeetingConfig} />
      <Route exact path="/meeting/sample" component={MeetingSample} />
    </Router>
  );
}

export default App;
