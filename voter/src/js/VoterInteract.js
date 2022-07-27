let fs = require('fs');
let Web3 = require('web3');

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));

// update before running. 
let contractAddress = "0xeA62AF408F4270D4244a30aB1eC3Ef333bDe342E";
let fromAddress = "0x9d713feded63A1e8D4D799F6E7A3fED79A13AeEe";

const contract = JSON.parse(fs.readFileSync('./build/contracts/Voter.json', 'utf8'));
let abi = JSON.stringify(contract.abi);
// console.log(abi);

let voter = new web3.eth.Contract(JSON.parse(abi), contractAddress);

interact()
    .then(function() {
        console.log("Done");
    })
    .catch(function(error) {
        console.log(error);
    })

async function interact() {
     console.log("Adding candidate 'Barak Obama'");
     await voter.methods.addCandidate("Barak Obama Hanks").send({from: fromAddress, gas: 600000});

    console.log("Adding candidate 'Joe Biden'");
    await voter.methods.addCandidate("Joe Biden").send({from: fromAddress, gas: 600000}); 

   //let candidates = await voter.methods.candidates(1).call({from: fromAddress});
   // console.log(`Candidates: ${candidates}`)

   console.log("Voting");   
   await voter.methods.vote("Barak Obama").send({from: fromAddress, gas: 600000});
   console.log("Getting votes");
   let votes = await voter.methods.getVotes().call({from: fromAddress, gas: 600000});
   console.log(`Votes: ${votes}`)

   // let candidateVoteCount = await voter.methods.getCandidateVoteCount(0).call({from: fromAddress});
   // console.log(`CandidateVoteCount: ${candidateVoteCount}`);   
}