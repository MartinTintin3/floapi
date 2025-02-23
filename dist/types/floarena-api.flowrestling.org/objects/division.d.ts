import { FloBaseObject, ObjectIdentifier, UUID } from "../types";
import Grade from "./grade";
declare namespace Division {
    type Attributes = {
        abbreviation: string | null;
        createdByUserId: string;
        createdDateTimeUtc: string;
        displayBlackWhite: boolean;
        divisionGroupingType: "grade";
        divisionProfileId: UUID;
        enableSeperateion: boolean;
        eventId: UUID;
        eventTimeZone: string;
        floLevelId: UUID;
        hideByes: boolean;
        isDual: boolean;
        isVarsity: boolean;
        maskSeeds: boolean;
        maxPerBracket: number;
        measurementUnit: "lbs";
        modifiedByUserId: string;
        modifiedDateTimeUtc: string;
        name: string;
        oldestGrade: Grade.Object;
        oldestGradeId: UUID;
        publishBrackets: boolean;
        sequence: number;
        teamScoreGroupId: UUID;
        weighInEndDateTime: string;
        weighInStartDateTime: string;
        youngestGrade: Grade.Object;
        youngestGradeId: UUID;
    };
    type Identifier = ObjectIdentifier & {
        type: "division";
    };
    type Object = FloBaseObject<Identifier, Attributes>;
}
export default Division;
//# sourceMappingURL=division.d.ts.map