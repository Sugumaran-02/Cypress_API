const xml2js= require('xml2js')
const parser= new xml2js.Parser({explicitArray:false})


describe('xml parshing', ()=>{

const xmlpayload='<Pet><id>0</id><Category><id>0</id><name>string</name></Category><name>doggie</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>0</id><name>string</name></Tag></tags><status>available</status></Pet>'

let pet_id=null;

it('Creating PET',()=>{
    cy.request({
        method: 'POST',
        url:'https://petstore.swagger.io/v2/pet',
        body: xmlpayload,
        headers:{
            'Content-type': 'application/xml',
            'accept': 'application/xml'
        }
    }).then((reponse)=>{
expect(reponse.status).to.eq(200)

parser.parseString(reponse.body,(err, result)=>{
    pet_id=result.Pet.id;
})

    })


})



})