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
// console.log(touristSpots);