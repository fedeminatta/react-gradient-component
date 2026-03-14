// GradientContain.d.ts
import { ReactNode, CSSProperties } from 'react';

interface GradientContainProps {
	styles?: CSSProperties;
	children: ReactNode;
}

declare const GradientContain: React.FC<GradientContainProps>;
export default GradientContain;
