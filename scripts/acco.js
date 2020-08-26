let accordeon = document.querySelector(".accordeon");

accordeon.addEventListener('click', toggle);

function toggle(e){
    

    if (e.target.hasAttribute("data-desc")) {
        //Находим соседний элемент с классом accordeon__msg
        //И меняем у этого элемента свойство опасити на 0
        // let activeElement = document.querySelector(".accordeon__msg");
        // if (activeElement) {
        //     console.log(activeElement);
        // }

        console.log(111);
        
        
    } 

}

