import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { Wrapper } from "./Section";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: center;
	padding: 1.5rem 0;
`;

const Logo = styled.img`
	width: 10rem;
`;

const Navbar = styled.nav`
	display: flex;
	gap: 6.6rem;

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

const Anchor = styled.a`
	font-size: 1.8rem;
	transition: color 0.3s;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.grayLight};
	}
`;

export const Header = () => {
	return (
		<HeaderContainer>
			<Wrapper displayFlex justifyContent="space-between">
				<Logo src={logo} alt="" />
				<Navbar>
					<Anchor>Funcionalidades</Anchor>
					<Anchor>App</Anchor>
					<Anchor>Planos</Anchor>
					<Anchor>Contato</Anchor>
				</Navbar>
			</Wrapper>
		</HeaderContainer>
	);
};
