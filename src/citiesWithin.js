const citiesData = require("all-the-cities")
const distFrom = require("distance-from")
const findCities = require("./findCities")
const _ = require("lodash")

const getCitiesNearWithin = (cityName, distance, num) => {
    const cityData = findCities(cityName)
    const cityWithinArray = citiesData.filter(e => distFrom(cityData.loc.coordinates).to(e.loc.coordinates).in('km') < distance)
    const newCityArray = cityWithinArray.map(ele => {
        let newEleObj = {
            name: ele.name,
            lat: ele.loc.coordinates[0],
            lon: ele.loc.coordinates[1],
            distance: distFrom(cityData.loc.coordinates).to(ele.loc.coordinates).in('km')
        }
        return newEleObj
    })

    let sortedNewCityArray = _.sortBy(newCityArray, "distance")
    return sortedNewCityArray.slice(0, num)
}

console.log(getCitiesNearWithin("Chengdu", 1000, 10))

module.exports = getCitiesNearWithin