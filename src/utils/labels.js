export default {
    es: {
      // LABELS PRODUCERS
      producer: {
        id: "ID",
        names: "Nombre/s",
        surnames: "Apellido/s",
        department_id: "Departamento",
        municipality_id: "Municipio",
        community_id: "Comunidad",
        saf_size: "Tamaño del SAF (en hectáreas) ",
        start_year_saf: "Año en que se implementó el SAF",
        lat: "Latitud", // No visible en form add/update
        lng: "Longitud", // No visible en form add/update
        created_by: "Registrado por",
        updated_by: "Registrado por",
        created_at: "Actualizado el",
        updated_at: "Actualizado el",
      },
      producer_placeholder: {
        names: "Ingrese Nombre/s",
        surnames: "Ingrese Apellido/s",
        department_id: "Ingrese Departamento",
        municipality_id: "Ingrese Municipio",
        community_id: "Ingrese Comunidad",
        saf_size: "Ingrese Tamaño del SAF (en hectáreas) ",
        start_year_saf: "Ingrese Año en que se implementó el SAF",
        lat: "Ingrese Latitud", // No visible en form add/update
        lng: "Ingrese Longitud", // No visible en form add/update
        created_by: "Registrado por",
        updated_by: "Registrado por",
        created_at: "Actualizado el",
        updated_at: "Actualizado el",
      },
      // END LABELS PRODUCERS
  
      // START LABELS SAF TRACKINGS
      safTrackings: {
        id: "ID",
        lat: "Latitud", // No visible en form add/update
        lng: "Longitud", // No visible en form add/update
        producer_id: "Nombre del productor",
        q1: "Es el cacao su principal cultivo dentro del SAF?",
        q2title: "Número de plantas de cacao nativo", // Enunciado
        q2_1: "Plantas en crecimiento",
        q2_2: "Plantas en producción",
        q2_3: "Plantas improductivas",
        q3: "Otras especies de frutales en el SAF",
        q4: "(ej. Mara, cedro, cerebó…..)",
        q5title: "Buenas prácticas de manejo - PODA", // Enunciado
        q5_1: "Poda de chupone",
        q5_2: "Poda de formación",
        q5_3: "Poda de mantenimiento",
        q5_4: "Poda sanitaria",
        q6title: "Buenas prácticas de manejo – SANIDAD", // Enunciado
        q6_1title: "Enfermedades en la parcela", // Enunciado
        q6_1a: "Escoba de bruja, % afectación",
        q6_1b: "Escoba de bruja, acciones para el control",
        q6_2a: "Mazorca negra, % afectación",
        q6_2b: "Mazorca negra, acciones para el control",
        q6_3a: "Otras enfermedades",
        q6_4title: "Plagas en la parcela", // Enunciado
        q6_4a: "Monos",
        q6_5a: "Otros",
        q7title: "Renovación de parcela SAF", // Enunciado
        q7_1: "Número de plantas con poda de renovación",
        q7_2: "Plantas injertadas ",
        q7_3: "Poda de formacion",
        q7_4: "Poda gradual de planta madre",
        q7_5: "Otros datos",
        q8title: "Buenas Prácticas de beneficiado", // Enunciado
        q8_1a: "Técnica de fermentado, Cajas",
        q8_1b: "Técnica de fermentado, Jasayé",
        q8_1c: "Técnica de fermentado, Bolsa de yute",
        q8_1d: "Técnica de fermentado, Yute",
        q8_2a: "Días de fermentación",
        q8_3a: "Técnica de secado, Mesa",
        q8_3b: "Técnica de secado, Carpa",
        q8_3c: "Técnica de secado, Estera",
        q9title: "Producción", // Enunciado
        q9_1a: "Volumen de grano cosechado (qq de grano seco)",
        q9_2a: "Destino del grano, Venta",
        q9_2b: "Destino del grano, Autoconsumo ",
        q9_2c: "Destino del grano, Transformación ",
        q10title: "Comercialización", // Enunciado
        q10: "Precio del grano comercializado",
        created_by: "REGISTRADO POR",
        updated_by: "ACTUALIZADO POR",
        created_at: "REGISTRADO EL",
        updated_at: "ACTUALIZADO EL",
      },
      // ENDLABELS SAF TRACKINGS
  
      // START LABELS COLLECTOR
      collector: {
        id: "ID",
        lat: "Latitud", // No visible en form add/update
        lng: "Longitud", // No visible en form add/update
        group_name: "Nombre del grupo de recolectores  ",
        island_name: "Nombre de la isla o chocolatal",
        department_id: "Departamento",
        municipality_id: "Municipio",
        community_id: "Comunidad",
        number_collectors: "Número de recolectores que conforman el grupo",
        name_president: "Nombre del presidente/a del grupo",
        size_chocolate: "Tamaño del chocolatal (en hectáreas)",
        start_year_handle: "Año en que inició a realizar el manejo de bosques",
        created_by: "Registrado por",
        updated_by: "Registrado por",
        created_at: "Actualizado el",
        updated_at: "Actualizado el",
      },
      // END LABELS COLLECTOR
  
      // START LABELS WILD TRACKINGS
      wildTrackings: {
        id: "ID",
        lat: "Latitud", // No visible en form add/update
        lng: "Longitud", // No visible en form add/update
        collector_id: "Nombre del grupo de recolectores",
        q1title: "Acciones de manejo de bosque (MAB)", // Enunciado
        q1_1: "Roza selectiva",
        q1_2: "Podas de plantas de primera intervención",
        q1_3: "Raleo de sombra",
        q1_4: "Podas de plantas intervenidas o deschuponado",
        q1_5: "Apertura de sendas y caminos de acceso",
        q1_6: "Seguimiento y control del bosque (brechas corta fuego)",
        q1_7: "Contra fogueo",
        q1_8: "Enriquecimiento del área de manejo",
        q1_9: "Construcción de infraestructuras",
        q2title: "Buenas Prácticas de beneficiado", // Enunciado
        q2_1title: "Cuentan con centro de beneficiado", // Enunciado
        q2_1a: "Año en que se implementó",
        q2_1b: "Número de cajas",
        q2_2a: "Días de fermentación",
        q2_3a: "Técnica de secado, Mesa",
        q2_3b: "Técnica de secado, Carpa",
        q2_3c: "Técnica de secado, Estera",
        q3title: "Producción", // Enunciado
        q3_1a: "Volumen de grano cosechado (qq de grano seco)",
        q3_2a: "Destino del grano, Venta",
        q3_2b: "Destino del grano, Autoconsumo",
        q3_2c: "Destino del grano, Transformación",
        q3_3a: "AAAAAAA",
        q4title: "Comercialización", // Enunciado
        q4: "Precio del grano comercializado",
        created_by: "Registrado por",
        updated_by: "Registrado por",
        created_at: "Actualizado el",
        updated_at: "Actualizado el",
      },
      // END LABELS WILD TRACKINGS
    },
  };
  