import { RefObject, Component, ReactNode } from 'react';
import { View } from 'react-native';
import { PopoverProps, Rect, ModalPopoverState } from './Types';
interface RNModalPopoverProps extends PopoverProps {
    fromRect?: Rect;
    fromRef?: RefObject<View>;
    displayArea?: Rect;
}
export default class RNModalPopover extends Component<RNModalPopoverProps, ModalPopoverState> {
    state: {
        visible: boolean;
        modalShown: boolean;
    };
    private static isShowingInModal;
    debug(line: string, obj?: unknown): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: RNModalPopoverProps, prevState: ModalPopoverState): void;
    render(): ReactNode;
}
export {};
