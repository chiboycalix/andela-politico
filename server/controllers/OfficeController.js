/* eslint-disable class-methods-use-this */
import offices from '../db/officeDB';
import httpResponse from '../helpers/response';

class OfficeController {
  createOffice(req, res) {
    const { type, name } = req.body;
    if (!type || !name) {
      return httpResponse(res, 400, 'All fields are required');
    }
    offices.push({
      id: offices.length + 1,
      type,
      name,
    });
    return httpResponse(res, 201, 'Office created successfully', offices[offices.length - 1]);
  }
}

const officeController = new OfficeController();
export default officeController;