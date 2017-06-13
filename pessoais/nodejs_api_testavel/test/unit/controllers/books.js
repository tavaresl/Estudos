import BooksController from '../../../controllers/books';

describe('Controllers: Books', () => {
  describe('Get all books: getAll()', () => {
    it('should return a list of books', () => {
      const Books = {
        findAll: td.function(),
      };
      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:55:36.6922',
        updated_at: '2016-08-06T23:55:36.6922',
      }];
      const booksController = new BooksController(Books);

      td.when(Books.findAll({})).thenResolve(expectedResponse);

      return booksController.getAll()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Get a books: getById()', () => {
    it('should return a books', () => {
      const Books = {
        findOne: td.function(),
      };
      const expectedResponse = {
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:55:36.6922',
        updated_at: '2016-08-06T23:55:36.6922',
      };
      const booksController = new BooksController(Books);

      td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      return booksController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Create a book: create()', () => {
    it('should create a book', () => {
      const Books = {
        create: td.function(),
      };
      const requestBody = {
        name: 'Test Book',
      };
      const expectedResponse = {
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:55:36.6922',
        updated_at: '2016-08-06T23:55:36.6922',
      };
      const booksController = new BooksController(Books);

      td.when(Books.create(requestBody)).thenResolve(expectedResponse);

      return booksController.create(requestBody)
        .then((response) => {
          expect(response.data).to.be.eql(expectedResponse);
          expect(response.statusCode).to.be.eql(201);
        });
    });
  });

  describe('Update a book: update()', () => {
    it('should update an existing book', () => {
      const Books = {
        update: td.function(),
      };
      const requestBody = {
        id: 1,
        name: 'Test Book Updated',
      };
      const expectedResponse = {
        id: 1,
        name: 'Test Book Updated',
        created_at: '2016-08-06T23:55:36.6922',
        updated_at: '2016-08-06T23:55:36.6922',
      };
      const booksController = new BooksController(Books);

      td.when(Books.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      return booksController.update(requestBody, { id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Delete a book: delete()', () => {
    it('should delete an existing book', () => {
      const Books = {
        destroy: td.function(),
      };
      const booksController = new BooksController(Books);

      td.when(Books.destroy({ where: { id: 1 } })).thenResolve({});

      return booksController.delete({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
