import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import * as Grade from "./grade";

export type Attributes = {
	abbreviation: string | null;
	createdByUserId: string;
	createdDateTimeUtc: string;
	displayBlackWhite: boolean;
	divisionGroupingType: "grade";
	divisionProfileId: UUID;
	enableSeperateion: boolean;
	eventId: UUID;
	eventTimeZone: string;
	floLevelId: UUID;
	hideByes: boolean;
	isDual: boolean;
	isVarsity: boolean;
	maskSeeds: boolean;
	maxPerBracket: number;
	measurementUnit: "lbs";
	modifiedByUserId: string;
	modifiedDateTimeUtc:string;
	name: string;
	oldestGrade: Grade.Object;
	oldestGradeId: UUID;
	publishBrackets: boolean;
	sequence: number;
	teamScoreGroupId: UUID;
	weighInEndDateTime: string;
	weighInStartDateTime: string;
	youngestGrade: Grade.Object;
	youngestGradeId: UUID;
}

export type Identifier = ObjectIdentifier & {
	type: "division";
}

export type Object = FloBaseObject<Identifier, Attributes>;