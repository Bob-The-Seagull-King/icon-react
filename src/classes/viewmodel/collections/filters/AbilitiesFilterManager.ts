import { IPlayerAbility, PlayerAbility } from "../../../../classes/feature/abilities/Ability";
import { AbilityFactory } from "../../../../factories/features/AbilityFactory";
import { getColour } from "../../../../utility/functions";
import { IFilterItem, IFilterObject, IFilterTag, IFilterText } from "./FilterInterfaces"
import { Requester } from "../../../../factories/Requester";

class AbilitiesFilterManager {
    TextOptions: IFilterText[];
    TagOptions: IFilterTag[];
    MiscOptions: IFilterObject[];

    constructor() {
        this.TextOptions = [{group: "name", val: "", isstrict: false}]
        this.TagOptions = this.FindTags();
        this.MiscOptions = this.FindMisc();
    }

    FindTags() {
        const tempTags: IFilterTag[] = []
        const foundTags = Requester.MakeRequest({ searchtype: 'tags', searchparam: { type: 'abilities' } });

        let i = 0;
        for (i = 0; i < foundTags.length; i++) {
            const tempTagText: IFilterText = { group: "tags", val: "", isstrict: false}
            const tempTagObject: IFilterItem = { group: "tags", isactive: false, doinclude: false, name: foundTags[i]}
            const tempTagInterface: IFilterTag = {
                                                    group: "tags",
                                                    tagtype: tempTagObject,
                                                    tagval: tempTagText
                                                    }

            tempTags.push(tempTagInterface);
        }

        return tempTags;
    }

    FindMisc() {
        const tempMisc: IFilterObject[] = []
        const keytypes = ["source", "chapter", "class_id", "job_id"]

        let i = 0;
        for (i = 0; i < keytypes.length; i ++) {
            const foundVals = Requester.MakeRequest({ searchtype: 'keyvalues', searchparam: { type: 'abilities' , id: keytypes[i]} });
            
            let j = 0;
            for (j = 0; j < foundVals.length; j++) {
                const tempTagObject: IFilterItem = { group: keytypes[i], isactive: false, doinclude: false, name: foundVals[j]}
                tempMisc.push(tempTagObject);
            }
        }

        return tempMisc;
    }
    
}

export {AbilitiesFilterManager}