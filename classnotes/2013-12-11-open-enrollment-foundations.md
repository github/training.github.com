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
    
## Chat Transcript
    
### Day 1

    Ron Hear you loud and clear.. Greetings
    jordanmccullough  Greetings Ron. Thanks for letting me know.
    Yuri C. has entered the room
    Yuri C. G'morning
    jordanmccullough  Welcome Yuri!
    Morning.
    Elliot S. has entered the room
    jordanmccullough  Thanks for joining us Elliot.
    Elliot S. hello everyone - is this working?
    jordanmccullough  Yes indeed!
    Elliot S. great!
    jordanmccullough  How was the audio check for you, Elliot?
    Elliot S. the audio worked fine, I am listening through my phones headphones because I am in the office right now
    jordanmccullough  That works great.
    Elliot S. Will a PC be okay for this?
    or should I switch to a MAC?
    Yuri C. You should switch to a Mac, but not just for this class... ;)
    sorry, I'll try to contain my fanboyism :)
    jordanmccullough  Elliot, either platform is just fine.
    If you have Git installed and working (we'll double check that in class as well), you'll be able to follow along in Windows or Mac.
    7:50 AM
    Elliot S. I'm with you Yuri! I develop on a Mac but have to use this computer right now
    I have Git installed on my PC
    Yuri C. Almost everybody I talk to these days says something like "my main machine is a Mac but I have to use this PC for this one thing"
    I'm actually thinking about going back to Linux tho
    jordanmccullough  Linux is cool too.
    The birthplace of Git, so that would certainly work.
    Elliot S. yeah unfortunately one of the two Macs died on us last week so we are sharing a mac in the office
    Yuri C. sorry to hear that Elliot
    Git and Linux are brothers from the same father...
    Elliot S. Jordan - Do i need to stay on the line? or can i sign back in when we start?
    Could be a whole lot worse!
    jordanmccullough  For the chat, you can close and reopen.
    I'll have the link up on screen when you come back online if that's needed. :-)
    brntbeer  has entered the room
    brntbeer  good morning!
    Jessica W.  has entered the room
    7:55 AM
    Ed Z. has entered the room
    Michael has entered the room
    David H.  has entered the room
    Michael D.  has entered the room
    Serena V. has entered the room
    Eric M. has entered the room
    jordanmccullough  Welcome everyone.
    Thanks for joining us today.
    8:00 AM
    Drake has entered the room
    Darren  has entered the room
    Michael Project Manager / Developer
    Yuri C. Manager/SysAdmin
    brntbeer  Also, i'm primarily a Ruby programmer, though i don't normally code now adays!
    Ron tools admin / java dev
    Ed Z. Web Applications Developer
    Serena V. C# Developer
    Hong  has entered the room
    Bob has entered the room
    Drake Software Engineer
    Tyler S.  has entered the room
    Jessica W.  Developer - .NET
    Darren  Java / C++ / Pthon Developer
    Elliot S. Developer - Javascript/PHP
    Chris M.  has entered the room
    brntbeer  Drake: any particular language? jack of all trades?
    Drake PHP primarily
    Bob Chemist at a manufacturing company - using R, LaTeX
    brntbeer  nice
    Hong  Java primarily
    Jason W.  has entered the room
    brntbeer  Bob: im jealous of you use of R! we've been using it a lot more lately as we've been doing tons of analysis of the ecosystem on GitHub
    Chris M.  I focus exclusively on PHP backend development
    Jason W.  Hi everyone. I'm a Java architect building RESTful web services
    8:05 AM
    brntbeer  Jason Weiss: welcome!
    Bob Very nice brntbeer! Maybe we can connect offline later to compare notes.
    brntbeer  Bob oh for sure
    Steve C.  has entered the room
    8:10 AM
    brntbeer  --global is the one i most commonly use, i'll use --local when i need to get specific on a project. as a contractor, or working on a project where i want a different email to be shown (work vs open source fun work)
    Michael So is the project defined as the Git repo name?
    8:15 AM
    brntbeer  for local only repositories yeah
    as we start interacting with GitHub, we'll see we could call it something different on github.com than it is on our laptops, but that would confuse me a bit too much
    so i just ensure they're both named the same
    8:20 AM
    brntbeer  "git init project1" creates a new empty git project for us. this means it actually created a folder for us as well.
    8:25 AM
    Michael Does git remember the last file I added to append the -m to that specific file?
    brntbeer  Michael: the way `git commit -m` works, is it looks for everything that's in the staging area
    Michael Got it, so anything queued prior to committing to the origin?
    brntbeer  Well, everything we're doing so far is just local only. so we're storing these changes on our laptop
    but yeah, as jordan shows this diagram, i hope it makes a bit more sense!
    8:30 AM
    brntbeer  the "queue" thought is definitely spot on. it's a "im done with this, but i may want to add more things to commit with it" as in "i've completed the html work, now i need to add in the styles in the css for it as well...and since those are one complete 'thought' or feature stopping point, lets commit them together"
    i generally think of commits as checkpoints
    Eric M. has left the room
    Michael got it, makes sense
    brntbeer  small and atomic. can stand on their own. so i don't typically commit things that wouldnt compile for instance.
    awesome =)
    8:35 AM
    Eric  has entered the room
    8:40 AM
    brntbeer  Also, we're all going to forgive jordan for using tabs instead of spaces. and if you're a bit unfamiliar with it, it's like arguing about sports and politics =)
    Jason W.  LOL - I'll work hard to let it go!
    Darren  (yay tabs!) ;)
    brntbeer  pretty sure im going to jump into his computer and alter .vimrc later today and just never tell him
    Darren  haha. What's the * and airplane on his terminal?
    brntbeer  ah, perfect. let me make him mention that ;)
    Darren  Cool - good to know
    Jason W.  tks
    brntbeer  They're just some additional...cruft, or quick view stuff for jordan to see what work he may be doing before a git status
    8:45 AM
    brntbeer  personally i still use bash and terminal. nothing fancy here
    i like to keep it pretty bare bones. makes it easier when i jump over to powershell or Git Bash on windows as well
    Michael D.  What is the command to retrieve a repo
    Or get back on the master
    nevermind I figured it out
    8:50 AM
    brntbeer  Michael: ah sorry i missed the chat. we haen't yet gone through pulling down a repository from an upstream like GitHub, but "git clone <URL>" of the repository we've created online, or "git checkout master" to switch back to a branch
    Michael D.  I got stuck in vi.
    brntbeer  Michael: no worries! just hit "escape" and then ":q"
    Michael D.  I figured it out, thanks though.
    Elliot S. as did I Michael
    brntbeer  if it says "you'll lose saved changes" you can always ":wq" for write and quit
    so, the key with vim is to always hit escape so we can go to command mode
    where as "i" takes us from command mode => insert mode
    Michael So looking at git diff where it shows ---a/index.html or +++b/index.html what does the A and B represent?
    brntbeer  so escape, then :wq to save and quit
    Michael: it's based on the diff command that comes just default on unix machines. its looking at two different versions of the file, version A and B
    Elliot S. I missed the part about where the slides and class notes will be
    8:55 AM
    Elliot S. will they be available afterwards?
    brntbeer  Elliot Sneeringer: oh yeah for sure, they'll be emailed to attendees
    Elliot S. fantastic - thank you
    this is great stuff so far
    brntbeer  =) awesome
    Elliot Sneeringer: there will be all sorts of materials to send out
    Elliot S. awesome, looking forward to it
    David H.  If you modify a file, git add, and modify the file once again before commit, will the diff compare to the original file or the file at the add?
    Michael do i have to commit before I can work on the index.html file again?
    brntbeer  David Harms: oh! you'll see that right now
    diff will by default attempt to compare to the staging area.
    David H.  Looks like it, thanks!
    brntbeer  so as jordan makes this edit, you'll see it'll look at working directory vs staging
    Michael: nope! can keep working on it
    Michael View paste 
    What does this represent?  @@ -4,6 +4,7 @@
    9:00 AM
    brntbeer  just letting jordan answer that michael =) but essentially the 6 vs 7 in your above example it's going to show the total number of lines shown
    9:05 AM
    Chris M.  Can a diff command show all changes in more than one file at once?
    brntbeer  Chris Manger: yep! if jordan just says "git diff" now without arguments, it shows all files in the working directory he's editing
    and similarly, you can change the view context as well with additional flags
    Yuri C. those numbers are important if you will be using the unix patch command to change an old file into a new one. Probably never done anymore when using version control and IDEs.
    brntbeer  so control the window we're looking at
    Yuri Csapo: totally!
    Michael Thanks for the explanation for that
    Yuri C. sure :)
    brntbeer  np Michael! love the qusetion
    Yuri Csapo: that's actually crazy important with the way the linux core works too, because they pass around patches constantly.
    ha!
    Yuri C. ah! Thanks. I haven't been keeping up on kernel chat anymore. Good to know!
    9:10 AM
    brntbeer  Yuri Csapo: well, im pretty sure. it certainly used to be that way. git core doesnt do it that way anymore. full on signed commits etc
    Yuri C. hard to change old habits for the kernel guys, I suppose :)
    brntbeer  haha of course
    Elliot S. any breaks during this course?
    great thanks!
    9:15 AM
    Bob when I do a git diff I don't see the changes, I get this:
    View paste 
    $ git diff
    diff --git a/index.html b/index.html
    index dfc81cf..f8e28d7 100644
    Binary files a/index.html and b/index.html differ
    why are these text files shown as binary??
    brntbeer  ah, Bob that's because the only change is the file permission
    whoa static
    Elliot S. thought we were being abducted
    brntbeer  haha
    Elliot S. fully prepared
    brntbeer  Bob: wait, hold on. not the file permission being changed.
    Bob: just curious, what operating system are you on?
    Yuri C. sorry for static, playing with sonic screwdriver.
    Bob Windows 7
    same results in powerhsell or Cygwin terminals
    brntbeer  Yuri Csapo: just re-watched "a good man goes to war" last night. don't get me started.
    Bob: wondering if it has something to do with the window file line endings.
    Bob: did you make actual changes to the files as well?
    Yuri C. brntbeer: :)
    Bob yes, using echo commands
    9:20 AM
    brntbeer  I wonder if you could open it up in a text editor, and then add some files into it, and do "git diff" again
    Bob trying that ...
    brntbeer  because, im wondering with the echo command, if...almost non-text was added in
    so it's not recording anything besides a file size change
    looks like it may be the line ending issue as according to stackoverflow
    have you done "git config --global core.autocrlf true" yet since you're on windows?
    Bob I tried an edit with notepad.exe, same results. Also I did the autocrlf setting = auto for windows at the beginning of class.
    oops - yes = true
    brntbeer  should be set to "true" not auto
    so, you've added lines to it, saved things, and ran "git diff" again and it still says it's just a binary change? not showing the actual change itself
    ?
    Bob redid the autocrlf correctly, same results
    9:25 AM
    Bob yes
    David H.  Bob, it probably was created as a unicode file
    create an ANSI text document
    it worked for me
    simply re-saving the file through text editors didn't actually change the formatting
    brntbeer  unicode should be fine though.
    Bob I tried re-saving as ANSI with notepad, made a change, saved again ... same results.
    brntbeer  Bob: can you "cat index.html" for me?
    and paste the results here?
    Bob View paste 
    $ cat index.html
    <html>
    <head>Home Page </head>
    /* Include stylesheet here */

    more text here

    </html>
    Chris M.  Brent, I was wondering....would it be alright if we wish to take screenshots of slides?
    brntbeer  Chris Manger: they're actually freely available at http://training.github.com/presentations/git-fo...
    Chris M.  Perfect, thank you
    brntbeer  feel free to scroll through the slides with arrow keys, or getting help with "?" key
    Bob: and lastly, just a 'git status" ?
    Bob View paste 
    $ git status
    # On branch master
    # Changes not staged for commit:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #       modified:   index.html
    #
    no changes added to commit (use "git add" and/or "git commit -a")
    9:30 AM
    brntbeer  Bob: one last thing: "ls -l" ?
    jordanmccullough  Hi Bob.
    Bob Hello Jordan
    jordanmccullough  Reviewing chat to see what's going on. Happy to try to help here.
    Bob View paste 
    $ ls -l
    total 3
    -rwx------+ 1 Administrators Domain Users 26 Dec 11 11:37 about.html
    -rwx------+ 1 Administrators Domain Users 94 Dec 11 12:27 index.html
    -rwx------+ 1 Administrators Domain Users 54 Dec 11 11:32 styles.css
    brntbeer  also, maybe just a "git checkout -- index.html" to throw away the changes and start over and re-add changes to it
    pretty strange
    Bob ok clean directory, and I'll try a new change ...
    Here's what happens:
    View paste 
    $ git status
    # On branch master
    # Changes not staged for commit:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #       modified:   index.html
    #
    no changes added to commit (use "git add" and/or "git commit -a")

    bsolimeno@LT-BSOLIMENO /cygdrive/c/Documents and Settings/BSolimeno/scratch/project1
    $ git diff
    diff --git a/index.html b/index.html
    index dfc81cf..eac2959 100644
    Binary files a/index.html and b/index.html differ
    9:35 AM
    Bob be right back ...
    brntbeer  and what text editor are you using to save these files?
    kk! no worries
    jordanmccullough  Bob, I'm suspecting something made the file UTF-16, which Git doesn't "play nice" with.
    I'll need to look into this further for you post class. Is that alright?
    brntbeer  i'll keep looking =) i think it may just be the way the text editor is saving things.
    just as a shameless plug, anyone on windows should also download GitHub for Windows. It kinda helps along the git install and installs a bunch of nice wrappers onto some command line interfaces like powershell and Git Bash
    Bob post class is fine to resolve this - sorry.
    9:40 AM
    brntbeer  oh it's no problem! if there's additional stuff i can help with i'd be happy to. if it's saving as UTF-16, it could also save as UTF-8 and may just be under some advance options for that text editor
    under save as for instance
    Chris M.  Brent, I was wondering where git stores the refspecs? (I just wwanted to view them out of curiosity)
    Bob I was just using notepad (default text editor in windows) and the echo command in powershell to create the files.
    brntbeer  hmm. yeah. i wonder if downloading sublime text 2, or jumping into notepad to see if there's a way to save it as utf-8
    Chris Manger: yeah sure! it's just under the local git config. you can look at it in .git/config in your local repository
    9:45 AM
    Chris M.  thanks Brent!
    David H.  Curious, if the initial version was created with incorrect line endings, would the diff still fail if the newly saved version was fixed? The problem could be that it's trying to compare what it thinks is a binary file to what it knows is a text file, and is treating them both as binary?
    brntbeer  David Harms: yeah, that too. because it seems like the other files are okay or have been commited and possibly viewed okay
    9:50 AM
    Chris M.  Is it possible to revert a local commit?
    Jason W.  Can you comment on the quantity of plus and minus signs please?
    9:55 AM
    brntbeer  Chris Manger: yep. git as a command called "revert" that allows us to just do the complete opposite of another commit
    Jason Weiss: yeah for sure! as we get more and more edits and changes into a commit, it's only going to summarize the +/- lines
    Chris M.  When a revert is performed, does that reverts both the remote and local files?
    brntbeer  so, 2000 additions and 5000 deletions...wouldnt show 2000 +s and 5000 -s
    Chris Manger: nope, everything is local first
    the revert is going to be as if you looked at the diff of a commit
    and just retyped the changes yourself to put it back to the way it was just before that
    and then, if you were interacting with an upstream repository, it would say now "hey you have more commits!"
    Chris M.  thank you for the explanation. Is revert equivalent to checkout out an old commit?
    10:00 AM
    brntbeer  not exactly. i mean they could be thought of similarly related. but revert is going to just flip all +s to -s, and -s to +s from the commit you're looking to revert, and then it'll commit for you
    Elliot S. when I run git s instead of git status when my working directory is clean I don't get a response
    Chris M.  thank you, that makes sense
    Elliot S. is that a property of aliases?
    brntbeer  Elliot Sneeringer: yeah, jordan set that up as an alias earlier
    Michael D.  has entered the room
    Michael how do you amend a commit that's buried down the list of the log?
    jordanmccullough  git config --global alias.s "status -s -u"
    brntbeer  Michael: normally we wouldn't really want to do that. because if we amend something from a long time ago, it'd recalculate the commit hash for that commit. because part of what happens when we amend, is update the timestamp as well as files edited. this would cause us to need to recalculate all the commits since it...which continues to get tricky.
    10:05 AM
    brntbeer  instead, we should just create a brand new commit. super lightweight and fast, may as well do that!
    10:05 AM
    Michael got it
    brntbeer  there's certain ways around it, but depending on the fix, it may just be best to do a new commit
    Jason W.  did anyone else lose audio?
    Elliot S. All good here
    Bob Good audio here...
    Darren  it's ok for me
    Yuri C. I have audio
    Michael I'm good here
    Ron all good
    Drake I'm good
    Jason W.  hmmm
    tks
    brntbeer  Jason Weiss: keep me posed!
    Jason W.  I dialed back in but I missed the last example ~LOL~ I'll catch up
    brntbeer  Jason Weiss: we were just looking at revert
    so, "git revert <SHA1 HASH>"
    will create a complete opposite commit from the commit we're trying to do
    Jason W.  so I get the "error- could not revert"
    what was the solution to that?
    brntbeer  can you do a git status and let meknow what it says?
    Jason W.  UD about.html
    10:10 AM
    brntbeer  ah, a full "git status" not git status -u -b
    Jason W.  View paste 
    # On branch master
    # You are currently reverting commit 4ee1917.
    #   (fix conflicts and run "git revert --continue")
    #   (use "git revert --abort" to cancel the revert operation)
    #
    # Unmerged paths:
    #   (use "git reset HEAD <file>..." to unstage)
    #   (use "git add/rm <file>..." as appropriate to mark resolution)
    #
    # deleted by them:    about.html
    #
    no changes added to commit (use "git add" and/or "git commit -a")
    brntbeer  ah, go ahead and type "git merge --abort" and let me know what it says
    or rather
    "git revert --abort"
    there's currently a conflict with trying to revert that specific commit, just wanting to ensure we pick one for an easy example
    Jason W.  git revert --abort ran; no message
    brntbeer  yep yep
    just "git status" again
    just to verify it came out of the conflict
    Jason W.  nothing to commit per git status
    brntbeer  boom
    so, the problem is, we picked a commit that would conflict with what we currently have with about
    about.html i mean
    Jason W.  ok
    brntbeer  so, this happens from time to time when reverting. because it tries to just bring in a change automatically that doesn't mesh well with the latest change on that file
    Michael so did we just deleted the original commit head
    can you paste the reset command again
    10:15 AM
    brntbeer  Michael: yep yep, we just reset back to a given hash. which just moved head to that commit, and took all of the changes from commits since then and put them in the staging area
    Darren  So that is the distinction between a soft and hard reset?
    jordanmccullough  git reset --soft <ref>
    brntbeer  the difference is where it takes those changes
    so, with soft, it takes all the changes and puts them into the staging area
    so if we reset --soft <ref> where <ref> is a commit 2 commits ago. it'd take the changes from those two commits and put it into the staging area
    with `git reset --mixed` or just `git reset`, it puts it into the working directory
    Michael so when you're doing a reset, should you be sure to run that because depending on where you revert in a point in time, you will blow away any newer commits?
    10:20 AM
    brntbeer  Michael: exactly
    David H.  has left the room
    Ron that was useful to review
    Chris M.  when changes are blown away, do records of those old commits still exist, in case I wanted to check them out later?
    brntbeer  the difference here is that revert is a bit more surgical: it goes back in time, grabs a given commit and re-applies it at the top of the graph with the reverse operations
    reset is going to move us back a number of commits (blowing them away) and putting those changes into either the staging area, the working directory, or completely remove them all together
    Chris Manger: technically yes ;) not sure if we'll talk about it right now, but they're held onto with the reflog
    we may end with that today
    Darren  So revert reverts a single commit? Whereas reset undoes changes from HEAD back to the specified commit?
    Ron dir
    10:25 AM
    brntbeer  Darren: exactly
    perfect wording
    10:30 AM
    Jason W.  I had a typo in my personal repo origin.
    How do I change the origin please?
    brntbeer  ah! happens to me constantly
    "git remote set-url origin <NEW URL>"
    Michael is it assumed it'll upload to its related repo if you're in the working directory?
    Ron yes got that
    brntbeer  Michael: not sure if i understand the question. it essentially is looking for the upstream version ofyour repository, which we create on github.com just as a place to receive information
    Ron thanks for raising this @brntbeer
    10:35 AM
    brntbeer  ron no problem!
    Michael If I'm working in multiple repos and I do a git push or git pull from a specific directory of the repo. What tells it which repo to push or pull from?
    brntbeer  Michael: well, with git, it doesnt care which directory you're in when inside of a project
    but, you wouldn't have multiple projects inside of each other.
    so, for instance if i was writing a ruby library.
    that parsed html to put it into some xml format
    that'd be 1 repository
    with multiple directory etc etc
    Michael ah ok
    brntbeer  if i had another project, it'd be in a folder outside of that ruby library as its own git repository
    Michael got it
    Jason W.  once I push to the repo, what would reset do?
    is it still possible to get rid of everything once you push it back to a version?
    brntbeer  Jason Weiss: it'd still mess with stuff only locally. but it'd start to create a number of different commits than what the upstream has
    so, trying to push would say "oh, but there's commits i have up here that you dont have. pull first"
    Jason W.  so once it hits upstream, there is no "rewriting history" right?
    brntbeer  but you wouldnt want to pull. because the upstream would have commits that you have removed. you'd have to push -f (or force push) to overwrite the way things are on your upstream on github.com
    Jason Weiss: you can force it.
    the only problem is, if anyone else got those, then they may run into issues
    Jason W.  ah - ok, that makes sense.
    brntbeer  so, once we push things, we try not to force push. especially with the "master" branch
    10:40 AM
    brntbeer  because master is usually thought of with the git community as a "safe deployable" set of code
    we'd want to work on another branch
    which, will be covered a lot more tomorrow
    there's some social constraints to force pushing and branching for sure
    Chris M.  Brent, I was wondering what the difference is between git fetch origin and git fetch --all?
    brntbeer  the --all works for if you have mutliple remotes
    so, when maintaining forks and other things like that (more on that tomorow) you can fetch all of these things at once
    Chris M.  thanks for the explanation, that makes sense
    10:45 AM
    brntbeer  so, you could say "git fetch origin"
    or "git fetch teacher'
    or "git fetch production'
    etc
    10:55 AM
    Jason W.  is origin a keyword or an arbitrary name Jordan picked?
    brntbeer  it's a default keyword.
    jordanmccullough  https://github.com/githubteacher/project1
    Chris M.  why is there a slash when listing the remote branches?
    like remotes/origin/cleanup
    brntbeer  it's just a helpful keyword for us to let us know where things are
    `git branch -r` just shows origin/cleanup
    and the -a just makes sure it's more verbose
    11:00 AM
    Chris M.  what file stores the names of branch names (both remotes and local)?
    brntbeer  Chris Manger: take a look at .git/refs
    we should have "heads/" and "remotes"
    Hong  has left the room
    Yuri C. has left the room
    Michael has left the room
    jordanmccullough  Chris, the branches are all "listed" in the .git/config
    Chris M.  thanks Jordan
    jordanmccullough  If you want to take a peek at that, you might enjoy. I'll be happy to discuss more tomorrow in terms of refspecs and such, lightly, and how the -u of the push.
    Sure thing!
    11:05 AM
    Chris M.  One other thing I was curious about, how come sometimes there is just one hypen and sometimes there is too (like git config --global user.email)
    jordanmccullough  Ah.
    Easy way to remember that is...
    for more-than-one-character flags, it's two dashes.
    For single character flags, one dash.
    For example, on `log`, there's `--patch` and `-p`
    Chris M.  cool, that is simple
    jordanmccullough  equivalent option flags, but the double dash for the full word, one dash for the single character shortcut one.
    :-)
    Steadfast rule too.
    Have a great rest of the day. Will "see" you tomorrow.

