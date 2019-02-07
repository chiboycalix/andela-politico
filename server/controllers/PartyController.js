/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import Pool from '../db/index';
import httpResponse from '../helpers/response';

export default class PartyController {
  createParty(request, response) {
    const { 
      name, 
      logoUrl,
      hqAddress,
      description, 
    } = request.body;
    
    const check = `SELECT * FROM parties WHERE name = '${name}' LIMIT 1`;
    
    Pool.query(check, (error, result) => {
      if (error) {
        return httpResponse(response, 500, 'internal server error', error.message);
      }
      if (result.rows.length > 0) {
        return httpResponse(response, 409, 'party already exists');
      }

      const query = {
        text: 'INSERT INTO parties (name, logoUrl, hqAddress, description) VALUES ($1, $2, $3, $4) returning *',
        values: [name, logoUrl, hqAddress, description],
      };
      Pool.query(query, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal server error');
        }
        return httpResponse(response, 201, 'party created successfully', result.rows[0]);
      });
    });
  }

  getParty(request, response) {
    const { partyId } = request.params;
    const check = `SELECT * FROM parties WHERE id = '${partyId}'`;
    console.log(check);
    Pool.connect((error, client) => {
      if (error) return httpResponse(response, 500, 'internal server error');
      client.query(check, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal serverrr error', error.message);
        }
        if (!result.rows.length) {
          console.log(result);
          return httpResponse(response, 404, 'party does not exist');
        }
        return httpResponse(response, 200, 'success', result.rows[0]);
      }); 
    });
  }

  getParties(request, response) {
    const query = 'SELECT * FROM parties';

    Pool.query(query, (error, result) => {
      if (error) {
        return httpResponse(response, 500, 'internal server error', error.message);
      }
      return httpResponse(response, 200, 'success', result.rows);
    });
  }

  patchParty(request, response) {
    const { partyId } = request.params;
    const { name } = request.body;
    console.log(name);
    const query = {
      text: 'UPDATE parties set name = $1 WHERE id = $2 returning name',
      values: [name, parseInt(partyId, 10)],
    };
    console.log(query.text);
    Pool.connect((error, client) => {
      if (error) return httpResponse(response, 500, 'internal server error');
      client.query(query, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal server error', error.message);
        }
        if (!name) {
          return httpResponse(response, 400, 'name field cannot be empty');
        }
        return httpResponse(response, 200, 'party updated successfully', result.rows[0]);
      });
    });
  }

  deleteParty(request, response) {
    const { partyId } = request.params;
    const check = `DELETE FROM parties where id = '${partyId}'`;
    Pool.connect((error, client) => {
      if (error) return httpResponse(response, 500, 'internal server error');

      client.query(check, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal server error');
        }
        if (result.rows[0].id !== parseInt(partyId, 10)) {
          return httpResponse(response, 404, 'Party does not exist');
        }
        return httpResponse(response, 200, 'party successfully deleted');
      });
    });
  }
}
