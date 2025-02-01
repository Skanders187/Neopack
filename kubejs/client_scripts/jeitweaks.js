// Hides recipe in JEI from players
RecipeViewerEvents.removeEntries('item', event => {
	event.remove('minecraft:wooden_shovel')
	event.remove('minecraft:wooden_axe')
	event.remove('minecraft:wooden_hoe')
	event.remove('minecraft:wooden_pickaxe')
  event.remove('minecraft:wooden_sword')
  event.remove('actuallyadditions:wooden_aiot')
  event.remove('mekanismtools:wood_paxel')
  
})