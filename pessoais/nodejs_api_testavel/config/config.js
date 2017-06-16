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
  jwtSecret: '5P3cTr0_MvP',
  jwtSession: { session: false },
};
