#!/bin/bash

set -e

npm --prefix ./front/ i
npm --prefix ./front/ run build

ansible-playbook playbook.yml -K
