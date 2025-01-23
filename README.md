# DailyNews

DailyNews is an app that provides the top five latest news from the main pages of El País and El Mundo, two popular Spanish newspapers. Besides providing the latest news, it offers full CRUD functionality to create, read, update, and delete custom news items.

Its API is built with Node.js, TypeScript, MongoDB, Docker, and Jest, and it uses Cheerio to scrape the news from the newspapers' main pages.
The frontend is built with React, TypeScript, and Vite, and it uses Tailwind CSS for styling.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [DailyNews API Diagram](#dailyNews-api-diagram)

## Technologies Used

### Backend

- NodeJs
- TypeScript
- Express
- Moongose
- Jest
- SuperTest (for integration/API testing)
- Cheerio (in order to scrap easier)
- Eslint & Prettier (for code formatting)

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint & Prettier (for code formatting)
- Jest
- React Testing Library

## Installation and Setup

### Prerequisites

- Node.js (latest LTS version)
- Docker and Docker Compose
- MongoDB (in case you want to run it locally without Docker)

### Running the Project

1. Clone the Repository.

```bash
git clone git@github.com:miikorz/DailyNews.git
cd dailynews
```

2. Run it with Docker: Build and start the application and MongoDB container using Docker Compose.

```bash
docker-compose up --build
```

The app will be available at http://localhost:3000 and API at http://localhost:3001 in case you want to do any request.

3. Run Tests: To run tests with Jest, first choose either frontend or backend folder and run the following command:

```bash
npm run test
```

## API Endpoints

1. **Create a new**

- **POST** `/feed`
- **Request Body**:

```json
{
  "title": "Sample News",
  "description": "Detailed description of the news",
  "author": "Author Name",
  "link": "https://example.com",
  "portrait": "https://example.com/image.jpg",
  "newsletter": "El Pais"
}
```

2. **Get new by ID**

- **GET** `/feed/:id`
- **Response**: Returns a JSON object of the news item with the specified ID.

3. **Update new by ID**

- **PUT** `/feed/:id`
- **Request Body**: Only the fields to be updated

```json
{
  "title": "Sample News",
  "description": "Detailed description of the news",
  "author": "Author Name",
  "link": "https://example.com",
  "portrait": "https://example.com/image.jpg",
  "newsletter": "El Pais"
}
```

4. **Delete new by ID**

- **DELETE** `/feed/:id`

5. **List of news**

- **GET** `/feed`
  Fetches the top 5 latest news articles from El País and El Mundo main pages (and the manually ones added) using web scraping and return them along with the manually stored news.

6. **Seach news by title**

- **POST** `/feed/search`
- **Request Body**:

```json
{
  "searchValue": "News Title"
}
```

## Future Improvements

In the future, the following improvements could be implemented:

1.  **Authentication and Authorization**:
    Add JWT-based authentication to restrict access to certain endpoints, e.g., allow only authorized users to create, update, or delete news.

2.  **Cache Management**:
    Introduce caching to minimize the frequency of web scraping from external sites and improve response times for frequently accessed endpoints.

3.  **Error Handling and Logging**:
    Implement a global error handler and structured logging for better troubleshooting and monitoring.

4.  **Rate Limiting and Throttling**:
    Limit the number of requests from each user to avoid overloading the scraping functionality and external site requests.

5.  **Data Validation and Sanitization**:
    Use a library like Joi or class-validator to ensure that data input conforms to the expected schema and is secure.

6.  **CI/CD Pipeline**:
    Set up a CI/CD pipeline for automated testing, linting, and deployment of the application on code pushes.

## DailyNews API Diagram

![alt text](https://github.com/miikorz/DailyTrends/blob/main/diagram-dailytrends.png?raw=true)

## Why I used this tech stack and design pattern?

I chose to use Node.js, TypeScript, and MongoDB for the backend because of their flexibility, scalability, and ease of use. MongoDB is a NoSQL database that is well-suited for storing unstructured data like news articles and provides a flexible schema that can easily accommodate changes in data structure.

Regarding the frontend stack, I chose React, TypeScript, and Vite because of their performance, developer experience, and ease of use. Vite is a modern build tool that offers fast build times and hot module reloading, making it ideal for rapid development. All of this styled with Tailwind CSS, which is a utility-first CSS framework that allows for rapid prototyping and easy customization.

Since I wanted to create a light frontend I tried to avoid using Redux or other state management libraries, and instead I used React's built-in state management (context API) and hooks to manage the application's state (and same for assets such as icons or components, where I tried to avoid using component/materials libraries).

I used Jest and React Testing Library for testing because they are widely used testing libraries that provide a simple and intuitive API for writing unit and integration tests. I also used SuperTest for API testing because it allows me to make HTTP requests to the API and assert the response data in a clean and concise way.

## Some news on the list have no images, why is that?

Some news articles on the list may not have images because the web scraping logic is designed to extract the image from the article's content, and some articles may not have images or may only have images once you navigate to the article detail therefore I couldn't extract it unless I navigate into the new detail and extract the image which would impact in the scrapping performance.

## Why did I use Docker for the project?

I used Docker to containerize the application and its dependencies, making it easy to deploy and run the application on any platform without worrying about compatibility issues. Docker also allows me to define the application's environment in a single file (Dockerfile) and manage the application's lifecycle using Docker Compose, which simplifies the development and deployment process which is perfect for applications spplited in two different parts (backend and frontend).

## Why did I use Domain Driven Design for the API?

It allows me to model the domain in a way that is closely aligned with the requirements of the application. By using the common DDD layers, application (as orchestration), domain (to define my entities) and infrastructure (to locate my external providers) that represent the core concepts of the entire application, I can create a more maintainable and scalable codebase that is easier to understand and reason about, besides, it also allows me to isolate code pieces easily and therefore have a better testing logic.

## How I would have changed the database design if we had more entities?

If we had more entities like authors, newsletters, and categories, I would have created separate collections for each entity and established relationships between them using MongoDB's document references or embedded documents. For example, each news item could have a reference to an author document, a newsletter document, and a category document, allowing us to query and filter news items based on these attributes.
But in this case, I decided to keep it simple and store all the news items in a single collection to maximize performance and minimize complexity.

## How I would have implemented the search functionality if we had more time?

If I had more time, I would have implemented a more advanced search functionality that supports full-text search, fuzzy search, and pagination. I would have used MongoDB's text search feature to enable full-text search on the news items' title and description fields and implemented pagination to limit the number of results returned per page. I would have also implemented fuzzy search using a library like Fuse.js to allow users to search for news items with typos or partial matches.
