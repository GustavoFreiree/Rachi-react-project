import styled from "styled-components";

export const Button = styled.button`
	padding: 1.6rem 3.6rem;
	font-size: 2rem;
	user-select: none;
	background-color: ${(props) => props.theme.whiteColors.blue};
	color: ${(props) => props.theme.whiteColors.white};
	border: none;
	transition: background-color 0.3s, box-shadow 0.3s;
	border-radius: 1rem;

	${(props) =>
		props.rounded &&
		`
        border-radius: 5rem;
    `}

	&:hover {
		background-color: ${(props) => props.theme.whiteColors.blue200};
		cursor: pointer;
		box-shadow: 1px 3px 10px rgba(19, 125, 224, 0.5);
	}
`;
