# dhis2-practical-interview

### Design Decisions:

1. **Project Structure:**
   - Project was organized using Angular best practices. Separate components, services, and modules into their respective directories.

2. **Angular Services:**
   - Services was created to handle API requests and responses. Angular services can be injected into components to fetch data from APIs.
   - Use the Angular HttpClient module for making HTTP requests.

3. **Observable Pattern:**
   - Leverage the Observable pattern for handling asynchronous operations, especially for API requests. This helps in managing data streams efficiently.

4. **Error Handling:**
   - Implement proper error handling for API requests. Handle HTTP errors gracefully and provide meaningful error messages to users.

5. **User Experience (UX):**
   - Design responsive and intuitive user interfaces. Angular's built-in directives and pipes can help create a dynamic and engaging user experience.

6. **Routing:**
   - It is a single page app, so no complex routing.

7. **State Management:**
   - Consider using state management libraries like Angular services for managing the application state, especially if your application grows in complexity.

### API Requests and Responses:

1. **Angular Services:**
   - Create dedicated services for interacting with APIs. For example, a `WeatherService` for fetching weather data.

2. **HTTP Requests:**
   - Use Angular's HttpClient to make GET, POST, PUT, and DELETE requests to the API endpoints.
   - Handle request parameters, headers, and response transformations within the service.

### Error Handling:

1. **HTTP Interceptors:**
   - Use Angular HTTP Interceptors to intercept and handle HTTP requests and responses globally.
   - Implement error handling logic in the interceptor to catch and handle errors.

### User Experience:

1. **Responsive Design:**
   - Utilize responsive design principles to ensure your application works well on various devices and screen sizes.
   - Leverage Angular Material or other UI component libraries for consistent and aesthetically pleasing UI components.

2. **Feedback and Loading Indicators:**
   - Provide loading indicators to inform users about ongoing background processes, especially during API requests.
   - Display meaningful messages for successful operations or errors.
To execute an Angular application, you need to follow these general steps:

### App execution:

1. **Clone the Repository:**
   - Clone the GitHub repository to your local machine. Use the following command, replacing `<repository-url>` with the actual URL of your GitHub repository.

     ```bash
     git clone <repository-url>
     ```

2. **Navigate to the Project Directory:**
   - Change into the project directory using the `cd` command.

     ```bash
     cd dhis2-practical-interview
     ```

3. **Install Dependencies:**
   - Run the following command to install the project dependencies using npm.

     ```bash
     npm install
     ```

4. **Build the Application:**
   - Build the Angular application using the following command.

     ```bash
     ng build
     ```

   This command will create a `dist/` directory containing the compiled application.

5. **Serve the Application Locally:**
   - Run the following command to serve the application locally using Angular CLI.

     ```bash
     ng serve
     ```

   This will start a development server, and you can access the application in your web browser at `http://localhost:4200/`.

6. **Access the Application:**
   - Open your web browser and navigate to `http://localhost:4200/` to view and interact with the application.

These steps assume that you have Node.js and npm installed on your machine. If not, you can download and install them from the official Node.js website: [Node.js Downloads](https://nodejs.org/en/download/).

Additionally, make sure that you have the Angular CLI installed globally. You can install it using the following command:

```bash
npm install -g @angular/cli
```