import React, { useEffect, useState, useRef } from "react";

const DonutComponent: React.FC = () => {
	const [A, setA] = useState(0);
	const [B, setB] = useState(0);
	const frameRef = useRef<HTMLPreElement>(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setA((prevA) => prevA + 0.05);
			setB((prevB) => prevB + 0.07);
		}, 50);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		if (frameRef.current) {
			const asciiframe = () => {
				const M = Math;
				const cA = M.cos(A);
				const sA = M.sin(A);
				const cB = M.cos(B);
				const sB = M.sin(B);
				let b: string[] = [];
				let z: number[] = [];

				for (let k = 0; k < 1760; k++) {
					b[k] = k % 80 === 79 ? "\n" : " ";
					z[k] = 0;
				}

				for (let j = 0; j < 6.28; j += 0.07) {
					const ct = M.cos(j);
					const st = M.sin(j);
					for (let i = 0; i < 6.28; i += 0.02) {
						const sp = M.sin(i),
							cp = M.cos(i);
						const h = ct + 2;
						const D = 1 / (sp * h * sA + st * cA + 5);
						const t = sp * h * cA - st * sA;
						const x = (40 + 30 * D * (cp * h * cB - t * sB)) | 0;
						const y = (12 + 15 * D * (cp * h * sB + t * cB)) | 0;
						const o = x + 80 * y;
						const N = (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)) | 0;
						if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
							z[o] = D;
							b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
						}
					}
				}

				const result = b.join("");
				if (frameRef.current) frameRef.current.textContent = result;
			};

			asciiframe();
		}
	}, [A, B]);

	return <pre ref={frameRef} className="text-white hover:text-[#00D49F] select-none" style={{ fontFamily: "monospace", whiteSpace: "pre" }} />;
};

export default DonutComponent;
