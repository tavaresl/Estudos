import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes Books', () => {
  const Books = app.datasource.models.Books;
  const Users = app.datasource.models.Users;
  const defaultBook = {
    id: 1,
    name: 'Default Book',
    description: 'Default Description',
  };

  const defaultUser = {
    name: 'John',
    email: 'john@mail.com',
    password: '123456',
  };

  const jwtSecret = app.config.jwtSecret;

  let token;

  beforeEach((done) => {
    Users
      .destroy({ where: {} })
      .then(() => {
        Users
          .create(defaultUser)
          .then((user) => {
            Books
              .destroy({ where: {} })
              .then(() => Books.create(defaultBook))
              .then(() => {
                token = jwt.encode({ id: user.id }, jwtSecret);
                done();
              });
          });
      });
  });

  describe('Route GET /books', () => {
    it('should return a list of books', (done) => {
      const listBooks = Joi.array().items(Joi.object().keys({
        id: Joi.number(),
        name: Joi.string(),
        description: Joi.string(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso(),
      }));

      request
        .get('/books')
        .set('Authentication', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, listBooks);
          done(err);
        });
    });
  });

  describe('Route GET /books/{id}', () => {
    it('should return a book', (done) => {
      const book = Joi.object().keys({
        id: Joi.number(),
        name: Joi.string(),
        description: Joi.string(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso(),
      });

      request
        .get('/books/1')
        .set('Authentication', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, book);
          done(err);
        });
    });
  });

  describe('Route POST /books', () => {
    it('should create a book', (done) => {
      const newBook = {
        id: 2,
        name: 'New Book',
        description: 'New Description',
      };
      const postedBook = Joi.object().keys({
        id: Joi.number(),
        name: Joi.string(),
        description: Joi.string(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso(),
      });

      request
        .post('/books')
        .set('Authentication', `JWT ${token}`)
        .send(newBook)
        .end((err, res) => {
          joiAssert(res.body, postedBook);
          done(err);
        });
    });
  });

  describe('Route PUT /books/{id}', () => {
    it('should update a book', (done) => {
      const updatedBook = {
        id: 1,
        name: 'Updated Book',
        description: 'Updated Description',
      };
      const updatedCount = Joi.array().items(1);

      request
        .put('/books/1')
        .set('Authentication', `JWT ${token}`)
        .send(updatedBook)
        .end((err, res) => {
          joiAssert(res.body, updatedCount);
          done(err);
        });
    });
  });

  describe('Route DELETE /books/{id}', () => {
    it('should delete a book', (done) => {
      request
        .delete('/books/1')
        .set('Authentication', `JWT ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(HttpStatus.NO_CONTENT);
          done(err);
        });
    });
  });
});
