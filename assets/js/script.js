function getPlantData(searchTerm) {
    var apiUrl = `https://trefle.io/api/plants?q=${searchTerm}&token=N0pDemhzb1hpaFR3S1dmL0xscURSZz09`;
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
            console.log(response);
            }
            else {
                console.log(`Errpr: ${response.statusText}`);
            }
        })
        .catch(function(error) {
            console.log("Unable to connect to Trefle.io");
        });
}

getPlantData("daisy");