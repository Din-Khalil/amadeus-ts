import Client from "../../../client";

/**
 * A namespaced client for the
 * `/v1/shopping/availability/flight-availabilities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```ts
 * const amadeus = new Amadeus();
 * amadeus.availability.flightAvailabilities;
 * ```
 *
 * @param {Client} client
 */
export default class FlightAvailabilities {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Get available seats in different fare classes
   *
   * @param {Object} params
   * @return {Promise<Response|ResponseError>} a Promise
   *
   * ```ts
   * amadeus.shopping.availability.flightAvailabilities.post(body);
   * ```
   */
  public post(params: Object = {}) {
    return this.client.post(
      "/v1/shopping/availability/flight-availabilities",
      params
    );
  }
}