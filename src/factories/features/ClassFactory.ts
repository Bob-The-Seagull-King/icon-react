import { Requester } from '../Requester';
import { IClass, Class } from '../../classes/feature/class/Class'

class ClassFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateClass(_ability: IClass) {
        const ability = new Class(_ability)
        return ability;
    }


}

export {ClassFactory}