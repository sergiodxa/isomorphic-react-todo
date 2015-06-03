import Client from 'react-engine/lib/client'

import App from './views/app.jsx';

const options = {
  viewResolver(viewName) {
    return require('./views/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options, (data) => console.log(data));
});
