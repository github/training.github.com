---
layout: bare
title: Heartland Online Git Training
description:
tags: [notes, private, online, class]
path: classnotes/2013-12-05-heartland-online-class.md
eventdate: 2013-12-05
---

Held on December 5th and 6th, 2013

* Taught by Peter Bell ([Twitter](http://twitter.com/peterbell), [GitHub](https://github.com/peterbell))

## Installation
* Git Installation
    * [The Git-SCM Web Site (All Platforms)](http://git-scm.com)
    * [The GitHub for Windows Client and Command Line](http://windows.github.com)
* Minimum is 1.7.10, but can have issues with HTTPS credential prompting.
* Best is 1.8.X or higher

## Suggested Books, Articles
* [Free ProGit Book](http://git-scm.com/book)
* [Getting started with Version Control](http://teach.github.com/articles/lesson-new-to-version-control/)
* [The GitHub Flow](http://scottchacon.com/2011/08/31/github-flow.html)
* [DVCS Workflows Book](https://github.com/zkessin/dvcs-workflows)
* [Git Cheat Sheets](http://teach.github.com/articles/git-cheatsheets/)
* [Git Workflow Links](https://pinboard.in/u:matthew.mccullough/t:git+workflow)

## Course Materials, Links
* [Git Teaching Materials](http://teach.github.com)
* [Course Slides](http://teach.github.com/articles/course-slides/)
* [Post-event Git and GitHub questions](https://github.com/githubtraining/feedback/)
* [Free Office Hours Sessions](http://training.github.com/web/free-classes/)

## Tools, Tips, Shortcuts

* [ghi gem](https://github.com/stephencelis/ghi)
* [hubgem](https://github.com/defunkt/hub)
* [gist gem](https://github.com/defunkt/gist)
* [gitg](http://git.gnome.org/browse/gitg) instead of gitk
* [tig](http://gitready.com/advanced/2009/07/31/tig-the-ncurses-front-end-to-git.html)
* [Matthew's shell scripts](https://github.com/matthewmccullough/scripts)
* [Matthew's Git aliases](https://github.com/matthewmccullough/dotfiles) (in the gitconfig file)

## Resources

* SSL Certificates
    * [Adding SSL Certificates for GitHub.com (Common for Windows XP)](http://stackoverflow.com/questions/3777075/https-github-access/4454754#4454754)
    * Disabling SSL Certificate Checks for Git:
            git config --global http.sslVerify false
* [Open Source Git Ignore Templates](https://github.com/github/gitignore)
* [Book Authoring on Git and GitHub](http://teach.github.com/articles/book-authoring-using-git-and-github/)
* [Post Receive Hooks](https://help.github.com/articles/post-receive-hooks)
* [GitHub Training Videos](http://training.github.com/resources/videos/)
* [Using Git with Media Temple](http://carl-topham.com/theblog/post/using-git-media-temple/)
* [GitHub Training Feedback and Follow-up Questions](https://github.com/githubtraining/feedback/issues?state=open)
* [GitHub Commit Status API for Continuous Integration](https://github.com/blog/1227-commit-status-api)
* [Git Credential Cache for HTTP](http://teach.github.com/articles/lesson-git-credential-cache/)
* [GitHub Issues Cheatsheet](http://teach.github.com/articles/github-issues-cheatsheet/)
* [Jenkins Git Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin)
* [Open Source Git Ignores](https://github.com/github/gitignore)
* [Ship of Theseus - Related to Similarity Index](http://en.wikipedia.org/wiki/Ship_of_Theseus)
* [git-p4 Perforce Script](http://answers.perforce.com/articles/KB_Article/Git-P4)
* [Unix watch command](http://en.wikipedia.org/wiki/Watch_(Unix\))
* [SHA-1 Hash Collisions](http://git-scm.com/book/ch6-1.html#A-SHORT-NOTE-ABOUT-SHA-1)
* [NPD Git Cheatsheet](http://ndpsoftware.com/git-cheatsheet.html)
* [More Git Cheatsheets](http://teach.github.com/articles/git-cheatsheets/)

## Git Foundations

## Topics
* Introductions
* History of Git and your initial setup
* Git configuration and its inheritance
* SSH Authentication and your first repository
* Understanding and thinking in Git's three stages
* Adding, committing, and diff-ing code changes
* The Similarity Index; Moving, Renaming, and Removing files
* Network protocols, proxies, and Git's speed
* Managing and using Git Remotes
* Overview of Git's Architecture
* Branching, Tagging, and Stashing
* Merging, Rebasing, and managing conflicts
* Undoing your work with Git
* Popular enterprise branching/workflow strategies


## Objectives
* Understand how Git works and how to apply that to day to day development.
* Learn how GitHub makes distributed collaboration both effective and enjoyable.
* Practice the use of Pull Requests to make contributions to any project.
* Learn the basic 10 commands that will appear in your every-day use of Git.
* Know how to “back out” mistakes using Git’s incredible history and ability to revert almost any change.
* Leverage the features of GitHub for easier collaboration with colleagues.
* Discover how the offline capabilities of Git work “under the hood”.


## Command Line History

    git config user.name
    mkdir heartland
    cd heartland
    clear
    git --version
    pwd
    git status
    git init web1
    cd web1
    git status
    touch index.html
    touch index.css
    ls
    git add .
    git status
    clear
    git config --global user.name
    git config --global user.name "Daffy Duck"
    git config --global user.name
    git config --global user.name "Peter Bell"
    git config --global user.email
    git config --global user.email "daffy@disney.com"
    git config --global user.email
    git config --global user.email "peter@pbell.com"
    git config --global user.email
    vi ~/.gitconfig
    git config --global color.ui auto
    vi ~/.gitconfig
    ls
    git status
    git commit -m "Created the home page for the website"
    git status
    touch about.html
    touch about.css
    touch contact.html
    touch contact.css
    git status
    git add abo*
    git status
    git commit -m "Added an about us page to the website"
    git status
    ls
    git add .
    git status
    git commit -m "Added contact us page to the website"
    git status
    git log
    git log --oneline
    git config --global alias.s "status -s"
    git status
    git s
    git config --global alias.lg "log --oneline --decorate --all --graph -30"
    git lg
    ls
    git mv index.html home.htm
    ls
    git s
    git status
    git commit -m "Renamed the home page"
    git s
    git status
    ls
    git status
    git add -A
    git status
    git commit -m "Renamed the stylesheet for the home page"
    git status
    ls
    touch test.txt
    git add .
    git status
    git commit -m "Added test file we're never really gonna wanna have"
    git status
    touch test1.txt
    git add .
    git commit -m "Added another test file"
    ls
    git rm test.txt
    git status
    git commit -m "Removed the test.txt file"
    ls
    rm test1.txt
    git status
    ls
    git add -A
    git status
    git commit -m "Deleted test1.txt file"
    touch test.log
    git status
    vi .gitignore
    ls -a
    git status
    git add .
    git status
    git commit -m "added .gitignore to ignore log files"
    vi ~/.gitconfig
    clear
    git config --global core.excludesfiles ~/.gitignore
    subl .git
    git lg
    ls
    git branch
    git branch cart
    git checkout cart
    ls
    touch cart.html
    git add .
    git commit -m "added markup for shopping cart"
    touch cart.css
    git add .
    git commit -m "Added the styling for the shopping cart"
    git lg
    ls
    git checkout master
    ls
    git lg
    git checkout master
    git merge cart
    ls
    git lg
    git branch -d cart
    git branch
    git status
    ls
    git checkout history
    git checkout -b history
    git branch
    touch history.html
    git add .
    git commit -m "Added history page to the website"
    touch history.css
    git add .
    git commit -m "Added styling for the history page"
    git checkout master
    vi home.htm
    git s
    git add .
    git commit -m "Added phone number to the website"
    git lg
    ls
    git checkout history
    ls
    vi history.html
    git status
    git commit -m "whatever"
    git commit -am "Added content to the history page"
    git lg
    git checkout master
    git merge history
    git status
    git lg
    git show 59dec14
    git lg
    git branch -d history
    git branch
    git checkout -b test
    git branch
    touch test.html
    git add .
    git commit -m "Adding test file"
    git lg
    git branch -d test
    git checkout master
    git branch -d test
    git branch -D test
    git lg
    ls
    git checkout -b founders
    touch founders.html
    git add .
    git commit -m "Added founders page to the site"
    touch founders.css
    git add .
    git commit -m "Added styling to the founders page"
    git lg
    git checkout master
    git merge founders --no-ff
    git status
    git lg
    git branch -d founders
    git lg
    ls
    git checkout -b products
    touch products.html
    git add .
    git commit -m "Added products page to the website"
    git checkout master
    git checkout -b locator
    touch locator.html
    git add .
    git commit -m "Added store locator"
    vi home.htm
    git diff
    git status
    git add .
    git status
    git diff
    git diff --staged
    git diff HEAD
    git commit -m "Added link to the store locator"
    git lg
    cat home.htm
    git branch
    git checkout products
    cat home.htm
    git lg
    vi home.htm
    git add .
    git commit -m "Added link to the products page"
    git s
    git status
    git lg
    git checkout master
    git merge locator --no-ff
    git lg
    git branch -d locator
    git status
    git lg
    git merge products
    subl home.htm
    git status
    git add .
    git status
    git commit
    git status
    git lg
    git branch
    git branch -d products
    git branch
    ls
    git checkout -b my_account
    touch my_account.html
    git add .
    git commit -m "Markup for my account page"
    touch my_account.css
    git add .
    git commit -m "Styling for my account page"
    git status
    git checkout master
    git checkout -b recommendation
    touch recommendation.html
    git add .
    git commit -m "Added a recommendations page to the site"
    git lg
    git checkout my_account
    git rebase master
    git lg
    git checkout master
    git merge my_account --no-ff
    git status
    git lg
    git checkout recommendation
    git rebase master
    git lg
    git checkout master
    git merge recommendation --no-ff
    git lg
    git branch -d recommendation
    git branch -d my_account
    git lg
    git checkout -b feature1
    touch feature1.html
    git add .
    git commit -m "Added feature 1"
    git checkout master
    git checkout -b feature2
    touch feature2.html
    git add .
    git commit -m "Added feature 2"
    git lg
    git checkout feature1
    git rebase master
    git checkout master
    git merge feature1
    git lg
    git checkout feature2
    git rebase master
    git checkout master
    git merge feature2
    git lg
    git branch -d feature1
    git branch -d feature2
    git branch
    git lg
    git tag release1.1
    git lg
    touch testme.txt
    git add .
    git commit -m "Test commit"
    git lg
    git show release1.1
    git tag -a release1.2
    git lg
    touch testme2.txt
    git add .
    git commit -m "Added another test file"
    git lg
    git show release1.2
    git status
    git lg
    cd ~/Dropbox/code/github
    git clone https://github.com/githubteacher/example-basic.git
    cd example-basic
    touch testme22.txt
    git add .
    git commit -m "A commit"
    git push
    subl ~/.gitconfig
    git push
    clear
    cd ..
    clear
    git status
    cd heartland
    ls
    git init web2
    cd web2
    git status
    touch index.html
    git add .
    git status
    git commit -m "Added new home page markup"
    touch index.css
    git add .
    git commit -m "Added styling for the home page"
    git log
    touch index.js
    git add .
    git commit
    git log
    git lg
    git show d390
    git checkout about_us
    git checkout -b about_us
    git branch
    touch about_us.html
    git add .
    git commit -m "Added about us page to the website"
    touch about_us.css
    git add .
    git commit -m "Added styling for the about us page"
    git checkout master
    git checkout -b history
    touch history.html
    git add .
    git commit -m "Added history page to the website"
    touch history.css
    git add .
    git commit -m "Added styling to the history page"
    ls
    git checkout about_us
    ls
    git checkout master
    ls
    git lg
    git checkout about_us
    vi index.html
    git add .
    git commit -m "Added home page link to the about us page"
    git checkout history
    vi index.html
    git add .
    git commit -m "Added home page link to the history file"
    git checkout about_us
    git rebase master
    git lg
    git checkout master
    git merge about_us
    ls
    git lg
    git branch -d about_us
    git lg
    git checkout history
    git rebase master
    git status
    subl index.html
    git add .
    git status
    git rebase --continue
    git status
    ls
    cat index.html
    git lg
    git checkout master
    ls
    git merge master
    git merge history
    ls
    git lg
    git mv index.html home.htm
    git status
    git commit -m "Renamed home page to be home.htm"
    subl .
    git status
    subl .
    git status
    git add -A
    git status
    git commit -m "Renamed home page stylesheet"
    ls
    mv index.js home.js
    git status
    git add -A
    git status
    git commit -m "Renamed home page javascript"
    rm home.js
    git status
    git add -A
    git status
    git commit -m "Removed the home page javascript"
    ls
    git lg
    git branch -d history
    git status
    git lg
    git remote add origin https://github.com/githubteacher/web2.git
    git push -u origin master
    git push
    git pull
    cat .git/config
    git remote set-url origin https://github.com/githubteacher/web2.git
    git remote set-url origin https://github.com/githubteacher/web2222.git
    cat .git/config
    git remote set-url origin https://github.com/githubteacher/web2.git
    cat .git/config
    git branch
    git branch -a
    touch test.htm
    git add .
    git commit -m "test file here"
    git push
    git lg
    git checkout bde5
    ls
    git checkout -b old_release1.1
    git lg
    git branch -d old_release1.1
    git checkout master
    git branch -d old_release1.1
    git status
    git lg
    git pull
    ls
    cat test.htm
    cd ..
    git init web3
    cd web3
    touch index.html
    git add .
    git commit -m "Home page"
    touch index.css
    git add .
    git commit -m "Styling for home page"
    cd ..
    cd web2
    git lg
    git fetch
    git lg
    cat home.htm
    git lg
    git merge origin/master
    git lg
    cat home.htm
    cd ..
    cd web3
    git lg
    git remote add origin https://github.com/githubteacher/web3.git
    git push -u origin master
    git push
    clear
    cd ..
    mkdir githubstudent
    cd githubstudent
    git status
    git clone https://github.com/githubstudent/web3.git
    touch githubstudent.txt
    git add .
    cd web3
    git status
    git lg
    touch githubstudent.tst
    git add .
    git commit -m "Adding a cool new file"
    git push
    cd ..
    cd web3
    clear
    cd ..
    mkdir colloborator
    cd colloborator
    git status
    ls
    git clone https://github.com/githubteacher/web3.git
    touch peter-githubteacher.txt
    git add .
    cd web3
    touch peter-githubteacher.txt
    git add .
    git commit -m "Added a cool new file again"
    git pull
    git lg
    git push
    git pull
    clear
    git pull
    git checkout -b peterbell
    touch peterbell-cool-file.txt
    git add .
    ls
    vi peter-githubteacher.txt
    git s
    git commit -m "Added a new file"
    git add .
    git commit -m "Added some more content to my other file"
    git s
    git push -u origin peterbell
    git lg
    subl peter-githubteacher.txt
    vi peter-githubteacher.txt
    git add .
    git commit -m "Finishing up the pull request"
    git pull
    git push
    git checkout master
    git pull
    git lg
    git branch
    git branch -d peterbell
    git checkout -b test
    touch test44.txt
    git add .
    git commit -m "Test commit"
    git checkout master
    git branch -d test
    git gl
    git lg
    git branch -D test
    clear
    git lg
    ls
    touch about.html
    touch about.css
    touch contact.html
    touch contact.css
    git add *.html
    git s
    git commit -m "Added markup for about us and contact us pages"
    git add .
    git commit -m "Added stylesheets for about us and contact us pages"
    git lg
    git s
    git reset HEAD~2
    git s
    git lg
    git add abo*
    git s
    git commit -m "Added an about us page to the website"
    git add .
    git commit -m "Added contact page to the website"
    git lg
    git status
    git lg
    git reset --soft HEAD~2
    git s
    git status
    git commit -m "Added about us and contact us pages to the websiet"
    git lg
    git show 906d7af
    git commit --amend
    git lg
    git reset --hard HEAD~1
    git lg
    ls
    git lg
    git reflog
    git checkout 250e1a4
    ls
    git checkout -b temp
    git lg
    git checkout master
    git merge temp
    git branch -d temp
    ls
    git lg
    git revert 250e1a4
    git lg
    ls
