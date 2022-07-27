// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Voter {
    struct CandidatePosition {
        uint256 index;
        bool exists;
        uint256 voteCount;
    }

    mapping(address => bool) public hasVoted;

    mapping(string => CandidatePosition) public positionOfCandiates;

    string[] public candidates;

    function addCandidate(string memory candidate) public {
        CandidatePosition memory candidatesPos = positionOfCandiates[candidate];
        require(!candidatesPos.exists, "Candidate already exist");
        require(candidates.length < 10, "Maximum 10 Candidates allowed");
        candidates.push(candidate);
        CandidatePosition memory candiatePosition = CandidatePosition({
            index: candidates.length,
            exists: true,
            voteCount: 0
        });
        positionOfCandiates[candidate] = candiatePosition;
    }

    function vote(string memory candidate) public {
        require(candidates.length <= 2, "Minimum 2 Candidates Required");
        require(
            candidates.length < 10,
            "Maximum 10 Candidates allowed for Election"
        );

        CandidatePosition memory candidatesPosition = positionOfCandiates[
            candidate
        ];
        require(
            candidatesPosition.exists,
            "Cannot Vote. Candidate does not exist"
        );

        // require(!hasVoted[msg.sender], "Account has already voted");
        hasVoted[msg.sender] = true;
        candidatesPosition.voteCount = candidatesPosition.voteCount + 1;
        // This one missing line costed me 2 days.
        positionOfCandiates[candidate] = candidatesPosition;
    }

    function getVotes() public view returns (uint256[] memory) {
        // we cannot use dynamic array here.
        uint256[] memory votes = new uint256[](candidates.length);
        for (uint256 i = 0; i < candidates.length; i++) {
            votes[i] = positionOfCandiates[candidates[i]].voteCount;
        }
        return votes;
    }

    function getCandidateNameByIndex(uint256 index)
        public
        view
        returns (string memory)
    {
        return candidates[index];
    }

    function getCandidateVoteCount(uint256 index)
        public
        view
        returns (uint256)
    {
        return positionOfCandiates[candidates[index]].voteCount;
    }
}
