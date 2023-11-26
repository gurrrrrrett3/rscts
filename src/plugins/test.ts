export const _ = (plugin: RSPlugin) => {
    plugin.name = "Test";
    plugin.author = "gart";
    plugin.description = "Test plugin";

    plugin.addHook("EventBulletHit", (type, pos, normal) => {
      print(`EventBulletHit: type ${type}, pos: ${pos}`);
  })
    
    return plugin;
}
