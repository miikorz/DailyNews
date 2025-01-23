# DailyNews

DailyNews is an app that provides the top five latest news from the main pages of El País and El Mundo, two popular Spanish newspapers. Besides providing the latest news, it offers full CRUD functionality to create, read, update, and delete custom news items.

Its API is built with Node.js, TypeScript, MongoDB, Docker, and Jest, and it uses Cheerio to scrape the news from the newspapers' main pages.
The frontend is built with React, TypeScript, and Vite, and it uses Tailwind CSS for styling.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [DailyTrends Service Diagram](#dailyTrends-service-diagram)

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

<!-- TODO: explain how BD would have change if we had more entities, like separated feed authors, newsletters... in different tables, we would have relation between tables etc -->
<!-- TODO: explain why some news on list have no images -->

```

```
