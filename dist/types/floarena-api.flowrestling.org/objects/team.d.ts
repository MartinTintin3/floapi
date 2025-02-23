import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import Location from "./location";
declare namespace Team {
    type Attributes = {
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
    };
    type Identifier = ObjectIdentifier & {
        type: "team";
    };
    type Object = FloBaseObject<Identifier, Attributes>;
}
export default Team;
//# sourceMappingURL=team.d.ts.map