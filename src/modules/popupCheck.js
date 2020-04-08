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
 
export default popupCheck;