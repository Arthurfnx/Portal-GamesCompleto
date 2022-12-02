////////////////////////////////////////////// FUNÇÃO QUE GERA OS CARDS NA MAINPAGE//////////////////////////////////////////////////////////////////////////////////////////////
function getGames (){
var request = new XMLHttpRequest()
request.open('GET', 'https://api.rawg.io/api/games?key=fbc979f002af4ae3a8fe26a0f32ef032', true)
request.onload =function() {
  var data = JSON.parse(this.response)
    var games = data.results   


  if (request.status >= 200 && request.status < 400) {
 
            var html = ''
            var cardDiv = document.getElementById("cardsList");
            for (var i = 0; i < 12; i++){
                if (i%4 ==0 && i !=0){
                    html +=`</div>`
            }
                    if (i%4 ==0) {
                    html+= `<div class="row">`
            }
                    
                   html+= ` <div class="col 12 col-sm-12 col-md-6 col-lg-3">
                    <div class="card" style="width: 18r em;">
                        <img src="${games[i].background_image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${games[i].name}</h5>
                          <p class="card-text">Rating: ${games[i].rating}</p>
                          <p class="card-text">Lançamento: ${games[i].released}</p>
                          <a href="detalhes.html?id=${games[i].id}" class="btn btn-primary">Ver mais</a>
                        </div>
                      </div>
                </div>`
        
            }   
            html +=`</div>`
            cardDiv.innerHTML = html;

  } else {
    console.log('error')
  }
}

// Send request
request.send() 
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////FUNÇÃO PESQUISA//////////////////////////////////////////////////


function getPesquisa (){

    var request = new XMLHttpRequest()
    
    const value = decodeURI(window.location.href.split('?q=')[1]);

    var url ='https://api.rawg.io/api/games?key=fbc979f002af4ae3a8fe26a0f32ef032' + '&search=' + value +'&search_precise=true'
    request.open('GET', url, true)
    request.onload =function() {
      var data = JSON.parse(this.response)
        var games = data.results   
    
    
      if (request.status >= 200 && request.status < 400) {

                var html = ''
                var cardDiv = document.getElementById("cardsList");
                for (var i = 0; i < 20; i++){
                    if (i%4 ==0 && i !=0){
                        html +=`</div>`
                }
                        if (i%4 ==0) {
                        html+= `<div class="row">`
                }
                          
                       html+= ` <div class="col 12 col-sm-12 col-md-6 col-lg-3">
                        <div class="card" style="width: 18r em;">
                            <img src="${games[i].background_image}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${games[i].name}</h5>
                              <p class="card-text">Rating: ${games[i].rating}</p>
                              <p class="card-text">Lançamento: ${games[i].released}</p>
                              <a href="detalhes.html?id=${games[i].id}" class="btn btn-primary">Ver mais</a>
                            </div>
                          </div>
                    </div>`
            
                }   
                html +=`</div>`
                cardDiv.innerHTML = html;
            

      } else {
        console.log('error')
      }
    }
    
    // Send request
    request.send() 
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////FUNÇÃO DETALHES///////////////////////////////////////////////////////
    function exibeDetalheGame (){
      var request = new XMLHttpRequest()
    
    const value = decodeURI(window.location.href.split('?id=')[1]);

    var url ='https://api.rawg.io/api/games/' + value + '?key=fbc979f002af4ae3a8fe26a0f32ef032'
    request.open('GET', url, true)
    request.onload =function() {
      var data = JSON.parse(this.response)
        
    
      if (request.status >= 200 && request.status < 400) {
                var html = ''
                var cardDiv = document.getElementById("infosDetalhe");
                            
 
                    html+=`<div class=" row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <img src ="${data.background_image}" class="img-fluid">
                
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="cardsdetalhe">
                        <h1>${data.name}</h1>
                        <p>Lançamento: ${data.released}</p>
                        <p>Rating: ${data.rating}</p>
                        <p>Link para o site oficial: <a href=" ${data.website}">${data.website}</a></p>
                        <p>Generos:${data.genres}</p>
                        <h2>Sobre o Jogo</h2>
                        <p>${data.description}</p>
                       
                        </div>
                    </div>
                </div>`
            
                }   
                html +=`</div>`
                cardDiv.innerHTML = html;
            
      
      
    }
    
    // Send request
    request.send() 
    }


/////////////////////////////////////////FUNÇÃO DA PAGINA DE LOJAS/////////////////////////////////////////////////
function getLojas (){
  var request = new XMLHttpRequest()
  
  request.open('GET', 'https://api.rawg.io/api/stores?key=fbc979f002af4ae3a8fe26a0f32ef032', true)
  request.onload =function() {
    var data = JSON.parse(this.response)
      var games = data.results   
  
  
    if (request.status >= 200 && request.status < 400) {
     
              var html = ''
              var cardDiv = document.getElementById("cardslojaList");
              for (var i = 0; i < 10; i++){
                  if (i%4 ==0 && i !=0){
                      html +=`</div>`
              }
                      if (i%4 ==0) {
                      html+= `<div class="row">`
              }
                        
                     html+= ` <div class="col 12 col-sm-12 col-md-6 col-lg-3">
                      <div class="card" style="width: 18r em;">
                          <img src="${games[i].image_background}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${games[i].name}</h5>
                            <a href="lojadetalhes.html?id=${games[i].id}" class="btn btn-primary">Detalhes da loja!</a>
                          </div>
                        </div>
                  </div>`
          
              }   
              html +=`</div>`
              cardDiv.innerHTML = html;
          
 
    } else {
      console.log('error')
    }
  }
  
  // Send request
  request.send() 
  }


////////////////////////////////////////////////////FUNÇÃO EXIBIR DETALHES DAS LOJAS///////////////////////////
function exibeDetalheLoja (){
      var request = new XMLHttpRequest()
    
      const value = decodeURI(window.location.href.split('?id=')[1]);
  
      var url ='https://api.rawg.io/api/stores/' + value + '?key=fbc979f002af4ae3a8fe26a0f32ef032'
      request.open('GET', url, true)
      request.onload =function() {
        var data = JSON.parse(this.response)
          
      
        if (request.status >= 200 && request.status < 400) {
                  var html = ''
                  var cardDiv = document.getElementById("infosDetalhe");


                      html+=`<div class=" row">
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6 ">
                          <img src ="${data.image_background}" class="img-fluid">
                  
                      </div>
                      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                          <div class="cardsdetalhe">
                          <h1>${data.name}</h1>                      
                          <p>Site oficial da loja:</p>
                          <p>${data.domain}</p>
                          <h2>Sobre a loja</h2>
                          <p>${data.description}</p>
                         
                          </div>
                      </div>
                  </div>`
              
                  }   
                  html +=`</div>`
                  cardDiv.innerHTML = html;
              
        
        
      }
      
      // Send request
      request.send() 
      }
   ///////////////////////////////////// FUNÇÃO ONLOAD///////////////////////////////////////
   function calltwoApis(){
        getGames()
        getLojas()
   }
   
   