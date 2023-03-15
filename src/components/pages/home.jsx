//libs
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
//components
import { Section, Wrapper } from "../Common/Section";
import { Button } from "../Common/Button";
import { ApplicationAtributesContainer } from "../Common/ApplicationAtributes";
import { Card } from "../Common/Card";
import { Input } from "../Common/Input";
import Text from "./../Common/Text";

//images
import illustration1 from "../../assets/illustration1.svg";
import illustration2 from "../../assets/illustration2.svg";
import userConnection from "../../assets/user.svg";
import security from "../../assets/security.svg";
import happy from "../../assets/happy.svg";
import appStore from "../../assets/app-store.svg";
import googlePlay from "../../assets/google-play.svg";

const MainSection = styled.main`
	& section:nth-child(odd) {
		background-color: ${(props) => props.theme.colors.white200};
	}
`;

const floatingIllustrationAnim = keyframes`
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-20px);
	}
	100% {
		transform: translateY(0px);
	}
`;

const IllustrationImage = styled.img`
	width: 50rem;
	user-select: none;
	transition: scale 0.3s, filter 0.3s;
	animation: ${floatingIllustrationAnim} 6s linear infinite;
	filter: drop-shadow(1px 20px 20px rgba(15, 154, 254, 0.26));

	&:hover {
		scale: 1.03;
	}

	@media screen and (max-width: 1000px) {
		&:hover {
			scale: 1;
		}
	}

	@media screen and (max-width: 650px) {
		display: none;
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

const DownloadCard = styled.img`
	width: 16.5rem;
	transition: filter 0.3s;

	:hover {
		cursor: pointer;
		filter: drop-shadow(1px 20px 20px rgba(15, 154, 254, 0.26));
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

const cardList = [
	{
		titleName: "Bronze",
		emphasis: false,
		value: 28,
	},
	{
		titleName: "Prata",
		emphasis: true,
		value: 57,
	},
	{
		titleName: "Ouro",
		emphasis: false,
		value: 94,
	},
];

export const Home = (props) => {
	const { setNavItems } = props;
	const refs = {
		functionalitiesRef: useRef(null),
		appRef: useRef(null),
		plansRef: useRef(null),
		contactRef: useRef(null),
	};

	useEffect(() => {
		setNavItems(refs);
	}, []);

	return (
		<MainSection>
			<Section
				displayFlex
				alignItems="center"
				justifyContent="center"
				gap="10%"
				flexFlow="row wrap"
				padding="6.5rem 5rem"
			>
				<ContentWithButton>
					<Text.Title maxWidth="50rem" fontSize="4.5rem">
						Rachi, é tudo o que você precisa em um só lugar.
					</Text.Title>
					<Button rounded>Cadastrar-se</Button>
				</ContentWithButton>
				<IllustrationImage src={illustration1} alt="" />
			</Section>
			<Section
				ref={refs.functionalitiesRef}
				displayFlex
				flexFlow="column"
				alignItems="center"
				gap="5rem"
				padding="10rem 5rem"
			>
				<Text.Title>Como funciona?</Text.Title>

				<ApplicationAtributesContainer atributes={atributes} />
			</Section>
			<Section
				ref={refs.appRef}
				displayFlex
				flexFlow="row wrap"
				justifyContent="center"
				alignItems="center"
				gap="13%"
				padding="6.5rem 5rem"
			>
				<Text.Block textAlign="normal" gap="2.4rem">
					<Text.Title maxWidth="60rem">
						Baixe nosso app para desfrutar mais!
					</Text.Title>
					<Text.Paragraph maxWidth="44.4rem">
						Amet in elementum nulla scelerisque dui, egestas
						at. Elit consectetur turpis elementum amet vitae
						et etiam nec. Varius volutpat hac adipiscing
						tincidunt pretium.
					</Text.Paragraph>
					<Wrapper>
						<DownloadCard src={appStore} alt="" />
						<DownloadCard src={googlePlay} alt="" />
					</Wrapper>
				</Text.Block>
				<IllustrationImage src={illustration2} alt="" />
			</Section>
			<Section
				ref={refs.plansRef}
				displayFlex
				flexFlow="column"
				alignItems="center"
				gap="5.8rem"
				padding="6.5rem 5rem"
			>
				<Text.Block gap="2.4rem" textAlign="center">
					<Text.Title>Nossos planos</Text.Title>
					<Text.Paragraph fontSize="1.8rem" maxWidth="57rem">
						Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Donec lacinia mi quis euismod ultrices.
					</Text.Paragraph>
				</Text.Block>

				<Card list={cardList} />
			</Section>
			<Section
				ref={refs.contactRef}
				displayFlex
				alignItems="center"
				padding="6.5rem 5rem"
				flexFlow="column nowrap"
				gap="5.8rem"
			>
				<Text.Block textAlign="center" gap="1.6rem">
					<Text.Title>Contato</Text.Title>
					<Text.Paragraph maxWidth="52.8rem">
						Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Donec lacinia mi quis euismod ultrices.
					</Text.Paragraph>
				</Text.Block>
				<Wrapper
					displayFlex
					justifyContent="center"
					gap="4rem"
					flexFlow="row wrap"
				>
					<Input placeHolder="seuemail@mail.com" />
					<Button rounded>Enviar </Button>
				</Wrapper>
			</Section>
			<Section
				displayFlex
				justifyContent="center"
				padding="3.5rem 5rem"
			>
				<Text.Block textAlign="center">
					<Text.Paragraph fontSize="2rem">
						Rachi - Todos os direitos reservados.
					</Text.Paragraph>
					<Text.Paragraph>
						&copy;GustavoFreire 2023
					</Text.Paragraph>
				</Text.Block>
			</Section>
		</MainSection>
	);
};
