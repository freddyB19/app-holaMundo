const accessInvalid = () => {
  document.querySelector(".modal").remove()
  const body = document.querySelector("body");
  body.removeChild(
    document.querySelector(".modal-backdrop")
  )
  body.classList.remove("modal-open");
  body.removeAttribute("style");
}

export default accessInvalid;
