const fetchGamesDsk = async () => {
  let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
  let res = await data.json();
  console.log(res);
  let freeGamesDs = res.freeGames?.map((elem) => {
    return `

    <div class="cards">
          <div class="card-1">
            <img
              src=${elem.img}
              alt=${elem.alt}
            />
            <p class="title">${elem.title}</p>
            <p class="description">${elem.describtion}</p>
          </div>
        </div>

            `;
  });
  document
    .querySelector(
      ".Home-Desktop .free-games-dsk",
    )
    .insertAdjacentHTML("beforeend", freeGamesDs.join(""));
};

export default fetchGamesDsk;
