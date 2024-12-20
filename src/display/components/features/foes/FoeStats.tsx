import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { IFoeStats } from '../../../../classes/feature/foes/FoeStats';

// Components
import ItemStat from '../../subcomponents/description/ItemStat';

const FoeStatsDisplay = (props: any) => {
    const FoeStatsDisplay: IFoeStats = props.data
    const FoeFaction: string = props.faction

    function ReturnHPVal() {
        let val = ""
        if (FoeStatsDisplay.hp) {
            let mod = 1;
            if (FoeStatsDisplay.hp_mod) {
                mod = FoeStatsDisplay.hp_mod
            }
            val = (FoeStatsDisplay.hp * mod).toString()

            if (FoeStatsDisplay.hp_per) {
                val += " " + FoeStatsDisplay.hp_per
            }
        }

        return val;
    }

    function ReturnHitsVal() {
        let val = ""
        if (FoeStatsDisplay.hits) {
            let mod = 1;
            if (FoeStatsDisplay.hp_mod) {
                mod = FoeStatsDisplay.hp_mod
            }
            val = (FoeStatsDisplay.hits * mod).toString()
        }

        return val;        
    }

    
    function ReturnMembersVal() {
        let val = ""
        if (FoeStatsDisplay.members) {
            val += FoeStatsDisplay.members.toString();
            if (FoeStatsDisplay.hp_per) {
                val += " " + FoeStatsDisplay.hp_per
            }
        }

        return val;
    }

    return (
        <div className=''>
           
           <div className="row row-cols-lg-8 row-cols-md-8 row-cols-sm-4 justify-content-center">
                {FoeStatsDisplay.vit &&
                    <ItemStat title={"VIT"} value={FoeStatsDisplay.vit}/>
                }
                {FoeStatsDisplay.hp &&
                    <ItemStat title={"HP"} value={ReturnHPVal()}/>
                }
                {FoeStatsDisplay.hits &&
                    <ItemStat title={"HITS"} value={ReturnHitsVal()}/>
                }
                {FoeStatsDisplay.members &&
                    <ItemStat title={"MEMBERS"} value={ReturnMembersVal()}/>
                }
                {FoeStatsDisplay.damage &&
                    <ItemStat title={"DAMAGE DIE"} value={"D" + FoeStatsDisplay.damage}/>
                }
                {FoeStatsDisplay.fray &&
                    <ItemStat title={"FRAY"} value={FoeStatsDisplay.fray}/>
                }
                {FoeStatsDisplay.turns &&
                    <ItemStat title={"TURNS"} value={FoeStatsDisplay.turns}/>
                }
                {!FoeStatsDisplay.turns &&
                    <ItemStat title={"TURNS"} value={1}/>
                }
                {FoeStatsDisplay.actions &&
                    <ItemStat title={"ACTIONS"} value={FoeStatsDisplay.actions}/>
                }
                {!FoeStatsDisplay.actions &&
                    <ItemStat title={"ACTIONS"} value={2}/>
                }
                {FoeStatsDisplay.size &&
                    <ItemStat title={"SIZE"} value={FoeStatsDisplay.size}/>
                }
                {!FoeStatsDisplay.size &&
                    <ItemStat title={"SIZE"} value={1}/>
                }
                {FoeStatsDisplay.defense &&
                    <ItemStat title={"DEFENSE"} value={FoeStatsDisplay.defense}/>
                }
                {FoeStatsDisplay.speed &&
                    <ItemStat title={"SPEED"} value={FoeStatsDisplay.speed}/>
                }
                {FoeStatsDisplay.dash &&
                    <ItemStat title={"DASH"} value={FoeStatsDisplay.dash}/>
                }
                {FoeFaction &&
                    <ItemStat title={"FACTION"} value={FoeFaction}/>
                }
            </div>
        </div>
    )
}

export default FoeStatsDisplay;