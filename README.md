# The Party Place
   A Social Events Management web app build with React(Vite) Application, where used React Router DOM & Firebase for Authentication.
## Project features
-   User can visit for : Weddings, Birthday Parties, Anniversaries,Engagement Parties, Retirement Parties, Corporate Event Solutions with this Web app.

-  Home page have a `Navbar`, `Slider`, `Services`, and `Footer`. Navbar have `Active Route`.

- The Services section have `6 event services`. Each service have a relevant name, image, price, short description and `View Details` button.

- On clicking `View Details` button, the user will be redirected to the `Service Detail` page. That display detailed information of the service.

- The `service detail` page is a private/protected route. Only Logged-in user can access detail information. Without Sign in any user clicked to View Details the private route redirects to the login page. after Sign in user auto redirect to `service detail`.

 - This web app implemented `Email and password based Authentication`. User can the Registration and the login. Users can toggle between Login and Registration view.

 - On the Registration page, display errors when:

        The password
        is less than 6 characters
        don't have a capital letter
        don't have a special character

- On the Login page, display errors when:

        - password doesn't match
        - email doesn't match


- Also, implemented  `one extra login` which is  `Google`.

- After `Successful logged` in user show's a `toast`.

- Once logged in, the user name, profile picture and the logout button appear on the header.

- If the user clicks on the `Logout` button on `Navbar`, log him/her out.

- Added two more routes `Event Equipments Rental` & `Brand Activation`. These two routes will be private.

- `404 page` implemented. 

## Live Site Link
- [Click Here To Open Live Site](https://party-place-mahmud.netlify.app)

## Screenshots

![App Screenshot](https://i.ibb.co/BB0Yccs/party-place.png)