define(
    ['jQuery', 'kendo', 'app/dataService', 'text!../../../views/test.html'],
    function($, kendo, dataService, testHtml) {
        
        var viewModel = kendo.observable({
            linkTitle: "Go home",
            paramValue: "<none>",
            checkIsSignedIn: checkIsSignedIn,
            isSignedIn: "Haven't checked yet"
    	});

        function checkIsSignedIn() {
            dataService.isSignedIn()
                .done(function(data) {
                    if (data && data.isSignedIn) {
                        viewModel.set("isSignedIn", "Yup");
                    } else {
                        viewModel.set("isSignedIn", "Nope");
                    }
                });
        }
        
    	return {
    		html: testHtml,
            
    		init: function(e) {
                
    		},
            
            beforeShow: function (e) {
                
            },
     
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