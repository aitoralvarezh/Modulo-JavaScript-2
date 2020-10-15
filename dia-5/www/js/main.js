//POSICION FIJA

/* const success = pos => {
    console.log(pos.coords);
}

const error = err => {
    console.warn(err.code);
}

navigator.geolocation.getCurrentPosition(success, Error) */


//POSICION 'REAL TIME'

const success = pos => {
    console.log(pos.coords)
    console.log('de camino');
    if

}

const error = err => {
    console.warn(err.code);
}

navigator.geolocation.watchPosition(success, error)