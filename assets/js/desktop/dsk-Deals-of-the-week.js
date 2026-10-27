import fetchDealsWeek from "../mobile/deals-of-the-week";

const fetchDskDow = async () => {
  let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
  let res = await data.json();
  console.log(res);
  let dskDealsWeek = res.dskDeals?.map((elem) => {
    return `

           <div class="div1">
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
    .querySelector(".Home-Desktop .deals-of-the-week-dsk .parent")
    .insertAdjacentHTML("afterbegin", dskDealsWeek.join(""));
};

export default fetchDealsWeek;
