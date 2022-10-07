
const sendData = async (data) => {
  const option = {
    method: "POST",
    body: data,
  }
  console.log(option);
  const res = await fetch("http://127.0.0.1:8000/account/register/", option);
  return res.json();
}

export default sendData;

// name="image"; filename=${data.getAll("image")[0].name}
