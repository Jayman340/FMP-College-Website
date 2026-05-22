// getting elements
let searchBox = document.getElementById("searchBox");
let eraSelect = document.getElementById("era");
let typeSelect = document.getElementById("type");
let vectorSelect = document.getElementById("vector");

let cards = document.querySelectorAll(".card");


// main filter function
function filterStuff() {

    let searchValue = searchBox.value.toLowerCase();
    let eraValue = eraSelect.value;
    let typeValue = typeSelect.value;
    let vectorValue = vectorSelect.value;

    // loop through cards
    for (let i = 0; i < cards.length; i++) {

        let card = cards[i];

        let text = card.innerText.toLowerCase();

        let era = card.getAttribute("data-era");
        let type = card.getAttribute("data-type");
        let vector = card.getAttribute("data-vector");

        let showCard = true;

        // search check
        if (text.indexOf(searchValue) === -1) {
            showCard = false;
        }

        // era filter
        if (eraValue !== "all") {
            if (era !== eraValue) {
                showCard = false;
            }
        }

        // type filter
        if (typeValue !== "all") {
            if (type !== typeValue) {
                showCard = false;
            }
        }

        // vector filter
        if (vectorValue !== "all") {
            if (vector !== vectorValue) {
                showCard = false;
            }
        }

        // show or hide
        if (showCard) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}


// run this filter when user types or changes options
searchBox.addEventListener("keyup", filterStuff);
eraSelect.addEventListener("change", filterStuff);
typeSelect.addEventListener("change", filterStuff);
vectorSelect.addEventListener("change", filterStuff);


// reset button
function resetFilters() {
    searchBox.value = "";
    eraSelect.value = "all";
    typeSelect.value = "all";
    vectorSelect.value = "all";

    filterStuff();
}