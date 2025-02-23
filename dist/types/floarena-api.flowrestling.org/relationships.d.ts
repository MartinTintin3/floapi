import Bout from "./objects/bout";
import BracketPlacement from "./objects/bracketPlacement";
import Division from "./objects/division";
import Event from "./objects/event";
import Grade from "./objects/grade";
import RoundName from "./objects/roundName";
import Team from "./objects/team";
import WeightClass from "./objects/weightClass";
import Wrestler from "./objects/wrestler";
declare namespace Relationships {
    type Generic = BracketPlacement | TopWrestler | BottomWrestler | WeightClass | Team | RoundName | Grade | Division | Event | Bout;
    type ToWrestler = Exclude<Generic, TopWrestler | BottomWrestler>;
    type ToBout = Exclude<Generic, Bout>;
    type TopWrestler = {
        topWrestler: {
            data: Wrestler.Identifier;
        };
    };
    type BottomWrestler = {
        bottomWrestler: {
            data: Wrestler.Identifier;
        };
    };
    type WeightClass = {
        weightClass: {
            data: WeightClass.Identifier;
        };
    };
    type Team = {
        team: {
            data: Team.Identifier;
        };
    };
    type RoundName = {
        roundName: {
            data: RoundName.Identifier;
        };
    };
    type Grade = {
        grade: {
            data: Grade.Identifier;
        };
    };
    type Division = {
        division: {
            data: Division.Identifier;
        };
    };
    type Bout = {
        bout: {
            data: Bout.Identifier;
        };
    };
    type Event = {
        event: {
            data: Event.Identifier;
        };
    };
    type BracketPlacement = {
        bracketPlacements: {
            data: BracketPlacement.Identifier[];
        };
    };
    type AllToBout = TopWrestler & BottomWrestler & WeightClass & RoundName & Event;
    type AllToWrestler = Team & Division & Event & WeightClass & BracketPlacement;
}
export default Relationships;
//# sourceMappingURL=relationships.d.ts.map