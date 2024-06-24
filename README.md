# Chuck Norris facts generator

Deployed here: https://factchaking.netlify.app/

I'm going to make a Chuck Norris facts generator app.  I will use [this](https://api.chucknorris.io/) API for this:
The application will have an adaptive layout and a minimalistic but stylish design.
Also there is a requirement to provide company brand/design that will be used. The visual of other companies will not be used, I want to make my own.
Here is the functionality of the site:

Must-haves:
1. A random joke will be displayed on the main page (using this [link](https://api.chucknorris.io/jokes/random) in API: ).
2. The user will be able to select a category (using this [link](https://api.chucknorris.io/jokes/random?category={category}) in API)
3. By pressing the R key, the user will see a new joke
4. The user will be able to search for jokes by keywords (using this [link](https://api.chucknorris.io/jokes/search?query={query}) in API)
5. The user will be able to add their favorite jokes to favorites. This will be implemented through the React functionality

Nice-to-haves:
1. The user will be able to subscribe. Every week, a random joke will be sent to his email.
2. Authentication will be implemented on the site.
3. Jokes added to favorites will be added to the database via the back-end
