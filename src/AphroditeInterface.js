import { StyleSheet, css } from 'aphrodite';

export default class AphroditeInterface {
    constructor(aphrodite) {
        this.aphrodite = aphrodite || { StyleSheet, css };
    }

    css(styles) {
        const styleSheet = this.aphrodite.StyleSheet.create(styles);
        const classNames = {};
        const styleKeys = Object.keys(styleSheet);

        // Use regular for-loop for performance
        for (let i = 0; i < styleKeys.length; i++) {
            const key = styleKeys[i];
            classNames[key] = this.aphrodite.css(styleSheet[key]);
        }

        return classNames;
    }
}
