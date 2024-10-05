# Text File API

This project is a simple Node.js API that allows you to create text files containing the current timestamp and retrieve a list of all text files stored in a specific directory.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create a Text File](#create-a-text-file)
  - [List All Text Files](#list-all-text-files)
- [Usage](#usage)
- [Contributing](#contributing)

## API Endpoints

## Create a Text File

- Endpoint: GET /create-file
- Description: Creates a text file with the current timestamp.
- Response: Returns a message indicating the file has been created.

### Example Request:

```
GET http://localhost:3000/create-file
```

### Example Response:

```
File created: 2023-10-06T12-34-56.789Z.txt
```

## List All Text Files

- Endpoint: GET /list-files
- Description: Retrieves a list of all text files in the specified folder.
- Response: Returns a JSON array of text file names.

### Example Request:

```
GET http://localhost:3000/list-files
```

### Example Response:

```
{
  "files": [
    "2023-10-06T12-34-56.789Z.txt",
    "2023-10-06T12-35-00.123Z.txt"
  ]
}
```

## Usage

After starting the server, you can use tools like Postman or cURL to interact with the API endpoints.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request.
