---
layout: web
prerequisites: Basic knowledge about a version control system is recommended, whether that be Subversion, CVS, Perforce, StarTeam, SourceSafe, ClearCase or any similar product.
---

<div class="banner attend">
    <div class="center-center">
        <div class="container">
            <!-- <h1>Many formats of learning</h1> -->
            <p>
                No matter where you are in the world, our web-based,<br>
                live classes allow you to participate in interactive workshops.
            </p>

<!--             <div class="container">
                <ul class="section-selector">
                    <li><a href="#free"><div>Free Class</div></a></li>
                    <li><a href="#foundations"><div>Foundations</div></a></li>
                    <li><a href="#advanced"><div>Advanced</div></a></li>
                </ul>  
            </div> -->
        </div>
    </div>
</div>






<div class="hidden"><a name="free"></a></div>
<div class="section dim">
    <div class="container">
        <div class="two-third training-photo-free">
          <h2>Free Classes</h2>

          <p>GitHub offers free, short, topical online classes about GitHub, Git, and the union of these two technologies. We rotate through various topics every few months and are constantly looking to introduce new topics and concepts into the mix. <strong>Office Hours</strong> are free events following our free classes that allow any user of Git or GitHub to get answers directly from Git Experts.</p>


          
        </div>
        
        <div class="third">
        </div>

        <div class="two-third">
          <ul class="class-list">
            {% for class in site.tags.web-free reversed %}
              <li class="resource class">
                  <h4>{{ class.title }}</h4>
                  <span class="location">{{ class.location }}</span>

                  {{ class.content }}
                  <div class="details">
                      <span class="date">
                          {{ class.the_date }}
                      </span>
                      <span class="time">
                          {{ class.start_time }}
                          {% if class.end_time %} to {{ class.end_time }}{% endif %}
                          {% if class.timezone %}(<a href="{{ class.timezonelink }}">{{ class.timezone }}</a>){% endif %}
                      </span>
                  </div>

                  <a href="{{ class.registration_url }}" class="button">
                      <p class="register">
                          Register for {{ class.cost }}
                      </p>
                  </a>
              </li>
            {% endfor %}
            {% if site.tags.web-foundations[0] == null %}
              <p>There are no scheduled web-based foundation classes at this time. Stay tuned for updates!</p>
            {% endif %}
          </ul>

        </div>
    </div>
</div>

<div class="section">
  <div class="container">
    <div class="half">
      <h3>Topics</h3>
      <ul>
          <li>Git and your initial setup</li>
          <li>Git configuration</li>
          <li>Understanding Git's three stages</li>
          <li>Adding, committing, and diff-ing changes</li>
          <li>The Similarity Index</li>
          <li>Reviewing version history</li>
          <li>Managing and using Git Remotes</li>
          <li>Branching, Tagging, and Stashing</li>
          <li>Merging, Rebasing, and Conflicts</li>
          <li>Undoing your work with Git</li>
      </ul>
    </div>

    <div class="half">
      <h3>Objectives</h3>
      <ul>
          <li>Understand how Git works and apply that to day to day development.</li>
          <li>Learn how GitHub makes distributed collaboration enjoyable.</li>
          <li>Practice the use of Pull Requests to make contributions to any project.</li>
          <li>Learn the basic 10 commands that will appear in your every-day use of Git.</li>
          <li>Know how to "back out" mistakes and revert almost any change.</li>
          <li>Leverage the features of GitHub for easier collaboration with colleagues.</li>
          <li>Discover how the offline capabilities of Git work.</li>
      </ul>
    </div>
  </div>
</div>

<div class="hidden"><a name="foundations"></a></div>
<div class="section dim">
    <div class="container">
      <div class="third"></div>
      <div class="two-third training-photo-foundations">
          <h2>Foundations</h2>
          <p>Our Foundations class helps you, as a newcomer to GitHub and Git, fully grasp the concepts and application of distributed version control so that you can effectively begin using this productivity-enhancing suite of tools. During this live training course, we'll explore the foundations of GitHub and Git through practical every-day commands and processes. We'll conclude with workflow ideas and practical tips that will get you on the road to mastery of this revolutionary version control system.</p>
        </div>
        <div class="third"></div>
        <div class="two-third">
          <ul class="class-list">
            {% for class in site.tags.web-foundations reversed %}
              <li class="resource class">
                  <h4>{{ class.title }}</h4>
                  <span class="location">{{ class.location }}</span>
                  {{ class.content }}
                  <div class="details">
                      <span class="date">
                          {{ class.the_date }}
                      </span>
                      <span class="time">
                          {{ class.start_time }}
                          {% if class.end_time %} to {{ class.end_time }}{% endif %}
                          {% if class.timezone %}(<a href="{{ class.timezonelink }}">{{ class.timezone }}</a>){% endif %}
                      </span>
                  </div>

                  <a href="{{ class.registration_url }}" class="button">
                      <p class="register">
                          Register for {{ class.cost }}
                      </p>
                  </a>
              </li>
            {% endfor %}
            {% if site.tags.web-foundations[0] == null %}
              <p>There are no scheduled web-based foundation classes at this time. Stay tuned for updates!</p>
            {% endif %}
          </ul>
        </div>
    </div>
</div>

