import React from 'react';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';

const AboutMe = () => {
  const isLogedIn = true;
  const numbers =[1, 2, 3, 4, 5];
  // const listItem = numbers.map({number} => <li>{number}</li>); 

  function UserGreeting() {
    return <h1>Welcome Back!</h1>;
  }
  
  function GuestGreeting() {
    return <h1>Please sign up.</h1>;
  }

  function Greeting() {
    if(isLogedIn) {
      return <UserGreeting></UserGreeting>;
    }
    return <GuestGreeting></GuestGreeting>;
  }

  if (isLogedIn === false) {
    return null;
  }

  return (
    <div>
      <h1>About Me</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> {isLogedIn ? 'Helo User' : 'Not You'}
      <ButtonComponent></ButtonComponent>
      <hr></hr>
      <Greeting></Greeting>
      <hr></hr>
      {isLogedIn ? <UserGreeting/> : <GuestGreeting/>}
      <hr></hr>
      <ul>{listItem}</ul>
      <hr></hr>
      {/* <ul>
        {numbers.map({number, index} => (
          <li key={index}>Ini nomor {number}</li>
        )}
      </ul> */}
    </div>
  );
}

export default AboutMe;