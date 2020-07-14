// Eliminate CORS issues
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

function getPlantData(searchTerm) {
    var apiUrl = `https://trefle.io/api/plants?q=${searchTerm}&token=N0pDemhzb1hpaFR3S1dmL0xscURSZz09`;
    $.get(apiUrl)
        .then(function(response) {
            if (response.length > 0) {
            console.log(response);
            }
            else {
                console.log(`Error: ${response}`);
            }
        })
        .catch(function(error) {
            console.log("Unable to connect to Trefle.io");
        });
}

getPlantData("daisy");