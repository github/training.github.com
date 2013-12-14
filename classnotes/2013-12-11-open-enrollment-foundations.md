---
layout: classnote
title: Open Enrollment GitHub Foundations
description: 
eventdate: 2013-12-11
tags: [notes]
course: foundations
teachers:
- teachers/jordanmccullough
- teachers/brentbeer
---

<!-- CLI Here -->
## Command Line History

### Day 1

    git --version
    git config --global user.name "GitHub Teacher"
    git config --global user.email "training@github.com"
    git config --global user.name
    git config --global user.email
    git config --global color.ui auto
    git config --global core.autocrlf input
    cat ~/.gitconfig
    git init project1
    echo "Home Page" > index.html
    cat index.html
    git commit -m"Initial commit of home page"
    echo "/* CSS Styles */" > styles.css
    git commit -m'Add basic stylesheet template"\'
    echo "body{}" >> styles.css
    git commit -m'Include initial styling for home'
    touch about.html
    git commit -m'Add first draft of about page'
    cat about.html
    git commit -m'Include basic html tag set'
    touch app.js
    vi app.js
    git add app.js
    git add app.js index.html
    git commit -m'Incorporate initial js app script'
    vi index.html
    git add index.html
    git diff index.html
    git diff --staged index.html
    git commit -m'Fix head tag, include body headers'
    cat styles.css
    git diff styles.css
    git add about.html
    git status
    git commit -m'Fix title and head tag'
    git status
    vi about.html
    git diff about.html
    git diff --word-diff about.html
    git diff --color-words about.html
    git status
    git add about.html
    git status
    git diff --staged --color-words about.html
    git status
    vi about.html
    git status
    git diff --color-words  HEAD about.html
    git add about.html
    git status
    git commit -m'Update the title and event date'
    git status
    git diff
    git add .
    git status -s
    git config --global alias.s "status -s -u"
    vi styles.css
    git s
    git diff
    git diff HEAD
    git add styles.css
    git s
    git commit -m'Cleanup line breaks, add header format'
    git s
    cd .git
    vi config
    git log
    git log --oneline
    git log --oneline --stat
    git log --format=raw
    git log --oneline --stat -3
    touch contact.html
    touch classes.html
    git s
    git add .
    git status
    git commit -m'Add like placeholder stuff here'
    git log --oneline
    git commit --amend
    git log -2 
    git s
    git log --oneline
    git log --oneline
    git revert ac1ddc8
    git status
    git reset --hard 
    git s
    git log --oneline
    git revert 461f0d9
    git log --oneline --stat
    cd project1
    git graphlive
    git graphlive 15 3
    git log --graph --oneline --all --decorate
    git reset --soft 461f0d9
    git status
    git log --graph --oneline --all --decorate
    git commit
    git log --graph --oneline --all --decorate
    touch team.html
    touch map.html
    touch availability.html
    git status
    git add availability.html
    git commit -m'Add initial layout of class schedule'
    git add map.html
    git commit -m'Show where our office is'
    git add .
    git s
    git commit -m'List out the trainer profiles'
    git status
    git log --graph --oneline --all --decorate
    git reset --mixed f40e0fc
    git status
    git log --graph --oneline --all --decorate
    rm map.html
    git status'
    git status
    git add .
    git status
    git commit -m'Add new template files for schedule and profiles'
    git status
    git log --graph --oneline --all --decorate
    cd my-projects/matthew-scripts
    git reset --hard
    git s
    git stash
    git branch
    git stash
    git checkout master
    git status
    git reset --hard 461f0d9
    git status
    git log --oneline --stat -1
    git remote add origin https://github.com/githubteacher/project1.git
    git remote -v
    git push -u origin master
    git remote -v
    git remote -v
    git status
    git fetch origin
    git pull origin
    git branch
    git branch cleanup
    git checkout cleanup
    git rm classes.html app.js styles.css
    git s
    git commit -m'Remove empty placeholder files'
    git branch
    git checkout master
    git checkout cleanup 
    git branch
    git push -u origin cleanup
    git branch -a
    git branch -r
    git branch -a

