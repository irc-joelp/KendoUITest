define(
    ['jQuery', 'kendo', 'text!../../../views/home.html'],
    function($, kendo, homeHtml) {
        
        var viewModel = kendo.observable({

    	});

    	return {
    		html: homeHtml,
    		viewModel: viewModel
    	};
    }
);