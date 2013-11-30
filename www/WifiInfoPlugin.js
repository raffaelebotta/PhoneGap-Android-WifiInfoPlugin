alert('111');

var WifiInfo = {
    get: function(success, error) {
        cordova.exec (
            success,
            error,
            'WifiInfoPlugin',
            null,
            []
        );
    }
}

alert('222');

module.exports = WifiInfo;

alert('333');
