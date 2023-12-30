{
  const toPageTop = document.getElementById("toPageTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      toPageTop.classList.remove("invisible");
    } else {
      toPageTop.classList.add("invisible");
    }
  });

  toPageTop.addEventListener("click", () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
