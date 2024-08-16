/**
 * Basic data package for any Iconpendium Item
 */
interface IIconpendiumItemData {
    id: string, // The id of the item
    type: string, // The type of the item (ability, addon, summon, talent, relic, etc)
    name: string, // The name of the item
    source: string, // The source of the item (core book, homebrew, etc)
    tags: ObjectTag // Tags associated with that item (used for sorting and synergies)
    eventtags: ObjectTag // Tags associated with that item (used for sorting and synergies)
}

type ObjectTag = {[_name : string] : string | boolean | number | null | []}

enum ItemType {
    None = '',
    Ability = 'Ability',
    Addon = 'Addon',
    GlossaryRule = 'Glossary'
}

abstract class IconpendiumItem {
    public ItemType;
    public readonly Source;
    public readonly ID;
    public readonly Tags;
    public readonly Name;
    public readonly EventTags;

    /**
     * Assigns data values to the parameters of the item
     * @param data The item data
     */
    public constructor(data?: IIconpendiumItemData)
    {
        this.ItemType = ItemType.None
        if (data) {
            this.ID = data.id;
            this.Source = data.source;
            this.Name = data.name;
            this.Tags = data.tags;
            this.EventTags = data.eventtags;
            this.ItemType = data.type;
        } else {
            this.Tags = {};
            this.EventTags = {};
        }
    }
}

export {IIconpendiumItemData, IconpendiumItem, ItemType, ObjectTag}