var WifiInfo = {
    createEvent: function(successCallback, errorCallback) {
        cordova.exec (
            successCallback,
            errorCallback,
            'WifiInfoPlugin',
            null,
            []
        );
    }
}

module.exports = calendar;
