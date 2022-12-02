function getGameshtml(){
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()
    
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.rawg.io/api/games?key=fbc979f002af4ae3a8fe26a0f32ef032', true)
    request.onload =function() {
      var data = JSON.parse(this.response)
        var games = data.results   
    
    
      if (request.status >= 200 && request.status < 400) {
        //data.forEach(game => {
                var html = ''
                var cardDiv = document.getElementById("paginaGames");
                for (var i = 0; i < 20; i++){
                    if (i%4 ==0 && i !=0){
                        html +=`</div>`
                }
                        if (i%4 ==0) {
                        html+= `<div class="row">`
                }
                        console.log(games[i].name)
    
                       html+= ` <div class="col 12 col-sm-12 col-md-6 col-lg-3">
                        <div class="card" style="width: 18r em;">
                            <img src="${games[i].background_image}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${games[i].name}</h5>
                              <p class="card-text">Rating: ${games[i].rating}</p>
                              <p class="card-text">Lançamento: ${games[i].released}</p>
                              <a href="detalhes.html?id=${games[i].id}" class="btn btn-primary">Ver Mais</a>
                            </div>
                          </div>
                    </div>`
            
                }   
                html +=`</div>`
                cardDiv.innerHTML = html;
            
      //  })
      } else {
        console.log('error')
      }
    }
    
    // Send request
    request.send() 
    }
    