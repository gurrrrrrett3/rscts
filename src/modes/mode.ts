export const _ = (mode: RSPlugin) => {
    mode.name = "Mode";
    mode.author = "gart";
    mode.description = "Test mode";

    mode.addEnableHandler((isReload: boolean) => {
        mode.print("Mode is enabled");
    })

    return mode;
}