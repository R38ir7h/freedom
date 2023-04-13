var data = [
	// one
	[
		{
			index: 1,
			name: "Sabotagem",
			ranks: 5,
			desc: "Esmagar ganha uma chance de 50% de reduzir a Defesa do alvo em <span class='tooltip-value'>#</span> por 20 segundos. Cada acumulação da Posição de Combate aumenta a chance deste efeito acontecer em 20%. Acumula 3 vezes. Na Classificação 5, cada acumulação reduz adicionalmente a Defesa do alvo em 1%.",
			rankInfo: [5, 10, 15, 20, 25],
		},
		{
			index: 3,
			name: "Maníaco por Batalha",
			ranks: 5,
			desc: "Cada acumulação da Posição de Combate aumenta o bônus de Defesa em <span class='tooltip-value'>#%</span> extra <span class='tooltip-value'>#</span>.",
			rankInfo: [0.3, 0.6, 0.9, 1.2, 1.5],
			rankInfo2: [3, 6, 9, 12, 15],
		},
		{
			index: 5,
			name: "Fúria do Relâmpago",
			ranks: 3,
			desc: "Aumenta o dano de bônus dos dois golpes do Corte da Sanguessuga em <span class='tooltip-value'>#%</span>.",
			rankInfo: [3, 6, 9],
		},
		{
			index: 7,
			name: "Música de Guerra da Agilidade",
			ranks: 5,
			ranksnw: 2,
			desc: "O Grito de Guerra aumenta adicionalmente a sua Defesa em <span class='tooltip-value'>#</span> e a sua Evasão em <span class='tooltip-value'>#</span>. Aumenta a sua Defesa base em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [3, 6, 9, 12, 15],
			rankInfo2: [1, 2, 3, 4, 5],
			rankInfo3: [0.5, 1, 1.5, 2, 2.5],
		},
		{
			index: 8,
			name: "Desprezo",
			ranks: 3,
			desc: "Aumenta a quantidade de ameaça gerada do dano bônus em <span class='tooltip-value'>#%</span>.",
			rankInfo: [50, 100, 150],
		},
		{
			index: 9,
			name: "Rugido Esmagador",
			ranks: 4,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 1 segundo(s)</span>\n<span class='left'>Físico</span><span class='right'>Intervalo: 20 segundo(s)</span>\n<span class='left'>Maldição contra múltiplos alvos</span><span class='right'>Alcance: Nenhum</span>\n\nA Precisão de inimigos em um raio de 10 metros é reduzida em <span class='tooltip-value'>#</span> e o ataque diminui em <span class='tooltip-value'>#</span> por 15 segundo(s). Revela os inimigos furtivos.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 30</span>\n\n', '<span class="req">Requer que o personagem seja nível 45</span>\n\n', '<span class="req">Requer que o personagem seja nível 60</span>\n\n', '<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			rankInfo2: [104, 148, 193, 239],
			rankInfo3: [20, 30, 40, 50],
			rankInfo4: [20, 40, 60, 80],
		},
		{
			index: 10,
			name: "Compreensão da Guerra",
			ranks: 4,
			desc: "Reduz o intervalo de uso de Apoiar Divino em <span class='tooltip-value'>#</span> segundo(s). Se a sua Saúde cair para menos de 50% enquanto o Apoiar Divino estiver ativo, o bônus de Defesa aumenta em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30, 45, 60],
			rankInfo2: [10, 20, 30, 40],
		},
		{
			index: 12,
			name: "Dureza",
			ranks: 4,
			desc: "Aumenta a sua Saúde Máxima em <span class='tooltip-value'>#%</span>.",
			rankInfo: [1, 2, 3, 4],
		},
		{
			index: 13,
			name: "Esmagatripas",
			ranks: 3,
			desc: "A duração do Rugido Esmagador aumenta em <span class='tooltip-value'>#</span> segundo(s) e tem uma chance de <span class='tooltip-value'>#%</span> de interromper o lançamento de habilidade do inimigo.",
			rankInfo: [1, 2, 3],
			rankInfo2: [20, 40, 60],
			parent: 5,
		},
		{
			index: 14,
			name: "Brisa do Exorcismo",
			ranks: 5,
			ranksnw: 3,
			desc: "Aumenta o dano de bônus da Divisão do Mal em <span class='tooltip-value'>#%</span> e reduz a Resistência de Vento do alvo em <span class='tooltip-value'>#</span>.",
			rankInfo: [3, 6, 9, 12, 15],
			rankInfo2: [10, 20, 30, 40, 50],
		},
		{
			index: 16,
			name: "Suporte da Tempestade",
			ranks: 3,
			desc: "Aumenta a sua Resistência de Vento em <span class='tooltip-value'>#</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30, 45],
		},
		{
			index: 18,
			name: "Corrupção Desvanecente",
			ranks: 4,
			desc: "A Divisão do Mal ganha uma chance de <span class='tooltip-value'>#%</span> de fazer uma Zombaria do alvo por 2 segundos. O alcance aumenta em <span class='tooltip-value'>#</span> metro(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [25, 50, 75, 100],
			rankInfo2: [1, 2, 3, 4],
			parent: 9,
		},
		{
			index: 20,
			name: "Fortificar Defesa",
			ranks: 3,
			desc: "Aumenta a sua Resistência Física em <span class='tooltip-value'>#</span>.",
			rankInfo: [15, 30, 45],
		},
		{
			index: 21,
			name: "Arte da Sobrevivência",
			ranks: 3,
			desc: "Reduz o custo em Mana de Grito de Guerra, Posição de Combate, Rugido Esmagador e Rugido Ameaçador em <span class='tooltip-value'>#%</span>. Aumenta a duração de Apoiar Divino em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30, 45],
			rankInfo2: [2, 4, 6],
		},
		{
			index: 23,
			name: "Especialista de Combate",
			ranks: 2,
			desc: "Cada acumulação da Posição de Combate reduz o dano sofrido em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [3, 6],
			parent: 3,
		},
		{
			index: 25,
			name: "Fonte de Força",
			ranks: 3,
			ranksnw: 2,
			desc: "Aumenta a duração do Poder do Dragão em <span class='tooltip-value'>#</span> minuto(s).",
			rankInfo: [10, 20, 30],
		},
		{
			index: 26,
			name: "Arte da Excursão",
			ranks: 2,
			desc: "Reduz em <span class='tooltip-value'>#%</span> o alcance mínimo do Assalto e aumenta a quantidade de ameaça gerada enquanto estiver na Posição de Combate.",
			rankInfo: [50, 100],
		},
		{
			index: 27,
			name: "Acordado",
			ranks: 2,
			desc: "Reduz a penalidade de Ataque causada pela Posição de Combate em <span class='tooltip-value'>#%</span>.",
			rankInfo: [50, 100],
		},
		{
			index: 29,
			name: "Sangue de Dragão",
			ranks: 2,
			desc: "O Poder do Dragão aumenta a Saúde Máxima do alvo em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [3, 6],
			parent: 15,
		},
		{
			index: 30,
			name: "Guardião da Vida",
			ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 3 segundo(s)</span>\n<span class='left'>Defesa</span><span class='right'>Intervalo: 180 segundo(s)</span>\n<span class='left'>Bênção para múltiplos alvos</span><span class='right'>Alcance: Nenhum</span>\n\nCura e aumenta a Saúde Máxima dos integrantes do grupo em um raio de 16 metros em <span class='tooltip-value'>#%</span>. Aumenta a sua Saúde Máxima em 5%. Este efeito dura <span class='tooltip-value'>#</span> segundo(s). Esta habilidade não é afetada por efeitos de controle.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 55</span>\n\n', '<span class="req">Requer que o personagem seja nível 70</span>\n\n'],
			rankInfo2: [223, 277],
			rankInfo3: [15, 16],
			rankInfo4: [25, 30],
		},
		{
			index: 31,
			name: "Quebra de Guarda",
			ranks: 2,
			desc: "O efeito de Trovão causado pelo Corte do Trovão reduz a Esquiva Crítica do alvo em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2],
		},
		{
			index: 35,
			name: "Vontade do Sangue",
			ranks: 2,
			desc: "Reduz em <span class='tooltip-value'>#%</span> a quantidade de Saúde perdida enquanto o Absorver Sangue está ativo. Reduz o custo de Mana do Absorver Sangue em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [25, 50],
			rankInfo2: [25, 50],
		},
		{
			index: 36,
			name: "Defesa de Combate",
			ranks: 3,
			desc: "Aumenta sua Defesa base em <span class='tooltip-value'>#%</span> mais <span class='tooltip-value'>#</span>.",
			rankInfo: [1, 2, 3],
			rankInfo2: [15, 25, 40],
		},
		{
			index: 38,
			name: "Esperança",
			ranks: 3,
			ranksnw: 1,
			desc: "Reduz o intervalo de uso do Guardião da Vida em <span class='tooltip-value'>#</span> segundo(s). Enquanto o Guardião da Vida está ativo, cada golpe que acerta restaura <span class='tooltip-value'>#%</span> da sua Saúde Máxima.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [20, 40, 60],
			rankInfo2: [2, 5, 8],
			parent: 19,
		},
		{
			index: 39,
			name: "Decadência do Moral",
			ranks: 2,
			desc: "Asas Relâmpago ganha chance de 75% para reduzir o Ataque do alvo em <span class='tooltip-value'>#%</span> por 15 segundos.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20],
		},
		{
			index: 42,
			name: "Concentração",
			ranks: 2,
			desc: "Enquanto Guardião da Vida estiver ativo, a eficiência das habilidades de cura lançadas em você aumenta em <span class='tooltip-value'>#%</span>, e você não pode ser interrompido durante a conjuração.",
			rankInfo: [20, 40],
			parent: 23,
		},
		{
			index: 43,
			name: "Coro do Trovão",
			ranks: 3,
			ranksnw: 1,
			desc: "Aumenta o dano base de Corte do Relâmpago, Corte do Trovão e Choque Raivoso em <span class='tooltip-value'>#%</span>.",
			rankInfo: [5, 10, 15],
		},
		{
			index: 47,
			name: "Choque Raivoso",
			ranks: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>301 Mana</span><span class='right'>Tempo de ativação: 1 segundo(s)</span>\n<span class='left'>Dano de vento</span><span class='right'>Intervalo: 6 segundo(s)</span>\n<span class='left'>Ataque contra alvo único</span><span class='right'>Curto alcance</span>\n\nInflige 100% do seu Ataque mais 2193 de bônus de dano. Requer a Posição de Combate. Reduz a Maestria do alvo em 300 pelos próximos 2 ataques. Dura 8 segundo. Gera uma grande quantidade de ameaça.",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			parent: 26,
		},
	],
		// two
	[
		{
			index: 1,
			name: "Ataque da Tempestade",
			ranks: 5,
			ranksnw: 3,
			desc: "Aumenta o dano bônus de Esmagar em <span class='tooltip-value'>#%</span> mais <span class='tooltip-value'>#%</span> da sua Maestria Física.",
			rankInfo: [2, 4, 6, 8, 10],
			rankInfo2: [10, 20, 30, 40, 50],
		},
		{
			index: 2,
			name: "Carga",
			ranks: 2,
			desc: "Reduz o alcance mínimo do Assalto em <span class='tooltip-value'>#</span> metro(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2],
		},
		{
			index: 3,
			name: "Código da Excursão",
			ranks: 3,
			desc: "Reduz o intervalo de uso de Assalto em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2, 3],
		},
		{
			index: 5,
			name: "Rachar",
			ranks: 3,
			desc: "Aumenta a Chance Crítica de Esmagar em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [2, 4, 6],
			parent: [0],
		},
		{
			index: 6,
			name: "Canção da Tempestade",
			ranks: 4,
			desc: "O Grito de Guerra aumenta adicionalmente as suas Maestrias em Vento e Física em <span class='tooltip-value'>#</span>.",
			rankInfo: [5, 10, 15, 20],
		},
		{
			index: 7,
			name: "Relâmpago Atolado",
			ranks: 3,
			desc: "Aumenta a chance para que o segundo golpe do Corte do Relâmpago retardar o alvo em <span class='tooltip-value'>#%</span>.",
			rankInfo: [15, 30, 45],
		},
		{
			index: 9,
			name: "Arco Escarlate",
			ranks: 4,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 2 segundo(s)</span>\n<span class='left'>Dano físico</span><span class='right'>Intervalo: 5 segundo(s)</span>\n<span class='left'>Ataque contra alvo único</span><span class='right'>Curto alcance</span>\n\nAcerta o alvo duas vezes. Cada golpe que atinge causa 90% do seu Ataque base mais <span class='tooltip-value'>#</span> de dano bônus e tem uma chance de 25% de infligir um efeito de sangramento que causa <span class='tooltip-value'>#</span> de dano por segundo. Dura 10 segundo. Acumula 3 vezes. Com 1/2/3 acumulações da Posição de Sangue Raivoso, a chance de infligir o efeito de sangramento aumenta em 5%/10%/15%.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 30</span>\n\n', '<span class="req">Requer que o personagem seja nível 45</span>\n\n', '<span class="req">Requer que o personagem seja nível 60</span>\n\n', '<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			rankInfo2: [105, 162, 221, 281],
			rankInfo3: [446, 876, 1299, 1715],
			rankInfo4: [50, 100, 150, 200],
		},
		{
			index: 10,
			name: "Explosão da Vida",
			ranks: 5,
			desc: "Cada acumulação da Posição de Sangue Raivoso aumenta a sua Saúde Máxima em <span class='tooltip-value'>#%</span> extra <span class='tooltip-value'>#</span>.",
			rankInfo: [0.3, 0.6, 0.9, 1.2, 1.5],
			rankInfo2: [50, 100, 150, 200, 250],
		},
		{
			index: 12,
			name: "Preparo",
			ranks: 3,
			desc: "Reduz a chance de sofrer uma interrupção durante a ativação em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30, 45],
		},
		{
			index: 13,
			name: "Romper",
			ranks: 3,
			ranksnw: 2,
			desc: "Cada ataque do Arco Escarlate causa dano bônus adicional equivalente a <span class='tooltip-value'>#%</span> da sua Saúde Máxima.",
			rankInfo: [1, 1.5, 2],
			parent: 6,
		},
		{
			index: 14,
			name: "Santuário da Guerra",
			ranks: 3,
			desc: "Aumenta a duração de Apoiar Divino em <span class='tooltip-value'>#%</span>. O seu Dano Crítico aumenta em <span class='tooltip-value'>#%</span> enquanto Apoiar Divino estiver ativo.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20, 30],
			rankInfo2: [10, 20, 30],
		},
		{
			index: 15,
			name: "Sanguinário",
			ranks: 3,
			ranksnw: 2,
			desc: "Aumenta o dano de bônus do Corte da Sanguessuga em <span class='tooltip-value'>#%</span>. Aumenta a quantidade de Saúde drenada em <span class='tooltip-value'>#%</span> da sua Saúde Máxima.",
			rankInfo: [5, 10, 15],
			rankInfo2: [1, 1.5, 2],
		},
		{
			index: 18,
			name: "Pressa",
			ranks: 3,
			desc: "Reduz o intervalo de uso de Impacto Fulminante em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20, 30],
		},
		{
			index: 19,
			name: "Queima do Sangue",
			ranks: 3,
			desc: "Reduz o intervalo de uso do Corte da Sanguessuga em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [2, 4, 6],
			parent: 11,
		},
		{
			index: 20,
			name: "Maestria de Esgrima",
			ranks: 4,
			desc: "Aumenta a sua Maestria Física em <span class='tooltip-value'>#</span>.",
			rankInfo: [10, 20, 30, 40],
		},
		{
			index: 21,
			name: "Elegância Escarlate",
			ranks: 3,
			desc: "Reduz o intervalo de uso do Arco Escarlate em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 1.5, 2],
			parent: 9,
		},
		{
			index: 22,
			name: "Sangue Fervendo",
			ranks: 2,
			desc: "Cada acumulação da Posição de Sangue Raivoso aumenta a eficiência das habilidades de cura lançadas para você em <span class='tooltip-value'>#%</span>.",
			rankInfo: [3, 6],
		},
		{
			index: 25,
			name: "Sabotagem de Arma",
			ranks: 2,
			desc: "Aumenta em <span class='tooltip-value'>#%</span> a chance de que o Corte do Trovão desarme o alvo.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20],
		},
		{
			index: 26,
			name: "Ferocidade",
			ranks: 4,
			desc: "Aumenta o dano base do Corte da Sanguessuga e Arco Escarlate em <span class='tooltip-value'>#%</span>.",
			rankInfo: [5, 10, 15, 20],
		},
		{
			index: 29,
			name: "Erupção do Sangue Raivoso",
			ranks: 2,
			desc: "Reduz a penalidade de Defesa causada pela Posição de Sangue Raivoso em <span class='tooltip-value'>#%</span>.",
			rankInfo: [50, 100],
		},
		{
			index: 30,
			name: "Fúria da Sede de Sangue",
			ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 1 segundo(s)</span>\n<span class='left'>Ataque</span><span class='right'>Intervalo: 120 segundo(s)</span>\n<span class='left'>Autobênção</span><span class='right'>Alcance: Nenhum</span>\n\nCusta 5% da sua Saúde Máxima. Remove e dá imunidade contra efeitos de sangramento por 18 segundo(s). Enquanto a Fúria da Sede de Sangue estiver ativa, cada um dos seus ataques custará 1% da sua Saúde Máxima e aumentará a Chance Crítica em <span class='tooltip-value'>#%</span>. O bônus da Chance Crítica tem duração de 15 segundos e acumula 8 vezes.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 55</span>\n\n', '<span class="req">Requer que o personagem seja nível 70</span>\n\n'],
			rankInfo2: [189, 236],
			rankInfo3: [1, 1.5],
		},
		{
			index: 31,
			name: "Frenesi da Sede de Sangue",
			ranks: 2,
			desc: "Reduz o intervalo de uso do Corte da Sanguessuga em <span class='tooltip-value'>#%</span> segundo(s) e aumenta a quantidade de Saúde drenada em <span class='tooltip-value'>#%</span> enquanto a Fúria da Sede de Sangue estiver ativa.",
			rankInfo: [30, 60],
			rankInfo2: [100, 200],
			parent: 20,
		},
		{
			index: 33,
			name: "Silêncio de Trovão",
			ranks: 2,
			desc: "O Corte do Trovão silencia o alvo por <span class='tooltip-value'>#</span> segundo(s) quando um golpe Crítico acerta.",
			rankInfo: [1, 2],
		},
		{
			index: 35,
			name: "Contrato de Sangue",
			ranks: 3,
			ranksnw: 2,
			desc: "Reduz o intervalo de uso de Absorver Sangue em <span class='tooltip-value'>#</span> e aumenta sua duração em <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [5, 10, 15],
			rankInfo2: [2, 4, 6],
		},
		{
			index: 38,
			name: "Sede de Sangue Estendida",
			ranks: 2,
			desc: "Aumenta a duração da Fúria da Sede de Sangue em <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [3, 6],
			parent: 20,
		},
		{
			index: 39,
			name: "Dança de Sangue",
			ranks: 3,
			desc: "Aumenta o dano base de Esmagar em <span class='tooltip-value'>#%</span> e dá uma chance de <span class='tooltip-value'>#%</span> para enredar o alvo por 2 segundos enquanto Absorver Sangue estiver ativo.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20, 30],
			rankInfo2: [20, 40, 60],
			parent: 23,
		},
		{
			index: 42,
			name: "Lâmina de Alta Frequência",
			ranks: 3,
			desc: "Aumenta o Dano Crítico de Esmagar, Divisão do Mal, Corte da Sanguessuga e Sacrifício em <span class='tooltip-value'>#%</span>.",
			rankInfo: [5, 10, 15],
		},
		{
			index: 43,
			name: "Devorador Mandado",
			ranks: 2,
			desc: "Aumenta a duração do Devorador de Alma em <span class='tooltip-value'>#</span> segundo(s). Tem uma chance de <span class='tooltip-value'>#%</span> de receber uma acumulação adicional do Devorador de Alma quando sofre dano. Aumenta o dano bônus concedido ao Devorador de Alma em <span class='tooltip-value'>#%</span>.",
			rankInfo: [2, 4],
			rankInfo2: [50, 100],
			rankInfo3: [0.5, 1],
		},
		{
			index: 46,
			name: "Sacrificio",
			ranks: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>231 Mana</span><span class='right'>Tiempo de hechizar: 2 segundos</span>\n<span class='left'>El daño físico</span><span class='right'>Reactivación: 15 segundos</span>\n<span class='left'>Ataque objetivo único</span><span class='right'>Corto Alcance</span>\n\nRequiere Postura de Ira de Sangre. Golpea al objetivo dos veces. Cada golpe inflige 90% de tu Ataque base más 1159 de daño extra. Sacrifica 10% de tu Salud y agrega esa cantidad a tu Ataque.",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			// Error desc 2461. Used ES. //
		},
	],
		// three
	[
		{
			index: 1,
			name: "Agitação",
			ranks: 5,
			desc: "Cada acumulação da Postura Frenética aumenta adicionalmente o seu Ataque em <span class='tooltip-value'>#%</span> extra <span class='tooltip-value'>#</span>.",
			rankInfo: [0.3, 0.6, 0.9, 1.2, 1.5],
			rankInfo2: [10, 20, 30, 40, 50],
		},
		{
			index: 2,
			name: "Relâmpago Letal",
			ranks: 5,
			ranksnw: 3,
			desc: "Aumenta o seu Ataque em <span class='tooltip-value'>#</span> por 10 segundos quando você mata um alvo em até 10 segundos depois de usar o Corte do Relâmpago. Esse efeito também aumenta seu Ataque base em 1%.",
			rankInfo: [20, 35, 50, 65, 80],
		},
		{
			index: 5,
			name: "Excursão Corajosa",
			ranks: 5,
			desc: "Aumenta em <span class='tooltip-value'>#%</span> a chance de acionar o efeito da Excursão Corajosa. A Excursão Corajosa aumenta a sua Precisão em <span class='tooltip-value'>#</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [6, 12, 18, 24, 30],
			rankInfo2: [10, 20, 30, 40, 50],
		},
		{
			index: 6,
			name: "Mistério do Relâmpago",
			ranks: 3,
			desc: "Reduz o intervalo de uso do Corte do Relâmpago em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2, 3],
			parent: 1,
		},
		{
			index: 7,
			name: "Maestria de Música de Guerra",
			ranks: 3,
			ranksnw: 3,
			desc: "Aumenta a duração do Grito de Guerra em <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [300, 600, 900],
		},
		{
			index: 9,
			name: "Tumulto do Combate",
			ranks: 3,
			desc: "Aumenta o seu Ataque em <span class='tooltip-value'>#%</span> por 10 segundos quando você é atingido com o Apoiar Divino ativo. Acumula 5 vezes.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [2, 4, 6],
		},
		{
			index: 10,
			name: "Rugido Ameaçador",
			ranks: 4,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 1 segundo(s)</span>\n<span class='left'>Físico</span><span class='right'>Intervalo: 20 segundo(s)</span>\n<span class='left'>Maldição contra múltiplos alvos</span><span class='right'>Alcance: Nenhum</span>\n\nReduz a Evasão em <span class='tooltip-value'>#</span>, a Defesa em <span class='tooltip-value'>#</span> e a velocidade do movimento em 25% de inimigos num raio de 10 metros por 10 segundo(s). Revela os inimigos furtivos.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 30</span>\n\n', '<span class="req">Requer que o personagem seja nível 45</span>\n\n', '<span class="req">Requer que o personagem seja nível 60</span>\n\n', '<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			rankInfo2: [87, 123, 161, 199],
			rankInfo3: [15, 25, 35, 45],
			rankInfo4: [25, 50, 75, 100],
		},
		{
			index: 11,
			name: "Música de Guerra dos Elfos",
			ranks: 3,
			desc: "O Grito de Guerra aumenta o seu Ataque em <span class='tooltip-value'>#</span>, sua Precisão em <span class='tooltip-value'>#</span> e seu Ataque base adicionalmente em <span class='tooltip-value'>#%</span>.",
			rankInfo: [10, 20, 30],
			rankInfo2: [2, 4, 6],
			rankInfo3: [0.5, 1, 1.5],
			parent: 4,
		},
		{
			index: 14,
			name: "Uivo",
			ranks: 3,
			desc: "Aumenta a duração do Rugido Ameaçador em <span class='tooltip-value'>#</span> segundo(s) e reduz a Resistência de Vento dos alvos em <span class='tooltip-value'>#</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [2, 4, 6],
			rankInfo2: [10, 20, 30],
			parent: 6,
		},
		{
			index: 15,
			name: "Exorcismo",
			ranks: 4,
			desc: "A Divisão do Mal reduz a Resistência Física do alvo em <span class='tooltip-value'>#</span> e o Mana Máximo em <span class='tooltip-value'>#%</span>.",
			rankInfo: [15, 30, 45, 60],
			rankInfo2: [5, 10, 15, 20],
		},
		{
			index: 16,
			name: "Maestria da Tempestade",
			ranks: 4,
			desc: "Aumenta a sua Maestria em Vento em <span class='tooltip-value'>#</span>.",
			rankInfo: [10, 20, 30, 40],
		},
		{
			index: 17,
			name: "Código da Pressa",
			ranks: 3,
			desc: "Aumenta a duração do Impacto Fulminante em <span class='tooltip-value'>#</span> segundo(s). O Impacto Fulminante aumenta adicionalmente a velocidade do movimento em <span class='tooltip-value'>#%</span>.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2, 3],
			rankInfo2: [2.5, 5, 7.5],
		},
		{
			index: 18,
			name: "Toque Sangrento",
			ranks: 3,
			desc: "O Corte da Sanguessuga reduz a eficiência das habilidades de cura lançadas no alvo em <span class='tooltip-value'>#%</span> por <span class='tooltip-value'>#</span> segundo(s).",
			rankInfo: [25, 35, 45],
			rankInfo2: [6, 8, 10],
		},
		{
			index: 19,
			name: "Dança da Folha",
			ranks: 4,
			desc: "Aumenta a Chance Crítica do Corte do Relâmpago em <span class='tooltip-value'>#%</span> enquanto estiver na Postura Frenética. Cada acumulação da Postura Frenética aumenta mais a Chance Crítica.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [0.5, 1, 1.5, 2],
		},
		{
			index: 21,
			name: "Exposição da Fraqueza",
			ranks: 2,
			ranksnw: 2,
			desc: "Assalto reduz a Esquiva Crítica do alvo em <span class='tooltip-value'>#%</span> por até 10 segundos. Este efeito termina quando o alvo é atingido 3 vezes.",
			rankInfo: [2, 4],
		},
		{
			index: 22,
			name: "Tempestade de Trovão",
			ranks: 4,
			ranksnw: 3,
			desc: "Aumenta a Chance Crítica dos dois ataques do Corte do Trovão em <span class='tooltip-value'>#%</span> e reduz o intervalo de uso da habilidade em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [1, 2, 3, 4],
			rankInfo2: [0.5, 1, 1.5, 2],
		},
		{
			index: 25,
			name: "Fúria da Guerra",
			ranks: 1,
			desc: "O Assalto fica sem intervalo de uso enquanto o Apoiar Divino estiver ativo, mas a duração do efeito atordoar é reduzida para 1 segundo.",
			rankInfo: [],
			parent: 14,
		},
		{
			index: 26,
			name: "Golpe do Trovão",
			ranks: 2,
			desc: "O Corte do Trovão silencia o alvo por <span class='tooltip-value'>#</span> segundo(s) quando um golpe Crítico acerta.",
			rankInfo: ['1-2', '2-3'],
			parent: 15,
		},
		{
			index: 28,
			name: "Frenesi Rápido",
			ranks: 2,
			desc: "Reduz os intervalos de uso de Impacto Fulminante, Poder do Dragão e Lâmina de Reflexão em <span class='tooltip-value'>#%</span> durante a Postura Frenética.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [10, 20],
		},
		{
			index: 29,
			name: "Alma de Dragão",
			ranks: 2,
			desc: "O Poder do Dragão aumenta adicionalmente o Ataque base do alvo em <span class='tooltip-value'>#%</span>.",
			rankInfo: [3, 6],
		},
		{
			index: 30,
			name: "Lâmina de Reflexão",
			ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'><span class='tooltip-value'>#</span> Mana</span><span class='right'>Tempo de ativação: 1 segundo(s)</span>\n<span class='left'>Ataque</span><span class='right'>Intervalo: 90 segundo(s)</span>\n<span class='left'>Autobênção</span><span class='right'>Alcance: Nenhum</span>\n\nQuando é atingido por um ataque direto e esta habilidade está ativa, você lança um contra-ataque que causa dano equivalente a 100% do seu Ataque base e ignora Defesa e Resistências. Este efeito tem duração de <span class='tooltip-value'>#</span> segundo(s) e não é afetado por efeitos de controle.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 55</span>\n\n', '<span class="req">Requer que o personagem seja nível 70</span>\n\n'],
			rankInfo2: [213, 265],
			rankInfo3: [12, 15],
		},
		{
			index: 31,
			name: "Erupção Frenética",
			ranks: 2,
			desc: "As penalidades de Evasão e Defesa causadas pela Postura Frenética são reduzidas em <span class='tooltip-value'>#%</span>.",
			rankInfo: [25, 50],
		},
		{
			index: 33,
			name: "Maestria em Absorver Sangue",
			ranks: 2,
			ranksnw: 1,
			desc: "Aumenta a duração de Absorver Sangue em <span class='tooltip-value'>#</span> segundo(s) e a chance de fazer o alvo descer da montaria em <span class='tooltip-value'>#%</span>.",
			rankInfo: [5, 10],
			rankInfo2: [5, 10],
		},
		{
			index: 35,
			name: "Força Frenética",
			ranks: 2,
			desc: "Aumenta o dano bônus de Esmagar, Corte do Relâmpago e Corte do Trovão em <span class='tooltip-value'>#%</span> durante a Postura Frenética.",
			rankInfo: [8, 16],
		},
		{
			index: 38,
			name: "Mestre do Contra-ataque",
			ranks: 3,
			desc: "Aumenta a duração da Lâmina de Reflexão em <span class='tooltip-value'>#</span> segundo(s) e o dano do contra-ataque em <span class='tooltip-value'>#%</span>.",
			rankInfo: [1, 2, 3],
			rankInfo2: [20, 40, 60],
			parent: 20,
		},
		{
			index: 39,
			name: "Relâmpago Ligeiro",
			ranks: 3,
			desc: "Reduz o intervalo de uso de Asas Relâmpago em <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [5, 10, 15],
		},
		{
			index: 41,
			name: "Chuva de Sangue",
			ranks: 3,
			desc: "Reduz a Defesa dos alvos afetados pelo Absorver Sangue em <span class='tooltip-value'>#%</span> e a Evasão em <span class='tooltip-value'>#</span>. Aumenta o alcance de Absorver Sangue em <span class='tooltip-value'>#</span> metro(s).",
			rankInfo: [5, 10, 15],
			rankInfo2: [15, 30, 45],
			rankInfo3: [2, 4, 6],
			parent: 22,
		},
		{
			index: 43,
			name: "Devorador Furioso",
			ranks: 2,
			desc: "Reduz o intervalo de uso de Devorador de Alma em <span class='tooltip-value'>#</span> segundo(s). Você tem uma chance de <span class='tooltip-value'>#%</span> de resistir aos efeitos de devagar enquanto Devorador de Alma estiver ativo. Este efeito termina depois de um ataque bem-sucedido.\n\n<b>Você pode aumentar o nível de talento usando runas.</b>",
			rankInfo: [15, 30],
			rankInfo2: [50, 100],
		},
		{
			index: 46,
			name: "Ciclón de Espadas",
			ranks: 1,
			desc: "<span class='tooltip-value'>#</span><span class='left'>396 Mana</span><span class='right'>Tiempo de hechizar: 3 segundos</span>\n<span class='left'>El daño de viento</span><span class='right'>Reactivación: 20 segundos</span>\n<span class='left'>Ataque multiobjetivo</span><span class='right'>Corto Alcance</span>\n\nRequiere Postura de Frenesí. Ataca hasta 10 objetivos a menos de 7 metros en un arco de 120 grados. Golpea 3 veces. Cada golpe inflige 50% de tu Ataque base más 1067 de daño extra. La Precisión es aumentada con un Dominio del Viento superior. El primer golpe tiene un 25% de posibilidad de reducir la velocidad de movimiento del objetivo en un 50% por 5 segundos.",
			rankInfo: ['<span class="req">Requer que o personagem seja nível 75</span>\n\n'],
			// Error desc 2484. Used ES. //
		},
	]
];