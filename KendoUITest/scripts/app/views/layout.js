define(
    ['jQuery', 'kendo', 'text!../../../views/layout.html'],
    function($, kendo, layoutHtml) {
        
        var viewModel = kendo.observable({

    	});

    	return {
    		html: layoutHtml,
    		viewModel: viewModel
    	};
    }
);