---
layout: classnote
title: Private GitHub Foundations
description: Git and GitHub Foundations class
eventdate: 2013-12-09
tags: [notes]
course: foundations
teachers:
- teachers/brentbeer
- teachers/matthewmccullough
---

## Command Line History

Dec 9th

```
git --version
git config --global user.name 
git config --global user.name "GitHub Student"
git config --global --replace-all user.name "GitHub Student"
git config --global user.email
git config --global --replace-all  user.email "training+githubstudents@github.com"
git config --list
git config --system user.email "brentbeer@github.com"
git config --list
cat ~/.gitconfig 
git config --global color.ui
git config --global color.ui auto
git config --global core.autocrlf
git init newproject
cd newproject/
ls
ls -a
git status
ls .git/
cat .git/config
cat .git/HEAD
cat .git/refs/heads/master
git status
touch first.txt
vim first.txt
git status
git add first.txt
git status
git commit
cat .git/HEAD
cat .git/refs/heads/master
git status
vim first.txt 
git status
git help commit
git commit -am "My ocd kicked in, needed a capital T"
vim first.txt 
git status
git diff
git add first.txt
git status
git diff
git diff --staged
vim first.txt
git status
git diff --staged
git diff
git diff HEAD
cat .git/refs/heads/master
git diff 46a11e3
git diff --color-words
git diff --staged --color-words
git diff --staged --word-diff
git diff --staged --stat
git status
git add first.txt
git status
git commit -am "added last line, and shorter number references"
git log
git log --format=email
git log --stat
git log --patch
git log -p
git log -p --format=email
git log --format=raw
git log -1 -p
git log -1 -p --word-diff
git log -1 -p --color-words
git log --graph
cd ../git/
ls
git log
git log --author=Jeff
git log --oneline --graph --decorate --all --no-merges
git log --oneline --graph --decorate --all
cd ../newproject/
touch welcome.md
vim welcome.md 
git status
git add welcome.md
git commit -m'welcome to the freezing zone'
git status
git rm welcome.md
git status
git commit -m "no longer needing a welcome"
ls
mkdir travel
touch travel/sanfrancisco.md
touch travel/personal.md
vim travel/personal.md 
git status
git status -b
git status -s
git help status
git status -u
cd travel/
git status
ls
cd ..
git add .
git status
git commit -m "adding travel plans"
git rm --cached -- travel/personal.md
git status
git commit -m "no longer tracking personal travel"
git status
ls travel/
mkdir travel/north_america
git mv travel/sanfrancisco.md travel/north_america/
git status
touch travel/new-york.md
git add travel/new-york.md
git status
git commit -m "created NORTH AMERICA, and new york"
git status
open
open .
vim travel/new-york.md 
git status
git commit -am "new york plans"
git status
vim travel/new-york.md 
git status
git add -A travel/north_america/
git status
git rm travel/new-york.md
git commit -m "moved newyork into NORTH AMERICA"
git log -1 -M20
git log -1 -M20 -p
git log -1 -M20 --stat
git log -1 --stat
vim travel/north_america/new-york.md 
git mv travel/north_america/new-york.md travel/
git status
git add travel/new-york.md
git status
git commit -m "dropping it back into generic travel"
git log -1 --stat
git log -1 --stat -M
git log -1 --stat -M73

git log --stat -M50
git log --stat -M20
git status
echo "See everyone at 10:35 PST"
ls
git log -1 -p
git log -1 --stat
git log -1 --stat -M
git status
ls travel
git status
touch .gitignore
vim .gitignore 
git status
vim .gitignore 
git status
touch .env
git status
ls -a
git add .gitignore
git status
git commit -m "do not track personal plans, or env file"
mkdir secret_plans
git status
touch secret_plans/europe.md
git status -u
vim .gitignore 
git status
git commit -am "please dont watch my secret plans"
cat .gitignore 
touch travel/.gitignore
ls -a
vim .gitignore 
touch my_ideas.secret
git status
git commit -am "ignore .secret files"
vim travel/travel_secrets.secret
vim travel/.gitignore 
ls travel/
vim travel/.gitignore 
git status
git add -A .
git status
git commit -m "share secret travel plans"
git status
vim .gitignore 
mkdir dir1
cd dir1/
generaterandomfiles 5 special txt
git status -u
touch importantFile.txt
vim importantFile.txt 
git status -u
cd ..
vim .gitignore
git status -u
vim .gitignore
git status -u
git add dir1/
git status
git add .gitignore
git diff --staged
git commit -m "ignore all dir1 except 1 file"
git status
git config core.excludesfile
cat /opt/boxen/config/git/gitignore
cat .git/HEAD
cat .git/refs/heads/master
git log -1
git log -1 --decorate
git branch
git branch test1
git branch
git log -1 --decorate
ls .git/refs/heads
git log -2 --oneline --decorate
git branch test-old 0511192
git log -2 --oneline --decorate
du -sh .git/refs/heads/test-old 
du -sh .git/refs/heads/master 
git branch -d test-old 
vim first.txt 
git status
git checkout HEAD -- first.txt
git status
git checkout -b test-second-feature
cat .git/HEAD
git status
git branch
ls
vim README.md
git status
git add .
git status
git diff --staged
vim README.md 
git add README.md
git commit -m "README to explain what this is"
git status
git checkout master
git log --oneline --decorate --all --graph
git branch
git branch -m test-second-feature readme-creation-repo-explanation
git log --oneline --decorate --all --graph
git checkout master
git merge readme-creation-repo-explanation
git log --oneline --decorate --all --graph
git branch -d test1 
git branch -d readme-creation-repo-explanation 
git branch
git checkout -b startup-scripts
mkdir scripts
touch scripts/setup
vim scripts/setup 
chmod 755 scripts/setup 
git status
git status -u
scripts/setup 
git status
git add .
git commit -m "create setup script"
git status
vim scripts/setup 
scripts/setup 
vim scripts/
scripts/setup 
git status
ls 
ls -a
git commit -am "use proper shell command"
git status
git log --oneline --decorate --graph
git checkout master
vim README.md 
git status
git commit -am "added note to readme to see scripts"
git status
git log --oneline --decorate --graph
git log --oneline --decorate --graph --all
git merge startup-scripts -m'pull in startup-scripts'
git log --oneline --decorate --graph --all
git log --format=raw -2
git log --format=fuller -2
git log --format=fuller -3
git status
git branch
git branch -d startup-scripts 
git checkout -b conflict-generator
ls
vim scripts/setup
git status
git diff
git commit -m "create .env.example and populate it with some info"
git commit -am "create .env.example and populate it with some info"
git status
scripts/setup
which bash
vim scripts/setup
git commit -am "bin bash not usr bin bash"
checkout master
git checkout master
vim scripts/setup 
git commit -am "using ohmyzsh for the superior shell"
git status
git log --oneline --decorate --graph --all
git log --oneline --decorate --graph --all -10
git merge conflict-generator
git status
git diff
vim scripts/setup
git status
git add scripts/
git status
git commit
git log --oneline --decorate --graph --all
git log --oneline --decorate --graph --all -10
git show c09660a
git branch -d conflict-generator 
git checkout -b new-conflict
vim README.md
git commit -am "added brntbeer as author"
git checkout master
vim README.md
git status
git commit -am "link to brntbeer's twitter as author"
git lol -10
git merge new-conflict 
git status
git diff
git merge --abort
git status
git lol -10
git log new-conflict -1
git remote add origin https://github.com/githubstudent/newproject.git
git remote -v
git push -u origin master
git branch
git checkout new-conflict 
git push -u origin new-conflict
git checkout master
git checkout -b contribution-guidelines
touch CONTRIBUTING.md
git status
git add .
git commit -am "blank file to start contribution guidelines"
git push -u origin contribution-guidelines 
git status
vim CONTRIBUTING.md 
git status
git commit -am "steps for contributing"
git push origin contribution-guidelines 
git config --local credential.helper cache
vim README.md 
git status
git push origin contribution-guidelines
git commit -am "readme to point to contributing steps"
git push origin contribution-guidelines
vim CONTRIBUTING.md 
git status
git commit -am "don't forget to clone"
git push origin contribution-guidelines
git status
git checkout master
cat README.md
ls
git fetch
git status
git merge origin/master
git status
git branch
```

