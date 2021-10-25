const linksSocialMedias = {
  github: "ItalloM3",
  youtube: "",
  instagram: "",
  facebook: "",
  twitter: ""
}

function getGitHubUsersInfo(){
  const url = `https://api.github.com/users/${linksSocialMedias.github}`
  
  fetch(url).then(response => response.json())
  .then(data => {
  })
}
getGitHubUsersInfo()