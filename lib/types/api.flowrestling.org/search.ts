/* eslint-disable @typescript-eslint/naming-convention */
export type SearchResultsTyped<O extends boolean> = O extends true ? SearchResults<SearchResultPersonUseOfp> : SearchResults<SearchResultPerson>;

export type NodeResult = {
	meta: {
		page: number;
		pages: number;
		limit: number;
		total: number;
		max_pages: number;
		max_limit: number;
		source: string;
		duration: number;
		sites: number[];
		type: string;
		extra: unknown;
	};
	data: {
		asset_url: string;
		thumbnail_url: string;
		should_show_read_more: boolean;
		drill_through_link: string | null;
		meta_collections_page_title: string;
        meta_collections_page_description: string;
        meta_collections_videos_page_title: string;
        meta_collections_videos_page_description: string;
        meta_collections_entries_page_title: string;
        meta_collections_entries_page_description: string;
        meta_collections_schedule_page_title: string;
        meta_collections_schedule_page_description: string;
        meta_collections_news_page_title: string;
        meta_collections_news_page_description: string;
		metadata_filters: {
			id: number;
			type: string;
		}[];
		aggregated_node_ids: number[];
		title: string;
		short_title: string;
		code: unknown;
		arena_person_identity_id: string;
		slug: string;
		slug_uri: string;
		original_entity: SearchResultPerson;
	}
}

export type SearchResultPerson = {
	arena_person_identity_id: string;
	asset: {
		size_label: string;
		raw_url: string;
		id: number;
		title: string;
		source: string;
		url: string;
		status_code: number;
		path: string;
		copied: boolean;
		duplicated: boolean;
		file_type: string;
		created_at: string;
		modified_at: string;
	};
	node: {
		id: number;
	};
	asset_url: string;
	birth_date: string | null;
	created_at: string;
	name: string;
	first_name: string;
	middle_name: string | null;
	last_name: string;
	nickname: string | null;
	title: string;
	short_title: string | null;
	slug: string;
	slug_uri: string;
	status: number;
	status_color: string;
	status_text: string;
	thumbnail_url: string;
	type: string;
	shareable_link: string;
	is_flo_college: boolean;
	gender: "m" | "f" | null;
	high_school_grad_year: number;
	id: number;
	location: {
		city: string;
		country: string;
		google_place_id: string;
		id: number;
		lattitude: number;
		longitude: number;
		name: string;
		state: string;
		street: string | null;
		timezone: string | null;
		zip_code: string | null;
	};
	modified_at: string;
}

export type SearchResultPersonUseOfp = {
	asset_url: string;
	duration: number;
	id: string;
	modified_at: string;
	node: {
		id: number;
	};
	premium: boolean;
	publish_start_date: string;
	slug_uri: string;
	title: string;
	type: "person";
}

export type SearchResults<D extends SearchResultPerson | SearchResultPersonUseOfp> = {
	data: D[] | null;
	meta: {
		duration: number;
		limit: number;
		max_limit: number;
		max_pages: number;
		offset: number;
		page: number;
		pages: number;
		sites: number[];
		source: string;
		total: number;
		type: string;
		extra: [
			{
				response: {
					ids: {
						person: string[];
					},
					sortSeq: Record<string, number>
				}
			}
		]
	}
}