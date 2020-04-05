import React from 'react';
import { withKnobs, radios } from "@storybook/addon-knobs";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import Alert from './Alert';
export default { title: 'Alert', decorators: [withKnobs] };

export const ThemedValue = () => {
    const label = 'theme';
    const options = {
     primary: 'primary',
     secondary: 'secondary',
     danger: 'danger',
    };
    const defaultValue = 'primary';
    const groupId = 'GROUP-ID1';
    
    const value = radios(label, options, defaultValue, groupId);

    return <Alert theme={value}>Alert - theme {value}</Alert>;
  };
