import { BoutsIncludeAll, FloObjectTypeString, WrestlersIncludeAll } from "./consts";
import * as Bout from "./objects/bout";
import * as BracketPlacement from "./objects/bracketPlacement";
import * as Division from "./objects/division";
import * as Event from "./objects/event";
import * as Grade from "./objects/grade";
import * as RoundName from "./objects/roundName";
import * as Team from "./objects/team";
import * as WeightClass from "./objects/weightClass";
import * as Wrestler from "./objects/wrestler";

export { Bout, BracketPlacement, Division, Event, Grade, RoundName, Team, WeightClass, Wrestler };
export * as Responses from "./responses";
export * as Relationships from "./relationships";

export type UUID = string;
export type ObjectIdentifier = {
	type: FloObjectTypeString;
	id: UUID;
}

export type FloBaseObject<Identifier, Attributes> = Identifier & {
	attributes: Attributes;
}

export type FloObject = Bout.BoutObject | Division.DivisionObject | Event.EventObject | Grade.GradeObject | RoundName.RoundNameObject | Team.TeamObject | WeightClass.WeightClassObject | Wrestler.WrestlerObject | BracketPlacement.BracketPlacementObject;

export type BoutsIncludeString = typeof BoutsIncludeAll[number];
export type WrestlersIncludeString = typeof WrestlersIncludeAll[number];

export type NonNullableFields<T> = {
	[P in keyof T]: NonNullable<T[P]>;
};