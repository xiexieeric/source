var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/scrape', function(req, res){
	url = 'http://www.imdb.com/chart/top?ref_=nv_mv_250_6';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);
			var movieData = [];
			var decades = {};
			$('.lister-list').children().each(function(i, elem){
				var movie = {};
				movie.title = $(this).children('.titleColumn').children().first().text();
				year = $(this).children('.titleColumn').children().last().text();
				year = +year.substring(1,5);
				movie.year = year;
				var decade = Math.floor(year/10)*10;
				if(decades[decade] == null)
					decades[decade] = 1;
				else
					decades[decade] = decades[decade] + 1;
				movieData.push(movie);
			});
			var json = [];
			for(var key in decades){
				var item = {};
				item.decade = key;
				item.num = decades[key];
				json.push(item);
			}

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