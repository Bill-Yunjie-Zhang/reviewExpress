const { getSunrise, getSunset } = require('sunrise-sunset-js')
const findCities = require("./findCities")

const getSunData = (cityName) => {
    const cityData = findCities(cityName)
    let sunData = {
        sunSet: getSunset(cityData.loc.coordinates[1], cityData.loc.coordinates[0]),
        sunRise: getSunrise(cityData.loc.coordinates[1], cityData.loc.coordinates[0])
    }
    return sunData
}

module.exports = getSunData