JEKYLL_ENV=production bundle exec jekyll build
scp -r _site/ hxk171430@starling.utdallas.edu:~
ssh hxk171430@starling.utdallas.edu
