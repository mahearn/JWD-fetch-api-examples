document.addEventListener('DOMContentLoaded', function () {
  fetch('https://ghibliapi.herokuapp.com/Films')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // this is where the action happens
      saveToLocalStorage(data);
      displayResults();
    })
    .catch((err) => {
      // Do something for an error here
      console.log(err);
    });

  function displayResults() {
    let films = retrieveFromStorage();
    films.map(function (film) {
      document.querySelector('#results').innerHTML += `
        <div id="${film.id}" class="list-group-item">
          <h4>${film.title}</h4>
          <p>${film.description}</p>
          <p>Director: ${film.director}</p>
          <p>Producer: ${film.producer}</p>
        </div>
      `;
    });
  }

  function saveToLocalStorage(data) {
    let films = JSON.stringify(data);
    window.localStorage.setItem('Films', films);
  }

  function retrieveFromStorage() {
    let lsFilms = JSON.parse(window.localStorage.getItem('Films'));
    return lsFilms;
  }
});