### Day 2
    git status
    mkdir my-big-idea
    cd my-big-idea
    touch README.md
    touch CONTRIBUTING.md
    touch index.html
    git status
    git init
    git status
    git add .
    git status
    git commit -m'Initial commit, project start'
    git status
    cd ..
    mkdir student
    cd student
    git clone https://github.com/githubstudent/project1.git
    git status
    cd project1
    git status
    git branch
    git branch jordanmcculllough
    git branch
    git checkout jordanmcculllough 
    cd ..
    cd student/project1
    git branch -r
    git branch
    touch jordanm.md
    echo "Jordan is the GitHub trainer for 12/12/13" > jordanm.md
    git status
    git add .
    git status
    git s
    git commit -m'Add jordan info description'
    git status
    git remote -v
    git branch
    git push -u origin jordanmcculllough 
    git branch
    vi jordanm.md
    git add .
    git s
    git commit -m'Add full name'
    git push
    git pull
    git checkout master 
    git pull
    git remote add teacher https://github.com/githubteacher/project1.git
    git remote -v
    git branch
    git pull teacher master
    git branch
    git push
    cd ..
    mkdir teacher
    cd teacher
    cd ..
    cd teacher
    git clone https://github.com/githubteacher/foundations-collaboration.git
    cd foundations-collaboration
    git branch
    git status
    cd foundations-collaboration
    git status
    git branch
    git branch jordan
    git config --list --global
    git branch
    git checkout jordan
    git checkout jordan 
    cd ..
    git checkout jordan 
    echo "Jordan was here." > jordan.md
    git s
    git add .
    git s
    git commit -m'Add jordan information'
    git config --global alias.lg "log --graph --all --decorate --oneline"
    git lg
    git push -u origin jordan
    git branch
    git checkout master 
    git fetch
    git lg
    git branch -a
    git merge origin/master
    git status
    git branch -a
    git remote -v
    git branch
    git branch -vv
    git fetch
    git merge origin/master
    git log --oneline --decorate  -5
    git branch
    git branch -d jordan
    git branch
    git branch feature
    git checkout feature 
    vi README.md
    git add .
    git status
    git commit -m'Add description of class repo'
    git branch
    git grpahlive 15
    vi README.md
    git add .
    git status
    git commit -m'Add event date for day 2'
    vi README.md
    git s
    git add .
    git commit -m'Add training contact email'
    git checkout master
    git merge feature
    git branch -vv
    git status
    git branch -d feature 
    git branch feature2
    git checkout feature2 
    touch CONTRIBUTING.md
    git s
    git add .
    git s
    git commit -m'Add initial placeholder for contrib'
    git s
    echo "# Contributing Guidelines" > CONTRIBUTING.md
    git s
    git add .
    git commit -m'Add title to contrib message'
    git s
    echo "-----" >> CONTRIBUTING.md
    echo "as of 12/12/13" >> CONTRIBUTING.md
    git s
    git add .
    git commit -m'Add file date'
    git s
    git checkout master 
    vi README.md
    git add .
    git s
    git commit -m'Remove date'
    git s
    git branch
    git merge feature2 
    git log --format=raw -1
    git branch
    git branch -d feature2
    git push
    git status
    git branch -vv
    git branch -a
    git fetch --prune
    git branch -a
    git checkout -b recovery-example
    git checkout master 
    git merge origin/master
    git branch
    git checkout recovery-example 
    generaterandomchanges 10 random txt
    git reset --soft ab222dd^
    git status
    git commit -m'Add 10 random files'
    git s
    git status
    git push -u origin recovery-example 
    git branch -vv
    generaterandomchanges 5 more-stuff txt
    git reset --hard origin/recovery-example
    git branch -vv
    git reflog
    git reset --hard HEAD@{1}
    cler
    git reset --hard origin/recovery-example 
    git checkout master 
    git branch
    git branch -d recovery-example 
    git branch -D recovery-example
    git branch
    vi README.md
    git status
    git rm jordan.md
    git s
    git commit -m'Remove jordan'
    git status
    git reset HEAD^
    git s
    git branch
    git stash
    git status
    git checkout -b tidy-up
    git stash pop
    git status
    git add README.md
    git commit -m'Readme update'
    git add .
    git s
    git rm jordan.md
    git status
    git commit -m'Remove jordan everywhere'
    git status
    git rm LICENSE
    git status
    git stash
    git status
    git checkout master
    git checkout -b license-updates
    git stash --list
    git stash list
    git show stash@{0}
    git stash git stash list
    git branch
    git checkout master 
    git lg
    git tag V1.0
    git show V1.0
    git push origin V1.0
    git tag -a V0.8 31f0c45
    git push origin V0.8
