import styled from "styled-components";

export const NavWrapper = styled.nav`
	ul {
		list-style-type: none;
		display: flex;
	}
	li {
		padding: 0;
		margin: 0 0 0 10px;
		&:first-child {
			margin: 0;
		}
	}

	a {
		color: orange;
		text-decoration: none;
	}

	.active {
		color: red;
	}
`;