<div class="section">
  <div class="container">
    <h4>Topics</h4>
    <ul>
      <li>Introductions</li>
      <li>Git and your initial setup</li>
      <li>Git configuration and its inheritance</li>
      <li>SSH Authentication and your first repository</li>
      <li>Understanding and thinking in Git's three stages</li>
      <li>Adding, committing, and diff-ing code changes</li>
      <li>The Similarity Index; Moving, Renaming, and Removing files</li>
      <li>Reviewing version history in Git</li>
      <li>Strategies for efficiency</li>
      <li>Managing and using Git Remotes</li>
      <li>Branching, Tagging, and Stashing</li>
      <li>Merging, Rebasing, and managing conflicts</li>
      <li>Undoing your work with Git</li>
      <li>Making Git work with SVN</li>
    </ul>

    <h4>Objectives</h4>
    <ul>
      <li>Understand how Git works and how to apply that to day to day development.</li>
      <li>Learn how GitHub makes distributed collaboration both effective and enjoyable.</li>
      <li>Practice the use of Pull Requests to make contributions to any project.</li>
      <li>Learn the basic 10 commands that will appear in your every-day use of Git.</li>
      <li>Know how to "back out" mistakes using Git's incredible history and ability to revert almost any change.</li>
      <li>Leverage the features of GitHub for easier collaboration with colleagues.</li>
      <li>Discover how the offline capabilities of Git work.</li>
    </ul>
  </div>
</div>

<div class="hidden"><a name="advanced"></a></div>
<div class="section dim">
    <div class="container">
      <div class="two-third">
        <h2>Advanced</h2>
        <p>Many Git workshops successfully focus on the basics for those new to DVCS. However, with Git having a full 5 years on the street now, there is a growing desire to address the maturing users of this innovative DVCS. This workshop will take existing Git users and bring them to a heightened level of productivity by leveraging Git's powerful, yet underused "advanced" features.</p>
      </div>

      <div class="third"></div>

      <div class="two-third">
        <ul class="class-list">
          {% for class in site.tags.web-advanced reversed %}
            <li class="resource class">
                <h4>{{ class.title }}</h4>
                <span class="location">{{ class.location }}</span>
                {{ class.content }}
                <div class="details">
                    <span class="date">
                        {{ class.the_date }}
                    </span>
                    <span class="time">
                        {{ class.start_time }}
                        {% if class.end_time %} to {{ class.end_time }}{% endif %}
                        {% if class.timezone %}(<a href="{{ class.timezonelink }}">{{ class.timezone }}</a>){% endif %}
                    </span>
                </div>

                <a href="{{ class.registration_url }}" class="button">
                    <p class="register">
                        Register for {{ class.cost }}
                    </p>
                </a>
            </li>
          {% endfor %}
          {% if site.tags.web-foundations[0] == null %}
            <p>There are no scheduled web-based foundation classes at this time. Stay tuned for updates!</p>
          {% endif %}
        </ul>


        <ul class="class-list">
          {% for class in site.tags.inperson-advanced %}
            <li class="resource class small-class">
              <div class="summary">
                <div class="actions">
                  <p class="register">
                    <a href="{{ class.registration_url }}" class="button">Register Now</a>
                  </p>
                </div>
                <h4>{{ class.title }}</h4>
                <p>
                </p>
                <div class="description">
                  <p><span class="cost">{{ class.cost }}</span></p>
                </div>
              </div>
              <div class="details">
                <span class="date">
                  <img src="{{ site.url }}/img/icon-calendar.png" width="16px" height="16px" class="icon">
                  {{ class.the_date }}
                </span>
                <span class="time">
                  <img src="{{ site.url }}/img/icon-clock.png" width="16px" height="16px" class="icon">
                  {{ class.start_time }}
                  {% if class.end_time %} to {{ class.end_time }}{% endif %}
                  {% if class.timezone %}(<a href="{{ class.timezonelink }}">{{ class.timezone }}</a>){% endif %}
                </span>
              </div>
            </li>
          {% endfor %}
          {% if site.tags.inperson-advanced[0] == null %}
            <p>There are no scheduled in-person advanced classes at this time. Stay tuned for updates!</p>
          {% endif %}
        </ul>
      </div>
    </div>
</div>

<div class="section">
  <div class="container">
    <h4>Topics</h4>
    <ul>
      <li>Common Branching Strategies</li>
      <li>Branching Models</li>
      <li>Applying Branching Strategies</li>
      <li>Branch Pull Options</li>
      <li>Reusing Small Pieces of Code</li>
      <li>Inserting Commits Into Existing History</li>
      <li>Building Custom Commands via Aliases</li>
      <li>Undoing and Re-doing Almost Anything</li>
      <li>Minimizing Repetitive Conflict Resolution</li>
      <li>Log History Searches</li>
      <li>Advanced Interactive Rebase</li>
      <li>Commit Data Structure Internals</li>
      <li>Refspecs</li>
    </ul>

    <h4>Objectives</h4>
    <ul>
      <li>Enabling Git users to effectively migrate repositories from other formats.</li>
      <li>Facilitate history modification of Git repositories.</li>
      <li>Establish time-tested branching and merging strategies.</li>
      <li>Enhance knowledge of Git tools to simplify history.</li>
      <li>Search Git history with ease and precision.</li>
      <li>Move to and reuse code on other branches via commits and tags.</li>
      <li>Understand Git's tagging and GPG signing process.</li>
    </ul>
  </div>
</div>



<div class="section dim">
    <div class="container">
        <h2>Private Education</h2>
        <p>Private group events are available. Please <a href="{{ site.url }}/contact/">contact us</a> for more information.</p>
        {% if page.prerequisites %}
          <h4>Prerequisites</h4>
          <p>{{ page.prerequisites }}</p>
        {% endif %}


        <h4>GitHub Help</h4>
        <p>If you just need a quick answer, GitHub's <a href="http://help.github.com" target=_blank>help website</a> is an excellent resource to keep bookmarked. It covers a range of Git topics from basic setup, all the way through to advanced topics.</p>
    </div>
</div>

