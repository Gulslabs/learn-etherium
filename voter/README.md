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
- `cd voter`
- run `truffle init`
- run `truffle migrate --network ganache`. This will deploy voter contract to ganache (local ethereum network)
- run `npm install`. This will install required java scripts 
- run `node src/js/Interact_Voter.js`. Console logs will prove if the deployment and interaction was successful. 
