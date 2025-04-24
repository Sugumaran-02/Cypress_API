describe('authentication_requests',()=>{

it('degest_auth',()=>{

cy.request({
    method:'GET',
    url:'https://postman-echo.com/basic-auth',
    auth:{
        username:"postman",
        password:"password",
        method:'degest'
    }
}).then((response)=>{
    expect(response.status).to.eq(200)
})


})

it('Basic_auth',()=>{

    cy.request({
        method:'GET',
        url:'https://postman-echo.com/basic-auth',
        auth:{
            username:"postman",
            password:"password",
            
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
    
    
    })
    



})