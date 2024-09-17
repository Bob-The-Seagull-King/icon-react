import { DescriptionFactory, makestringpresentable } from "../../utility/functions";

interface IContentPackFile {
    type: string, // What file to match this data to
    data: any[] // Contents of the file
}

interface IContentPackTag {
    name: string, // Displayed name of the tag
    count: number // How many of [name] are in the Content Pack
}

interface IContentPack {
    id: string, // ID value of the Content Pack (must remain unique)
    name: string, // Public name of the Content Pack (can be shared)
    author: string, // Creator attribution for the Content Pack
    description: [], // Brief description of the Content Pack, no formatting
    isactive: boolean, // If the Content Pack currently adds its data to searches
    files: IContentPackFile[] // Actual new data provided by the Content Pack
}

class ContentPack {

    ID: string;
    Name: string;
    Author: string;
    Description;
    Tags: IContentPackTag[];
    IsActive: boolean;
    Files: IContentPackFile[];

    constructor(_contentpack: IContentPack) {
        this.ID = _contentpack.id;
        this.Name = _contentpack.name;
        this.Author = _contentpack.author;
        this.Description = DescriptionFactory(_contentpack.description);
        this.Tags = this.GetTags(_contentpack.files);
        this.IsActive = true;
        this.Files = _contentpack.files;
    }

    private GetTags(data : IContentPackFile[]) {
        const Tags : IContentPackTag[] = [];

        let i = 0;
        for (i = 0; i < data.length; i ++) {
            const TempTag : IContentPackTag = {name: makestringpresentable(data[i].type), count: data[i].data.length}
            Tags.push(TempTag);
        }

        return Tags;
    }

    /**
     * Swaps the Pack between inactive and active.
     * Active Packs will have their data included in
     * any searches the tool makes.
     */
    public SwitchStates() {
        this.IsActive = !this.IsActive;
    }

}

export {ContentPack, IContentPack, IContentPackFile, IContentPackTag}