import Views from "../../utils/Views";

const validation = async (value) => {
  try {
    const result = await Views.ValidationEmailOrUsername(value);
    if(result.error)
      return false;
    return true;
  } catch (e) {
    console.log(e);
  }
}

export default validation;
