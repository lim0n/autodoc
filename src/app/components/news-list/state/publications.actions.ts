import { IPublication, IPublicationsResponse, PublicationsPair } from "@shared/interfaces";

export namespace PublicationsActions {

  export class AddChunk {
    static readonly type = '[Publications] Add chunk';
    constructor(public payload: PublicationsPair) { }
  }

  export class PushFromResponse {
    static readonly type = '[Publications] Add IPublicationsResponse';
    constructor(public payload: IPublicationsResponse & {offsetAndCount?: string}) { }
  }

  export class FlattenPages {
    static readonly type = '[Publications] Convert pages: PublicationsPair[] to flat: IPublication[] '
  }

  export class GetPage {
    static readonly type = '[Publications] Get page';
    constructor(public payload: number ) { }
  }

  export class GetNextPage {
    static readonly type = '[Publications] Get next page';
  }

  export class PostArticle {
    static readonly type = '[Publications] Post article';
    constructor(public payload: Partial<IPublication>) { }
  }

  export class GetLocalArticle {
    static readonly type = '[Publications] Get local article';
  }
}
