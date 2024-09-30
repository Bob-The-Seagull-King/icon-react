import { FightManager } from '../fightsheets/FightManager';
import { ContentPackManager } from '../contentpacks/contentmanager'

class ToolsController {
   
    ContentManager;
    FightsManager;

    constructor () {
        this.ContentManager = new ContentPackManager()
        this.FightsManager = new FightManager();
    }

}

export {ToolsController}