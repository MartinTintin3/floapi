import type { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import type { LocationObject } from "./location";

export type EventAttributes = {
	apiHost: string;
	city: string;
	clonedFromEventId: UUID | null;
	createdDateTimeUtc: string;
	description: string;
	endDateTime: string;
	firebasehost: string;
	isArenaSync: boolean;
	isDual: boolean;
	isLivescorerTestMode: boolean;
	isParticipantWaiverRequired: boolean;
	isPresetTeams: boolean;
	isSetupComplete: boolean;
	isTestEvent: boolean;
	isVisible: boolean;
	location: LocationObject;
	locationName: string;
	maxWrestlerCount: number | null;
	modifiedDateTimeUtc: string;
	name: string;
	participantAlias: string;
	participantAliasPlural: string;
	registrationReceiptMsg: string;
	resultsEmailsSentDateTime: string | null;
	sendAnnouncerChatsToAdmins: boolean;
	startDateTime: string;
	state: string;
	stripeAccountId: string;
	timeZone: string;
	websiteUrl: string;
}

export type EventIdentifier = ObjectIdentifier & {
	type: "event";
}

export type EventObject = FloBaseObject<EventIdentifier, EventAttributes>;