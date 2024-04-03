interface IFilterObject {
    group: string;
}

interface IFilterText extends IFilterObject {
    val: string;
    isstrict: boolean;
}

interface IFilterItem extends IFilterObject {
    isactive: boolean;
    doinclude: boolean;
    name: string;
}

interface IFilterTag extends IFilterObject {
    tagtype: IFilterItem;
    tagval: IFilterText;
}

class FilterText {
    Group: string;
    Val: string;
    IsStrict: boolean;

    constructor(item: IFilterText) {
        this.Group = item.group;
        this.Val = item.val;
        this.IsStrict = item.isstrict;
    }
}

class FilterItem {
    Group: string;
    IsActive: boolean;
    DoInclude: boolean;
    Name: string;

    constructor(item: IFilterItem) {
        this.Group = item.group;
        this.IsActive = item.isactive;
        this.DoInclude = item.doinclude;
        this.Name = item.name;
    }
}

class FilterTag {
    Group: string;
    TagType: FilterItem;
    TagVal: FilterText;

    constructor(item: IFilterTag) {
        this.Group = item.group;
        this.TagType = new FilterItem(item.tagtype);
        this.TagVal = new FilterText(item.tagval);
    }
}

export {IFilterObject, IFilterText, IFilterItem, IFilterTag, FilterText, FilterItem, FilterTag}