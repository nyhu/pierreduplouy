#!/bin/bash

set -e

rm -rf dist
cd front
ng build --prod -op ./dist

ssh nyhu@nyhu.me rm -rf /srv/spaceships/nyhu/pierreduplouy.fr/front/pierreduplouy.front 
scp -r front/dist nyhu@nyhu.me:/srv/spaceships/nyhu/pierreduplouy.fr/front/pierreduplouy.front
ssh nyhu@nyhu.me 'cd /srv/spaceships/nyhu/pierreduplouy.fr && docker-compose build && docker-compose up -d'