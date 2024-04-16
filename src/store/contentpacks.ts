import { create } from "zustand";
import {ContentPack, IContentPack, IContentPackFile, IContentPackTag} from '../classes/contentpacks/contentpack'
import Cookies from 'js-cookie'

type ContentPackStore = {
    ContentPacks: ContentPack[];
    SetFromCookies: () => void;
}

export const useContentPackStore = create<ContentPackStore>((set) => ({
    ContentPacks: [],
    SetFromCookies: () => {
        set(
            (state) => ({ContentPacks: GrabContentPack()})
        )}
}))

function GrabContentPack() {
    const TempList: ContentPack[] = [];
    try {
        const ContentPackAll: ContentPack[] = [];
        return ContentPackAll;
    } catch (e) {
        console.log("No valid content pack data found.");
    }
    
    return TempList;
}

