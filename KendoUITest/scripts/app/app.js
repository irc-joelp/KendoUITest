define(
    function(require){
        var kendoApp,
    	    $ = require('jQuery'),
    	    kendo = require('kendo'),
    	    kendoLayouts = {
    		    main: require('app/views/layout')
    	    },
    	    kendoViews = {
    		    home: require('app/views/home'),
    		    test: require('app/views/test')
    	    };
     
        // Loop through all kendo layouts and views and spit their HTML into the BODY
    	function onBeforeInit() {
    		var i,
                item,
                objects = [kendoLayouts, kendoViews],
                htmlBuffer = [];

    		for (i=0; i<objects.length; i++) {
    			for (item in objects[i]) {
    				if (objects[i].hasOwnProperty(item) && objects[i][item].hasOwnProperty('html')) {
    					htmlBuffer.push(objects[i][item].html);
    				}
    			}
    		}

    		$(document.body).prepend(htmlBuffer.join(''));
    	}
            
        return {
            init: function () {
                onBeforeInit();
                
                kendoApp = new kendo.mobile.Application(document.body, {
                    transition: "slide",
                    skin: "flat",
                    initial: 'home-view',
                    layout: 'app-layout'
                });
            },
            layouts: kendoLayouts,
            views: kendoViews
        }
    }
);