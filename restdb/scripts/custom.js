


// Lösningsförslag API dryg.net
/*$(function(){

	// execute the AJAX request
	$.ajax({
		async: true,
		url: 'https://frontendkillers-7876.restdb.io/rest/Contact',
		// if you need to work localy ..
        // url: 'namesdays.json',
		method: "GET",
		headers: {"Accept": "application/json;odata=verbose"}
	})

	// methods
	.done(successFunction)
	.fail(failFunction)

	// start success function
	function successFunction(data){
		var myData = data.firstname;
		$("#show").append("<li>" + myData + "</li>")


	}
    // end success function

	// fail function
	function failFunction(request, textStatus, errorThrown) {
		console.log('Funkar ej.. ');
	}

});*/


$(function(){

var apikey = "58a2d7b07647b93a16fa3ae2";

$.ajax({

 async: true,
 url: 'https://frontendspo16team-6270.restdb.io/rest/contact',
 crossDomain: true,
 dataType: 'json',
 method: "GET",
  headers: {
 'x-apikey': apikey,
 'content-type': 'application/json'
 }
})
.done(successFunction)
.fail(failFunction)

function successFunction(data){




for(var i = 0; i < data.length; i++){
var random = Math.floor(Math.random() * data.length);


var imgURL = 'https://frontendspo16team-6270.restdb.io/media/';
var bild = data[random].Photo;
var fornamn = data[random].Firstname;
var efternamn = data[random].Lastname;
var epostadress = data[random].Email;
var klass = data[random].Classname;
var nuvarande = data[random].Bio;


$("#bilden").html("<img src=" + imgURL + bild + " +  '/>' ");
$("#namn").html(fornamn + " " + efternamn);
$("#post").html( epostadress);
$("#klassrum").html(klass);
$("#arande").html(nuvarande);



// console.log(data[firstname].Firstname);

}


}
 function failFunction(request, textStatus, errorThrown) {
 console.log('not work..');
 }

});