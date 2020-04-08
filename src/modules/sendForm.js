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

    const inputs = item.querySelectorAll("input");
    item.addEventListener("submit", (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const formData = new FormData(item);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      if (
        item.parentNode.parentNode.parentNode.matches(".popup-consultation")
      ) {
        let question = document.querySelector('input[name="user_quest"]');
        body.user_quest = question.value;
      }
      if (item[4].parentNode.parentNode.parentNode.matches(".from_calc")) {
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
      if (
        item.parentNode.parentNode.parentNode.matches(".popup-consultation")
      ) {
        let question = document.querySelector('input[name="user_quest"]');
        question.value = "";
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
 
export default sendForm;