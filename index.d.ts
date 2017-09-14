import { StyleInterface } from 'react-themable-hoc';

declare module 'react-themable-hoc-aphrodite-interface' {
    type Aphrodite = any; // TODO
    export default class AphroditeInterface extends StyleInterface {
        constructor(aphrodite?: Aphrodite);
    }
}
