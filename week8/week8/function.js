function createNumbersArray(start, end){
    const numbersArray = [];
     for (let number = start; number <= end; number++) {
        numbersArray.push(number);
    }

    return numbersArray;
}

    function divisibleFactory(z){
    		
    		return checker = x => x % z === 0;
    };

    

    const numbers = createNumbersArray(1, 1000);
    const dividers = createNumbersArray(1, 30);


const result = dividers.map(x => {
    const filteredNumbers = numbers.filter(divisibleFactory(x));
    return filteredNumbers.length;
});

console.log(result);

   


    

    


    //step 2
const movieURl="https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const movieDisplayBtn = document.getElementById("displaymovie");
const movieList = document.querySelector(".movieContent");
const movieInput = document.getElementById("movieSearch");
const aveRatingDisplay = document.getElementById("aveRating");

let optionValue;
function tagOption(tag) {
    optionValue = tag;
    // alert(optionValue);
    return optionValue;
}


	

function fetchJsonData(url) {
    
    const promise1 = new Promise((resolve, reject) => {
    	const request = new XMLHttpRequest();
    	 request.addEventListener('load', () => {
    	const jsonData = JSON.parse(request.responseText) ;
        resolve(jsonData);
    });
   

    request.open('get', url);
    request.send();
})
    return promise1;

}




fetchJsonData(movieURl).then(movies =>{
	movieList.innerHTML = "<ul></ul>";
	 movies.map(movie => {
	 	if (movie.rating >=8.5){
	 		movie['tag'] = "Excellent";
	 	} 
	 	else if (movie.rating >= 8){
	 		movie['tag'] = "Very Good";
	 	} 
	 	else {
	 		movie['tag'] = "Good";
	 	}
	 	return movie;
	 	

	 	// let listContent = document.createElement('li');
	 	// listContent.innerHTML="";
	  //   listContent.innerHTML = "Title:" + movie.title  + " Rating:" + movie.rating  + " Year:" + movie.year + "tag:" + movie.tag;
	  //   movieList.appendChild(listContent);
	});
	 movieDisplayBtn.addEventListener('click', function() { 
	 		let keyWord = movieInput.value;
	 		const filtermovies = movies.filter(movie => movie.title.toLocaleLowerCase().includes(keyWord)).filter(movie => movie.tag == optionValue);

	 		console.log(filtermovies);
	 		let aveRating = filtermovies.reduce((accumulator,movie) => accumulator+ movie.rating,0 )/filtermovies.length;
	 		console.log(aveRating);
     		aveRatingDisplay.value = Math.round(aveRating * 100) / 100;
	 		movielistDisplay(filtermovies);
	 	
	 });
	 
})

 function movielistDisplay(filtermovies) {
     movieList.innerHTML = "<ul></ul>";
     const totalMovie = filtermovies.map(createList);
     
 }

 function createList(movie) {
     let listContent = document.createElement('li');
     listContent.innerHTML = "Title:" + movie.title  + "&nbsp" + "&nbsp" + "&nbsp" + " Rating:" + movie.rating  + "&nbsp" + "&nbsp" + "&nbsp"+ " Year:" + movie.year + "&nbsp" + "&nbsp" + "&nbsp" + "tag:" + movie.tag;
     movieList.appendChild(listContent);
 }








//
	

