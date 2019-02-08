/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */

import Pool from '../db/index';
import httpResponse from '../helpers/response';


export default class InterestController {
  createInterest(request, response) {
    const { userId } = request.params;
    const { tokenId } = request.decoded.id;
    console.log(userId, tokenId);
    if (parseInt(userId, 10) === parseInt(tokenId, 10)) {
      const check = {
        text: 'SELECT * FROM interest WHERE userId = $1',
        values: [userId],
      };
      Pool.query(check, (error, result) => {
        if (error) {
          return httpResponse(response, 500, 'internal server errorrr', error.message);
        }
        if (result.rows.length > 0) {
          return httpResponse(response, 409, 'interest already decalred');
        }
        
        const { officeId, partyId, manifesto } = request.body;
        console.log('i got here');
        const query = {
          text: 'INSERT INTO interest(userId, officeId, partyId, manifesto) VALUES ($1, $2, $3, $4)',
          values: [userId, officeId, partyId, manifesto],
        };
        Pool.query(query, (error, result) => {
          console.log('i got here2');
          if (error) {
            return httpResponse(response, 500, 'internal server', error.message);
          }
          return httpResponse(response, 201, 'interest created successfully', result.rows[0]);
        });
      });
    }
  }
}