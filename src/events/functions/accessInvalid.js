import redirect from "../../utils/redirect";
const accessInvalid = () => {
  document.querySelector("#staticBackdropLive").remove()
  const body = document.querySelector("body");
  body.removeChild(
    document.querySelector(".modal-backdrop")
  )
  body.classList.remove("modal-open");
  body.removeAttribute("style");

  //redirect();
}

export default accessInvalid;
