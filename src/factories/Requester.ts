import {DataResponder} from '../resources/data/child/util/DataResponder'

interface IRequest {
    searchtype: string,
    searchparam: any
}

class Requester {

    public static MakeRequest(request: IRequest) {
        switch(request.searchtype) {
            case "id": {
                return DataResponder.GetSingleEntry(request.searchparam);
            }
            case "file": {
                return DataResponder.GetFullDataEntry(request.searchparam);
            }
            case "keyvalues": {
                return DataResponder.GetAllOfKeyInData(request.searchparam);
            }
            case "complex": {
                return DataResponder.ComplexSearch(request.searchparam);
            }
            default: {
                return []
            }
        }
    }

}

export {Requester, IRequest}