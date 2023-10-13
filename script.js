let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'A Tajmahal'];


function removeArticles(name){
    let regex = /a|an|the/i;
    // console.log(name);
    // console.log(name.replace(regex,'').trim());
    return name.replace(regex,'').trim();
}

function sortingNames(){
    touristSpots.sort((a,b) => {
        if(removeArticles(a) < removeArticles(b))return -1;
        else return 1;
    });
}

sortingNames();

let list = document.getElementById("band");
touristSpots.forEach(band => {
    let listItem = document.createElement('li');
    listItem.textContent = band;
    list.appendChild(listItem);
});
// console.log(touristSpots);