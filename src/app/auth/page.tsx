// pages/auth/index.tsx
import React from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';

function Auth() {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;