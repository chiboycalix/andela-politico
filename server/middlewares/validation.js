/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
import httpResponse from '../helpers/response';

const signupValidation = (request, response, next) => {
  let pass = true;
  const errors = {};
  const emailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  if (request.body.email) {
    request.body.email = request.body.email.trim();
  }

  const values = request.body;
  const required = ['email', 'password', 'firstName', 'lastName', 'confirmPassword'];

  for (let i = 0; i < required.length; i += 1) {
    if (!values[required[i]]) {
      pass = false;
      errors[required[i]] = `${required[i]} is required`;
    }
  }



  if (values.firstName && !values.firstName.replace(/\s/g, '').length) {
    pass = false;
    errors.firstName = 'firstname is required';
  }
  if (values.lastName && !values.lastName.replace(/\s/g, '').length) {
    pass = false;
    errors.lastName = 'lastname is required';
  }
  if (values.email && !values.email.replace(/\s/g, '').length) {
    pass = false;
    errors.email = 'email is required';
  }
  if (values.email && !emailFormat.test(String(values.email).toLowerCase())) {
    pass = false;
    errors.email = 'email not valid';
  }
  if (values.password && !values.password.replace(/\s/g, '').length) {
    pass = false;
    errors.password = 'password is required';
  }
  if (values.password && values.password.trim()
  !== (values.confirmPassword && values.confirmPassword.trim())) {
    pass = false;
    errors.password = 'Password does not match';
  } 
  if (pass === false) {
    return httpResponse(response, 400, 'error signing up', errors);
  }
  request.body.firstName = request.body.firstName.toString().trim(); 
  request.body.lastName = request.body.lastName.toString().trim(); 
  request.body.email = request.body.email.toString().trim(); 
  request.body.password = request.body.password.toString().trim(); 
  next();
};

export default signupValidation;