### Day 2

    jordanmccullough  Welcome back everyone!
    Ed Z. has entered the room
    Yuri C. has entered the room
    7:50 AM
    brntbeer  has entered the room
    brntbeer  good morning, goodafternoon or goodnight!
    Yuri C. Good morning, sunny and clear skies, 30 F in Colorado
    Jason W.  has entered the room
    jordanmccullough  Yuri, sounds like nice weather in CO given the recent temperatures.
    Enjoy the nice weather.
    And thanks for joining us again today.
    7:55 AM
    David H.  has entered the room
    Yuri C. Thanks. Definitely beats the -20 we've been having for the past week or so
    Michael has entered the room
    Jason W.  I hear you just fine on audio :-)
    Yuri C. loud and clear
    jordanmccullough  Thanks Json
    Jason.
    Michael loud and clear
    Jessica has entered the room
    Jason W.  Yeah - JSON and Jason -- sucks when you're in a room full of developers. Sounds like everyone is calling your name!
    jordanmccullough  Thanks for confirming.
    Oh, yikes, sorry for the mistype.
    No developer joke intended!
    Bob has entered the room
    Bob Good morning!
    Ron has entered the room
    Yuri C. Jason, why your name is Yuri every time someone says "you're in..." you think they are calling your name :)
    why=when
    Elliot S. hey everyone
    Michael D.  has entered the room
    Jason W.  Yuri: Yes, I can see you have a similar problem ~LOL~
    8:00 AM
    Elliot S. I missed about the last 10 mins of yesterdays session - could someone give me a mini recap - I made my github account and created the second branch but did not get any further
    brntbeer  Elliot Sneeringer: we'll probably be going back over that in audio as wel
    Elliot S. okay - thank you
    brntbeer  Elliot Sneeringer: but just to ensure you got there: did you fork https://github.com/githubteacher/project1 ?
    Elliot S. No I did not
    brntbeer  sweet =) go through doing that real quick
    Elliot S. I just did that
    Kyle  has entered the room
    Drake has entered the room
    Ron did a fork but didn't get an email...
    brntbeer  the email doesnt come until i add you as a collaborator. Ron what is your username?
    Ron recharr
    8:05 AM
    brntbeer  I don't see you on the list of people who have forked. it looks like you only pushed up to a new repository
    Ron just retried
    can u check?
    brntbeer  see you there! got it
    added
    Ron thx
    Michael is there a preference in using . over *
    brntbeer  Michael: sorry i may have missed something for which context?
    8:10 AM
    Yuri C. How do I delete a repo?
    on github, there is.
    brntbeer  hey Yuri Csapo! if you go into your repository, and go into the settings on the right-hand-side
    once you click that and get to the bottom of the repository settings page, there's a "Danger Zone" that should help you out
    Michael brntbeer:
    it was related to when Jordan added all files to repo
    he used '.'
    brntbeer  ah
    right
    "." is more of a "add everything in the current directory
    since "." is current directory
    * is more of "everything matching"
    Yuri C. thanks
    Michael got it
    brntbeer  im not sure if the two work interchangably, i generally just type '.' because it's faster
    8:15 AM
    Ron I keep getting "fatal: Not a git repository.." when I try to do "git branch"
    brntbeer  Ron: once we do that clone, we need to cd into that directory too
    Ron tried that
    Michael sorry as a refresher 'git branch -r' shows all remote branches?
    brntbeer  gets me every time
    can you type "ls"
    Michael: yep!
    Ron: can you type "ls" or "pwd" and share it here?
    Ron View paste 
    C:\Users\Ron\Documents\GitHub\scratch\student> dir


        Directory: C:\Users\Ron\Documents\GitHub\scratch\student


    Mode                LastWriteTime     Length Name
    ----                -------------     ------ ----
    d----        12/12/2013  11:12 AM            project1-1
    Elliot S. reminder on how to switch branches in cmd line?
    brntbeer  yep, we're just going to want to "cd project1-1"
    Elliot Sneeringer: just a "cd project1-1" or whichever the project is called
    Ron yup
    8:20 AM
    Ron its a go
    brntbeer  wee!
    so, all we did: git branch <YOUR-USERNAME>
    just to create a unique branch name
    then "git checkout <YOUR-USERNAME>"
    of course, filling in whatever your username is for those situations
    and then we created a new file, also called our username, or something unique.
    then added it to the staging area, and then commited it.
    Michael lost audio
    what was -v?
    brntbeer  is it back?
    the -v is just to be verbose
    Michael it's back
    brntbeer  so it just shows where origin is pointing to
    Yuri C. Hm, I cloned the teacher's repo instead
    brntbeer  Yuri Csapo: no problem! we can switch this
    Yuri Csapo: you have a fork though right?
    Yuri C. I do have a fork, yes
    brntbeer  Yuri Csapo: sweet.
    Yuri Csapo: so for you, go ahead and type "git remote set-url origin https://github.com/ycsapo/project1.git&quot;
    and it'll change that end point for origin ;)
    Kyle  Can I get added as a collaborator? My username is kyleschmitz
    8:25 AM
    brntbeer  gotcha in there already kyle
    Kyle  ah, thanks!
    brntbeer  no problem! thanks for double checking
    Kyle: we are going to be pushing to our fork though. so ensure origin is set to your fork with "git remote -v"
    Yuri C. thanks Brent. Got it. Should I push?
    brntbeer  Yuri Csapo: totally, feel free to push to your fork whenever you'd like
    Yuri C. Brent: thanks :)
    Kyle  Right, looks like I'm working in my forked repo
    Elliot S. so if 'git remote -v' is set to our project then git push -u origin will push it to that fork?
    brntbeer  Kyle: sweet. just go ahead and push that branch up to your fork with "git push -u origin BRANCHNAME" or just "git push -u origin"
    yep Elliot Sneeringer, exactly
    Elliot S. cool, thanks!
    brntbeer  "git push <what url> <what branch>"
    and so, since we pushed to our fork, we need to go to that repository to send a pull request back to the teacher
    8:30 AM
    brntbeer  looks like being explicit with that <what branch> section is important. haha
    So, right after we push, we'll probably see an image on our fork that says "compare and pull request" and we can start a discussion about our change
    totally happy to make jordan walk through several different steps to do this if needed =)
    Elliot S. I don't want to hold everyone else up but I would like that - if not keep it rolling and i'll figure it out!
    brntbeer  Elliot Sneeringer: haha, it's not holding anyone up i assure you
    Elliot Sneeringer: you've pushed to your fork, correct?
    Elliot S. i don't think i did it right
    8:35 AM
    brntbeer  well! lets take a look at where we're at Elliot Sneeringer
    can you do a "git status" and paste it in here?
    Michael When merging a new file into a new REPO, that's seems relatively safe :) but what if you're merging an existing file with a bunch of changes, how do you reconcile so you're not losing pre-existing code
    Elliot S. gitbash isn't allowing me to copy and paste anything
    brntbeer  Michael: oh ya, thats why the pull request workflow is so useful
    because github is doing the merge in the background and checking if it works
    Elliot S. View paste 
    but it is showing "#On branch master
    nothing to commit, working directory clean"
    brntbeer  cool
    Elliot Sneeringer: and you created a new branch with "git branch <username>" ?
    Elliot S. i apologize, i got held up by a question at work for a few mins and fell behind a bit
    brntbeer  haha not a problem, it's actualy what i enjoy doing during these classes
    Elliot S. yes I did
    git branch esneeringer
    brntbeer  cool, lets do "git checkout esneeringer"
    8:40 AM
    Elliot S. done
    brntbeer  then create a new file. called "esneeringer.md" and open it in a text editor
    Ed Z. has left the room
    Elliot S. done
    brntbeer  boom
    lets add and commit that file
    "git add esneeringer.md"
    git commit -m "added my username as a hello" or something
    Chris M.  has entered the room
    Elliot S. done
    brntbeer  after this, we have a commit on our laptop, but not on our fork yet
    Elliot S. okay
    brntbeer  so, we need to push: git push -u origin esneeringer
    git push <set tracking> <where are we pushing> <what are we pushing>
    Elliot S. sweet - done
    brntbeer  final steps!
    Jason W.  the email volume seems like it could be really noisy if you did a pull request on a highly popular repo. Is there a way to turn down the volume of emails?
    brntbeer  as we push to our fork, since this is a "recently pushed branch" your fork is going to show an option in the web to "compare and pull request" as a green button on the page of your repository
    Jason W.: yep. you can alter all settings over at https://github.com/settings/notifications to turn off all emails or only certain ones
    i go back and forth having web only or email only =)
    Elliot Sneeringer: is that "compare and pull request" button there on your fork after a push?
    Jason W.  tks
    8:45 AM
    Elliot S. yes
    brntbeer  nice. go ahead and click that and start a conversation about your feature
    Michael: also, circling back to your question: we can also resolve merge conflicts locally so that we can resolve them, or tell the person pushing to resolve them. multiple ways to go through it
    Elliot S. okay just did that
    Michael it looks like as a student i'm also able to merge pull request back into Master, is that safe?
    brntbeer  Michael: ha, yep. that's because we've added everyone as collaborators before class
    ah, Elliot Sneeringer, so you sent the pull request back to your own repository
    Elliot Sneeringer: ah
    Elliot S. ah
    okay
    brntbeer  so, the repository you're interacting with here was your original project, not the fork
    Chris M.  Brent, if another users reverts a branch on a remote repository and then I try to pull that branch into my repository I'll get a message saying something to the effect that your repository is ahead of the branch by 3 commits (or some number)
    8:50 AM
    brntbeer  Elliot Sneeringer: https://github.com/esneeringer/project1-1 is the one we're currently working on. sorry for the name confusion
    Chris M.  How can I fix my repository so that this message goes away so I can pull the branch someone else reverted?
    brntbeer  Chris Manger: if you're working with someone and they've pushed to that branch too
    you'll get a message after a "git pull" that mentions your branch is behind or ahead
    and then "git merge origin/THAT-BRANCH"
    also, Chris Manger maybe im missing what you mean by "reverting" a branch here
    Elliot Sneeringer: this isn't really too bad though (since this is basically what we're constantly doing)
    Chris Manger: but just guessing, since you said you're now ahead by 3, and if you wish you weren't ahead by 3 (and just wanted to throw those three commits away) you could "git reset --hard origin/THAT-BRANCH"
    now, if you remember Chris Manger, with --hard, it'll remove those commits completely.
    so, ensure you're wanting to lose those three commits
    Chris M.  my feeling is that we are on the same page as far as reverting
    Elliot S. okay - so what is the process to send the pull request to the project1-1 repo
    brntbeer  yep!
    8:55 AM
    brntbeer  Elliot Sneeringer: yep yep. so on the command line, if you could get back to your "scratch" directory
    Chris M.  so, if I do a reset that will roll back the commits on my local to a previous version that is in sync with the remote branch?
    brntbeer  we're going to do "git clone https://github.com/esneeringer/project1-1&quot;, then "cd project1-1"
    Chris Manger: yep! nice wording
    Chris M.  good, thanks
    brntbeer  Chris Manger: and, to double check you're going to be at that same point, you can do "git fetch origin" to double check that remote branch gets updated again from the remote
    from the upstream*
    Elliot Sneeringer: if you already have that cloned down, then good =) let me know when you've switched into that repository
    Elliot S. i have cloned down
    brntbeer  sweet, so we just wanna cd into that directory.
    then we're going to use a shortcut step and say "git checkout -b esneeringer"
    then create that file, add and commit, then "git push -u origin esneeringer"
    jordanmccullough  https://github.com/githubteacher/foundations-co...
    9:00 AM
    Elliot S. okay - that is complete
    thanks for the help brent
    brntbeer  haha np!
    Elliot S. so not going to my project1-1 repo i click the compare and pull request?
    *now
    brntbeer  ah, Elliot Sneeringer have you added the file before commiting ?
    looks like the commit didn't go through, but the branch was created
    with a "git status" does it still show there's a file that's not commited?
    may need to add it explicitely with "git add esneeringer.md"
    then the commit
    Elliot S. okay
    brntbeer  then push again after we make that commit
    Elliot S. just did that
    brntbeer  nice! so now that button should appear. does it?
    Michael if i misspell a branch how do i rename or delete the branch locally?
    Elliot S. alright, button is up
    brntbeer  Michael: not a problem, since branches are actually just files, we can type "git branch -m OLDBRANCH NEWBRANCH
    Elliot Sneeringer: click it! send that pull request
    9:05 AM
    Elliot S. okay done
    brntbeer  merged it in!
    so, open source contribution complete1
    !
    Elliot S. sweet!
    thanks!
    tim has entered the room
    brntbeer  now, we're going to clone another repository
    https://github.com/githubteacher/foundations-co...
    Michael so i ran an improper syntax of git branch checkout thinking i was going to checkout another branch but created a branch called checkout :) how do i delete the checkout branch
    brntbeer  Michael: git branch -d checkout
    Elliot Sneeringer: so, we're cloning down a branch that we're going to work with evryone on. we're cloning just like you did with project1-1
    tim I'm curious, if the reviewed has confirmed a pull request and merge is complete, what is the easiest way to undo this?
    brntbeer  back into the scratch directory, clone that foundations-collaboration down, and create a branch called your username.
    tim the reviewer **
    brntbeer  "git checkout -b USERNAME"
    tim: to undo a pull request? we can handle that on the command line with either a revert or a reset. takes a bit longer to explain that
    9:10 AM
    Elliot S. alright that clone is complete
    Jason W.  what if you forgot you used -u and use -u multiple times in git push? is that a problem?
    Chris M.  for git push -u origin jordan
    brntbeer  Elliot Sneeringer: cool, we're just creating a branch, putting a unique file in that branch and pushing it
    Chris M.  what does the -u mean?
    brntbeer  the -u is for setting up a remote tracking branch
    so now, a origin/jordan is created on jordan's laptop
    Michael D.  I have ">" on my command prompt how do I get rid of it
    brntbeer  Jason W.: i use -u almost every time by accident. it just ensures that remote tracking branch (the branch with origin/ prefix) is created
    Michael: may want to hit a "cntrl+c" to break out of that
    Michael D.  thank
    brntbeer  tim: to undo the pull request locally, it requires seeing what the merge commit is, but we could reset to a commit on master before that merge commit and then push that up
    9:15 AM
    brntbeer  i know that sounds vague tim, but if you want more help with that, we could work through it over in email if you fire one off to training@github.com
    tim that makes sense actually
    thanks
    brntbeer  awesome
    Michael D.  I don't see my branch
    Chris M.  Brent, I tried git push origin chrisbranch
    and got this message:
    View paste 
    remote: Permission to githubteacher/foundations-collaboration.git denied to cmanger05.
    fatal: unable to access 'https://github.com/githubteacher/foundations-collaboration/': The requested URL returned error: 403
    brntbeer  Chris Manger: looks like we just didnt get you added as a collaborator!
    what's your username?
    Chris M.  my user name is cmanger05
    brntbeer  boom
    try a push now
    Chris M.  yep, just pushed, thanks
    I can now see it
    Jason W.  On my master, I have done a pull and I now have 3 .md files that are new in the master branch.
    How do I get that back into my topic branch again?
    brntbeer  Jason W.: just a "git checkout <BRANCH>"
    whichever BRANCH name you're switching to
    Jason W.  yep - I'm there, but git pull says no new changes
    Michael D.  I committed my file and pushed, but I don't see my branch
    9:20 AM
    Jason W.  so I don't see like serena.md that is my master
    9:20 AM
    brntbeer  Jason W.: yep, that's because your branch and master are slightly divergent locally. which is okay
    Jason W.  ok
    brntbeer  Jason W.: if you're wanting to get changes from master into your branch
    you could actually just say "git merge master" while on your feature branch
    and then push those changes up to github.com
    so your branch and master stay pretty close to each other
    Yuri C. I noticed that I don't get e-mail notifications for my own activity, is this correct?
    Jason W.  Brent is a robot!
    Ron cylons
    brntbeer  BEEP BOOP
    Michael Air traffic control talking :P
    Elliot S. scared my coworkers
    brntbeer  haha sorry~
    Elliot S. pretty funny haha
    Michael D.  Brent my branch isn't showing up
    brntbeer  Yuri Csapo: right, no emails for your own stuff. hopefully you know as stuff happens!
    Michael D.  Or a pull request
    Yuri C. Thanks. makes sense :)
    brntbeer  Yuri Csapo: there is a security audit that can go on though if you want to review things: https://github.com/settings/security
    Michael: can you verify with "git remote -v"
    Yuri C. Brent: very cool, thanks
    brntbeer  that we're pushing to foundations-collaboration, and then on your michael branch, we can say "git push -u origin michael" or whichever your branch may be named
    we have to ensure we're ON that branch and then push it up
    Michael D.  View paste 
    error: src refspec michael does not match any.
    error: failed to push some refs to 'https://github.com/githubteacher/foundations
    -collaboration.git'
    Jason W.  so on github, we deleted the jasonw branch, but when I do git branch locally, I still see that branch. Is that accurate?
    brntbeer  Jason W.: yep, were only deleteing the upstream branch, nthing locally
    Jason W.  Do I just issue a git branch -d jasonw?
    9:25 AM
    brntbeer  if it's fully merged and you want to, sure
    Jason W.  ok
    brntbeer  if you want to delete your remote tracking branch, or make sure you fetch all your deleted branches too
    Michael D.  View paste 
    $ git remote -v
    origin  https://github.com/githubteacher/foundations-collaboration.git (fetch)
    origin  https://github.com/githubteacher/foundations-collaboration.git (push)
    brntbeer  "git fetch --prune origin"
    Michael: and "git status" shows you on which branch?
    tim if you delete a branch on remote, you still get to keep that branch locally. Is that correct?
    brntbeer  tim: yep. nothing ever breaks locally
    Chris M.  Brent: I was wondering what upstream means?
    brntbeer  even after pulls and fetches
    upstream is the "github.com" repository
    tim great
    Michael D.  Got it.
    brntbeer  Michael: gotcha, what happened?
    Michael can you explain the branching diagram in the graph pane?
    tim so it you push that local branch which was just deleted on remote, that will recreate the very same branch?
    Michael D.  I used the wrong branch name
    Pull Request sent
    brntbeer  whoops
    Michael: i'll get jordan to do that, that's a good point
    tim: yep, if you delete upstream branches, and keep ppushing, it just keeps creating it
    Michael D.  Jordan I sent a pull request just a bit slow
    brntbeer  Michael: commented ;)
    9:30 AM
    Michael D.  Done
    brntbeer  when we come back, we'll show the diagram explaining upstream (cc Chris Manger) and how these merges come in and why the graph looks like it does on the right side of the screen
    Michael Thanks!
    brntbeer  np!
    Elliot Sneeringer: how we doing?
    Elliot S. a little behind again sorry
    Chris M.  When I was getting everyones elses files from the repository. I did git fetch origin and then git merge origin/master. What is the difference between doing git merge origin/master and doing git pull origin master? (would git pull origin master work because we've already fetched the files?)
    brntbeer  noottttt a problem! if you want to go get a drink of water and stuff and come back, or just go from here we can do that
    Elliot S. give me 3 mins
    brntbeer  np, just let me know when you're back
    Chris Manger: yeah, so, "git pull" by itself is a combination of fetch+merge
    and without specifying anything after "pull" (ie: no origin, no master) it just fetches everything, and merges into the current branch you're on
    so if you're on master, and say "git pull"
    it'll fetch all other branches created by people
    and then fetch+merge origin/master
    9:35 AM
    Chris M.  When a fetch is performed, where are those files stored to in local?
    brntbeer  into the remote tracking branches
    origin/master, origin/branchname origin/etc
    jordan's diagram after break will kinda let us know about that
    jordanmccullough  Great question Chris.
    I'll be happy to detail the process of `pull` `fetch` and how that all works out.
    Chris M.  :)
    that sounds good. I'd be interested in seeing how this process works itself out
    Elliot S. okay im back
    Chris M.  I was wondering if there would ever be a situation where I would need to edit the .git/config directly?
    brntbeer  Elliot Sneeringer: sweet. so you've cloned foundations-collaboration
    and you're in that project.
    in that project locally*
    Elliot S. yes
    brntbeer  we're just going to create a new branch, esneerginger, add a file to it, put some things in there, and push that up to githubteacher/foundations-collaboration
    pretty similar to what we did earlier, only we're pushing to a repository that everyone has access to now
    9:40 AM
    brntbeer  the thought being here that we're all on the same team, working on branches for our features
    and then, that pull request that we send is going to stay within the same repository. and we'll be looking for someone else to either merge it for us, or tell us we can merge it
    Michael D.  has entered the room
    Elliot S. okay i have that branch ceated
    created
    brntbeer  cool, lets make sure we've switched to it with seeing what status says. it should say "# on branch <branchname>"
    if not, just "git checkout <branchname>"
    Elliot S. yep all good
    brntbeer  cool
    lets add a file, and commit it now
    Elliot S. so I am in the foundation-collaboration repo
    and esneeringer branch
    added a new file to it
    not committing it
    brntbeer  "git add <filename>", then git commit -m'my file and why i created it''
    9:45 AM
    Elliot S. always forget the add
    alright that is completel
    brntbeer  we gotta make sure we add our changes to the staging area before commiting. kind of annoying, i know, but it helps us form stronger commits and more succinct commits / thoughts
    cool
    git push -u origin <branch<
    Elliot S. okay done
    thanks again for this backup brent - weird doing this while at the office
    Chris M.  What is the best way to clean up a list of commits? is squash the best way to do this?
    brntbeer  haha np
    Elliot S. okay, so what is my next step
    brntbeer  Chris Manger: absolutely. there's a cool command called rebase.
    Elliot Sneeringer: send that pull request!
    Elliot S. make a new pull request?
    brntbeer  Chris Manger: it's kinda complicated to just explain in text
    Elliot S. or should it come up?
    brntbeer  Elliot Sneeringer: yep absolutely
    Michael when we delete a branch on GitHub, should I delete that branch locally?
    brntbeer  send a PR from your branch to master
    Michael or will that disappear on the next pull?
    brntbeer  if the "compare" button doesnt show up, we can always go to https://github.com/githubteacher/foundations-co... and set it up there by changing those dropdowns. specifically the "compare" one that we're wanting to send into master
    Michael: yeah, you could. i typically do
    9:50 AM
    brntbeer  Michael: so i do a "git fetch --prune origin" to delete that origin/BRANCHNAME
    and then "git branch -d BRANCHNAME'
    Chris Manger: so, rebase! i typically get on these feature branches, and have 4 or 5 commits that read "debug" "trying again" "one more attempt"
    etc
    Elliot S. alright, that is done i believe
    brntbeer  Elliot Sneeringer: commented!
    if you could add a new file, commit it, and then push back to that branch
    we'll see things get updated to that pull request
    Chris Manger: rebase is a way of saying "ok, there's been commits onto master since i created my branch. what i want to do is pretend i've created my branch at the latest point of master"
    Chris M.  oh, I see, so it's like attaching a commit to the last update
    Elliot S. okay, now I'm seeing it
    9:55 AM
    brntbeer  Chris Manger: going to just type a lot at once and not enter, since you're probably listening to jordan. but check out http://training.github.com/presentations/git-fo... (and move through the slide with the down-arrow). that moves things to the latest commit, all of them. now, moving further, we have "git rebase -i master" which would do an interactive rebase. that does regular rebase, but it allows us to pause to construct HOW we want to do this reconstruction. squashing some commits, rewording things, etc. kind of fun to play around with on test repositories. the thing to think about with "-i" is that we have a recipe. so a "fixup/squash" instruction would squash/fixup to the commit ABOVE it in the recipe
    rebase can be complicated and i could go into it for hours. so if you don't get it dont worry
    Elliot Sneeringer: commented. feel free to follow instructions!
    Chris M.  Thank you Brent, that link shows how rebasing condenses commits nicely
    I think rebasing is something I should look into a little further
    Also, I had another question I wanted to run by you
    how is it possible to delete a repository. I created a repository a week and put some files on it that are confidential and when I try to delete the master branch it won't let me.
    brntbeer  Chris Manger: if you want to delete it off github.com, go to the settings of that repository (lower right bar)
    and scroll to the bottom of the repository settings, and find the dangerzone
    where it'll tell you some info about deleteing
    10:00 AM
    Chris M.  thanks, I just deleted that repository
    brntbeer  boom
    Michael can we go through the graph explanation?
    brntbeer  Michael: the graph he's got on the right side of his terminal?
    Michael yup
    brntbeer  i'll let him show these branching graphs, and then hopefully it'll make more sense. I'll be supplimenting after this bit too
    going to try to hop on audio. hopefully im not a cylon
    Chris M.  After a rebase is done, and then it is pushed. It is my understanding that I cannot push again if I rebase a second time. Is that correct?
    brntbeer  Chris Manger: the other thing to keep in mind with rebases
    is that since we're grabbing a set of commits and re-applying them ontop of a new point
    10:05 AM
    brntbeer  (re-creating the branch, re-applying commits to the latest point)
    its going to re-calculate the commit hashes
    so, when we try to push that branch back up to github.com
    it's going to complain and say "but but butttt butttttt there's commits up here you don't have!"
    "pull first"
    this is because github.com doesnt know you're rebasing and forming history better
    this requires a "git push -f origin <BRANCH>" where we'll be forcing the push. warning this is something we generally don't want to do on branches when others are working with us
    because now their pulls will be wonky, possibly resulting in conflicts.
    just something to communicate on Pull Requests as their open, etc
    Chris M.  if I need to rebase a branch for a second time and then push it, would it be best to create a new branch based on the old one, rebase it, and then push it?
    10:10 AM
    Michael so to break it down to merge it's 'git merge <branchname>'
    is that right?
    brntbeer  Chris Manger: nah, i mean if you know what you're doing nothing is ever wrong to do. for instance. your branch is in a pull request, but then master gets more commits and you want to keep your branch ahead of master (which would incorporate the changes from master).. you can merge master INTO your branch or do another rebase. the rebase is just going to possibly make things cleaner to merge later but will cause some people to not pull and work on your branch
    i default to "rebase once before im sharing with people, merge master into my branch for getting future updates"
    Michael: yep.
    Michael: where that'll merge <branchname> into your current branch
    Chris M.  thanks for the explanation Brent, that makes sense
    brntbeer  Chris Manger: glad it does!
    every time we rebase and need to push, it'll require a force push
    10:15 AM
    brntbeer  Elliot Sneeringer: feel free to merge that pull request yourself by the way!
    Chris M.  Brent, is Jordan's presentation recorded and, if so, is it possible to view it again on a later date if we wish to?
    brntbeer  it's unfortunately not record. the work we're doing over at youtube.com/githubguides for the short foundation videos (more coming soon) will be going over more of this stuff
    trying to make it short and sweet for each step of this foundations clas
    http://www.youtube.com/playlist?list=PLg7s6cbtA... is the latest playlist
    Chris M.  cool, thank you
    10:20 AM
    brntbeer  whoops. some static
    Elliot S. audio
    Michael D.  Audio
    Yuri C. static
    David H.  Losing audio
    brntbeer  should be good now. everyone else going well?
    Elliot S. back up
    Michael can you repeat
    Ron lost part of conversation
    Elliot S. *audio is back up
    brntbeer  woot
    Michael D.  View paste 
    $ git merge feature2
    Merge made by the 'recursive' strategy.
     contributing.md | 9 +++++++++
     1 file changed, 9 insertions(+)
     create mode 100644 contributing.md
    Kyle  When I did git merge feature2, it never prompted for a message
    just went ahead and did it
    Michael D.  No error like his
    10:25 AM
    Jason W.  When I do the git log --format=raw -1, I don't go into a LESS - it just prints out. How do I get it to go into a LESS?
    10:25 AM
    Jason W.  View paste 
    Wisemans-Mac-Pro:project1 wiseman$ git log --format=raw -1
    commit 6b40488d485fa50257d7fd1f683db88f832dc8ed
    tree a2a058f3f14bfbe0bd699ea1422936f8f6d5efcb
    parent 202bb108189c00c5937f05b04b9e2dbe47a4a97a
    parent 2750d3029f0ab5fd05e7d79a693b3311cb7bc920
    author Jason Weiss <jason.weiss@therustedroof.com> 1386872546 -0500
    committer Jason Weiss <jason.weiss@therustedroof.com> 1386872546 -0500

        Merge branch 'feature'
    Wisemans-Mac-Pro:project1 wiseman$
    brntbeer  Kyle: it'll only prompt you if there's a recursive merge
    Jason W.: it'll by default show LESS when the content runs off the screen.
    Jason W.  ah - ok
    Kyle  It did return the message "Merge made by the 'recursive' strategy."
    brntbeer  Jason W.: there's a way to make it default every time, but i'd suggest not doing that =P
    Kyle: what operating system are you on?
    Michael D.  Same boat as Kyle
    Jason W.  I made my terminal smaller and less showed up - tks
    Kyle  Windows 7
    Michael what's the difference between -d and -D when deleting a branch
    David H.  I seem to only have one parent returned, but my master has the changes from both of my features
    Michael I got an error when i typed git branch -d feature2
    but worked with -D
    brntbeer  Kyle Michael: hmm, may be a windows install thing...which i'd actually prefer. if you want to change the merge message, you can say git merge feature2 -m "my custom message"
    Michael: eh, more of a warning ;). just mentioning that your branch isn't fully merged in?
    Michael ah ok
    brntbeer  feel free to use -D if you want to just do it automatically
    Michael D.  Awesome
    10:30 AM
    brntbeer  again this is a script jordan has for just demo purposes
    10:40 AM
    Chris M.  so, git reset --hard origin/recovery-example will rollback all commits on local that were created after the reovery-example branch was created?
    brntbeer  it'd rollback to put you at the same commit that origin/recovery-example is
    so, i often thing
    think(
    "ok, i'll do a fetch. and then i want to reset to put my branch locally to what i just got updated is on the upstream"
    so i reset origin/branch
    origin/branchname.
    so it depends where origin/recovery-example is at
    Michael So the reset allows us to rollback to a point in time. Does that mean we blow anything away that has changed since that roll back?
    audio is crackly
    10:45 AM
    Serena V. Cant really understand much because of the crackling
    brntbeer  whoops! sorry michael
    =(
    basically just said "if you have local commits in recovery-example, and decided 'well i dont want these'. i can `git reset --hard origin/recovery-example` and get back to that point from where github.com is at"
    Serena V. ah ok, thanks for typing that out
    brntbeer  np!
    10:50 AM
    Drake Brent, what's the difference between git stash pop and git stash apply? I've always used apply.
    brntbeer  ah! sooooo me too
    git stash pop, will remove and apply
    where apply just applies and requires you to delete it later
    Drake ah, good call. thanks!
    brntbeer  i apply becaue if when applying it results in a conflict, i can remove everything (aborting or resetting) and still have it to apply later
    this happens if i stash apply in the wrong branch
    Drake yeah, I like that better as well.
    Michael are you able to use the stash option in githubGUI?
    brntbeer  nope, stash is a command line only thing
    it's just kind of difficult to deal with in any graphical use interfaces
    user*
    10:55 AM
    Bob When a maintainer merges pull request #1, and then wishes to merge another pull request #2 but there is a conflict, how does this get resolved to include both modifications?
    brntbeer  the maintainer could either talk to the person sending the pull request to resolve it (usually by doing a merge locally of master into that branch, resolving conflicts, and then re-pushing up to github.com)
    or, there's command line instructions for the maintainer to do it as well
    Jason W.  When can we expect an email with the chat history and Jordan's command history?
    11:00 AM
    brntbeer  Jason W.: next day or two
    Jason W.  tks
    brntbeer  oh god run away, jordan is puking1
    !
    Jason W.  nice job guys - thanks
    Michael Great course guys!
    Drake Thanks guys!
    David H.  Thanks!
    Yuri C. Thanks guys!
    brntbeer  thankk you guys. loved the questions!
    Bob Thanks guys! Well done.
    Elliot S. Thanks you guys! Good stuff
    Darren  Thanks!
    Yuri C. has left the room
    jordanmccullough  Thank you.
    Michael has left the room
    jordanmccullough  Thanks for joining. Best of luck!
    Serena V. Sorry - Where will we find all of the course notes etc??
    jordanmccullough  Serena--We'll send out a classnotes link by email with all the resources.
    Michael D.  Thanks
    brntbeer  Serena Vandersteen: they'll be emailed out in the next few days
    Serena V. ok perfect, thanks so much - looking forward to that then
    jordanmccullough  If you need the course slidedeck now, that is available at https://training.github.com/presentations/
    :-)
    11:05 AM
    Serena V. Ah, great!
