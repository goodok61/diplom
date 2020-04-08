const buttonMore = () => {
  const sentence = document.querySelector(".sentence"),
    button = sentence.querySelector(".add-sentence-btn"),
    blocks = sentence.querySelectorAll(".col-xs-12");

  button.addEventListener("click", () => {
    blocks.forEach((item) => {
      item.classList.remove("hidden");
      item.classList.remove("visible-sm-block");
      button.style.display = "none";
    });
  });
};
 
export default buttonMore;