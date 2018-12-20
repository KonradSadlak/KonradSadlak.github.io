$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [51.75, 19.5], 
                     zoom: 11,
                     zoomControl:true,
                     attributionControl:false
                    }
                    );
 
    
    var lyrORTO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                                 {
                                  layers: 'Raster',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                  }
                                 ); 
    var lyrSOZO =L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer',
                               {
                                  layers: 'Raster',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                  }
                                );
    var lyrPRGWOJ = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'wojewodztwa',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
     var lyrWODYP = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'wody_p',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
     var lyrWODYL = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'wody_l',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrWIEZIENIA = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'wiezienia',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
     var lyrSZKOLY = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'szkoly',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrDROGI = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'drogi',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrKOLEJE = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'koleje',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrCMENTARZE = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'cmentarze',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrMIESZK = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'os_mieszkaniowe',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrREKREACYJNE = L.tileLayer.wms ('http://localhost:8080/geoserver/ATE_workspace/wms',
                                 {layers: 'ob_rekreacyjne',
                                  format: 'image/png',
                                  transparent: 'true',
                                  version:'1.1.1'
                                   }
                                 );
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    
   var BaseMaps = {
       "OpenSteetMaps": lyrOSM,
       "ORTOFOTOMAPA": lyrORTO,
       "Mapa Sozologiczna": lyrSOZO,
       
   }; 
       //lista obiektów checkobx
    
    var overlays= {
        "Wykaz województw" : lyrPRGWOJ,
        "Buffory wód powierzchniowych" : lyrWODYP,
        "Buffory wód liniowych" : lyrWODYL,
        "Bufory więzień" : lyrWIEZIENIA,
        "Bufory szkół" : lyrSZKOLY,
        "Bufory dróg" : lyrDROGI,
        "Bufory koleje" : lyrKOLEJE,
        "Bufory cmentarze" : lyrCMENTARZE,
        "Bufory obszarów rekreacyjnych" : lyrREKREACYJNE,
        "Bufory osiedli mieszkaniowych" : lyrMIESZK
    };
    L.control.layers (BaseMaps, overlays).addTo(mymap);
    // usunięcie ze skali podziałki w milach
    L.control.scale({imperial:false}).addTo(mymap);
});