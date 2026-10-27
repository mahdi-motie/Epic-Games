const fetchFourthCard = async () => {
  try {
    let data = await fetch(
      "https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json",
    );
    let res =await data.json();
    let fourthCard = res.fourthCard?.map((elem) => {
      return `
            <div class="fourth-card-flex-on-epic-D">
                <img
                    class="f-img-card-on-epic-d"
                    src=${elem.img}
                    alt=${elem.alt}
                />
                <div class="f-card-on-epic-body-D">
                    <p class="f-card-text-on-epic-D">
                    ${elem.titleText}
                    </p>
                    <a href="#">${elem.link}</a>
                </div>
            </div>
            `;
    });
    document.querySelector(".fourth-card-on-epic-D").insertAdjacentHTML("afterbegin", fourthCard.join(""))
  } catch (e) {
    console.log(e.message);
  }
};

export default fetchFourthCard
