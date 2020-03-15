import AvailableService from '../services/AvailableService';

class AvailableController {
  async index(request, response) {
    const {
      query: { date },
      params: { providerId },
    } = request;

    if (!date) {
      return response.status(400).json({ error: 'Invalid date.' });
    }

    const searchDate = Number(date);

    const available = await AvailableService.run({
      provider_id: providerId,
      date: searchDate,
    });

    return response.json(available);
  }
}

export default new AvailableController();
