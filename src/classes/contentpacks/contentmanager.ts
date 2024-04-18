import {ContentPack, IContentPack, IContentPackFile, IContentPackTag} from './contentpack'
import Cookies from 'js-cookie'
import { useContentPackStore } from '../../store/contentpacks'

class ContentPackManager {
    PackList: ContentPack[] = [];

    constructor() {
        const GrabData = useContentPackStore((state) => state.SetFromCookies)
        GrabData;
        const ReturnData = useContentPackStore((state) => state.ContentPacks)
        this.PackList = ReturnData;
    }

    public SetStorage() {
        localStorage.setItem('contentpackstorage', JSON.stringify(this.PackList));
    }

    public FileToContentPack(_content : string) {
        try {
            const ContentNew: ContentPack = JSON.parse(_content);
            this.PackList.push(ContentNew);
            this.SetStorage();
        } catch (e) {
            console.log("File is not in the valid format")
        }
    }

    public GetPack() {
        return this.PackList;
    }

    public DeletePack(_pack : ContentPack) {
        let i = 0;
        for (i = 0; i < this.PackList.length; i++) {
            this.PackList.splice(i, 1);
        }
        this.SetStorage();
    }
}

export {ContentPackManager}