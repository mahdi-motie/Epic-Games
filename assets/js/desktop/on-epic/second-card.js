const fetchSeconCard =async () =>{
    try {
        let data= await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json")
        let res = await data.json()
        let secondCard = res.secondCard?.map((elem)=>{
            return`
            <div class="sl-card-on-epic-D">
            <div class="sl-card-on-epic-body-D">
              <p class="sl-card-text-on-epic-D">
                ${elem.titleText}
              </p>
              <a href="#">${elem.description}</a>
            </div>
            <img
              class="sl-img-card-on-epic-d"
              src=${elem.img}
              alt=${elem.alt}
            />
          </div>
            `
        })
        document.querySelector(".second-card-on-epic-D .second-card-flex-on-epic-d").insertAdjacentHTML("afterbegin" ,secondCard.join(""))


    } catch (e) {
        console.log(e.message);
    }
}

export default fetchSeconCard