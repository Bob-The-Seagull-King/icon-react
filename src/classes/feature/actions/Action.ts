import { IIconpendiumItemData, IconpendiumItem, ItemType } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface IAction extends IIconpendiumItemData {
    description: [],
    laconic: [],
    chapterone: string[],
    chaptertwo: string[],
    chapterthr: string[]
}

class Action extends IconpendiumItem {
    public readonly Description;
    public readonly Laconic;
    public readonly ChapterOne;
    public readonly ChapterTwo;
    public readonly ChapterThree;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAction format
     */
    public constructor(data: IAction)
    {
        super(data)
        this.ItemType = ItemType.Action;
        this.Description = DescriptionFactory(data.description);
        this.Laconic = DescriptionFactory(data.laconic);
        this.ChapterOne = data.chapterone;
        this.ChapterTwo = data.chaptertwo;
        this.ChapterThree = data.chapterthr;
    }
    
    /**
     * When destroyed, also delete all associated
     * addon objects.
     */
    destructor() {
        let i = 0;
        for (i = 0; i < this.Description.length; i++) {
            delete this.Description[i];
        }
    }

}

export {IAction, Action}

