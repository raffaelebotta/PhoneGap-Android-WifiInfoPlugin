var WifiInfo = {
    pippo: function(successCallback, errorCallback) {
        cordova.exec (
            successCallback,
            errorCallback,
            'WifiInfoPlugin',
            null,
            []
        );
    }
}

module.exports = WifiInfo;
