export default {
  database: 'books',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `books_${process.env.NODE_ENV}.sqlite`,
    define: {
      underscored: true,
    },
  },
};
