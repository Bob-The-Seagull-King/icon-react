import {FilterText, FilterTag, FilterItem} from './FilterInterfaces'

abstract class FilterManager {
    
    TextOptions: FilterText[] = [];
    TagOptions: FilterTag[] = [];
    MiscOptions: FilterItem[] = []

    constructor() {
        undefined;
    }

    ReturnTextFilters () {
        return this.TextOptions;
    }

    ReturnTagFilters() {
        return this.TagOptions;
    }

    ReturnMiscFilters() {
        return this.MiscOptions;
    }

    ReturnActiveTestFilters() {
        return this.TextOptions.filter((value) => value.Val.trim().length > 0);
    }

    ReturnActiveTagFilters() {
        return this.TagOptions.filter((value) => value.TagType.IsActive == true);
    }

    ReturnActiveMiscFilters() {
        return this.MiscOptions.filter((value) => value.IsActive == true);
    }
}

export {FilterManager}