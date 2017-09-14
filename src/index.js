
/////////////////// IMPORTS ///////////////////

const pmx = require('pmx'),
      startHealthCheckServer = require('./healthCheck');

///////////////// THE MODULE //////////////////

pmx.initModule({

  // Options related to the display style on Keymetrics
  widget : {

    // Logo displayed
    logo: 'https://app.keymetrics.io/img/logo/keymetrics-300.png',

    // Module colors
    // 0 = main element
    // 1 = secondary
    // 2 = main border
    // 3 = secondary border
    theme: ['#141A1F', '#222222', '#3ff', '#3ff'],

    // Section to show / hide
    el: {
      probes  : false,
      actions : false
    },

    // Main block to show / hide
    block : {
      actions: true,
      issues:  false,
      meta:    true,

      // Custom metrics to put in BIG
      main_probes : []
    }
  }

}, function(err, config) {

  if (err) {
    console.log('Error running pm2-health-check:', err);
    return false;
  } else
    console.log('pm2-health-check is running:', config.module_conf);

  pmx.action('start', reply => {
    let { port, endpoint } = config.module_conf;
    startHealthCheckServer(port, endpoint, () => {
      console.log(`Health check server listening on port ${port} at ${endpoint}.`);
      reply({ success: true });
    });  
  });

});

