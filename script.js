
//  swiper js //

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // // // 


  const SearchInput = document.getElementById("searchinput")
  const Searchbtn = document.getElementById("searchbtn")
  const Moviesgrid = document.querySelector('.movies-grid')



  APIKEY = `73de0ce6`

//  ` http://www.omdbapi.com/?apikey=73de0ce6&t="pk"`



async function getmovies (searchmovie){
        return new Promise((resolve, reject) => {
           fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${searchmovie}`)
          .then(response =>{
            if(!response.ok){
              throw new Error('fetch to load api')
            }
              return response.json()
          })
             .then(data => resolve(data))
             .catch(error => reject(error))

        })
}


Searchbtn.addEventListener('click', async()=>{
 
  try{
        const searchmovie = SearchInput.value.trim();
        const data = await getmovies(searchmovie);
        let newdiv = document.createElement('grids')
        Moviesgrid.appendChild(newdiv)
        newdiv.innerHTML = `
        <div class = "Movie-card">

         <img src=${data.Poster} alt="">
         <div class = "headings">
          <h2>${data.Title}</h2>
         <p> Year: ${data.Year}</p>
         <span> Released: ${data.Released}</span>
         <p>${data.Genre}</p>
         <p id="main-heading">${data.Plot}</p>

         </div>
        

        </div>`
          
      
    
        


  }catch(error){
    console.error(`network was not good:`,error)
  }
   
})








