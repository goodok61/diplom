const popupOrder = () => {
  const orederLink = document.querySelectorAll(".discount-btn"),
    orederPopup = document.querySelector(".popup-discount"),
    distanceInput = document.querySelectorAll('input[type="text"]'),
    sendCalk = document.querySelector(".construct-btn.call-btn");

  sendCalk.addEventListener("click", () => {
    if (distanceInput[3].value.trim() !== "") {
      orederPopup.style.display = "block";
      distanceInput[3].style.border = "none";
      orederPopup.classList.add("from_calc");
    } else {
      distanceInput[3].style.border = "1px solid red";
    }
  });

  orederLink.forEach((item) => {
    item.addEventListener("click", (event) => {
      orederPopup.classList.remove("from_calc");
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
 
export default popupOrder;