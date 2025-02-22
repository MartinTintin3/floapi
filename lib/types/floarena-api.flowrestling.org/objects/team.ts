import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import Location from "./location";

namespace Team {
	export type Attributes = {
		abbreviation: string | null;
		city: string | null;
		createdByUserId: number;
		createdDateTimeUtc: string;
		eventId: UUID;
		identityTeamId: UUID | null;
		location: Location.Object;
		modifiedByUserId: number | null;
		modifiedDateTimeUtc: string | null;
		name: string;
		registeredWrestlerCount: number;
		state: string | null;
		zipCode: string | null;
	}
	
	export type Identifier = ObjectIdentifier & {
		type: "team";
	}
	
	export type Object = FloBaseObject<Identifier, Attributes>;
}
export default Team;