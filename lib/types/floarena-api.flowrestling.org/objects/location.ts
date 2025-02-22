import { UUID } from "../types";

namespace Location {
	export type Object = {
		address: string | null;
		city: string | null;
		country: string | null;
		googlePlaceId: string | null;
		id: UUID;
		latitude: number | null;
		longitude: number | null;
		name: string | null;
		state: string | null;
		zipCode: string | null;
	}
}

export default Location;