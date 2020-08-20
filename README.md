# career-ninja-assignment

Full Stack Assignment:

Let me know the task estimate you require to finish this assignment before starting with the assignment.

Game of Thrones Battle Web App
Backend

Use the CSV file attached to load the data in MongoDB(mLab/MongoAtlas).

Use battle data to build an API Server using Node.JS/Express which exposes following 4 endpoints:
/list
returns list(array) of all the places where the battle has taken place.
E.g. ['Riverrun', 'Tyrell',....]
/count
returns the total number of battles occurred.
/search
/search?king=Robb Stark

- return list of battles where 'attacker_king' or 'defender_king' was 'Robb Stark'
  Should also work for multiple queries
  /search?king=Robb Stark&location=Riverrun&type=siege

Frontend (React/Redux/HTML/CSS)

Create UI to consume Battle API

Create a Search Bar with autocomplete. When searched for a specific battle(Location) the data should be loaded in similar kind of template with all the details available in the Database. Create responsive design which works on both mobile as well as Desktop. Assume Suitable Data wherever required.

Post-Completion of Task

1. Upload Frontend & Backend to Github Repository and share the URL
2. Host the app on Heroku/ AWS.
3. Share Screenshots of UI with mobile as well as Desktop view.
