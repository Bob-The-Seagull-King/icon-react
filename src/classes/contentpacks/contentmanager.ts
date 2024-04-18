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
        let ReturnMsg = "";
        try {
            ReturnMsg = this.ValidateFileData(_content) 
            if (ReturnMsg == "") {
                const ContentNew: ContentPack = new ContentPack(JSON.parse(_content));
                this.PackList.push(ContentNew);
                this.SetStorage();
            } else {
                return ReturnMsg;
            }
        } catch (e) {
            ReturnMsg = "File was not in the Content Pack format.";
        }

        return ReturnMsg;
    }

    private ValidateFileData(_content : string) {

        if (    (JSON.parse(_content) as IContentPack).id &&
                (JSON.parse(_content) as IContentPack).name &&
                (JSON.parse(_content) as IContentPack).author &&
                (JSON.parse(_content) as IContentPack).description &&
                (JSON.parse(_content) as IContentPack).tags &&
                (JSON.parse(_content) as IContentPack).isactive &&
                (JSON.parse(_content) as IContentPack).files
            ) {
            undefined;
        } else {
            return "Invalid file format structure.";
        }

        let i = 0;
        for (i = 0; i < this.PackList.length; i++) {
            if (this.PackList[i].ID == (JSON.parse(_content) as IContentPack).id) {
                return "You already have a Content Pack with the same ID";
            }
        }

        return ""
    }

    public GetPack() {
        return this.PackList;
    }

    public DeletePack(_pack : ContentPack) {
        let i = 0;
        for (i = 0; i < this.PackList.length; i++) {
            if (_pack == this.PackList[i]) {
                this.PackList.splice(i, 1);
                break;
            }
        }
        this.SetStorage();
    }
}

export {ContentPackManager}