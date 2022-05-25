 //const url = `https://www.omdbapi.com/?apikey=8b11dcbf&s=${search}`


  document.getElementById("submit").addEventListener("click",searchMovies)

function searchMovies(){
    let search = document.getElementById("movie").value;

    const url = (`https://www.omdbapi.com/?&apikey=8b11dcbf&s=${search}`);

    fetch(url)
    .then(function(res){
        return (res.json());
    })
    .then(function(res){
        if(res.Response=="False")
        {
            console.log("Not Present Movie");
            let d=document.getElementById("contain");
            let img=document.createElement("img");
            img.src="https://media4.giphy.com/media/l4FGIgsVPdoRd2wbS/200.webp?cid=ecf05e47ly2xgsn0pzj3ebpkylhxdr3zz8jatt0u0xodmmwb&rid=200.webp&ct=g";
            d.append(img);

        }
        else{
            console.log('FINAL RESPONSE: ',res.Search)
            print(res.Search);
        }
    })
    .catch(function(err){
        console.log(err);
    });

}

function print(data)
{
    console.log(data)
    document.createElement("contain").innerHTML=null;
    data.forEach(function(el){
    let box=document.createElement("div");
    let img =document.createElement("img");
    img.src=el.Poster;

    let date = document.createElement("p");
    date.innerHTML=el.Year;

    let actor = document.createElement("p");
    actor.innerText = `Actor: ${el.Actors}`;

    let title =document.createElement("h1");
    title.innerText = `Title: ${el.Title}`


    let tag1=document.createElement("div");
     tag1.setAttribute("class","tag1")

    let imbdID= document.createElement("p");
    imbdID.innerHTML=`Ranting${el.imdbID}`;

      if(el.imbdID>8.5)
      {
         tag1.append(imbdID,tag1)
         box.append(img, title,date,actor, imbdID)
         let ground = document.querySelector('#contain');
         ground.append(box)
         imbdID.innerText="recommended"
         imbdID.style.color="red";
      }
      else{
        box.append(img, title,date,actor, imbdID,tag1)
        let ground = document.querySelector('#contain');
        ground.append(box)
      }

    // box.append(img, date, title, imbdID)
    // let ground = document.querySelector('#ground');
    // ground.append(box

});
}
 

