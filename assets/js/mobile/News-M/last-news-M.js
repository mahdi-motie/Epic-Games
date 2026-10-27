const fetchLastM = async () => {
  try {
    let data = await fetch("https://nimabt84.github.io/epic-final-db-2/db.json");
    let res = await data.json();
    let newsM = res.lastNewsM?.map((elem) => {
      return `
        <div class="game-news-M">
          <div class="img-game-news-M">
                <img src=${elem.img} alt=${elem.alt}/>
            </div>
            <div class="text-game-news-m">
                <div class="game-news-day-m">
                <span>${elem.daysAgo}DAY AGO</span>
                </div>
                <div class="game-news-title-m">
                <span>
                    ${elem.titleNews}
                </span>
                </div>
                <div class="game-news-info-m">
                <span>
                    ${elem.infoNews}
                </span>
                </div>
                <a href="#">Read More</a>
            </div>
        </div>`;
    });
    document
      .querySelector(".last-news-M ")
      .insertAdjacentHTML("afterbegin", newsM.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchLastM;
