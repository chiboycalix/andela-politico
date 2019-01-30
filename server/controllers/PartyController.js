/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-extra-semi */
/* eslint-disable no-undef */
import httpResponse from '../helpers/response';
import parties from '../db/partyDB';

class PartyController {
  // Create party Controller function
  creatParty(req, res) {
    const { name, logoUrl } = req.body;
    if (!name || !logoUrl) {
      return httpResponse(res, 400, 'All fields are required');
    }
    parties.push({
      id: parties.length + 1,
      name,
      logoUrl,
    });
    return httpResponse(res, 201, 'Party created successfully', parties[parties.length - 1]);
  };

  // Get all parties Controller function
  getParties(req, res) { 
    return httpResponse(res, 200, 'Success', parties);
  }
}


const partyController = new PartyController();
export default partyController;