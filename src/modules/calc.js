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

    calcResult.value = showResult();
  });

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
  const form = document.querySelectorAll("form");

  const inputs = form[4].querySelectorAll("input");
  form[4].addEventListener("submit", (event) => {
    event.preventDefault();
    form[4].appendChild(statusMessage);
    statusMessage.textContent = loadMessage;

    const formData = new FormData(form[4]);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    if (form[4].parentNode.parentNode.parentNode.matches(".from_calc")) {
      let calcData = postDataCalc;
      body.calcData = calcData;
    } else {
      return;
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
 
export default calc;