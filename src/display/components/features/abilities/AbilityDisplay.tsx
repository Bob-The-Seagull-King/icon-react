import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React from 'react'

// Classes
import { returnTags, returnDescription } from '../../../../utility/util';
import {PlayerAbility } from "../../../../classes/feature/abilities/Ability";
import { Trait } from '../../../../classes/feature/trait/Trait';
import { TraitFactory } from '../../../../factories/features/TraitFactory';

// Components
import GenericDisplay from '../../../components/generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';

const AbilityDisplay = (props: any) => {
    const AbilityObject: PlayerAbility = props.data
    const bannedAbilityTags = ["inflict", "type"]

    function findMastery(id: string) {
        let trait: Trait | null = null;
        trait = TraitFactory.CreateNewTrait(id, 'masteries')

        return ( <GenericDisplay d_colour={AbilityObject.Class} d_name={trait.Name} d_type={"sub"} d_method={() => <TraitDisplay data={trait} />}/> )
    }

    function findTalent(id: string) {
        let trait: Trait | null = null;
        trait = TraitFactory.CreateNewTrait(id, 'talents')

        return ( <GenericDisplay d_colour={AbilityObject.Class} d_name={trait.Name} d_type={"sub"} d_method={() => <TraitDisplay data={trait} />}/> )
    }

    return (
        <div className='abilityInternalStructure'>
            <div>
                {returnTags(AbilityObject.Tags, bannedAbilityTags)}
            </div>
            <div className="verticalspacer"/>
            <div>
                {returnDescription(AbilityObject, AbilityObject.Blurb)}
            </div> 
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">&#x27E1;</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {returnDescription(AbilityObject, AbilityObject.Description)}
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Talents</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {AbilityObject.Talents.map((item) => (
                <div key="talentmap">
                    {findTalent(item)}
                    <div className="verticalspacerbig"/>
                </div>))}
            </div>
            <div className="verticalspacer"/> 
            <div>
                <div className="separator">Mastery</div>
            </div> 
            <div className="verticalspacer"/>
            <div>
                {AbilityObject.Mastery.map((item) => (
                <div key="talentmap">
                    {findMastery(item)}
                    <div className="verticalspacerbig"/>
                </div>))}
            </div>
        </div>
    )
}

export default AbilityDisplay;