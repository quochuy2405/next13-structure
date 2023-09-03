import { ReactNode } from "react";

interface TitleProps {
	children: ReactNode;
}
export const Title: React.FC<TitleProps> = ({ children }) => {
	return <h1 className="text-3xl font-bold">{children}</h1>;
};

export const Title2: React.FC<TitleProps> = ({ children }) => {
	return <h1 className="text-3xl font-bold">{children}</h1>;
};
