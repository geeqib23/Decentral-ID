pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract SmartContract {
    address owner;

    struct Scopes {
        string name;
        string sex;
        string dob;
        uint mobile;
        string email;
        string college;
        int isOver18;
        int isCollegeStudent;
    }

    struct VReq {
        bytes32 cid;
        address user;
        Scopes scopes;
        int status;
        uint metaIndex;
    }

    struct VReqMeta {
        address verifier;
        int status;
    }

    mapping(address => Scopes) UserInfo;

    mapping(address => VReq[]) VerifierVReqs;
    mapping(address => VReqMeta[]) UserVReqs;

    mapping(address => mapping(address => Scopes)) UserOrgAccess;

    constructor() public {
        owner = msg.sender;
    }

    function addVReq(
        address verifier,
        bytes32 cid,
        string memory name,
        string memory sex,
        string memory dob,
        uint mobile,
        string memory email,
        string memory college,
        int isOver18,
        int isCollegeStudent
    ) public {
        VerifierVReqs[verifier].push(VReq(cid, msg.sender, Scopes(name, sex, dob, mobile, email, college, isOver18, isCollegeStudent), 0, UserVReqs[msg.sender].length));
        UserVReqs[msg.sender].push(VReqMeta(verifier, 0));
    }

    function showVerifierVerificationReqList() public view returns (VReq[] memory) {  
        return VerifierVReqs[msg.sender];
    }

    function showUserVerificationReqList() public view returns (VReqMeta[] memory) {
        return UserVReqs[msg.sender];
    }

    function verifyReq(address user, uint index, bool decision) public {
        if (decision) {
            VReq memory vreq = VerifierVReqs[user][index];
            vreq.status = 1;
            UserVReqs[vreq.user][vreq.metaIndex].status = 1;
            if (keccak256(abi.encodePacked(vreq.scopes.name)) != keccak256(abi.encodePacked(""))) {
                UserInfo[vreq.user].name = vreq.scopes.name;
            }
            if (keccak256(abi.encodePacked(vreq.scopes.sex)) != keccak256(abi.encodePacked(""))) {
                UserInfo[vreq.user].sex = vreq.scopes.sex;
            }
            if (keccak256(abi.encodePacked(vreq.scopes.dob)) != keccak256(abi.encodePacked(""))) {
                UserInfo[vreq.user].dob = vreq.scopes.dob;
            }
            if (vreq.scopes.mobile != 0) {
                UserInfo[vreq.user].mobile = vreq.scopes.mobile;
            }
            if (keccak256(abi.encodePacked(vreq.scopes.email)) != keccak256(abi.encodePacked(""))) {
                UserInfo[vreq.user].email = vreq.scopes.email;
            }
            if (keccak256(abi.encodePacked(vreq.scopes.college)) != keccak256(abi.encodePacked(""))) {
                UserInfo[vreq.user].college = vreq.scopes.college;
            }
            if (vreq.scopes.isOver18 != 0) {
                UserInfo[vreq.user].isOver18 = vreq.scopes.isOver18;
            }
            if (vreq.scopes.isCollegeStudent != 0) {
                UserInfo[vreq.user].isCollegeStudent = vreq.scopes.isCollegeStudent;
            }
        }
        else {
            VReq memory vreq = VerifierVReqs[user][index];
            vreq.status = -1;
            UserVReqs[vreq.user][vreq.metaIndex].status = -1;
        }
    }

    function showUserInfo() public view returns (Scopes memory) {
        return UserInfo[msg.sender];
    }

    function giveAccess(
        address org,
        bool name,
        bool sex,
        bool dob,
        bool mobile,
        bool email,
        bool college,
        bool isOver18,
        bool isCollegeStudent
    ) public {
        if (name) {
            UserOrgAccess[msg.sender][org].name = UserInfo[msg.sender].name;
        }
        else {
            UserOrgAccess[msg.sender][org].name = '';
        }
        if (sex) {
            UserOrgAccess[msg.sender][org].sex = UserInfo[msg.sender].sex;
        }
        else {
            UserOrgAccess[msg.sender][org].sex = '';
        }
        if (dob) {
            UserOrgAccess[msg.sender][org].dob = UserInfo[msg.sender].dob;
        }
        else {
            UserOrgAccess[msg.sender][org].dob = '';
        }
        if (mobile) {
            UserOrgAccess[msg.sender][org].mobile = UserInfo[msg.sender].mobile;
        }
        else {
            UserOrgAccess[msg.sender][org].mobile = 0;
        }
        if (email) {
            UserOrgAccess[msg.sender][org].email = UserInfo[msg.sender].email;
        }
        else {
            UserOrgAccess[msg.sender][org].email = '';
        }
        if (college) {
            UserOrgAccess[msg.sender][org].college = UserInfo[msg.sender].college;
        }
        else {
            UserOrgAccess[msg.sender][org].college = '';
        }
        if (isOver18) {
            UserOrgAccess[msg.sender][org].isOver18 = UserInfo[msg.sender].isOver18;
        }
        else {
            UserOrgAccess[msg.sender][org].isOver18 = 0;
        }
        if (isCollegeStudent) {
            UserOrgAccess[msg.sender][org].isCollegeStudent = UserInfo[msg.sender].isCollegeStudent;
        }
        else {
            UserOrgAccess[msg.sender][org].isCollegeStudent = 0;
        }
    }

    function showUserInfoByOrg(address user) public view returns (Scopes memory) {
        return UserOrgAccess[user][msg.sender];
    }
}
