const slider = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

const handleImgSize = () => {
  const size = slider.value;
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;
};
const debouncedHandleImgSize = _.debounce(handleImgSize, 500);
slider.addEventListener("input", debouncedHandleImgSize);