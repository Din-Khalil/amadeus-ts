import { ReturnedResponseSuccess } from "../../client/response";
import {
  CollectionMetaLink,
  Dictionaries,
  FlightOrder,
  Issue,
} from "../shared";

// Types used in class
export type FlightOrderGetResult = {
  meta: CollectionMetaLink;
  warnings?: Issue[];
  data: FlightOrder;
  dictionaries: Dictionaries;
};

export type FlightOrderGetReturenedResponse = ReturnedResponseSuccess<
  FlightOrderGetResult,
  FlightOrderGetResult["data"]
>;