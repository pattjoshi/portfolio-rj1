
### Images: 
   ![portfolio-rj1](https://github.com/pattjoshi/portfolio-rj1/blob/master/src/images/React(1).png)


#  <u>React App </u>
### How To Use :-

####    Step 1 :- 
 Download the zip file or clone the repo
####    Step 2 :- 
In terminal type :
```
npm install
```

#### Step 3 :-
```
npm start
```
## Demo :- [Visit to see the deployed React App](https://pattjoshi.github.io/portfolio-rj1/ "click to open")
<hr>
<hr>

##  How to deploy react app using github :-


####    Step 1: Create a repo in github and add your project to the repo as following :-
 ```
 git init
 git add .
 git commit -m "first commit"
 git branch -M master
 git remote add origin https://github.com/SahilMund/Breaking_Bad.git
 git push -u origin master
 ```

####  Step 2 :  Add homepage to package.json

```
"homepage": "https://myusername.github.io/my-app",
```
#### Step 3: Install gh-pages
```
nmp :-
    npm install --save gh-pages
(or)
yarn :-
    yarn add gh-pages
```

#### step 4:    Add the following scripts in your package.json:
```
"scripts": {
   "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    }
```

#### step 5 :-  Deploy the site 
######  By running npm run deploy , it will automatically create a build folder
```
npm run deploy
```

#### step 6 :-  For a project page, ensure your project’s settings use gh-pages

######  Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

(It may sometimes sets by default so no need to do it every time)
<img alt="" src="https://i.imgur.com/HUjEr9l.png">

🙏 If you find this repo helpful then don't forget to give a star ❇️ to this repository. :)
