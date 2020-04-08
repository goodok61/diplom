const tabsFAQ = () => {
  const accordion = document.getElementById("accordion-two");

  accordion.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest(".panel-heading");

    const hideBlocks = () => {
      const blocks = accordion.querySelectorAll(".panel-collapse");
      blocks.forEach((item) => {
        item.classList.remove("in");
      });
    };

    if (target) {
      const block = target.parentNode.querySelector(".panel-collapse");
      hideBlocks();
      block.classList.add("in");
    }
  });
};
 
export default tabsFAQ;