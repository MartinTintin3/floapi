import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import Location from "./location";

namespace Event {
	export type Attributes = {
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
		location: Location.Object;
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

	export type Identifier = ObjectIdentifier & {
		type: "event";
	}

	export type Object = FloBaseObject<Identifier, Attributes>;
}

export default Event;