#!/bin/bash

docker-compose stop
git pull
docker-compose build
docker-compose up -d