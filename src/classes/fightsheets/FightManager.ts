import { INote } from '../Note';
import { FightSheet, IFightSheet } from './FightSheet';
import { FightMember, IFightMember } from './FightMember';
import { Requester } from '../../factories/Requester';
import { IFoeJob } from '../feature/foes/FoeJob';
import { IFoeFaction } from '../feature/foes/FoeFaction';
import { IFoeClass } from '../feature/foes/FoeClass';

class FightManager {
    public FightList: FightSheet[] = []; // Array of Content Packs
    public JobList : IFoeJob[] = [];
    public FactionList : IFoeFaction[] = [];
    public ClassList : IFoeClass[] = [];

    constructor() {
        this.FightList = this.GrabFights();
        this.GrabJobs()
        this.GrabFactions()
        this.GrabClasses()
    }    

    /**
     * @param _name The name of the warband to find
     * @returns The first instance of a warband with that name
     */
    public GetFightByName(_name : string) {
        let i = 0;
        for (i=0; i < this.FightList.length ; i++) {
            if (this.FightList[i].Title.trim() == _name) {
                return this.FightList[i]
            }
        }
        return null;
    }


    public GrabJobs() {
        const _data = Requester.MakeRequest({searchtype: "file", searchparam: {type: "foejobs"}}) as IFoeJob[]
        
        _data.sort((one, two) => (one.name > two.name ? -1 : 1));
        _data.sort((one, two) => (one.class_id < two.class_id ? -1 : 1));
        
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            this.JobList.push(_data[i])
        }
        
    }

    public GrabFactions() {
        const _data = Requester.MakeRequest({searchtype: "file", searchparam: {type: "foefaction"}}) as IFoeFaction[]
        
        _data.sort((one, two) => (one.name < two.name ? -1 : 1));
        
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            this.FactionList.push(_data[i])
        }
        
    }

    public GrabClasses() {
        const _data = Requester.MakeRequest({searchtype: "file", searchparam: {type: "foeclass"}}) as IFoeClass[]
        
        _data.sort((one, two) => (one.name < two.name ? -1 : 1));
        
        let i = 0;
        for (i = 0; i < _data.length; i++) {
            this.ClassList.push(_data[i])
        }
        
    }

    public GrabFights() {
        const TempList: FightSheet[] = [];  
        const data = localStorage.getItem('iconfoefightsheet');  
        try {
            const FightList: IFightSheet[] = JSON.parse(data || "");
            for (let i = 0; i < FightList.length; i++) {
                TempList.push(new FightSheet(FightList[i]))
            }
            return TempList;
        } catch (e) {
            console.log("Local storage is not valid.")
        }
        return TempList;
    }

    /**
     * Updates the browser's local storage to reflect
     * the manager's array of Content Packs.
     */
    public SetStorage() {
        const _list: IFightSheet[] = []
        for (let i = 0; i < this.FightList.length; i++) {
            _list.push(this.FightList[i].ConvertToInterface())
        }
        localStorage.setItem('iconfoefightsheet', JSON.stringify(_list));
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
                const ContentNew: FightSheet = new FightSheet(JSON.parse(_content) as IFightSheet);
                this.FightList.push(ContentNew);
                this.SetStorage();
            } else {
                return ReturnMsg;
            }
        } catch (e) {
            ReturnMsg = "File was not in the Fight Sheet format.";
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

        // Check that no Content Pack shares the same ID
        for (i = 0; i < this.FightList.length; i++) {
            if (this.FightList[i].ID == TestPack.id) {
                return "You already have a Fight Sheet with the same ID";
            }
        }

        return ""
    }

    /**
     * Getter for the Content Packs
     * @returns All Content Packs
     */
    public GetPack() {
        return this.FightList;
    }

    /**
     * Remove a Content Pack from the manager and
     * update the stored information to match.
     * @param _pack The Content Pack to remove from the manager
     */
    public DeletePack(_pack : FightSheet) {
        let i = 0;
        for (i = 0; i < this.FightList.length; i++) {
            if (_pack == this.FightList[i]) {
                this.FightList.splice(i, 1);
                break;
            }
        }
        
        this.SetStorage();
    }

    /**
     * Remove a Content Pack from the manager and
     * update the stored information to match.
     * @param _pack The Content Pack to remove from the manager
     */
    public DeleteMember(_pack : FightSheet, _member : FightMember) {
        let i = 0;
        for (i = 0; i < _pack.Members.length; i++) {
            if (_member == _pack.Members[i]) {
                _pack.Members.splice(i, 1);
                break;
            }
        }
        
        this.SetStorage();
    }

    /**
     * Remove a Content Pack from the manager and
     * update the stored information to match.
     * @param _pack The Content Pack to remove from the manager
     */
    public DeleteNote(_pack : FightSheet, _member : INote) {
        let i = 0;
        for (i = 0; i < _pack.Notes.length; i++) {
            if (_member == _pack.Notes[i]) {
                _pack.Notes.splice(i, 1);
                break;
            }
        }
        
        this.SetStorage();
    }

    public NewNote(_pack : FightSheet) {
        const _note : INote = {
            title: "New Note",
            text: ""
        }

        _pack.Notes.push(_note);
        this.SetStorage();
    }

    public NewMember(_pack : FightSheet, _base : string, _faction : string, _elite : boolean) {
        const _member : IFightMember = {
            base_id : _base,
            faction_id : _faction,
            elite : _elite
        }

        _pack.Members.push(new FightMember(_member, _pack.Chapter));
        this.SetStorage();
    }

    public NewFight(_chapter : number, _title : string) {
        const msg = ""

        if (_title.trim().length <= 0) {
            return "The fight must have a Title";
        }
        if ((_chapter <= 0) || (_chapter > 3)) {
            return "The fight have a chapter from I to III.";
        }

        const _fight : IFightSheet = {            
            id : this.CalcID(_title.trim()),
            title : _title,
            notes : [],
            members : [],
            chapter : _chapter
        }

        this.FightList.push(new FightSheet(_fight))
        this.SetStorage();

        return msg;
    }

    public DuplicateFight(_fight : FightSheet) {        
        const NewMember : FightSheet = new FightSheet(_fight.ConvertToInterface());
        NewMember.Title = _fight.Title + " - Copy"
        NewMember.ID = this.CalcID(_fight.Title + " - Copy");
        
        this.FightList.push(NewMember);
        this.SetStorage();
    }

    public CalcID(_name : string) {
        const currentDate = new Date();
        const milliseconds = currentDate.getMilliseconds();
        
        return _name + milliseconds.toString();
    }
}

export {FightManager}