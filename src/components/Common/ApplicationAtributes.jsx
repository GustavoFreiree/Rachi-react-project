import styled from "styled-components";

const ApplicationAtributesBox = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;

	& > img {
		width: 5rem;
		margin-bottom: 1.8rem;
	}

	& > strong {
		margin-bottom: 1rem;
	}

	& > span {
		max-width: 20rem;
		text-align: center;
	}
`;

const ApplicationAtribute = (props) => {
	const { imgSrc, title, desc } = props;
	return (
		<ApplicationAtributesBox>
			<img src={imgSrc} alt="" />
			<strong>{title}</strong>
			<span>{desc}</span>
		</ApplicationAtributesBox>
	);
};

const ApplicationAtributesContainerBox = styled.div`
	display: flex;
	flex-flow: row nowrap;
	gap: 8rem;

	@media screen and (max-width: 650px) {
		& {
			flex-flow: column;
		}
	}
`;

export const ApplicationAtributesContainer = (props) => {
	const { atributes } = props;
	return (
		<ApplicationAtributesContainerBox>
			{atributes.map(({ imgSrc, title, desc }) => {
				return (
					<ApplicationAtribute
						imgSrc={imgSrc}
						title={title}
						desc={desc}
					/>
				);
			})}
		</ApplicationAtributesContainerBox>
	);
};
