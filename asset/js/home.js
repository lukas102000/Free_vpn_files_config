const username = window.localStorage.getItem("username")
const password = window.localStorage.getItem("password")

window.addEventListener('load',()=>{
    setInterval(()=>{
        Slidders()
    }, 5000)
})


// #################################################
let imgs = ["./asset/images/banner-3.png", "./asset/images/banner-2.png", "./asset/images/banner.png"]
let i = 0
let box = document.querySelector('.baner-image')
function Slidders (){
    box.style.backgroundImage = `url(${imgs[i]})`
    if(i <= imgs.length -2){
        i += 1
        //box.style.backgroundImage = `url(${imgs[i]})`
    }else{
        i = 0
    }
}

function searchers (e){
    let box = document.querySelector(".main-container")
    let menu  = box.querySelectorAll("article")
    for(let i=0; i< menu.length; i++){
        let small = menu.item(i).querySelectorAll("small")
        for(let x=0; x < small.length; x++){
            
            if(small.item(x).innerHTML.toLowerCase().indexOf(e.value.toLowerCase() ) > -1){
                menu.item(i).style.display = "block"
            }else{
                let strong = menu.item(i).querySelectorAll("strong")
            for(let x=0; x < strong.length; x++){
                
                if(strong.item(x).innerHTML.toLowerCase().indexOf(e.value.toLowerCase() ) > -1){
                    menu.item(i).style.display = "block"
                }else{
                    menu.item(i).style.display = "none"
                }
            }
            
        }
        }
    }

}
function Profils (){
    window.location.href = "./pages/user/user.html"
}
// #################################################
function getFiles (e){
    if( username=== null && password === null){
        window.location.href = "./pages/sigin.html"
    }
    else{
        getFilesDown(e)
    }
}

const getFilesDown = (e)=>{
    document.querySelector(".getFiles").style.display = "flex"
    
    setTimeout(()=>{
        document.querySelector(".spinn").style.display = "none"
        document.querySelector(".texts").innerHTML = "Arquivo atualizado"
        document.querySelector(".donwloads").style.display = "flex"

        let a = document.querySelector(".downs")
        a.setAttribute("href", e.id)

    }, 2000)
}
function closeAll (){
    document.querySelector(".getFiles").style.display = "none"
    document.querySelector(".spinn").style.display = "flex"
    document.querySelector(".texts").innerHTML = "Atualizando o arquivo"
    document.querySelector(".donwloads").style.display = "none"
}

