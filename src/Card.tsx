import React, { useRef, useState } from 'react';

const Card: React.FunctionComponent = (): React.ReactElement => {
	const cardWrapRef = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [offsetTop, setOffsetTop] = useState(0);
	const [offsetLeft, setOffsetLeft] = useState(0);

	const [angleX, setAngleX] = useState(0);
	const [angleY, setAngleY] = useState(0);

	const [backgroundPosX, setBackgroundPosX] = useState(0);
	const [backgroundPosY, setBackgroundPosY] = useState(0);
	const [infoPosX, setInfoPosX] = useState(0);
	const [infoPosY, setInfoPosY] = useState(0);

	const handleMouseEnter = (): void => {
		if(cardWrapRef !== null && cardWrapRef.current !== null) {
			setWidth(cardWrapRef.current.clientWidth);
			setHeight(cardWrapRef.current.clientHeight);

			setOffsetTop(cardWrapRef.current.offsetTop);
			setOffsetLeft(cardWrapRef.current.offsetLeft);
		}
	}

	const handleMouseLeave = (): void => {
		setAngleX(0);
		setAngleY(0);

		setBackgroundPosX(0);
		setBackgroundPosY(0);
		setInfoPosX(0);
		setInfoPosY(0);
	}

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
		const mouseX = event.pageX - offsetLeft - width / 2;
		const mouseY = event.pageY - offsetTop - height / 2;

		// parallax angle in card
		setAngleX(mouseX / width * 30);
		setAngleY(mouseY / height * -30);
		
		// parallax position of background in card
		setBackgroundPosX(mouseX / width * -40);
		setBackgroundPosY(mouseY / height * -40);
		// parallax position of info in card
		setInfoPosX(mouseX / width * 20);
		setInfoPosY(mouseY / height * 20);
	}

	return (
		<div className="cardWrap"
			 ref={ cardWrapRef }
			 onMouseMove={(event) => handleMouseMove(event)}
			 onMouseEnter={ handleMouseEnter }
			 onMouseLeave={ handleMouseLeave }>
			<div className="card" style={{ transform: `rotateY(${angleX}deg) rotateX(${angleY}deg)` }}>
				<div className="card--info" style={{ transform: `translateX(${infoPosX}px) translateY(${infoPosY}px)` }}>
					<div className="card--info-up">
						<div className="card--info-date">09-2021</div>
						<div className="card--info-type">unique <span></span></div>
					</div>
					<div className="card--info-name">
						MisterMV
					</div>
					<div className="card--info-down">
						<div className="card--info-followers">
							<div className="card--info-followers-title">Followers</div>
							<div className="card--info-followers-nbr">702k</div>
						</div>
						<div className="card--info-country">
							<div className="card--info-country-title">Pays</div>
							<div className="card--info-country-icon">FR</div>
						</div>
					</div>
				</div>
				<div className="card--player"></div>
				<div className="card--bottom"></div>
				<div className="card--background" style={{ transform: `translateX(${backgroundPosX}px) translateY(${backgroundPosY}px)` }}></div>
			</div>
		</div>
	);
}

export default Card;