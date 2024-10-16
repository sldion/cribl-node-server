
This a node.js application writen with the express.js framework. It is 

#  Requirements

1. node.js =20.*.*
2. npm=10.*.*
2. *nix OS
4. Docker


# Development 
## Running the Application Locally 

Install the packages by using:
`bash
npm install --include-dev
`

You can run the dev server by running:

```shell
npm run start-dev
```

You can build with the command `npm run build`


### The UI
A swagger UI is available when running locally at http://localhost:3000/api-docs


## Running the Tests 

The tests are run via Dockesr through the Dockerfile.test file. This allows the tests to run in a controlled fresh environment

Run the tests with:

```sh
docker build -t cribl-image-test  -f Dockerfile.test . && docker run cribl-image-test:latest npm test
```

