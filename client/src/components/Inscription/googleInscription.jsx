import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const GoogleInscription = ({
  formData,
  setFormData,
  classes,
  handleBack,
  handleNext,
  activeStep,
  steps,
}) => {
  let [probleme, setstate] = useState('');
  const responseGoogle = res => {
    formData.firstname_fr = res.profileObj.givenName;
    formData.email = res.profileObj.email;
    formData.confirmEmail = res.profileObj.email;
    formData.lastname_fr = res.profileObj.familyName;
    handleNext();
  };
  const erreur = res => {
    setstate('essayez de nouveau svp');
    console.log(probleme);
  };
  return (
    <React.Fragment>
      <GoogleLogin
        clientId="399770848300-e4gqh9jj9056sa3cnr83h0tm7qti0kea.apps.googleusercontent.com"
        buttonText="inscrez-vous"
        onSuccess={responseGoogle}
        onFailure={erreur}
        cookiePolicy={'single_host_origin'}
      />
      <div style={{ color: 'red', marginTop: 8, fontSize: 'bold' }}>
        {probleme}
      </div>
    </React.Fragment>
  );
};
export default GoogleInscription;
