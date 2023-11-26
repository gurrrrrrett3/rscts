declare class RSPlugin {
    name: string;
    author: string;
    description: string;
    hooks: {
        [key: string]: (...args: any[]) => any
    }
    commands: {
        [key: string]: Command
    }
    defaultConfig: {
        [key: string]: any
    }
    config: {
        [key: string]: any
    }
    isEnabled: boolean
    fileName: string
    fullFileName: string
    doAutoReload: boolean
    nameSpace: string
    entryPath: string
    polyHooks: {
        [key: string]: PluginHookInfo[]
    }
    addHook<T extends keyof Hooks>(eventName: T, func: Hooks[T]): void;
    addHook(eventName: string, func: (this: void, ...args: any[]) => HookFunctionReturn): void;
    enable(shouldSave: boolean): void;
    disable(shouldSave: boolean): void;
    print(...args: string[]): void;
    warn(...args: string[]): void;
    require(modName: string): any;
    addEnableHandler(func: (isReload: boolean) => void): void;
    callEnableHandlers(isReload: boolean): void;
    addDisableHandler(func: (isReload: boolean) => void): void;
    callDisableHandlers(isReload: boolean): void;
    setConfig(): void;
    load(isEnabled: boolean, isReload: boolean): void;
    reload(): void;
    
}