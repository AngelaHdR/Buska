const listaTrayectos = [
    {
        // Murcia - Castellon con Alsa
        "id": 1,
        "empresa": 1,
        "paradas": [4, 3, 2, 1],
        "horarios" : ["09:00", "10:15", "12:45", "13:55"],
        "precios" : [0, 7, 15, 5]
    },
    {
        // Castellon - Murcia con Alsa
        "id": 2,
        "empresa": 1,
        "paradas": [1, 2, 3, 4],
        "horarios" : ["09:00", "10:10", "12:40", "13:55"],
        "precios" : [0, 5, 15, 7]
    },
    {
        // Murcia - Castellon con Flixbus
        "id": 3,
        "empresa": 2,
        "paradas": [4, 3, 2, 1],
        "horarios" : ["10:00", "11:15", "13:45", "14:55"],
        "precios" : [0, 8, 14, 6]
    },
    {
        // Castellon - Murcia con Flixbus
        "id": 4,
        "empresa": 2,
        "paradas": [1, 2, 3, 4],
        "horarios" : ["10:00", "11:10", "13:40", "14:55"],
        "precios" : [0, 6, 14, 8]
    },
    {
        // Madrid - Barcelona con Avanza
        "id": 5,
        "empresa": 3,
        "paradas": [5, 6, 7, 8, 9],
        "horarios" : ["09:00", "10:50", "13:00", "14:45", "16:55"],
        "precios" : [0, 12, 15, 8, 10]
    },
    {
        // Barcelona - Madrid con Avanza
        "id": 6,
        "empresa": 3,
        "paradas": [9, 8, 7, 6, 5],
        "horarios" : ["09:00", "11:15", "12:55", "15:10", "16:10"],
        "precios" : [0, 10, 8, 15, 12]
    },
    {
        // Madrid - Barcelona con Monbus
        "id": 7,
        "empresa": 4,
        "paradas": [5, 6, 7, 8, 9],
        "horarios" : ["10:00", "11:50", "14:00", "15:45", "17:55"],
        "precios" : [0, 12.5, 14, 10, 9.5]
    },
    {
        // Barcelona - Madrid con Avanza
        "id": 8,
        "empresa": 3,
        "paradas": [9, 8, 7, 6, 5],
        "horarios" : ["10:00", "12:15", "13:55", "16:10", "17:10"],
        "precios" : [0, 9, 8.75, 14, 10.75]
    },
    {
        // Murcia - Valencia con Avanza
        "id": 9,
        "empresa": 3,
        "paradas": [4, 3, 2],
        "horarios" : ["09:30", "10:45", "13:15"],
        "precios" : [0, 7, 12.5, 5.15]
    },
    {
        // Valencia - Murcia con Avanza
        "id": 10,
        "empresa": 3,
        "paradas": [2, 3, 4],
        "horarios" : ["09:30", "10:40", "13:10"],
        "precios" : [0, 6, 14, 7]
    },
    {
        // Alicante - Castellon con Monbus
        "id": 11,
        "empresa": 4,
        "paradas": [3, 2, 1],
        "horarios" : ["10:00", "12:20", "13:30"],
        "precios" : [0, 6.75, 5.5]
    },
    {
        // Castellon - Alicante con Monbus
        "id": 12,
        "empresa": 4,
        "paradas": [1, 2, 3],
        "horarios" : ["10:00", "11:15", "13:55"],
        "precios" : [0, 6, 7.5]
    },
    {
        // Madrid - Zaragoza con Alsa
        "id": 13,
        "empresa": 1,
        "paradas": [5, 6, 7],
        "horarios" : ["09:45", "11:35", "13:45"],
        "precios" : [0, 13, 13.50]
    },
    {
        // Madrid - Zaragoza con Alsa
        "id": 14,
        "empresa": 1,
        "paradas": [7, 6, 5],
        "horarios" : ["10:55", "13:10", "14:10"],
        "precios" : [0, 14, 10.75]
    },
    {
        // Valencia - Madrid con Monbus
        "id": 15,
        "empresa": 4,
        "paradas": [2, 10, 5],
        "horarios" : ["08:00", "09:10", "12:15"],
        "precios" : [0, 6, 12]
    },
    {
        // Madrid - Valencia con Monbus
        "id": 16,
        "empresa": 4,
        "paradas": [5, 10, 2],
        "horarios" : ["08:15", "11:55", "13:10"],
        "precios" : [0, 6, 12]
    }
    ]