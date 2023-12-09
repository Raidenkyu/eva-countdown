#!/bin/bash

# Replace <docker-image> with the output of deploy.sh
# Replace <api_token> with the API token

curl --netrc -X PATCH https://api.heroku.com/apps/eva-countdown-server/formation \
  -d '{
  "updates": [
    {
      "type": "web",
      "docker_image": "<docker-image>"
    },
    {
      "type": "worker",
      "docker_image": "<docker-image>"
    }
  ]
}' \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.heroku+json; version=3.docker-releases" \
  -H "Authorization: Bearer <api_token>"