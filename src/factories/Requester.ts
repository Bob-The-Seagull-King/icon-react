import {DataResponder} from '../resources/data/child/util/DataResponder'

/**
 * Format for a given request to send to the icon-data repo
 */
interface IRequest {
    searchtype: string, // Used to decide which request to make
    searchparam: any // The data of the givn request
}

class Requester {

    /**
     * Send a request to a DataResponder and returns the result
     * @param request The IRequest being sent to the Requester
     * @returns The data returned by the icon-data repo in response to the request
     */
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