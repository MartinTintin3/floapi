import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
declare namespace Bout {
    type Attributes = {
        eventId: UUID;
        dualId: UUID | null;
        bottomWrestlerId: UUID;
        bottomWrestlerScore: number;
        boutNumber: string;
        boutPoolId: UUID;
        bracketSize: number;
        createdDateTimeUtc: string;
        endDateTime: string;
        goDateTime: string;
        isBottomBye: boolean;
        isConfirmed: boolean;
        isConsolation: boolean;
        isInProgress: boolean;
        isPlace: boolean;
        isPrinted: boolean;
        isRepechange: boolean;
        isTopBye: boolean;
        loserToBoutId: string | null;
        mat: UUID | null;
        matchQueueId: UUID;
        maxPlace: number;
        modifiedDateTimeUtc: string;
        naturalRound: number;
        redWrestler: UUID;
        result: string;
        roundNameId: UUID;
        roundSpot: number;
        sequenceNumber: number;
        staticSequenceNumber: number;
        topWrestlerId: UUID;
        topWrestlerScore: number;
        trueRound: number;
        weightClassId: UUID;
        winType: string;
        winnerPoints: number;
        winnerToBoutId: UUID;
        winnerToTop: boolean;
        winnerWrestlerId: UUID;
    };
    type Identifier = ObjectIdentifier & {
        type: "bout";
    };
    type Object = FloBaseObject<Identifier, Attributes>;
}
export default Bout;
//# sourceMappingURL=bout.d.ts.map