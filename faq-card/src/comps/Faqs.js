import { useState } from "react";
import Arrow from "../images/icon-arrow-down.svg";
import styled from "styled-components";

const FAQs = () => {
	const faqs = [
		{
			id: 1,
			question: "How many team members can I invite?",
			answer:
				"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
		},
		{
			id: 2,
			question: "What is the maximum file upload size?",
			answer:
				"No more than 2GB. All files in your account must fit your allotted storage space.",
		},
		{
			id: 3,
			question: "How do I reset my password?",
			answer:
				"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
		},
		{
			id: 4,
			question: "Can I cancel my subscription?",
			answer:
				"Yes! Send us a message and we’ll process your request no questions asked.",
		},
		{
			id: 5,
			question: "Do you provide additional support?",
			answer:
				"Yes! Send us a message and we’ll process your request no questions asked.",
		},
	];

	const [activeId, setActiveId] = useState();
	const handleActiveClick = (id) => {
		if (activeId === id) {
			setActiveId();
		} else {
			setActiveId(id);
		}
	};

	return (
		<Article>
			<Title>FAQ</Title>
			<Section>
				{faqs.map(({ id, question, answer }) => (
					<>
						<FAQ key={id} onClick={() => handleActiveClick(id)}>
							<Questions className={activeId === id ? "active" : ""}>
								<span>{question}</span>
								<Img src={Arrow} className={activeId === id ? "rotate" : ""} />
							</Questions>
							<Answers className={activeId === id ? "panel" : ""}>
								{answer}
							</Answers>
						</FAQ>
						<Hr />
					</>
				))}
			</Section>
		</Article>
	);
};

export default FAQs;

const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media screen and (min-width: 1280px) {
		margin-top: 1rem;
		align-items: flex-start;
	}
`;
const Title = styled.h1`
	font-size: 1.8rem;
	color: hsl(238, 29%, 16%);
	margin-top: 90px;
	margin-bottom: 1rem;

	@media screen and (min-width: 1280px) {
		margin-top: 0;
	}
`;
const Section = styled.section`
	width: 275px;
	@media screen and (min-width: 1280px) {
		width: 300px;
	}
`;
const FAQ = styled.article`
	cursor: pointer;
	width: 100%;
	padding: 15px 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
`;
const Questions = styled.h3`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	font-size: 12px;
	font-weight: 400;
	color: hsl(237, 12%, 33%);
	transition: all 0.2s ease-out;

	&.active {
		color: hsl(238, 29%, 16%);
		font-weight: 700;
		transition: all 0.2s ease-out;
	}

	@media screen and (min-width: 1280px) {
		&:hover {
			color: hsl(14, 88%, 65%);
		}
	}
`;
const Img = styled.img`
	transition: all 0.2s ease-out;

	&.rotate {
		transform: rotate(180deg);
		transition: all 0.2s ease-out;
	}
`;
const Answers = styled.div`
	color: hsl(240, 6%, 50%);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 11px;
	line-height: 1.5;
	padding-right: 1.8rem;
	overflow: hidden;
	height: 0;
	transition: all 0.2s ease-out;

	&.panel {
		margin-top: 10px;
		height: 48px;
		transition: all 0.2s ease-out;
	}
`;
const Hr = styled.hr`
	height: 1px;
	background-color: hsl(240, 5%, 91%);
	outline: none;
	border: none;
`;
