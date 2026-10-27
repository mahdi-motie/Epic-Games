const fetchFreeGames = async () => {
  let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
  let res = await data.json();
  console.log(res);
  let freeGames = res.freeGames?.map((elem) => {
    return `

           <div class="card-main">
                    <div class="dow-card">
                      <img
                        src=${elem.img}
                        class="card-img-top"
                        alt=${elem.alt}
                      />
                      <div class="card-body">
                        <p class="card-text">
                          ${elem.title}
                        </p>
                        <p class="dow-price">${elem.price}</p>
                      </div>
                    </div>
                  </div>

            `;
  });
  document
    .querySelector(
      ".mbl-discover .discover-mobile .free-games .free-games-layout .free-gms",
    )
    .insertAdjacentHTML("afterbegin", freeGames.join(""));
};

export default fetchFreeGames;
