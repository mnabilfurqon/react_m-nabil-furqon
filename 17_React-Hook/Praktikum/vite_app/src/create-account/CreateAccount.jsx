import React, { useEffect } from 'react';

function CreateAccount() {
  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <div>
      <h1>Create Account Page</h1>
      <p>Please fill out the form below to create your account.</p>
      {/* Form goes here */}
    </div>
  );
}

export default CreateAccount;