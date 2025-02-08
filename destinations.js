
let search = window.location.search
let params = new URLSearchParams(search)
console.log(params)


let id = params.get("id")

fetch(`/data/${id}.json`)
.then(response => response.json())
.then (data =>(console.log(data)))
