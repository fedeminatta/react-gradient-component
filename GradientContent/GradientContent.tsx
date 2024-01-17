import React from 'react';
import { ReactNode } from 'react';

interface GradientContentProps {
	children: ReactNode;
}

const GradientContent: React.FC<GradientContentProps> = ({ children }) => {
	return <div style={{ position: 'absolute', zIndex: 2 }}>{children}</div>;
};
export default GradientContent;
