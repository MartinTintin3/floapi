import type { FloBaseObject, ObjectIdentifier, UUID } from "../types";

export type BracketPlacementAttributes = {
	boutId: UUID;
	boutPoolId: UUID;
	createdByUserId: string;
	createDateTimeUtc: string;
	eventId: UUID;
	modifiedByUserId: string;
	modifiedDateTimeUtc: string;
	placement: number;
	placementDisplay: string;
	winnerPoints: number;
	wrestlerId: UUID;
}

export type BracketPlacementIdentifier = ObjectIdentifier & {
	type: "bracketPlacement";
}

export type BracketPlacementObject = FloBaseObject<BracketPlacementIdentifier, BracketPlacementAttributes>;