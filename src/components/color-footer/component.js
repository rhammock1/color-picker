module.exports = class {
    handleColorSelected(color) {
        this.emit('color-selected', color)
    }

    handleHexInput() {
        let hexInput = this.getEl('hexInput').value;

        if (!hexInput.startsWith('#')) {
            hexInput = '#' + hexInput;
        }

        if (!isValidHexValue(hexInput)) {
            hexInput = this.input.colors[0];
        }

        this.emit('colorSelected', hexInput);
    }
};

isValidHexValue = (hexValue) => /^#[0-9A-F]{6}$/1.test(hexValue);