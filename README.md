#Image Processing Api Project

---

##project description
buiding an error handling responsive web api that user inputs thorugh query parameters(name,width,height) to dynamically change dimentions of the image update the UI.

---

##criteria
1)separating dev folder(src) from production folder(build)
2)splitting the code over mulitiple files to reduce complexity and simplify debugging
3)scripts should be testing, compililing TS and starting the server without errors
4)api should support error handling and caching for samilar image resizing attempts
5)all test scripts made should pass and at least 1 per endpoint and one for image processing function(resizer function)

---

##how is it done
###1st criterium

1. create a src folder and inside it create index.ts(main dev file)
2. install typescript and its dependencies and ts excuter(npx) which compile index.ts to index,js in build folder

---

###2st criterium

1.  create an (api folder having the resizer function) within for routes folder inside src folder
2.  create a router file(process.ts) to handle errors and organize reqests & responses within for routes folder inside src folder
3.  link files together using import & export and finally linking them to index.ts(main dev file)

---

###3st criterium
1.create nodmon script {start = nodemon src/index.ts} => refresh server on saving
2.create build script {build = npx tsc} => creating the build folder whoch have the compiled js file
3. create jasmine testing script (test = npm run build && npm run jasmine) => testing input & output directories,output of the image api function ,
endpoint at url (localhost:7777/image)
4.create formating script {prettier = prettier --config .prettierrc 'src/**/*.ts' --write} => formating code (only the prettier extension work ,
the script alone didnt work)
5.create linting script {lint = eslint --ignore-path .eslintignore --ext .js,.ts} => checking for code quality
} => formating code (only the prettier extension work ,the script alone didnt work)

---

###4st criterium  
1)using if statements to make responses if there are :
a) no query paremeters
b) malshaped parameters
c) image not available

2. using (if statements) to display the saved output of resizer function in (my processed image)folder if the same dimentions used again

NOTE : #### for input images you have fruit images (apple , banana and orange) 
       #### the URL which we add query parameter === //localhost:7777/image 
       #### an example of URL with query === //localhost:7777/image?filename=apple&width=200&height=200 (where port =7777 ,name = apple ,width = 200 ,height = 200)

---

###5st criterium
1)use .toBe() and toEqual() ensure input and output directories have the expected values

2)run a test for the output of the resizer using .toEqual() to ensure it give the expected results when arguments are passed into it

3)run a test for the endpoint at url (/image) to ensure it has status (200) and work properly

---
