var texts = ['Coronavirus Headlines :']
var count = 0;
var index = 0;
var currentText = '';
var letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;

    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);


    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        //index = 0;

    }
    setTimeout(type, 120);


}());

let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
let fourth = document.querySelector('#fourth');
let fifth = document.querySelector('#first');
let sixth = document.querySelector('#sixth');
/*
let seventh = document.querySelector('#first');
let eighth = document.querySelector('#eighth');
let ninth = document.querySelector('#ninth');
let tenth = document.querySelector('#tenth');
*/


const api = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200101&end_date=20200201&q=Coronavirus&sort=newest&api-key=GEJmtGjWIOZ8X3EIbTfAlaTunOY13Bzi`;

fetch(api).then(response =>{
    return response.json();
}).then(data => {
    console.log(data);
    first.textContent = data.response.docs[0].headline.main;
    second.textContent = data.response.docs[1].headline.main;
    third.textContent = data.response.docs[2].headline.main;
    fourth.textContent = data.response.docs[3].headline.main;
    fifth.textContent = data.response.docs[5].headline.main;
    sixth.textContent = data.response.docs[7].headline.main;
    /*
    seventh.textContent = data.response.docs[6].headline.main;
    eighth.textContent = data.response.docs[7].headline.main;
    ninth.textContent = data.response.docs[8].headline.main;
    tenth.textContent = data.response.docs[9].headline.main;
    */
})
//var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200101&end_date=20200201&q=Coronavirus&sort=newest&api-key=GEJmtGjWIOZ8X3EIbTfAlaTunOY13Bzi'

/*
function setup() {
    noCanvas();
    loadJSON(url, gotData);
}

function gotData(data) {
    var articles = data.response.docs;

    for (var i = 0; i < articles.length; i++) {
        createElement('h1', articles[i].headline.main);
        createP(articles[i].snippet.main);
    }

    //println(data.response.docs)
}

function getHTML(json) {
    var result = "";
    for (var i in json.response) {
        var area = json.response[i];
        result += "<div>";
        result += "<h1>" + area.areaCode + "</h1>";
        result += "<ul>";
        for (var j in area.entry) {
            var entry = area.entry[j];
            result += "<li>";
            result += "<p>" + entry.name + "</p>";
            result += "<p>" + entry.city + "</p>";
            result += "<p>" + entry.phonenumber + "</p>";
            result += "<p>" + entry.date + "</p>";
            result += "<p>" + entry.available + "</p>";
            result += "</li>"
        }
        result += "</ul>";
        result += "</div>";
    }
    return result;
}

var createArrayData = (function () {
    var dataRef = '/lib/json/data.json';
    var json_obj;
    $.getJSON(dataRef, function (data) {

        var json_obj = data;
        $('.output').html(getHTML(json_obj));
    })

}());
*/
