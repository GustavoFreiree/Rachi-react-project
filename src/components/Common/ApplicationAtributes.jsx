import styled from "styled-components";

const ApplicationAtributesBox = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	transition: scale 0.3s, filter 0.3s;

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

	:hover {
		scale: 1.05;
		filter: drop-shadow(5px 0px 15px rgb(0, 149, 255));
	}

	@media screen and (max-width: 1000px) {
		:hover {
			scale: 1;
			filter: none;
		}
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
						key={title}
					/>
				);
			})}
		</ApplicationAtributesContainerBox>
	);
};
