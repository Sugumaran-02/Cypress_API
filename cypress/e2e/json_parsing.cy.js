describe('json_parsing',()=>{

    let total_price=""

it.skip('json_parshing', ()=>{
    
    cy.request({
        method: 'GET',
        url:'https://fakestoreapi.com/products',
    }).then((response)=>{
        expect(response.status).to.eq(200)
       
        const responsebody= response.body
       cy.log(responsebody)
       
       expect(response.body[2].id).to.eq(3)
       expect(response.body[2].title).to.contain('Mens Cotton Jacket')
       
       })
})

it('json_parshing', ()=>{

    cy.request({
        method: 'GET',
        url:'https://fakestoreapi.com/products',
        qs: {limit:3}
    }).then((response)=>{
        expect(response.status).to.eq(200)
       
        response.body.forEach(element => {
            total_price= total_price+element.price;
        });
       
          cy.log(total_price)

          expect(total_price).to.eq('109.9522.355.99')

       })
})





})