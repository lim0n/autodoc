import { IPublicationsResponse, PublicationsPair } from "@shared/interfaces";

export namespace PublicationsActions {

  export class AddChunk {
    static readonly type = '[Publications] Add item';
    constructor(public payload: PublicationsPair) { }
  }

  export class PushFromResponse {
    static readonly type = '[Publications] Add IPublicationsResponse';
    constructor(public payload: IPublicationsResponse & {offsetAndCount?: string}) { }
  }

  export class Bootstrap {
    static readonly type = '[Publications] Get initial feed'
  }

  export class FlattenPages {
    static readonly type = '[Publications] Convert pages: PublicationsPair[] to flat: IPublication[] '
  }

  export class GetPage {
    static readonly type = '[Publications] Get page';
    constructor(public payload: number ) { }
  }
  
}
