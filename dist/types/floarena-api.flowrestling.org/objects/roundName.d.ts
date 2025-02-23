import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
declare namespace RoundName {
    type Attributes = {
        createdByUserId: string;
        createdDateTimeUtc: string;
        modifiedByUserId: string | null;
        modifiedDateTimeUtc: string | null;
        eventId: UUID;
        systemName: string;
        displayName: string;
        sequence: number;
        visibility: number;
    };
    type Identifier = ObjectIdentifier & {
        type: "roundName";
    };
    type Object = FloBaseObject<Identifier, Attributes>;
}
export default RoundName;
//# sourceMappingURL=roundName.d.ts.map