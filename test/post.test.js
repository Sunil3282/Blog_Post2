const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should()

chai.use(chaiHttp);

describe("Unit testing for post Contrllers",()=>{
    // describe("Unit testing for post route ",()=>{
    //     it("it should post",(done)=>{
    //         const data = {
    //             title : "fruits",
    //             content: 'I like Mango'
    //         }
    //         chai.request(server)
    //         .post('/post/create').send(data)
    //         .end((err,res)=>{
    //             res.should.have.status(201);
    //             res.body.should.be.a('object');
    //             res.body.should.be.have.property('id').to.not.equal(0);
    //             res.body.should.be.have.property('title');
    //             res.body.should.be.have.property('content');
              
    //             done();
    //         })
    //     })
    // })
    describe("Unit testing for getll route",()=>{
        it("It should get all post",(done)=>{
            chai.request(server)
            .get('/post/show')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                //res.body.length.should.be.eql(13);
                done();
            })
        })
    })
    describe("Unit testing for get by id",()=>{
        it("it should get perticular id post",(done)=>{
            chai.request(server)
            .get('/post/showOne/1')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
        })
    })
    describe("Unit testing for patch by id",()=>{
        const data = {
            title:"Humanbeing",
            content:"Humanbeing is social animal..."
        }
        it("it should patch the post ",(done)=>{
            chai.request(server)
            .patch('/post/upDate/1').send(data)
            .end((err,res)=>{
                res.should.have.status(201),
                done()
            })
        })
    })


})