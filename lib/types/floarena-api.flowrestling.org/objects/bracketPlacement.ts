import { FloBaseObject, ObjectIdentifier, UUID } from "../types";

namespace BracketPlacement {
	export type Attributes = {
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
	
	export type Identifier = ObjectIdentifier & {
		type: "bracketPlacement";
	}
	
	export type Object = FloBaseObject<Identifier, Attributes>;
}

export default BracketPlacement;