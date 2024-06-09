export default function TopToBottom(value) {
  const result = document.querySelector(value);
  if (result) {
    const checkScroll = () => {
      if (window.scrollY > 0) {
        result.classList.add("btn-show");
      } else {
        result.classList.remove("btn-show");
      }
    };

    document.addEventListener("scroll", checkScroll);

    // Check on initial load
    checkScroll();
  }
}
