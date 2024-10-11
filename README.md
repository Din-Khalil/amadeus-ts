# Amadeus Node SDK Written In TypeScript

[![npm version](https://badge.fury.io/js/amadeus-ts.svg)](https://badge.fury.io/js/amadeus-ts)

Amadeus provides a rich set of APIs for the travel industry. For more details, check out the [Amadeus for Developers portal](https://developers.amadeus.com).

> [!IMPORTANT]  
> This SDK is maintained **by the developer community only**. The Amadeus for Developers team doesn't support or maintain it.

## Key Features

- ✅ Full TypeScript support.
- 🚀 Smaller package size.

## Installation

This module has been tested using [Node LTS versions](https://nodejs.org/en/about/releases/) (16.x, 18.x, 20.x). You can install it using npm, pnpm or yarn.

```sh
npm install amadeus-ts
```

## Getting Started

To make your first API call, you will need to [register](https://developers.amadeus.com/register) for an Amadeus Developer Account and [set up your first application](https://developers.amadeus.com/my-apps).

## Usage

```ts
import Amadeus, { ResponseError } from "amadeus-ts";

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

async function getFlightOffers() {
  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: "SYD",
      destinationLocationCode: "BKK",
      departureDate: "2024-12-01",
      adults: 2,
    });

    console.log(response.data);
  } catch (error: unknown) {
    if (error instanceof ResponseError) {
      console.log(error.code);
    }
  }
}

getFlightOffers();
```

## Types

You can import the types of each endpoint to define the structure of your objects.

```ts
import Amadeus, { FlightOffersSearchGetParams } from "amadeus-ts";

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

// Define the object's type using the FlightOffersSearchGetParams type
const flightOffersSearch: FlightOffersSearchGetParams = {
  originLocationCode: "SYD",
  destinationLocationCode: "BKK",
  departureDate: "2024-12-01",
  adults: 2,
};

amadeus.shopping.flightOffersSearch.get(flightOffersSearch);
```
