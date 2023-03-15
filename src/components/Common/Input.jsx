import styled from "styled-components";

const InputContainer = styled.input`
	border: none;
	background-color: transparent;
	font-size: 1.8rem;
	padding: 1rem;
	width: 100%;

	color: ${(props) => props.theme.whiteColors.gray200};
	border-bottom: 1px solid ${(props) => props.theme.whiteColors.gray200};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : "30rem")};
	transition: border-bottom 0.3s;

	:focus {
		outline: none;
		border-bottom: 1px solid ${(props) => props.theme.whiteColors.blue200};
	}
`;

export const Input = (props) => {
	const { placeHolder } = props;
	return <InputContainer placeholder={placeHolder} />;
};
