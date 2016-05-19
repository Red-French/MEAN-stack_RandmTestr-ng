(function() {
'use strict';

  const express = require('express');  // node framework
  const app = express();  // start express

  const colors = require('colors');  // colors for server log messages


  const port = process.env.PORT || 3000;  // dynamic port

  app.use(express.static('public'));  // for static files (html)

  app.listen(port, () => {
    console.log(colors.green.bold(`Server running on port: ${port}`));
  });
})();
