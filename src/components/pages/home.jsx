import styled from "styled-components";
import { Section } from "../Common/Section";
import { Button } from "../Common/Button";
import { ApplicationAtributesContainer } from "../Common/ApplicationAtributes";

import illustration1 from "../../assets/illustration1.svg";
import userConnection from "../../assets/user.svg";
import security from "../../assets/security.svg";
import happy from "../../assets/happy.svg";

const Main = styled.main`
	& > section:nth-child(odd) {
		background-color: ${(props) => props.theme.colors.white200};
	}
`;

const Illustration = styled.img`
	width: 50rem;

	@media screen and (max-width: 1000px) {
		width: 40rem;
	}
`;

const ContentWithButton = styled.div`
	display: flex;
	flex-flow: column;
	gap: 3rem;
	font-size: 3rem;

	& > h1 {
		max-width: 35rem;
	}

	& > button {
		width: 20rem;
	}
`;

const atributes = [
	{
		imgSrc: userConnection,
		title: "Crie conexões",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
	},
	{
		imgSrc: security,
		title: "100% gratuito",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
	},
	{
		imgSrc: happy,
		title: "Compartilhamento",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
	},
];

export const Home = () => {
	return (
		<Main>
			<Section
				displayFlex
				alignItems="center"
				justifyContent="center"
				gap="10%"
				flexFlow="row wrap"
			>
				<ContentWithButton>
					<h1>
						Rachi, é tudo o que você precisa em um só lugar.
					</h1>
					<Button rounded>Cadastrar-se</Button>
				</ContentWithButton>
				<Illustration src={illustration1} alt="" />
			</Section>
			<Section
				displayFlex
				flexFlow="column"
				alignItems="center"
				gap="5rem"
				padding="6rem 0"
			>
				<h1>Como funciona?</h1>

				<ApplicationAtributesContainer atributes={atributes} />
			</Section>
			<Section></Section>
		</Main>
	);
};
