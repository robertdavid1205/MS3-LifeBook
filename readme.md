![Mockup of website](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/mockup/mock-up.jpg)

[View the deployed website](https://lifebook-ms3.herokuapp.com/)


# Life Book
---

### Table of Contents

### Table of Content

1. [Project Goals](#project-goals)
2. [User Goals](#user-goals)
3. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User stories](#user-stories)
    3. [Site Owner Goals](#site-owner-goals)
    4. [Scope](#scope)
4. [Design Choices](#design-choices)
    1. [Colors](#colors)
    2. [Fonts](#fonts)
    3. [Structure](#structure)
5. [Frameworks & Tools](#frameworks,-libraries-and-other-tools)    
6. [Wireframes](#wireframes)
7. [Testing](#testing)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Performance](#performance)
    4. [Device testing](#performed-tests-on)
    5. [Browser compatibility](#browser-compatability)
    6. [Testing user stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Features](#features)
10. [Languages](#languages-used)
11. [Deployment](#deployment)
12. [Credits](#credits)
    1. [Code](#code)
    2. [Media](#media)
    3. [Acknowledgements](#acknowledgements)
---

Life Book is an online library of books that, in some way or another changed your life, or helped you make your life better. The users can register and upload their own books, with the option to share the reason why theat book helped them so other users, that browse the library can have better information on what will their next book be. 

### Project Goals
---
* Create a go to place for book recomendations by offering to the user a simple and user friendly platform where to get information.
* Allow users to share their discoverys, and to find other users discoverys, in this way helping people through lecture.
* Storing data in a safe database and make it easy accesible.

### User Goals
---
1. Find new and helpfull books to read.
2. Share the books that helped them so they might help others.
3. Stay up to date with what's new.
4. To have the ability to update or delete their own posts.

### User Experience

The website was designed with mobile first in mind by creating easy readable and easy to separate pieces of content.
The pages were structured in a way that most importat content is displayed in front of your eyes, then in order of priority down the line.
The user experience is designed so that the user can discover needed information and share their life changing books with the other users. 

#### Target Audience

* Anyone
* People who are not happy with their life and want to chane it for the better
* People who are interested in self help and spirituality.

### User Stories
---
1. As a first time user I want to find out what the site is all about.
2. As a first time user I want to find books that help me in my search.
3. As a returning user, I want to be able to register and login.
4. As a returning user, I want to be able to add new books to the site and share my reason with the users.
5. As a frequent user I want to be able to find new books , that I don't know about.


### Site Owner Goals
---
1. To have all the information easy to reach.
2. To have an attractive and easy to use site.
3. To have a site that is responsive on all devices and easy to navigate.
4. To have as many users as possible, users that register and use our service.

### Scope
---
The scope of the project is defined by:

* Navigation bar, for a simple navigation of the website
* Footer available in all the website's pages, with links to social media platforms
* An about section, that contains information about the idea of the website.
* A search bar , which will be helpful in the search of a defined author or title.
* A library which contains all the titles in the database.
* The register page will contain a form for new members to sign up and be part of the community.
* A login page will contain a form for registered users to login.
* An add book page that contains a form that is helpfull in adding a new title to the site.
* A edit page which contains a form from that is helpfull in editing the books previously uploaded.
* Favicon to help users identify the website easier.

Features to be built in future releases:

* Options to like and comment on the titles.
* A newsletter subscription system with monthnly newsletters.
* An page with events for likeminded people.

### Design Choices
---
* The goal for this site was to create a simple and easy to use platform, that expresses calm and relaxation and a simple and easy to use system.

### Colors
---
Main colors are **Orange** / **Teal** and **Light-Orange**. Most of the website is **Light-Orange** and **Teal** to give the feeling of something relaxing and calmness, the **Orange** color is used in the Navbar and Footer and ads a nice touch to create a contrast and define the elements.

### Fonts
---
I have used Indie Flower as the font for the most part of website, to give it a relaxed look. And the standard Arial for the forms and other text, as is clean and easy to read.

### Structure
---
In the upper part there's a navigation menu, which contains the name of the page "Life Book" in the left side , then in the right side whe have 3 pages "Home, Login and Register"(and 4 pages "Home, Log Out, Profile, Add Book" once you are logged in).
On the **Home** page, we have a descriptive image of a book in nature and under that we have **What is Life Book**, with some information about what we are all about, and underneath there's a  **Search Bar** and then the **Library** and at the bottom of the page the **Footer**.
Then The **Login** page, displays a form with the required steps to login, and the **Register** page , which displays another form with the username and password and the register button.
Next there's the **Logout** page that logs the user out, disaplys a message that the user has been logged out and redirects you to the log in page.
**Profile** page is user's page and will have more features in the future.
Then we have our **Add Book** page where you will find a form for adding a new book to the website.

### Frameworks, libraries and other tools 
---

1. [Git](https://git-scm.com/)
2. [GitHub](https://github.com/)
3. [Materialize](https://materializecss.com/)
4. [Balsamiq](https://balsamiq.com/)
5. [Font Awesome](https://fontawesome.com/)
6. [Google Fonts](https://fonts.google.com/)
7. [Am I Responsive](http://ami.responsivedesign.is/)
8. [Picresize.com](https://picresize.com/)
9. [Javascript](https://www.javascript.com/)
10. [Python](https://www.python.org/)
11. [Flask](https://flask.palletsprojects.com/en/2.0.x/)
12. [MongoDB](https://www.mongodb.com/)
13. [Heroku](https://id.heroku.com/login)

### Wireframes 
---
1. Home
* [mobile](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/home-mobile.jpg)
* [tablet](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/home-tablet.jpg)
* [desktop](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/home-desktop.jpg)

2. Register
* [mobile](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/register-mobile.jpg)
* [tablet](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/register-tablet.jpg)
* [desktop](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/register-desktop.jpg)

4. Add Book
* [mobile](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/add-book-mobile.jpg)
* [tablet](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/add-book-tablet.jpg)
* [desktop](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/add-book-desktop.jpg)

3. Log In
* [mobile](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/login-mobile.jpg)
* [tablet](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/login-tablet.jpg)
* [desktop](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/wireframes/login-desktop.jpg)

### Testing
---

#### HTML Validation

I used [W3C Markup Validation Service](https://validator.w3.org/) to validate the HTML code. All the pages pass with some errors due to the use of jinja template.

Results here: [HTML](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/validation/html_check.jpg)
              
#### CSS Validation

I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate the CSS code. All the pages pass with 0 errors.

Result here: [CSS](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/validation/css-validator.jpg)

#### Performance

I used [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) to check performance of the website and it passes with scores between 90 and 100 on all pages on all 4 criterias Performance/ Accesibility/ Best Practices/ SEO.

Results here: [Home](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/lighthouse/books(home).jpg)
              [Add Book](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/lighthouse/add_book.jpg)
              [Edit Book](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/lighthouse/edit_book.jpg)
              [Login](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/lighthouse/login.jpg)
              [Register](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/lighthouse/register.jpg)

#### Performed tests on:

* HP Envy
* iPhone X
* Samsung Galaxy A52
* Samsung Galaxy Tab S6

##### Tests performed:

1. Page links and icons redirect the user to the corect place on both desktop and mobile versions.
2. The pages scrollable in mobile and tablet views.
3. Nav bar links are able to redirect users to the correct page and there are no broken links.
4. The "Add Book" page opens up correctly and it adds the data to the database.
5. In the case of an incorrect URL, the user is redirected to a 404 page wich will direct them back to the home page. 
6. The login page works correctly.
7. The register page works correctly.
8. All the buttons function correctly.

##### Results:

* All the devices passed all tests.

#### Browser compatibility

* *Google Chrome*: Website and user stories work as expected.
* *Safari*: Website and user stories work as expected.
* *Microsoft Edge*: Website and user stories work as expected.
* *Firefox*: Website and user stories work as expected.

#### Testing user stories
---
1. As a first time user I want to find out what the site is all about.
  <table>
        <tr>
            <th>Feature</th>
            <th>Action</th>
            <th>Expected Result</th>
            <th>Actual Result</th>
        </tr>
        <tr>
            <td>Home Page</td>
            <td>Scroll the page</td>
            <td>To find out information about the site</td>
            <td>Works as expected</td>
        </tr>
  </table> 
 
&nbsp;[Screenshot](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/user%20stories/user-story-1.jpg)


2. As a first time user I want to find books that help me in my search.
  <table>
        <tr>
            <th>Feature</th>
            <th>Action</th>
            <th>Expected Result</th>
            <th>Actual Result</th>
        </tr>
        <tr>
            <td>Search Bar</td>
            <td>type text in the search bar and click search</td>
            <td>display the books from libary that match the search</td>
            <td>Works as expected</td>
        </tr>
  </table>
  
&nbsp;[Screenshot](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/user%20stories/user-story-2.jpg)


  3. As a returning user, I want to be able to register and login.
  <table>
        <tr>
            <th>Feature</th>
            <th>Action</th>
            <th>Expected Result</th>
            <th>Actual Result</th>
        </tr>
        <tr>
            <td>Register and login page</td>
            <td>click on register or login type your username and pass</td>
            <td>register or login</td>
            <td>Works as expected</td>
        </tr>
  </table>
  
&nbsp;[Screenshot](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/user%20stories/user-story-3.jpg)


  4. As a returning user, I want to be able to add new books to the site and share my reason with the users.
  <table>
        <tr>
            <th>Feature</th>
            <th>Action</th>
            <th>Expected Result</th>
            <th>Actual Result</th>
        </tr>
        <tr>
            <td>Add Book</td>
            <td>Click on add book and fill in the form</td>
            <td>Upload new book in the database and dyplay it on the library</td>
            <td>Works as expected</td>
        </tr>
  </table>
  
&nbsp;[Screenshot](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/user%20stories/user-story-4.jpg)


  5. As a frequent user I want to be able to find new books , that I don't know about.
  <table>
        <tr>
            <th>Feature</th>
            <th>Action</th>
            <th>Expected Result</th>
            <th>Actual Result</th>
        </tr>
        <tr>
            <td>Library</td>
            <td>Scroll to the bottom of every page</td>
            <td>Find all the titles from the database</td>
            <td>Works as expected</td>
        </tr>
  </table>
  
&nbsp;[Screenshot](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/user%20stories/user-story-5jpg.jpg)

### Bugs
---

  1.  I was doing the register function and it wouldn't update the database , i found out that i have written the methon adn action attributes in child div instead of the form .

  2.  The content of the books was displayed in lower letters.
     * i have used a jinja expression that wrapped the library in 
       {% filter upper %}
    
       {% endfilter %}

  3. Photo in what is lifebook was not displaying correctly it was displaying on the left side of the div.
     * I have used the following css  
      display: flex;
      align-items: center;
      justify-content: center;    
     and now is displayed on the center.

### Features
---
The website has 4 pages and 11 features.

#### Current Features

##### Page 1: Home Page

The home page contains 7 sections:

1. A navbar with links to the rest of the pages and the Logo.
2. The "what is Life Book" section which displays information about the site.
3. A search bar which is used to search for certain books from the library.
4. The library which hosts all the books from the site.
5. A Edit Button.(only in user mode)
6. A Delete Button.(only in user mode)
7. The footer with the social media links on it.

The page is fully responsive on mobile and tablet.

###### Section 1 Navbar

It's simple and in contrast , contains the needed information.
![Navbar](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/navbar.jpg)

###### Section 2 What is Life Book

It's a paragraph with an image and text. Displays the information about the site.
![What is Life Book](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/what_is_lifebook.jpg)

###### Section 3 Search Bar

Simple and easy to use. helps you in seaching your favourite book
![Search Bar](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/search_bar.jpg)

###### Section 4 Library

Simple and easy to use accordion style.
![Library](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/Library.jpg)

###### Section 5 Edit Button

Edit button sends you to the edit page.
![Edit Book](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/edit_book.jpg)

###### Section 6 Delete Button

Delete button deletes the selected book.
![Delete Book](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/delete.jpg)

###### Section 7 Footer

A simple footer, designed in hte same color as the navbar, with links to the social media platforms
![Footer](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/Footer.jpg)

---
##### Page 2: Log In

The log in page contains 3 sections:

1. A navbar with links to the rest of the pages and a logo.
2. A form that requires your username and password.
3. The footer with the social media links on it.

The page is fully responsive on mobile and tablet.

###### Section 1 Navbar

It's simple and in contrast , contains the needed information..
![Navbar](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/navbar.jpg)

###### Section 2 Log In Form

The form with the req fields for logging in.
![Log In Form](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/login.jpg)

###### Section 3 Footer

A simple footer, designed in hte same color as the navbar, with links to the social media platforms
![Footer](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/Footer.jpg)

---
##### Page 3: Register

The log in page contains 3 sections:

1. A navbar with links to the rest of the pages and a logo.
2. A form that requires your username and password.
3. The footer with the social media links on it.

The page is fully responsive on mobile and tablet.

###### Section 1 Navbar

It's simple and in contrast , contains the needed information..
![Navbar](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/navbar.jpg)

###### Section 2 Register Form

The form with the req fields for registering.
![Register Form](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/register.jpg)

###### Section 3 Footer

A simple footer, designed in hte same color as the navbar, with links to the social media platforms
![Footer](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/Footer.jpg)

---
##### Page 3: Profile

The profile page contains 3 sections:

1. A navbar with links to the rest of the pages and a logo.
2. A simple div with your name.(future plans for adding more features)
3. The footer with the social media links on it.

The page is fully responsive on mobile and tablet.

###### Section 1 Navbar

It's simple and in contrast , contains the needed information.
![Navbar](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/navbar.jpg)

###### Section 2 Profile

A simple div with some custom css.
![Profile](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/profile.jpg)

###### Section 3 Footer

A simple footer, designed in hte same color as the navbar, with links to the social media platforms
![Footer](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/Footer.jpg)

---
##### Page 4: Add Book

The add book page contains 3 sections:

1. A navbar with links to the rest of the pages and a logo.
2. A form with required fields to upload a book.
3. The footer with the social media links on it.

The page is fully responsive on mobile and tablet.

###### Section 1 Navbar

It's simple and in contrast , contains the needed information.
![Navbar](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/navbar.jpg)

###### Section 2 Add Book

The add book form
![Add Book](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/add_book_form.jpg)

###### Section 3 Footer

A simple footer, designed in hte same color as the navbar, with links to the social media platforms
![Footer](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/features/Footer.jpg)

---

### Languages Used
---

* Html5
* Css3
* JavaScript
* Python
* Jinja Template

### Deployment
---

#### GitHub Pages

GitHub was used to deploy this website. To do the same...

1. Log into your GitHub account and find the [repository](https://github.com/robertdavid1205/MS3-LifeBook). 
2. Click on 'Settings' in the repository. 
3. Click 'Pages' in the left-hand menu once you're in Settings. 
4. Click 'Source'.
5. Click the dropdown menu which says 'None', then select 'Master Branch'.
6. Wait for page to refresh automatically. 
7. Under GitHub pages you can now find a link to the published live website. 

#### Heroku

To deploy the project to a live website the below steps were followed:

1. Go to Heroku.com and log in (if not registered you must create an account first).
2. Make sure your project has a file specifying which applications are needed to run your site, use the below code to automatically generate this
> pip3 freeze --local > requirements.txt
3. Also make sure you have a Procfile which tells Heroku which file runs the app (in our case it is app.py), use the below code to generate this. The Procfile may add a blank line which can cause issues so check and remove this if needed.
>  echo web: python app.py > Procfile (note that this has no extension)
4. In Heroku click on create a new app. The Heroku app name must be unique and generally uses - instead of spaces and all lowercase letters. Then select the region closest to you and create app.
5. To connect our app to Heroku we can setup an automatic deployment from our GitHub repo. Within your Heroku app go to the deployment tab and click on GitHub for the deployment method. Make sure your GitHub profile is displayed below and enter the repository name and search. Make sure your repo is displayed and click connect to this app.
6. Before enabling automatic deployment, we still have a couple more steps.
7. Click on the settings tab in your app and click on reveal config vars, you can then enter the information that is in the hidden env.py file. Typically, you need to include IP, PORT, SECRET_KEY, MONGO_URI and MONGO_DBNAME.
8. Git add, commit and push the changes in your Gitpod (adding the requirements and Procfile files) as epxplained in the above section.
9. Go back to your Heroku app and the deployment tab - now click to enable automatic deployment and then click deploy branch.
10. Heroku will now receive the code from GitHub and build your app, once it is complete you should see that your app has been successfully deployed.
11. Now the deployed site is available and should automatically update whenever changes are pushed to GitHub from Gitpod.

### Credits
---

#### Code
* *Materialize* - code for Navbar / Footer / Forms
* *Code Institute* - python code from TravelTimN  - lesson  Flask Rebuild 2020


#### Media
* [Pexels]https://www.pexels.com/

### Aknowledgements

* To Mo Shami, my mentor, for understanding me, for the feedback and support.
* To Code Institute Slack Community for advice and guidance. 