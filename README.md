## Mini Backend for Testing

Simple backend built with Express to test HTTP requests (e.g. from an ESP32 or Postman).

## Setup

### 1. Clone the repository

```bash
git clone <REPO_URL>
```

### 2. Go into the project folder

```bash
cd myapp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the server

```bash
node app.js
```

Server will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description     |
| ------ | ------------- | --------------- |
| GET    | /api/data     | Get all data    |
| POST   | /api/data     | Create new data |
| PATCH  | /api/data/:id | Update data     |
| DELETE | /api/data/:id | Delete data     |


