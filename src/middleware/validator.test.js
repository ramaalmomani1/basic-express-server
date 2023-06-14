'use strict'

const supertest = require('supertest');
// const validator = require('./validator')
const {app} = require('../server');
const req = supertest(app);

describe('validator test', () => {
    it('handle name', async () => {
    //   const res = await req.get('/person/:name');
      const res = await req.get('/person');

      expect(res.status).toEqual(200);
    })
})