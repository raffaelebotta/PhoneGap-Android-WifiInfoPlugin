var WifiInfo = {
    get: function(success, fail) {
        cordova.exec (
            success,
            success,
            'WifiInfoPlugin',
            null,
            []
        );
    }
};

module.exports = WifiInfo;
