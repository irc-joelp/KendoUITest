require.config({
    paths: {
        jQuery: "libs/jquery.min",
        kendo: "libs/kendo.mobile.min",
        text: 'libs/text',
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            deps: ["jQuery"],
            exports: "kendo"
        }
    }
});

// Expose the app module to the global scope so Kendo can access it.
var app;
 
require(
    ["jQuery", "app/app"],
    function ($, application) {
        app = application;
        
        $(document).ready(function(){
    		function onDeviceReady(){
    			app.init();
    		}

    		if (!window.device || window.tinyHippos){
    			onDeviceReady();
    		} else {
    			document.addEventListener('deviceready', onDeviceReady);
    		}
    	});
    }
);