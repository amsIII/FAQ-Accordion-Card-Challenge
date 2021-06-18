import FAQs from "./Faqs";
import womanM from "../images/illustration-woman-online-mobile.svg";
import shadowImgM from "../images/bg-pattern-mobile.svg";
import womanD from "../images/illustration-woman-online-desktop.svg";
import shadowImgD from "../images/bg-pattern-desktop.svg";
import blockBox from "../images/illustration-box-desktop.svg";
import styled from "styled-components";

const FaqsCard = () => {
	return (
		<FaqCard>
			<BoxImg src={blockBox} />
			<Card>
				<Container>
					<MobileImg src={womanM} />
					<MobileShawdowImg src={shadowImgM} />
					<DestopImg src={womanD} />
					<DestopShadowImg src={shadowImgD} />
					<Section>
						<FAQs />
					</Section>
				</Container>
			</Card>
		</FaqCard>
	);
};

export default FaqsCard;

const FaqCard = styled.div`
	position: relative;
`;
const Card = styled.article`
	width: 325px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	position: relative;

	@media screen and (min-width: 1280px) {
		height: 425px;
		width: 800px;
		overflow: hidden;
	}
`;
const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 1280px) {
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		overflow: hidden;
	}
`;
const Section = styled.section`
	width: 100%;
	margin-top: 20px;
	margin-bottom: 30px;
	@media screen and (min-width: 1280px) {
		width: 50%;
		padding-left: 20px;
	}
`;
// Mobile Images
const MobileImg = styled.img`
	position: absolute;
	top: -105px;
	margin-right: 30px;
	@media screen and (min-width: 1280px) {
		display: none;
	}
`;
const MobileShawdowImg = styled.img`
	position: absolute;
	top: -5px;
	@media screen and (min-width: 1280px) {
		display: none;
	}
`;
// Desktop Images
const BoxImg = styled.img`
	position: absolute;
	height: 35%;
	left: -100px;
	top: 180px;
	z-index: 1002;
	@media screen and (max-width: 1280px) {
		display: none;
	}
`;
const DestopImg = styled.img`
	position: absolute;
	left: -70px;
	height: 75%;
	z-index: 1001;
	@media screen and (max-width: 1280px) {
		display: none;
	}
`;
const DestopShadowImg = styled.img`
	width: 100%;
	position: absolute;
	left: -455px;
	top: -240px;
	@media screen and (max-width: 1280px) {
		display: none;
	}
`;
