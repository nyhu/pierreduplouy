#!/bin/bash

set -e

rm -rf dist
cd front
ng build --prod -op ../dist

cd ..
ansible-playbook playbook.yml -K
