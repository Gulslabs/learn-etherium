let Voter = artifacts.require('Voter');

// contract function is build in truffle. Note this contract is not deployed on any test network; its available as part of test framework.
contract('Voter', function (accounts) {
  let voter;
  let firstAccount;

  beforeEach(async function () {
    // use first account;
    firstAccount = accounts[0];
    voter = await Voter.new();
    await addCandidates(firstAccount, ['Barak Obama', 'Joe Biden']);
  });

  it('Cast your Vote to Barak Obama', async function () {
    await voter.vote('Barak Obama', { from: firstAccount, gas: 600000 });
    let votes = await voter.getVotes({ from: firstAccount });
    expect(toNumbersUtil(votes)).to.deep.equal([1, 0]);
  });

  async function addCandidates(account, candidates) {
    for (index in candidates) {
      console.log("CandidateName: " + candidates[index]);
      await voter.addCandidate(candidates[index], {
        from: firstAccount,
        gas: 600000,
      });
    }
  }

  function toNumbersUtil(bigNumbers) {
    return bigNumbers.map(function (bigNumber) {
      return bigNumber.toNumber();
    });
  }
});
