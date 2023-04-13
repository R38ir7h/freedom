var data = [
    // one
    [
        {
            index: 1,
            name: "Recuperación Bendecida",
            ranks: 5,
			ranksnw: 2,
			desc: "Incrementa la cantidad de Salud restablecida por Sanación en <span class='tooltip-value'>#</span> más <span class='tooltip-value'>#%</span> de tu Maná máximo.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [50, 100, 150, 200, 250],
            rankInfo2: [2, 3, 4, 5, 6],
        },
        {
            index: 3,
            name: "Vida Floreciente",
            ranks: 5,
			desc: "Bendiciones de Vida incrementa la Salud máxima de los objetivos en un <span class='tooltip-value'>#%</span> adicional.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2, 3, 4, 5],
        },
        {
            index: 6,
            name: "Rueda de la Fortuna",
            ranks: 3,
			desc: "Incrementa la duración de Bendiciones de Fortuna en <span class='tooltip-value'>#</span> minutos y la efectividad de las habilidades de sanación lanzadas sobre el objetivo en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20, 30],
            rankInfo2: [2, 4, 6],
        },
        {
            index: 7,
            name: "Resplandor",
            ranks: 3,
			ranksnw: 1,
			desc: "Incrementa la cantidad de Salud restablecida por Luz de Sanctuario en <span class='tooltip-value'>#%</span> y reduce su reactivación en <span class='tooltip-value'>#</span> segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [4, 8, 12],
            rankInfo2: [20, 40, 60],
        },
        {
            index: 8,
            name: "Fuente de Magia",
            ranks: 4,
			desc: "Incrementa tu Maná máximo en <span class='tooltip-value'>#%</span> más <span class='tooltip-value'>#</span>.",
            rankInfo: [1, 2, 3, 4],
            rankInfo2: [50, 100, 150, 200],
        },
        {
            index: 9,
            name: "Sanación Natural",
            ranks: 4,
			desc: "Reduce la reactivación de Sanación en <span class='tooltip-value'>#</span> segundo(s) y su costo de Maná en <span class='tooltip-value'>#%</span>.",
            rankInfo: [0.5, 1, 1.5, 2],
            rankInfo2: [5, 10, 15, 20],
			parent: [0],
        },
        {
            index: 10,
            name: "Luz Divina",
            ranks: 4,
			ranksnw: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 4 segundos</span>\n<span class='left'>Sanar</span><span class='right'>Reactivación: 8 segundos</span>\n<span class='left'>Bendición objetivo único</span><span class='right'>Alcance: 18 metros</span>\n\nRestablece <span class='tooltip-value'>#</span> de Salud al objetivo cada segundo por 4 segundos. El efecto final de sanación restablece el doble de esa cantidad. Incrementa la Salud máxima del objetivo en <span class='tooltip-value'>#</span> por 10 segundos. Tiene un Chance Crítico del 4% lo que causa que esta habilidad sane el doble.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 30</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 45</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 60</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
            rankInfo2: [424, 689, 949, 1204],
            rankInfo3: ['719-794', '1072-1184', '1428-1577', '1787-1973'],
            rankInfo4: [2000, 3000, 4000, 5000],
        },
        {
            index: 11,
            name: "Regalo de Dios",
            ranks: 2,
			desc: "Luz de Sanctuario incrementa la efectividad de las habilidades de sanación lanzadas sobre el objetivo en <span class='tooltip-value'>#%</span> por <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [10, 20],
            rankInfo2: [25, 50],
			parent: 3,
        },
        {
            index: 15,
            name: "Sanación Instantánea",
            ranks: 3,
			ranksnw: 2,
			desc: "Incrementa la cantidad de Salud restablecida por Luz de Sanación en <span class='tooltip-value'>#</span> más <span class='tooltip-value'>#%</span> de tu Maná máximo.",
			rankInfo: [100, 200, 300],
            rankInfo2: [1, 2, 3],
        },
        {
            index: 16,
            name: "Calma",
            ranks: 4,
			desc: "Reduce los costos de Maná de tus habilidades de sanación en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [6, 12, 18, 24],
        },
        {
            index: 18,
            name: "Sanación Sagrada",
            ranks: 3,
			desc: "Incrementa la cantidad de Salud restablecida por Luz Divina en <span class='tooltip-value'>#%</span> y reduce la posibilidad de ser interrumpido mientras esta habilidad está siendo lanzada en <span class='tooltip-value'>#%</span>.",
            rankInfo: [5, 10, 15],
            rankInfo2: [25, 50, 75],
			parent: 6,
        },
        {
            index: 20,
            name: "Tranquilidad",
            ranks: 4,
			desc: "Reduce la cantidad de amenaza generada por las habilidades de sanación en <span class='tooltip-value'>#%</span> y la posibilidad de ser interrumpido mientras son lanzadas en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20, 30, 40],
            rankInfo2: [15, 30, 45, 60],
        },
        {
            index: 21,
            name: "Sanación Combinada",
            ranks: 4,
			desc: "Sanación restablece una cantidad de Maná del objetivo igual al <span class='tooltip-value'>#%</span> de tu Maná máximo a los objetivos afectados por Luz de Sanación.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2, 3, 4],
        },
        {
            index: 22,
            name: "Poder Sagrado",
            ranks: 3,
			desc: "Incrementa el daño de base de tus habilidades ofensivas en <span class='tooltip-value'>#%</span> luego de que lanzas Sanación, Luz de Sanación, o Luz Divina. Este efecto dura 20 segundos, se acumula hasta 3 veces, y termina luego de lanzar exitosamente un ataque.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [6, 8, 10],
        },
        {
            index: 23,
            name: "Recuperación",
            ranks: 2,
			desc: "Incrementa la duración de Luz de Sanación en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [2, 4],
			parent: 8,
        },
        {
            index: 25,
            name: "Corazón Tenaz",
            ranks: 3,
			ranksnw: 1,
			desc: "Incrementa la duración de Bendiciones de Tenacidad en <span class='tooltip-value'>#</span> minutos y reduce su costo de Maná en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20, 30],
            rankInfo2: [10, 20, 30],
        },
        {
            index: 26,
            name: "Conciencia",
            ranks: 2,
			desc: "Incrementa la cantidad de Salud y Maná que la Luz de Resurrección restablece al objetivo en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [20, 40],
        },
        {
            index: 28,
            name: "Espíritu Sanador",
            ranks: 3,
			desc: "Incrementa el Chance Crítico de Sanación, Luz de Sanación y Luz Divina en <span class='tooltip-value'>#%</span>.",
            rankInfo: [2, 4, 6],
        },
        {
            index: 30,
            name: "Escudo Divino",
            ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 30 segundos</span>\n<span class='left'>Bendición objetivo único</span><span class='right'>Alcance: 18 metros</span>\n\nLe concede el efecto de Escudo Divino al objetivo, lo que absorbe el 80% de daño a recibir por <span class='tooltip-value'>#</span> segundos. El escudo puede absorber una cantidad de daño igual a <span class='tooltip-value'>#%</span> de la Salud máxima del objetivo.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 55</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 70</span>\n\n'],
            rankInfo2: [702, 861],
            rankInfo3: [20, 21],
            rankInfo4: [60, 80],
        },
        {
            index: 31,
            name: "Sanación Rápida",
            ranks: 3,
			desc: "Sanación adquiere una posibilidad del <span class='tooltip-value'>#%</span> de restablecer un 200% de Salud adicional a los objetivos afectados por Luz de Sanación, y remover el efecto.",
            rankInfo: [20, 40, 60],
        },
        {
            index: 33,
            name: "Armadura de Luz",
            ranks: 2,
			desc: "Bendiciones de Tenacidad incrementa la Defensa del objetivo en un <span class='tooltip-value'>#%</span> adicional.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [3, 6],
			parent: 15,
        },
        {
            index: 34,
            name: "Escudo Inmortal",
            ranks: 3,
			desc: "Incrementa la cantidad de daño absorbido por el Escudo Divino en <span class='tooltip-value'>#%</span> más una cantidad igual al <span class='tooltip-value'>#%</span> de tu Maná máximo.",
            rankInfo: [20, 40, 60],
            rankInfo2: [1, 2, 3],
			parent: 18,
        },
        {
            index: 35,
            name: "Iluminación",
            ranks: 3,
			desc: "Le concede a tus habilidades de sanación una posibilidad del <span class='tooltip-value'>#%</span> de desencadenar el efecto de Inspiración, que reduce los costos de Maná de tus habilidades de sanación en 10% por 10 segundos. Se acumula 3 times.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [10, 20, 30],
        },
        {
            index: 38,
            name: "Luz de Benevolencia",
            ranks: 2,
			desc: "Incrementa la sanación adicional concedida por Compasión en un <span class='tooltip-value'>#%</span> adicional de tu Ataque.",
            rankInfo: [5, 10],
        },
        {
            index: 40,
            name: "Regalo de la Diosa",
            ranks: 3,
			desc: "Incrementa la cantidad de Salud restablecida por las habilidades de sanación en un <span class='tooltip-value'>#%</span> La sanación adicional de otras habilidades y talentos también se incrementa.",
            rankInfo: [5, 10, 15],
        },
        {
            index: 41,
            name: "Bendición Angelical",
            ranks: 3,
			desc: "Incrementa la cantidad de Salud restablecida por Armonía Angelical en <span class='tooltip-value'>#%</span> Reduce la reactivación de Luz de Sanctuario en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [10, 20, 30],
            rankInfo2: [20, 40, 60],
        },
        {
            index: 42,
            name: "Elogio Vaticinado",
            ranks: 2,
			desc: "Reduce las reactivaciones de Luz de Cielo y Escudo Divino en <span class='tooltip-value'>#</span> y <span class='tooltip-value'>#</span> segundo(s) respectivamente. Reduce sus costos de Maná en <span class='tooltip-value'>#%</span>.",
            rankInfo: [1, 2],
            rankInfo2: [3, 6],
            rankInfo3: [15, 30],
        },
        {
            index: 46,
            name: "Luz Purificadora",
            ranks: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'>378 Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 8 segundos</span>\n<span class='left'>Bendición objetivo único</span><span class='right'>Alcance: 18 metros</span>\n\nDisipa el efecto de maldición más reciente puesto sobre el objetivo.",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
        },
    ],
        // two
    [
        {
            index: 1,
            name: "Quemadura de Luz",
            ranks: 5,
			ranksnw: 2,
			desc: "Golpe Divino inflige una cantidad adicional de daño extra igual a <span class='tooltip-value'>#</span> más <span class='tooltip-value'>#%</span> de tu Dominio de Luz.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [40, 80, 120, 160, 200],
            rankInfo2: [10, 20, 30, 40, 50],
        },
        {
            index: 3,
            name: "Bendición Enérgica",
            ranks: 5,
			ranksnw: 2,
			desc: "Bendiciones de Vida incrementa la Salud máxima del objetivo en en un <span class='tooltip-value'>#%</span> adicional y la Precisión de tus habilidades de Luz en <span class='tooltip-value'>#</span>.",
            rankInfo: [2, 4, 6, 8, 10],
            rankInfo2: [10, 20, 30, 40, 50],
        },
        {
            index: 6,
            name: "Luz de Fortuna",
            ranks: 5,
			desc: "Bendiciones de Fortuna incrementa el Chance Crítico de tus habilidades de Luz en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2, 3, 4, 5],
        },
        {
            index: 8,
            name: "Conocimiento Divino",
            ranks: 5,
			desc: "Incrementa tu Dominio de Luz en <span class='tooltip-value'>#</span>.",
            rankInfo: [10, 20, 30, 40, 50],
        },
        {
            index: 9,
            name: "Castigo Celestial",
            ranks: 4,
			ranksnw: 2,
			desc: "Golpe Divino adquiere una posibilidad del <span class='tooltip-value'>#%</span> de infligir el efecto de Castigo de Luz sobre el objetivo, lo que reduce su Resistencia de Luz en <span class='tooltip-value'>#</span> por 15 segundos. Se acumula 5 times.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [40, 60, 80, 100],
            rankInfo2: [10, 12, 14, 16],
			parent: [0],
        },
        {
            index: 10,
            name: "Golpe de Castigo",
            ranks: 4,
			ranksnw: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>El daño leve</span><span class='right'>Reactivación: 5 segundos</span>\n<span class='left'>Ataque objetivo único</span><span class='right'>Alcance: 18 metros</span>\n\nInflige el 100% de tu base de Ataque más <span class='tooltip-value'>#</span> de daño extra. Inflige el efecto de Luz de Castigo al objetivo, lo que reduce su Resistencia de Luz en 8 por 15 segundos. Se acumula 5 veces.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 30</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 45</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 60</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
            rankInfo2: [147, 210, 275, 339],
            rankInfo3: [794, 1326, 1849, 2363],
        },
        {
            index: 11,
            name: "Oleada de Vida",
            ranks: 3,
			desc: "Incrementa la duración de Bendiciones de Vida en <span class='tooltip-value'>#</span> minutos y reduce el costo de Maná en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20, 30],
            rankInfo2: [15, 30, 45],
			parent: 1,
        },
        {
            index: 15,
            name: "Viento de Aurora",
            ranks: 4,
			ranksnw: 2,
			desc: "Bendiciones de Vendaval incrementa la velocidad de movimiento del objetivo en un <span class='tooltip-value'>#%</span> adicional y su reactivación se reduce en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [5, 10, 15, 20],
            rankInfo2: [2, 4, 6, 8],
        },
        {
            index: 16,
            name: "Barrera Divina",
            ranks: 3,
			desc: "Incrementa tu Resistencia de Luz en <span class='tooltip-value'>#</span> y tu Defensa en <span class='tooltip-value'>#</span>.",
            rankInfo: [15, 30, 45],
            rankInfo2: [10, 15, 20],
        },
        {
            index: 17,
            name: "Gloria",
            ranks: 3,
			desc: "Incrementa el daño de base de Golpe Divino en <span class='tooltip-value'>#%</span>. Golpe Divino adquiere una posibilidad del <span class='tooltip-value'>#%</span> de desencadenar el efecto Gloria, que causa que el próximo Golpe Divino no cueste Maná y no tenga reactivación. Este efecto dura 15 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [5, 10, 15],
            rankInfo2: [5, 10, 15],
			parent: 4,
        },
        {	
            index: 18,
            name: "Marca de Penalidad",
            ranks: 2,
			desc: "Incrementa el daño de base de Golpe de Castigo en <span class='tooltip-value'>#%</span>. Tiene una posibilidad del <span class='tooltip-value'>#%</span> de infligir el efecto de Marca de Condena sobre el objetivo, lo que reduce su Maná máximo en 5% cada 4 segundos por 20 segundos.",
            rankInfo: [10, 20],
            rankInfo2: [25, 50],
			parent: 5,
        },
        {
            index: 19,
            name: "Viento Cálido",
            ranks: 2,
			desc: "Bendiciones de Vendaval le concede el efecto de Viento Cálido al objetivo, lo que restablece una cantidad de Salud igual al <span class='tooltip-value'>#%</span> de la cantidad que tu habilidad de Sanación restablece cuando el objetivo es atacado.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [70, 120],
			parent: 7,
        },
        {
            index: 22,
            name: "Prisma Mágico",
            ranks: 4,
			desc: "Las habilidades ofensivas de Luz causan el <span class='tooltip-value'>#</span> de daño más el <span class='tooltip-value'>#%</span> de tu Dominio de Luz como daño extra a los objetivos afectados por la Marca de Condena.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [100, 200, 300, 400],
			rankInfo2: [25, 50, 75, 100],
        },
        {
            index: 23,
            name: "Viento de Bendiciones",
            ranks: 3,
			desc: "Luz de Sanctuario desencadena el efecto de Viento de Bendiciones, que incrementa la velocidad de movimiento de los miembros del grupo en <span class='tooltip-value'>#%</span> y te vuelve inmune contra todo daño directo por <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [40, 50, 60],
			rankInfo2: [4, 6, 8],
        },
        {
            index: 26,
            name: "Poder Divino",
            ranks: 3,
			desc: "Condenación reduce el Chance Crítico del objetivo en <span class='tooltip-value'>#%</span> y su Evasión en <span class='tooltip-value'>#</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [2, 3, 4],
			rankInfo2: [10, 20, 30],
        },
        {
            index: 28,
            name: "Destello",
            ranks: 4,
			desc: "Incrementa tu Precisión y Evasión en <span class='tooltip-value'>#</span>.",
            rankInfo: [3, 6, 9, 12],
        },
        {
            index: 29,
            name: "Energía Sagrada",
            ranks: 3,
			desc: "Sanación concede el efecto de Energía Sagrada al objetivo por 5 segundos. Cuando el objetivo es atacado, Energía Sagrada causa <span class='tooltip-value'>#</span> de daño al atacante y drena el <span class='tooltip-value'>#%</span> de su Maná máximo.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [200, 400, 600],
            rankInfo2: [2, 4, 6],
        },
        {
            index: 30,
            name: "Castigo de Luz",
            ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 3 segundos</span>\n<span class='left'>El daño leve</span><span class='right'>Reactivación: 15 segundos</span>\n<span class='left'>Ataque objetivo único</span><span class='right'>Alcance: 18 metros</span>\n\nGolpea tres veces al objetivo. Cada ataque causa el 80% de tu base de Ataque más <span class='tooltip-value'>#</span> de daño extra. Cada golpe tiene una posibilidad del 5%/10%/15% de aturdir a un objetivo afectado por la Marca de Condena por 3 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 55</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 70</span>\n\n'],
            rankInfo2: [633, 789],
            rankInfo3: [1254, 1922],
        },
        {
            index: 31,
            name: "Vendaval de Magia",
            ranks: 2,
			desc: "Incrementa el costo de Maná de Bendiciones de Vendaval en <span class='tooltip-value'>#%</span>. Restablece una cantidad de Maná igual al <span class='tooltip-value'>#%</span> del costo de la habilidad al objetivo.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [50, 100],
            rankInfo2: [50, 70],
        },
        {
            index: 33,
            name: "Justicia",
            ranks: 2,
			ranksnw: 1,
			desc: "Reduce la reactivación de Juicio Divino en <span class='tooltip-value'>#</span> segundos, e incrementa su daño de base en el <span class='tooltip-value'>#%</span> de tu Dominio de Luz.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [2, 4],
            rankInfo2: [30, 60],
        },
        {
            index: 34,
            name: "Resplandor",
            ranks: 3,
			ranksnw: 2,
			desc: "Incrementa la posibilidad para que cada golpe de Castigo de Luz aturda al objetivo en <span class='tooltip-value'>#</span>.",
            rankInfo: ['1%-3%-5%', '2%-6%-10%', '3%-9%-15%'],
			parent: 17,
        },
        {
            index: 36,
            name: "Protección de Luz",
            ranks: 3,
			desc: "Incrementa la cantidad de daño de Luz que causas y la cantidad de Salud restablecida por tus habilidades de sanación en <span class='tooltip-value'>#</span> por cada punto de tu Dominio de Luz.",
            rankInfo: [0.5, 1, 1.5],
        },
        {
            index: 38,
            name: "Luz de Venganza",
            ranks: 3,
			desc: "Reduce la reactivación de Luz de Castigo en <span class='tooltip-value'>#</span> segundos, y la posibilidad de ser interrumpido mientras está siendo lanzado en <span class='tooltip-value'>#%</span> y su costo de Maná en <span class='tooltip-value'>#%</span>.",
            rankInfo: [2, 4, 6],
			rankInfo2: [20, 40, 60],
			rankInfo3: [10, 20, 30],
			parent: 20,
        },
        {
            index: 39,
            name: "Fusión de Luz",
            ranks: 2,
			desc: "Usar ataques de Luz reduce el costo de Maná de tus ataques de luz en <span class='tooltip-value'>#%</span> por 10 segundos. Este efecto se acumula 5 veces.",
            rankInfo: [2, 4],
        },
        {
            index: 41,
            name: "Veredicto",
            ranks: 2,
			desc: "Incrementa el daño extra de Castigo Divino en <span class='tooltip-value'>#%</span>. Inflige el efecto de Marca de Condena y reduce la efectividad de las habilidades de sanación lanzadas sobre el objetivo en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [10, 15],
			rankInfo2: [10, 15],
			parent: 19,
        },
        {
            index: 42,
            name: "Abandono",
            ranks: 2,
			desc: "Reduce la reactivación de Golpe de Castigo en <span class='tooltip-value'>#</span> segundo(s). Le concede a Golpe de Castigo y Castigo de Luz una posibilidad de <span class='tooltip-value'>#%</span> de disipar sanaciones sobre el objetivo. El objetivo no puede ser sanado por 3 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2],
			rankInfo2: [10, 20],
        },
        {
            index: 46,
            name: "Extracción de Castigo",
            ranks: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'>913 Maná</span><span class='right'>Tiempo de hechizar: 3 segundos</span>\n<span class='left'>Leve</span><span class='right'>Reactivación: 60 segundos</span>\n<span class='left'>Maldición multiobjetivo</span><span class='right'>Alcance: 18 metros</span>\n\nDisipa los buffs de Ataque de hasta 20 enemigos dentro de un radio de 10 metros.",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
        },
    ],
        // three
    [
        {
            index: 2,
            name: "Luz Congelante",
            ranks: 5,
			desc: "Golpe Divino causa una cantidad de daño a los objetivos restrasados igual al <span class='tooltip-value'>#%</span> del daño extra de Golpe Divino. Le concede a Golpe Divino una posibilidad del <span class='tooltip-value'>#%</span> de atrapar un objetivo ralentizado por 2 segundos.",
            rankInfo: [5, 10, 15, 20, 25],
            rankInfo2: [5, 10, 15, 20, 25],
        },
        {
            index: 4,
            name: "Corazón de Escarcha",
            ranks: 5,
			desc: "Incrementa la Precisión de tus habilidades de Agua en <span class='tooltip-value'>#</span> y su Chance Crítico en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20, 30, 40, 50],
            rankInfo2: [1, 1, 2, 2, 3],
        },
        {
            index: 5,
            name: "Núcleo Helado",
            ranks: 3,
			ranksnw: 2,
			desc: "Concentración de Helada reduce la velocidad de movimiento del objetivo en un <span class='tooltip-value'>#%</span> adicional. Incrementa el daño extra de Concentración de Helada en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [5, 10, 15],
            rankInfo2: [5, 10, 15],
        },
        {
            index: 6,
            name: "Otorgamiento de Aqua",
            ranks: 2,
			desc: "Bendiciones de Fortuna incrementa las Resistencias del objetivo en <span class='tooltip-value'>#</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [5, 10],
        },
        {
            index: 7,
            name: "Luz de Salvación",
            ranks: 3,
			desc: "Le concede a Luz de Santuario una posibilidad del <span class='tooltip-value'>#%</span> de disipar todos los efectos controladores de los objetivos y concederles inmunidad contra los efectos controladores por 5 segundos.",
            rankInfo: [40, 70, 100],
        },
        {
            index: 10,
            name: "Oración de Helada",
            ranks: 4,
			ranksnw: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Ataque</span><span class='right'>Reactivación: 60 segundos</span>\n<span class='left'>Auto bendición</span><span class='right'>Alcance: Ninguno</span>\n\nIncrementa el daño de base tus habilidades de Agua en 50% y reduce sus reactivaciones en 75% por <span class='tooltip-value'>#</span> segundos. Mientras Oración de Helada está activo, no puedes ser interrumpido al lanzar habilidades de Agua.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 30</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 45</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 60</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
            rankInfo2: [276, 394, 513, 634],
            rankInfo3: [12, 15, 18, 21],
        },
        {
            index: 11,
            name: "Vientos de Salvación",
            ranks: 3,
			desc: "Incrementa la duración de Bendiciones de Vendaval en <span class='tooltip-value'>#</span> segundos y le concede una posibilidad del <span class='tooltip-value'>#%</span> de disipar los efectos lentos puestos sobre el objetivo.",
            rankInfo: [2, 4, 6],
            rankInfo2: [40, 70, 100],
        },
        {
            index: 12,
            name: "Dominio de Escarcha",
            ranks: 4,
			desc: "Incrementa tu Dominio de Agua en <span class='tooltip-value'>#</span>.",
            rankInfo: [12, 24, 36, 48],
        },
        {
            index: 13,
            name: "Congelamiento Relámpago",
            ranks: 3,
			ranksnw: 2,
			desc: "Reduce la reactivación de Concentración de Helada en <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2, 3],
			parent: 2,
        },
        {
            index: 15,
            name: "Frialdad de Arcano",
            ranks: 3,
			ranksnw: 1,
			desc: "Incrementa el daño de base de Oración Sagrada - Enigma en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [10, 20, 30],
        },
        {
            index: 16,
            name: "Barrera Congelada",
            ranks: 3,
			desc: "Incrementa tu Resistencia de Agua en <span class='tooltip-value'>#</span>.",
            rankInfo: [15, 30, 45],
        },
        {
            index: 17,
            name: "Frio Penetrante",
            ranks: 4,
			desc: "Concentración de Helada reduce la Resistencia de Agua del objetivo en <span class='tooltip-value'>#</span> y su Evasión de Crítica en <span class='tooltip-value'>#%</span> por 15 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [15, 25, 35, 45],
			rankInfo2: [0.5, 1, 1.5, 2],
			parent: 8,
        },
        {
            index: 18,
            name: "Claridad de Hielo",
            ranks: 4,
			desc: "Oración de Helada incrementa el rango de tus habilidades de Agua en <span class='tooltip-value'>#</span> metro(s) y su Chance Crítico en <span class='tooltip-value'>#%</span> Oración de Helada adquiere una posibilidad del <span class='tooltip-value'>#%</span> de reiniciar las reactivaciones de otras habilidades de Agua.",
            rankInfo: [1, 2, 3, 4],
			rankInfo2: [1, 2, 3, 4],
			rankInfo3: [25, 50, 75, 100],
			parent: 5,
        },
        {
            index: 22,
            name: "Reino de Hielo",
            ranks: 3,
			desc: "Le concede a tus habilidades ofensivas de Agua una posibilidad del <span class='tooltip-value'>#%</span> de congelar a objetivos ralentizados por 3 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [15, 30, 45],
        },
        {
            index: 23,
            name: "Sifón",
            ranks: 3,
			desc: "Incrementa la cantidad de Maná absorbido por Oración Sagrada - Enigma en <span class='tooltip-value'>#%</span>. Reduce la Salud máxima del objetivo por el doble de la cantidad de Maná absorbido por <span class='tooltip-value'>#</span> segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [25, 50, 75],
			rankInfo2: [20, 25, 30],
			parent: 9,
        },
        {
            index: 25,
            name: "Espada Congelada",
            ranks: 3,
			ranksnw: 1,
			desc: "Incrementa el daño extra de Golpe de Espada de Hielo en <span class='tooltip-value'>#%</span> y reduce la reactivación en <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [5, 10, 15],
			rankInfo2: [1, 2, 3],
        },
        {
            index: 26,
            name: "Aire del Norte",
            ranks: 3,
			desc: "Incrementa la posibilidad de que Golpe de Espada de Hielo inflija un efecto lento en <span class='tooltip-value'>#%</span> Incrementa su rango en <span class='tooltip-value'>#</span> metro(s).",
            rankInfo: [25, 50, 75],
			rankInfo2: [1, 2, 3],
			parent: 15
        },
        {
            index: 27,
            name: "Bendiciones Aqua",
            ranks: 2,
			desc: "Bendiciones de Tenacidad concede al objetivo el efecto de Bendición de Dios del Agua, que reduce el daño a recibir de Agua en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [3, 6],
        },
        {
            index: 30,
            name: "Confesión bloqueada por hielo",
            ranks: 2,
			ranksnw: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Agua</span><span class='right'>Reactivación: 45 segundos</span>\n<span class='left'>Maldición objetivo único</span><span class='right'>Alcance: 18 metros</span>\n\nPor 10 segundos, cada golpe que el objetivo recibe interrumpirá su hechizo y lo atrapará por <span class='tooltip-value'>#</span> segundo(s). Este efecto termina una vez que el objetivo ha sido golpeado 6 veces. Si el objetivo no es golpeado mientras dura el efecto, será congelado por 5 segundos cuando el efecto termine.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 55</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 70</span>\n\n'],
            rankInfo2: [409, 502],
			rankInfo3: [1, 2],
        },
        {
            index: 31,
            name: "Agua Ondulante",
            ranks: 3,
			desc: "Incrementa la cantidad de daño de Agua que causas y la cantidad de Salud restablecida por tus habilidades de sanación en <span class='tooltip-value'>#</span> por cada punto de tu Dominio de Agua.",
            rankInfo: [0.5, 1, 1.5],
        },
        {
            index: 32,
            name: "Barrera Angelical",
            ranks: 3,
			desc: "Incrementa la Defensa adicional concedida por Barrera de Alma en <span class='tooltip-value'>#%</span>.",
            rankInfo: [50, 100, 150],
        },
        {
            index: 33,
            name: "Castigo Severo",
            ranks: 3,
			desc: "Incrementa la cantidad de Maná que el objetivo de Juicio Divino pierde en <span class='tooltip-value'>#</span>. Causa un daño igual a <span class='tooltip-value'>#%</span> la cantidad de Maná que se ha perdido a causa de los objetivos ralentizados.",
            rankInfo: [200, 400, 600],
			rankInfo2: [30, 40, 50],
        },
        {
            index: 34,
            name: "Corazón Frio",
            ranks: 3,
			desc: "Incrementa la duración de Confesión de las sombras en <span class='tooltip-value'>#</span> segundos y reduce su reactivación en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [2, 4, 6],
			rankInfo2: [5, 10, 15],
			parent: 18,
        },
        {
            index: 38,
            name: "Respuesta Rápida",
            ranks: 2,
			desc: "Reduce la reactivación de Compasión en <span class='tooltip-value'>#</span> segundos y su costo de Maná en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [3, 6],
			rankInfo2: [20, 40],
        },
        {
            index: 39,
            name: "Tranquilidad de Cristal",
            ranks: 3,
			desc: "Incrementa la duración de los efectos lentos causados por tus habilidades en <span class='tooltip-value'>#</span>. segundo(s). Reducen la velocidad de los movimientos del objetivo en un <span class='tooltip-value'>#%</span> adicional.",
            rankInfo: [1, 2, 3],
			rankInfo2: [5, 10, 15],
        },
        {
            index: 41,
            name: "Asilo Angelical",
            ranks: 2,
			desc: "Reduce el costo de Maná de Armonía Angelical en <span class='tooltip-value'>#%</span>. Cada efecto de sanación tiene una posibilidad del <span class='tooltip-value'>#%</span> de disipar el último sangrado o efecto de quemadura puestos sobre el objetivo. Esta posibilidad se duplica para objetivos a 8 metros de ti.",
            rankInfo: [15, 30],
			rankInfo2: [10, 20],
        },
        {
            index: 42,
            name: "Abrazo de Aurora",
            ranks: 2,
			desc: "Incrementa el daño de base de tus habilidades ofensivas de Agua en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20],
        },
        {
            index: 46,
            name: "Mundo Apaciguado",
            ranks: 1,
			desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'>845 Maná</span><span class='right'>Tiempo de hechizar: 2 segundos</span>\n<span class='left'>El daño de agua</span><span class='right'>Reactivación: 15 segundos</span>\n<span class='left'>Ataque multiobjetivo</span><span class='right'>Alcance: 18 metros</span>\n\nGolpea a todos los enemigos a 8 metros del objetivo. Causa el 100% de tu base de Ataque más 3328 de daño extra. Reduce la efectividad de las habilidades de sanación lanzadas sobre el objetivo en 20% y su Resistencia de Agua en 60 por 10 segundos.",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
        },
    ]
];