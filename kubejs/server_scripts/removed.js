ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:wooden_axe' })
    event.remove({ output: 'minecraft:wooden_shovel' })
    event.remove({ output: 'minecraft:wooden_pickaxe' })
    event.remove({ output: 'minecraft:wooden_sword' })
    event.remove({ output: 'minecraft:wooden_hoe' })

});