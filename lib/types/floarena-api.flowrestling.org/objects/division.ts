import type { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import type { GradeObject } from "./grade";

export type DivisionAttributes = {
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
	oldestGrade: GradeObject;
	oldestGradeId: UUID;
	publishBrackets: boolean;
	sequence: number;
	teamScoreGroupId: UUID;
	weighInEndDateTime: string;
	weighInStartDateTime: string;
	youngestGrade: GradeObject;
	youngestGradeId: UUID;
}

export type DivisionIdentifier = ObjectIdentifier & {
	type: "division";
}

export type DivisionObject = FloBaseObject<DivisionIdentifier, DivisionAttributes>;