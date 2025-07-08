const fs = require('fs');
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 8; // Set thread pool size to 2
crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
  console.log("Hashing completed again1");
}
);

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
  console.log("Hashing completed again2");
});

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
  console.log("Hashing completed again3");
});

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
  console.log("Hashing completed again4");
});

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
  console.log("Hashing completed again5");
});