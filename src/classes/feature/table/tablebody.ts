import { IIconpendiumItemData, IconpendiumItem } from '../../IconpendiumItem'
import { DescriptionFactory } from '../../../utility/functions';
import { ITableItem } from './tableitem';
import { TableItemFactory } from '../../../factories/features/TableItemFactory';

interface ITable extends IIconpendiumItemData {
    description: [] // Description of the table,
    colnames: string[], // Names of each of the columns
    items: ITableItem[] // items in the column
}

class PlayerTable extends IconpendiumItem {

    public readonly Description
    public readonly ColNames;
    public readonly Items;

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor(data: ITable)
    {
        super(data)
        this.Description = DescriptionFactory(data.description);
        this.ColNames = data.colnames;
        this.Items = TableItemFactory.CreateTableItems(data.items);
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

export {ITable, PlayerTable}

