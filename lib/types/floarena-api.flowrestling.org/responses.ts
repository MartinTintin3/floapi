import { Nothing } from "../..";
import * as Relationships from "./relationships";
import { BoutObject, FloObject, WrestlerObject } from "./types";

export type Base<O extends FloObject, R extends Relationships.Generic | Nothing, I = Exclude<FloObject, O> | undefined> = {
	data: Array<O & (R extends Nothing ? Nothing : { relationships: R })>;
	meta: {
		total: number;
	}
	links?: {
		first: string;
		last?: string;
		next?: string;
		prev?: string;
	},
} & ([I] extends [Nothing] ? Nothing : { included: Array<I> });

export type Bouts<R extends Relationships.ToBout | Nothing, I extends Exclude<FloObject, BoutObject> | Nothing> = Base<BoutObject, R, I>;
export type Wrestlers<R extends Relationships.ToWrestler | Nothing, I extends Exclude<FloObject, WrestlerObject> | Nothing> = Base<WrestlerObject, R, I>;