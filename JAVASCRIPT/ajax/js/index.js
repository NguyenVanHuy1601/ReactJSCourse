let inputElem = document.querySelector("div .js-input-total");
let btnElem = document.querySelector(".js-btn-load");



// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//         // document.getElementById("demo").innerHTML = this.responseText;
//         const data = JSON.parse(this.response);
//         console.log("data: ", data.Global.TotalConfirmed);
//         btnElem.addEventListener("click", () => {
//             inputElem.value = data.Global.TotalConfirmed;

//         })

//     }
//     xhttp.open("GET", "https://api.covid19api.com/summary");
//     xhttp.send();
// }
// loadDoc();

// Fake Api
btnElem.addEventListener("click", async() => {
    // // getCovidInfoApi()
    // //     .then((data) => {
    // //         inputElem.value = data.Global.TotalConfirmed;
    // //     })
    // await getCovidInfoApi()
    try {
        let data = await getCovidInfoApi();
        inputElem.value = data.Global.TotalConfirmed;
        console.log("Main thread");
    } catch (e) {
        console.log(e);
    }
    /// async await

})

function getCovidInfoApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Don't get Api");
            reject({
                Global: {
                    TotalConfirmed: 100000,
                }
            })
        }, 500)
    })
}