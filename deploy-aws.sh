#!/bin/sh
set -x

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
npm install
npm run build
aws s3 sync public s3://jawahar.tech --delete
