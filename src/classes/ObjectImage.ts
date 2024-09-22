import { ObjectTag } from "./IconpendiumItem";

/**
 * Data structure for the description section
 */
interface IObjectImage {
    tags: ObjectTag, // Tags that influence formatting
    img_src : string,
    caption: string
}

class ObjectImage {
    public readonly Src;
    public readonly Caption;

    /**
     * Assigns parameter values and triggers the creation of
     * further DescriptionItems for any subcontent
     * @param data The data in IDescriptionItemData format
     */
    public constructor(data: IObjectImage)
    {
        this.Src = data.img_src;
        this.Caption = data.caption
    }

}

export {IObjectImage, ObjectImage}