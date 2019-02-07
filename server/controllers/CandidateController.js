/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line space-before-blocks
import Pool from '../db/index';
import httpResponse from '../helpers/response';

export default class CandidateController {
  createCandidate(request, response) {
    const { partyId, officeId, userId } = request.body;
    
    const query = {
      text: 'INSERT INTO candidate (partyId, officeId,userId) VALUES ($1, $2, $3) returning *',
      values: [partyId, officeId, userId],
    };
    Pool.query(query, (error, result) => {
      if (error) {
        return httpResponse(response, 500, 'internal server err', error.message);
      }
      return httpResponse(response, 201, 'candidate created', result.rows);
    });
  }
}
