// About Package.json file

/* package.json file store your project details. Like project name, version
what are commands used, what are package inside 

use "npm init" command to create package.json file

when you install some module fron npm it will automatically create a node_modules in your project

Note: what if node_modules folder deleted. -> run npm install command in terminal all node modules are created again

When you push your project to GitHub. Don't push the node_modules folder -> it is useless 


To avoid this :
create a file called ".gitignore" main project folder
Then write the folder/fil names in gitignore file that you don't want to push 

Example: you don't want to push the node_modules folder
         simply write -->  /node_modules -> in gitignore file

*/ 