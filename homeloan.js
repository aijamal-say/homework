var loanObject={}

var mydata = [
    {
loans: 'Home Purchase',
houseType: 'Condo',
city: 'Boston',
purchase: '500,000',
down:'50,000',
streetName:'12 Park Vale Ave',
zip: 'Boston, MA 02134',
first:'Jenna',
last: 'Smith',
emailAddress: 'jennajenna@jenna.com'
    },
    {
loans: 'Home Purchase',
houseType: 'Single Family Home',
cityName: 'Boston',
purchase: '450,000',
down: '45,000',
streetName: '65 Mt Vernon St',
zip: 'Brighton, MA 02135',
first: 'Jenna',
last: 'Smith',
emailAddress: 'jennajenna@jenna.com'
    }

]

var  selection1 = function (browser, data) {
        browser
        .click('@getStartedBtn')
        .setValue('@selectLoan', [data.loans, browser.api.Keys.Enter])
        .setValue('@propertyType', [data.houseType, browser.api.Keys.Enter])
        .click('@typeNextBtn')
        .click('@cityName')
        .setValue('@cityName', data.city)
        .click('@cityNextBtn')
        .click('@primaryBtn')
        .click('@yesBtn')
        .click('@yesBtn')
        .setValue('@price', data.purchase)
        .setValue('@downPay', data.down)
        .click('@moneyBtn')
        .click('@exCreditBtn')
        .click('@noBankForeBtn')
        .setValue('@street', data.streetName)
        .setValue('@zipcode', data.zip)
        .click('@typeNextBtn')
        .setValue('@firstName', data.first)
        .setValue('@lastName', data.last)
        .setValue('@email', data.emailAddress)
        .click('@typeNextBtn')
        .click('@sendBtn')
        .click('@home')
        .pause(1000)
}
module.exports ={ 
    beforeEach: browser => { 
        loanObject = browser.page.loanPage()
        loanObject
        .navigate()
    },
        after: browser =>{
        loanObject
        .end()
},
    'Loan Search': browser => {
        mydata.forEach(search=>{
            selection1(loanObject,search)
   
        })
    }
}
