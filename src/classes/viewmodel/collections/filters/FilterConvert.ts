import { FilterManager } from "./FilterManager";
import {FilterText, FilterTag, FilterItem} from './FilterInterfaces'

export function ConvertFiltersToRequest(manager: FilterManager, _type: string, _groups: string[]) {
    const filterSet = []
    const subsetSet = []

    const filtertext = manager.ReturnActiveTextFilters();
    const filtertag = manager.ReturnActiveTagFilters();
    const filtermisc = manager.ReturnActiveMiscFilters();
    const ungroupedfilters = filtermisc.filter((value) => (!_groups.includes(value.Group)))

    let i = 0;
    for (i = 0; i < filtertext.length; i++) {
        if (filtertext[i].Val.toString().trim().length > 0) {
            const jsontemp =    {                         
                                    item: "name",
                                    value: filtertext[i].Val,
                                    equals: true,
                                    strict: filtertext[i].IsStrict
                                }
            filterSet.push(jsontemp);
        }
    }
    for (i = 0; i < filtertag.length; i++) {
        const jsontemp =    {             
                                item: "tags",
                                value: filtertag[i].TagType.Name,
                                equals: filtertag[i].TagType.DoInclude,
                                strict: true,
                                istag: true,
                                tagvalue: (filtertag[i].TagVal.Val.toString().trim().length > 0)? filtertag[i].TagVal.Val : ""
                            }
        filterSet.push(jsontemp);
    }
    for (i = 0; i < ungroupedfilters.length; i++) {
        const jsontemp =    {             
                                item: ungroupedfilters[i].Group,
                                value: ungroupedfilters[i].Name,
                                equals: ungroupedfilters[i].DoInclude,
                                strict: true,
                                istag: false
                            }
        filterSet.push(jsontemp);
    }

    for (i = 0; i < _groups.length; i++) {
        const filterGroup = filtermisc.filter((value) => (value.Group == _groups[i]))
        const groupfilterset = []
        let j = 0;
        
        for (j = 0; j < filterGroup.length; j++) {
            const jsontemp =    {             
                                    item: filterGroup[j].Group,
                                    value: filterGroup[j].Name,
                                    equals: filterGroup[j].DoInclude,
                                    strict: true,
                                    istag: false
                                }
            groupfilterset.push(jsontemp);
        }

        const jsonSet = {
                            operator: "or",
                            terms: groupfilterset,
                            subparams: []
                        }

        if (groupfilterset.length > 0) {
            subsetSet.push(jsonSet)
                    }
    }

    if ((filterSet.length > 0) || (subsetSet.length > 0)) {
        return  {
                searchtype: "complex",
                searchparam:    {
                                    type: _type,
                                    request:    {
                                                    operator: "and",
                                                    terms: filterSet,
                                                    subparams: subsetSet
                                                }
                                }
                }
    } else {
        return  {searchtype: "file", searchparam: {type: _type}}
    }
}