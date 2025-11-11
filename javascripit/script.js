/* Dato un array di oggetti rappresentante un team di un’azienda,
 creare una pagina dedicata  in cui 
mostrare una card per ciascun componente. */

/* Curare meglio l'aspetto grafico
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla
pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];
/* ELEMENTI DOM Card */
const rowCard = document.querySelector(".row");
/* elementi dom form */
const formElement = document.querySelector("form");
const inputName = document.querySelector("#name");
const inputRole = document.querySelector("#role");
const inputEmail = document.querySelector("#email");
const inputImg = document.querySelector("#imaggine");

/* richiamo funzione che stampa le card in pagina */
stampaCard();
/* funzione che stampa le card */
function stampaCard() {
  let stringaCard = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const curElement = teamMembers[i];
    const card = componeCard(curElement);
    stringaCard += card;
  }
  rowCard.innerHTML = stringaCard;
}
/* funzione che compone le card */
function componeCard(element) {
  let conteinerCard = "";
  const { name, role, email, img } = element;
  conteinerCard += `<div class="col-12 col-md-4 mt-3">
             <div class="card rounded-4">
            <img src="${img}" class="card-img-top" alt="${name}" />
            <div class="card-body">
              <h5 class="card-title text-center mb-2 fs-2">${name}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-center text-success fs-6">${role}</li>
                <li class="list-group-item">
                <div class="d-flex justify-content-center ">
                  <a href="#" class="fs-6 text-decoration-none">${email}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </div>`;

  return conteinerCard;
}

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  oggettoInput();
  stampaCard();
});

function oggettoInput() {
  const file = inputImg.files[0];
  let imageURL = URL.createObjectURL(file);
  let nameUtente = {
    name: inputName.value,
    role: inputRole.value,
    email: inputEmail.value,
    img: imageURL,
  };
  teamMembers.push(nameUtente);
}
