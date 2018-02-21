 let arr = [];
    for( let i=1; i<=1000;i++){
        arr.push(i);
    }
    // console.log(arr);

    // here please start your solution
    // using closures, functions and (map,filter,reduce)
    function divisibleFactory(z){
    		
    		return x => x % z === 0;
    };


    const divisibleBy3 = divisibleFactory(3);
    const divisibleBy7 = divisibleFactory(7);
    const divisibleBy10 = divisibleFactory(10);
    const divisibleBy21 = divisibleFactory(21);
    
    
    // console.log("For the first array")
    // console.log(arr.filter(divisibleBy3));
    // console.log(arr.filter(divisibleBy10));
    // console.log(arr.filter(divisibleBy21));
	
    // apply your function
    // const divisbleByWHATEVERNUMBER = arr ... WHATEVERNUMBER ... ;



    const manyNumbers = [1000, 500, 333, 250, 200, 166, 142, 125, 111, 100, 90, 83, 76, 71, 66, 62, 58, 55, 52, 50, 47, 45, 43, 41, 40, 38, 37, 35, 34, 33, 32];
    // console.log("For the second array")
    // console.log(manyNumbers.filter(divisibleBy3));
    // console.log("Total amount of numners that are divisible by 3:" + manyNumbers.filter(divisibleBy3).length);
    // console.log(manyNumbers.filter(divisibleBy7));
    // console.log("Total amount of numners that are divisible by 7:" + manyNumbers.filter(divisibleBy7).length);
    // console.log(manyNumbers.filter(divisibleBy10));
    // console.log("Total amount of numners that are divisible by 21:" + manyNumbers.filter(divisibleBy10).length);


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
	

