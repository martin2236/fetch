

function main(){
const formEl = document.querySelector(".nav")

formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
     const form = e.target
    const queBuscar = form.buscador.value

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + queBuscar).then((res)=>{
    return res.json()
}).then((res2)=>{
    console.log(res2)
})
})

}
main()