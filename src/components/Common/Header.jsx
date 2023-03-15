import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { Wrapper } from "./Section";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: center;
	padding: 2.5rem 3rem;
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
	transition: color 0.4s;

	display: flex;
	flex-flow: column;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.grayLight};

		&::after {
			width: 75%;
		}
	}

	&::after {
		content: "";
		margin: auto;
		height: 0.1rem;
		background-color: ${(props) => props.theme.colors.blue200};
		transition: width 0.4s;
		width: 0;
	}
`;

export const Header = (props) => {
	const { navItems } = props;
	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<HeaderContainer>
			<Wrapper displayFlex justifyContent="space-between">
				<Logo src={logo} alt="" />
				<Navbar>
					<Anchor
						onClick={() =>
							scrollToSection(navItems.functionalitiesRef)
						}
					>
						Funcionalidades
					</Anchor>
					<Anchor
						onClick={() => scrollToSection(navItems.appRef)}
					>
						App
					</Anchor>
					<Anchor
						onClick={() => scrollToSection(navItems.plansRef)}
					>
						Planos
					</Anchor>
					<Anchor
						onClick={() =>
							scrollToSection(navItems.contactRef)
						}
					>
						Contato
					</Anchor>
				</Navbar>
			</Wrapper>
		</HeaderContainer>
	);
};
