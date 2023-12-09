# eva-countdown
A Chrome Extension with a countdown to the release date of anime movie Evangelion 3.0+1.0

This project was developed in 2021 with the intention to create my first Google Chrome extension, while trying to survive the boredom of writing a master thesis during the covid-19 pandemic.

## Repository Overview
In this repository can be found:
- The directory `eva-countdown-extension` with extension source code
- The source code of an NodeJS Express server, in `eva-countdown-server`, which works as a backend to the extension, supplying it with information scrapped from the movie IMDb page, and also hosts a simple HTML page with a link to download the compacted extension, ready to be installed in the browser. There are also some scripts to deploy and activate a docker image hosting the server

## TODO
It has been almost 3 years since I touched this project, and there are some aspects that could be improved:

- [ ] The used manifest version (2) is now deprecated and needs to be updated
- [ ] The entire extension and server can also be generalized to work as a countdown to every movie, by supplying their respective IMDb url
- [ ] Remove the dependency of the server, by allowing the extension to directly fetch the movie data from IMDb