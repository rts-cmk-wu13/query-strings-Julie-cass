
let search = window.location.search
let params = new URLSearchParams(search)
console.log(params)


let id = params.get("id")

fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => (console.log(data)))
    
    /*   .then(data => {
          let sectionElm = document.createElement("section")
          sectionElm.innerHTML = data.destinations.map(destination =>
              ` 
                      <img src="/img/${destination.image}" alt="">

                      <p>${destination.destination}</p>
              <h1>${destination.title}</h1>
              <h2>${destination.subtitle}</h2>
            <p>${destination.text}</p>


  

          `).join("")
  
             document.querySelector("#dest").append(sectionElm)
  
  
          }) */