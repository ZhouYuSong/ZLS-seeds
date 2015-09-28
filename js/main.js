/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'jquery':'../lib/jquery.min',
        'angular': '../lib/angular/angular',
        "uiRouter": "../lib/angular/angular-ui-router",
        'oCanvas':"../lib/ocanvas-2.7.4",
        'myoCanvas':'../lib/my_oCanvas'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            deps:['jquery'],
            exports: 'angular'
        },
        'oCanvas':{
          exports:'oCanvas'
        },
        'myoCanvas':{
            exports:'myoCanvas'
        },
        'uiRouter':{
            deps: ['angular']
        }
    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
