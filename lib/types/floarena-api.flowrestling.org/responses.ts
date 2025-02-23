import { Nothing } from "../..";
import * as Relationships from "./relationships";
import { BoutObject, FloObject, WrestlerObject } from "./types";

export type Base<O extends FloObject, R extends Relationships.Generic | void, I = Exclude<FloObject, O> | void> = {
	data: Array<O & (R extends void ? Nothing : { relationships: R })>;
	meta: {
		total: number;
	}
	links?: {
		first: string;
		last?: string;
		next?: string;
		prev?: string;
	},
} & ([I] extends [void] ? Nothing : { included: Array<I> });

export type Bouts<R extends Relationships.ToBout | void, I extends Exclude<FloObject, BoutObject> | void> = Base<BoutObject, R, I>;
export type Wrestlers<R extends Relationships.ToWrestler | void, I extends Exclude<FloObject, WrestlerObject> | void> = Base<WrestlerObject, R, I>;