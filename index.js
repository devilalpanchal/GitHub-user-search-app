document.querySelector(".btn").addEventListener("click", () => {
    let value = input.value;
    let gitApi = `https://api.github.com/users/${value}`;
    console.log(value)
    fetchData(gitApi);
  });
  async function fetchData(url) {
    document.querySelector(".card-container").innerHTML = `
    <h1 class='loading'></h1>
    `;

    let response = await fetch(url);

    let data = await response.json();

    document.querySelector(
      ".card-container"
    ).innerHTML = `<div class="card">
    <img
      src=${data.avatar_url}
      alt=""
    />
    <h2 class="name" >${data.name}</h2>
    <p class="join"><b> Joined :</b>  <br> ${data.created_at}</p>
    </div>
    <div class="card2">
    <p class="repo">Repose <br> ${data.public_repos}</p>
    <p  class="following">following <br>  ${data.followers}</p>
    <p  class="follower">following <br> ${data.following}</p>
   
  </div>
    <div class="card3">
     <p class="location">
     <i class="fa-solid fa-location-dot"></i>
      <br> ${data.location}</p>
    <p  class="twitter">
    <i class="fa-brands fa-twitter"></i>
     <br>  ${data.twitter_username
     }</p>
    <p  class="linkdein"><i class="fa-brands fa-linkedin"></i> <br> ${data.Subscriptions_url}</p>
   
  </div>
    <div class="card4">
    
    <a class="profile" href=${data.html_url}>Github Profile</a>
   
  </div>
  
  
  `;
    console.log(data);

  }