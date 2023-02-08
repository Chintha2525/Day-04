//  Use the rest countries API URL -> https://restcountries.com/v3.1/all and display 
//  all countries name, regions, sub-region and populations.

// Coding :

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onreadystatechange = function()
{
    if (request.readyState === 4 && request.status === 200) {
             var countries = JSON.parse(request.response)
             countries.forEach(function(country) {
             console.log("Name" + " - " + country.name.common);
             console.log("Region" + " - " + country.region)
             console.log("Subregion" + " - " + country.subregion)
             console.log("Population" + " - " + country.population)
             });
}
}