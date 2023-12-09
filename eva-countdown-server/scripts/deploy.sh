#!/bin/bash

# $1 is the heroku auth:token

docker login --username=_ --password=$1 registry.heroku.com

docker build -t registry.heroku.com/eva-countdown-server .
docker push registry.heroku.com/eva-countdown-server

image_id=$(docker inspect registry.heroku.com/eva-countdown-server --format={{.Id}})

echo $image_id