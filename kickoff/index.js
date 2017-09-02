var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){
	url = 'http://www.imdb.com/title/tt1229340/';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);
			var title, release, rating;
			var json = {title: "", release : "", rating: ""};

			$('h1').filter(function(){
				var data = $(this);

				title = data.text();
				release = data.children().last().children().text();
				
				json.title = title;
				json.release = release;
			});

			$('.ratingValue strong span').filter(function(){
				var data = $(this);

				rating = data.text();

				json.rating = rating;
			});
		}
		else{
			console.log("SHITTT");
		}

		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
			console.log("file written");
		});

		res.send('Scrape complete');
			
	});

});

app.listen('3000');
console.log('Listening on port 3000...');
exports = module.exports = app;