import { MantineProvider } from '@mantine/core';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  render(<MantineProvider withGlobalStyles withNormalizeCSS><App/></MantineProvider>, document.getElementById('react-target'));
});
