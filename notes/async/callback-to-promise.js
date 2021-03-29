// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'kermit' && password === 'murmur') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
            reject(new Error('not found!'));
          }  
      }, 2000);
    });
  }
  
  getRoles(user, onSuccess, onError) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'kermit') {
          resolve({name: 'kermit', role: 'admin'});
        } else {
            reject(new Error('no access'));
          }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(id => userStorage.getRoles(id))
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role!!!`))
  .catch(error => console.log(error))
  .finally(() => console.log('bye!'));