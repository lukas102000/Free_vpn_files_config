const username = window.localStorage.getItem("username")
const password = window.localStorage.getItem("password")
const number = window.localStorage.getItem("number")

function validationSenha (e){
    let senha1 = document.querySelector("#senha1").value
    if(e.value === senha1){
        document.querySelectorAll(".bi-lock")[1].style.color = "green"
    }else{
        document.querySelectorAll(".bi-lock")[1].style.color = "red"
    }
}
function userAuth (){
    document.querySelector("#forms").addEventListener("submit", (e)=>{
        e.preventDefault()

        let name = document.querySelector("#name").value
        let senha = document.querySelector("#senha1").value
        if(name === "" && senha.length < 3){
            console.log("erro ao criar usuario...")
       }
       else{
        
            window.localStorage.setItem("username", name)
            window.localStorage.setItem("number", senha)

            setTimeout(() =>{ window.location.href = "../index.html"}, 2000)
       }
    })
   
}
