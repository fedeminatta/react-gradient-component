'use client';

import React, { ReactNode, CSSProperties } from 'react';

interface GradientContentProps {
	children: ReactNode;
	styles?: CSSProperties;
	className?: string;
}

const GradientContent = ({
	children,
	styles = {},
	className = '',
}: GradientContentProps) => {
	const defaultStyles: CSSProperties = {
		position: 'absolute',
		zIndex: 2,
		...styles,
	};

	return (
		<div style={defaultStyles} className={className}>
			{children}
		</div>
	);
};

export default GradientContent;
