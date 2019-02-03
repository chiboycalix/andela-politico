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
}