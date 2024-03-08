import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { capitalizeTag, getColour } from '../../utility/functions';
import '../../styles/iconcomponent.scss';
import '../../styles/iconhome.scss';
import '../../styles/iconnav.scss';

const GC_Rules = (props: any) => {
    
    const searchVal = urlParse();
    const isSearched = (value: any) => (true);

    function urlParse() {
        const urlPath = window.location.pathname;
        const urlSplits = urlPath.split('/');
        if (urlSplits.length >= 5) {
            
            urlSplits[4] = urlSplits[4].replaceAll('%20', ' ');
            return urlSplits[4];
        }
        return "";
    }

    // Navigation ----------------------------------
    function navClick (dir: string, name: string) {    
        window.open(location.protocol + '//' + location.host + '/player/tactics/' + dir + '/' + name, '_blank', 'noopener,noreferrer');
    }
    // ---------------------------------------------


    // Return render -------------------------------
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div className=''>
                <div className='centerPosition'>
                    <h1 className={'megatitleShape titlePurple'}>THE CAMP</h1>
                </div>
                <br/>
                <div className='rulesParagraphStructure'>
                    <p>
                        Adventurers in Arden Eld often get around on enormous aetherships, traveling wagons, vehicles, or caravans. They bring with them all kinds of supplies: portable shrines, elixir cauldrons, cooking pots, vittles, and lengths of rope for traversing caverns. The camp can be any of these things. It’s representative of the gear, supplies, and transportation that the characters keep in common, and may take with them on an expedition.
                    </p>
                    <p>
                        When you start a group of characters, also start a camp sheet. Camp sheets have the following:
                    </p>
                    <ol>
                        <li><b>Group Name:</b> You can name your group if you like, or leave it blank until later.</li>
                        <li><b>Ambitions:</b> Write 1-3 long term goals for your group. If you accomplish an Ambition during an interlude, everyone in your group gets 1 xp, then write a new ambition. You can leave these blank for now if you like.</li>
                        <li><b>Camp fixtures:</b> The various pieces of gear, shelter, and accoutrement that your group keeps around camp. Fixtures apply their benefits to everyone in the group and anyone can spend dust to purchase, upgrade, or use them. Start with 1 of your choice.</li>
                    </ol>
                    <div className='jobcontainer'>
                        <div>
                            <div className='ruleSubStructure'>
                                <h2 className={'titleShape subtitlePurple'}>CAMPING</h2>
                                <p>
                                    During an expedition you can camp (usually a limited number of times) to clear all <b>strain</b>, regain all <b>effort</b>, and regain all <b>hp</b> (accounting for your wounds). You scarf down a meal, put your feet up, clean your weapons, tend to your wounds, or polish your armor. You then <b>lose all resolve</b> you have accumulated.
                                </p>
                                <p>
                                    Camping is pretty loose and could represent anything from a short break in a battle where you catch your breath or a momentary break on a trail to fix your boots to an entire night or even a few days spent in one place.
                                </p>
                                <p>
                                    You only camp during an expedition, but you might spend time in your camp (or what your camp represents if it represents something like a caravan or airship) during interludes or in downtime. Either way, the camp is usually a character in its own right and often serves as a home away from home for Icons.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='ruleSubStructure'>
                                <h2 className={'titleShape subtitlePurple'}>CAMP ITEMS</h2>
                                <p>
                                    Here at the various camp fixtures and their upgrades. When you make your characters, start with one. Additional upgrades and fixtures can be bought during an interlude and take effect at the end of an interlude. Anyone can spend dust on them.
                                </p>
                                <p>
                                    If camp upgrades are nested (bulleted below each other), you need to take the previous upgrade to get the one under it.
                                </p>
                                <ul>
                                    <li>
                                        <b>Upgrade 1:</b> Characters need to take this upgrade…
                                        <ul>
                                            <li>
                                                <b>Upgrade 2:</b> … before they can take this one!
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GC_Rules