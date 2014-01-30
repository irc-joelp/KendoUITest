define(
    ['jQuery', 'kendo', 'text!../../../views/home.html'],
    function($, kendo, homeHtml) {
        
        var viewModel = kendo.observable({

    	});

    	return {
    		html: homeHtml,
            
    		init: function(event) {

    		},
            
            beforeShow: function (beforeShowEvt) {
                
            },
     
            show: function (showEvt) {
                
            },
            
    		viewModel: viewModel
    	};
    }
);