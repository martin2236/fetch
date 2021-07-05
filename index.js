const fragment = document.createDocumentFragment()

function mostrarResultados(res,total){
    console.log(total)
    const busquedas = document.querySelector(".busquedas")
    const contenedor = document.querySelector(".contenedor")
    contenedor.innerHTML=""
    const template = document.querySelector(".template").content
     res.forEach(item=>{
        template.querySelector("h4").textContent = item.title
        template.querySelectorAll("span")[1].textContent =item.price
        template.querySelector("span").textContent = item.sold_quantity
        template.querySelector("img").setAttribute("src",item.thumbnail)
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
   contenedor.appendChild(fragment)
   busquedas.textContent = total
}


function main(){
const formEl = document.querySelector(".nav")

formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
     const form = e.target
    const queBuscar = form.buscador.value

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + queBuscar).then((res)=>{
    return res.json()
}).then((data)=>{
    
    mostrarResultados(data.results,data.paging.total)
})
})





}
main()