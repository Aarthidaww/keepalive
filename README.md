# Keep Server Alive [ONRENDER]

## Overview

Free services deployed on Render.com are spun down after periods of inactivity. The implemented solution is to ping the endpoint at regular intervals.

## Installation

To install and execute the service locally, follow these instructions:

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/KunalRajput-git/keep-server-alive.git
    ```

2. Navigate to the project directory:

    ```
    cd keep-server-alive
    ```

3. Install dependencies using npm:

    ```
    npm install
    ```
    
4. Start the server:

    ```
    npm start
    ```

## Usage & Configuration

- After cloning it locally, add your endpoints inside constants.js.
- Deploy it onrender.
- Add the deployed endpoint in constants.js to enable self-pinging and keep the service alive.

## Dependencies

- **Node.js**: Backend runtime environment.
- **Axios**: Promise-based HTTP client for making HTTP requests.
- **Nodecron**: Library for scheduling tasks based on cron expressions.


## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or support, please reach out to kunalrajput-git.
