import React, { useState, useEffect } from "react";
import "./Home.css";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import PujaDay from "./PujaDay";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const Home = () => {
	const artists = [
		{
			name: "Baadshah",
			img: "artist1.png",
		},
		{
			name: "King",
			img: "artist2.png",
		},
		{
			name: "Sunidhi Chauhan",
			img: "artist3.png",
		},
		{
			name: "Baadshah",
			img: "artist1.png",
		},
		{
			name: "King",
			img: "artist2.png",
		},
		{
			name: "Sunidhi Chauhan",
			img: "artist3.png",
		},
	];

	const [artistMargin, setArtistmargin] = useState(0);

	const handleMoveArtists = (dir) => {
		const move = dir == "left" ? 200 : -200;
		dir == "left" &&
			artistMargin < 0 &&
			setArtistmargin(artistMargin + move);

		dir == "right" &&
			artistMargin <= 0 &&
			setArtistmargin(artistMargin + move);
	};

	const { innerWidth: width, innerHeight: height } = window;

	return (
		<div className="home">
			<div className="wave-bg">
				<img src="/assets/imgs/home/wavy_bg.png" alt="" />
			</div>
			<section className="section-1">
				<Heading title="Get ready to dance, laugh, celebrate like never before - this is Rebeca!"></Heading>
				<div className="cover-img">
					<img src="/assets/imgs/home/cover_img.png" alt="" />
				</div>
			</section>
			<section className="section-2">
				<div className="banner">
					<div className="display-font">BEings, are you ready?</div>
					<div className="display-font">
						the countdown to our very own Pujo has already begun.
					</div>
				</div>
			</section>
			<section className="section-3">
				<Heading
					title={"Rebeca! Line up"}
					subTitle={
						"Brace yourself for an unforgettable showcase, as we proudly unveil our stellar lineup"
					}
				></Heading>
				<div
					className="list"
					style={{ marginLeft: `${artistMargin}px` }}
				>
					{artists.map((artist, i) => (
						<ArtistCard key={i} name={artist.name} img={artist.img}></ArtistCard>
					))}
				</div>
				<div className="controls display-font">
					<div
						className="control left"
						onClick={() => handleMoveArtists("left")}
					>
						<span className="material-icons">arrow_back</span>
						prev
					</div>
					<div
						className="control right"
						onClick={() => handleMoveArtists("right")}
					>
						next
						<span className="material-icons">arrow_forward</span>
					</div>
				</div>
			</section>
			<section className="section-4">
				<div className="row">
					<Heading
						title={"MOMENTS"}
						subTitle={"That Last a Life time"}
					></Heading>
					<div className="contents">
						<p>
							From the pulsating beats of the music to the
							kaleidoscope of colors lighting up the night sky.
							Here's to reliving those cherished moments and
							having a blast along the way!
						</p>
						<Button
							variant={"filled"}
							innerText={"Create lifelong memories"}
						></Button>
					</div>
				</div>
				<div className="collage">
					{width > 480 ? (
						<img src="/assets/imgs/home/collage.png" alt="" />
					) : (
						<img src="/assets/imgs/home/collage-mobile.png" alt="" />
					)}
				</div>
			</section>
			<section className="section-5">
				<Heading
					title="Pujo Asche"
					subTitle={
						"Prepare to be swept away as you put your best foot forward in this epic celebration of creativity and culture tha promises you laughter, joy and memories that will last you a lifetime and more. Keep your water bottles handy and get ready to feel the heat cuz the 83rd edition of REBECA is back with a bang!"
					}
				></Heading>
				<div className="events">
					<PujaDay
						title="Saptami"
						desc={
							"The classical night. Get ready to soak in the rich heritage of Indian culture as talented artists from all across the nation weave together a tapestry of grace and timeless magic, filling the air with the tunes of celebration and marking the very beginning of our very own Pujo."
						}
						img="./assets/imgs/home/saptami.png"
					></PujaDay>
					<PujaDay
						title="Ashtami"
						desc={
							"The BEings night. The evening will come alive as the BEings take the center stage by storm with their electrifying performances and ignite the atmosphere with their talent and creativity. Don't forget to cheer your hearts out for your best friends as they spew fire across the stage and make the night a celebration of the incredible talent amongst us."
						}
						img="./assets/imgs/home/ashtami.png"
						alt={true}
					></PujaDay>
					<PujaDay
						title="Navami"
						desc={
							"The Kolkata night. Underneath the starlit sky, lose yourself in the symphony of Kolkata's soul. Come out and cheer as the legends of our beloved city rock the stage and give us an evening of musical euphoria that transcends all the boundaries of language and region making all our hearts beat as one, to the sweet rhythm of Navami."
						}
						img="./assets/imgs/home/navami.png"
					></PujaDay>
					<PujaDay
						title="Dashami"
						desc={
							"The Mumbai night. Take your dancing shoes out as you'll be screaming and dancing like nobody's watching to the electrifying beats of Bollywood! Join in on the infectious energy as you dance all night long in the grand finale of our festival and create a lifetime of memories that stay with you long after the night has faded into dawn"
						}
						img="./assets/imgs/home/dashami.png"
						alt={true}
					></PujaDay>
				</div>
			</section>
		</div>
	);
};

export default Home;
