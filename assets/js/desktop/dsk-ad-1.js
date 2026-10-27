const fetchDskFortniteAd = async () => {
  let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
  let res = await data.json();
  console.log(res);
  let fortniteAd = res.dskFortniteAd?.map((elem) => {
    return `

            <div class="runner-back">
            <img src=${elem.img1}
             alt=${elem.alt} />
            <div class="runner-front">
              <img
                src=${elem.img2}
                alt=${elem.alt}
              />
              <p class="title">${elem.title}</p>
              <p class="describtion">
                ${elem.describtion}
              </p>
              <button class="btn">Discover Now</button>
            </div>
          </div>

            `;
  });
  document
    .querySelector(".Home-Desktop .fortnite-banner-ad .runners-event")
    .insertAdjacentHTML("afterbegin", fortniteAd.join(""));
};

export default fetchDskFortniteAd