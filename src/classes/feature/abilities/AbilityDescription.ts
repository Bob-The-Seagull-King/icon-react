import {IDescriptionItemData, DescriptionItem} from '../../DescriptionItem'

interface IAbilityDescription extends IDescriptionItemData {
    glossary: []
}

class AbilityDescription extends DescriptionItem {
    public readonly Glossary;

    public constructor(data: IAbilityDescription)
    {
        super (data)
        this.Glossary = data.glossary;
    }

    SubConstructor(data?: []) {
        const sublist: DescriptionItem[] = []
        if (data) {
            let i = 0;
            for (i = 0; i < data.length; i++) {
                let tempDI = new AbilityDescription(data[i])
                sublist.push(tempDI);
            }
            return sublist;
        } else {
            return sublist;
        }
    }
}

export {IAbilityDescription, AbilityDescription}