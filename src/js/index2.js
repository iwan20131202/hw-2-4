const box = document.querySelector("#box");

const handleMoveBox = (event) => {
  const boxX = event.clientX;
  const boxY = event.clientY;
  box.style.left = `${boxX}px`;
  box.style.top = `${boxY}px`;
};

const debouncedHandleMoveBox = _.debounce(handleMoveBox, 100);

document.addEventListener("mousemove", debouncedHandleMoveBox);