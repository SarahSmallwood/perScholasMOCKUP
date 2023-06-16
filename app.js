function showMenu(){
    let list = document.querySelector('#menu');
    let showList = list.style.display; 
    // let menuButton = document.querySelector('') 
list.addEventListener("click",() => {
    let dropDown = document.querySelector('.space')
    dropDown.classList.toggle('show')



})
}
    /*if(showList === 'block'){
        list.style.display = 'none';
        menuButton.innerHTML = 'Show List';
    }
    else{
        list.style.display = 'block';
        menuButton.innerHTML = 'Hide List'
    }
} */
