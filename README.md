# Re-cap demo Jan' 23

## Available routes
- GET /users
- POST /users -- user object
- DELETE /users/{id}
- PUT /users
- POST /login -- username and password

## Dashboard
Display All Users

## Sign up
A sign up page is needed with 3 fields, username, password and email. This should post to the /users route to create a new user in the DB

## Build Login page
Our client requires a page where they can login to the application. This should POST to the /login route, and if successful redirect to the dashboard. If unsuccessful, we should return the message sent by the API. We should only see the Navbar if we are logged in.

## Build router
The client needs to be able to navigate around the site, they should be able to access the login and sign up pages first.. then once logged in, they should be able to access the navbar and dashboard.

## Build Navbar
The client will need to be able to navigate around the site once they are logged in, this component should not be visible when they are logged out.

## Navbar Routes
Our Navbar currently conatins empty links, we should create placeholder components for each of these, and add them into the App router. When the user is logged in, they should see a list of the other users (useEffect).

## Update and delete
Our client would like us to add functionality to update and delete users from the list. 
