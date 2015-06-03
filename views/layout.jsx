import React from 'react';

const Layout = React.createClass({
  render() {
    return (
      <html lang="es-AR">
        <head>
          <meta charser="utf-8" />
          <title>React-TODO</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto" />
        </head>
        <body>
          <main role="application" id="app">
            { this.props.children }
          </main>

          <script src="/assets/js/app.js"></script>
        </body>
      </html>
    );
  }
});

export default Layout;
