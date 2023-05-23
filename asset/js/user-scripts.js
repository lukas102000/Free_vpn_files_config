function setProfilsImg (e){
    let img = document.querySelector(".user-img")
    let fileUrl = URL.createObjectURL(e.files[0])
    img.style.backgroundImage = `url("${fileUrl}")`
    document.querySelector(".modal-chane-foto").style.display = 'none'
}
function OpensetProfilsImg (){
    document.querySelector(".modal-chane-foto").style.display = 'flex'
}
function OpensetProfilsImg2 (){
    document.querySelector(".modal-chane-foto").style.display = 'flex'
}

function getDatas (){
    //const datas = apis.get("/")
}