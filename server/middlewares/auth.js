/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../db/index';
import httpResponse from '../helpers/response';

dotenv.config();

const auth = {
  authenticate(user) {
    return jwt.sign({
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    }, process.env.SECRET, { expiresIn: '24h' });
  },

  verifyToken(token) {
    let decoded = {};
    try {
      decoded.payload = jwt.verify(token, process.env.SECRET);
    } catch (error) {
      decoded = {
        error: error.message,
      };
    }
    return decoded;
  },

  verifyUserToken(request, response, next) {
    const token = request.headers['x-access-token'];
    
    if (!token) {
      return httpResponse(response, 401, 'No token found');
    }
    const decoded = auth.verifyToken(token);
    if (decoded.error) {
      return httpResponse(response, 500, 'Failed to authenticate user');
    }
    const query = {
      text: 'SELECT * users WHERE id = $1 LIMIT 1',
      VALUES: [decoded.payload.id],
    };
    const { id } = request.params;
    if (id && isNaN(parseInt(id, 10))) {
      return httpResponse(response, 400, 'The ID provided is not a number');
    }
    return db.query(query, (error, response) => {
      if (error) {
        return httpResponse(response, 500, 'Internal server error');
      }
      if (response.rows.length > 0) {
        request.decoded = decoded.payload;
        next();
      } else {
        return httpResponse(response, 404, 'user not found');
      }
    });
  },
};

export default auth;