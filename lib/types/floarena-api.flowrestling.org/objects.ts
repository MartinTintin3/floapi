import * as Bout from "./objects/bout";
import * as Bracket from "./objects/bracketPlacement";
import * as Division from "./objects/division";
import * as Event from "./objects/event";
import * as Grade  from "./objects/grade";
import * as RoundName  from "./objects/roundName";
import * as Team from "./objects/team";
import * as WeightClass  from "./objects/weightClass";
import * as Wrestler  from "./objects/wrestler";

export { Bout, Bracket, Division, Event, Grade, RoundName, Team, WeightClass, Wrestler };

export type FloObject = Bout.Object | Division.Object | Event.Object | Grade.Object | RoundName.Object | Team.Object | WeightClass.Object | Wrestler.Object | Bracket.Object;