import React from 'react';

const formatName = (user) => {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Walter',
  lastName: 'White'
}

const App = () => {
  return (
    <div>
      <h1> Hello,{formatName(user)}!</h1>
    </div>

  );
}

export default App;
