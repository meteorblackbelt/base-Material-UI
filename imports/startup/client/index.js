import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import App from '../../ui/layouts/App.js';

Bert.defaults.style = 'growl-top-right';

Meteor.startup(() => {
  document.title = Meteor.settings.public.appName;
  render(<App />, document.getElementById('react-root'));
});
