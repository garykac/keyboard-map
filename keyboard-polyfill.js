// Polyfill for navigator.keyboard.getKeyMap
//
// Because there is no way to determine the current keyboard layout, this
// assumes that the current layout is US-en.

if (typeof navigator.keyboard == 'undefined') (function() {

var Keyboard = function() {
	return {
		getKeyMap : function() {
			return {
				// Top row
				'Backquote': '`',
				'Digit1': '1',
				'Digit2': '2',
				'Digit3': '3',
				'Digit4': '4',
				'Digit5': '5',
				'Digit6': '6',
				'Digit7': '7',
				'Digit8': '8',
				'Digit9': '9',
				'Digit0': '0',
				'Minus': '-',
				'Equal': '=',
				'IntlYen': '\\',
				//'Backspace': 'Backspace',
				
				// 2nd row
				//'Tab': 'Tab',
				'KeyQ': 'q',
				'KeyW': 'w',
				'KeyE': 'e',
				'KeyR': 'r',
				'KeyT': 't',
				'KeyY': 'y',
				'KeyU': 'u',
				'KeyI': 'i',
				'KeyO': 'o',
				'KeyP': 'p',
				'BracketLeft': '[',
				'BracketRight': ']',
				'Backslash': '\\',
				
				// 3rd row
				//'CapsLock': 'CapsLock',
				'KeyA': 'a',
				'KeyS': 's',
				'KeyD': 'd',
				'KeyF': 'f',
				'KeyG': 'g',
				'KeyH': 'h',
				'KeyJ': 'j',
				'KeyK': 'k',
				'KeyL': 'l',
				'Semicolon': ':',
				'Quote': "'",
				//'Enter': 'Enter',

				// 4th row
				//'ShiftLeft': 'Shift',
				'IntlBackslash': '\\',
				'KeyZ': 'z',
				'KeyX': 'x',
				'KeyC': 'c',
				'KeyV': 'v',
				'KeyB': 'b',
				'KeyN': 'n',
				'KeyM': 'm',
				'Comma': ',',
				'Period': '.',
				'Slash': '/',
				//IntlRo
				//'ShiftRight': 'Shift',
				
				// 5th row
				//'ControlLeft': 'Control',
				//'MetaLeft': 'Meta',
				//'AltLeft': 'Alt',
				//'Space': ' ',
				//'AltRight': 'Alt',
				//'MetaRight': 'Meta',
				//ContextMenu
				//'ControlRight': 'Control',
			}
		}
	};
};

navigator.keyboard = new Keyboard();

})();
