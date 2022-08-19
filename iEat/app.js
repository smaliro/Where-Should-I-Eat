const searchButton = document.getElementById('search-btn');
const restaurant = document.querySelector('suggest-box')

// event listeners

searchButton.addEventListener('click', getRestaurant);

//get restaurant by location

async function getRestaurant() {
    let searchInputText = document.getElementById('input-box').value.trim();

    searchButton.classList.add("searching");
    searchButton.innerText = "Searching...";

    fetch('https://wyre-data.p.rapidapi.com/restaurants/town/clowne',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a59e7a4c71mshe4d9359a6e0987ap1ffc57jsn97bbff5ae3a0',
                'X-RapidAPI-Host': 'wyre-data.p.rapidapi.com',
            }
        }
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            restaurant.innerText = data.BusinessName;
            searchButton.innerText = "Search";
            searchButton.classList.remove("searching");
        })
        ;
}
