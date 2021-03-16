
function getRepo(searchTerm){
    fetch(`https://api.github.com/users/${searchTerm}/repos`)
    .then(response => response.json())
    .then(responseJson => 
        displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson){
    console.log(responseJson);

    $('#results-list').empty();
    let i = 0;
    responseJson.forEach(item => {
         $('#results-list').append(`<li>Name: ${item.name}<br><a href="${item.html_url}">Link to Repo</a></li>`)
    })


}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $('#js-search-term').val();
      getRepo(searchTerm);
    });
  }

  $(watchForm);