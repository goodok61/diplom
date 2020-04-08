const popupConsult = () => {
  const consultLink = document.querySelector(".consultation-btn"),
    consultPopup = document.querySelector(".popup-consultation");

  consultLink.addEventListener("click", (event) => {
    event.preventDefault();
    const userQuest = document.querySelector("input[name='user_quest']");

    if (userQuest.value.trim() !== "") {
      consultPopup.style.display = "block";
      userQuest.style.border = "none";
    } else {
      userQuest.style.border = "1px solid red";
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

export default popupConsult;