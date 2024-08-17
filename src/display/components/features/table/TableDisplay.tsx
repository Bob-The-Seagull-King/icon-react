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
                    {Table.ColNames.map((item) => (<th key={"headtabledesc"}><p>{item}</p></th>))}
                </tr>
                {Table.Items.map((item) => (
                <tr key={"rowtabledesc"}>
                    {item.Description.map((val) => (
                        <td key={"itemtabledesc"}>
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