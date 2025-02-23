import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
declare namespace WeightClass {
    type Attributes = {
        createdByUserId: number;
        createdDateTimeUtc: string;
        divisionId: UUID;
        eventId: UUID;
        maxWeight: number;
        maxWrestlerCount: number | null;
        minWeight: number;
        modifiedByUserId: number;
        modifiedDateTimeUtc: string;
        name: string;
        sequence: number;
    };
    type Identifier = ObjectIdentifier & {
        type: "weightClass";
    };
    type Object = FloBaseObject<Identifier, Attributes>;
}
export default WeightClass;
//# sourceMappingURL=weightClass.d.ts.map