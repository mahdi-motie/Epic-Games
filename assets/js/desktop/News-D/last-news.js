const fetchLast = async () => {
  try {
    let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
    let res = await data.json();
    let news = res.lastNews?.map((elem) => {
      return `
        <div class="game-news-D">
          <div class="img-game-news-d">
                <img src=${elem.img} alt=${elem.alt}/>
            </div>
            <div class="text-game-news-d">
                <div class="game-news-day-d">
                <span>${elem.daysAgo}DAY AGO</span>
                </div>
                <div class="game-news-title-d">
                <span>
                    ${elem.titleNews}
                </span>
                </div>
                <div class="game-news-info-d">
                <span>
                    ${elem.infoNews}
                </span>
                </div>
                <a href="#">Read More</a>
            </div>
        </div>`;
    });
    document
      .querySelector(".last-game-news-D ")
      .insertAdjacentHTML("afterbegin", news.join(""));
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchLast;
