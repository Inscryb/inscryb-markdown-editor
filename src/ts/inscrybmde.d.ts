// Type definitions for InscrybMDE
// Modified from the SimpleMDE definitions by Scalesoft <https://github.com/Scalesoft>
// from DefinitelyTyped <https://github.com/DefinitelyTyped/DefinitelyTyped>.

declare namespace InscrybMDE {
    interface AutoSaveOptions {
        enabled?: boolean;
        delay?: number;
        uniqueId?: string;
    }

    interface BlockStyleOptions {
        bold?: string;
        code?: string;
        italic?: string;
    }

    interface InsertTextOptions {
        horizontalRule?: string[];
        image?: string[];
        link?: string[];
        table?: string[];
    }

    interface ParsingOptions {
        allowAtxHeaderWithoutSpace?: boolean;
        strikethrough?: boolean;
        underscoresBreakWords?: boolean;
    }

    interface RenderingOptions {
        singleLineBreaks?: boolean;
        codeSyntaxHighlighting: boolean;
    }

    interface ShortcutsArray {
        [action: string]: string|undefined;
        toggleBlockquote?: string;
        toggleBold?: string;
        cleanBlock?: string;
        toggleHeadingSmaller?: string;
        toggleItalic?: string;
        drawLink?: string;
        toggleUnorderedList?: string;
        togglePreview?: string;
        toggleCodeBlock?: string;
        drawImage?: string;
        toggleOrderedList?: string;
        toggleHeadingBigger?: string;
        toggleSideBySide?: string;
        toggleFullScreen?: string;
    }

    interface StatusBarItem {
        className: string;
        defaultValue: (element: HTMLElement) => void;
        onUpdate: (element: HTMLElement) => void;
    }

    interface ToolbarIcon {
        name: string;
        action: string|((editor: InscrybMDE) => void);
        className: string;
        title: string;
    }

    interface Options {
        autoDownloadFontAwesome?: boolean;
        autofocus?: boolean;
        autosave?: AutoSaveOptions;
        blockStyles?: BlockStyleOptions;
        element?: HTMLElement;
        forceSync?: boolean;
        hideIcons?: string[];
        indentWithTabs?: boolean;
        initialValue?: string;
        insertTexts?: InsertTextOptions;
        lineWrapping?: boolean;
        negativeTabIndex?: boolean;
        parsingConfig?: ParsingOptions;
        placeholder?: string;
        previewRender?: (markdownPlaintext: string, previewElement?: HTMLElement) => string;
        promptURLs?: boolean;
        renderingConfig?: RenderingOptions;
        shortcuts?: ShortcutsArray;
        showIcons?: string[];
        spellChecker?: boolean;
        status?: boolean|Array<string|StatusBarItem>;
        styleSelectedText?: boolean;
        tabSize?: number;
        toolbar?: boolean|Array<string|ToolbarIcon>;
        toolbarTips?: boolean;
    }
}

declare class InscrybMDE {
    constructor();
    constructor(options: InscrybMDE.Options);
    value(): string;
    value(val: string): void;
    codemirror: any;
    toTextArea(): void;
    toEditor(): void;
    isPreviewActive(): boolean;
    isSideBySideActive(): boolean;
    isFullscreenActive(): boolean;
    clearAutosavedValue(): void;

    static toggleBold: (editor: InscrybMDE) => void;
    static toggleItalic: (editor: InscrybMDE) => void;
    static toggleStrikethrough: (editor: InscrybMDE) => void;
    static toggleHeadingSmaller: (editor: InscrybMDE) => void;
    static toggleHeadingBigger: (editor: InscrybMDE) => void;
    static toggleHeading1: (editor: InscrybMDE) => void;
    static toggleHeading2: (editor: InscrybMDE) => void;
    static toggleHeading3: (editor: InscrybMDE) => void;
    static toggleCodeBlock: (editor: InscrybMDE) => void;
    static toggleBlockquote: (editor: InscrybMDE) => void;
    static toggleUnorderedList: (editor: InscrybMDE) => void;
    static toggleOrderedList: (editor: InscrybMDE) => void;
    static cleanBlock: (editor: InscrybMDE) => void;
    static drawLink: (editor: InscrybMDE) => void;
    static drawImage: (editor: InscrybMDE) => void;
    static drawTable: (editor: InscrybMDE) => void;
    static drawHorizontalRule: (editor: InscrybMDE) => void;
    static togglePreview: (editor: InscrybMDE) => void;
    static toggleSideBySide: (editor: InscrybMDE) => void;
    static toggleFullScreen: (editor: InscrybMDE) => void;
    static undo: (editor: InscrybMDE) => void;
    static redo: (editor: InscrybMDE) => void;
}

export default InscrybMDE;
export as namespace InscrybMDE;
