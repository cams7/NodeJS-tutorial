#Acesse o tutorial "Como Instalar o Node.js em um Servidor Ubuntu 14.04" através da url: https://www.digitalocean.com/community/tutorials/como-instalar-o-node-js-em-um-servidor-ubuntu-14-04-pt. 

#Comandos UTIL

#Matar processo
- kill -9 <pid>

#Descobrir processo pela porta
- sudo lsof -t -i:<port>
- fuser -n tcp -k <port>
- sudo netstat -lpn |grep :<port>

#Matar processo pela porta
- sudo kill -9 `sudo lsof -t -i:<port>`

# Comandos do Git
- git version
- git init
- git add -A | git add --all | git add .
- git status
- git commit -m "comment" | git commit -a -m "comment" | git commit -a --amend -m "comment"
- git log --oneline --decorate –-all –-graph
- git branch | git branch feature1 | git branch -d feature1
- git checkout feature1 | git checkout master | git checkout -b feature2
- git merge feature1 | git merge origin/master
- git stash save "comment" | git stash list | git stash apply stash@{0} | git stash drop stash@{0} | git stash pop | git stash branch feature5
- git remote add origin https://github.com/user/repository1 | git remote -v
- git push origin master | git push origin master -f
- git pull origin master
- git clone https://github.com/user/repository1 repository2
- git fetch
- git diff master origin/master
- git reset --soft <commit> | git reset --mixed <commit> | git reset --hard <commit> 
- git reflog