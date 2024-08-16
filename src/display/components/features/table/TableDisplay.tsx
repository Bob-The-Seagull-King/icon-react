import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import { PlayerTable } from '../../../../classes/feature/table/tablebody';

const TableDisplay = (props: any) => {
    const Table: PlayerTable = props.data

    return (
        <div className='abilityInternalStructure'>
            <table>
                <tr>
                    {Table.ColNames.map((item) => (<th><p>{item}</p></th>))}
                </tr>
                {Table.Items.map((item) => (
                <tr>
                    {item.Description.map((val) => (
                        <td>
                            {returnDescription(Table, [val])}
                        </td>
                    ))}
                </tr>
                ))}
            </table>
        </div>
    )
}

export default TableDisplay;