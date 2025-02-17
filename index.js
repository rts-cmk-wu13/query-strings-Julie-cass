let favorites = readFromLocalStoarge("favorites") || []


fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.innerHTML = data.destinations.map(destination =>
            `<figure>
            <img src="/img/${destination.image}" alt="">
            <button class="heart_btn ${favorites.includes(destination.id.toString()) ? "heart_btn--selected" : ""}" data=favid"${destination.id}">heart</button>
    <a href="destinations.html?id=${destination.id}">
   MORE</a>
   </figure>
   `).join("")

sectionElm.querySelectorAll("heart_btn").forEach(function(button){
    button.addEventListner("click", function (event){
        let currentId = event.target.dataset.favid;
        
        if(favorites.includes(currentId)){
        let newFavorites = favorites.filter(id => id != currentId)
        favorites = newFavorites
        event.target.classlist.remove("heart_btn--selected")
        console.log(favorites);
        }
    
        else{
        favorites.push(currentId)
        event.target.classlist.add("heart_btn--selected")
        console.log(favorites);
        }
        
        saveToLocalStorage("favorites")
        })
        })
        
    document.querySelector("#root").append(sectionElm)
    })
