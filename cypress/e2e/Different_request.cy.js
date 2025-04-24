describe('different_request', ()=>{
 
    it('get_request',()=>{
      cy.request('GET','https://jsonplaceholder.typicode.com/posts')
      .its('status')
      .should('equal',200)

    })

    it('Post_request',()=>{
cy.request({
 method:'POST',
 url:'https://jsonplaceholder.typicode.com/posts',
 body: {
"userId": 22,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

 }

}).then((response)=>{
expect(response.status).to.eq(201)

})

    })


it('Put_request',()=>{
    cy.request({
        method:'PUT',
        url:'https://jsonplaceholder.typicode.com/posts/1',
        body:{
            "userId": 1,
            "id": 1,
            "title": "Sugu",
            "body": "SOFTWARE TEST ENGINEER"
          }

    }).then((reponse)=>{
        expect(reponse.status).to.eq(200)
    })

 })   

 it('DELETE_REQUEST',()=>{
    cy.request({
        method:'DELETE',
        url:'https://jsonplaceholder.typicode.com/posts/1'
    }).then((response)=>{
        expect(response.status).to.eq(200)
     })
 })


})