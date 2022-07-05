import { Link, routes } from '@redwoodjs/router';
import { useAuth } from '@redwoodjs/auth';
import { Toaster } from '@redwoodjs/web/toast';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles, mergeStyleSets } from '@fluentui/react/lib/Styling';

import Nav from 'src/components/Nav/Nav';

type MainLayoutProps = {
	children?: React.ReactNode;
};

const stackTokens: IStackTokens = { childrenGap: 40 };

const iconClass = mergeStyles({
	fontSize: 50,
	height: 50,
	width: 50,
	margin: '0 25px',
});
const classNames = mergeStyleSets({
	deepSkyBlue: [{ color: 'deepskyblue' }, iconClass],
	greenYellow: [{ color: 'greenyellow' }, iconClass],
	salmon: [{ color: 'salmon' }, iconClass],
});

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Toaster />
			<Stack horizontal tokens={stackTokens}>
				<Nav></Nav>
				{/* <FontIcon aria-label='Compass' iconName='CompassNW' className={classNames.deepSkyBlue} /> */}
				<main>{children}</main>
			</Stack>
		</>
	);
};

export default MainLayout;
