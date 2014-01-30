define(
    ['app/config'],
    function(config) {

        function getUrl(path) {
            return config.baseUrl + path;
        }
        
        var isSignedIn = function() {
            
            var options = {
                url: getUrl("Account/IsSignedIn"),
                type: "GET",
                contentType: "application/json"
            };
            
            return $.ajax(options);
        };
        
        var signIn = function(requestData) {
            var options = {
                url: getUrl("Account/Signin"),
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(requestData)
            };
            
            return $.ajax(options);
        };
        
        var signOut = function() {
            var options = {
                url: getUrl("Account/Signout"),
                type: "GET",
                contentType: "application/json"
            };
            
            return $.ajax(options);
        };
        
        var getBookings = function(bookingsObservable) {
            bookingsObservable([]);
            
            var options = {
                url: getUrl("bookings"),
                type: "GET",
                contentType: "application/json"
            };
            
            return $.ajax(options)
                    .done(querySucceeded);
            
            function querySucceeded(data) {
                bookingsObservable(data);
            }
        };
                
        function getBooking(id) {
            var options = {
                url: getUrl("bookings/" + id),
                type: "GET",
                contentType: "application/json"
            };
            
            return $.ajax(options);
        }
        
        var dataService = {
            isSignedIn: isSignedIn,
            signIn: signIn,
            signOut: signOut,
            getBookings: getBookings,
            getBooking: getBooking
        };
        
        return dataService;
    }
);