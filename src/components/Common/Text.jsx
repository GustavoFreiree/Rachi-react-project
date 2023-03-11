import styled from "styled-components";

const Block = styled.div`
	display: flex;
	flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : "column")};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : null};
	max-width: ${(props) => props.maxWidth};
	gap: ${(props) => props.gap};
	text-align: ${(props) => props.textAlign};
`;

const Title = styled.strong`
	font-size: ${(props) => (props.fontSize ? props.fontSize : "3.2rem")};
	max-width: ${(props) => props.maxWidth};
	color: ${(props) => props.theme.colors.gray200};
	text-align: ${(props) => props.textAlign};
	align-self: ${(props) => props.alignSelf};
`;

const Paragraph = styled.span`
	font-size: ${(props) => (props.fontSize ? props.fontSize : "1.6rem")};
	max-width: ${(props) => props.maxWidth};
	color: ${(props) => props.theme.colors.gray};
	line-height: ${(props) =>
		props.lineHeight ? props.lineHeight : "2.6rem"};
	text-align: ${(props) => props.textAlign};
	align-self: ${(props) => props.alignSelf};
`;

export default Text = {
	Block,
	Title,
	Paragraph,
};
