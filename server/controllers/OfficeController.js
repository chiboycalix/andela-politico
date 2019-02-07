/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */

import Pool from '../db/index';
import httpResponse from '../helpers/response';

export default class OfficeController {
  createOffice(request, response) {
    const { 
      name,
      type, 
    } = request.body;
    
    const check = `SELECT * FROM offices WHERE name = '${name}' LIMIT 1`;
    Pool.query(check, (error, result) => {
      if (error) {
        return httpResponse(response, 500, 'internal server errorrr', error.message);
      }
      if (result.rows.length > 0) {
        return httpResponse(response, 409, 'office already exists');
      }

      const query = {
        text: 'INSERT INTO offices (name, type) VALUES ($1, $2) returning *',
        values: [name, type],
      };
      Pool.query(query, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal server', error.message);
        }
        return httpResponse(response, 201, 'office created successfully', result.rows[0]);
      });
    });
  }

  getOffices(request, response) {
    const query = 'SELECT * FROM offices';
    Pool.query(query, (error, result) => {
      if (error) {
        return httpResponse(response, 500, 'internal server error');
      }
      return httpResponse(response, 200, 'success', result.rows);
    });
  }

  getOffice(request, response) {
    const { officeId } = request.params;
    const check = `SELECT * FROM offices WHERE id = '${officeId}'`;
    Pool.query(check, (error, result) => {
      if (error) {
        return httpResponse(response, 500, 'internal server errorr', error.message);
      } 
      if (result.rows[0].id !== parseInt(officeId, 10)) {
        return httpResponse(response, 404, 'office does not exist');
      }
      return httpResponse(response, 200, 'success', result.rows[0]);
    }); 
  }
}