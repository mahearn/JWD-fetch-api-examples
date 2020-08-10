document.addEventListener('DOMContentLoaded', function () {
  // Replace ./data.json with your JSON feed
  fetch('https://ghibliapi.herokuapp.com/Films')
    .then((response) => {
      if (response.ok) {
        //if 200 response (equals OK)
        return response.json();
      } else {
        return Promise.reject({
          status: res.status,
          statusText: res.statusText,
        });
      }
    })
    .then((data) => {
      // this is where the action happens
      saveToLocalStorage(data);
      displayResults();
    })
    .catch((err) => {
      console.log('Error message: ', err.statusText);
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
