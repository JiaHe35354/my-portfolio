export const smoothScrollTo = (id) => {
  const element = document.querySelector(id);
  const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;

  if (element) {
    window.scrollTo({
      top: element.offsetTop - navHeight,
      behavior: "smooth",
    });
  }
};
