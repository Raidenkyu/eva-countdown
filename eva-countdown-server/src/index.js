const express = require("express");
const bodyParser = require("body-parser");

const request = require('request');
const cheerio = require('cheerio');

const app = express();

// JSON bodyparser (parses JSON request body into req.body)
app.use(bodyParser.json());

// Adding headers (CORS)
app.use((_, res, next) => {
    // Allow connections for all origins
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Allowed request methods
    res.setHeader("Access-Control-Allow-Methods", "GET");
    // Allowed request headers
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, authorization");

    return next();
});

app.use('/web', express.static('web'));

// Get Release Date
app.get("/", (_req, res) => {

    request({
        method: 'GET',
        url: 'https://www.imdb.com/title/tt2458948/releaseinfo?ref_=tt_dt_rdat'
    }, (err, _res, body) => {
        if (err) return res.json({ error: err });

        let $ = cheerio.load(body);

        const date = $('td.release-date-item__date').map(function () {
            return $(this).text().trim();
        }).get()[2];

        res.json({ date: date });

    });
});

// Listening for requests on the specified port

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening in ${port}`);
});

