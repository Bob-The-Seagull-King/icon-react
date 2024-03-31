import {Requester, IRequest} from '../../../factories/Requester'

abstract class ViewCollectionsModel {

    searchParam: any = {};
    dataresults: any = [];

    constructor() {
        undefined;
    }

    public UpdateSearchParams(request: IRequest) {
        this.searchParam = request;
    }

    public RunSearch() {
        this.dataresults = Requester.MakeRequest(this.searchParam as IRequest);
        if (this.dataresults.length == undefined) {
            this.dataresults = [this.dataresults]
        }
    }

    public GetResults() {
        return this.dataresults
    }

    public GetParam() {
        return this.searchParam as IRequest
    }

}

export {ViewCollectionsModel}