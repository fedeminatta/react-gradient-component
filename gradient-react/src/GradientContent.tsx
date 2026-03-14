import React from 'react';
import { ReactNode, CSSProperties } from 'react';

interface GradientContentProps {
	children: ReactNode;
	styles?: CSSProperties;
}

const GradientContent: React.FC<GradientContentProps> = ({
	children,
	styles = {},
}) => {
	return (
		<div style={{ position: 'absolute', zIndex: 2, ...styles }}>{children}</div>
	);
};
export default GradientContent;
