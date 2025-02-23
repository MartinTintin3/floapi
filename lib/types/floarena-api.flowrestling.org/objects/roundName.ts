import { FloBaseObject, ObjectIdentifier, UUID } from "../types";

export type Attributes = {
	createdByUserId: string;
	createdDateTimeUtc: string;
	modifiedByUserId: string | null;
	modifiedDateTimeUtc: string | null;
	eventId: UUID;
	systemName: string;
	displayName: string;
	sequence: number;
	visibility: number;
}

export type Identifier = ObjectIdentifier & {
	type: "roundName";
}

export type Object = FloBaseObject<Identifier, Attributes>;