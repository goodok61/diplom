const popupRecall = () => {
  const recallLink = document.querySelectorAll("a.call-btn"),
    recallPopup = document.querySelector(".popup-call");

  recallLink.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      recallPopup.style.display = "block";
    });
  });
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
};
 
export default popupRecall;