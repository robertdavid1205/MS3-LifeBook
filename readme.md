1   bugs found
 1. I was doing the register function and it wouldn't update the database , i found out that i have written the methon adn action attributes in child div instead of the form .
 2. the contant of the books was displayed in lower letters ..... i have used a jinja expression that wrapped the library in 
    {% filter upper %}
    
    {% endfilter %}
 3. photo in what is lifebook was not displaying correctly it was displaying on the left side of the div..... i have used  display: flex;
    align-items: center;
    justify-content: center;    and now is displayed on the center.