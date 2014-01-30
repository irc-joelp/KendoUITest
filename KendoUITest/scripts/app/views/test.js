define(
    ['jQuery', 'kendo', 'text!../../../views/test.html'],
    function($, kendo, testHtml) {
        
        var viewModel = kendo.observable({
            linkTitle: "Go home",
            paramValue: "<none>"
    	});
        
    	return {
    		html: testHtml,
            show: function (e) {
                var a = e.view.params.a;
                
                if (a){
                    viewModel.set("paramValue", a);
                }
            },
    		viewModel: viewModel
    	};
    }
);