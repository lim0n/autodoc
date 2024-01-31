import { PublicationsPair } from "@shared/interfaces";

export namespace PublicationsActions {

  export class PublicationsAction {
    static readonly type = '[Publications] Add item';
    constructor(public payload: PublicationsPair) { }
  }
}
