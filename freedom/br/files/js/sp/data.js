var data = [
	// one
	[
		{
			index: 1,
			name: "Fúria Extrema",
			ranks: 5,
			desc: "Cada pilha de Fúria aumenta o dano base da Força da Fúria em <span class='tooltip-value'>#%</span> e o bônus de dano em <span class='tooltip-value'>#</span>.",
			rankInfo: [1, 2, 3, 4, 5],
			rankInfo2: [5, 10, 15, 20, 25],
		},
		{
			index: 2,
			name: "Poder Esmagador",
			ranks: 5,
			desc: "Aumenta o dano bônus do Esmagamento Severo em <span class='tooltip-value'>#%</span> mais <span class='tooltip-value'>#%</span> da sua Maestria em Terra.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [2, 4, 6, 8, 10],
			rankInfo2: [20, 40, 60, 80, 100],
		},
		{
			index: 5,
			name: "Recuperar",
			ranks: 5,
			desc: "Aumenta a taxa de Recuperação de Saúde concedida pela Aura da Recuperação em <span class='tooltip-value'>#%</span>.",
			rankInfo: [10, 20, 30, 40, 50],
		},
		{
			index: 6,
			name: "Surto de Defesa",
			ranks: 3,
			desc: "Aumenta o dano base do Contra-Ataque em <span class='tooltip-value'>#%</span>.",
			rankInfo: [15, 30, 45],
		},
		{
			index: 7,
			name: "Vontade da Terra",
			ranks: 3,
			desc: "Aumenta a sua chance de gerar Fúria cada vez que você é atingido enquanto o Foco Mental está ativo em <span class='tooltip-value'>#%</span>. Cada pilha de Fúria aumenta a velocidade de movimento em <span class='tooltip-value'>#%</span>.",
			rankInfo: [5, 10, 15],
			rankInfo2: [1, 2, 3],
		},
		{
			index: 9,
			name: "Ataque Esmagador",
			ranks: 4,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 2 segundo(s)</span>\n<span class='left'>Dano de terra</span><span class='right'>Intervalo: 5 segundo(s)</span>\n<span class='left'>Ataque contra alvo único</span><span class='right'>Curto alcance</span>\n\nInflige 100% do seu Ataque mais <span class='tooltip-value'>#</span> de bônus de dano. Reduz a Maestria em Terra do alvo em <span class='tooltip-value'>#</span> durante <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 30</span>\n\n', '<span class="req">Requer que o personagem seja nível 45</span>\n\n', '<span class="req">Requer que o personagem seja nível 60</span>\n\n', '<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			rankInfo2: [111, 168, 227, 287],
			rankInfo3: [1243, 2211, 3162, 4096],
			rankInfo4: [9, 10, 11, 12],
			rankInfo5: [30, 45, 60, 75],
		},
		{
			index: 10,
			name: "Raiva Esmagadora",
			ranks: 3,
			desc: "Cada pilha de Fúria aumenta a Chance Crítica do Ataque Esmagador em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2, 3],
			parent: 5,
		},
		{
			index: 11,
			name: "Linhagem das Rochas",
			ranks: 4,
			ranksnw: 4,
			desc: "Aumenta a duração do efeito Proteção de Rocha em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2, 3, 4],
		},
		{
			index: 13,
			name: "Código da Fúria",
			ranks: 3,
			desc: "Reduz o intervalo da Força da Fúria em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [2, 4, 6],
		},
		{
			index: 15,
			name: "Força das Rochas",
			ranks: 2,
			desc: "Proteção de Rocha aumenta o seu Ataque em <span class='tooltip-value'>#%</span> ao invés de reduzi-lo.",
			rankInfo: [10, 30],
			parent: 7,
		},
		{
			index: 16,
			name: "Essência da Terra",
			ranks: 3,
			desc: "Aumenta a sua Resistência Terrestre em <span class='tooltip-value'>#</span>.",
			rankInfo: [20, 30, 40],
		},
		{
			index: 17,
			name: "Código da Fenda",
			ranks: 3,
			ranksnw: 2,
			desc: "Reduz o intervalo de uso da Fenda da Terra em <span class='tooltip-value'>#</span> segundo(s). Aumenta a Precisão da Fenda da Terra em <span class='tooltip-value'>#</span>.",
			rankInfo: [1, 2, 3],
			rankInfo2: [20, 40, 60],
		},
		{
			index: 18,
			name: "Zombaria Mágica",
			ranks: 3,
			desc: "Zombaria drena <span class='tooltip-value'>#</span> de Mana do alvo e reduz seu Mana Máximo em <span class='tooltip-value'>#</span>.",
			rankInfo: [100, 200, 300],
			rankInfo2: [400, 800, 1200],
		},
		{
			index: 20,
			name: "Maestria de Pulso",
			ranks: 4,
			desc: "Aumenta a sua Resistência Terrestre em <span class='tooltip-value'>#</span>.",
			rankInfo: [20, 30, 40, 50],
		},
		{
			index: 21,
			name: "Ruptura",
			ranks: 3,
			desc: "Dá à Fenda da Terra uma chance de <span class='tooltip-value'>#%</span> de atordoar o alvo durante 1-3 segundo(s).",
			rankInfo: [20, 35, 50],
			parent: 11,
		},
		{
			index: 22,
			name: "Rajada",
			ranks: 4,
			ranksnw: 2,
			desc: "Aumenta o bônus da velocidade de movimento concedido pela Força da Tempestade em <span class='tooltip-value'>#%</span> e reduz o intervalo em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [5, 10, 15, 20],
			rankInfo2: [5, 10, 15, 20],
		},
		{
			index: 23,
			name: "Brisa Revigorante",
			ranks: 1,
			desc: "A Força da Tempestade remove de você os efeitos Devagar e Enredar.",
			rankInfo: [],
			parent: 15,
		},
		{
			index: 25,
			name: "Força Brutal",
			ranks: 3,
			desc: "Aumenta o tempo de duração em que a Força da Fúria e a Fenda da Terra atordoam seus alvos em <span class='tooltip-value'>#</span> segundo(s). Este efeito pode não ocorrer todas as vezes que estas habilidades são lançadas.",
			rankInfo: [1, 2, 3],
		},
		{
			index: 26,
			name: "Fonte da Terra",
			ranks: 3,
			desc: "Reduz o custo de Mana das suas habilidades de ataque da Terra em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20, 30],
		},
		{
			index: 27,
			name: "Pilhagem Brutal",
			ranks: 2,
			desc: "Aumenta a chance de que a Fúria da Luz desarme o alvo em <span class='tooltip-value'>#%</span>.",
			rankInfo: [20, 40],
		},
		{
			index: 30,
			name: "Contramedida Absoluta",
			ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 2 segundo(s)</span>\n<span class='left'>Defesa</span><span class='right'>Intervalo: 90 segundo(s)</span>\n<span class='left'>Autobênção</span><span class='right'>Alcance: Nenhum</span>\n\nDura <span class='tooltip-value'>#</span> segundo(s). Causa bônus de dano equivalente a <span class='tooltip-value'>#%</span> da sua Defesa aos inimigos que o atacam. Tem uma chance de 50% de atordoar alvos durante 2 segundos. Cada pilha de Fúria aumenta a chance de atordoar em 5%.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 55</span>\n\n', '<span class="req">Requer que o personagem seja nível 70</span>\n\n'],
			rankInfo2: [185, 232],
			rankInfo3: [8, 10],
			rankInfo4: [100, 200],
		},
		{
			index: 32,
			name: "Extensão da Vida",
			ranks: 3,
			desc: "Aumenta a sua Saúde Máxima em <span class='tooltip-value'>#%</span> mais <span class='tooltip-value'>#</span>.",
			rankInfo: [2, 4, 6],
			rankInfo2: [200, 400, 600],
		},
		{
			index: 33,
			name: "Ira da Terra",
			ranks: 2,
			desc: "Suas habilidades de ataque da Terra têm <span class='tooltip-value'>#%</span> de chance de gerar uma pilha extra de Fúria.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [6, 12],
		},
		{
			index: 35,
			name: "Lealdade",
			ranks: 1,
			desc: "Reduz o custo de Mana do Guardião Fiel em 50%.",
			rankInfo: [],
		},
		{
			index: 37,
			name: "Fúria da Terra",
			ranks: 3,
			ranksnw: 1,
			desc: "Aumenta o dano base do Esmagamento Severo, Fúria do Gelo, Ataque Esmagador e Penitência Severa em <span class='tooltip-value'>#%</span>.",
			rankInfo: [10, 15, 20],
		},
		{
			index: 38,
			name: "Contra o Tempo",
			ranks: 3,
			desc: "Reduz o intervalo da Contramedida Absoluta em <span class='tooltip-value'>#</span> segundo(s). Aumenta a sua Saúde Máxima em <span class='tooltip-value'>#%</span> enquanto a Contramedida Absoluta estiver ativa.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [5, 10, 15],
			rankInfo2: [10, 20, 30],
			parent: 20,
		},
		{
			index: 42,
			name: "Ataque Enfraquecedor",
			ranks: 1,
			desc: "Penitência Severa reduz a Chance Crítica do alvo em um adicional de 3%-6%. Aumenta a duração do efeito em 5 segundos.",
			rankInfo: [],
		},
		{
			index: 43,
			name: "Determinação Reforçada",
			ranks: 2,
			desc: "Cada pilha de Fúria tem <span class='tooltip-value'>#%</span> de chance de dissipar os efeitos Enredar e Devagar. No Nível 2, o seu efeito negativo mais recente será removido.",
			rankInfo: [5, 10],
		},
		{
			index: 45,
			name: "Alma da Terra",
			ranks: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>498 Mana</span><span class='right'>Tempo de ativação: 2.50 segundo(s)</span>\n<span class='left'>Dano de terra</span><span class='right'>Intervalo: 25 segundo(s)</span>\n<span class='left'>Ataque contra alvo único</span><span class='right'>Curto alcance</span>\n\nInflige 150% do seu Ataque mais 5164 de bônus de dano. Causa o efeito Quebra de Almas Terrestre no alvo, que aumenta o dano em 8% por 10 segundos. Cada pilha de Fúria aumenta a duração da Quebra de Almas Terrestre em 1 segundo.",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			parent: 24,
		},
	],
		// two
	[
		{
			index: 1,
			name: "Proteção Mental",
			ranks: 5,
			ranksnw: 3,
			desc: "Aumenta o dano base do Contra-Ataque em <span class='tooltip-value'>#%</span> enquanto o Foco Mental está ativo. Mo nível 5, reduz o Ataque do alvo em 10% durante 9 segundos.",
			rankInfo: [10, 20, 30, 40, 50],
		},
		{
			index: 2,
			name: "Raiva Mental",
			ranks: 5,
			desc: "Aumenta a duração do Foco Mental em <span class='tooltip-value'>#</span> segundo(s). Cada pilha de Fúria aumenta o seu Ataque em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [60, 120, 180, 240, 300],
			rankInfo2: [0.2, 0.4, 0.6, 0.8, 1.0],
		},
		{
			index: 5,
			name: "Alma da Proteção",
			ranks: 3,
			desc: "Aumenta a duração do Modo Guardião em <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [2, 4, 6],
			parent: [0],
		},
		{
			index: 6,
			name: "Trava da Fúria",
			ranks: 3,
			desc: "Força da Fúria ganha <span class='tooltip-value'>#%</span> de chance de não consumir Fúria.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30, 50],
		},
		{
			index: 7,
			name: "Hino da Luz",
			ranks: 5,
			desc: "Enquanto a Aura da Recuperação está ativa, os integrantes do grupo afetado recuperam uma quantidade de Mana equivalente a <span class='tooltip-value'>#%</span> do efeito original quando atingidos.",
			rankInfo: [20, 40, 60, 80, 100],
		},
		{
			index: 9,
			name: "Benção das Pedras",
			ranks: 3,
			desc: "Proteção de Rocha remove todos os efeitos negativos que estiverem afetando os integrantes do grupo em um raio de 20 metros e torna você imunes a danos futuros. Os integrantes do grupo afetado ficam imunes a todos os efeitos negativos durante <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 3, 5],
		},
		{
			index: 10,
			name: "Aura da Natureza",
			ranks: 4,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: Instantâneo</span>\n<span class='left'>Defesa</span><span class='right'>Intervalo: 5 segundo(s)</span>\n<span class='left'>Bênção de aura</span><span class='right'>Alcance: Nenhum</span>\n\nAumenta a Resistência Terrestre e a Resistência de Vento de todos os integrantes do grupo em um raio de 16 metro(s) em <span class='tooltip-value'>#</span>. Consome 0.5% do seu Mana máximo a cada 5 segundos. Apenas uma Aura pode ficar ativa por vez.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 30</span>\n\n', '<span class="req">Requer que o personagem seja nível 45</span>\n\n', '<span class="req">Requer que o personagem seja nível 60</span>\n\n', '<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			rankInfo2: [112, 160, 210, 261],
			rankInfo3: [45, 70, 95, 120],
		},
		{
			index: 12,
			name: "Precisão de Luz",
			ranks: 3,
			desc: "Aumenta a sua Precisão em <span class='tooltip-value'>#</span>. Aura da Natureza, Aura da Chama Gélida e Aura de Caos concedem o efeito Precisão de Luz, que aumenta a Precisão dos integrantes do grupo afetado em <span class='tooltip-value'>#</span>.",
			rankInfo: [11, 16, 21],
			rankInfo2: [11, 16, 21],
		},
		{
			index: 13,
			name: "Proteção em Massa",
			ranks: 3,
			desc: "Aumenta a duração da Proteção da Força em <span class='tooltip-value'>#</span> segundo(s) e reduz seu custo de Mana em <span class='tooltip-value'>#%</span>.",
			rankInfo: [300, 600, 900],
			rankInfo2: [15, 30, 45],
		},
		{
			index: 14,
			name: "Aura da Chama Gélida",
			ranks: 4,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: Instantâneo</span>\n<span class='left'>Defesa</span><span class='right'>Intervalo: 5 segundo(s)</span>\n<span class='left'>Bênção de aura</span><span class='right'>Alcance: Nenhum</span>\n\nAumenta a Resistência Aquática e a Resistência de Fogo de todos os integrantes do grupo em um raio de 16 metro(s) em <span class='tooltip-value'>#</span>. Consome 0.5% do seu Mana máximo a cada 5 segundos. Apenas uma Aura pode ficar ativa por vez.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 35</span>\n\n', '<span class="req">Requer que o personagem seja nível 50</span>\n\n', '<span class="req">Requer que o personagem seja nível 65</span>\n\n', '<span class="req">Requer que o personagem seja nível 80</span>\n\n'],
			rankInfo2: [112, 160, 210, 261],
			rankInfo3: [45, 70, 95, 120],
		},
		{
			index: 16,
			name: "Barreira de Luz",
			ranks: 3,
			desc: "Aumenta a sua Resistência de Luz em <span class='tooltip-value'>#</span> e a sua Defesa em <span class='tooltip-value'>#</span>.",
			rankInfo: [20, 30, 40],
			rankInfo2: [10, 15, 20],
		},
		{
			index: 18,
			name: "Aura de Caos",
			ranks: 4,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: Instantâneo</span>\n<span class='left'>Defesa</span><span class='right'>Intervalo: 5 segundo(s)</span>\n<span class='left'>Bênção de aura</span><span class='right'>Alcance: Nenhum</span>\n\nAumenta a Resistência de Luz e a Resistência da Escuridão de todos os integrantes do grupo em um raio de 16 metro(s) em <span class='tooltip-value'>#</span>. Consome 0.5% do seu Mana máximo a cada 5 segundos. Apenas uma Aura pode ficar ativa por vez.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 40</span>\n\n', '<span class="req">Requer que o personagem seja nível 55</span>\n\n', '<span class="req">Requer que o personagem seja nível 70</span>\n\n', '<span class="req">Requer que o personagem seja nível 80</span>\n\n'],
			rankInfo2: [112, 160, 210, 261],
			rankInfo3: [45, 70, 95, 120],
		},
		{
			index: 20,
			name: "Maestria em Luz",
			ranks: 4,
			desc: "Aumenta a sua Maestria em Luz em <span class='tooltip-value'>#</span>.",
			rankInfo: [20, 30, 40, 50],
		},
		{
			index: 21,
			name: "Turbilhão",
			ranks: 3,
			desc: "Aumenta o bônus da velocidade de movimento concedido pela Força da Tempestade em <span class='tooltip-value'>#%</span>.",
			rankInfo: [10, 20, 30],
		},
		{
			index: 23,
			name: "Foco da Aura",
			ranks: 4,
			ranksnw: 2,
			desc: "Suas habilidades de Aura aumentam a sua Evasão em <span class='tooltip-value'>#</span> e a Esquiva Crítica aumenta em <span class='tooltip-value'>#%</span>.",
			rankInfo: [4, 8, 12, 16],
			rankInfo2: [1.5, 2.0, 2.5, 3.0],
		},
		{
			index: 25,
			name: "Raiva da Luz",
			ranks: 4,
			ranksnw: 2,
			desc: "Fúria da Luz reduz a Esquiva Crítica dos alvos em <span class='tooltip-value'>#%</span> e a efetividade das habilidades de cura lançadas sobre os alvos abaixo de 50% de Saúde em 10% durante <span class='tooltip-value'>#</span> segundos.",
			rankInfo: [1, 2, 3, 4],
			rankInfo2: [10, 20, 30, 40],
		},
		{
			index: 26,
			name: "Conhecimento da Fúria da Luz",
			ranks: 2,
			desc: "Reduz o intervalo da Fúria da Luz em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1.5, 3],
			parent: 15,
		},
		{
			index: 28,
			name: "Eficiência da Aura",
			ranks: 4,
			desc: "Reduz o custo de Mana das suas habilidades de Aura em <span class='tooltip-value'>#%</span>.",
			rankInfo: [15, 30, 45, 60],
		},
		{
			index: 29,
			name: "Olhos da Tempestade",
			ranks: 2,
			desc: "Aumenta o alcance da Força da Tempestade em <span class='tooltip-value'>#</span> metro(s) e dá 50% de chance de dissipar os efeitos retardantes e de enredamento dos integrantes do grupo afetado.",
			rankInfo: [5, 10],
		},
		{
			index: 30,
			name: "Punho dos Céus",
			ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 2 segundo(s)</span>\n<span class='left'>Dano de luz</span><span class='right'>Intervalo: 5 segundo(s)</span>\n<span class='left'>Ataque contra alvo único</span><span class='right'>Curto alcance</span>\n\nInflige 100% do seu Ataque mais <span class='tooltip-value'>#</span> de bônus de dano. Reduz as Resistências do alvo em <span class='tooltip-value'>#</span> durante <span class='tooltip-value'>#</span> segundo(s). Acumula 3 vezes. Cada pilha de Fúria aumenta o bônus de dano em 2% e a duração em 0.5 segundo.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 55</span>\n\n', '<span class="req">Requer que o personagem seja nível 70</span>\n\n'],
			rankInfo2: [218, 280],
			rankInfo3: [1802, 2746],
			rankInfo4: [30, 45],
			rankInfo5: [9, 10],
		},
		{
			index: 33,
			name: "Enraivecer",
			ranks: 2,
			desc: "Suas habilidades de ataque da Luz têm <span class='tooltip-value'>#%</span> de chance de gerar uma pilha de Fúria.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [8, 16],
		},
		{
			index: 35,
			name: "Aura de Sabedoria",
			ranks: 3,
			desc: "Aumenta o seu Mana Máximo em <span class='tooltip-value'>#%</span> enquanto uma Aura está ativa.",
			rankInfo: [20, 30, 40],
			parent: 14,
		},
		{
			index: 37,
			name: "Alma de Penitência",
			ranks: 2,
			desc: "Reduz o intervalo da Penitência Severa em <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [5, 10],
		},
		{
			index: 38,
			name: "Luz da Destruição",
			ranks: 2,
			desc: "Aumenta o bônus de dano da Fúria da Luz e Punho dos Céus em <span class='tooltip-value'>#%</span>. O Punho dos Céus reduz as Resistências e a eficiência das habilidades de cura lançadas sobre o alvo em <span class='tooltip-value'>#%</span>. Acumula 3 vezes.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20],
			rankInfo2: [5, 10],
			parent: 19,
		},
		{
			index: 41,
			name: "Poder da Luz",
			ranks: 2,
			desc: "Reduz o intervalo de uso das habilidades ofensivas de Luz em <span class='tooltip-value'>#</span> segundo(s) e a Chance Crítica aumenta em <span class='tooltip-value'>#%</span>.",
			rankInfo: [1, 2],
			rankInfo2: [3, 6],
		},
		{
			index: 43,
			name: "Coragem de Guarda",
			ranks: 2,
			desc: "Aumenta a sua Esquiva Crítica em <span class='tooltip-value'>#%</span> enquanto uma habilidade de Aura está ativa.",
			rankInfo: [1, 2],
		},
		{
			index: 46,
			name: "Assistência Defensiva",
			ranks: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>343 Mana</span><span class='right'>Tempo de ativação: 1 segundo(s)</span>\n<span class='left'>Defesa</span><span class='right'>Intervalo: 120 segundo(s)</span>\n<span class='left'>Bênção para múltiplos alvos</span><span class='right'>Alcance: Nenhum</span>\n\nReduz o dano futuro em 30% para todos os integrantes do grupo em um raio de 10 metros durante 15 segundos. Esta habilidade não tem efeito sobre você.",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
		},
	],
		// three
	[
		{
			index: 1,
			name: "Arte dos Guardiões",
			ranks: 5,
			desc: "Reduz o intervalo do Contra-Ataque em <span class='tooltip-value'>#</span> segundo(s). O Modo Guardião reduz o dano futuro em um adicional de <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2, 3, 4, 5],
			rankInfo2: [1, 2, 3, 4, 5],
		},
		{
			index: 2,
			name: "Soco Esmagador",
			ranks: 5,
			desc: "Esmagamento Severo ganha uma chance de <span class='tooltip-value'>#%</span> de reduzir o ataque base do alvo em <span class='tooltip-value'>#%</span> durante 20 segundo(s). Acumula 3 vezes.",
			rankInfo: [10, 20, 30, 40, 50],
			rankInfo2: [1, 2, 3, 4, 5],
		},
		{
			index: 5,
			name: "Código da Zombaria",
			ranks: 3,
			desc: "Reduz o intervalo da Zombaria em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [4, 6, 8],
		},
		{
			index: 6,
			name: "Determinação Abominável",
			ranks: 3,
			desc: "O Foco Mental aumenta a sua Precisão em <span class='tooltip-value'>#</span>, e a quantidade de ameaça gerada pelas suas habilidades em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [6, 12, 18],
			rankInfo2: [20, 40, 60],
		},
		{
			index: 7,
			name: "Fonte da Recuperação",
			ranks: 5,
			desc: "A Aura da Recuperação aumenta a eficiência dos efeitos de cura em integrantes do grupo afetado em <span class='tooltip-value'>#%</span>. Aumenta a quantidade de Saúde que recuperam em <span class='tooltip-value'>#%</span> enquanto são atacados.",
			rankInfo: [1, 2, 3, 4, 5],
			rankInfo2: [20, 40, 60, 80, 100],
		},
	   {
			index: 9,
			name: "Zombaria em Massa",
			ranks: 3,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 1 segundo(s)</span>\n<span class='left'>Terra</span><span class='right'>Intervalo: 120 segundo(s)</span>\n<span class='left'>Maldição contra múltiplos alvos</span><span class='right'>Alcance: Nenhum</span>\n\nProvoca até <span class='tooltip-value'>#</span> alvos em um raio de 20 metros por <span class='tooltip-value'>#</span> segundo(s). Remove Furtivo e os impede de entrar no modo Furtivo durante 8 segundos. A taxa de sucesso de Zombaria em Massa é a mesma da Zombaria.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 30</span>\n\n', '<span class="req">Requer que o personagem seja nível 45</span>\n\n', '<span class="req">Requer que o personagem seja nível 60</span>\n\n'],
			rankInfo2: [624, 893, 1170],
			rankInfo3: [16, 17, 18],
			rankInfo4: [6, 7, 8],
		},
		{
			index: 10,
			name: "Zombaria de Caos",
			ranks: 3,
			ranksnw: 1,
			desc: "Zombaria reduz a Evasão do alvo em <span class='tooltip-value'>#</span> durante 8 segundos. Zombaria em Massa reduz a Precisão do alvo em <span class='tooltip-value'>#</span> durante 8 segundos.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30, 45],
			rankInfo2: [30, 60, 90],
			parent: 5,
		},
	   {
			index: 11,
			name: "Espírito das Rochas",
			ranks: 4,
			desc: "Reduz o intervalo de uso da Proteção de Rocha em <span class='tooltip-value'>#</span> segundo(s). A Proteção de Rocha aumenta a eficiência dos efeitos de cura lançados em você em <span class='tooltip-value'>#%</span> e restaura <span class='tooltip-value'>#%</span> da sua Saúde Máxima a cada 2 segundos.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30, 45, 60],
			rankInfo2: [10, 20, 30, 40],
			rankInfo3: [2, 4, 6, 8],
		},
		{
			index: 13,
			name: "Crença da Proteção",
			ranks: 3,
			ranksnw: 1,
			desc: "Sua Saúde Máxima aumenta em 1% mais <span class='tooltip-value'>#</span> quando você é atingido enquanto a Proteção da Força está ativa. Pode ser acumulado 10 vezes e tem duração de 15 segundo(s).",
			rankInfo: [50, 100, 150],
		},
		{
			index: 15,
			name: "Cobertura do Poder de Fogo",
			ranks: 2,
			desc: "Aumenta a quantidade de ameaça gerada pelo bônus de dano em <span class='tooltip-value'>#%</span>.",
			rankInfo: [50, 100],
		},
		{
			index: 16,
			name: "Pele de Pedra",
			ranks: 4,
			desc: "Aumenta a sua Resistência Física em <span class='tooltip-value'>#</span>.",
			rankInfo: [20, 30, 40, 50],
		},
		{
			index: 17,
			name: "Luz da Crença",
			ranks: 3,
			desc: "Aumenta a duração do efeito da Crença da Proteção <span class='tooltip-value'>#</span> em segundo(s).",
			rankInfo: [5, 10, 15],
			parent: 8,
		},
		{
			index: 19,
			name: "Desmoronamento",
			ranks: 3,
			ranksnw: 2,
			desc: "Aumenta o número de inimigos afetados pela Fenda da Terra em <span class='tooltip-value'>#</span> e aumenta seu alcance em <span class='tooltip-value'>#</span> metro(s).",
			rankInfo: [2, 4, 6],
			rankInfo2: [2, 4, 6],
		},
	   {
			index: 20,
			name: "Fortificação da Proteção",
			ranks: 4,
			desc: "Aumenta a sua Defesa em <span class='tooltip-value'>#</span>.",
			rankInfo: [16, 24, 32, 40],
		},
		{
			index: 21,
			name: "Béncão dos Turbilhões",
			ranks: 3,
			desc: "Aumenta a duração da Força da Tempestade em <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [2, 4, 6],
		},
	   {
			index: 23,
			name: "Fissura",
			ranks: 4,
			desc: "A Fenda da Terra reduz a velocidade de movimento dos alvos em <span class='tooltip-value'>#%</span>. O Nível 2 aumenta a duração do efeito Devagar.",
			rankInfo: [3.5, 7, 10.5, 14],
			parent: 12,
		},
		{
			index: 25,
			name: "Pedregulho Guardião",
			ranks: 3,
			ranksnw: 2,
			desc: "Aumenta a sua Defesa básica em <span class='tooltip-value'>#%</span> e reduz danos futuros em um adicional de <span class='tooltip-value'>#%</span> enquanto o Modo Guardião estiver ativo.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [2, 4, 6],
			rankInfo2: [2, 4, 6],
		},
		{
			index: 26,
			name: "Castigo Infame",
			ranks: 3,
			desc: "Reduz o intervalo da Zombaria em Massa em <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [12, 24, 36],
			parent: 6,
		},
		{
			index: 27,
			name: "Sabedoria",
			ranks: 2,
			desc: "Reduz os custos de Mana de Foco Mental, Zombaria, Zombaria em Massa e Proteção da Força em <span class='tooltip-value'>#%</span>.",
			rankInfo: [20, 40],
		},
		{
			index: 30,
			name: "Agitação",
			ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 2 segundo(s)</span>\n<span class='left'>Dano de terra</span><span class='right'>Intervalo: 8 segundo(s)</span>\n<span class='left'>Ataque contra múltiplos alvos</span><span class='right'>Alcance: 8 metro(s)</span>\n\nInflige 100% do seu Ataque mais <span class='tooltip-value'>#</span> de bônus de dano em até 15 alvos à sua frente a no máximo 8 metros de distância. Reduz a Evasão dos alvos em <span class='tooltip-value'>#</span>. Cada pilha de Fúria aumenta o bônus de dano em 2% e a duração do efeito de redução da Evasão em 0.5 segundo.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 55</span>\n\n', '<span class="req">Requer que o personagem seja nível 70</span>\n\n'],
			rankInfo2: [292, 373],
			rankInfo3: [2319, 3526],
			rankInfo4: [10, 12],
		},
		{
			index: 31,
			name: "Explosão de Magma",
			ranks: 2,
			desc: "Aumenta o dano base da Agitação em <span class='tooltip-value'>#%</span>. Aumenta a quantidade de ameaça gerada pela Agitação e Fenda da Terra em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30],
			rankInfo2: [50, 100],
			parent: 19,
		},
		{
			index: 34,
			name: "Coração de Sentinela",
			ranks: 2,
			ranksnw: 1,
			desc: "Aumenta a duração do Guardião Fiel em <span class='tooltip-value'>#</span> segundo(s) e o alcance em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [3, 6],
			rankInfo2: [15, 30],
		},
		{
			index: 35,
			name: "Tenacidade de Rocha",
			ranks: 3,
			desc: "Aumenta a sua Esquiva Crítica em <span class='tooltip-value'>#%</span>.",
			rankInfo: [1, 2, 3],
		},
		{
			index: 37,
			name: "Maestria da Proteção",
			ranks: 3,
			desc: "Reduz a penalidade de Ataque causada pelo Modo Guardião em <span class='tooltip-value'>#%</span>.",
			rankInfo: [30, 60, 100],
			parent: 16,
		},
		{
			index: 39,
			name: "Energia da Terra",
			ranks: 2,
			desc: "Cada pilha de Fúria aumenta o dano da Fenda da Terra e Penitência Severa em <span class='tooltip-value'>#%</span>.",
			rankInfo: [2, 3],
		},
		{
			index: 42,
			name: "Fé",
			ranks: 2,
			desc: "Reduz o intervalo de uso do Guardião Fiel em <span class='tooltip-value'>#</span> segundo(s). Se você for atacado dentro de 12 segundos após o lançamento dessa habilidade, <span class='tooltip-value'>#%</span> da sua Saúde usada para criar o escudo será removida. Este efeito pode ocorrer até 5 vezes.",
			rankInfo: [5, 10],
			rankInfo2: [15, 30],
			parent: 21,
		},
		{
			index: 43,
			name: "Entrincheirar",
			ranks: 3,
			desc: "Aumenta o dano base do Esmagamento Severo, Contra-Ataque, Fúria da Luz e Penitência Severa em <span class='tooltip-value'>#%</span> de sua Defesa. Aumenta a quantidade de dano que a Aura de Retaliação reflete de volta aos seus atacantes em <span class='tooltip-value'>#%</span> de sua Defesa.",
			rankInfo: [10, 20, 30],
			rankInfo2: [10, 20, 30],
		},
		{
			index: 47,
			name: "Alma de Piedra",
			ranks: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>150 Mana</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 120 segundos</span>\n<span class='left'>Auto bendición</span><span class='right'>Alcance: Ninguno</span>\n\nDisipa los efectos negativos y absorbe el 60% del daño porvenir durante 15 segundos. Reduce tu velocidad de movimiento en 75%. Esta habilidad se puede utilizar mientras esté callada o golpeada.",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			// Error desc 952. Used ES. //
		},
	]
];