'use client';

import React, { ReactNode, CSSProperties } from 'react';

interface GradientContainProps {
	styles?: CSSProperties;
	className?: string;
	children: ReactNode;
}

const GradientContain = ({
	styles = {},
	className = '',
	children,
}: GradientContainProps) => {
	const defaultStyles: CSSProperties = {
		display: 'flex',
		position: 'relative',
		...styles,
	};

	return (
		<section style={defaultStyles} className={className}>
			{children}
		</section>
	);
};

export default GradientContain;
