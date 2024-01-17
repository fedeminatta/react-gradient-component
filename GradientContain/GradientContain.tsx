import React from 'react';
import { ReactNode } from 'react';

interface GradientContainProps {
	styles?: {};
	children: ReactNode;
}
const GradientContain: React.FC<GradientContainProps> = ({
	styles = '',
	children,
}) => {
	return (
		<section style={{ display: 'flex', position: 'relative', ...styles }}>
			{children}
		</section>
	);
};
export default GradientContain;
