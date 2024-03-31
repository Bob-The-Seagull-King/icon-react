import {ItemType} from './Enum'
import {getTagValue} from '../utility/functions'

interface IDescriptionItemData {
    tags: [],
    content?: string,
    subcontent?: []
}

class DescriptionItem {
    public readonly SubContent;
    public readonly Content;
    public readonly Tags;

    public constructor(data?: IDescriptionItemData)
    {
        if (data) {
            this.Tags = data.tags;
            this.Content = data.content || "";
            this.SubContent = this.SubConstructor(data.subcontent)
        }

    }

    SubConstructor(data?: []) {
        const sublist: DescriptionItem[] = []
        if (data) {
            let i = 0;
            for (i = 0; i < data.length; i++) {
                let tempDI = new DescriptionItem(data[i])
                sublist.push(tempDI);
            }
            return sublist;
        } else {
            return sublist;
        }
    }

    public ReturnAddonValues() {
        let list = []
        let tagval = getTagValue(this.Tags, "desc_type")
        if (tagval != undefined) {
            if (tagval == "addon")
            list.push(this.Content)
        }
        let i = 0;
        if (this.SubContent){
            for (i = 0; i < (this.SubContent?.length || 0); i++) {
                let tempContent = this.SubContent[i].ReturnAddonValues()
                if (tempContent != undefined) {
                    list.push.apply(list, tempContent)
                }
            }
        }
        return list;
    }
}

export {IDescriptionItemData, DescriptionItem}