Dec 10th

```
echo 'Welcome Back!'
git status
git fetch
git branch
git branch -r
git status
git pull
git log -1
git log -2
git config user.nae
git config user.name
git status
git checkout -b contributing-feature
vim CONTRIBUTING.md 
git status
git diff --color-words
git add .
git commit -m "friendlier and more explicit contributing guidelines"
git push -u origin contributing-feature
git branch -r
git fetch --prune origin
git branch
git checkout master
git status
git pull
git checkout test-branch
git status
git checkout master
git pull
git checkout test-branch
git merge origin/test-branch 
vim .git/config 
vim .git/config 
cd ..
git clone https://github.com/githubstudent/example-basic
git log -1
cd example-basic/
git log -1
git remote -v
git branch githubstudent-welcome
git log -1 --decorate
cat .git/refs/heads/githubstudent-welcome 
git checkout githubstudent-welcome 
cat .git/HEAD
vim githubstudent.md
git status
git add githubstudent.md
git diff --staged
git commit -m 'my welcome feature with a welcome markdown file'
git status
git push -u origin githubstudent-welcome
git remote -v
git branch -a
git push -u origin githubstudent-welcome
git remote -v
git remote set-url origin http://github.com/githubstudent/example-basic
git status
git remote -v
git push -u origin githubstudent-welcome
git remote add teacher https://github.com/githubteacher/example-basic.git
git remote -b
git remote -v
git fetch teacher
git branch -r
git status
git checkout master
git checkout master
git merge teacher/master
git status
git log --oneline origin/master..master
git status
git push origin master
git fetch teacher
git merge teacher/master
git push origin master
ls
git branch githubstudent-improvements
git checkout githubstudent
git checkout githubstudent-improvements 
vim githubstudent-brntbeer.md
git diff
git commit -am "not forking, just collaborating now"
git push -u teacher githubstudent-improvements
git remote -v
git remote add teacher https://github.com/githubteacher/example-basic.git
git fetch teacher master
git branch -r
git status
git checkout master
git branch -vvv
vim .git/config
git branch -vvv
git branch master --set-upstream-to teacher/master
git branch master --set-upstream-to origin/master
git branch -vvv
git pull teacher
git status
git log -1
git log master..teacher/master
git branch -vvv
git branch master --set-upstream-to teacher/master
git pull teacher
ls
git branch front-end-fixup
git checkout front-end-fixup
vim index.html
open index.html
vim index.html
git status
vim README.md 
git status
git add .
git status
git commit -am "added styling to body as well as pulling in css"
git log -1 --stat
git reset --soft HEAD
git status
git reset --soft HEAD^
git status
git commit -am "added styling to body as well as pulling in css"
git log -1 --stat
git reset HEAD~1
git status
git add css/
git add index.html
git status
git commit -m "changes to the front-end"
git status
git commit -am "also some readme changes"
git log --oneline --decorate -4
git reset --hard 1cb8ed7
git log --oneline --decorate -4
git reflog -5
git checkout master
git reflog -5
git checkout front-end-fixup 
git checkout a35203b
git log --oneline --decorate --graph --all -10
git log --oneline --decorate --graph --all -5
git checkout front-end-fixup 
git reflog -10
git lol -5
git reset --hard a35203b
git lol -5
git reset --hard master
git reset --hard a35203b
git lol -5
git checkout master
generaterandomchanges 5 throwaway rb
git lol -10
git fetch teacher
git status
git reset --hard teacher/master
git help gc
git status
git branch
git checkout front-end-fixup 
git tag
git tag 0.1 -m "First release"
git tag
git lol -5
git push -u teacher front-end-fixup 
git push -u teacher front-end-fixup 1.0
git push -u teacher front-end-fixup 0.1
git tag -a -m "beta release" 0.1-beta
git tag
git lol -4
git push teacher 0.1-beta
```

