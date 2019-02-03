/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import bcrypt from 'bcryptjs';
import Pool from '../db/index';
import httpResponse from '../helpers/response';
import auth from '../middlewares/auth';

export default class UserController {
  createUser(request, response) {
    const {
      email,
      password,
      passportUrl,
      firstName,
      otherName,
      lastName,
      phoneNumber,
    } = request.body;

    const check = `SELECT * FROM users WHERE email = '${email}' LIMIT 1`;
    Pool.connect((error, client) => {
      if (error) return httpResponse(response, 500, 'internal server error', error.message);
      client.query(check, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal server error', error);
        }
        if (result.rows.length > 0) {
          return httpResponse(response, 409, 'email already exists');
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const query = {
          text: `INSERT INTO users (email, password, firstName,
           lastName, otherName, passportUrl, phoneNumber) 
           VALUES ($1, $2, $3, $4, $5, $6, $7) returning id, firstName, lastName, email`,
          values: [
            email,
            hashedPassword,
            firstName,
            lastName,
            otherName,
            passportUrl,
            phoneNumber,
          ],
        };

        Pool.query(query, (error, result) => {
          if (error) return httpResponse(response, 500, 'internal server error');
          const user = result.rows[0];
          const token = auth.authenticate(user);
          response.setHeader('x-access-token', token);
          return httpResponse(response, 201, 'user created successfully', { user, token });
        });
      });
    });
  }

  
  loginUser(request, response) {
    const { email, password } = request.body;
    const query = {
      text: 'select id, email, password, firstName, lastName from users where email = $1 LIMIT 1',
      values: [email],
    };
    Pool.query(query, (error, result) => {
      if (error) {
        return httpResponse(response, 400, 'Bad Request: fill in all required fields and try later', error.message);
      }
      const user = result.rows[0];
      if (!result.rows.length) {
        return httpResponse(response, 401, 'Invalid Email or Password');
      }
      const check = bcrypt.compareSync(password, user.password);
      if (check) {
        const token = auth.authenticate(user);
        delete user.password;
        return httpResponse(response, 200, 'login sucessful', { user, token });
      }
      return httpResponse(response, 401, 'Invalid Email or Password');
    });
  }
}