![Mockup of website](https://github.com/robertdavid1205/MS3-LifeBook/blob/main/static/docs/mockup/mock-up.jpg)

[View the deployed website](https://robertdavid120)


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
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performed-tests-on)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
8. [Features](#features)
9. [Languages](#languages-used)
10. [Deployment](#deployment)
11. [Credits](#credits)
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

1   bugs found
 1. I was doing the register function and it wouldn't update the database , i found out that i have written the methon adn action attributes in child div instead of the form .
 2. the contant of the books was displayed in lower letters ..... i have used a jinja expression that wrapped the library in 
    {% filter upper %}
    
    {% endfilter %}
 3. photo in what is lifebook was not displaying correctly it was displaying on the left side of the div..... i have used  display: flex;
    align-items: center;
    justify-content: center;    and now is displayed on the center.