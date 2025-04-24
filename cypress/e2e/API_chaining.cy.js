describe ('API Chaining', () =>{


let auth_token="7581d21efdb5ddfad93a362192e35821be0ba7c781f3579ea3b7c1b957ba01e0"

it('api chain call', ()=>{

cy.request({
method: 'POST',
url: 'https://gorest.co.in/public/v2/users',
body: {
    name:"Sugumaran",
    email:Math.random().toString(5).substring(2)+"@gmail.com",
    gender:"male",
    status:"active"
},
headers:{
    Authorization:"Bearer "+ auth_token
}

}).then((response) =>{
    expect(response.status).to.eq(201)
    let userID= response.body.id
    cy.request({
        method: 'PUT',
        url: `https://gorest.co.in/public/v2/users/${userID}`,
        body:{
            name: 'Sugu'
        },
        headers:{
            Authorization:"Bearer "+ auth_token
        }
    }).then((response)=>{
expect(response.status).to.equal(200)
expect(response.body.name).to.equal('Sugu')
cy.request({
    method: 'DELETE',
    url: `https://gorest.co.in/public/v2/users/${userID}`,
    headers:{
        Authorization:"Bearer "+ auth_token
    }
}).then((response)=>{
    expect(response.status).to.eq(204)
})

    })
})


})



})