import { FilterManager } from "./FilterManager";
import {FilterText, FilterTag, FilterItem} from './FilterInterfaces'

export function ConvertFiltersToRequest(manager: FilterManager, _type: string) {
    const filterSet = []

    const filtertext = manager.ReturnActiveTextFilters();
    const filtertag = manager.ReturnActiveTagFilters();
    const filtermisc = manager.ReturnActiveMiscFilters();

    let i = 0;
    for (i = 0; i < filtertext.length; i++) {
        const jsontemp =    {                         
                                item: "name",
                                value: filtertext[i].Val,
                                equals: true,
                                strict: filtertext[i].IsStrict
                            }
        filterSet.push(jsontemp);
    }
    for (i = 0; i < filtertag.length; i++) {
        const jsontemp =    {             
                                item: "tags",
                                value: filtertag[i].TagType.Name,
                                equals: filtertag[i].TagType.DoInclude,
                                strict: true,
                                istag: true,
                                tagvalue: filtertag[i].TagVal.Val
                            }
        filterSet.push(jsontemp);
    }
    for (i = 0; i < filtermisc.length; i++) {
        const jsontemp =    {             
                                item: "tags",
                                value: filtermisc[i].Name,
                                equals: filtermisc[i].DoInclude,
                                strict: true,
                                istag: false
                            }
        filterSet.push(jsontemp);
    }
    if (filterSet.length > 0) {
        return  {
                searchtype: "complex",
                searchparam:    {
                                    type: _type,
                                    request:    {
                                                    operator: "and",
                                                    terms: filterSet,
                                                    subparams: []
                                                }
                                }
                }
    } else {
        return  {searchtype: "file", searchparam: {type: _type}}
    }
}