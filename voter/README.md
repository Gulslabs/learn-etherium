# Voter Contract

###### Pre-Requisites: 

- Install NodeJS and NPM
- Install VSCode(IDE)
- Run `npm install -g truffle` # to Install Truffle 
- Install Ganache 
	- As CLI `npm install -g ganache-cli` 
	- As executable downlaod from https://trufflesuite.com/ganache/ 

###### How to Run: 
- Dowload the code
- Start Ganache
- `cd voter`
- run `truffle migrate --network ganache`. **Note:** truffle maintains state i.e. it wont redeploy or recompile if nothing has changed in the contract; add `--reset` to force it. 
- run `npm install`. This will install required java scripts. 
- run `node src/js/VoterInteract.js`. Console logs will prove if the deployment and interaction was successful. **Note:** Update contractAddress and fromAddress in this file before runnig; you can get these values from Ganache UI.  
- run `truffle test`; this will execute test\VoterTest.js. 
