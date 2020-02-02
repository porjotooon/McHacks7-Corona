const texts = ['Coronavirus']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;

    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);


    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;

    }
    setTimeout(type, 200);


}());




var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20200101&end_date=20200201&q=Coronavirus&sort=newest&api-key=GEJmtGjWIOZ8X3EIbTfAlaTunOY13Bzi'

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