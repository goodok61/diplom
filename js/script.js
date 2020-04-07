'use strict'

//модалки "Перезвоните мне"

const popupRecall = () => {

  const recallLink = document.querySelectorAll('a.call-btn'),
    recallPopup = document.querySelector('.popup-call');

  recallLink.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      recallPopup.style.display = 'block';
    })
  })
  recallPopup.addEventListener("click", (event) => {
    
    const target = event.target;

    if (
      target.classList.contains("popup-close") ||
      !target.closest(".popup-content")
    ) {
      recallPopup.style.display = "none";
    }
  });

}
popupRecall();

/**
 * 
 * 
 //модалка "Заказать со скидкой"
 * 
 *
 */

const popupOrder = () => {
  const orederLink = document.querySelectorAll(".discount-btn"),
    orederPopup = document.querySelector(".popup-discount");

  orederLink.forEach((item) => {
    item.addEventListener("click", (event) => {
      orederPopup.style.display = "block";
    });
  });
  orederPopup.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target.classList.contains("popup-close") ||
      !target.closest(".popup-content")
    ) {
      orederPopup.style.display = "none";
    }
  });
};
popupOrder();

/**
 * 
 * 
 //модалка "Получить чек-лист и скидкой"
 * 
 *
 */

const popupCheck = () => {
  const checkLink = document.querySelectorAll(".check-btn"),
    checkPopup = document.querySelector(".popup-check");

  checkLink.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      checkPopup.style.display = "block";
    });
  });
  checkPopup.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target.classList.contains("popup-close") ||
      !target.closest(".popup-content")
    ) {
      checkPopup.style.display = "none";
    }
  });
};
popupCheck();

/**
 * 
 * 
 //аккордеон "Часто задаваемые вопросы"
 * 
 *
 */

const tabsFAQ = () => {
  const accordion = document.getElementById("accordion-two");

  accordion.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    target = target.closest(".panel-heading");
    
    const hideBlocks = () => {
      const blocks = accordion.querySelectorAll(".panel-collapse");
      blocks.forEach(item => {
        item.classList.remove('in');
      })
    }

    if (target) {
      const block = target.parentNode.querySelector(".panel-collapse");
      hideBlocks();
      block.classList.add("in");
    }
  })
  
}
tabsFAQ();

/**
* 
* 
//Кнопка "Больше"
* 
*
*/

const buttonMore = () => {
  const sentence = document.querySelector(".sentence"),
    button = sentence.querySelector(".add-sentence-btn"),
    blocks = sentence.querySelectorAll('.col-xs-12');


  button.addEventListener('click', () => {
    blocks.forEach(item => {
      item.classList.remove('hidden');
      item.classList.remove('visible-sm-block');
      button.style.display = 'none';
    })

  })

}
buttonMore();

/**
* 
* 
//Калькулятор
* 
*
*/

const calc = () => {

  const accordion = document.getElementById("accordion"),
    tabs = accordion.querySelectorAll(".panel-collapse"),
    tabsArray = Array.prototype.slice.call(tabs);
    console.log(tabsArray);
    

  accordion.addEventListener("click", (event) => {
    let target = event.target;
    
    if (target.closest(".construct-btn") || target.closest("span")) {
      
    }

    target = target.closest(".panel-heading");
    
    const hideBlocks = () => {
      const blocks = accordion.querySelectorAll(".panel-collapse");
      blocks.forEach((item) => {
        item.classList.remove("in");
      });
    };
    
    if (target) {
      event.preventDefault();
      const block = target.parentNode.querySelector(".panel-collapse");
      hideBlocks();
      block.classList.add("in");
    }
  });
  
}
calc();


/**
* 
* 
//Отправка форм
* 
*
*/


const sendForm = () => {
  const errorMessage = " Что то пошло не так...",
    loadMessage = "Загрузка...",
    successMessage = "Спасибо! Мы скоро с вами свяжемся!",
    statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem;";

  const allForms = document.querySelectorAll("form");

  const postData = (body) => {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  allForms.forEach((item) => {
    console.log(item);
    
    const inputs = item.querySelectorAll("input");
    item.addEventListener("submit", (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      if (item.getAttribute("id") == "form3") {
        statusMessage.style.cssText = "color:#ffffff";
      }
      const formData = new FormData(item);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("status network not 200");
          }
          statusMessage.textContent = successMessage;
          inputs.forEach((itemInput) => (itemInput.value = ""));
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        })
        .catch(() => {
          statusMessage.textContent = errorMessage;
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
    inputs.forEach((itemInput) => {
      itemInput.value = "";
      itemInput.addEventListener("input", (e) => {
        const target = e.target;

        if (
          target.getAttribute("name") == "user_name" ||
          target.getAttribute("name") == "user_message"
        ) {
          target.value = target.value.replace(/[^\W]/gi, "");
        } else if (target.getAttribute("name") == "user_email") {
          target.value = target.value.replace(/.+@.+\..{1,}&/i, "");
        } else if (target.getAttribute("name") == "user_phone") {
          target.value = target.value.replace(/[^\+\d]/g, "");
        }
      });
    });
  });
};

sendForm();