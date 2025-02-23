import Bout from "./objects/bout";
import BracketPlacement from "./objects/bracketPlacement";
import Division from "./objects/division";
import Event from "./objects/event";
import Grade from "./objects/grade";
import RoundName from "./objects/roundName";
import Team from "./objects/team";
import WeightClass from "./objects/weightClass";
import Wrestler from "./objects/wrestler";

export namespace Relationships {
	export type Generic = BracketPlacement | TopWrestler | BottomWrestler | WeightClass | Team | RoundName | Grade | Division | Event | Bout;

	export type ToWrestler = Exclude<Generic, TopWrestler | BottomWrestler>;
	export type ToBout = Exclude<Generic, Bout>;

	export type TopWrestler = { topWrestler: { data: Wrestler.Identifier } };
	export type BottomWrestler = { bottomWrestler: { data: Wrestler.Identifier } };
	export type WeightClass = { weightClass: { data: WeightClass.Identifier } };
	export type Team = { team: { data: Team.Identifier } };
	export type RoundName = { roundName: { data: RoundName.Identifier } };
	export type Grade = { grade: { data: Grade.Identifier } };
	export type Division = { division: { data: Division.Identifier } };
	export type Bout = { bout: { data: Bout.Identifier } };
	export type Event = { event: { data: Event.Identifier } };
	export type BracketPlacement = { bracketPlacements: { data: BracketPlacement.Identifier[] } };

	export type AllToBout = TopWrestler & BottomWrestler & WeightClass & RoundName & Event;
	export type AllToWrestler = Team & Division & Event & WeightClass & BracketPlacement;
}