const expect = require('expect');
const request = require('supertest');

const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSpies = require('chai-spies');
const mongoose = require('mongoose');
// const expect = chai.expect;

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// testing lifecycle method
// done arg only move to test case when we call done
beforeEach((done) => {
  Todo.remove({}).then(() => {
    done();
  })
});

describe('POST /todos', () => {
  // async test, have to specify done
  it('should create a new todo', done => {
    var text = 'Do a little dance';

    request(app)
      .post('/todos')
      // supertest converts object to JSON
      .send({text})

      // make assertions about req
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          // return to stop function execution
          return done(err);
        }
        
        // request to db to verufy our todo was added
        Todo.find().then((todos) => {
          console.log(todos);
          
          // expect(todos.length).to.have.length.of.at.least(1);
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        })
        .catch(e => done(e));
      });
  })

  it('should not create todo with invalid body data', done => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        })
        .catch((e) => done(e));
      });
  })
});