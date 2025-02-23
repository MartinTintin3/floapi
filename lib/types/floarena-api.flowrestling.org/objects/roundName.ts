import type { FloBaseObject, ObjectIdentifier, UUID } from "../types";

export type RoundNameAttributes = {
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

export type RoundNameIdentifier = ObjectIdentifier & {
	type: "roundName";
}

export type RoundNameObject = FloBaseObject<RoundNameIdentifier, RoundNameAttributes>;