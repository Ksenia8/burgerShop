
$(document).ready(function () {

    ///////// Modal Windows
    // в переменную template копируем все содержимое 
    // (всю разметку, которая есть в блоке overlayTemplate)
    const template = document.querySelector("#overlayTemplate").innerHTML;
    const overlay = createOverlay(template);

    
    
    function createOverlay(template) {
       
        let fragment = document.createElement("div");

        fragment.innerHTML = template;
        
        const overlayElement = fragment.querySelector(".overlay");
        const title = fragment.querySelector(".overlay__title");
        const text = fragment.querySelector(".overlay__text");
        const closeElement = fragment.querySelector("#overlay__close");

               
        //больше не нужен
        fragment = null;

        overlayElement.addEventListener("click", e => {
            if (e.target === overlayElement) {
                closeElement.click();
            }
        });

        closeElement.addEventListener("click", e => {
            e.preventDefault();
            //удаляем блок
            document.body.removeChild(overlayElement);
            $("body").attr("style", "overflow: visible");

        });

        return {
            open() {
                document.body.appendChild(overlayElement);
                $("body").attr("style", "overflow: hidden");
            },
            close() {
                closeElement.click();
            },
            setContent(customText, customTitle) {
                if (customTitle) {
                title.innerHTML = customTitle;
                }
                text.innerHTML = customText;
            }
        };
    }

    ///// Reviews

    const openReview = $(".btn--review");
    
    $(openReview).on("click", e => {
        e.preventDefault();
    // найдем item по нажатой кнопке
        const item = $(e.currentTarget).closest(".reviews__item");
       
        const name = $(item)
        .find(".review__title")
        .text();
        
        const text = $(item)
        .find(".review__text p")
        .text();
        
        
        // открытие формы
        overlay.open();
        // заполнение формы
        overlay.setContent(text,name);
    
    });



    ///// Order Form
    // найдена форма
    const orderForm = document.querySelector("#order-form");
    
    orderForm.addEventListener("submit", submitForm); 

    function submitForm(e) {
      e.preventDefault();
      const form = e.target;
      const request = ajaxForm(form);

      request.addEventListener("load", function() {
        console.log(request);
        
        if (request.status >=400) {
          overlay.open();
          overlay.setContent(`Произошла ошибка  ${request.response.message}`, "Сообщение");
        } else {
          overlay.open();
          overlay.setContent(request.response.message, "Сообщение");
        }
      });
    }
    const ajaxForm = function(form) {
      const formData = new FormData(form);
      const url = "https://webdev-api.loftschool.com/sendmail";
      const mail = "bose@air-blog.com";
      formData.append("to",mail);

      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST",url);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(formData);
      return xhr;
    };
  

});

