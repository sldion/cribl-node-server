
# Overview

This a node.js application writen with the express.js framework. There is a single REST endpoint called {host}/api/logs, which is designed to take at least a filename as an argument and then it will grab the text from that file as a json array from latest entry to some limit ( default 10 ).

A filter can also be applied as a parameter and the lines will be filtered such that they contain that exact matching string.

#  Requirements

1. node.js =20.*.*
2. npm=10.*.*
2. *nix OS
4. Docker


# Development 
## Running the Application Locally 

Install the packages by using:
```bash
npm install --include-dev
```

You can run the dev server by running:

```bash
npm run start-dev
```

This will run it in a live mode where code changes will get hot reloaded. 

You can build with the command `npm run build`


### The UI
A swagger UI is available when running locally at http://localhost:3000/api-docs


## Running the Tests 

The tests are run via Docker through the Dockerfile.test file. This allows the tests to run in a controlled fresh environment

Run the tests with:

```sh
docker build -t cribl-image-test  -f Dockerfile.test . && docker run cribl-image-test:latest npm test
```

