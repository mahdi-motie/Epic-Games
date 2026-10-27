const fetchFirstCard = async () => {
  try {
    let data = await fetch(
      "https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json",
    );
    let res = await data.json();
    let card = res.firstCard?.map((elem) => {
      return `
            <div class="fl-card-on-epic-D">
                <div class="fl-card-on-epic-body-D">
                    <p class="fl-card-text-on-epic-D">${elem.titleText}</p>
                     <a href="#">${elem.link}</a>
                </div>
                <img
                class="fl-img-card-on-epic-d"
                src=${elem.img}
                alt=${elem.alt}
                />
            </div>`;
    });
    document
      .querySelector(".first-card-on-epic-D .first-card-flex-on-epic-d")
      .insertAdjacentHTML("afterbegin", card.join(""));
  } catch (e) {
    console.log(e.message);
  }
};

export default fetchFirstCard;
