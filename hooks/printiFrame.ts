// Not technically a hook...
const printiFrame = (id: string) => {
	// attempt to find iframe with matching id
	const iframe = document.getElementById(id) as HTMLIFrameElement;
	// if exists, print
	iframe.contentWindow?.print();
	// if not, wait 1 second and try again
	setTimeout(() => printiFrame(id), 1000);
};

export default printiFrame;
