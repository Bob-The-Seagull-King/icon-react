import { IPlayerAbility, PlayerAbility } from "../../../../classes/feature/abilities/Ability";
import { AbilityFactory } from "../../../../factories/features/AbilityFactory";
import { getColour } from "../../../../utility/functions";
import { IFilterItem, IFilterObject, IFilterTag, IFilterText, FilterTag, FilterItem, FilterText } from "./FilterInterfaces"
import { Requester } from "../../../../factories/Requester";

class AbilitiesFilterManager {
    TextOptions: FilterText[];
    TagOptions: FilterTag[];
    MiscOptions: FilterItem[];

    constructor() {
        this.TextOptions = [new FilterText({group: "name", val: "", isstrict: false})]
        this.TagOptions = this.FindTags();
        this.MiscOptions = this.FindMisc();
    }

    FindTags() {
        const tempTags: FilterTag[] = []
        const foundTags = (Requester.MakeRequest({ searchtype: 'tags', searchparam: { type: 'abilities' } })).sort();

        let i = 0;
        for (i = 0; i < foundTags.length; i++) {
            const tempTagText: IFilterText = { group: "tags", val: "", isstrict: false}
            const tempTagObject: IFilterItem = { group: "tags", isactive: false, doinclude: false, name: foundTags[i]}
            const tempTagInterface: IFilterTag = {
                                                    group: "tags",
                                                    tagtype: tempTagObject,
                                                    tagval: tempTagText
                                                    }
            const tempTagConstructed = new FilterTag(tempTagInterface);
            tempTags.push(tempTagConstructed);
        }

        return tempTags;
    }

    FindMisc() {
        const tempMisc: FilterItem[] = []
        const keytypes = ["source", "chapter", "class_id", "job_id"]
        keytypes.sort();

        let i = 0;
        for (i = 0; i < keytypes.length; i ++) {
            const foundVals = Requester.MakeRequest({ searchtype: 'keyvalues', searchparam: { type: 'abilities' , id: keytypes[i]} }).sort();
            
            let j = 0;
            for (j = 0; j < foundVals.length; j++) {
                const tempItemObject: IFilterItem = { group: keytypes[i], isactive: false, doinclude: false, name: foundVals[j]}
                const tempItemConstructed = new FilterItem(tempItemObject);
                tempMisc.push(tempItemConstructed);
            }
        }

        return tempMisc;
    }
    
}

export {AbilitiesFilterManager}