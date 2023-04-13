var data = [
    // one
    [
        {
            index: 1,
            name: "Furia Extrema",
            ranks: 5,
            desc: "Cada pila de Furia aumenta el daño de Base de la Fuerza de Furia en <span class='tooltip-value'>#%</span> y la daño extra en <span class='tooltip-value'>#</span>.",
            rankInfo: [1, 2, 3, 4, 5],
            rankInfo2: [5, 10, 15, 20, 25],
        },
        {
            index: 2,
            name: "Poder Aplastante",
            ranks: 5,
            desc: "Aumenta el daño extra del Golpe Duro en <span class='tooltip-value'>#%</span> además de un adicional <span class='tooltip-value'>#%</span> de tu Dominio de la Tierra.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [2, 4, 6, 8, 10],
            rankInfo2: [20, 40, 60, 80, 100],
        },
        {
            index: 5,
            name: "Recuperarse",
            ranks: 5,
            desc: "Aumenta el Bono de rango de Recuperación de la Salud otorgada por el Aura de Recuperación en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20, 30, 40, 50],
        },
        {
            index: 6,
            name: "Oleada de Defensa",
            ranks: 3,
            desc: "Aumenta el daño de Base de Contraataque en <span class='tooltip-value'>#%</span>.",
            rankInfo: [15, 30, 45],
        },
        {
            index: 7,
            name: "Voluntad de la Tierra",
            ranks: 3,
            desc: "Aumenta tu oportunidad de generar Furia cada vez que eres golpeado mientras el Enfoque Mental está activo en <span class='tooltip-value'>#%</span> Cada pila de Furia aumenta tu velocidad de movimiento en <span class='tooltip-value'>#%</span>.",
            rankInfo: [5, 10, 15],
			rankInfo2: [1, 2, 3],
        },
        {
            index: 9,
            name: "Ataque Aplastante",
            ranks: 4,
			ranksnw: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 2 segundos</span>\n<span class='left'>EI daño de tierra</span><span class='right'>Reactivación: 5 segundos</span>\n<span class='left'>Ataque objetivo único</span><span class='right'>Corto Alcance</span>\n\nInflige 100% de tu Ataque más <span class='tooltip-value'>#</span> daño extra. Reduce el Dominio de la Tierra del objetivo en <span class='tooltip-value'>#</span> durante <span class='tooltip-value'>#</span> segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 30</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 45</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 60</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
            rankInfo2: [111, 168, 227, 287],
			rankInfo3: [1243, 2211, 3162, 4096],
			rankInfo4: [9, 10, 11, 12],
			rankInfo5: [30, 45, 60, 75],
        },
        {
            index: 10,
            name: "Ira Aplastante",
            ranks: 3,
            desc: "Cada pila de Furia Aumenta la Oportunidad de Crítica de Ataque Aplastante en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2, 3],
            parent: 5,
        },
        {
            index: 11,
            name: "Estirpe de Piedras",
            ranks: 4,
			ranksnw: 4,
            desc: "Aumenta la duración de la Protección Incierta en <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2, 3, 4],
        },
        {
            index: 13,
            name: "Código de Furia",
            ranks: 3,
            desc: "Reduce el retraso del la Fuerza de Furia en <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [2, 4, 6],
        },
        {
            index: 15,
            name: "Fuerza de las Rocas",
            ranks: 2,
            desc: "Protección Incierta Aumenta tu Ataque en <span class='tooltip-value'>#%</span> en lugar de reducirlo.",
            rankInfo: [10, 30],
            parent: 7,
        },
        {
            index: 16,
            name: "Esencia de la Tierra",
            ranks: 3,
            desc: "Aumenta tu Resistencia de la Tierra en <span class='tooltip-value'>#</span>.",
            rankInfo: [20, 30, 40],
        },
        {
            index: 17,
            name: "Código de la Grieta",
            ranks: 3,
			ranksnw: 2,
            desc: "Reduce el retraso del la Grieta de la Tierra en <span class='tooltip-value'>#</span> segundo(s). Aumenta la Precisión de la Grieta de la Tierra en <span class='tooltip-value'>#</span>.",
            rankInfo: [1, 2, 3],
            rankInfo2: [20, 40, 60],
        },
        {
            index: 18,
            name: "Provocación Mágica",
            ranks: 3,
            desc: "Provoca fugas <span class='tooltip-value'>#</span> Maná del objetivo y reduce su Maná máximo en <span class='tooltip-value'>#</span>.",
            rankInfo: [100, 200, 300],
            rankInfo2: [400, 800, 1200],
        },
        {
            index: 20,
            name: "Dominio de Pulso",
            ranks: 4,
            desc: "Aumenta tu Dominio de la Tierra en <span class='tooltip-value'>#</span>.",
            rankInfo: [20, 30, 40, 50],
        },
        {
            index: 21,
            name: "Desgajador",
            ranks: 3,
            desc: "Le da a la Grieta de la Tierra una <span class='tooltip-value'>#%</span> oportunidad de golpear el objetivo durante 1 -3 segundo(s).",
            rankInfo: [20, 35, 50],
            parent: 11,
        },
        {
            index: 22,
            name: "Ráfaga",
            ranks: 4,
			ranksnw: 2,
            desc: "Aumenta el bono de velocidad de movimiento otorgado por la Fuerza de Vendaval en <span class='tooltip-value'>#%</span> y reduce su retraso en <span class='tooltip-value'>#</span> segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [5, 10, 15, 20],
            rankInfo2: [5, 10, 15, 20],
        },
        {
            index: 23,
            name: "Brisa Estimulante",
            ranks: 1,
            desc: "La Fuerza de Vendaval disipa los efectos de la lentitud y la atrapada en tí.",
            rankInfo: [],
            parent: 15,
        },
        {
            index: 25,
            name: "Fuerza Brutal",
            ranks: 3,
            desc: "Aumenta la duración que la Fuerza de Furia y la Grieta de la Tierra golpea sus objetivos en <span class='tooltip-value'>#</span> segundo(s). Puede que este efecto no ocurre cada vez que se ponen estas habilidades.",
            rankInfo: [1, 2, 3],
        },
        {
            index: 26,
            name: "Fuente de la Tierra",
            ranks: 3,
            desc: "Reduce los costos del Maná de tus habilidades de la Tierra de la ofensiva en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [10, 20, 30],
        },
        {
            index: 27,
            name: "Saqueo Brutal",
            ranks: 2,
            desc: "Aumenta el oportunidad de la Furia de Luz para desarmar el objetivo en <span class='tooltip-value'>#%</span>.",
            rankInfo: [20, 40],
        },
        {
            index: 30,
            name: "Contra Medida Absoluta",
            ranks: 2,
			ranksnw: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 2 segundos</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 90 segundos</span>\n<span class='left'>Auto bendición</span><span class='right'>Alcance: Ninguno</span>\n\nPermanece durante <span class='tooltip-value'>#</span> segundos. Inflige daño igual a <span class='tooltip-value'>#%</span> de tu Defensa a los enemigos que te ataquen. Tienes una 50% oportunidad de golpear objetivos durante 2 segundos. Cada pila de Furia aumenta la oportunidad de golpear en 5%.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 55</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 70</span>\n\n'],
            rankInfo2: [185, 232],
			rankInfo3: [8, 10],
            rankInfo4: [100, 200],
        },
        {
            index: 32,
            name: "Extensión de Vida",
            ranks: 3,
            desc: "Aumenta el máximo de tu Salud en <span class='tooltip-value'>#%</span> más <span class='tooltip-value'>#</span>.",
			rankInfo: [2, 4, 6],
            rankInfo2: [200, 400, 600],
        },
        {
            index: 33,
            name: "Ira de Barro",
            ranks: 2,
            desc: "Tus habilidades de la Tierra desagradables tienen una <span class='tooltip-value'>#%</span> oportunidad de generar una pila de Furia extra.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: [6, 12],
        },
        {
            index: 35,
            name: "Lealtad",
            ranks: 1,
            desc: "Reduce el costo de Salud del Guardián Leal en 50%.",
			rankInfo: [],
        },
        {
            index: 37,
            name: "Fuerza de la Tierra",
            ranks: 3,
			ranksnw: 1,
            desc: "Aumenta el daño de Base del Golpe Duro, Fuerza de Furia, Ataque Aplastante, y Penitencia de la Tierra en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 15, 20],
        },
        {
            index: 38,
            name: "Contra Tiempo",
            ranks: 3,
            desc: "Reduce el retraso de la Contra Medida Absoluta en <span class='tooltip-value'>#</span> segundos. Aumenta el máximo de tu Salud en <span class='tooltip-value'>#%</span> mientras que la Contra Medida Absoluta está activa.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [5, 10, 15],
            rankInfo2: [10, 20, 30],
            parent: 20,
        },
        {
            index: 42,
            name: "Golpe Debilitante",
            ranks: 1,
            desc: "La Penitencia de la Tierra reduce la Oportunidad de Crítica del objetivo en un adicional 3%-6%. Aumenta la duración del efecto por 5 segundos.",
            rankInfo: [],
        },
        {
            index: 43,
            name: "Voluntad Fortalecida",
            ranks: 2,
            desc: "Cada pila de Furia tiene una <span class='tooltip-value'>#%</span> oportunidad para disipar los efectos de la atrapada y la lentitud sobre tí. En el rango 2, disipa los efectos negativos más recientes puestos en tí.",
            rankInfo: [5, 10],
        },
        {
            index: 45,
            name: "Alma de la Tierra",
            ranks: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'>498 Maná</span><span class='right'>Tiempo de hechizar: 2.50 segundos</span>\n<span class='left'>EI daño de tierra</span><span class='right'>Reactivación: 25 segundos</span>\n<span class='left'>Ataque objetivo único</span><span class='right'>Corto Alcance</span>\n\nInflige 150% de tu Ataque más 5164 daño extra. Causa el efecto de Rompimiento de Alma de Barro en el objetivo, el cual aumenta el daño que conlleva en 8% durante 10 segundos. Cada pila de Furia aumenta la duración del Rompimiento de Alma de Barro en 1 segundo.",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
            parent: 24,
        },
    ],
        // two
    [
        {
            index: 1,
            name: "Protección Mental",
            ranks: 5,
			ranksnw: 3,
            desc: "Aumenta el daño de Base de Contraataque en <span class='tooltip-value'>#%</span> mientras el Enfoque Mental está activo. En el rango 5, Reduce los Ataques al objetivo en 10% durante 9 segundos.",
            rankInfo: [10, 20, 30, 40, 50],
        },
        {
            index: 2,
            name: "Ira de la Mente",
            ranks: 5,
            desc: "Aumenta la duración del Enfoque Mental en <span class='tooltip-value'>#</span> segundos. Cada pila de Furia Aumenta tu Ataque en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [60, 120, 180, 240, 300],
            rankInfo2: [0.2, 0.4, 0.6, 0.8, 1.0],
        },
        {
            index: 5,
            name: "Alma de Protección",
            ranks: 3,
            desc: "Aumenta la duración del Modo Guardián en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [2, 4, 6],
			parent: [0],
        },
        {
            index: 6,
            name: "Cerrojo de Furia",
            ranks: 3,
            desc: "La Fuerza de Furia gana una <span class='tooltip-value'>#%</span> oportunidad no consumir Furia.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [15, 30, 50],
        },
        {
            index: 7,
            name: "Oda de Luz",
            ranks: 5,
            desc: "Mientras el Aura de Recuperación esté activa, Los miembros de tu equipo afectados Recuperan una cantidad adicional de Maná igual a <span class='tooltip-value'>#%</span> del efecto original cuando se golpea.",
            rankInfo: [20, 40, 60, 80, 100],
        },
        {
            index: 9,
            name: "Bendiciones de Rocas",
            ranks: 3,
            desc: "La Protección Incierta elimina todos los efectos de estado negativo que afectan los miembros de tu equipo a 20 metros de tí y te hace inmune al daño por venir. Los miembros de tu equipo afectados son inmunes a todos los efectos de estado negativo durante <span class='tooltip-value'>#</span> segundo(s).\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 3, 5],
        },
        {
            index: 10,
            name: "El Aura de Naturaleza",
            ranks: 4,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: Instantáneo</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 5 segundos</span>\n<span class='left'>Bendición de Aura</span><span class='right'>Alcance: Ninguno</span>\n\nAumenta las Resistencias a la Tierra y al Viento de todos los miembros de tu equipo a 16 metros de tí en <span class='tooltip-value'>#</span> Consume 0.5% de tu Maná máximo cada 5 segundos. Solo un Aura puede estar activa a la vez.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 30</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 45</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 60</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
            rankInfo2: [112, 160, 210, 261],
            rankInfo3: [45, 70, 95, 120],
        },
        {
            index: 12,
            name: "Precisión de Luz",
            ranks: 3,
            desc: "Aumenta tu Precisión en <span class='tooltip-value'>#</span>. El Aura de Naturaleza, El Aura de Llama de Hielo, y el Aura de Caos otorga el efecto de la Precisión de Luz, el cual aumenta la Precisión de los miembros de tu equipo afectados en <span class='tooltip-value'>#</span>.",
            rankInfo: [11, 16, 21],
            rankInfo2: [11, 16, 21],
        },
        {
            index: 13,
            name: "Protección en Masa",
            ranks: 3,
            desc: "Aumenta la duración de la Protección de Fortaleza en <span class='tooltip-value'>#</span> segundos y reduce el costo de su Maná en <span class='tooltip-value'>#%</span>.",
            rankInfo: [300, 600, 900],
            rankInfo2: [15, 30, 45],
        },
        {
            index: 14,
            name: "El Aura de Llama de Hielo",
            ranks: 4,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: Instantáneo</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 5 segundos</span>\n<span class='left'>Bendición de Aura</span><span class='right'>Alcance: Ninguno</span>\n\nAumenta las Resistencias al Agua y al Fuego de todos los miembros de tu equipo a 16 metros de tí en <span class='tooltip-value'>#</span> Consume 0.5% de tu Maná máximo cada 5 segundos. Solo un Aura puede estar activa a la vez.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 35</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 50</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 65</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 80</span>\n\n'],
            rankInfo2: [112, 160, 210, 261],
            rankInfo3: [45, 70, 95, 120],
        },
        {
            index: 16,
            name: "Barrera de Luz",
            ranks: 3,
            desc: "Aumenta tu Resistencia a la Luz en <span class='tooltip-value'>#</span> y tu Defensa en <span class='tooltip-value'>#</span>.",
            rankInfo: [20, 30, 40],
            rankInfo2: [10, 15, 20],
        },
        {
            index: 18,
            name: "El Aura de Caos",
            ranks: 4,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: Instantáneo</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 5 segundos</span>\n<span class='left'>Bendición de Aura</span><span class='right'>Alcance: Ninguno</span>\n\nAumenta las Resistencias a la Luz y a la Oscuridad de todos los miembros de tu equipo a 16 metros de tí en 45 Consume 0.5% de tu Maná máximo cada 5 segundos. Solo un Aura puede estar activa a la vez.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 40</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 55</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 70</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 80</span>\n\n'],
            rankInfo2: [112, 160, 210, 261],
            rankInfo3: [45, 70, 95, 120],
        },
        {
            index: 20,
            name: "Dominio de Luz",
            ranks: 4,
            desc: "Aumenta tu Dominio de Luz en <span class='tooltip-value'>#</span>.",
            rankInfo: [20, 30, 40, 50],
        },
        {
            index: 21,
            name: "Frenesí",
            ranks: 3,
            desc: "Aumenta el bono de velocidad de movimiento otorgado por la Fuerza de Vendaval en <span class='tooltip-value'>#%</span>.",
            rankInfo: [10, 20, 30],
        },
        {
            index: 23,
            name: "Enfoque de Aura",
            ranks: 4,
			ranksnw: 2,
            desc: "Tus habilidades de Aura aumentan Tu Evasión en <span class='tooltip-value'>#</span> y tu Evasión de Crítica en <span class='tooltip-value'>#%</span>.",
            rankInfo: [4, 8, 12, 16],
            rankInfo2: [1.5, 2.0, 2.5, 3.0],
        },
        {
            index: 25,
            name: "Ira de Luz",
            ranks: 4,
			ranksnw: 2,
            desc: "La Furia de luz reduce la Evasión de Crítica de los objetivos en <span class='tooltip-value'>#%</span> y la efectividad de las habilidades curativas puestas en objetivos por debajo de 50% Salud en <span class='tooltip-value'>#%</span> durante 15 segundos.",
            rankInfo: [1, 2, 3, 4],
            rankInfo2: [10, 20, 30, 40],
        },
        {
            index: 26,
            name: "Conocimiento de Furia de Luz",
            ranks: 2,
            desc: "Reduce el retraso del la Furia de Luz en <span class='tooltip-value'>#</span> segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1.5, 3],
			parent: 15,
        },
        {
            index: 28,
            name: "Eficiencia del Aura",
            ranks: 4,
            desc: "Reduce los costos del Maná de las habilidades de tu Aura en <span class='tooltip-value'>#%</span>.",
            rankInfo: [15, 30, 45, 60],
        },
        {
            index: 29,
            name: "Ojo de la Tormenta",
            ranks: 2,
            desc: "Aumenta el rango de la Fuerza de Vendaval en <span class='tooltip-value'>#</span> metros y le da una 50% oportunidad de disipar los efectos de atrapada y de lentitud de los miembros de tu equipo afectados.",
            rankInfo: [5, 10],
        },
        {
            index: 30,
            name: "Puño de Cielo",
            ranks: 2,
			ranksnw: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 2 segundos</span>\n<span class='left'>El daño leve</span><span class='right'>Reactivación: 5 segundos</span>\n<span class='left'>Ataque objetivo único</span><span class='right'>Corto Alcance</span>\n\nInflige 100% de tu Ataque, más <span class='tooltip-value'>#</span> daño extra. Reduce las Resistencias del objetivo en <span class='tooltip-value'>#</span> durante <span class='tooltip-value'>#</span> segundos. Se acumula 3 veces. Cada pila de Furia Aumenta el daño extra en 2% y la duración en 0.5 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 55</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 70</span>\n\n'],
            rankInfo2: [218, 280],
            rankInfo3: [1802, 2746],
            rankInfo4: [30, 45],
            rankInfo5: [9, 10],
        },
        {
            index: 33,
            name: "Enfurecer",
            ranks: 2,
            desc: "Tus habilidades de Luz desagradables tienen una <span class='tooltip-value'>#%</span> oportunidad de generar una pila de Furia.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [8, 16],
        },
        {
            index: 35,
            name: "Aura Sabiduría",
            ranks: 3,
            desc: "Aumenta tu máximo de Maná en <span class='tooltip-value'>#%</span> mientras un Aura está activa.",
            rankInfo: [20, 30, 40],
			parent: 14,
        },
        {
            index: 37,
            name: "Alma de Penitencia",
            ranks: 2,
            desc: "Reduce el retraso del Penitencia de la Tierra en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [5, 10],
        },
        {
            index: 38,
            name: "Luz de Destrucción",
            ranks: 2,
            desc: "Aumenta el daño extra de la Furia de Luz y del Puño de Cielo en <span class='tooltip-value'>#%</span>. El Puño de Cielo reduce las Resistencias y la efectividad de las habilidades curativas puestas en el objetivo en <span class='tooltip-value'>#%</span> Acumula 3 veces.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [10, 20],
            rankInfo2: [5, 10],
			parent: 19,
        },
        {
            index: 41,
            name: "Poder de Luz",
            ranks: 2,
            desc: "Los retrasos del ataque de tus habilidades de Luz son reducidos en <span class='tooltip-value'>#</span> segundo(s) y su Oportunidad de Crítica se aumenta en <span class='tooltip-value'>#%</span>.",
            rankInfo: [1, 2],
            rankInfo2: [3, 6],
        },
        {
            index: 43,
            name: "Valentía de Guardia",
            ranks: 2,
            desc: "Aumenta tu Evasión de Crítica en <span class='tooltip-value'>#%</span> mientras que una habilidad de Aura está activa.",
            rankInfo: [1, 2],
        },
        {
            index: 46,
            name: "Asistencia Defensiva",
            ranks: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'>343 Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 120 segundos</span>\n<span class='left'>Bendición multiobjetivo</span><span class='right'>Alcance: Ninguno</span>\n\nReduce el daño por venir en 30% para todos los miembros de tu equipo a 10 metros durante 15 segundos. Esta habilidad no tiene ningún efecto en tí.",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
        },
    ],
        // three
    [
        {
            index: 1,
            name: "Arte de Guardianes",
            ranks: 5,
            desc: "Reduce el retraso del Contraataque en <span class='tooltip-value'>#</span> segundo(s). El Modo Guardián Reduce el daño porvenir en un adicional <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [1, 2, 3, 4, 5],
            rankInfo2: [1, 2, 3, 4, 5],
        },
        {
            index: 2,
            name: "Puñetazo Aplastante",
            ranks: 5,
            desc: "El Golpe Duro gana una <span class='tooltip-value'>#%</span> oportunidad de reducir del objetivo Ataque de base en <span class='tooltip-value'>#%</span> durante 20 segundos. Acumula 3 veces.",
            rankInfo: [10, 20, 30, 40, 50],
            rankInfo2: [1, 2, 3, 4, 5],
        },
        {
            index: 5,
            name: "Código de Provocación",
            ranks: 3,
            desc: "Reduce el retraso del la Provocación en <span class='tooltip-value'>#</span> segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [4, 6, 8],
        },
        {
            index: 6,
            name: "Voluntad Abominable",
            ranks: 3,
            desc: "Enfoque Mental Aumenta tu Precisión en <span class='tooltip-value'>#</span> y la cantidad de amenaza generada por tus habilidades en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [6, 12, 18],
            rankInfo2: [20, 40, 60],
        },
        {
            index: 7,
            name: "Fuente de Recuperación",
            ranks: 5,
            desc: "Aura de Recuperación Aumenta la efectividad de las habilidades curativas puestas en Los miembros de tu equipo afectados en <span class='tooltip-value'>#%</span> Aumenta la cantidad de Salud ellos se recuperan en <span class='tooltip-value'>#%</span> mientras son atacados.",
            rankInfo: [1, 2, 3, 4, 5],
            rankInfo2: [20, 40, 60, 80, 100],
        },
       {
            index: 9,
            name: "Provocación en Masa",
            ranks: 3,
			ranksnw: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Tierra</span><span class='right'>Reactivación: 120 segundos</span>\n<span class='left'>Maldición multiobjetivo</span><span class='right'>Alcance: Ninguno</span>\n\nProvoca hasta <span class='tooltip-value'>#</span> objetivos a 20 metros durante <span class='tooltip-value'>#</span> segundos. Remueve la cautela y evita que sean cautelosos durante 8 segundos. El rango de éxito de la Provocación en Masa es la misma que en Provocación.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 30</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 45</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 60</span>\n\n'],
            rankInfo2: [624, 893, 1170],
            rankInfo3: [16, 17, 18],
			rankInfo4: [6, 7, 8],
        },
        {
            index: 10,
            name: "Provocar Caos",
            ranks: 3,
			ranksnw: 1,
            desc: "Provocar Reduce la Evasión del objetivo en <span class='tooltip-value'>#</span> durante 8 segundos. Provocación en Masa reduce la Precisión de los objetivos en <span class='tooltip-value'>#</span> durante 8 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [15, 30, 45],
            rankInfo2: [30, 60, 90],
			parent: 5,
        },
       {
            index: 11,
            name: "Espíritu de Piedras",
            ranks: 4,
            desc: "Reduce el retraso de la Protección Incierta en <span class='tooltip-value'>#</span> segundo(s). Protección Incierta aumenta la efectividad de los efectos curativos puesta en tí en <span class='tooltip-value'>#%</span> y restablece <span class='tooltip-value'>#%</span> de tu Salud máxima cada 2 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [15, 30, 45, 60],
            rankInfo2: [10, 20, 30, 40],
			rankInfo3: [2, 4, 6, 8],
        },
        {
            index: 13,
            name: "Fe de Provocación",
            ranks: 3,
			ranksnw: 1,
            desc: "Aumenta el máximo de tu Salud en 1% más <span class='tooltip-value'>#</span> cuando eres golpeado mientras que la Protección de Fortaleza está activa. Acumula 10 veces y Permanece durante 15 segundos.",
            rankInfo: [50, 100, 150],
        },
        {
            index: 15,
            name: "Cobertura de Arsenal",
            ranks: 2,
            desc: "Aumenta la cantidad de amenaza generada por daño extra en <span class='tooltip-value'>#%</span>.",
            rankInfo: [50, 100],
        },
        {
            index: 16,
            name: "Piel de Piedra",
            ranks: 4,
            desc: "Aumenta tu Resistencia Física en <span class='tooltip-value'>#</span>.",
            rankInfo: [20, 30, 40, 50],
        },
        {
            index: 17,
            name: "Luz de Creencia",
            ranks: 3,
            desc: "Aumenta la duración del efecto de Fe de Protección en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [5, 10, 15],
			parent: 8,
        },
        {
            index: 19,
            name: "Aplastante",
            ranks: 3,
			ranksnw: 2,
            desc: "Aumenta el número de enemigos afectados por la Grieta de la Tierra en <span class='tooltip-value'>#</span> y aumenta su rango en <span class='tooltip-value'>#</span> metros.",
            rankInfo: [2, 4, 6],
            rankInfo2: [2, 4, 6],
        },
       {
            index: 20,
            name: "Fortalecer la Protección",
            ranks: 4,
            desc: "Aumenta tu Defensa en <span class='tooltip-value'>#</span>.",
            rankInfo: [16, 24, 32, 40],
        },
        {
            index: 21,
            name: "Bendición del Torbellino",
            ranks: 3,
            desc: "Aumenta el duración de la Fuerza de Vendaval en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [2, 4, 6],
        },
       {
            index: 23,
            name: "Cisma",
            ranks: 4,
            desc: "Grieta de la Tierra reduce la velocidad de movimiento de los Objetivos en un adicional <span class='tooltip-value'>#%</span>. La posición 2 aumenta la duración del efecto de lentitud.",
            rankInfo: [3.5, 7, 10.5, 14],
			parent: 12,
        },
        {
            index: 25,
            name: "Peñasco Guardián",
            ranks: 3,
			ranksnw: 2,
            desc: "Aumenta tu Defensa de base en <span class='tooltip-value'>#%</span> y reduce por venir daño en un adicional <span class='tooltip-value'>#%</span> mientras El Modo Guardián está activo.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [2, 4, 6],
            rankInfo2: [2, 4, 6],
        },
        {
            index: 26,
            name: "Azote Infame",
            ranks: 3,
            desc: "Reduce el retraso del la Provocación en Masa en <span class='tooltip-value'>#</span> segundos.",
            rankInfo: [12, 24, 36],
			parent: 6,
        },
		{
            index: 27,
            name: "Sabiduría",
            ranks: 2,
            desc: "Reduce los costos del Maná de Enfoque Mental, Provocar, Provocación en Masa, y Protección de Fortaleza en <span class='tooltip-value'>#%</span>.",
            rankInfo: [20, 40],
        },
		{
            index: 30,
            name: "Trastorno",
            ranks: 2,
			ranksnw: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'><span class='tooltip-value'>#</span> Maná</span><span class='right'>Tiempo de hechizar: 2 segundos</span>\n<span class='left'>El daño de tierra</span><span class='right'>Reactivación: 8 segundos</span>\n<span class='left'>Ataque multiobjetivo</span><span class='right'>Alcance: 8 metros</span>\n\nInflige 100% de tu Ataque más <span class='tooltip-value'>#</span> daño extra hasta en 15 objetivos frente a tí a 8 metros. Reduce la Evasión de los objetivos en <span class='tooltip-value'>#</span>. Cada pila de Furia Se aumenta el daño extra en 2% y la duración del efecto de reducción de Evasión en 0.5 segundos.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 55</span>\n\n', '<span class="req">Requiere que el personaje sea Nivel 70</span>\n\n'],
            rankInfo2: [292, 373],
            rankInfo3: [2319, 3526],
            rankInfo4: [10, 12],
        },
		{
            index: 31,
            name: "Arrebato de Magma",
            ranks: 2,
            desc: "Aumenta el daño de Base de Trastorno en <span class='tooltip-value'>#%</span>. Aumenta la cantidad de amenaza generada por El Trastorno y la Grieta de la Tierra en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [15, 30],
            rankInfo2: [50, 100],
			parent: 19,
        },
		{
            index: 34,
            name: "Corazón del Centinela",
            ranks: 2,
			ranksnw: 1,
            desc: "Aumenta la duración de la Guardián Leal en <span class='tooltip-value'>#</span> segundos y el rango en <span class='tooltip-value'>#%</span>.\n\n<b>Se puede aumentar el nivel de talento usando runas.</b>",
            rankInfo: [3, 6],
            rankInfo2: [15, 30],
        },
        {
            index: 35,
            name: "Tenacidad de Piedra",
            ranks: 3,
            desc: "Aumenta tu Evasión de Crítica en <span class='tooltip-value'>#%</span>.",
            rankInfo: [1, 2, 3],
        },
        {
            index: 37,
            name: "Dominio de Protección",
            ranks: 3,
            desc: "Reduce la penalidad de ataque causada por El Modo Guardián en <span class='tooltip-value'>#%</span>.",
            rankInfo: [30, 60, 100],
			parent: 16,
        },
        {
            index: 39,
            name: "Energía de la Tierra",
            ranks: 2,
            desc: "Cada pila de Furia aumenta el daño de Base de la Grieta de la Tierra y Penitencia de la Tierra en <span class='tooltip-value'>#%</span>.",
            rankInfo: [2, 3],
        },
		{
            index: 42,
            name: "Fe",
            ranks: 2,
            desc: "Reduce el retraso del Guardián Leal en <span class='tooltip-value'>#</span> segundos. Si te golpean a 12 segundos de habértelo puesto, <span class='tooltip-value'>#%</span> de la Salud utilizada para crear el escudo se restablece. Este efecto puede darse hasta 5 veces.",
            rankInfo: [5, 10],
            rankInfo2: [15, 30],
			parent: 21,
        },
        {
            index: 43,
            name: "Atrincherar",
            ranks: 3,
            desc: "Aumenta el daño extra del Golpe Duro, del Contraataque, de la Furia de Luz, y la Penitencia de la Tierra en <span class='tooltip-value'>#%</span> de tu Defensa. Aumenta la cantidad de daño El Aura de Retaliación se refleja de vuelta en los atacantes en <span class='tooltip-value'>#%</span> de tu Defensa.",
            rankInfo: [10, 20, 30],
            rankInfo2: [10, 20, 30],
        },
        {
            index: 47,
            name: "Alma de Piedra",
            ranks: 1,
            desc: "<span class='tooltip-value' style='font-weight:normal;'>#</span><span class='left'>150 Maná</span><span class='right'>Tiempo de hechizar: 1 segundos</span>\n<span class='left'>Defensa</span><span class='right'>Reactivación: 120 segundos</span>\n<span class='left'>Auto bendición</span><span class='right'>Alcance: Ninguno</span>\n\nDisipa los efectos negativos y absorbe el 60% del daño porvenir durante 15 segundos. Reduce tu velocidad de movimiento en 75%. Esta habilidad se puede utilizar mientras esté callada o golpeada.",
			rankInfo: ['<span class="req">Requiere que el personaje sea Nivel 75</span>\n\n'],
        },
    ]
];