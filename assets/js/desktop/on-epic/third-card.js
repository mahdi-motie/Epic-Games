const fetchThirdCard = async()=>{
    try {
        let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json")
        let res= await data.json()
        let thirdCard = res.thirdCard?.map((elem)=>{
            return`
            <div class="tl-card-on-epic-D">
            <div class="tl-card-on-epic-body-D">
              <p class="tl-card-text-on-epic-D">
              ${elem.titleText}
              </p>
              <a href="#">${elem.description}</a>
            </div>
            <img
              class="tl-img-card-on-epic-d"
              src=${elem.img}
              alt=${elem.alt}
            />
          </div>
            `
        })
        document.querySelector(".third-card-on-epic-D .third-card-flex-on-epic-d").insertAdjacentHTML("afterbegin", thirdCard.join(""))
        
    } catch (e) {
        console.log(e.message);
    }
}
export default fetchThirdCard