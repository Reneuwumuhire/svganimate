import { RefObject, useEffect, useState } from "react";

interface Props {
	cursor: { x: number; y: number };
	cardRef: RefObject<HTMLElement>;
	mouseOnCard: boolean;
}
const TeamGeaIcon = ({ cursor, cardRef, mouseOnCard }: Props) => {
	const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" });

	useEffect(() => {
		if (cardRef.current && cursor.x !== null && cursor.y !== null) {
			const rect = cardRef.current.getBoundingClientRect();
			setGradientCenter({ cx: `${(cursor.x / rect.width) * 100}%`, cy: `${(cursor.y / rect.height) * 100}%` });
		}
	}, [cursor, cardRef]);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 13.5829" className="w-96 h-96 duration-200 transition-all">
			<defs>
				<radialGradient id="emeraldGradient" r="35%" gradientUnits="userSpaceOnUse" cx={gradientCenter.cx} cy={gradientCenter.cy}>
					{mouseOnCard && <stop stopColor="#00D49F" />}
					<stop offset="1" stopColor="#404040" />
				</radialGradient>
			</defs>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="url(#emeraldGradient)"
				className=" fill-neutral-950/50"
				d="M21.6,12.33c0,1.22-.96,2.21-2.14,2.21h-9.14c-.06,0-.11,0-.17,0-1.18,0-2.14-.99-2.14-2.21,0-.35.08-.68.22-.97h0S12.83,1.92,12.83,1.92c.31-.82,1.09-1.4,1.99-1.4s1.63.55,1.96,1.33h0s4.59,9.49,4.59,9.49h0c.14.3.23.63.23.99Z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="url(#emeraldGradient)"
				className=" fill-neutral-950/50"
				d="M.48,3.7h0s4.62,10.27,4.62,10.27h0c.17.38.55.65.99.65.6,0,1.09-.5,1.09-1.12,0-.05,0-.1-.01-.16h0s-.78-6.32-.78-6.32l-.05-.48s0-.02,0-.02c0-.08-.01-.15-.01-.23,0-.73.35-1.38.89-1.78.06-.04.12-.08.18-.12h0s0,0,0,0l.27-.18,2.36-1.56c.33-.19.56-.56.56-.97,0-.61-.48-1.11-1.08-1.12h0S2.5.55,2.5.55c-.02,0-.04,0-.07,0C1.24.55.28,1.54.28,2.76c0,.34.07.66.21.94Z"
			/>
		</svg>
	);
};
export default TeamGeaIcon;
