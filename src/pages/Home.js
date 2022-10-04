import Nav from "../templates/Nav";

const Home = () => {
  const view = `
    <div id="Nav-main">
      ${Nav()}
    </div>
  `;
  return view;
}

export default Home;


// console.log(location.hash.length < 1 ? "/": location.hash);
