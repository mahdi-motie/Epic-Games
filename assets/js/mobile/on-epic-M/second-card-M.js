const fetchSecondCardM = async()=>{
    try {
        let data = await fetch("https://nimabt84.github.io/epic-final-db-2/db.json")
        let res = await data.json()
        let secondCardM= await res.secondCardM?.map((elem)=>{
            return`
                <div class="card-on-epic-M">
                    <div class="card-on-epic-body-m">
                        <p class="card-text-on-epic-m">
                            ${elem.titleText}
                        </p>
                        <a href="#">${elem.link}</a>
                    </div>
                    <img
                        class="img-card-on-epic-m"
                        src=${elem.img}
                        alt=${elem.alt}
                    />
                </div>
            `
        })
        document.querySelector(".content-on-epic-M").insertAdjacentHTML("afterbegin", secondCardM.join(""))
        
    } catch (e) {
        console.log(e.message);
    }
}

export default fetchSecondCardM