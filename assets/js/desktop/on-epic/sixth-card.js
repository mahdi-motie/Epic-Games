const fetchSixthCard=async()=>{
    try {
        let data=await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json")
        let res = await data.json()
        let sixthCard=res.sixthCard?.map((elem)=>{
            return`
            <div class="sil-card-on-epic-D">
                <div class="sil-card-on-epic-body-D">
                <p class="sil-card-text-on-epic-D">
                    ${elem.titleText}
                </p>
                <a href="#">${elem.link}</a>
                </div>
                <img
                class="sil-img-card-on-epic-d"
                src=${elem.img}
                alt=${elem.alt}
                />
          </div>
            
            `
        })
        document.querySelector(".sixth-card-on-epic-D .sixth-card-flex-on-epic-d").insertAdjacentHTML("afterbegin", sixthCard.join(""))
        
    } catch (e) {
        console.log(e.message);
    }
}

export default fetchSixthCard