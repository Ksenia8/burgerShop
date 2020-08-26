const composBtn = $(".burger-content");

$(composBtn).on("click", e=> {
    if(window.innerWidth<=768) {
        let target=e.target;

        while (target !==e.currentTarget) {
            if (target.classList.contains(".burger-compos__close")) {
                e.preventDefault();
                e.currentTarget.classList.remove(".active");
                return;

            } else if (target.classList.contains("burgers-compos"))
                return;

            target = target.parentNode;
            console.log(target);
        }

        e.currentTarget.classList.toggle("active");
    }
});