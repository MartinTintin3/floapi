import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import Grade from "./grade";
import Location from "./location";

namespace Wrestler {
	export type Attributes = {
		identityPersonId: UUID;
		city: string;
		divisionId: UUID;
		eventId: UUID;
		exactWeight: number;
		firstName: string;
		fullName: string;
		lastName: string;
		grade: Grade.Object;
		gradeId: UUID | null;
		createdByUserId: string;
		createdDateTimeUtc: string;
		modifiedByUserId: string | null;
		modifiedDateTimeUtc: string;
		dateOfBirth: string | null;
		gender: string;
		isSkinChecked: boolean;
		isTeamScorer: boolean;
		isWeighInOk: boolean;
		location: Location.Object;
		nickname: string | null;
		state: string;
		teamId: UUID;
		weightClassId: UUID;
		withdrawn: boolean;
		zipCode: string | null;
	}
	
	export type Identifier = ObjectIdentifier & {
		type: "wrestler";
	}
	
	export type Object = FloBaseObject<Identifier, Attributes>;
}

export default Wrestler;