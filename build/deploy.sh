#!/bin/bash

# -------------------------------------------------------
# Usage:
# cd build/
# ./deploy.sh (push the content from master branch to gh-pages branch)
# -------------------------------------------------------

cd ../
echo "Deploying...."
git checkout gh-pages
git fetch origin master
git reset --hard FETCH_HEAD
git push -f origin gh-pages
git checkout master
echo "Finished"
