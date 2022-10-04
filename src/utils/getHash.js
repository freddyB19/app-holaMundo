import ValidationHash from "./ValidationHash";

const getHash = () => {
  let path = null;
  if (location.hash.length < 1)
    path = {url: "/"}
  else if(location.hash !== "/"){
    if(ValidationHash.is_valid(location.hash.slice(9))){
      let url = location.hash.toLocaleLowerCase().match(/(?<i>\S+)\/(?<m>\w+)\/(?<p>\S+)\/(?<id>\d+)(\S+\/\d)?/) || ["" ,"bab-request", "index", "error", false];
      path = {url: url[2], article: url[3], id: url[4]}
      path.article = path.article.endsWith("/") ? path.article.substring(0, path.article.length-1) : path.article;

    }
    else
      path = {url: "index", article: "error", id: false}
  }
  return path;
};

export default getHash;
