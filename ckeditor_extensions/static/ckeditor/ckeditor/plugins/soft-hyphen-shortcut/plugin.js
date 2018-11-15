// https://stackoverflow.com/questions/34491100/keyboard-shortcut-to-insert-text-soft-hyphen-with-ckeditor

// Add soft-hyphen shortcut

CKEDITOR.plugins.add('soft-hyphen-shortcut', {
	init: function (editor) {
		var softHyphenUnicodeChar = '\u00AD';
		var softHyphenEntity = '&#173;';  // '&shy;';

		editor.addCommand('insertSoftHyphen', {
			exec: function (editor, data) {
				editor.insertHtml(softHyphenEntity);
			}
		});

		editor.ui.addButton('InsertSoftHyphen', {
			label: "Shy",
			command: 'insertSoftHyphen',
			icon: this.path + 'images/button.svg'
		});

		// FIXME keystroke value 189, 173?
		editor.setKeystroke(
			CKEDITOR.CTRL + CKEDITOR.SHIFT + 173, 'insertSoftHyphen'
		);
	}
});
