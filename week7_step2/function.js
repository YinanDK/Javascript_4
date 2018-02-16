
"use strict";
const url = "https://api.github.com/orgs/HackYourFuture/repos";


const load_most_forked_repo = document.getElementById("load_most_forked_repo");
const load_least_forked_repo = document.getElementById("load_least_forked_repo");
const loadResults = document.getElementById("loadResults");
const results_display = document.getElementById("load_results");
const load_num = document.getElementById("load_num");



load_most_forked_repo.addEventListener("click", function(){getForksRepo(1)});
load_least_forked_repo.addEventListener("click", function(){getForksRepo(2)});
loadResults.addEventListener("click", function(){getForksRepo(3)});

//fetch data;

function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}

//find repo with max fork

function getForksRepo(index){
	fetchJsonData(url, function(data) {
        let repos  = [];
        repos = data;

        if(index !=3)
        {
        	let indexOfValue = 0;
	        if(index ==1){
	        	indexOfValue = repos.reduce((iMax, repo, i, repos) => repo.forks_count  > repos[iMax].forks_count ? i : iMax, repos[0].forks_count);
	        }else if (index == 2){
	        	indexOfValue = repos.reduce((iMin, repo, i, repos) => repo.forks_count  < repos[iMin].forks_count ? i : iMin, repos[0].forks_count);
	        }

	        let full_name=repos[indexOfValue].full_name;
	        results_display.value = full_name;

	      } else{
        	let totalNum = repos.reduce((accumulator,repo) => accumulator+ repo.forks_count,0 );
        	console.log(totalNum);
        	load_num.value = totalNum;
        }
        
        

    })   
}



//count fork;

function countRepoForks(event){
	 fetchJsonData(url, function(data) {
        let repos  = [];
        repos = data;
        
        console.log(repos);

    })
}

