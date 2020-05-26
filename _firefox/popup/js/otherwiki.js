//fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Belgium&limit=5").then(function(resp) {
	

window.addEventListener('load', (event) => {
		
	console.log('page is fully loaded');
});

document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', main);      
});

function main(){
	userquery = document.getElementById("usrquery").value.toLowerCase();
	if(userquery == ""){
		return;
	}else{
		userquery = userquery.trim();
		userquery = userquery.replace(" ", "_");
		link = "https://en.wikipedia.org/api/rest_v1/page/summary/" + userquery;

		fetch(link).then(function(resp) {
			console.log(resp);
			return resp.json()
		}).then(function(data) {
			console.log(data);
			document.getElementById("resulttitle").innerHTML = data.displaytitle;
			document.getElementById("resultdesc").innerHTML = data.description;
			document.getElementById("resultparagraph").innerHTML = data.extract;
		})
	}
}
