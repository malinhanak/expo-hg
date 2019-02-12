import gql from "graphql-tag";

const SUBSCRIBE_USER_UPDATED = gql`
	subscription userUpdated {
		userUpdated {
			id
			fullName
			inventory {
				EAN
			}
			cart {
				EAN
				name
				qty
				price
			}
		}
	}
`;

export default SUBSCRIBE_USER_UPDATED