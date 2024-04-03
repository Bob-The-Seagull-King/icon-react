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

export {IFilterObject, IFilterText, IFilterItem, IFilterTag}