describe('postrequest_body',()=>{

it('random_body_data',()=>{
let body={
    
        name: Math.random.toString(5).substring(2),
        job: "leader"
    
}

    cy.request({
        method:'POST',
        url: 'https://reqres.in/api/users'
        
    }).then((response)=>{
expect(response.status).to.eq(201)

    })

})





})