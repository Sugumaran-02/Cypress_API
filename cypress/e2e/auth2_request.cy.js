describe('2_authO_request', ()=>{

var access_token="";

it('o_auth_request', ()=>{
cy.request({
    method: 'POST',
    url:'https://github.com/login/oauth/access_token',
    qs:{
        client_id:'Ov23liCA9NamO4leNIVy',
        client_secret:'d9ced442e1022566fcd227f53510b42189c44b54',
        code:'d37574a4c482e0906c33'  // client id may be expired soon
    }
    
}).then((response)=>{

expect(response.status).to.eq(200)
//access_token=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&scope=&token_type=bearer --> need to get token only for that perform split functions

var token= response.body.split('&')
access_token= token[0].split("=")[1];
cy.log(access_token)


})

})

it('OAuth2 request', ()=>{
    cy.log(access_token)
    cy.request({
        method: 'GET',
        url: 'https://api.github.com/user/repos',
        headers:{
            Authorization:`Bearer ${access_token}`,
            'User-Agent': 'Cypress Test'
        }
       
    }).then((response)=>{
   expect(response.status).to.eq(200)

    })

})



})