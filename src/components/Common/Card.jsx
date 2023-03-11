import styled from "styled-components";
import Text from "./Text";
import { Button } from "./Button";

const CardBox = styled.div`
	display: flex;
	flex-flow: column;
	max-width: 37rem;
	background-color: ${(props) =>
		props.emphasis
			? props.theme.colors.gray200
			: props.theme.colors.white200};
	padding: 3.5rem;
	border-radius: 8px;
	gap: 6rem;
	transition: filter 0.5s;
	:hover {
		filter: drop-shadow(0px 0px 75px rgba(0, 149, 255, 0.315));
	}
`;

const CardBoxContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 3rem;
	align-items: center;
	justify-content: center;
`;

export const Card = (props) => {
	const { list } = props;
	return (
		<CardBoxContainer>
			{list.map(({ titleName, emphasis }) => {
				return (
					<CardBox emphasis={emphasis} key={titleName}>
						<Text.Block textAlign="center" gap="5rem">
							<Text.Title fontSize="2.4rem">
								{titleName}
							</Text.Title>
							<Text.Block
								flexFlow="row"
								justifyContent="center"
							>
								<Text.Paragraph alignSelf="start">
									R$
								</Text.Paragraph>
								<Text.Paragraph fontSize="5rem">
									70
								</Text.Paragraph>
								<Text.Paragraph alignSelf="end">
									/Mês
								</Text.Paragraph>
							</Text.Block>
							<Text.Paragraph>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Donec lacinia mi quis
								euismod ultrices.
							</Text.Paragraph>
						</Text.Block>
						<Button rounded>Assinar</Button>
					</CardBox>
				);
			})}
		</CardBoxContainer>
	);
};
