import {ContentPack, IContentPack } from './contentpack'
import { useContentPackStore } from '../../store/contentpacks'
import { ContentDataDex } from './contentstaticvalidator';

class ContentPackManager {
    PackList: ContentPack[] = []; // Array of Content Packs

    constructor() {
        const GrabData = useContentPackStore((state) => state.SetFromCookies)
        GrabData;
        const ReturnData = useContentPackStore((state) => state.ContentPacks)
        this.PackList = ReturnData;
    }

    /**
     * Updates the browser's local storage to reflect
     * the manager's array of Content Packs.
     */
    public SetStorage() {
        localStorage.setItem('contentpackstorage', JSON.stringify(this.PackList));
    }

    /**
     * Attempts to convert a given file into a Content Pack
     * object, returning a message if something went wrong in
     * the conversion process.
     * @param _content The string representation of the File
     * @returns String message, "" means nothing unusual has
     * occured, non empty strings indicate an error.
     */
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

    /**
     * Checks if the provided information can convert into
     * a JSON format and that the minimum structure of a
     * Content Pack is provided.
     * @param _content The string representation of the File
     * @returns String message, "" means nothing unusual has
     * occured, non empty strings indicate an error.
     */
    private ValidateFileData(_content : string) {
        const TestPack = (JSON.parse(_content))
        let i = 0;

        // Check that the minimum structure of the Content Pack exists
        const validatetype = this.ValidateType(TestPack);
        if (validatetype !== '') { return validatetype }

        // Check that no Content Pack shares the same ID
        for (i = 0; i < this.PackList.length; i++) {
            if (this.PackList[i].ID == TestPack.id) {
                return "You already have a Content Pack with the same ID";
            }
        }

        // Add all IDs contained in the Content Pack data to an array
        const IDArray = [];
        for (i = 0; i < TestPack.files.length; i ++) {
            let j = 0;
            for (j = 0; j < TestPack.files[i].data.length; j++) {
                IDArray.push(TestPack.files[i].data[j].id)
            }
        }

        // For each ID in the array, check that no other Content Pack contains the same ID
        let x = 0;
        for (x = 0; x < this.PackList.length; x++) {
            for (i = 0; i < this.PackList[x].Files.length; i ++) {
                let j = 0;
                for (j = 0; j < this.PackList[x].Files[i].data.length; j++) {
                    if (IDArray.includes(this.PackList[x].Files[i].data[j].id)) {
                        return "Conflicting IDs were found."
                    }
                }
            }
        }

        return ""
    }

    private ValidateType(pack : any) {

        try {
            if (pack.id && pack.name && pack.author &&
                pack.description && pack.isactive && pack.files ) {
                if ( (typeof pack.id === 'string') && (typeof pack.name === 'string') &&
                    (typeof pack.author === 'string') && (typeof pack.isactive === 'boolean') ) {

                        const result = ContentDataDex['description'].validateItem(pack.description);
                        if (result !== '') {return result}

                        let i = 0;
                        for (i = 0; i < pack.files.length; i ++) {
                            if (pack.files[i].type && pack.files[i].data) {
                                if (typeof pack.files[i].type === 'string') {
                                    let j = 0;
                                    for (j = 0; j < pack.files[i].data.length; j++) {
                                        const result = ContentDataDex[pack.files[i].type].validateItem(pack.files[i].data[j])
                                        if (result !== '') {return result}
                                    }
                                } else {
                                    return "File name not valid"
                                }
                            } else {
                                return "File structure not valid"
                            }
                        }
                        return "";
                } else {
                    "Invalid Data Types"
                }
            } else {
                return "Invalid File Structure"
            }
        } catch (e) {
            return "UNKNOWN ERROR";
        }
        return "";
    }

    /**
     * Getter for the Content Packs
     * @returns All Content Packs
     */
    public GetPack() {
        return this.PackList;
    }

    /**
     * Remove a Content Pack from the manager and
     * update the stored information to match.
     * @param _pack The Content Pack to remove from the manager
     */
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