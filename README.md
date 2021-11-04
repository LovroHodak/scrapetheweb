https://www.youtube.com/watch?v=76d2yOMXmag&t=329s

1:00:54
1:41:56

* [x] Scrape a Table of data
    * Wikipedia
    * [x] Cheerio
    * [] jsdom
* [ ] Be nice when scraping
    * Robots.txt
        * sitemap.txt
* [ ] Sites that use JS
    * puppeteer
    * playwright
    * [ ] Undocumented APIs...    


1. TIPS

* ADD view-source:
(view-source:https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States)
* Strg + f (find)

* how to search css SELECTORS
table class='wikitable sortable plainrowheaders jquery-tablesorter'
console = $('table.wikitable.sortable.plainrowheaders.jquery-tablesorter')

* how to search HTML tags + values
HTML selector = caption
console = $('caption:contains("States of the United States of America")')

* get parent element
console = $('caption:contains("States of the United States of America")')[0].parentElement


2. NPM
* npm init -y
* npm i axios
* npm i cheerio
* git init
* npm i express
* npm i nodemon
* npx nodemon index.js

VPRASANJA

Yo Klemen! :)

Mam en app k iz wikipedie pobere drzave in pol jih izvozm v front kjer jih displayam v select-tagu. So far so good. In pol hocem dodat eventListener(click) naj mi v innerHTML izpise dodatne info v zvezi z to drzavo (app.js lines 12-15).
In men se zdi da mi tega spolh ne fire-a. Ne znam sploh vec govort :) tistega console.log('am i workin') ni nikjer.
Delam po enem tutorialu in tipu dela vse. Le meni ne.

https://www.youtube.com/watch?v=76d2yOMXmag&t=6116s 
1:44:32 snap kode, zatem pokaze se browser

