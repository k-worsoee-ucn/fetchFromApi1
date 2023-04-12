//
// FÆLLES
//

// Vi skal anvende data herfra: https://randomuser.me/

// Læs dokumentation og find ud af hvordan man får en user (5 min eller indtil en har et svar)

// Find ud af hvordan man får 50 users (5 min eller indtil en har et svar)

// Fetch og log dem med fetch

const users = document.querySelector(".users")

fetch("https://randomuser.me/api/?results=10&nat=dk")
  .then(res => res.json())
  .then(data => {

    for (let i = 0; i < data.results.length; i++) {
      console.log(data)
      const newArticle = document.createElement("article")
      const newH4 = document.createElement("h4")
      const newImg = document.createElement("img")

      newH4.textContent = `${data.results[i].name.first} ${data.results[i].name.last}`
      newImg.setAttribute("src", data.results[i].picture.medium)

      users.append(newArticle)
      newArticle.append(newH4)
      newArticle.append(newImg)
    }

  })
  .catch(err => console.log("An error occured (API): ", err))


// Prøv nu at kopiere og omskrive det til async/await (Mark viser hvordan)

//
// I grupperne
//

// Prøv nu at anvende document.createElement(), .classlist.add(), .textContent og append() til at skabe en artikel med følgende struktur per user i results og append i .result:
{
  /* <article>
  <h4 class="title">NAVN</h4>
  <img src="URL" alt="ALT" />
</article>; */
}

// Prøv nu at udkommentere ovenfor og anvend istedet .innerHTML med strukturen fra index.html. Igen en per bruger i results

//
// FÆLLES
//

// Hvis vi kan nå det: implementér filtrering i form af en input[type="search"]
