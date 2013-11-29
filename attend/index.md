---
layout: page
prerequisites: Basic knowledge about a version control system is recommended, whether that be Subversion, CVS, Perforce, StarTeam, SourceSafe, ClearCase or any similar product.
---



<div class="container center pencil">
  <div class="two-third">
    <h1>Education from the experts</h1>
    <p>
      We love helping people just like you use GitHub and Git to collaborate and be more productive. No matter your level of experience, we've got something just for you.
    </p>
  </div>

  <ul class="boxes classes-text-color">
    <li>
      <a href="#free">Free</a>
    </li>

    <li>
      <a href="#foundations">Foundations</a>
    </li>

    <li>
      <a href="#advanced">Advanced</a>
    </li>

    <li>
      <a href="#custom">Custom</a>
    </li>
  </ul>
</div>

<div class="container center">
  <div class="two-third">
    <p class="dim-text">What being said about GitHub's training...</p>
    <blockquote>
      <span>
        Online git training today was phenomenal.
      </span>
      <div class="attribution">
        <div class="author">David Bock</div>
        <div class="company">Founder, Code Sherpas</div>
      </div>
    </blockquote>
  </div>
</div>

<div class="hidden"><a name="free"></a></div>

<div class="dim-grad">
  <div class="container center">
    <h2>Free Classes</h2>

    <p>GitHub offers free, short, topical online classes about GitHub, Git, and the union of these two technologies. We rotate through various topics every few months and are constantly looking to introduce new topics and concepts into the mix. <strong>Office Hours</strong> are free events following our free classes that allow any user of Git or GitHub to get answers directly from Git Experts.</p>

    <div class="shadow-pane">
      <ul class="class-list">
        {% for class in site.tags.web-free reversed %}
          <li class="resource class">
            <div class="info">
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
            </div>

            <a href="{{ class.registration_url }}" class="button">
              <div class="register">
                Register for {{ class.cost }}
              </div>
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


<div class="container ">
  <table class="details">
    <tr>
      <th>
        Details
      </th>

      <th class="column-divider"></th>

      <th>
        Topics
      </th>

      <th>
        Objectives
      </th>
    </tr>

    <tr>
      <td>

      </td>

      <td class="column-divider"></td>

      <td>
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
      </td>

      <td>
        <ul>
          <li>Understand how Git works and apply that to day to day development.</li>
          <li>Learn how GitHub makes distributed collaboration enjoyable.</li>
          <li>Practice the use of Pull Requests to make contributions to any project.</li>
          <li>Learn the basic 10 commands that will appear in your every-day use of Git.</li>
          <li>Know how to "back out" mistakes and revert almost any change.</li>
          <li>Leverage the features of GitHub for easier collaboration with colleagues.</li>
          <li>Discover how the offline capabilities of Git work.</li>
        </ul>
      </td>
    </tr>
  </table>
</div>


<div class="hidden"><a name="foundations"></a></div>

<div class="dim-grad">
  <div class="container center">
    <h2>Foundations</h2>
    <p>Our Foundations class helps you, as a newcomer to GitHub and Git, fully grasp the concepts and application of distributed version control so that you can effectively begin using this productivity-enhancing suite of tools. During this live training course, we'll explore the foundations of GitHub and Git through practical every-day commands and processes. We'll conclude with workflow ideas and practical tips that will get you on the road to mastery of this revolutionary version control system.</p>

     <div class="shadow-pane">
      <ul class="class-list">
        {% for class in site.tags.web-foundations reversed %}
          <li class="resource class">
            <div class="info">
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
            </div>

              <a href="{{ class.registration_url }}" class="button">
                <div class="register">
                  Register for {{ class.cost }}
                </div>
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

