function cambiarColor() {
    const sec = document.getElementsByClassName("sec")
    for(let i=0;i<sec.length;i++){
        sec[i].style.boxShadow = "0 0 2rem var(--green), 0 0 4rem var(--green), 0 0 8rem var(--green)"
    }
    document.getElementsByClassName("nav")[0].style.boxShadow = "0 1rem 1rem var(--green)"
    const a = document.getElementsByClassName("anim")
    for(let i=0;i<a.length;i++){
        a[i].style.textShadow= "0 0 1rem var(--green),0 0 2rem var(--green),0 0 4rem var(--green),0 0 8rem var(--green),0 0 12rem var(--green)"
        a[i].classList.add("animG")
    }
    document.getElementsByClassName("tit1")[0].style.textShadow="0 0 1rem var(--green),0 0 2rem var(--green),0 0 4rem var(--green),0 0 8rem var(--green),0 0 12rem var(--green)"
    document.getElementsByClassName("barra")[0].style.boxShadow="0 0 1rem var(--green),0 0 2rem var(--green),0 0 4rem var(--green),0 0 8rem var(--green),0 0 12rem var(--green)"
}
function cambiarColorB() {
    const sec = document.getElementsByClassName("sec")
    for(let i=0;i<sec.length;i++){
        sec[i].style.boxShadow = "0 0 2rem blue, 0 0 4rem blue, 0 0 8rem blue"
    }
    document.getElementsByClassName("nav")[0].style.boxShadow = "0 1rem 1rem blue"
    const a = document.getElementsByClassName("anim")
    for(let i=0;i<a.length;i++){
        a[i].style.textShadow= "0 0 1rem blue,0 0 2rem blue,0 0 4rem blue,0 0 8rem blue,0 0 12rem blue"
        a[i].classList.remove("animG")
    }
    document.getElementsByClassName("tit1")[0].style.textShadow="0 0 1rem blue,0 0 2rem blue,0 0 4rem blue,0 0 8rem blue,0 0 12rem blue"
    document.getElementsByClassName("barra")[0].style.boxShadow="0 0 1rem blue,0 0 2rem blue,0 0 4rem blue,0 0 8rem blue,0 0 12rem blue"
}