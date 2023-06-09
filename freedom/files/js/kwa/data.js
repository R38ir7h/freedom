var data = [
		// one
	[
		{
			index: 1,
			name: "Moon Pulse",
			ranks: 5,
			ranksnw: 2,
			desc: "Moonshade Slash inflicts a Moon Shadow effect that lasts 15 seconds, stealing <span class='tooltip-value'>#%</span> of target's movement speed. Moon Shadow (Curse) - Lowers target's movement speed. Stacks up to 5 layers. Moon Shadow (Blessing) - Increases your movement speed. Stacks up to 5 layers. After reaching LV6, using Moonshade Slash aginast target with a full Moon Shadow stack will dispel its Mount status.",
			rankInfo: [2, 4, 6, 8, 10],
		},
		{
			index: 4,
			name: "Moon Brilliance",
			ranks: 5,
			desc: "Increases Eclipse Slash's Base Attack Damage by <span class='tooltip-value'>#%</span>, and reduces its cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [5, 10, 15, 20, 25],
			rankInfo2: [0.5, 1, 1.5, 2, 2.5],
		},
		{
			index: 6,
			name: "Adept Swordsplay",
			ranks: 3,
			desc: "Increases sword skills' additional Attack by <span class='tooltip-value'>#%</span>.",
			rankInfo: [20, 40, 60],
		},
		{
			index: 7,
			name: "Blessing of Sky",
			ranks: 5,
			desc: "Eclipse, Moon Shadow, Disturbed Weave, and Darkbound Spirit blessings grant <span class='tooltip-value'>#</span> All Resistances per layer.",
			rankInfo: [1, 2, 3, 4, 5],
		},
		{
			index: 10,
			name: "Arc Slash",
			ranks: 4,
			ranksnw: 2,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Cast time: 1 seconds</span>\n<span class='left'>Light Damage</span><span class='right'>Cooldown: 15 seconds</span>\n<span class='left'>AoE Attack</span><span class='right'>Range: Melee</span>\n\nAttacks the target and up to 15 targets within 10 meters around it. Deals damage equal to 110% of your Base Attack plus <span class='tooltip-value'>#</span> Attack. Clears your Eclipse blessing and target's Eclipse curse. For each layer of Eclipse blessing you cost, Arc Slash's Base Attack damage is increased by 20%.",
			rankInfo: ['<span class="req">Requires character to be Lv30</span>\n\n', '<span class="req">Requires character to be Lv45</span>\n\n', '<span class="req">Requires character to be Lv60</span>\n\n', '<span class="req">Requires character to be Lv75</span>\n\n'],
			rankInfo2: [137, 263, 382, 493],
			rankInfo3: [1219, 2206, 3171, 4114],
		},
		{
			index: 11,
			name: "Glow of Resurrection",
			ranks: 3,
			desc: "Shortens Wings of Liberty's cooldown by <span class='tooltip-value'>#</span> seconds, and increases the effect duration by <span class='tooltip-value'>#%</span>.",
			rankInfo: [10, 20, 30],
			rankInfo2: [10, 20, 30],
		},
		{
			index: 12,
			name: "Gift of Light",
			ranks: 4,
			desc: "Increases your Light Mastery by <span class='tooltip-value'>#</span>.",
			rankInfo: [20, 40, 60, 80],
		},
		{
			index: 13,
			name: "False Vision",
			ranks: 4,
			desc: "Increases Moonshade Slash's Base Attack Damage by <span class='tooltip-value'>#%</span>, and shortens its cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [5, 10, 15, 20],
			rankInfo2: [1.5, 3, 4.5, 6],
			parent: [0],
		},
		{
			index: 16,
			name: "Night Mirage",
			ranks: 4,
			desc: "Increases your Crit Chance by <span class='tooltip-value'>#%</span>, and lowers your Crit Dodge by <span class='tooltip-value'>#%</span>.",
			rankInfo: [2, 4, 6, 8],
			rankInfo2: [1, 2, 3, 4],
		},
		{
			index: 18,
			name: "Lunar Obliteration",
			ranks: 4,
			ranksnw: 2,
			desc: "Increases Arc Slash's Base Attack by <span class='tooltip-value'>#%</span>, and reduces its cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [10, 20, 30, 40],
			rankInfo2: [1, 2, 3, 4],
			parent: 4,
		},
		{
			index: 19,
			name: "Phantom Wings",
			ranks: 3,
			desc: "Casting Wings of Libety grants you <span class='tooltip-value'>#</span> seconds of Ensnare and Slow immunity. After reaching LV4, also dispels Stun, Slow, and Ensnare effects.",
			rankInfo: [6, 8, 10],
		},
		{
			index: 21,
			name: "Moon Wane",
			ranks: 3,
			desc: "Astral Chant additionally recovers <span class='tooltip-value'>#%</span> of your lost HP.",
			rankInfo: [15, 30, 45],
		},
		{
			index: 24,
			name: "Ethereal Lotus",
			ranks: 3,
			ranksnw: 2,
			desc: "Increases Sacred Lunar Blade's Base Attack damage by <span class='tooltip-value'>#%</span>, and shortens its cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [10, 20, 30],
			rankInfo2: [1, 2, 3],
		},
		{
			index: 26,
			name: "Silver Nova",
			ranks: 4,
			desc: "Arc Slash has a <span class='tooltip-value'>#%</span> Chance to clear the target's Eclipse curse and inflicts a Disarm effect. For each layer of Eclipse curse cleared, Disarm duration is increased by 1 second.",
			rankInfo: [20, 40, 60],
			parent: 9,
		},
		{
			index: 28,
			name: "Permanent Eclipse",
			ranks: 3,
			desc: "Sacred Lunar Blade has a <span class='tooltip-value'>#%</span> Chance to clear the target's Eclipse curse and inflicts an Ensnare effect. For each layer of Eclipse curse cleared, Ensnare duration is increased by 1 second.",
			rankInfo: [40, 80, 120],
			parent: 12,
		},
		{
			index: 30,
			name: "Astral Nova",
			ranks: 3,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Cast time: 3 seconds</span>\n<span class='left'>Light Damage</span><span class='right'>Cooldown: 20 seconds</span>\n<span class='left'>Single Attack</span><span class='right'>Range: Melee</span>\n\nA sword skill that strikes four times, dealing damage equal to 110% Base Attack plus <span class='tooltip-value'>#</span> Attack.",
			rankInfo: ['<span class="req">Requires character to be Lv55</span>\n\n', '<span class="req">Requires character to be Lv70</span>\n\n'],
			rankInfo2: [517, 639, 769],
			rankInfo3: [1084, 1961, 2839]
		},
		{
			index: 31,
			name: "Crystal Clear",
			ranks: 3,
			desc: "Reduces Mana cost of skills by <span class='tooltip-value'>#%</span>.",
			rankInfo: [3, 6, 9],
		},
		{
			index: 32,
			name: "Universal Principle",
			ranks: 3,
			desc: "Oath status's cooldown is shortened by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [5, 10, 15],
		},
		{
			index: 33,
			name: "Lunar Razor",
			ranks: 4,
			desc: "Increases Base Attack by <span class='tooltip-value'>#%</span>.",
			rankInfo: [1.5, 3, 4.5, 6],
		},
		{
			index: 34,
			name: "Dark Hostility",
			ranks: 3,
			ranksnw: 1,
			desc: "Increases Astral Nova's Base Attack damage by <span class='tooltip-value'>#%</span>. Each hit has a <span class='tooltip-value'>#%</span> chance to stun the target for 1 second.",
			rankInfo: [15, 30, 45],
			rankInfo2: [25, 50, 75],
			parent: 15,
		},
		{
			index: 36,
			name: "Blade of Fury",
			ranks: 3,
			desc: "<span class='tooltip-value'>#%</span> of the Resistance drained by Coming War is converted to your Light Mastery.",
			rankInfo: [4, 8, 12],
		},
		{
			index: 38,
			name: "Moon Corruption",
			ranks: 3,
			desc: "When the target is afflicted by Eclipse or Moon Shadow curse, each hit has a <span class='tooltip-value'>#%</span> chance to add a layer of Eclipse or Moon Shadow. If you have Eclipse or Moon Shadow blessing, each hit has a <span class='tooltip-value'>#%</span> chance to add a layer of Eclipse or Moon Shadow.",
			rankInfo: [25, 50, 75],
			rankInfo2: [25, 50, 75],
			parent: 19,
		},
		{
			index: 40,
			name: "Darkbound Spirit",
			ranks: 3,
			desc: "Sword skills will inflict a Darkbound Spirit effect, that steals <span class='tooltip-value'>#</span> Mastery points from the target. Darkbound Spirit (Curse) - Lowers target's All Masteries for <span class='tooltip-value'>#</span> seconds. Stacks up to 25 layers. Darkbound Spirit (Blessing) - Increases All your Masteries for <span class='tooltip-value'>#</span> seconds. Stacks up to 25 layers.",
			rankInfo: [1, 2, 3],
			rankInfo2: [3, 6, 9],
			rankInfo3: [3, 6, 9],
		},
		{
			index: 41,
			name: "Ritual of Dawn and Dusk",
			ranks: 5,
			desc: "During Fearless Heart status, your Base Attack is increased by <span class='tooltip-value'>#%</span>. During Heart of Protection status, your Base Defense is increased by <span class='tooltip-value'>#%</span>. During Heart of Piety status, your Base Health is increased by <span class='tooltip-value'>#%</span>.",
			rankInfo: [2, 4, 6, 8, 10],
			rankInfo2: [2, 4, 6, 8, 10],
			rankInfo3: [2, 4, 6, 8, 10],
		},
		{
			index: 43,
			name: "Inextricable Sin",
			ranks: 3,
			desc: "When Light Shield is active, each time you are hit, your attacker lose <span class='tooltip-value'>#</span> Light Resistance. Stacks up to 5 layers. Lasts for 60 seconds.",
			rankInfo: [10, 20, 30],
		},
		{
			index: 46,
			name: "Bleak Inferno",
			ranks: 1,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>306 Mana</span><span class='right'>Cast time: 2.5 seconds</span>\n<span class='left'>Light damage</span><span class='right'>Cooldown: 90 seconds</span>\n<span class='left'>AoE Curse</span><span class='right'>Range: Melee</span>\n\nGenerates a Wither Aura: Lasts 30 seconds. Stuns up to 15 targets within 8 meters at a 60 second interval. There is a 4% chance per second that the target is inflicted a Wither of Moon effect: Casting speed is reduced by 10% for 10 seconds. Stacks up to 8 layers.",
			rankInfo: ['<span class="req">Requires character to be Lv75</span>\n\n'],
		},
		{
			index: 47,
			name: "Endless Penalty",
			ranks: 4,
			desc: "Each layer of Wither of Moon reduces target's movement speed by <span class='tooltip-value'>#%</span> more. Each time the target is inflicted with the Wither of Moon, there is also a <span class='tooltip-value'>#%</span> chance that it is Silenced for 2 seconds. The Wither effect is not nullified by Slow immunity.",
			rankInfo: [2, 4, 6],
			rankInfo2: [3, 6, 9],
			parent: 25,
		},
		{
			index: 49,
			name: "Enchanced Blade",
			ranks: 3,
			desc: "Each time you cast Sword Skill, you get an Enchanced Blade effect for 10 seconds, stacking up to 10 layers. Each layer increases your Sword skills' range by <span class='tooltip-value'>#</span> meters. After gaining 3 layers, also increases your Crit Chance by 1%.",
			rankInfo: [0.2, 0.4, 0.6],
		},
		{
			index: 52,
			name: "Heart of Saint",
			ranks: 2,
			desc: "Within <span class='tooltip-value'>#</span> seconds after switching on Oath status, sword skills' Oath status effect is doubled.",
			rankInfo: [5, 10],
		},
		{
			index: 54,
			name: "Corrupted Ritual",
			ranks: 1,
			desc: "During Bleak Inferno duration, your negative effects will be cleared once per 3 seconds; Also during Wither of Moon, Eclipse Slash can dispel one of the target's beneficial buff once per 3 seconds.",
			rankInfo: [],
			parent: 25,
		},
	],
		// two
	[
		{
			index: 2,
			name: "Blinding Dazzle",
			ranks: 5,
			ranksnw: 3,
			desc: "Increases Sunlight Bash's Base Damage by <span class='tooltip-value'>#%</span>, and shortens its cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [5, 10, 15, 20, 25],
			rankInfo2: [0.5, 1, 1.5, 2, 2.5],
		},
		{
			index: 3,
			name: "Twilight Protection",
			ranks: 5,
			ranksnw: 2,
			desc: "Increases Glistening Strike's Base Damage by <span class='tooltip-value'>#%</span>, and shortens its cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [5, 10, 15, 20, 25],
			rankInfo2: [0.5, 1, 1.5, 2, 2.5],
		},
		{
			index: 5,
			name: "Feather Storm",
			ranks: 5,
			ranksnw: 2,
			desc: "Increases Wings of Liberty's duration by <span class='tooltip-value'>#</span> seconds, and its speed boost effect by <span class='tooltip-value'>#%</span>.",
			rankInfo: [5, 10, 15, 20, 25],
			rankInfo2: [5, 10, 15, 20, 25],
		},
		{
			index: 8,
			name: "Sand of Light",
			ranks: 5,
			desc: "When switching on Oath status, instantly recovers <span class='tooltip-value'>#%</span> of your lost Health.",
			rankInfo: [2, 4, 6, 8, 10],
		},
		{
			index: 10,
			name: "Bright Protection",
			ranks: 5,
			ranksnw: 2,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Cast time: 1 seconds</span>\n<span class='left'>Defense</span><span class='right'>Cooldown: 90 seconds</span>\n<span class='left'>Single Bless</span><span class='right'>Range: 8 meters</span>\n\nShield Talent Skill. Instantly heals the caster by <span class='tooltip-value'>#%</span> of his Max HP. Increases caster's Defense by 0.1% of his Max HP. Generates a 40% all absorption shield that absorbs damage equal to up to 2% of the caster's Max HP. Each layer of Sunlight doubles the effects above. Clears Sunlight stack upon casting.",
			rankInfo: ['<span class="req">Requires character to be Lv30</span>\n\n', '<span class="req">Requires character to be Lv45</span>\n\n', '<span class="req">Requires character to be Lv60</span>\n\n', '<span class="req">Requires character to be Lv75</span>\n\n', '<span class="req">Requires character to be Lv100</span>\n\n'],
			rankInfo2: [41, 89, 137, 185, 232],
			rankInfo3: [1, 2, 3, 4, 5],
		},
		{
			index: 11,
			name: "Restless Warmth",
			ranks: 5,
			desc: "Glistening Strike has a <span class='tooltip-value'>#%</span> chance to grant yourself a Sunlight status. Glistening Strike has a <span class='tooltip-value'>#%</span> chance to Ensnare target for 3 seconds. This effect has a 30 seconds cooldown. After reaching LV5, Sunlight Bash has a 10% chance to inflict Stun for 2 seconds.",
			rankInfo: [20, 40, 60, 80, 100],
			rankInfo2: [20, 40, 60, 80, 100],
			parent: 1,
		},
		{
			index: 12,
			name: "Extraplanar Light",
			ranks: 5,
			desc: "Astral Chant additionally recovers HP over time by <span class='tooltip-value'>#%</span> of your Max HP.",
			rankInfo: [0.5, 1, 1.5, 2, 2.5],
		},
		{
			index: 13,
			name: "Dream Silhouette",
			ranks: 4,
			desc: "When Wings of Liberty is on, reduces damage taken by <span class='tooltip-value'>#%</span>, and increases Crit Defense by <span class='tooltip-value'>#%</span>.",
			rankInfo: [1, 2, 3, 4],
			rankInfo2: [5, 10, 15, 20],
			parent: 2,
		},
		{
			index: 15,
			name: "Solar Stream",
			ranks: 5,
			ranksnw: 2,
			desc: "Fusion Light Blast's cooldown is reduced by <span class='tooltip-value'>#</span> second(s).",
			rankInfo: [5, 10, 15, 20, 25],
		},
		{
			index: 17,
			name: "Daybreak Will",
			ranks: 5,
			desc: "Increases Light Mastery and Light Resistance by <span class='tooltip-value'>#</span>.",
			rankInfo: [10, 20, 30, 40, 50],
		},
		{
			index: 18,
			name: "Living Being",
			ranks: 1,
			ranksnw: 1,
			desc: "Bright Protection's Defense boost and Shield effect are shared with teammates within 8 meters. This effect has an interval of 40 seconds.",
			rankInfo: [],
			parent: 4,
		},
		{
			index: 23,
			name: "Sunfire Mark",
			ranks: 5,
			ranksnw: 2,
			desc: "Fusion Light Blast has a <span class='tooltip-value'>#%</span> chance to mark the target it hits. If the marked target gets hit by Sunlight Bash or Glistening Strike within 5 seconds, it will be stunned for 2 seconds.",
			rankInfo: [20, 40, 60, 80, 100],
		},
		{
			index: 24,
			name: "Light Energy Conversion",
			ranks: 1,
			desc: "Shield Skills generate extra Threat.",
			rankInfo: [],
		},
		{
			index: 26,
			name: "Light Blessing",
			ranks: 1,
			desc: "Lowers Bright Protection's cooldown by 30 seconds. Bright Protection will clear Sunlight effect. Each layer of Sunlight you lose increases your Light Mastery and Resistance by 6.",
			rankInfo: [],
			parent: 10,
		},
		{
			index: 27,
			name: "Solar Halo Explosion",
			ranks: 5,
			ranksnw: 2,
			desc: "Casting Fusion Light Blast will weaken up to 15 targets within 8 meters, lowering all their Masteries by <span class='tooltip-value'>#</span>. Also increases Fusion Light Blast's Base Damage by <span class='tooltip-value'>#%</span> for 15 seconds.",
			rankInfo: [20, 40, 60, 80, 100],
			rankInfo2: [5, 10, 15, 20, 25],
			parent: 8,
		},
		{
			index: 29,
			name: "Redhot Flare",
			ranks: 2,
			ranksnw: 1,
			desc: "A switched-on skill that in <span class='tooltip-value'>#</span> seconds, costs 1% of your Max Mana per second. If you are attacked <span class='tooltip-value'>#</span> times, you get a Redhot Evocation effect: increases movement speed and dispels controlling effects. During Redhot Flare, if your attacker is hit by Sunlight Bash or Glistening Strike, its movement speed is lowered by 60% for 3 seconds.",
			rankInfo: [20, 25],
			rankInfo2: [8, 7],
		},
		{
			index: 31,
			name: "Ashen",
			ranks: 2,
			desc: "Within 3 seconds after casting Fusion Light Blast, there is a <span class='tooltip-value'>#%</span> chance to inflict Silence to up to 15 targets within 8 meters for 2 seconds.",
			rankInfo: [40, 70],
			parent: 14,
		},
		{
			index: 32,
			name: "Shine of Mercy",
			ranks: 1,
			desc: "Coming War drains 40% less Resistances.",
			rankInfo: [],
		},
		{
			index: 33,
			name: "Redhot Afterglow",
			ranks: 2,
			ranksnw: 2,
			desc: "The cooldown is reduced by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [15, 30],
			parent: 15,
		},
		{
			index: 34,
			name: "Extreme Smite",
			ranks: 2,
			desc: "You are no longer Silenced by Recuperative Break, but the skill duration is shortened by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [4, 3],
		},
		{
			index: 36,
			name: "Chastity",
			ranks: 2,
			desc: "Increases the healing effects you receive by <span class='tooltip-value'>#%</span>, and increases your PVE Tenacity by <span class='tooltip-value'>#</span>.",
			rankInfo: [3, 6],
			rankInfo2: [100, 200],
		},
		{
			index: 37,
			name: "Redhot Cleanse",
			ranks: 2,
			ranksnw: 2,
			desc: "Redhot Evocation's speed boost is increased by <span class='tooltip-value'>#%</span>, and also increases your Light Mastery by <span class='tooltip-value'>#</span>. After reaching LV2, also dispels the last negative effect.",
			rankInfo: [20, 40],
			rankInfo2: [80, 160],
			parent: 18,
		},
		{
			index: 39,
			name: "Eternal Light",
			ranks: 2,
			ranksnw: 2,
			desc: "Reduces Light Shield's cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [20, 40],
		},
		{
			index: 41,
			name: "Solar Geyser",
			ranks: 2,
			desc: "<span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Cast time: 1.5 seconds</span>\n<span class='left'>Light Defense</span><span class='right'>Cooldown: 15 seconds</span>\n<span class='left'>AoE Attack</span><span class='right'>Range: 10 meters</span>\n\nAfter triggering Redhot Flare's speed boost, this skill becomes available. Inflicts Stun to targets within 10 meters for 3 seconds, and deals damage equal to 180% of your Base Attack plus <span class='tooltip-value'>#</span> damage.",
			rankInfo: [542, 737],
			rankInfo2: [2130, 3150],
			parent: 21,
		},
		{
			index: 43,
			name: "Godly Might",
			ranks: 2,
			desc: "During Light Shield status, each time you are hit, you get a <span class='tooltip-value'>#%</span> Damage Reduction for 15 seconds. Stacks up to 20 layers.",
			rankInfo: [2, 4],
			parent: 22,
		},
		{
			index: 46,
			name: "Divine Intervention",
			ranks: 1,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>686 Mana</span><span class='right'>Cast time: 2 seconds</span>\n<span class='left'>Bless</span><span class='right'>Cooldown: 180 seconds</span>\n<span class='left'>Multi blessing</span><span class='right'>Range: 18 meters</span>\n\nWhen activating Shield skill, you will be Ensnared for 20. Teammates within 15 meters gain a 30% Absorption Shield.",
			rankInfo: ['<span class="req">Requires character to be Lv75</span>\n\n'],
		},
		{
			index: 47,
			name: "Sacred Sign",
			ranks: 4,
			desc: "During Divine Intervention status, increases teammates' Base Defense by <span class='tooltip-value'>#%</span>, and increases their healing effects by <span class='tooltip-value'>#%</span>.",
			rankInfo: [20, 40, 60, 80],
			rankInfo2: [5, 10, 15, 20],
			parent: 25,
		},
		{
			index: 49,
			name: "Divine Entity",
			ranks: 3,
			desc: "Increases your Base Defense by 2%, and Physical Resistance by <span class='tooltip-value'>#</span>.",
			rankInfo: [50, 100, 150],
		},
		{
			index: 51,
			name: "Supreme Volition",
			ranks: 2,
			desc: "Gains final damage reduction by <span class='tooltip-value'>#%</span>.",
			rankInfo: [2, 4],
		},
		{
			index: 54,
			name: "Light of the Pantheon",
			ranks: 1,
			desc: "Increases Divine Intervention Duration by 4 seconds. When Divine Intervention is active, Sunlight Bash's range is changed to 15 meters.",
			rankInfo: [],
			parent: 25,
		},
	],
		// three
	[
		{
			index: 1,
			name: "Astral Gift",
			ranks: 5,
			desc: "Midnight Pray's Base Healing effect is increased by <span class='tooltip-value'>#</span>.",
			rankInfo: [25, 50, 75, 100, 125],
		},
		{
			index: 2,
			name: "Ritual of Astral Realm",
			ranks: 5,
			desc: "Increases the Healing boost of Star Mark to Starsky Praise by <span class='tooltip-value'>#%</span>, and shortens Starsky Praise's cooldown by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [20, 40, 60, 80, 100],
			rankInfo2: [1, 2, 3, 4, 5],
		},
		{
			index: 5,
			name: "Dark Prelude",
			ranks: 2,
			ranksnw: 2,
			desc: "Midnight Pray's Star Mark increases target's Healing effect by <span class='tooltip-value'>#%</span>, and increases Midnight Pray's Healing range by <span class='tooltip-value'>#</span> meters.",
			rankInfo: [3, 6],
			rankInfo2: [1, 2],
		},
		{
			index: 7,
			name: "Vastness",
			ranks: 3,
			ranksnw: 1,
			desc: "Reduces the base MP cost of healing skills by <span class='tooltip-value'>#%</span>.",
			rankInfo: [10, 20, 30],
		},
		{
			index: 8,
			name: "Apex Illumination",
			ranks: 2,
			ranksnw: 1,
			desc: "Midnight Pray has a <span class='tooltip-value'>#%</span> chance to clear a negative status from the target.",
			rankInfo: [5, 10],
		},
		{
			index: 10,
			name: "Lunar Revival",
			ranks: 5,
			ranksnw: 2,
			desc: "<span class='tooltip-value'>#</span><span class='left'>0 Mana</span><span class='right'>Cast time: 0.5 seconds</span>\n<span class='left'>Bless</span><span class='right'>Cooldown: 40 seconds</span>\n<span class='left'>Single Bless</span><span class='right'>Range: Melee</span>\n\nA switched-on skill that increases the MP cost of Healing skills by <span class='tooltip-value'>#%</span> to increases the Healing strength by <span class='tooltip-value'>#%</span>. Darkness Sacrifice's Shield absorbs <span class='tooltip-value'>#%</span> more damage. Lasts for 18 seconds.",
			rankInfo: ['<span class="req">Requires character to be Lv30</span>\n\n', '<span class="req">Requires character to be Lv45</span>\n\n', '<span class="req">Requires character to be Lv60</span>\n\n', '<span class="req">Requires character to be Lv75</span>\n\n', '<span class="req">Requires character to be Lv100</span>\n\n'],
			rankInfo2: [10, 20, 30, 40, 50],
			rankInfo3: [8, 16, 24, 32, 40],
			rankInfo4: [10, 20, 30, 40, 50],
		},
		{
			index: 11,
			name: "Night Circle",
			ranks: 5,
			desc: "Astral Chant heals target by <span class='tooltip-value'>#%</span> of its lost HP per second. Starsky Praise recovers the target's MP by <span class='tooltip-value'>#%</span> of its lost MP.",
			rankInfo: [1, 2, 3, 4, 5],
			rankInfo2: [1, 2, 3, 4, 5],
			parent: 3,
		},
		{
			index: 12,
			name: "Energy Glow",
			ranks: 2,
			desc: "With 5 layers of Star Mark, Starsky Praise also clears a negative effect from yourself. At LV2, also clears a negative effect from the target.",
			rankInfo: [],
			parent: 4,
		},
		{
			index: 13,
			name: "Song of Martyr",
			ranks: 2,
			desc: "Midnight Pray and Starsky Praise's Crit Heal effect is increased by <span class='tooltip-value'>#%</span>.",
			rankInfo: [3, 6],
			parent: 2,
		},
		{
			index: 15,
			name: "Nocturnal Trap",
			ranks: 1,
			desc: "When activating Wings of Liberty, dispels all controlling effects from you. At LV2, also dispels Stun from you.",
			rankInfo: [],
		},
		{
			index: 16,
			name: "Disregard",
			ranks: 2,
			desc: "In 6 seconds after activating a general status, including Fearless Heart, Heart of Protection, and Heart of Piety, increases the chance that Midnight Pray, Starsky Praise, Darkness Sacrifice, and Lunar Revival are not interrupted by <span class='tooltip-value'>#%</span>.",
			rankInfo: [20, 40],
		},
		{
			index: 18,
			name: "Galaxy Ripple",
			ranks: 3,
			ranksnw: 1,
			desc: "Reduces the chance that Midnight Pray, Starsky Praise, Darkness Sacrifice, and Lunar Revival are interrupted by <span class='tooltip-value'>#%</span>.",
			rankInfo: [15, 30, 45],
			parent: 5,
		},
		{
			index: 19,
			name: "Sloth",
			ranks: 4,
			desc: "Reduces the MP cost of Healing Skills when Lunar Revival is active by <span class='tooltip-value'>#%</span>. Increases Lunar Revival's Duration by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [10, 20, 30, 40],
			rankInfo2: [1, 2, 3, 4],
			parent: 11,
		},
		{
			index: 20,
			name: "Nebula Grave",
			ranks: 2,
			desc: "The amount of Health and Mana restored when the target is revived is increased by <span class='tooltip-value'>#%</span>.",
			rankInfo: [20, 40],
		},
		{
			index: 21,
			name: "Everdark",
			ranks: 4,
			desc: "Increases Passive Skill Art of Dexterity's mass damage reduction strength by <span class='tooltip-value'>#%</span>.",
			rankInfo: [2, 4, 6, 8],
		},
		{
			index: 23,
			name: "Silver Rant",
			ranks: 3,
			desc: "Reduces Astral Chant's cooldown by <span class='tooltip-value'>#</span> seconds. Changes Astral Chant into a mass blessing with a range of <span class='tooltip-value'>#</span> meters.",
			rankInfo: [5, 10, 15],
			rankInfo2: [2, 5, 8],
		},
		{
			index: 26,
			name: "Piety",
			ranks: 4,
			desc: "Oath status's duration is increased by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [2, 4, 6, 8],
		},
		{
			index: 27,
			name: "Darklord's Offspring",
			ranks: 2,
			desc: "When Lunar Revival is active, increases your Darkness Mastery by <span class='tooltip-value'>#%</span> of your Max MP.",
			rankInfo: [0.1, 0.2],
		},
		{
			index: 30,
			name: "Soul Cleanse",
			ranks: 1,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>318 Mana</span><span class='right'>Cast time: 1 seconds</span>\n<span class='left'>Bless</span><span class='right'>Cooldown: 15 seconds</span>\n<span class='left'>Multi blessing</span><span class='right'>Range: 12 meters</span>\n\nTargets a friendly, and clears the last negative effect from all teammates within 6 meters. Also increases their movement speed by 50% for 3 seconds. At LV2, can be cast ignoring controlling effects.",
			rankInfo: ['<span class="req">Requires character to be Lv55</span>\n\n', '<span class="req">Requires character to be Lv70</span>\n\n'],
		},
		{
			index: 31,
			name: "Purified Body",
			ranks: 4,
			desc: "Increases Soul Cleanse's target's All Resistances by <span class='tooltip-value'>#</span> for <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [10, 20, 30, 40],
			rankInfo2: [6, 7, 8, 9],
			parent: 18,
		},
		{
			index: 33,
			name: "Underworld Echoes",
			ranks: 5,
			ranksnw: 1,
			desc: "Increases Darkness Sacrifice's target's Attack by <span class='tooltip-value'>#</span> plus <span class='tooltip-value'>#%</span> of the caster's Darkness Mastery.",
			rankInfo: [50, 100, 150, 200, 250],
			rankInfo2: [20, 40, 60, 80, 100],
		},
		{
			index: 34,
			name: "Ether Aspiration",
			ranks: 4,
			desc: "Reduces Soul Cleanse's cooldown by <span class='tooltip-value'>#</span> seconds. Inreases Soul Cleanse's speed boost duration by <span class='tooltip-value'>#</span> seconds.",
			rankInfo: [1, 2, 3, 4],
			rankInfo2: [1, 2, 3, 4],
			parent: 18,
		},
		{
			index: 38,
			name: "Astral Tides",
			ranks: 2,
			desc: "Midnight Pray and Starsky Praise's final Healing effect is <span class='tooltip-value'>#%</span>-<span class='tooltip-value'>#%</span>.",
			rankInfo: [95, 90],
			rankInfo2: [110, 120],
		},
		{
			index: 39,
			name: "Astral Cinder",
			ranks: 3,
			desc: "Using Coming War increases the targets' Crit Chance by <span class='tooltip-value'>#%</span>. Each point of the exceeding Darkness Mastery (your level x6) increases the targets' Crit Damage by an additional <span class='tooltip-value'>#%</span>.",
			rankInfo: [2, 4, 6],
			rankInfo2: [0.01, 0.02, 0.03],
		},
		{
			index: 41,
			name: "Star Codex",
			ranks: 4,
			desc: "Reduces Darkness Sacrifice's cooldown by <span class='tooltip-value'>#</span> seconds. Reduces the Max HP cost of Darkness Sacrifice by <span class='tooltip-value'>#%</span>.",
			rankInfo: [4, 8, 12, 16],
			rankInfo2: [1, 2, 3, 4],
			parent: 20,
		},
		{
			index: 42,
			name: "Astral Tear",
			ranks: 2,
			desc: "When Recuperative Break is on, heals targets by <span class='tooltip-value'>#%</span> HP per second.",
			rankInfo: [5, 10],
		},
		{
			index: 46,
			name: "Exitless Hell",
			ranks: 1,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>344 Mana</span><span class='right'>Cast time: 1 seconds</span>\n<span class='left'>Bless</span><span class='right'>Cooldown: 180 seconds</span>\n<span class='left'>Single Bless</span><span class='right'>Range: 12 meters</span>\n\nGrants the caster a 5 second Invinciblity. This effect ha a 90 second interval.",
			rankInfo: ['<span class="req">Requires character to be Lv75</span>\n\n'],
		},
		{
			index: 47,
			name: "Divine Stardust",
			ranks: 4,
			desc: "Exitless Hell has a <span class='tooltip-value'>#%</span> chance to grant the target a Divine Stardust status that lasts 45 seconds. Divine Stardust status will trigger a healing effect when target's HP is lower than 30%, recovering its HP by <span class='tooltip-value'>#%</span> of its Max HP.",
			rankInfo: [25, 50, 75, 100],
			rankInfo2: [10, 20, 30, 40],
			parent: 26,
		},
		{
			index: 49,
			name: "Gate of Banishment",
			ranks: 3,
			desc: "When Light Shield is active, each time you are hit, the attacker is inflicted a Guilty status. When the attacker stacks 3 layers of Guilty, it changes into a Confession status, which drains it <span class='tooltip-value'>#%</span> MP per second for a total of 8 seconds.",
			rankInfo: [3, 6, 9],
		},
		{
			index: 51,
			name: "Astral Sentience",
			ranks: 1,
			desc: "Curtain of Chaos' Shield HP is increased by 10%. Has a 15% chance to clear the target's Bleeding effect.",
			rankInfo: [],
		},
		{
			index: 52,
			name: "Skycycle Principle",
			ranks: 1,
			desc: "Curtain of Chaos' Shield generation interval is reduced by 1 second.",
			rankInfo: [],
		},
		{
			index: 54,
			name: "Endless Nirvana",
			ranks: 1,
			desc: "Exitless Hell's duration is increased by 1 seconds, and its cooldown is reduced by 30 seconds. At LV2, when casting the skill on others, you will also get its effects.",
			rankInfo: [],
			parent: 26,
		},
	]
];