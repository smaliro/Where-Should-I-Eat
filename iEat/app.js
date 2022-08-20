const searchButton = document.getElementById('search-btn');
const restaurant = document.getElementById('suggest-box')
// .innerHTML = Math.random();
// const restaurant = document.querySelector('suggest-box');

// event listeners

searchButton.addEventListener('click', getRestaurant);

//get restaurant by location
async function getRestaurant() {
    let searchInputText = document.getElementById('input-box').value.trim();

    searchButton.classList.add("searching");
    searchButton.innerText = "Searching...";

    fetch(`https://wyre-data.p.rapidapi.com/restaurants/town/${searchInputText}`,
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
            // console.log(data.length);
            // console.log(Math.floor(Math.random() * data.length));
            console.log(data);
            restaurant.innerText = data[Math.floor(Math.random() * data.length)].BusinessName;
            searchButton.innerText = "Search";
            searchButton.classList.remove("searching");
        })
        .catch(function (err) {
            console.warn('Something went wrong.', err);
        })
        ;
}
