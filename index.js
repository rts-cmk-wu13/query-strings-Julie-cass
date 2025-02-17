

fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.innerHTML = data.destinations.map(destination =>
            `<div><img src="/img/${destination.image}" alt="">
    <a href="destinations.html?id=${destination.id}">
   MORE</a></div>`)
            .join("")


        document.querySelector("#root").append(sectionElm)
    })