## Chat History
December 9

```
matthewmccullough  Good morning all! I'm your chat room and occasional voice helper in today's class. Brent is leading the class visually, but what is unique about these classes is that I can answer anything in the background.
matthewmccullough  Morning all! I'm your chat room helper for the day.
Morning Peter!
All chat is happening here so we can have a richer chat and better transcript.
matthewmccullough  Howdy jason!
1.8.5 is the freshest version.
Amit G.  View paste 
C:\Users\agosar\Documents\GitHub> git --version
git version 1.8.4.msysgit.0
matthewmccullough  Hub is a nice little command line plugin that blends Git commands with GitHub commands.
Amit Gosar: You are in good shape with that!
Amit G.  Thx
matthewmccullough  So the part that Brent is showing now is your "identity" for Git operations. What is unique about Git is that we configure that locally and separately from our "permissions" to access any servesr.
The three levels (which are in the slides)
are system, global, and local in descending order
local is per repo
global applies to everything under your username
system applies system wide
Brent is showing you Git from the ground up, setting it up for the first time.
matthewmccullough  What's nice is that all these settings save to your home directory in a .gitconfig file so you can copy that from machine to machine if you want a second box to behave the same.
Peter  should I be following Bren't set-up? I'm already set-up under my ID/name
matthewmccullough  Peter: No need. He's just showing it off since we have some students joining that are brand new and not set up.
You can certainly check it though. ;)
git config user.name and git config user.email
shows you what it is set to, which also nicely gets set if you type it into the "Setup" form of GitHub for Windows and GitHub for Mac
What's neat, and new information to some people, is that you can set `git config --local user.email myotheremail@domain.com` for say an open source project that you didn't want to have your salesforce.com email address.
It would set it just per-repo with --local.
Your --global would apply to all other repos.
Peter  k
Peter  View paste 
at work we use soma.github [or something like that], I've never actually used github -- what is the difference between the two
[I'm only asking cause when I created a log in to github.com just now my other repository -- SayonaraDB -- is actually showing up]
does "git config" harden the settings, or is it per current session only ?
matthewmccullough  So the address you shared is a "private" cloud instance of GitHub.com.
Peter  thanks for that explanation
matthewmccullough  All the features and UI are the same (the private cloud instance tends to trail the .com version by about 30 days for Release Notes and safety of rollout of features sake)
matthewmccullough  As for the settings, the lovely thing is that ALL git settings are hardened to a file.
It's almost crazy how it hardens ever state change. Even in the middle of a merge or rebase.
Thus, a reboot totally comes back to exactly the same state.
Peter  awesome
matthewmccullough  In each repository, the settings are saved to .git/config, in the user's home directory, ~/.gitconfig
Danny  We should be typing along, right?
matthewmccullough  This means that even when I've had those fist-shaking moments of blue screens of death, I can boot right back to the same progress in my Git repo.
matthewmccullough  Danny: Most folks do, but it is also viable to just listen in. If typing, I'm here to help with anything at all.
Mike B.  where do --system settings get stored?
Danny  gotcha
Amit G.  View paste 
C:\Users\agosar\Documents\GitHub\newproject [master]> ls -a
Get-ChildItem : A parameter cannot be found that matches parameter name 'a'
At line:1 char:6
+ ls -a <<<<
    + CategoryInfo          : InvalidArgument: (:) [Get-ChildItem], Paramet
   indingException
    + FullyQualifiedErrorId : NamedParameterNotFound,Microsoft.PowerShell.C
   ands.GetChildItemCommand
ls -a gave me an error
matthewmccullough  Mike Burr: Now you ask a hard question! So it depends on the Git installer that you use. The best way to find out is to do `git config --system -e` which invokes a text editor on that file.
Typically, it is a file called config that sits alongside the Git binaries.
Amit Gosar: The Windows equivalent is `dir` in this case.
Amit Gosar: Good question. Ask those and I'll help translate, though there are minimal cases where I'll need to.
Amit G.  Oh duh me!
:p
matthewmccullough  Amit Gosar: For the touch command, you can just notepad.exe the same name too.
matthewmccullough  Amit Gosar: No worries. That's what I'm here for.
Hello Ray Chang!
Himas  Will you share these slides with all the commands with us?
?
matthewmccullough  Himas! Indeed. In fact, proud to say they are completely open source!
We even showed one Salesforce class one small commit to rebrand them as Salesforce internal materials.
Himas: http://training.github.com/presentations/git-fo...
Then just type ? if you want a command cheat sheet for the slide deck navigation.
matthewmccullough  Good morning Leah
Leah E.  Mornin'
matthewmccullough  So I think this is pretty interesting, though mildly technical, because Git is a build up of a blob (a file), a tree (a folder), and a commit (the transaction)
Leah Etienne: I'm Brent's Training counterpart and here to answer any and all questions. Paste, screenshot, or let me know anything I can clarify.
Brent's checked our Git version with `git --version` and walked us through what a commit is.
matthewmccullough  All, we will send you a follow up email with resource links, but if you want to have the slide deck even now, check out http://training.github.com/presentations/git-fo...
Leah E.  I saw that, my box has a lower version but I'm fine so far
matthewmccullough  It is fully open source licensed.
Leah Etienne: Cool. What version are you at, just for thinking about what might behave differently that I can point out for you?
Leah E.  1.7.9 something. I will upgrade in a sec
matthewmccullough  Leah Etienne: Okey dokey. Good to do so, but no rush just yet.
Himas  Thank you Matthew
matthewmccullough  Himas: My pleasure!
Peter  Does diff support a graphical compare ?
matthewmccullough  Peter: Absolutely. So it does so in a unique way. It does so through the `difftool` and `mergetool` commands.
matthewmccullough  Those invoke _any_ GUI that can accept command line parameters.
Shuchun  when I type cat ./git/refs/heads/master. I get No such file or directory
matthewmccullough  It already knows about quite a number of the most popular ones and can search your $PATH for those.
Shuchun  is this file auto generated?
matthewmccullough  Peter: http://git-scm.com/docs/git-difftool
Peter  k
matthewmccullough  Shuchun: Indeed it is. Upon the first commit to a new repo.
Shuchun  I did run git commit for first.txt
Mike B.  Shuchun, try no '/' between '.' and 'git'
Shuchun  thans
*thanks
matthewmccullough  Mike Burr: Thanks for beating me to that. smile
Diff is more "now" focused, but `log` is historically focused.
matthewmccullough  It is rather neat to see the simple linkage between commits. Each commit is tied to its parent through that parent Hash/SHA1/Ref
If I take some liberties, I could call it a linked list.
Mike B.  can git tell me which commit last changed a particular line number?
matthewmccullough  Mike Burr: Indeed it can.
You have two steps from the command line (one from the web), but they are very easy. From the command line, `git blame <filename>`
matthewmccullough  Each line gets annotated with the commit hash that last touched it.
On the web, go to a commit and click the blame tab (example forthcoming).
https://github.com/rails/rails/blob/master/Gemfile
Then the Blame button.
https://github.com/rails/rails/blame/master/Gem...
In the gutter, each committer name and commit hash is hyperlinked in the GitHub UI.
Mike B.  thanks
Mike B.  does git have any notion of multiple sets of staged files or just one per tree?
matthewmccullough  Mike Burr: That's an oft-asked question. So it is possible, but let me start with a "no, just one," and then peel back from there.
As far as an official staging area goes, there is just one staging area. That's a true fact™.
matthewmccullough  However, if you stretch the idea of what a staging area or change set is, we can get there.
Git has the concept of a stash. This is a stack based implementation of saving what is changed, but uncommitted.
`git stash` saves all of that and outputs the result of stashing.
Stashes don't have an "affinity" for any branch, but you can bring them back at any time, in stack popping or peeking order.
Further, some folks go as far as creating branches to act as persistent change sets. It is so easy to create a branch, that I like that idea.
For example, if I were on a feature1 branch:
`git branch feature1`
`git checkout feature1`
//Do some work on feature1, but realize that I want to make two change sets
`git checkout -b feature1-part1`
`git add file1.txt`
`git commit -m "Part 1"`
`git checkout feature1`
`git checkout -b feature1-part2`
`git add file2.txt`
Then I could merge part1 and part2 as desired.
Mike Burr: I realize that was a mouthful, but does that help give some alternatives to the no? Those are commonly used patterns by Git users.
Mike B.  might need to wait for branch discussion to fully grok all of that :-)
matthewmccullough  tl;dr = Branches are a storage facility because they are so easy to create and are often used like change sets.
matthewmccullough  Howdy Tim E.!
Tim E.  Hey there!
matthewmccullough  Tim: Glad to have you with us. Please ask any and all questions. I'm Brent's Training Team colleague (Brent is talking) so I'm game for any and all questions.
matthewmccullough  For the question that was in the GoToTraining chat, let me help. Happy to share more about this difftool.
> "Rahul Shelar (to All): Is there a UI utility to see diff between files"
matthewmccullough  Indeed there is. It is two-fold. It is called difftool and mergetool.
matthewmccullough  What these do is to call out to your preferred (visual) diff tool or merge tool
What's very helpful for people migrating from Perforce is that P4Merge can still be used with Git!
matthewmccullough  you'd invoke it anywhere you saw Brent use diff, but instead saying `git difftool -t p4merge"
`git difftool -t p4merge` can be made even more specific.
`git difftool -t p4merge <OLDHASH>..<NEWHASH>`
It has a cousin, mergetool, that works in the same way.
http://git-scm.com/docs/git-mergetool
matthewmccullough  Stephanie asked: What if you wanted to ignore everything in a subdirectory, except one file inside that subdirectory. For example, I want to ignore /dir1, but I don't want to ignore /dir1/importantFile.txt
The patterns like this are _so much easier to do_ in my opinion, than in other systems I've used.
You can build both positive and negative patterns in .gitignore files.
Most importantly, all rules are "inherited" down the folder structure by default, so if you make a .gitignore with a "*.log" at the top most directory, it automatically applies to all subdirectories.
But then, how would you make an exception for one thing?
Stephanie O.  with a bang
matthewmccullough  In that subfolder, you can make another .gitignore file and put as its contents, `!thisspecialfile.txt` or whatever that filename is.
That exclamation point is the "opposite" (don't ignore this) command.
Stephanie O.  Interesting
That makes sense
matthewmccullough  So you can make nice blanket excludes, but then make just small exceptions to the rules.
Works super well for date-stamped logs, which were the bane of my existence.
This permitted me to ignore *.log and then make an exception for !special.log
so that we'd check in and track special.log
Stephanie O.  Okay. I saw two different ways to answer the same question. Sounds great.
Stephanie O.  :-)
matthewmccullough  So this `checkout -b` is a nice shortcut.
jason  No logging of history for branch creation/deletion?
matthewmccullough  jason: There is, but in a different history list. Two places. 1. git reflog
2. On the GitHub.com web UI. Example forthcoming.
jason  cool. thanks
matthewmccullough  jason: https://github.com/github/training.github.com/p...
Towards the very bottom of that page, you'll see "jordanmccullough deleted the learn-dot-integration branch 3 days ago Restore"
So you can even restore it.
Restoring from the command line via the reflog feature is a little more verbose, but is:
`git branch originalbranchname <reffromthereflog>`
and that recreates it
matthewmccullough  So for all you learned before the break, where all this plays in is that you can "ship" features by merging them in. You can also do all of this through the Web UI of GitHub and also via our desktop clients.
https://help.github.com/articles/how-do-i-work-...
Icon_png_small GHfW-publish-branches.png
Ghfw-publish-branches
0
matthewmccullough  Also, for those of you that joined the chat room a little bit into class, the slides are all at: http://training.github.com/presentations/git-fo...
A press of the ? key shows the navigation cheat sheet.
So these merge types: You'll most commonly see Merge Made By Recursive
So it is interesting to think of a merge as bringing two tracks of code together to one path forward.
That is, after all, what merging is fundamentally, regardless of version control system. Interesting to see that exposed.
matthewmccullough  When you get a merge conflict, there are a few things that I think are critical to know in addition to what Brent is sharing:
1. You can always abort and do it later. `git merge --abort`
2. State of resolving is saved to disk. This is a question asked earlier. Everything is saved (state) to disk.
You can reboot at will in the middle of resolving.
3. You can make a "duplicate of a branch" to try a test merge with no risk to the "real branch"
4. Merging always happens locally (on a dev's PC) in the usual use case, so there's no risk to the build machine until you `push` again, which we hope, is after you've run the tests locally.
5. GitHub's UI merges for you (which sounds scary, but is totally safe) and then saves the result, but doesn't alter the code. "What in the world?", you say?
I mean, it automatically merges, then can integrate with your continuous integration server, then reports the result into the thread for the branch.
This is a bit like "looking into the future, asking "what if I merged this?""
See: https://github.com/github/training.github.com/p...
matthewmccullough  Icon_jpg_small Screen Shot 2013-12-09…
Screen%20shot%202013-12-09%20at%2012
That little check mark in the UI is telling us that it merged and built fine.
Just showing a Web UI contrast to Brent's showing you the command line today.
Danny D.  Hopefully that's planned, but just in case - would it be possible to quickly go over what all we did there and what each major step/command was?
matthewmccullough  Danny D: Can do. Going to audio recap with Brent too
Danny D.  Thanks!
jason  Should we be concerned with privacy? Wont this publish our email addresses to a publicly accessible location?
matthewmccullough  jason: You can use a fake email if you like.
It does put it in the public, but we hide the email addresses and you can even fully anonymize:
jason  ok
Ray C.  I got that branching is so easy with Git, but any tips for managing the branches? I don't want to confuse myself later with too many branches
Ray C.  but for local/private branches, how do I know which ones have been merged for example?
Danny D.  Ray - probably log/status?
matthewmccullough  training@github.com subjectline of Salesforce Class
Amit G.  Is this recorded?
brntbeer  Thank you guys! Looking forward to tomorrow's class =)
matthewmccullough  Amit Gosar: Not recorded, but we have a great set of videos that are more time-condensed that are super close to this class.
Amit Gosar: http://youtube.com/githubguides and more specifically:
Amit G.  Cool..Thanks!
matthewmccullough  https://www.youtube.com/playlist?list=PLg7s6cbt... for foundations class (the new video series)
https://www.youtube.com/watch?v=T0WTzTn64eM&amp... (the older series)
Amit G.  Perfect!
matthewmccullough  And some of the very basics: https://www.youtube.com/watch?v=8oRjP8yj2Wo&amp...
Gnanaganesh D.  thanks for the links Matt!
matthewmccullough  And also, you are always welcome to attend any future Salesforce (custom) or public instance of the class (monthly) for free.
brntbeer  Closing down the webinar now! see you guys tomorrow!
matthewmccullough  We love to have you come back as often as you'd like to brush up on knowledge.
Amit G.  Where will we find info on these future classes?
on github.com?
matthewmccullough  Anytime you want to rejoin, just email us at training@github.com and just say "I was in one of the Salesforce classes and would like to join another one for free"
Salesforce internally should publish the "private" class session links (about once per quarter) but the public ones are listed about a month in advance at:
http://training.github.com/web/git-foundations/
Amit Gosar: So there are the links you need and you can always email training@github.com if you forget any links.
We're always delighted to help.
```

Dec 10th

```
matthewmccullough  Morning all!
brntbeer  good morning!
Amit G.  If we want to be a contributor to a project in GitHub, can you provide basic steps we need to take to get us setup?
Tim E.  Can someone past in the GoToMeeting for this? I can't seem to find it in the calendar
Amit G.  Tim: DO you need the GotoMeeting link?
Tim E.  yes
Amit G.  https://www1.gototraining.com/join/training/602...
Tim E.  great - thank you
matthewmccullough  Hello everyone. Good morning.
Sorry I didn't see that query for the GTM link as I was helping Brent in the background for a moment before class. Thanks for sharing it!
Amit G.  matthewmccullough:
If we want to be a contributor to a project in GitHub, can you provide basic steps we need to take to get us setup?
matthewmccullough  So the branching and merging that Brent just showed is super common for us at GitHub on our own work.
matthewmccullough  Hello Shuchun and Danny
Danny D.  Hi Matthew
Shuchun  Morning Matthew
Danny D.  We'll get to do something today, right?
matthewmccullough  Danny D Yup!
Mike B.  so push/pull/fetch are always for a single branch at a time, right?
matthewmccullough  Mike Burr: Let me know if that helped. I'll recap here.
matthewmccullough  1. Pull and fetch by default retrieve everything you don't have
2. Fetch doesn't fold in anything to your working (local) branches
3. Pull fetches everything, but merges in one you are checked out to.
Mike B.  for #1, "everything" = refs/heads/*?
matthewmccullough  Mike Burr: In fact, I can show you the precise recipe.
`cat .git/config`
Amit G.  Can you pls repeat...
matthewmccullough  You'll see a refspec line.
Mike B.  for #3, do branch names have to match between remote and local?
for merge to happen?
matthewmccullough  View paste 
[remote "origin"]
  fetch = +refs/heads/*:refs/remotes/origin/*
  url = git@github.com:github/training.github.com
matthewmccullough  That fetch line is the recipe.
"Source" on the left of the colon and "destination" on the right.
Amit Gosar: Sure thing. What part/topic/idea?
Kumar D.  What is the difference between fetch and pull?
Amit G.  created a branch remotely, but when a push happend, it didnot update locally rt?
matthewmccullough  Mike Burr: For the merge (what to what) is in .git/config as Brent is showing.
Mike B.  got it, thanks
Amit G.  then brent updated a file remotely and did a pull...and it got updated
so it got me all confused
matthewmccullough  Kumar Deverakonda: fetch retrieves to the cache, but doesn't merge them in to the local working. Pull fetches and then merges the current branch.
Danny D.  Why the '+' in front of the source?
matthewmccullough  "Force update" == the plus
Danny D.  Got it thanks!
matthewmccullough  1. Changed a file on GitHub.com on the web UI
(web editor)
2. Pull command retrieved (fetched)
and then it merged in one of those branches, the one you are currently checked out to
matthewmccullough  So now your laptop has the latest in the working directory
Amit G.  Cool...Thanks!
matthewmccullough  Amit Gosar: Excellent. Let me know if I can sharpen further.
brntbeer  https://github.com/githubteacher/example-basic
matthewmccullough  1. This forking process copies the repo to your account.
Danny D.  The number to the right of "Fork" is the # of commits to the repository?
matthewmccullough  2. The network visualization shows who has forked.
Danny D.  (I see '4' for some reason, not '6')
matthewmccullough  Danny D: That number is the number of persons that have forked.
Danny D.  oh got it
matthewmccullough  Kind of "number of helpers" in a manner of speaking
matthewmccullough  3. We cloned to our local machine with `git clone https://github.com/&lt;yourusername&gt;/example...`
Eli L.  Were we supposed to clone from our own branch on github?
matthewmccullough  4. Then we `cd example-basic` to get into the cloned project locally
Eli L.  got it, thanks.
Amit G.  slow
pls
:)
matthewmccullough  5. Then we created a branch to contain some work effort
`git branch <somethingunique>-welcome`
`git checkout <somethingunique>-welcome`
and made some changes in a file there. Committed those changes.
All good everyone? Happy to clarify anything.
Leah E.  my http request failed
did I miss a step
matthewmccullough  Are you on a < 1.7.10 version?
Danny D.  FYI, here's what the error message will look like if you try pushing with a branch that doesn't exist 'error: src refspec <WRONG_BRANCH_NAME> does not match any.' :)
Leah E.  1.8.2
matthewmccullough  Ok. Version is good.
Leah Etienne: let's have you paste what `git branch -a`
Leah E.  View paste 
letienne-ltm1:example-basic letienne$ git branch -a
* leahsfdc-welcome
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
matthewmccullough  Then `git push -u origin leahsfdc-welcome`
And from there, it is just username and password checks.
We can also check your remote.
`git remote -v` and paste those results too just for us to check it exists
Leah E.  View paste 
letienne-ltm1:example-basic letienne$ git remote -v
origin  https://github.com/githubteacher/example-basic (fetch)
origin  https://github.com/githubteacher/example-basic (push)
oh
matthewmccullough  Leah Etienne: Does that get you all tuned up on this?
Leah E.  yep
thx. sorry
Danny D.  Was there something we did after we've pushed successfully? (other than verify that the branch we've pushed shows up in the UI)
Raghu  Does this approach work, clone on local machine, branch from local machine clone and make some commits on the branch and send a pull request to remote directly, This is without forking
matthewmccullough  Raghu Doppalapudi (to All. Does this approach work, clone on local machine, branch from local machine clone and make some commits on the branch and send a pull request to remote directly, This is without forking - How can I select the comits in a pull request ? I mean I want to send select certain commits only in a pull request
6. We've now pushed the branch and verified it is up on the web.
7. Brent is comparing and creating a pull request (a discussion around a branch)
matthewmccullough  This is like an email to the core project owners asking them to review your contribution.
Raghu  - How can I select the commits in a pull request ? I mean I want to send select certain commits only in a pull request
matthewmccullough  Raghu: You can indeed do all this without forking, if you are granted sufficient permissions on the "core" repository. You would need to be a collaborator there.
Raghu: At GitHub, say, on our core code base, about 20% of the company is a collaborator there, and the other 80% would have to fork.
Ray C.  what happen if the name of the original repo has been changed since the fork?
matthewmccullough  Raghu: The granularity of what to send is shaped by everything on a branch.
To make fewer commits part of it, you can create a branch with those focused and desired changes.
Ray, it will attempt to merge those in without human effort, but if there is a conflict, the button color changes and it disables and requires you to merge on your local machine
Mike B.  followup on Ray's q: is the pull request for a particular commit or for the current state of my branch?
matthewmccullough  Mike Burr: State of a branch since when it diverged from its parent.
... the series of commits in that "range"
Mike B.  so if I do more commits after I send a pull request those will get picked up as well when the merge happens?
matthewmccullough  Mike Burr: You bet. They even live show up in the UI!
Mike B.  mikeburr
brntbeer  https://github.com/githubteacher/example-basic/...
jason  Matthew, I appreciate your interjections/clarifications. Thanks.
brntbeer  and jason, i appreciate your questions!
matthewmccullough  jason: Sweet. I'm here to bring up an answer anything as Brent gives us the richest part of the class visually.
matthewmccullough  Everyone, keep your questions and shaping of class coming along. I really enjoy supplementing Brent's class.
matthewmccullough  1. Add another source for code
`git remote add teacher https://github.com/githubteacher/example-basic`
That connects a short name of teacher to the URL
teacher is just a made up bookmark name of your choosing
2. then we fetch from it
`git fetch teacher`
jason  do we have to add the remote, or can you fetch directly from the URL?
matthewmccullough  3. You now have all of teacher's data retrieved.
jason: You can, but the data is then very transient and not as well named.
jason: It ends up in FETCH_HEAD as a temporary branch symbol/name
jason  So not recommended? ok.
matthewmccullough  4. `git merge teacher/master` is a way to merge in the teacher's master changes to yours (make sure you are checked out to your master first with `git checkout master`)
Amit G.  View paste 
C:\Users\agosar\Documents\GitHub\example-basic [master]> git push origin/master
fatal: You are pushing to remote 'origin/master', which is not the upstream of
your current branch 'master', without telling me what to push
to update which remote branch.
Ray C.  is there a way to tell which merge comes first based on the merge number? I am coming from Perforce, so not used to the hexadecimal merge number.
matthewmccullough  Amit Gosar: So a little syntax tweak
Amit Gosar: For push, have a space beween origin and master
as those are separate parameters
the origin/master with the slash is a naming of a remote tracking branch.
think of it almost as originmaster
all run together if that helps you think about it just as a qualfied name
Amit G.  Oh okay
matthewmccullough  Ray Chang: Good question on the "first". Visualizations are the best bet there as the hash code that you are referring to doesn't imply any order, at least by its name.
Icon_jpg_small Screen Shot 2013-12-10…
Screen%20shot%202013-12-10%20at%2011
Ray C.  thanks
matthewmccullough  I've added everyone as a collaborator on https://github.com/githubteacher/example-basic/
You have full permissions to contribute to that repository without any "approval"
matthewmccullough  Holler at me here if you have anything I can clarify about this permissions model or "Focus" of the push
Tim E.  What was the command to setup the teacher alias url?
I think I missed that step
Amit G.  can you go back to bash?
need to see the commands
brntbeer  git remote add teacher https://github.com/githubteacher/example-basic.git
Amit G.  after git commit
matthewmccullough  Icon_jpg_small Screen Shot 2013-12-10…
Screen%20shot%202013-12-10%20at%2011
Amit G.  Thx!
Leah E.  if i forgot to check out to my improvement branch
matthewmccullough  Leah Etienne: Are you still on master branch?
Leah E.  I was
matthewmccullough  Okay. When checked out to master, you can undo your changes with: `git checkout master`
then `git reset --hard origin/master`
Leah E.  ok i''l be fine
thanks
matthewmccullough  K
Ray C.  can you search the comment records?
comment history
matthewmccullough  Ray Chang: Full text search with amazing filter parameters
Ray C.  cool!
matthewmccullough  See also: https://github.com/search/advanced
brntbeer  git branch master --set-upstream-to teacher/master
Leah E.  iok
so ignore the origin master
Ray C.  View paste 
raychang-ltm1:example-basic ray.chang$ git branch master --set-upstream-to teacher/master
error: the requested upstream branch 'teacher/master' does not exist
brntbeer  Ray Chang: can you do a "git remote -v" ?
Ray C.  View paste 
raychang-ltm1:example-basic ray.chang$ git remote -v
origin  https://github.com/changr1/example-basic.git (fetch)
origin  https://github.com/changr1/example-basic.git (push)
teacher  https://github.com/githubteacher/example-basic.git (fetch)
teacher  https://github.com/githubteacher/example-basic.git (push)
brntbeer  Ray Chang: can you do a "git fetch teacher" first?
Ray C.  see
works now!
brntbeer  cool!
Amit G.  View paste 
C:\Users\agosar\Documents\GitHub\example-basic [master]> git branch -a
  amitgosar-improvements
  amitgosar-welcome
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/amitgosar-welcome
  remotes/origin/master
  remotes/teacher/amitgosar-improvements
  remotes/teacher/changr1-improvments
  remotes/teacher/dannyGitTraining-improvements
  remotes/teacher/dganesh5-improvements
  remotes/teacher/jason-improvements
  remotes/teacher/leahsfdc-improvements
  remotes/teacher/master
  remotes/teacher/teads2-improvements
why do I have other remotes?
cause we all are collaborators?
matthewmccullough  Amit Gosar: So, just to help with the vocabulary, your list of remotes are from `git remote -v` and you would have just two. Origin and teacher.
Amit Gosar: Then with the branch name list, you see more.
Amit Gosar: git branch -a shows two groups of branches.
Amit Gosar: Some are prefixed by origin, others prefixed by teacher.
Amit Gosar: All those ones prefixed by teacher are the branches in the teacher repo.
Amit Gosar: This works really nicely for tight and close co-worker collaboration because you and, say, teads2 can work together on that improvements branch.
Amit G.  okay...
Ray C.  you didn't type "mixed"
is that the default?
matthewmccullough  Ray Chang: It is indeed.
Ray C.  thanks
matthewmccullough  "If <mode> is omitted, defaults to "--mixed""
(via help page for reset)
smile
http://git-scm.com/docs/git-reset
jason  Is there a point where commits can't be undone? It worries me a bit that commits can be removed. How do we keep a log of record of changes that were made?
matthewmccullough  jason: Answer momentarily.
jason: reflog is your wastebasket
jason  got it. the resets are logged.
matthewmccullough  The command that lets you go back through history is `git bisect`
(for automated testing)
http://git-scm.com/docs/git-bisect
0
Ray C.  View paste 
raychang-ltm1:example-basic ray.chang$ git lol -5
git: 'lol' is not a git command. See 'git --help'.

Did you mean this?
  log
brntbeer  git config --global alias.lol "--oneline --decorate --graph --all"
matthewmccullough  Git allows you to build your own aliases for commands you'd like to distill.
I have a bunch for you to borrow from here: https://github.com/matthewmccullough/dotfiles/b...
Ray C.  View paste 
raychang-ltm1:example-basic ray.chang$ git config --global alias.lol "--oneline --decorate --graph --all"
raychang-ltm1:example-basic ray.chang$ git lol -5
Unknown option: --oneline
usage: git [--version] [--help] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p|--paginate|--no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
Mike B.  does git automatically clean up the repo garbage that reset creates?
jason  I'm interested in tagging (i.e. for releases)
matthewmccullough  Ray Chang: It seems like your shell is running what's in the quotes. Can you try single quotes instead of double around the oneline section
Ray Chang: It is meant just to have it take that part as a string and save it.
That second quote seems like it turned into a smart quote too.
View paste 
git config --global alias.lol "--oneline --decorate --graph --all"
or
View paste 
git config --global alias.lol '--oneline --decorate --graph --all'
Kumar D.  What are the best practices on decide when to create a new repo? For example: Should we have a repo per project?
Ray C.  View paste 
raychang-ltm1:example-basic ray.chang$ git config --global alias.lol '--oneline --decorate --graph --all'
raychang-ltm1:example-basic ray.chang$ git lol -5
Unknown option: --oneline
usage: git [--version] [--help] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p|--paginate|--no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
Kumar D.  Can we create a branch from a particular tag?
matthewmccullough  Oh.
Sorry. I missed one piece from brent.
Ray Chang: Here's the fixed version
View paste 
git config --global alias.lol 'log --oneline --decorate --graph --all'
Was missing that log keyword
Ray C.  works now!
thank you!
matthewmccullough  Kumar Deverakonda: You bet you can! Easy as can be.
Kumar D.  I had another question on best practices on deciding when to create new repo (per project etc)?
matthewmccullough  View paste 
Kumar Deverakonda: git branch <branchname> <startingpoint>
That branchname is what you want the branch to be named.
The starting point is any other branch name, tag name, or hash like ab32cb4
Kumar D.  Thank you
Kumar D.  Can you pls talk about the best practices on deciding when to create new repo (per project etc)?
matthewmccullough  https://github.com/blog/1645-releases-api-preview
Ray C.  how to create a hook in GitHub to enforce the commit comment to include certain text (e.g. a Jira issue ID)?
Amit G.  why wud u delete a branch? Can you not use it to fix other issues?
jason  also interested in hook question
matthewmccullough  So Service Hooks are the name of the section that accomplishes "do something when..."
Ray C.  what about customized hooks (e.g. integrate with our internal tools)?
Ray C.  webhook url then
Ray C.  cool, thanks
jason  these hooks are on github, but not in git, correct?
matthewmccullough  jason: Git provides the facility from the .git/hooks directory
but we then try to make it more "humane" by making it web-standards with a JSON payload.
(thus making it GitHub-ish in nature with these Service Hooks)
Mike B.  hooks get notified after the commit/push or during? that is, do hooks have the ability to reject changes?
matthewmccullough  There are several lifecycle points you can hit. Let me link you to the full list.
Amit G.  There is an advanced class rt?
Ray C.  +1 Amit's question
Mike B.  +2
matthewmccullough  Amit Gosar & Ray Chang: Advanced class runs once a quarter
January 30th for Advanced.
It is much shorter, but intense.
Amit G.  Thx!
Ray C.  are we able to get email notifications for future classes?
Amit G.  Never enjoyed a class better!
Ray C.  cool, thank you! Good job!
matthewmccullough  Amit Gosar: That makes our day. +1
jason  thanks!
matthewmccullough  We definitely give it our best. Looking forward to any other feedback for us to iterate on in making the class awesome.
```

