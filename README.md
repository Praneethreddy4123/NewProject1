# Car Dealership Inventory Web App

A full-stack web application for a used-car dealership to showcase inventory online and manage vehicles internally.

## Quick Start

### Prerequisites
- Java 17+
- Node.js 18+
- Maven 3.8+

### Local Development

#### Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
Backend runs at `http://localhost:8080`

#### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root of the project:

```
# Backend (Spring Boot)
DATABASE_CONNECTION_STRING=your-database-connection-string
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
JWT_SECRET=your-jwt-secret-key

# Frontend
VITE_API_BASE_URL=http://localhost:8080
```

## Architecture

```
Frontend (React + TypeScript, Vite)
    ↓ REST API + JWT
Backend (Spring Boot 3.x, Maven)
    ↓
Database (Azure Cosmos DB / MongoDB Atlas)
Image Storage (Cloudinary)
```

## Tech Stack

- **Backend:** Java 17, Spring Boot 3.x, Spring Security, Spring Data, Maven
- **Frontend:** React 18, TypeScript, Vite, Axios
- **Database:** Azure Cosmos DB (free tier) or MongoDB Atlas
- **Images:** Cloudinary (free tier)
- **Hosting:** Render.com (backend), GitHub Pages (frontend)
- **Testing:** JUnit 5, Mockito, Jest, React Testing Library, Playwright

## Features (MVP)

### Public
- Browse inventory: grid/list of available cars with photos, specs, and price
- Filter & search: by make, model, price range, year, mileage, body type
- Car detail page: full photos, complete specifications, dealer contact info

### Admin
- Login with JWT authentication
- Dashboard to create, edit, delete vehicles
- Photo upload and management (via Cloudinary)
- Mark cars as available/pending/sold

## API Documentation

Once the backend is running, visit:
- Swagger UI: `http://localhost:8080/swagger-ui.html`
- OpenAPI JSON: `http://localhost:8080/v3/docs`

## Testing

### Backend
```bash
cd backend
mvn test
```

### Frontend
```bash
cd frontend
npm test
```

### End-to-End
```bash
cd frontend
npm run test:e2e
```

## Deployment

- **Backend:** Deployed to Render.com
- **Frontend:** Deployed to GitHub Pages
- Production URLs: (coming soon)


## Assumptions & Decisions

*To be updated as development progresses*

## License

MIT
