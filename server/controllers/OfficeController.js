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

  getOffices(req, res) {
    if (offices.length === 0) {
      return httpResponse(res, 404, 'No Office in your database');
    }
    return httpResponse(res, 200, 'Success', offices);
  }
}

const officeController = new OfficeController();
export default officeController;