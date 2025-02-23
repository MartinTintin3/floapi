import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import { LocationObject } from "./location";

export type TeamAttributes = {
	abbreviation: string | null;
	city: string | null;
	createdByUserId: number;
	createdDateTimeUtc: string;
	eventId: UUID;
	identityTeamId: UUID | null;
	location: LocationObject;
	modifiedByUserId: number | null;
	modifiedDateTimeUtc: string | null;
	name: string;
	registeredWrestlerCount: number;
	state: string | null;
	zipCode: string | null;
}

export type TeamIdentifier = ObjectIdentifier & {
	type: "team";
}

export type TeamObject = FloBaseObject<TeamIdentifier, TeamAttributes>;