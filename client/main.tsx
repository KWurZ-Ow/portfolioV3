import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '../imports/ui/App';

Meteor.startup(() => {
  render(<MantineProvider withGlobalStyles withNormalizeCSS><NotificationsProvider position="top-center"><App/></NotificationsProvider></MantineProvider>, document.getElementById('react-target'));
});
