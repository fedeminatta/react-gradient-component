import React from 'react';
import { ReactNode, CSSProperties } from 'react';

interface GradientContainProps {
	styles?: CSSProperties;
	children: ReactNode;
}
const GradientContain: React.FC<GradientContainProps> = ({
	styles = {},
	children,
}) => {
	return (
		<section style={{ display: 'flex', position: 'relative', ...styles }}>
			{children}
		</section>
	);
};
export default GradientContain;
