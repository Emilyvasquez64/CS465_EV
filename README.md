# 8-1 Journal: Portfolio Submission

---

## Architecture

### Compare and contrast the types of frontend development used in this project, including Express HTML, JavaScript, and the single-page application.

This project used three different frontend approaches, each serving a different purpose. Express HTML with Handlebars templates handled server-side rendering, where the server built and delivered a complete HTML page for every route including travel, news, login, signup, and admin. This kept the structure straightforward but meant any navigation or form submission required the server to respond with an entirely new page.

JavaScript added a small layer of client-side behavior on top of that. An example of this is in the admin form, where changing the number of nights automatically updated the number of days in real time without any server involvement.

The single-page application (SPA) was a separate Angular frontend running on port 4200 that connected to the same REST API. Unlike the Handlebars pages, the SPA communicated with the backend by fetching data through the API and updating the document object model (DOM) directly, which is why the backend was configured with cross-origin resource sharing (CORS) headers specifically allowing requests from that port.

### Why did the backend use a NoSQL MongoDB database?

Each trip entry stores a mix of fields including a trip code, name, length, start date, resort, price, image, and description. A traditional structured query language (SQL) database would require all of that to be mapped into fixed columns across rigid tables. MongoDB is a NoSQL database, so instead it stores each trip as a document with a structure similar to JSON, which matched closely with how the data was already being handled throughout the rest of the application. Mongoose was used on top of MongoDB to define the trip schema and handle all database interactions cleanly.

---

## Functionality

### How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JavaScript object notation (JSON) is a lightweight data format used purely to structure and transfer information. JavaScript, on the other hand, is a full programming language capable of handling logic, functions, and behavior. The trips data in this project started as a JSON file that was seeded into the database, and that same JSON structure carried through the entire stack.

When the travel page loaded, the Handlebars controller fetched trip data from the API, which returned it as JSON. The controller then passed that data into the template to render the page. The Angular SPA did the same thing, pulling JSON from the API and using it to build its own interface. JSON was the shared language both frontends used to communicate with the backend.

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable UI components.

One clear example of refactoring was separating the header and footer into Handlebars partials. Every page in the application shares the same navigation and footer, so rather than duplicating that markup across every view file, it was pulled into its own partial that gets included automatically. Any update to the navigation now only needs to happen in one place and reflects across the entire site instantly.

Reusable components like this reduce the risk of inconsistencies, cut down on redundant code, and make the project far easier to maintain as it grows.

---

## Testing

### What is your understanding of methods, endpoints, and security in a full stack application?

The API in this project exposed five endpoints for interacting with trip data. `GET /api/trips` returned all trips, `GET /api/trips/:tripCode` returned a single trip by its code, `POST /api/trips` created a new trip, `PUT /api/trips/:tripCode` updated an existing one, and `DELETE /api/trips/:tripCode` removed it. Each HTTP method tells the server what action to take, and testing them involves verifying that the correct status codes come back along with the expected data.

Security adds complexity to that process. Protected routes require a valid authentication token in the request header. Without one the server returns a 401 unauthorized response, so any test hitting a protected route has to handle authentication first before it can reach the actual functionality being tested.

---

## Reflection

### How has this course helped you reach your professional goals and what skills have you learned or developed?

This project helped put all the concepts together and into perspective. Setting up MongoDB and Mongoose showed how data gets stored and retrieved in a real project, from defining the trip schema with fields like code, name, start date, and price, to seeding the database and querying it through the API. Building out the REST API in Node.js and Express made it clear how the frontend and backend communicate and why the structure of those endpoints matters. Having five distinct routes handling different operations on the same trip data made it easy to see how a well organized API keeps things from getting messy as a project grows.
 
Using Handlebars for server-side rendering was a good introduction to templating, and breaking the layout into partials like the header and footer showed how small decisions early on can save a lot of repeated work later. Then connecting a separate Angular frontend to the same API brought it all full circle. The backend did not need to change at all, the Angular app just consumed the same endpoints the Handlebars views were already using, which made it clear how one backend can serve completely different clients at the same time. Going through that process start to finish, and actually seeing the data flow from the database through the API and into the browser, made everything stick in a way that studying individual pieces never could.
 
