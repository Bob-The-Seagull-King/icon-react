import { Requester } from '../Requester';
import { ITable } from '../../classes/feature/table/tablebody'
import { PlayerTable } from '../../classes/feature/table/tablebody'

class TableFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateTable(_table: ITable) {
        const table = new PlayerTable(_table)
        return table;
    }

    static CreateNewTable(_val : string) {
        const tabledata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "table", id: _val}}) as ITable
        const tablenew = TableFactory.CreateTable(tabledata)
        return tablenew;
    }

}

export {TableFactory}