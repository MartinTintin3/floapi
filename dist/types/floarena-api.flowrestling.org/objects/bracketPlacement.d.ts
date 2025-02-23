import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
declare namespace BracketPlacement {
    type Attributes = {
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
    };
    type Identifier = ObjectIdentifier & {
        type: "bracketPlacement";
    };
    type Object = FloBaseObject<Identifier, Attributes>;
}
export default BracketPlacement;
//# sourceMappingURL=bracketPlacement.d.ts.map