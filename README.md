# shit-city-image-upload

Image upload service for the Threethink shit-city Project

## Getting started

Install npm packages and start the server.

### Prerequisites

`node`

### Installing

Install required packages

`npm install` or `yarn install`

Create .env file with environment variables or export them locally.

`touch .env`

####Possible Settings:

`PORT` specifies the Port the server listens to

`IMAGE_SIZE` specifies the maximum image filesize in bytes. (1024 * 1024 = 1mb)

####Example for .env File

```
PORT=3001
IMAGE_SIZE=2097152
```


## Running for development

`npm run start_dev` or `yarn start_dev`

This will start the node server with nodemon on Port 3000 if no port is provided in .env file or in the env variables.

## Running for production

`npm start`

This will start the node server on Port 3000 if no port is provided in .env file or in the env variables.

## Usage

### Post new image
url: `POST http://localhost:3000/turds`

body:
```
turdImage: ${IMAGE}
```

headers:
```
	"content-type": "multipart/form-data",
	"Cache-Control": "no-cache"
```

Curl snippet:

```
curl -X POST \
  http://localhost:3000/turds/ \
  -H 'Cache-Control: no-cache' \
  -H 'content-type: multipart/form-data\
  -F turdImage=@${IMAGE}
```

### Delete Image

url: `POST http://localhost:3000/turds/${IMAGE_NAME}`

Curl snippet:

```
curl -X DELETE \
  http://localhost:3000/turds/${IMAGE_NAME} \
```