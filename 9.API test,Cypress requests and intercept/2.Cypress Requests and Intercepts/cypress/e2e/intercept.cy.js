import {validLogin} from "../pageObject/loginobject";
describe("intercept with cypress",()=>{
    beforeEach(()=>{
        cy.visit("https://dev.suriname.codefirm.net/")
        validLogin()
    });
    it("coin page intercept",()=>{
        cy.intercept('GET',"https://dev.surinamefe.codefirm.net/api/transactions/coins?page=1&limit=10&orderBy=&order=",{"data": [{
            "id": 10421,
            "amount": 34,
            "transactionType": "sell",
            "status": "pending",
            "transactionFee": 0,
            "networkFee": 0,
            "srdcToUsdRate": 1,
            "transactionHash": null,
            "referenceCode": "O9IFTZOKN",
            "remarks": "Sold 1 eGWAP for $1.00 USD.",
            "reason": null,
            "createdAt": "2022-08-18T05:32:53.309Z",
            "updatedAt": "2022-08-18T05:32:53.309Z",
            "sender": {
                "id": 206,
                "firstName": "Itihassdl;lasla",
                "lastName": "Adhikari",
                "email": "itihas.adhikari@ekbana.info",
                "phone": "9803989110"
            },
            "receiver": {
                "id": 1,
                "firstName": "Genesis",
                "lastName": "account",
                "email": "genesis.account@surinam.info",
                "phone": "81212121212"
            },
            "wireNumber": null,
            "payoutTotal": 1,
            "isSender": true,
            "isReceiver": false
        },{
            "id": 10420,
            "amount": 1,
            "transactionType": "buy",
            "status": "pending",
            "transactionFee": 0,
            "networkFee": 0,
            "srdcToUsdRate": 1,
            "transactionHash": null,
            "referenceCode": "JUQULAJGI",
            "remarks": "Bought 1 eGWAP for $1 USD.",
            "reason": null,
            "createdAt": "2022-08-18T05:32:51.942Z",
            "updatedAt": "2022-08-18T05:32:51.942Z",
            "sender": {
                "id": 2,
                "firstName": "Master",
                "lastName": "account",
                "email": "master.account@surinam.info",
                "phone": "81212121212"
            },
            "receiver": {
                "id": 206,
                "firstName": "Itihassdl;lasla",
                "lastName": "Adhikari",
                "email": "itihas.adhikari@ekbana.info",
                "phone": "9803989110"
            },
            "wireNumber": null,
            "payoutTotal": 1,
            "isSender": false,
            "isReceiver": true
        }]
    }
    ).as("coin_inter")
        cy.wait(500)
        cy.get("a[href='/coins']").click()
        cy.wait('@coin_inter')
        cy.wait(1000)

    });
    it("Profile intercept",()=>{
        cy.intercept('GET','https://dev.surinamefe.codefirm.net/api/users/profile',{
            "id": 206,
            "firstName": "Tony",
            "lastName": "Stark",
            "email": "tony.stark@ekbana.info",
            "phone": "9803989110",
            "country": "USA",
            "countryCode": "US",
            "state": "California",
            "city": "Malibu",
            "address": "10-8-88",
            "zip": "1234AS",
            "paymentMethodAdded": true,
            "publicAddress": "0x8D26E08057d3BC57fC07dBA824b60c4b65c3F36b",
            "ouroBalance": 27847.79,
            "availableBalance": 24162.55,
            "createdAt": "2022-05-12T08:30:06.197Z",
            "updatedAt": "2022-08-18T06:08:22.957Z",
            "userKyc": {
                "status": "approved",
                "watchlist": false,
                "currentTier": {
                    "name": "Tier-2",
                    "transactionLimit": 10000,
                    "enableTransfer": true
                }
            },
            "todaysTransaction": 430
        }).as('profile')
        cy.get(".ant-dropdown-trigger.btn__profile").click({force: true})
        cy.get("a[href='/account-settings']").click()
        cy.wait('@profile')
        cy.wait(1000)
                
            });

    it("History intercept",()=>{
    cy.intercept('GET','transactions?page=1&limit=10&from=&to=&type=&status=&orderBy=&order=&description=',{
        
            "lastPage": 1,
            "page": 1,
            "perPage": 2,
            "data": [{
                "id": 10338,
                "amount": 10,
                "transactionType": "send",
                "status": "completed",
                "transactionFee": 0,
                "networkFee": 0.00068871,
                "srdcToUsdRate": 1,
                "transactionHash": "0xf04a37f34061a95a4e6b0d59874e05da0df057c1d1d280483dfae746ac966c24",
                "referenceCode": "C9H6YM7TA",
                "remarks": null,
                "reason": null,
                "createdAt": "2022-08-17T02:07:05.281Z",
                "updatedAt": "2022-08-17T02:07:26.199Z",
                "sender": {
                    "id": 206,
                    "firstName": "Itihassdl;lasla",
                    "lastName": "Adhikari",
                    "email": "itihas.adhikari@ekbana.info",
                    "phone": "9803989110"
                },
                "receiver": {
                    "id": 212,
                    "firstName": "###!@3a",
                    "lastName": "Mangrati",
                    "email": "rajit@mailinator.com",
                    "phone": "9860596632"
                },
                "payoutTotal": 10,
                "isSender": true,
                "isReceiver": false
            },{
                "id": 10290,
                "amount": 6,
                "transactionType": "send",
                "status": "completed",
                "transactionFee": 0,
                "networkFee": 0.00068871,
                "srdcToUsdRate": 1,
                "transactionHash": "0xcc1deb037b40e7c439979f434d24a1448e24198b7dba8f18395a34d41a292660",
                "referenceCode": "A1M7J0SXN",
                "remarks": "default_remarks",
                "reason": null,
                "createdAt": "2022-08-16T09:58:20.909Z",
                "updatedAt": "2022-08-16T09:58:32.237Z",
                "sender": {
                    "id": 206,
                    "firstName": "Itihassdl;lasla",
                    "lastName": "Adhikari",
                    "email": "itihas.adhikari@ekbana.info",
                    "phone": "9803989110"
                },
                "receiver": {
                    "id": 212,
                    "firstName": "###!@3a",
                    "lastName": "Mangrati",
                    "email": "rajit@mailinator.com",
                    "phone": "9860596632"
                },
                "payoutTotal": 6,
                "isSender": true,
                "isReceiver": false
            }

        ]
    }).as("history_inter")
    cy.get("a[href='/history']").click()
    cy.wait("@history_inter")
    });


})