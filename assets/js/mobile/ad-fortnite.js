const fetchFortniteAd = async () => {
  let data = await fetch(
    "https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json",
  );
  let res = await data.json();
  console.log(res);
  let fortniteAd = res.adsMbl?.map((elem) => {
    return `

                <a href="#" class="whats-new-fortnite">
            <div class="advertise-fortnite">
              <img
                src=${elem.img}
                alt=""
              />
              <p class="main-adv-txt">${elem.title}</p>
              <p class="snd-ad-txt">
                ${elem.describtion}
              </p>
            </div>
          </a>

            `;
  });
  document
    .querySelector(".mbl-discover .discover-mobile .ads-1-1")
    .insertAdjacentHTML("afterbegin", fortniteAd.join(""));
};

export default fetchFortniteAd;
