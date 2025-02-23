import { Nothing } from "../..";
import { Relationships } from "./relationships";
import { Bout, FloObject, UUID, Wrestler } from "./types";

export namespace Responses {
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
	
	export type Bouts<R extends Relationships.ToBout | void, I extends Exclude<FloObject, Bout.Object> | void> = Base<Bout.Object, R, I>;
	export type Wrestlers<R extends Relationships.ToWrestler | void, I extends Exclude<FloObject, Wrestler.Object> | void> = Base<Wrestler.Object, R, I>;
}