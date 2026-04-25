# Full Stack Project Reflection

---

## Architecture

### Compare and contrast the types of frontend development used in this project, including Express HTML, JavaScript, and the single-page application.

Express HTML rendered static pages server-side, which was simple but meant every page reload hit the server. JavaScript added interactivity on top of that. The single-page application (SPA) on the admin side was a different experience since it loads once and dynamically updates the document object model (DOM) without full page refreshes, making it much faster for the user. The SPA worked better for the admin dashboard where you're constantly manipulating data.

### Why did the backend use a NoSQL MongoDB database?

Trip data doesn't fit neatly into rigid table structures. Not only structured query language (NoSQL) lets you store flexible JSON-like documents, scale easily, and change your schema without breaking everything. It paired naturally with Node.js and Mongoose made modeling the data straightforward.

---

## Functionality

### How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JavaScript object notation (JSON) is just a data format, not a programming language. JavaScript is a full language that can have functions, logic, and behavior. JSON ties frontend and backend together by being the universal format the application programming interface (API) sends and receives. When the travel page fetches trips, the backend returns JSON and the frontend parses it to render the user interface (UI).

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable UI components.

Refactoring the Handlebars templates into partials like the header and footer was a big win since any change only needed to happen in one place instead of every single view file. Reusable components reduce the chance of inconsistencies and make the codebase much easier to maintain.

---

## Testing

### What is your understanding of methods, endpoints, and security in a full stack application?

Endpoints are the uniform resource locators (URLs) the API exposes like `GET /api/trips` or `DELETE /api/trips/:tripCode`. Methods (GET, POST, PUT, DELETE) define what action you're taking. Testing them means verifying the right status codes come back and the data looks correct. Adding authentication makes testing harder because you have to include valid tokens in requests, otherwise protected routes return 401s.

---

## Reflection

### How has this course helped you reach your professional goals and what skills have you learned or developed?

This course gave me real experience building something end-to-end rather than just isolated pieces. Learning how representational state transfer (REST) APIs connect a database to a frontend, managing routes, and working with Mongoose are genuinely marketable skills. Full stack development is one of the most in-demand skill sets right now and having a working project to show employers is more valuable than just theory.
