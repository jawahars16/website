#!/bin/sh
set -x

source .envrc
aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
npm install
rm -rf .cache
rm -rf public
npm run build
aws s3 sync public s3://jawahar.tech --delete
aws cloudfront create-invalidation --distribution-id=$DISTRIBUTION_ID --paths '/*'