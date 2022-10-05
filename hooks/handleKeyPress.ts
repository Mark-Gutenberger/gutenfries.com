import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';

type ModifierKey_ = 'ctrl' | 'shift' | 'alt';
type ModifierKey = 'ctrlKey' | 'shiftKey' | 'altKey';

const useKeyPress = (
	keys: string[],
	// deno-lint-ignore no-explicit-any
	callback: any,
	modifier?: ModifierKey_,
	node = null,
) => {
	// implement the callback ref pattern
	const callbackRef = useRef(callback);
	useLayoutEffect(() => {
		callbackRef.current = callback;
	});

	// check if a key modifier is required
	const [modifierKey, setModifierKey] = useState<ModifierKey>();
	if (modifier) {
		setModifierKey(`${modifier}Key`);
	}

	// handle what happens on key press
	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			// check if one of the key is part of the ones we want
			if (keys.some((key) => event.key === key)) {
				callbackRef.current(event);
			}
		},
		[keys],
	);

	// handle what happens on key chord
	const handleKeyChord = useCallback(
		(event: KeyboardEvent) => {
			// check for the modifier key
			if (keys.some((modifierKey) => event.key === modifierKey)) {
				// check if one of the key is part of the ones we want
				if (keys.some((key) => event.key === key)) {
					callbackRef.current(event);
				}
			}
		},
		[keys],
	);

	useEffect(() => {
		if (!modifier) {
			// target is either the provided node or the document
			const targetNode = node ?? document;
			// attach the event listener
			targetNode &&
				targetNode.addEventListener('keydown', handleKeyPress);

			// remove the event listener
			return () =>
				targetNode &&
				targetNode.removeEventListener('keydown', handleKeyPress);
		} else {
			// target is either the provided node or the document
			const targetNode = node ?? document;
			// attach the event listener
			targetNode &&
				targetNode.addEventListener('keydown', handleKeyChord);

			// remove the event listener
			return () =>
				targetNode &&
				targetNode.removeEventListener('keydown', handleKeyChord);
		}
	}, [handleKeyPress, handleKeyChord, node]);
};

export default useKeyPress;
