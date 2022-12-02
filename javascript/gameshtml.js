    
    function listGames(page){
      const pageSize = 20

        if (!page) page = 1

        let url = `https://api.rawg.io/api/games?key=fbc979f002af4ae3a8fe26a0f32ef032&page=${page}&${pageSize}`

        fetch(url)
        .then(res => res.json())
        .then(data => {
          let saida =''
          var cardDiv = document.getElementById("paginaGames");
          var gamesPlace = document.getElementById("gamesPlace")
          for(let i=0; i< data.results.length; i++){
            if (i%4 ==0 && i !=0){
              saida +=`</div>`
      }
              if (i%4 ==0) {
              saida += `<div class="row">`
      }
            let games= data.results[i]
            saida +=` <div class="col 12 col-sm-12 col-md-6 col-lg-3">
            <div class="card" style="width: 18r em;">
                <img src="${games.background_image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${games.name}</h5>
                  <p class="card-text">Rating: ${games.rating}</p>
                  <p class="card-text">Lançamento: ${games.released}</p>
                  <a href="detalhes.html?id=${games.id}" class="btn btn-primary">Ver Mais</a>
                </div>
              </div>
        </div>`
          }
          cardDiv.innerHTML = saida

          let navBar =`<div>`
            navBar +=`<button onclick="listGames(${page + 1})" class="btn btn-dark">Próxima</button>`
            if (page >1){
              navBar +=`<button onclick="listGames(${page - 1})" class="btn btn-dark">Anterior</button>`
            }
            
              gamesPlace.innerHTML = navBar
        })
        
    }

