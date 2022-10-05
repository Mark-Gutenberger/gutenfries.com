// Not technically a hook...
const printiFrame = (id: string) => {
	// attempt to find iframe with matching id
	const iframe = document.getElementById(id) as HTMLIFrameElement;
	// if exists, print
	iframe.contentWindow?.print();
};

export default printiFrame;
