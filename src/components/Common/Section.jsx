import { forwardRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
	font-size: 1.6rem;
	display: flex;
	justify-content: center;
`;

const WrapperContainer = styled.div`
	max-width: ${(props) => props.theme.spacing.sectionPadding};
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: auto auto;
	width: 100%;
	${(props) =>
		props.displayFlex &&
		`
		display: flex;
		justify-content: ${props.justifyContent};
		align-content: ${props.alignContent};
		align-items: ${props.alignItems};
		flex-flow: ${props.flexFlow};
		padding: ${props.padding};
		gap: ${props.gap};
	`}
`;

export const Wrapper = (props) => {
	const { children, ...rest } = props;
	return <WrapperContainer {...rest}>{children}</WrapperContainer>;
};

export const Section = forwardRef((props, ref) => {
	const { children, ...rest } = props;
	return (
		<SectionContainer ref={ref}>
			<WrapperContainer {...rest}>{children}</WrapperContainer>
		</SectionContainer>
	);
});
