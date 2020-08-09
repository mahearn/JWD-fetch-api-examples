document.addEventListener('DOMContentLoaded', function () {
  // Replace ./data.json with your JSON feed
  fetch('https://ghibliapi.herokuapp.com/Films')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayResults(data);
      saveToStorage(data);
    })
    .catch((err) => {
      // Do something for an error here
      console.log(err);
    });

  function displayResults(data) {
    //console.log(data);
    data.map(function (film) {
      document.querySelector(
        '#results'
      ).innerHTML += `<div>${film.title}</div>`;
    });
  }

  function saveToStorage(data) {
    console.log(data);
    let films = JSON.stringify(data);
    window.localStorage.setItem('Films', films);
  }

  function retrieveFromStorage() {
    //use getItem and JSON.parse
  }
});
