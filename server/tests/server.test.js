const expect = require('expect');
const request = require('supertest');

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
  it('should create a new todo', done => {
    var text = 'Do a little dance';

    request(app)
      .post('/todos')
      // supertest converts object to JSON
      .send({text})
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
          expect(todos.length).toBe(1);
          expect(todos[0].text.toBe(text));
          done();
        })
        .catch(e => done(e));
      });
  })
});