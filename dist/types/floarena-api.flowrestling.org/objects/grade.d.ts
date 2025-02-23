import { FloBaseObject, ObjectIdentifier } from "../types";
declare namespace Grade {
    type Attributes = {
        name: string;
        numericValue: number;
        sequence: number;
    };
    type Identifier = ObjectIdentifier & {
        type: "grade";
    };
    type Object = FloBaseObject<Identifier, Attributes>;
}
export default Grade;
//# sourceMappingURL=grade.d.ts.map