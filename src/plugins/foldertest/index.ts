import TestClass from "./file";

export const _ = (plugin: RSPlugin) => {

    plugin.name = "TestFolder";
    plugin.author = "gart";
    plugin.description = "Test folder";

    TestClass.test();

    return plugin;
}