<div class="container">
  <table class="details">
    <tr>
      <th>
        Details
      </th>

      <th class="column-divider"></th>

      <th>
        Topics
      </th>

      <th>
        Objectives
      </th>
    </tr>

    <tr>
      <td>

      </td>

      <td class="column-divider"></td>

      <td>
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
      </td>

      <td>
        <ul>
          <li>Understand how Git works and how to apply that to day to day development.</li>
          <li>Learn how GitHub makes distributed collaboration both effective and enjoyable.</li>
          <li>Practice the use of Pull Requests to make contributions to any project.</li>
          <li>Learn the basic 10 commands that will appear in your every-day use of Git.</li>
          <li>Know how to "back out" mistakes using Git's incredible history and ability to revert almost any change.</li>
          <li>Leverage the features of GitHub for easier collaboration with colleagues.</li>
          <li>Discover how the offline capabilities of Git work.</li>
        </ul>
      </td>
    </tr>
  </table>

</div>


<div class="hidden"><a name="advanced"></a></div>

<div class="dim-grad">
  <div class="container center">
    <h2>Advanced</h2>
    <p>Many Git workshops successfully focus on the basics for those new to DVCS. However, with Git having a full 5 years on the street now, there is a growing desire to address the maturing users of this innovative DVCS. This workshop will take existing Git users and bring them to a heightened level of productivity by leveraging Git's powerful, yet underused "advanced" features.</p>


    <div class="shadow-pane">
      <ul class="class-list">
        {% for class in site.tags.web-advanced reversed %}
          <li class="resource class">
            <div class="info">
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
            </div>

              <a href="{{ class.registration_url }}" class="button">
                <div class="register">
                  Register for {{ class.cost }}
                </div>
              </a>
          </li>
        {% endfor %}
        {% if site.tags.web-foundations[0] == null %}
          <p>There are no scheduled web-based foundation classes at this time. Stay tuned for updates!</p>
        {% endif %}
      </ul>
    </div>

    <table class="details">
      <tr>
        <th>
          Details
        </th>

        <th class="column-divider"></th>

        <th>
          Topics
        </th>

        <th>
          Objectives
        </th>
      </tr>

      <tr>
        <td></td>
        <td class="column-divider"></td>
        <td>
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
        </td>

        <td>
          <ul>
            <li>Enabling Git users to effectively migrate repositories from other formats.</li>
            <li>Facilitate history modification of Git repositories.</li>
            <li>Establish time-tested branching and merging strategies.</li>
            <li>Enhance knowledge of Git tools to simplify history.</li>
            <li>Search Git history with ease and precision.</li>
            <li>Move to and reuse code on other branches via commits and tags.</li>
            <li>Understand Git's tagging and GPG signing process.</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</div>



<!-- <div class="container"> -->
  <!-- <ul class="class-list">
    {% for class in site.tags.inperson-advanced %}
      <li class="resource class">
        <div class="info">
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
        </div>

          <a href="{{ class.registration_url }}" class="button">
            <div class="register">
              Register for {{ class.cost }}
            </div>
          </a>
      </li>
    {% endfor %}
    {% if site.tags.inperson-advanced[0] == null %}
      <p>There are no scheduled in-person advanced classes at this time. Stay tuned for updates!</p>
    {% endif %}
  </ul> -->
<!-- </div> -->

<div class="hidden"><a name="custom"></a></div>

<div class="dim-solid">
  <div class="container center">
    <h2>GitHub Events &amp; Private Training</h2>

    <p>Live events may cover anything from Git Foundations up to more advanced topics. Check out each event's details and registrations pages to find more info about the topics that will be covered then.</p>

    <p>Private group events are available. Please <a href="{{ site.url }}/contact/">contact us</a> for more information.</p>
<!--     {% if page.prerequisites %}
      <h4>Prerequisites</h4>
      <p>{{ page.prerequisites }}</p>
    {% endif %} -->
  </div>
</div>

<!-- <div class="dim-solid">
  <div class="container">
    <h4>GitHub Help</h4>
    <p>If you just need a quick answer, GitHub's <a href="http://help.github.com" target=_blank>help website</a> is an excellent resource to keep bookmarked. It covers a range of Git topics from basic setup, all the way through to advanced topics.</p>
  </div>
</div> -->