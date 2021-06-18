import styled from "styled-components";

const Attribution = () => {
	return (
		<Footer>
			<article className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>{" "}
				Coded by{" "}
				<a
					href="https://www.frontendmentor.io/profile/amsIII"
					target="_blank"
					rel="noreferrer"
				>
					Angel Soto III
				</a>
			</article>
		</Footer>
	);
};

export default Attribution;

const Footer = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	padding: 1rem;
	display: grid;
	place-items: center;

	.attribution {
		font-size: 11px;
		text-align: center;
		a,
		a:visited {
			text-decoration: none;
			color: hsl(228, 45%, 94%);
		}
	}
`;
