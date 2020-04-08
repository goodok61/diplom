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
      event.preventDefault();
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
    orederPopup = document.querySelector(".popup-discount"),
    sendCalk = document.querySelector(".construct-btn.call-btn");

  sendCalk.addEventListener("click", () => {
    orederPopup.style.display = "block";
  });

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
      event.preventDefault();
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
      event.preventDefault();
      checkPopup.style.display = "none";
    }
  });
};
popupCheck();

/**
 * 
 * 
 //модалка "Получить консультацию"
 * 
 *
 */

const popupConsult = () => {
  const consultLink = document.querySelector(".consultation-btn"),
    consultPopup = document.querySelector(".popup-consultation");

  consultLink.addEventListener("click", (event) => {
    event.preventDefault();
    const userQuest = document.querySelector("input[name='user_quest']");
    console.log(userQuest);
    
    if (userQuest.value.trim() !== "") {
      consultPopup.style.display = "block";
      userQuest.style.border = "none";
    } else {
      userQuest.style.border = '1px solid red';
    }
  });

  consultPopup.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target.classList.contains("popup-close") ||
      !target.closest(".popup-content")
    ) {
      event.preventDefault();
      consultPopup.style.display = "none";
    }
  });
};
popupConsult();

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
    tabsArray = Array.prototype.slice.call(tabs),
    buttons = accordion.querySelectorAll("a.button");

  const showPanel = (panel) => {
    accordion.querySelectorAll(".panel-collapse").forEach((item) => {
      item.classList.remove("in");
    });
    panel.classList.add("in");
  };

  accordion.addEventListener("click", (event) => {
    let target = event.target;

    if (target.closest("a.button")) {
      event.preventDefault();
      target = target.closest(".panel-default");
      showPanel(target.nextElementSibling.childNodes[3]);
    }

    target = target.closest(".panel-heading");

    if (target) {
      event.preventDefault();
      showPanel(target.parentNode.querySelector(".panel-collapse"));
    }
  });

  const twoBlockSelectBox = accordion.querySelectorAll(".select-box"),
    twoBlockTitleText = accordion.querySelectorAll(".title-text"),
    onoffswitchCheckbox = document.getElementById("myonoffswitch"),
    myonoffswitchTwo = document.getElementById("myonoffswitch-two"),
    formControl = accordion.querySelectorAll(".form-control");
  const calcResult = document.getElementById("calc-result"),
    distanceInput = accordion.querySelector('input[type="text"]');

  let dataCalc = {
    type: 15000,
    typePost: "Две камеры",
    oneDiameter: 0,
    oneRings: 0,
    twoDiameter: 0,
    twoRings: 0,
    bottom: 2000,
    distance: 0,
  };

  let postDataCalc = {
    // distance: 0
  };

  const showResult = () => {
    let type = dataCalc.type,
      oneDiameter = dataCalc.type * dataCalc.oneDiameter,
      oneRings = dataCalc.type * dataCalc.oneRings,
      twoDiameter = dataCalc.type * dataCalc.twoDiameter,
      twoRings = dataCalc.type * dataCalc.twoRings,
      bottom = dataCalc.bottom;

    return type + oneDiameter + oneRings + twoDiameter + twoRings + bottom;
  };
  calcResult.value = showResult();

  onoffswitchCheckbox.addEventListener("change", () => {
    if (onoffswitchCheckbox.value === "on") {
      twoBlockTitleText[1].style.display = "none";
      twoBlockSelectBox[2].style.display = "none";
      twoBlockSelectBox[3].style.display = "none";
      onoffswitchCheckbox.value = "off";
      dataCalc.type = 10000;
      dataCalc.twoDiameter = 0;
      dataCalc.twoRings = 0;
      postDataCalc.type = "Тип колодца: Одна камера";
    } else {
      twoBlockTitleText[1].style.display = "block";
      twoBlockSelectBox[2].style.display = "inline-block";
      twoBlockSelectBox[3].style.display = "inline-block";
      onoffswitchCheckbox.value = "on";
      dataCalc.type = 15000;
      postDataCalc.type = "Тип колодца: Две камеры";
    }
    calcResult.value = showResult();
  });

  accordion.addEventListener("change", (event) => {
    const target = event.target;
    if (formControl[0].options.selectedIndex === 1) {
      dataCalc.oneDiameter = 0.2;
      postDataCalc.oneDiameter = `Диаметр первого колодца: ${formControl[0].value}`;
    } else {
      dataCalc.oneDiameter = 0;
      postDataCalc.oneDiameter = `Диаметр первого колодца: ${formControl[0].value}`;
    }

    if (formControl[1].options.selectedIndex === 1) {
      dataCalc.oneRings = 0.3;
      postDataCalc.oneRings = `Количество колец первого колодца: ${formControl[1].value}`;
    } else if (formControl[1].options.selectedIndex === 2) {
      dataCalc.oneRings = 0.5;
      postDataCalc.oneRings = `Количество колец первого колодца: ${formControl[1].value}`;
    } else {
      dataCalc.oneRings = 0;
      postDataCalc.oneRings = `Количество колец первого колодца: ${formControl[1].value}`;
    }

    if (formControl[2].options.selectedIndex === 1) {
      dataCalc.twoDiameter = 0.2;
      postDataCalc.twoDiameter = `Диаметр второго колодца: ${formControl[2].value}`;
    } else {
      dataCalc.twoDiameter = 0;
      postDataCalc.twoDiameter = `Диаметр второго колодца: ${formControl[2].value}`;
    }

    if (formControl[3].options.selectedIndex === 1) {
      dataCalc.twoRings = 0.3;
      postDataCalc.twoRings = `Количество колец второго колодца: ${formControl[3].value}`;
    } else if (formControl[3].options.selectedIndex === 2) {
      dataCalc.twoRings = 0.5;
      postDataCalc.twoRings = `Количество колец второго колодца: ${formControl[3].value}`;
    } else {
      dataCalc.twoRings = 0;
      postDataCalc.twoRings = `Количество колец второго колодца: ${formControl[3].value}`;
    }

    if (target === myonoffswitchTwo) {
      if (myonoffswitchTwo.value === "on") {
        myonoffswitchTwo.value = "off";
      } else {
        myonoffswitchTwo.value = "on";
      }
    }

    if (onoffswitchCheckbox.value === "on" && myonoffswitchTwo.value === "on") {
      dataCalc.bottom = 2000;
      myonoffswitchTwo.value = "on";
      postDataCalc.bottom = "Наличие днища колодца: есть";
    } else if (
      onoffswitchCheckbox.value === "off" &&
      myonoffswitchTwo.value === "on"
    ) {
      dataCalc.bottom = 1000;
      myonoffswitchTwo.value = "on";
      postDataCalc.bottom = "Наличие днища колодца: есть";
    } else {
      dataCalc.bottom = 0;
      postDataCalc.bottom = "Наличие днища колодца: нет";
      myonoffswitchTwo.value = "off";
    }

    if (onoffswitchCheckbox.value === "off") {
      delete postDataCalc.twoDiameter;
      delete postDataCalc.twoRings;
    }

    postDataCalc.distance = distanceInput.value;
    // console.log(distanceInput.value);

    calcResult.value = showResult();
    // console.log(dataCalc);

    console.log(postDataCalc);
  });

  // const sendCalc = accordion.querySelector(".construct-btn.call-btn");
  // console.log(sendCalc);
  // sendCalc.addEventListener('click', () => {
  //   popupOrder();
  // });

  distanceInput.addEventListener("input", (e) => {
    const target = e.target;
    if (target) {
      target.value = target.value.replace(/[\D]/g, "");
    }
  });

  /**
   *
   * отправка
   *
   */

  const errorMessage = " Что то пошло не так...",
    loadMessage = "Загрузка...",
    successMessage = "Спасибо! Мы скоро с вами свяжемся!",
    statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem;";

  const postData = (body) => {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
  // console.log(item);
  const form = document.querySelectorAll("form");
  console.log(form[4]);

  const inputs = form[4].querySelectorAll("input");
  form[4].addEventListener("submit", (event) => {
    event.preventDefault();
    form[4].appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    console.log(form[4].parentNode.parentNode.parentNode);

    const formData = new FormData(form[4]);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    if (form[4].parentNode.parentNode.parentNode.matches(".popup-discount")) {
      let calcData = postDataCalc;
      body.calcData = calcData;
    }
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
        target.getAttribute("name") == "user_message" ||
        target.getAttribute("name") == "user_quest"
      ) {
        target.value = target.value.replace(/[^А-Яа-яЁё\s]/g, "");
      } else if (target.getAttribute("name") == "user_email") {
        target.value = target.value.replace(/.+@.+\..{1,}&/i, "");
      } else if (target.getAttribute("name") == "user_phone") {
        target.value = target.value.replace(/[^\+\d]/g, "");
      }
    });
  });
};
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

  allForms.forEach((item, index) => {
    // console.log(item);

    const inputs = item.querySelectorAll("input");
    item.addEventListener("submit", (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      console.log(item.parentNode.parentNode.parentNode);

      const formData = new FormData(item);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      if (item.parentNode.parentNode.parentNode.matches(".popup-consultation")) {
        let question = document.querySelector(
          'input[name="user_quest"]'
        );
        body.user_quest = question.value;
      }
      
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
      if (item.parentNode.parentNode.parentNode.matches(".popup-consultation")) {
        let question = document.querySelector('input[name="user_quest"]');
        question.value = '';
      }
    });
    inputs.forEach((itemInput) => {
      itemInput.value = "";
      itemInput.addEventListener("input", (e) => {
        const target = e.target;

        if (
          target.getAttribute("name") == "user_name" ||
          target.getAttribute("name") == "user_message" ||
          target.getAttribute("name") == "user_quest"
        ) {
          target.value = target.value.replace(/[^А-Яа-яЁё\s]/g, "");
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