/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import Pool from '../db/index';
import httpResponse from '../helpers/response';


export default class CandidateController {
  createCandidate(request, response) {
    const { manifesto } = request.body;
    const { userId } = request.params;
    const { officeId } = request.params;
    const check = {
      text: 'SELECT * FROM candidate WHERE id = $1',
      values: [userId],
    };
    Pool.connect((error, client) => {
      if (error) return httpResponse(response, 500, 'internal server error', error.message);
      client.query(check, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal server error', error.message);
        }
        if (result.rows.length > 0) {
          return httpResponse(response, 409, 'candidate already exists');
        }
        console.log(result.rows);
        const query = {
          text1: 'SELECT * FROM offices where id= $1',
          values1: [officeId],
          text2: 'INSERT INTO candidate (manifesto) VALUES($1)',
          values2: [manifesto],
        };

        Pool.query(query, (error, result) => {
          if (error) {
            return httpResponse(response, 500, 'internal server error', error.message);
          }
          return httpResponse(response, 201, 'candidate created', result.rows);
        });
      });
    });
  }
}