//button container
const containerButton = document.querySelector('#button-searcher-container');
//button to search
const searchButton = document.querySelector('#search-btn');
//button to back
const backButton = document.querySelector('#back-btn');
//input container
const containertwo = document.querySelector('#container-two');

searchButton.addEventListener('click', function () {
    //hidding button
    searchButton.classList.add('hide');
    searchButton.classList.remove('show');
    //showing searcher form
    containertwo.classList.add('show');
    containertwo.classList.remove('hide');
});

backButton.addEventListener('click', function () {
    //hidding button
    searchButton.classList.add('show');
    searchButton.classList.remove('hide');
    //showing searcher form
    containertwo.classList.add('hide');
    containertwo.classList.remove('show');
});