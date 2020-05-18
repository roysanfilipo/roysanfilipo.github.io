Welcome to the RPDR-APP!

Link to the webpage: https://roysanfilipo.github.io/

This is a browser based one question quiz that generates one of the drag queens from the VH1 series RuPaul's Drag Race.  

When the user opens the page, there is a message from RuPaul asking the user who their queen is. You need to scroll through the carousel of RuPaul images in order to see her entire message.

Below the carousel of RuPaul images, there is a form that includes an input bar  that reads "Last Two Digits of Birth Year + Birth Month (#) + Birth Day (#) - letters in your full name (#)" and a submit button that reads "Who IS she?"

When the user inputs the number (which needs to be between 0 and 139 - the form input bar only allows for this), a drag queen's information is pulled from the RuPaul's Drag Race API (https://drag-race-api.readme.io/docs) and the drag queen's name, image, and quote are pulled from the API database and appear on the website.

The flaw in the site is that if someone was born in January in the year 2000, they will likely generate a negative number, which cannot be submitted with the input form bar. I am still working on a great question that will fix this scenario!

Sources for RuPaul Images:
Image 1 (VH1): https://www.biography.com/news/how-rupaul-brought-drag-to-mainstream-culture
Image 2 (?): https://rupaulsdragrace.fandom.com/wiki/RuPaul
Image 3 (Albert Sanchez): https://www.thetimes.co.uk/article/the-interview-rupaul-on-meghan-markle-the-trans-debate-and-drag-race-uk-npn7vm0t9
Image 4 (Mathu Anderson): https://www.npr.org/2012/02/02/146283441/rupaul-half-a-century-of-pure-glamour
