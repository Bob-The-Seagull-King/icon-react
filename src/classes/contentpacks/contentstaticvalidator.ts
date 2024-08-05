import { IPlayerAbility } from "../feature/abilities/Ability";
import { ContentPack } from "./contentpack";
import { IAdvancedDescription } from "../AdvancedDescription";
import { ObjectTag } from "../IconpendiumItem";

export interface ContentType {
    validateItem: (item : any) => string;
}

export interface ContentDataTable {[moveid: Lowercase<string>]: ContentType}

export const ContentDataDex : ContentDataTable = {
    description: {
        validateItem(item : any) {
            try {
                let i = 0;
                for (i = 0; i < item.length; i ++) {
                    if (!(item[i].tags)) {
                        return "Description has no tags"
                    }
                }
                return "";
            } catch (e) {
                return "Invalid File Structure";
            }
        }
    },
    abilities: {
        validateItem(item : any) {
            try {
                if ((item.id) &&
                    (item.type) &&
                    (item.name) &&
                    (item.source) &&
                    (item.tags) &&
                    (item.chapter) &&
                    (item.class_id) &&
                    (item.job_id) &&
                    (item.attachments) &&
                    (item.blurb) &&
                    (item.description)) {
                        if ((typeof item.id === 'string') &&
                            (typeof item.type === 'string') &&
                            (typeof item.name === 'string') &&
                            (typeof item.source === 'string') &&
                            (typeof item.chapter === 'number') &&
                            (typeof item.class_id === 'string') &&
                            (typeof item.job_id === 'string')) {
                                return ""
                        }
                }
                return "Ability isn't properly structured";
            } catch (e) {
                return "invalid file structure";
            }
        }
    }
}