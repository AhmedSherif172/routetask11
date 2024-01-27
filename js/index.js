let response=0
async function getDayInfo(location){
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4cff2a6f986749fe85f133857242601&q=${location}&days=3`)
    response = await response.json()
    console.log(response);

    getDegrees(response)
    getCityName(response)
    getDaysName(response)
    getDate(response)
    getConditions(response)
}
getDayInfo("cairo")

let searchbar = document.querySelector("#search")
searchbar.addEventListener('keyup', function(e){
    getDayInfo(e.target.value)
})



function getDegrees(response){
    document.querySelector("#degree").innerText=`${response.current.temp_c}°C`

    document.querySelector("#maxtemp1").innerText=`${response.forecast.forecastday[1].day.maxtemp_c}°C`
    document.querySelector("#mintemp1").innerText=`${response.forecast.forecastday[1].day.mintemp_c}°C`

    document.querySelector("#maxtemp2").innerText=`${response.forecast.forecastday[2].day.maxtemp_c}°C`
    document.querySelector("#mintemp2").innerText=`${response.forecast.forecastday[2].day.mintemp_c}°C`
}
function getCityName(response){
    console.log(response.location.name);
    document.querySelector("#city").innerText=response.location.name
}
function getDaysName(response){
    console.log(response.forecast.forecastday[0].date);

    const d = new Date(response.forecast.forecastday[0].date)
    const day = d.getDay()

    const d2 = new Date(response.forecast.forecastday[1].date)
    const day2 = d2.getDay()

    const d3 = new Date(response.forecast.forecastday[2].date)
    const day3 = d3.getDay()

    let weekDays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    console.log(weekDays[day]);

    document.querySelector("#thisdayname").innerText=weekDays[day]
    document.querySelector("#nextdayname").innerText=weekDays[day2]
    document.querySelector("#afternextdayname").innerText=weekDays[day3]

}
function getDate(response){
    console.log(response.forecast.forecastday[0].date);
    const d = new Date(response.forecast.forecastday[0].date)

    const day = d.getDate()
    const month = d.getMonth()

    let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let date= day+months[month]
    document.querySelector("#daydate").innerText=date
}
function getConditions(response){
    const d = new Date()
    const hour = d.getHours()

    document.querySelector("#condition").innerText=response.forecast.forecastday[0].hour[hour].condition.text
    document.querySelector("#conditionicon").setAttribute("src" , `https:${response.forecast.forecastday[0].hour[hour].condition.icon}`)
    
    document.querySelector("#condition2").innerText=response.forecast.forecastday[1].day.condition.text
    document.querySelector("#conditionicon2").setAttribute("src" , `https:${response.forecast.forecastday[1].day.condition.icon}`)
    
    document.querySelector("#condition3").innerText=response.forecast.forecastday[2].day.condition.text
    document.querySelector("#conditionicon3").setAttribute("src" , `https:${response.forecast.forecastday[2].day.condition.icon}`)

}













