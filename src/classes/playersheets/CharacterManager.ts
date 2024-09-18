import { IPlayerCharacter, PlayerCharacter } from "./PlayerCharacter"

class CharacterManager{

    public Characters : PlayerCharacter[];

    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IPlayerAbility format
     */
    public constructor()
    {
        const Data = localStorage.getItem('characterdatastorage')
        const CharacterData : IPlayerCharacter[] = ((Data != null)? (JSON.parse(Data) as IPlayerCharacter[]) : []); 

        this.Characters = []
        CharacterData.forEach(_data => {
            this.Characters.push(new PlayerCharacter(_data));
        })
    }

    public setstorage() {
        const CharacterData : IPlayerCharacter[] = []
        
        this.Characters.forEach(_data => {
            CharacterData.push(_data.PC_Data);
        })

        localStorage.setItem('characterdatastorage', JSON.stringify(CharacterData));
    }

}

export {CharacterManager}

