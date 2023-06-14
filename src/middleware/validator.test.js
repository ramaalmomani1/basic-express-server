'use strict'

const supertest = require('supertest');
// const validator = require('./validator')
const {app} = require('../server');
const req = supertest(app);

describe('validator test', () => {
    it('handle name', async () => {
    //   const res = await req.get('/person/:name');
      const res = await req.get('/person?name=rama');
      expect(res.status).toEqual(200);
    
    })
        it('NO name', async () => {
        //   const res = await req.get('/person/:name');
          const res = await req.get('/person?name=');
          expect(res.status).toEqual(500);
        })
        it('handle name', async () => {
            //   const res = await req.get('/person/:name');
              const res = await req.get('/person?name=jana');
              console.log(res)
              expect(res.body.name).toEqual('jana');
            
            })
})