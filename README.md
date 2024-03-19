# Scheduler

The Scheduling Application Backend APIs aim to provide a set of endpoints for managing calendars and facilitating the booking of meetings or appointments based on users' availability. It also provides Features like modifying existing meeting and Deleting as per user requirement 


## Prerequisites

- Node.js installed on your machine.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/username/your-repository.git

2. In .env replace the credentials as per Fields 

Fields Need to Change are: - 

AUTH_TOKEN = 

YOUR_CLIENT_ID = 

CLIENT_SECRETs = 

REDIRECT_URIs = "http://localhost:3000/authenticated"   //redirect url should remain same 

calendarId = 

2.
    ```bash
   npm init

3.
    ```bash
   npm start

## API Endpoints : - 

localhost:3000/createevent

localhost:3000/bookslots

localhost:3000/availableslots

localhost:3000/delete

localhost:3000/auth




