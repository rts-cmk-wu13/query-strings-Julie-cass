let favorites = readFromLocalStorage("favorites")
if (!favorites) favorites = []


fetch("/data/destinations.json")
.then(response => response.json())

.then(data => {
let sectionElm = document.createElement("section")
sectionElm.innerHTML = data.destinations.map(destination =>
    ` 
    <figure class="card_box">
<img class="card_image" src="/img/${destination.image}" alt="">
<div>
<button class="heart_btn ${favorites.includes(destination.id.toString()) ? "heart_btn--selected" : ""}" data=favid"${destination.id}"><i class="fa-solid fa-heart"></i></button>
<a class="card_link" href="destinations.html?id=${destination.id}">MORE</a>
</div>
   </figure>
   `).join("")


        sectionElm.querySelectorAll("heart_btn").forEach(function (button) {
            button.addEventListner("click", function (event) {
                let currentId = event.target.dataset.favid;

                if (favorites.includes(currentId)) {

                    let newFavorites = favorites.filter(id => id != currentId)
                    favorites = newFavorites

                    event.target.classlist.remove("heart_btn--selected")
                    console.log(favorites);
                }else{
                    favorites.push(currentId)
                    event.target.classlist.add("heart_btn--selected")
                    console.log(favorites);
                }
saveToLocalStorage("favorites", favorites)
            })
        })
        document.querySelector("#root").append(sectionElm)
    })
