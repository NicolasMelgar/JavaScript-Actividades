

export const baseDatos =[ 

[ 
    "MANZANA",
    "BANANA",
    "NARANJA",
    "KIWI",
    "MANGO",
    "PERA",
    "UVA",
    "CEREZA",
    "FRESA",
    "LIMON",
    "LIMA",
    "MELON",
    "SANDIA",
    "DURAZNO",
    "CIRUELA",
    "FRAMBUESA",
    "ARANDANO",
    "HIGO",
    "MANDARINA",
    "PIÑA"
    ],
    
    
    [
    "PIANO", 
    "GUITARRA", 
    "VIOLIN", 
    "BAJO", 
    "TROMPETA", 
    "SAXOFON", 
    "BATERIA", 
    "XILOFON", 
    "FLAUTA", 
    "CLARINETE"
    ],
    
    
    
    [
    "LEON",
    "TIGRE",
    "OSO",
    "JIRAFA",
    "COCODRILO",
    "ELEFANTE",
    "HIPOPOTAMO",
    "CABALLO",
    "CONEJO",
    "ARDILLA",
    "MARIPOSA",
    "ABEJA",
    "MURCIELAGO",
    "PINGUINO",
    "TORTUGA",
    "CANGURO",
    "CAMELLO",
    "RANA",
    "TIBURON",
    "PULPO"
    ],
    
     
    [
    "ARGENTINA",
    "BOLIVIA",
    "BRASIL",
    "CHILE",
    "COLOMBIA",
    "ECUADOR",
    "GUYANA",
    "PARAGUAY",
    "PERU",
    "SURINAME",
    "URUGUAY",
    "VENEZUELA"
    ],
    

];
JSON.parse(localStorage.getItem("baseDatos")) || localStorage.setItem("baseDatos", JSON.stringify(baseDatos));