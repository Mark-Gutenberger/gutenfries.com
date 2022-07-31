/** @jsx h */
import { Component, h } from 'preact';

type MainLayoutProps = {
	children?: preact.AnyComponent[] | preact.VNode[];
};

/**
 * Main layout wrapper
 */
const MainLayout = ({ children }: MainLayoutProps) => {
	return <div>{children}</div>;
};

export default MainLayout;
