if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log('position', position);

    }, function (error) {
        console.log(error);

    }, {
        enableHighAccuracy: false,
        timeout: Infinity,
        maximumAge: 0
    })

}