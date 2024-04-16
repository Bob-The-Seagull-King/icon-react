import {ContentPack, IContentPack, IContentPackFile, IContentPackTag} from './contentpack'
import Cookies from 'js-cookie'
import { useContentPackStore } from '../../store/contentpacks'

class ContentPackManager {
    PackList: ContentPack[] = [];

    constructor() {
        const GrabPacks = useContentPackStore((state) => state.SetFromCookies)
        GrabPacks;
        const GetPackList = useContentPackStore((state) => state.ContentPacks)
        console.log(GetPackList)
        this.PackList = GetPackList;
    }

    public UploadToCookie() {
        Cookies.set('contentpackdata', JSON.stringify(this.PackList), { expires: 365 })
    }


    public ConvertToPack(pack : string) {
        try {
            const ContentPackNew: ContentPack = new ContentPack(JSON.parse(pack));
            this.PackList.push(ContentPackNew);
            this.UploadToCookie();
        } catch {
            console.log("Content Pack not in a valid format.")
        }
    }

}

export {ContentPackManager}