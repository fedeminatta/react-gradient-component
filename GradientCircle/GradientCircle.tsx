import React, { CSSProperties } from 'react';
interface GradientCircleProps {
	blur?: string;
	width?: string;
	height?: string;
	color1?: string;
	color2?: string;
}

const GradientCircle: React.FC<GradientCircleProps> = ({
	blur = '80',
	width = '200px',
	height = '200px',
	color1 = '#ED0101',
	color2 = '#CC2A01',
}) => {
	const estilo: CSSProperties = {
		zIndex: 1,
		boxSizing: 'border-box',
		position: 'relative',
		height: height,
		width: width,
		borderRadius: '50%',
		backgroundSize: '100% 100%',
		background: `radial-gradient(at left top, ${color1}, ${color2})`,
		filter: `blur(${blur}px)`,
		top: 0,
		left: 0,
		padding: 0,
		margin: 0,
	};
	return <div style={estilo as React.CSSProperties}></div>;
};
export default GradientCircle;
