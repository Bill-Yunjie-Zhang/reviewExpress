const citiesData = require("all-the-cities")

const findCityData = (name) => {
    return citiesData.find(e => e.name.toLowerCase() === name.toLowerCase())
}

module.exports = findCityData