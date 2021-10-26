const linksSocialMedias = {
  github: "ItalloM3",
  youtube: "",
  instagram: "",
  facebook: "",
  twitter: ""
}

function changeSocialMedialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`
  }
}

function getGitHubUsersInfo() {
  const url = `https://api.github.com/users/${linksSocialMedias.github}`

  fetch(url).then(response => response.json())
    .then(data => {
      myName.textContent = data.name
      aboutMe.textContent = data.bio
      login.textContent = data.login
      avatar.src = data.avatar_url

    })
}
getGitHubUsersInfo()
changeSocialMedialLinks()