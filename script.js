// don't forget to comment what you do!

//Gabis Hamburger Menu for the Header:
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navMenu.classList.toggle('active');
    
    // Optional: Change hamburger icon to X when menu is open
    if (navMenu.classList.contains('active')) {
      menuToggle.innerHTML = '✕';
    } else {
      menuToggle.innerHTML = '☰';
    }
  }
  
  // Optional: Close menu when clicking on a menu item (good UX)
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        if (menuToggle) {
          menuToggle.innerHTML = '☰';
        }
      });
    });
  });
  
  // Optional: Close menu when clicking outside of it
  document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (navMenu && menuToggle) {
      if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '☰';
      }
    }
  });


//Gabis svg Highlight map
console.log('Brazil element:', document.getElementById('Brazil'));
console.log('Year label element:', document.getElementById('year-label'));

const years = {
  1948: ['Venezuela'],
  1949: ['Venezuela'],
  1950: ['Venezuela'],
  1951: ['Venezuela'],
  1952: ['Venezuela'],
  1953: ['Venezuela','Colombia'],
  1954: ['Venezuela','Colombia','Paraguay'],
  1955: ['Venezuela','Colombia','Paraguay'],
  1956: ['Venezuela','Colombia','Paraguay'],
  1957: ['Venezuela','Colombia','Paraguay'],
  1958: ['Venezuela','Paraguay'],
  1959: ['Paraguay'],
  1960: ['Paraguay'],
  1961: ['Paraguay'],
  1962: ['Paraguay'],
  1963: ['Ecuador','Paraguay'],
  1964: ['Ecuador','Bolivia','Paraguay','Brazil'],
  1965: ['Ecuador','Bolivia','Paraguay','Brazil'],
  1966: ['Ecuador','Bolivia','Paraguay','Brazil'],
  1967: ['Paraguay','Bolivia','Brazil'],
  1968: ['Peru','Paraguay','Bolivia','Brazil'],
  1969: ['Peru','Paraguay','Bolivia','Brazil'],
  1970: ['Peru','Paraguay','Bolivia','Brazil'],
  1971: ['Peru','Bolivia','Paraguay','Brazil'],
  1972: ['Ecuador','Peru','Bolivia','Paraguay','Brazil'],
  1973: ['Peru','Bolivia','Paraguay','Chile','Uruguay','Brazil'],
  1974: ['Peru','Bolivia','Paraguay','Chile','Uruguay','Brazil'],
  1975: ['Peru','Bolivia','Paraguay','Chile','Uruguay','Brazil'],
  1976: ['Ecuador','Peru','Bolivia','Paraguay','Chile','Argentina','Uruguay','Brazil'],
  1977: ['Ecuador','Peru','Bolivia','Paraguay','Chile','Argentina','Uruguay','Brazil'],
  1978: ['Ecuador','Peru','Bolivia','Paraguay','Chile','Argentina','Uruguay','Brazil'],
  1979: ['Ecuador','Peru','Bolivia','Paraguay','Chile','Argentina','Uruguay','Brazil'],
  1980: ['Suriname','Peru','Bolivia','Paraguay','Chile','Argentina','Uruguay','Brazil'],
  1981: ['Suriname','Paraguay','Bolivia','Chile','Argentina','Uruguay','Brazil'],
  1982: ['Suriname','Paraguay','Bolivia','Chile','Argentina','Uruguay','Brazil'],
  1983: ['Suriname','Paraguay','Chile','Argentina','Uruguay','Brazil'],
  1984: ['Suriname','Paraguay','Chile','Uruguay','Brazil'],
  1985: ['Suriname','Paraguay','Chile','Uruguay','Brazil'],
  1986: ['Suriname','Paraguay','Chile'],
  1987: ['Suriname','Paraguay','Chile'],
  1988: ['Paraguay','Chile'],
  1989: ['Paraguay','Chile'],
  1990: ['Chile']
};


let yearIndex = 0;
const yearList = Object.keys(years);

function updateMap() {
  const year = yearList[yearIndex];
  document.getElementById('year-label').innerText = `Year: ${year}`;

  document.querySelectorAll('.country').forEach(c => c.classList.remove('highlight'));
  years[year].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('highlight');
  });

  yearIndex = (yearIndex + 1) % yearList.length;
  setTimeout(updateMap, 400);
  
  console.log('Updating map for year:', yearList[yearIndex]);
}

updateMap();

// Bea's content area

//Select each country section
document.querySelectorAll('.countries').forEach(function(section) {
  //Def slide & index
  let slides = section.querySelectorAll('.slide');
  let currentIndex = 0;

  //Def buttons and counter 
  let prev = section.querySelector('.prev');
  let next = section.querySelector('.next');
  let counter = section.querySelector('.current');

  //To show a specific slide
  function showSlide(index) { //Hide
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }

      slides[index].classList.add('active');
      counter.textContent = index + 1; //Show
  }

  //Next button
  next.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
          currentIndex++;
        } else {
          currentIndex = 0; //To the start
        }
        showSlide(currentIndex);
  });

  //Previous button
  prev.addEventListener('click', function() {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = slides.length - 1; //To the end
        }
        showSlide(currentIndex);
  });

  //Initial display
  showSlide(currentIndex);
  
});

// Betty's slideshow newspaper

let pictures = [
                {
                    picture: "assets/desaparecidosBrazil.jpg", 
                    description: "Missing persons during Brazil’s military dictatorship"
                },
                {
                    picture: "assets/csm_Uruguay-Schweigemarsch_Marta-Gonz_Flickr_CC-by-nc-sa_1920_8500aca52a.webp",
                    description: "Marcha del Silencio protest for missing persons during Uruguay’s military dictatorship"
                },
                {
                    picture: "assets/desaparecidosDictaduraArgentina.jpg",
                    description: "Missing persons during Argentina’s military dictatorship"
                }
            ];

let pictureIndex = 0;


function slideShow() {     
    if (pictureIndex >= pictures.length) {
        pictureIndex = 0;
    }               
    let img = document.getElementById("newspaper2-image");
    img.src = pictures[pictureIndex].picture;
                
    let caption = document.getElementById("newspaper2-caption");
    caption.textContent = pictures[pictureIndex].description;
    pictureIndex++;
}


window.setInterval(slideShow,2000);


//map navigation part
const geojsonData =
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -68.634010227889689,
                                    -52.636370458629699
                                ],
                                [
                                    -68.633349999602785,
                                    -54.86949999992504
                                ],
                                [
                                    -67.562439999706157,
                                    -54.870010000061427
                                ],
                                [
                                    -66.959919999808108,
                                    -54.896810000281221
                                ],
                                [
                                    -66.450000000199793,
                                    -55.250000000099874
                                ],
                                [
                                    -65.500000000299735,
                                    -55.200000000199793
                                ],
                                [
                                    -65.050000000299747,
                                    -54.700000000299724
                                ],
                                [
                                    -66.450000000199793,
                                    -54.449999999900058
                                ],
                                [
                                    -67.750000000299735,
                                    -53.850000000199827
                                ],
                                [
                                    -68.250000000199805,
                                    -53.099999999900035
                                ],
                                [
                                    -68.634010227889689,
                                    -52.636370458629699
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -57.625133429564073,
                                    -30.216294854623811
                                ],
                                [
                                    -56.290899624218241,
                                    -28.852760511987981
                                ],
                                [
                                    -55.16228634294032,
                                    -27.881915378192105
                                ],
                                [
                                    -54.490725267257233,
                                    -27.474756768310158
                                ],
                                [
                                    -53.648735317281023,
                                    -26.923472588788911
                                ],
                                [
                                    -53.628348965332464,
                                    -26.124865004416392
                                ],
                                [
                                    -54.130049608402658,
                                    -25.547639255447223
                                ],
                                [
                                    -54.625290696408456,
                                    -25.739255466466545
                                ],
                                [
                                    -54.788794928543098,
                                    -26.621785577242576
                                ],
                                [
                                    -55.695845506365004,
                                    -27.387837009270527
                                ],
                                [
                                    -56.486701626279,
                                    -27.548499037500562
                                ],
                                [
                                    -57.609759690956935,
                                    -27.395898532990884
                                ],
                                [
                                    -58.618173590438801,
                                    -27.123718764309501
                                ],
                                [
                                    -57.633660041277835,
                                    -25.603656507641688
                                ],
                                [
                                    -57.777217170136225,
                                    -25.162339775859948
                                ],
                                [
                                    -58.807128465606183,
                                    -24.771459242150286
                                ],
                                [
                                    -60.028966030457923,
                                    -24.03279631949448
                                ],
                                [
                                    -60.84656470369805,
                                    -23.880712578922328
                                ],
                                [
                                    -62.685057136077944,
                                    -22.249029229015662
                                ],
                                [
                                    -62.846468472242179,
                                    -22.034985446920814
                                ],
                                [
                                    -63.986838141866713,
                                    -21.993644301343409
                                ],
                                [
                                    -64.37702104358624,
                                    -22.798091322256653
                                ],
                                [
                                    -64.964892136862602,
                                    -22.075861504504758
                                ],
                                [
                                    -66.273339403290777,
                                    -21.832310479544958
                                ],
                                [
                                    -67.106673550344055,
                                    -22.735924574259627
                                ],
                                [
                                    -66.985233934198675,
                                    -22.9863485654339
                                ],
                                [
                                    -67.328442959375025,
                                    -24.025303236555089
                                ],
                                [
                                    -68.417652960515682,
                                    -24.518554783176683
                                ],
                                [
                                    -68.386001145736259,
                                    -26.185016371708116
                                ],
                                [
                                    -68.594799770492955,
                                    -26.506908868049777
                                ],
                                [
                                    -68.295541551701206,
                                    -26.8993396953706
                                ],
                                [
                                    -69.001234910862422,
                                    -27.521213880915809
                                ],
                                [
                                    -69.656130336745605,
                                    -28.459141127161217
                                ],
                                [
                                    -70.013550381444929,
                                    -29.36792286574763
                                ],
                                [
                                    -69.919008348256625,
                                    -30.336339206788921
                                ],
                                [
                                    -70.535068935682773,
                                    -31.365010267909497
                                ],
                                [
                                    -70.074399379827469,
                                    -33.091209812582747
                                ],
                                [
                                    -69.814776984270395,
                                    -33.273886000738287
                                ],
                                [
                                    -69.817309129812429,
                                    -34.193571466050287
                                ],
                                [
                                    -70.388049486194802,
                                    -35.169687595606035
                                ],
                                [
                                    -70.364769253498196,
                                    -36.005088800207943
                                ],
                                [
                                    -71.12188066266242,
                                    -36.65812387501677
                                ],
                                [
                                    -71.11862504760785,
                                    -37.57682748749852
                                ],
                                [
                                    -70.814664272937819,
                                    -38.552995293897652
                                ],
                                [
                                    -71.413516608204873,
                                    -38.916022231141028
                                ],
                                [
                                    -71.680761277910619,
                                    -39.80816415744988
                                ],
                                [
                                    -71.915734015212593,
                                    -40.832339369166505
                                ],
                                [
                                    -71.746803758586566,
                                    -42.051386406957079
                                ],
                                [
                                    -72.148898078283651,
                                    -42.254888197532239
                                ],
                                [
                                    -71.915423956850077,
                                    -43.408564548215281
                                ],
                                [
                                    -71.464056159064455,
                                    -43.78761117921249
                                ],
                                [
                                    -71.793622606398117,
                                    -44.20717213348712
                                ],
                                [
                                    -71.329800788275747,
                                    -44.407521660895895
                                ],
                                [
                                    -71.222778896328975,
                                    -44.784242852825344
                                ],
                                [
                                    -71.659315558765968,
                                    -44.973688653508532
                                ],
                                [
                                    -71.552009446878458,
                                    -45.560732924484853
                                ],
                                [
                                    -71.917258470402032,
                                    -46.884838148561641
                                ],
                                [
                                    -72.447355313197136,
                                    -47.738532810041136
                                ],
                                [
                                    -72.331160854389907,
                                    -48.244238376999476
                                ],
                                [
                                    -72.648247442965101,
                                    -48.878618259724874
                                ],
                                [
                                    -73.41543575745419,
                                    -49.318436374738837
                                ],
                                [
                                    -73.328050910421155,
                                    -50.378785089060557
                                ],
                                [
                                    -72.975746832750076,
                                    -50.741450291098033
                                ],
                                [
                                    -72.30997351766365,
                                    -50.677009779977311
                                ],
                                [
                                    -72.329403856103056,
                                    -51.425956312633673
                                ],
                                [
                                    -71.914803840125103,
                                    -52.009022305734788
                                ],
                                [
                                    -69.49836218926356,
                                    -52.142760912586027
                                ],
                                [
                                    -68.571545376218126,
                                    -52.29944385534958
                                ],
                                [
                                    -68.149994879659914,
                                    -52.349983406209162
                                ],
                                [
                                    -68.81556148917133,
                                    -51.771104011740704
                                ],
                                [
                                    -69.138539191130747,
                                    -50.73251026823425
                                ],
                                [
                                    -68.728745082919204,
                                    -50.264218438230273
                                ],
                                [
                                    -67.816087612553247,
                                    -49.86966887831602
                                ],
                                [
                                    -67.166178961589765,
                                    -48.697337334650229
                                ],
                                [
                                    -65.98508826401212,
                                    -48.133289076429719
                                ],
                                [
                                    -65.641026577214745,
                                    -47.236134535880069
                                ],
                                [
                                    -66.597066413184393,
                                    -47.033924655598355
                                ],
                                [
                                    -67.580546434470307,
                                    -46.301772963051747
                                ],
                                [
                                    -67.293793911060106,
                                    -45.551896254408575
                                ],
                                [
                                    -66.509965786092096,
                                    -45.039627780497653
                                ],
                                [
                                    -65.565268927319096,
                                    -45.036785577492367
                                ],
                                [
                                    -65.328823411671067,
                                    -44.501366062094064
                                ],
                                [
                                    -65.181803962183096,
                                    -43.495380954467407
                                ],
                                [
                                    -64.378803880294811,
                                    -42.873558444866319
                                ],
                                [
                                    -63.458059047786776,
                                    -42.563138116031212
                                ],
                                [
                                    -63.755947841919351,
                                    -42.043686618442621
                                ],
                                [
                                    -64.303407965605061,
                                    -42.35901620873102
                                ],
                                [
                                    -64.97856055402633,
                                    -42.058000990753101
                                ],
                                [
                                    -65.118035244630789,
                                    -41.064314873832302
                                ],
                                [
                                    -64.732089809896763,
                                    -40.802677097569926
                                ],
                                [
                                    -63.770494757327128,
                                    -41.166789239531738
                                ],
                                [
                                    -62.745802781672978,
                                    -41.028761488851615
                                ],
                                [
                                    -62.145994431997394,
                                    -40.676896660752277
                                ],
                                [
                                    -62.33053097212661,
                                    -40.17258635867347
                                ],
                                [
                                    -62.125763108780404,
                                    -39.424104913111194
                                ],
                                [
                                    -62.335956997517371,
                                    -38.827707208121126
                                ],
                                [
                                    -61.237445238307089,
                                    -38.928424574634391
                                ],
                                [
                                    -59.231857061953804,
                                    -38.720220229080269
                                ],
                                [
                                    -57.749156867195609,
                                    -38.1838705376951
                                ],
                                [
                                    -56.78828528503783,
                                    -36.901571547189121
                                ],
                                [
                                    -56.737487351759853,
                                    -36.413125909233258
                                ],
                                [
                                    -57.362358771739878,
                                    -35.977390232473226
                                ],
                                [
                                    -57.225829636928154,
                                    -35.288026625428358
                                ],
                                [
                                    -58.495442064000031,
                                    -34.431489760044371
                                ],
                                [
                                    -58.427074144256324,
                                    -33.909454440969625
                                ],
                                [
                                    -58.349611172017944,
                                    -33.26318897868839
                                ],
                                [
                                    -58.132647670753386,
                                    -33.040566908935659
                                ],
                                [
                                    -58.142440355238136,
                                    -32.044503676103716
                                ],
                                [
                                    -57.874937303113995,
                                    -31.016556084495676
                                ],
                                [
                                    -57.625133429564073,
                                    -30.216294854623811
                                ]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 1,
                    "SOVEREIGNT": "Argentina",
                    "SOV_A3": "ARG",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Argentina",
                    "id": "ARG",
                    "Shape_Length": 113.62446824401037,
                    "Shape_Area": 278.92339222202338
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -68.634010227889689,
                                    -52.636370458629699
                                ],
                                [
                                    -69.34564999974765,
                                    -52.518299999645251
                                ],
                                [
                                    -70.267480000101898,
                                    -52.931229999764639
                                ],
                                [
                                    -70.591780000446647,
                                    -53.615829999554819
                                ],
                                [
                                    -71.107730000239258,
                                    -54.074330000329212
                                ],
                                [
                                    -72.434179999707169,
                                    -53.715400000209797
                                ],
                                [
                                    -73.838099999615224,
                                    -53.047430000194311
                                ],
                                [
                                    -74.662529999559808,
                                    -52.837489999963509
                                ],
                                [
                                    -73.285200000079897,
                                    -53.957519999648241
                                ],
                                [
                                    -72.263900000084902,
                                    -54.49513999961124
                                ],
                                [
                                    -71.005680000331722,
                                    -55.053829999954473
                                ],
                                [
                                    -69.958090000253264,
                                    -55.198429999744633
                                ],
                                [
                                    -69.232100000114883,
                                    -55.499060000318707
                                ],
                                [
                                    -68.639990811226937,
                                    -55.580017998831522
                                ],
                                [
                                    -68.148630000174307,
                                    -55.611829999954466
                                ],
                                [
                                    -67.291030000334217,
                                    -55.301239999626262
                                ],
                                [
                                    -66.959919999808108,
                                    -54.896810000281221
                                ],
                                [
                                    -67.562439999706157,
                                    -54.870010000061427
                                ],
                                [
                                    -68.633349999602785,
                                    -54.86949999992504
                                ],
                                [
                                    -68.634010227889689,
                                    -52.636370458629699
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -69.590423753753214,
                                    -17.580011895532493
                                ],
                                [
                                    -69.858443569814881,
                                    -18.092693780593436
                                ],
                                [
                                    -70.372572394800159,
                                    -18.347975355478241
                                ],
                                [
                                    -70.164419725190101,
                                    -19.756468193951946
                                ],
                                [
                                    -70.091245896780663,
                                    -21.393319186830979
                                ],
                                [
                                    -70.40396582716113,
                                    -23.628996677454666
                                ],
                                [
                                    -70.724953985937645,
                                    -25.705924167766057
                                ],
                                [
                                    -70.905123867872192,
                                    -27.64037973393755
                                ],
                                [
                                    -71.489894375724816,
                                    -28.861442152433369
                                ],
                                [
                                    -71.370082566657061,
                                    -30.095682061677735
                                ],
                                [
                                    -71.668720669623156,
                                    -30.920644626648141
                                ],
                                [
                                    -71.438450487300088,
                                    -32.418899428066084
                                ],
                                [
                                    -71.86173214372343,
                                    -33.909092705763726
                                ],
                                [
                                    -72.553136969895206,
                                    -35.508840020050854
                                ],
                                [
                                    -73.166717088622704,
                                    -37.123780205791832
                                ],
                                [
                                    -73.588060879605848,
                                    -37.156284682192279
                                ],
                                [
                                    -73.505559454705008,
                                    -38.282882582764955
                                ],
                                [
                                    -73.217592536266523,
                                    -39.258688653058869
                                ],
                                [
                                    -73.677099372138287,
                                    -39.942212823562897
                                ],
                                [
                                    -74.017957119825155,
                                    -41.794812920879565
                                ],
                                [
                                    -74.331943122077405,
                                    -43.224958184972195
                                ],
                                [
                                    -73.701335618344046,
                                    -43.365776462713541
                                ],
                                [
                                    -73.388899908803694,
                                    -42.11753224042053
                                ],
                                [
                                    -72.717803921114012,
                                    -42.383355808623605
                                ],
                                [
                                    -73.240356004126227,
                                    -44.454960626331797
                                ],
                                [
                                    -74.351709357300933,
                                    -44.103044122288395
                                ],
                                [
                                    -74.692153692938518,
                                    -45.763976332641619
                                ],
                                [
                                    -75.644395311494407,
                                    -46.647643324979413
                                ],
                                [
                                    -74.126580980427889,
                                    -46.939253432100145
                                ],
                                [
                                    -75.182769741230516,
                                    -47.711919447924117
                                ],
                                [
                                    -75.608015102414981,
                                    -48.673772882012827
                                ],
                                [
                                    -75.479754197797945,
                                    -50.378371677011216
                                ],
                                [
                                    -74.976632453225079,
                                    -51.043395685062762
                                ],
                                [
                                    -75.260026007893885,
                                    -51.629354750421328
                                ],
                                [
                                    -74.946763475154228,
                                    -52.262753588807016
                                ],
                                [
                                    -73.702756720746038,
                                    -52.83507007632295
                                ],
                                [
                                    -73.702756720746038,
                                    -52.835069268731729
                                ],
                                [
                                    -72.557942877661617,
                                    -53.531410001470363
                                ],
                                [
                                    -71.429794684377157,
                                    -53.856454760079089
                                ],
                                [
                                    -71.006332159901206,
                                    -53.833252042647587
                                ],
                                [
                                    -70.84510169178958,
                                    -52.89920052818178
                                ],
                                [
                                    -69.942779507368357,
                                    -52.537930590124574
                                ],
                                [
                                    -69.461284349093376,
                                    -52.291950772410189
                                ],
                                [
                                    -68.571545376218126,
                                    -52.29944385534958
                                ],
                                [
                                    -69.49836218926356,
                                    -52.142760912586027
                                ],
                                [
                                    -71.914803840125103,
                                    -52.009022305734788
                                ],
                                [
                                    -72.329403856103056,
                                    -51.425956312633673
                                ],
                                [
                                    -72.30997351766365,
                                    -50.677009779977311
                                ],
                                [
                                    -72.975746832750076,
                                    -50.741450291098033
                                ],
                                [
                                    -73.328050910421155,
                                    -50.378785089060557
                                ],
                                [
                                    -73.41543575745419,
                                    -49.318436374738837
                                ],
                                [
                                    -72.648247442965101,
                                    -48.878618259724874
                                ],
                                [
                                    -72.331160854389907,
                                    -48.244238376999476
                                ],
                                [
                                    -72.447355313197136,
                                    -47.738532810041136
                                ],
                                [
                                    -71.917258470402032,
                                    -46.884838148561641
                                ],
                                [
                                    -71.552009446878458,
                                    -45.560732924484853
                                ],
                                [
                                    -71.659315558765968,
                                    -44.973688653508532
                                ],
                                [
                                    -71.222778896328975,
                                    -44.784242852825344
                                ],
                                [
                                    -71.329800788275747,
                                    -44.407521660895895
                                ],
                                [
                                    -71.793622606398117,
                                    -44.20717213348712
                                ],
                                [
                                    -71.464056159064455,
                                    -43.78761117921249
                                ],
                                [
                                    -71.915423956850077,
                                    -43.408564548215281
                                ],
                                [
                                    -72.148898078283651,
                                    -42.254888197532239
                                ],
                                [
                                    -71.746803758586566,
                                    -42.051386406957079
                                ],
                                [
                                    -71.915734015212593,
                                    -40.832339369166505
                                ],
                                [
                                    -71.680761277910619,
                                    -39.80816415744988
                                ],
                                [
                                    -71.413516608204873,
                                    -38.916022231141028
                                ],
                                [
                                    -70.814664272937819,
                                    -38.552995293897652
                                ],
                                [
                                    -71.11862504760785,
                                    -37.57682748749852
                                ],
                                [
                                    -71.12188066266242,
                                    -36.65812387501677
                                ],
                                [
                                    -70.364769253498196,
                                    -36.005088800207943
                                ],
                                [
                                    -70.388049486194802,
                                    -35.169687595606035
                                ],
                                [
                                    -69.817309129812429,
                                    -34.193571466050287
                                ],
                                [
                                    -69.814776984270395,
                                    -33.273886000738287
                                ],
                                [
                                    -70.074399379827469,
                                    -33.091209812582747
                                ],
                                [
                                    -70.535068935682773,
                                    -31.365010267909497
                                ],
                                [
                                    -69.919008348256625,
                                    -30.336339206788921
                                ],
                                [
                                    -70.013550381444929,
                                    -29.36792286574763
                                ],
                                [
                                    -69.656130336745605,
                                    -28.459141127161217
                                ],
                                [
                                    -69.001234910862422,
                                    -27.521213880915809
                                ],
                                [
                                    -68.295541551701206,
                                    -26.8993396953706
                                ],
                                [
                                    -68.594799770492955,
                                    -26.506908868049777
                                ],
                                [
                                    -68.386001145736259,
                                    -26.185016371708116
                                ],
                                [
                                    -68.417652960515682,
                                    -24.518554783176683
                                ],
                                [
                                    -67.328442959375025,
                                    -24.025303236555089
                                ],
                                [
                                    -66.985233934198675,
                                    -22.9863485654339
                                ],
                                [
                                    -67.106673550344055,
                                    -22.735924574259627
                                ],
                                [
                                    -67.828179897684095,
                                    -22.872918796165493
                                ],
                                [
                                    -68.219913093014782,
                                    -21.494346612606023
                                ],
                                [
                                    -68.75716712106572,
                                    -20.372657972587319
                                ],
                                [
                                    -68.442225104404997,
                                    -19.405068454745333
                                ],
                                [
                                    -68.966818406544178,
                                    -18.981683444635223
                                ],
                                [
                                    -69.100246955032901,
                                    -18.260125420451743
                                ],
                                [
                                    -69.590423753753214,
                                    -17.580011895532493
                                ]
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 2,
                    "SOVEREIGNT": "Chile",
                    "SOV_A3": "CHL",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Chile",
                    "id": "CHL",
                    "Shape_Length": 116.35934643490428,
                    "Shape_Area": 86.508469211817612
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -61.199999999900058,
                                -51.849999999700174
                            ],
                            [
                                -60.699999999999932,
                                -52.299999999700162
                            ],
                            [
                                -59.849999999900035,
                                -51.849999999700174
                            ],
                            [
                                -59.399999999900047,
                                -52.199999999900058
                            ],
                            [
                                -58.049999999900024,
                                -51.899999999600254
                            ],
                            [
                                -57.749999999600277,
                                -51.550000000299747
                            ],
                            [
                                -58.549999999800093,
                                -51.100000000299758
                            ],
                            [
                                -59.150000000399643,
                                -51.500000000399666
                            ],
                            [
                                -59.999999999600277,
                                -51.249999999999943
                            ],
                            [
                                -61.199999999900058,
                                -51.849999999700174
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 3,
                    "SOVEREIGNT": "United Kingdom",
                    "SOV_A3": "GB1",
                    "ADM0_DIF": 1,
                    "TYPE": "Disputed",
                    "name": "Falkland Islands",
                    "id": "FLK",
                    "Shape_Length": 7.9150782959800123,
                    "Shape_Area": 2.1287499988208873
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -57.625133429564073,
                                -30.216294854623811
                            ],
                            [
                                -57.874937303113995,
                                -31.016556084495676
                            ],
                            [
                                -58.142440355238136,
                                -32.044503676103716
                            ],
                            [
                                -58.132647670753386,
                                -33.040566908935659
                            ],
                            [
                                -58.349611172017944,
                                -33.26318897868839
                            ],
                            [
                                -58.427074144256324,
                                -33.909454440969625
                            ],
                            [
                                -57.817860683723552,
                                -34.462547295621164
                            ],
                            [
                                -57.139685024244443,
                                -34.43045623127
                            ],
                            [
                                -56.215297003953538,
                                -34.859835707551838
                            ],
                            [
                                -55.674089727958517,
                                -34.752658786873496
                            ],
                            [
                                -54.935866054874509,
                                -34.952646579975635
                            ],
                            [
                                -53.806425950397227,
                                -34.396814874207053
                            ],
                            [
                                -53.37366166875097,
                                -33.768377780809885
                            ],
                            [
                                -53.650543992411258,
                                -33.202004082622295
                            ],
                            [
                                -53.209588995835475,
                                -32.727666111401902
                            ],
                            [
                                -53.787951626366407,
                                -32.047242527220817
                            ],
                            [
                                -54.572451544902833,
                                -31.494511406875858
                            ],
                            [
                                -55.601510179651029,
                                -30.853878676459715
                            ],
                            [
                                -55.973244594862138,
                                -30.883075860062831
                            ],
                            [
                                -56.976025763378232,
                                -30.10968637472638
                            ],
                            [
                                -57.625133429564073,
                                -30.216294854623811
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 4,
                    "SOVEREIGNT": "Uruguay",
                    "SOV_A3": "URY",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Uruguay",
                    "id": "URY",
                    "Shape_Length": 16.357769831436748,
                    "Shape_Area": 17.027171031048201
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -53.37366166875097,
                                -33.768377780809885
                            ],
                            [
                                -52.712099982228381,
                                -33.196578057231534
                            ],
                            [
                                -52.256081305407861,
                                -32.245369968349337
                            ],
                            [
                                -51.576226162007742,
                                -31.77769825596971
                            ],
                            [
                                -50.696874151920554,
                                -30.984465020144512
                            ],
                            [
                                -49.587329474775402,
                                -29.224469089676688
                            ],
                            [
                                -48.888457404085898,
                                -28.674115085242931
                            ],
                            [
                                -48.661520352082562,
                                -28.18613453528053
                            ],
                            [
                                -48.47473588725137,
                                -27.175911960668429
                            ],
                            [
                                -48.6410048080254,
                                -26.623697605160316
                            ],
                            [
                                -48.495458136883485,
                                -25.877024834728275
                            ],
                            [
                                -47.648972337503324,
                                -24.885199069781208
                            ],
                            [
                                -46.472093268489516,
                                -24.088968601319834
                            ],
                            [
                                -45.352135789235263,
                                -23.796841729362257
                            ],
                            [
                                -44.647811855632597,
                                -23.351959324163431
                            ],
                            [
                                -43.07470374188415,
                                -22.967693373350471
                            ],
                            [
                                -41.988284267804659,
                                -22.970070489261616
                            ],
                            [
                                -41.75416419122439,
                                -22.370675550736053
                            ],
                            [
                                -40.94475623201447,
                                -21.937316989887108
                            ],
                            [
                                -40.774740769770688,
                                -20.904511813669217
                            ],
                            [
                                -39.760823330532219,
                                -19.599113457619922
                            ],
                            [
                                -39.583521490923999,
                                -18.262295830787934
                            ],
                            [
                                -39.267339239913952,
                                -17.867746269974361
                            ],
                            [
                                -39.16109249522242,
                                -17.208406670631291
                            ],
                            [
                                -38.882298142745071,
                                -15.667053724449772
                            ],
                            [
                                -38.953275722396654,
                                -13.79336964319441
                            ],
                            [
                                -38.673887091615939,
                                -13.057652276331453
                            ],
                            [
                                -38.423876512491006,
                                -13.038118585104598
                            ],
                            [
                                -37.683611619380713,
                                -12.171194756932437
                            ],
                            [
                                -37.046518723959878,
                                -11.040721123680839
                            ],
                            [
                                -35.636966518290137,
                                -9.6492815077353384
                            ],
                            [
                                -35.128212042751557,
                                -8.9964014625574009
                            ],
                            [
                                -34.729993455733336,
                                -7.3432207166626995
                            ],
                            [
                                -34.896029832510692,
                                -6.7381930480706842
                            ],
                            [
                                -35.235388963429898,
                                -5.4649374323166171
                            ],
                            [
                                -35.597795783048923,
                                -5.1495044901400888
                            ],
                            [
                                -36.452937384452696,
                                -5.1094035780126887
                            ],
                            [
                                -37.223252122787187,
                                -4.8209457331590215
                            ],
                            [
                                -38.500383470320855,
                                -3.7006523580198518
                            ],
                            [
                                -39.978665330940203,
                                -2.8730542947198501
                            ],
                            [
                                -41.472656826051661,
                                -2.9120183243861106
                            ],
                            [
                                -43.418791266203925,
                                -2.3831100399963248
                            ],
                            [
                                -44.58158850780336,
                                -2.6913082816518568
                            ],
                            [
                                -44.417619187675314,
                                -2.1377503390069137
                            ],
                            [
                                -44.90570309132454,
                                -1.5517395968049073
                            ],
                            [
                                -46.566583624834379,
                                -0.94102752040367932
                            ],
                            [
                                -47.824956427497114,
                                -0.58161793342083001
                            ],
                            [
                                -48.584496629415867,
                                -1.2378052713960983
                            ],
                            [
                                -48.620566779233457,
                                -0.23548918997408919
                            ],
                            [
                                -50.388210822271617,
                                -0.078444512903899977
                            ],
                            [
                                -50.699251267831698,
                                0.22298411712336019
                            ],
                            [
                                -49.947100796064831,
                                1.0461896838069151
                            ],
                            [
                                -49.974075893387749,
                                1.7364834659392727
                            ],
                            [
                                -50.508875291161701,
                                1.9015638292074186
                            ],
                            [
                                -51.069771288014465,
                                3.6503976505312039
                            ],
                            [
                                -51.317146368809858,
                                4.2034905051827423
                            ],
                            [
                                -51.657797410921717,
                                4.1562324077994504
                            ],
                            [
                                -52.24933753130199,
                                3.2410944687347865
                            ],
                            [
                                -52.556424729817365,
                                2.5047053083033575
                            ],
                            [
                                -52.939657151856011,
                                2.1248576925285079
                            ],
                            [
                                -53.418465134957955,
                                2.0533891873611765
                            ],
                            [
                                -53.55483924013879,
                                2.3348965516345856
                            ],
                            [
                                -53.778520677087556,
                                2.3767027852053957
                            ],
                            [
                                -54.088062506779238,
                                2.1055565452983842
                            ],
                            [
                                -54.524754197947857,
                                2.3118488629347098
                            ],
                            [
                                -55.097587449401203,
                                2.5237480740144633
                            ],
                            [
                                -55.569755011184782,
                                2.4215062523117581
                            ],
                            [
                                -55.973322109227922,
                                2.5103638776908497
                            ],
                            [
                                -56.073341844650372,
                                2.2207949896970831
                            ],
                            [
                                -55.90560014463091,
                                2.0219957541008284
                            ],
                            [
                                -55.995698004359383,
                                1.8176671412256269
                            ],
                            [
                                -56.539385749053054,
                                1.899522610080453
                            ],
                            [
                                -56.782704230016179,
                                1.8637108426813143
                            ],
                            [
                                -57.335822923089381,
                                1.9485377057505957
                            ],
                            [
                                -57.660971035384932,
                                1.682584947237558
                            ],
                            [
                                -58.11344987631071,
                                1.5071951355471356
                            ],
                            [
                                -58.429477098589189,
                                1.4639419620519334
                            ],
                            [
                                -58.540012987109606,
                                1.2680882840471099
                            ],
                            [
                                -59.030861579398334,
                                1.317697658919883
                            ],
                            [
                                -59.646043666781736,
                                1.7868938255896296
                            ],
                            [
                                -59.718545701622816,
                                2.2496304389936199
                            ],
                            [
                                -59.974524909397019,
                                2.7552326522651356
                            ],
                            [
                                -59.815413173878824,
                                3.6064985209899874
                            ],
                            [
                                -59.53803992380341,
                                3.958802598661066
                            ],
                            [
                                -59.767405768561332,
                                4.4235029159268606
                            ],
                            [
                                -60.111002366465982,
                                4.5749665388747189
                            ],
                            [
                                -59.980958625140374,
                                5.0140611843762031
                            ],
                            [
                                -60.213683437740428,
                                5.2444863954308403
                            ],
                            [
                                -60.733574184900647,
                                5.200277207527165
                            ],
                            [
                                -60.601179165186295,
                                4.918098049685284
                            ],
                            [
                                -60.966893276703331,
                                4.5364675972019199
                            ],
                            [
                                -62.08542965355565,
                                4.1621235211836165
                            ],
                            [
                                -62.804533047462144,
                                4.0069650336094469
                            ],
                            [
                                -63.093197597890764,
                                3.7705711939055391
                            ],
                            [
                                -63.888342861633703,
                                4.0205300970863505
                            ],
                            [
                                -64.628659430688117,
                                4.1484809433409282
                            ],
                            [
                                -64.81606401224434,
                                4.0564452172729943
                            ],
                            [
                                -64.368494431872477,
                                3.797210394444221
                            ],
                            [
                                -64.408827887996608,
                                3.1267862003229538
                            ],
                            [
                                -64.269999152538844,
                                2.4970055197889565
                            ],
                            [
                                -63.422867398011988,
                                2.4110676126802559
                            ],
                            [
                                -63.368788011257664,
                                2.2008995632642723
                            ],
                            [
                                -64.083085496498427,
                                1.9163691270336471
                            ],
                            [
                                -64.199305792828056,
                                1.4928549257143118
                            ],
                            [
                                -64.611011928957339,
                                1.3287305768546958
                            ],
                            [
                                -65.354713304275549,
                                1.0952822938428426
                            ],
                            [
                                -65.548267381634332,
                                0.78925446252350184
                            ],
                            [
                                -66.325765143646436,
                                0.72445221619688027
                            ],
                            [
                                -66.876325852755883,
                                1.2533605005866661
                            ],
                            [
                                -67.065048183926535,
                                1.1301122093110507
                            ],
                            [
                                -67.259997524366213,
                                1.7199986841919781
                            ],
                            [
                                -67.537810024912687,
                                2.0371627871329565
                            ],
                            [
                                -67.86856502975229,
                                1.6924551460881503
                            ],
                            [
                                -69.81697323302825,
                                1.7148052027978906
                            ],
                            [
                                -69.804596727057287,
                                1.0890811220961609
                            ],
                            [
                                -69.218637661698665,
                                0.98567658130923519
                            ],
                            [
                                -69.252434048392558,
                                0.60265086484560015
                            ],
                            [
                                -69.452396003073034,
                                0.70615875931935079
                            ],
                            [
                                -70.015565762150175,
                                0.541414292835384
                            ],
                            [
                                -70.0206558907567,
                                -0.18515634558883676
                            ],
                            [
                                -69.577065395851321,
                                -0.54999195706312776
                            ],
                            [
                                -69.420485805875217,
                                -1.1226185038408403
                            ],
                            [
                                -69.444101935356002,
                                -1.5562871230522433
                            ],
                            [
                                -69.893635219589669,
                                -4.2981869445717962
                            ],
                            [
                                -70.794768846505008,
                                -4.2512647439726834
                            ],
                            [
                                -70.928843350140482,
                                -4.4015914853587219
                            ],
                            [
                                -71.74840572814179,
                                -4.5939828427339648
                            ],
                            [
                                -72.891927660033446,
                                -5.2745614556466194
                            ],
                            [
                                -72.964507209240253,
                                -5.7412513160953154
                            ],
                            [
                                -73.219711269759273,
                                -6.0891887346723479
                            ],
                            [
                                -73.120027432020322,
                                -6.6299309217745872
                            ],
                            [
                                -73.724486660730747,
                                -6.9185954731025276
                            ],
                            [
                                -73.723401455113049,
                                -7.3409986303824439
                            ],
                            [
                                -73.987235480133279,
                                -7.5238298481689299
                            ],
                            [
                                -73.571059333021765,
                                -8.4244467102474232
                            ],
                            [
                                -73.015382656884071,
                                -9.0328333475808904
                            ],
                            [
                                -73.226713426283538,
                                -9.4622128229633518
                            ],
                            [
                                -72.563033006268199,
                                -9.5201937799189409
                            ],
                            [
                                -72.184890712836079,
                                -10.053597914611998
                            ],
                            [
                                -71.302412278903489,
                                -10.079436130373097
                            ],
                            [
                                -70.481893887392971,
                                -9.4901180962730791
                            ],
                            [
                                -70.548685676003117,
                                -11.009146824166578
                            ],
                            [
                                -70.093752203901033,
                                -11.123971856515936
                            ],
                            [
                                -69.529678107258803,
                                -10.951734307092579
                            ],
                            [
                                -68.786157599993203,
                                -11.036380303907833
                            ],
                            [
                                -68.271253627752685,
                                -11.014521172713899
                            ],
                            [
                                -68.04819230842827,
                                -10.712059014811643
                            ],
                            [
                                -67.173801235738381,
                                -10.306812432847437
                            ],
                            [
                                -66.64690833205384,
                                -9.9313314752673136
                            ],
                            [
                                -65.338435228103265,
                                -9.7619878065919465
                            ],
                            [
                                -65.444837002425686,
                                -10.511451104085154
                            ],
                            [
                                -65.321898769512586,
                                -10.895872084529003
                            ],
                            [
                                -65.4022814600213,
                                -11.566270440228607
                            ],
                            [
                                -64.31635291235699,
                                -12.461978040853865
                            ],
                            [
                                -63.196498785890242,
                                -12.62703256570029
                            ],
                            [
                                -62.803060269116088,
                                -13.000653171306737
                            ],
                            [
                                -62.127080858394834,
                                -13.198780612435257
                            ],
                            [
                                -61.713204311929417,
                                -13.489202162050105
                            ],
                            [
                                -61.084121263385555,
                                -13.479383640042897
                            ],
                            [
                                -60.503304002577636,
                                -13.775954685460306
                            ],
                            [
                                -60.459198167461409,
                                -14.35400725672946
                            ],
                            [
                                -60.264326341387516,
                                -14.645979099056149
                            ],
                            [
                                -60.251148851538233,
                                -15.077218926412286
                            ],
                            [
                                -60.542965664233975,
                                -15.09391041463391
                            ],
                            [
                                -60.1583896550585,
                                -16.25828378646753
                            ],
                            [
                                -58.241219855411941,
                                -16.299573256100871
                            ],
                            [
                                -58.388058437746679,
                                -16.877109063432499
                            ],
                            [
                                -58.280804002702496,
                                -17.271710300190136
                            ],
                            [
                                -57.734558274944391,
                                -17.552468357428722
                            ],
                            [
                                -57.498371140815436,
                                -18.174187514242362
                            ],
                            [
                                -57.676008877207892,
                                -18.961839695045853
                            ],
                            [
                                -57.949997321019509,
                                -19.400004164560528
                            ],
                            [
                                -57.85380164233186,
                                -19.969995212109325
                            ],
                            [
                                -58.166392381503158,
                                -20.176700941794991
                            ],
                            [
                                -57.870673997706774,
                                -20.7326876762952
                            ],
                            [
                                -57.937155727954462,
                                -22.090175876815238
                            ],
                            [
                                -56.881509568611648,
                                -22.28215382214114
                            ],
                            [
                                -56.473317429955387,
                                -22.086300144136317
                            ],
                            [
                                -55.797958136858483,
                                -22.356929620105859
                            ],
                            [
                                -55.610682745612166,
                                -22.655619399016018
                            ],
                            [
                                -55.517639329191638,
                                -23.571997572430007
                            ],
                            [
                                -55.400747240192914,
                                -23.956935316811382
                            ],
                            [
                                -55.027901780942386,
                                -24.001273695924283
                            ],
                            [
                                -54.652834235411603,
                                -23.839578138919933
                            ],
                            [
                                -54.292959560435349,
                                -24.021014092726148
                            ],
                            [
                                -54.293476325272138,
                                -24.570799655479675
                            ],
                            [
                                -54.428946091988507,
                                -25.162184747128322
                            ],
                            [
                                -54.625290696408456,
                                -25.739255466466545
                            ],
                            [
                                -54.130049608402658,
                                -25.547639255447223
                            ],
                            [
                                -53.628348965332464,
                                -26.124865004416392
                            ],
                            [
                                -53.648735317281023,
                                -26.923472588788911
                            ],
                            [
                                -54.490725267257233,
                                -27.474756768310158
                            ],
                            [
                                -55.16228634294032,
                                -27.881915378192105
                            ],
                            [
                                -56.290899624218241,
                                -28.852760511987981
                            ],
                            [
                                -57.625133429564073,
                                -30.216294854623811
                            ],
                            [
                                -56.976025763378232,
                                -30.10968637472638
                            ],
                            [
                                -55.973244594862138,
                                -30.883075860062831
                            ],
                            [
                                -55.601510179651029,
                                -30.853878676459715
                            ],
                            [
                                -54.572451544902833,
                                -31.494511406875858
                            ],
                            [
                                -53.787951626366407,
                                -32.047242527220817
                            ],
                            [
                                -53.209588995835475,
                                -32.727666111401902
                            ],
                            [
                                -53.650543992411258,
                                -33.202004082622295
                            ],
                            [
                                -53.37366166875097,
                                -33.768377780809885
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 5,
                    "SOVEREIGNT": "Brazil",
                    "SOV_A3": "BRA",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Brazil",
                    "id": "BRA",
                    "Shape_Length": 158.44568401952529,
                    "Shape_Area": 710.18524315477634
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -69.529678107258803,
                                -10.951734307092579
                            ],
                            [
                                -68.665079719053779,
                                -12.561300144286179
                            ],
                            [
                                -68.880079515557156,
                                -12.899729099218519
                            ],
                            [
                                -68.929223802436468,
                                -13.602683607262634
                            ],
                            [
                                -68.948886684872548,
                                -14.45363941852429
                            ],
                            [
                                -69.339534674585536,
                                -14.95319548878075
                            ],
                            [
                                -69.160346645481241,
                                -15.323973890482591
                            ],
                            [
                                -69.389764167082603,
                                -15.660129083190611
                            ],
                            [
                                -68.959635382866566,
                                -16.500697930764829
                            ],
                            [
                                -69.590423753753214,
                                -17.580011895532493
                            ],
                            [
                                -69.100246955032901,
                                -18.260125420451743
                            ],
                            [
                                -68.966818406544178,
                                -18.981683444635223
                            ],
                            [
                                -68.442225104404997,
                                -19.405068454745333
                            ],
                            [
                                -68.75716712106572,
                                -20.372657972587319
                            ],
                            [
                                -68.219913093014782,
                                -21.494346612606023
                            ],
                            [
                                -67.828179897684095,
                                -22.872918796165493
                            ],
                            [
                                -67.106673550344055,
                                -22.735924574259627
                            ],
                            [
                                -66.273339403290777,
                                -21.832310479544958
                            ],
                            [
                                -64.964892136862602,
                                -22.075861504504758
                            ],
                            [
                                -64.37702104358624,
                                -22.798091322256653
                            ],
                            [
                                -63.986838141866713,
                                -21.993644301343409
                            ],
                            [
                                -62.846468472242179,
                                -22.034985446920814
                            ],
                            [
                                -62.685057136077944,
                                -22.249029229015662
                            ],
                            [
                                -62.291179368832786,
                                -21.051634616844069
                            ],
                            [
                                -62.265961269796719,
                                -20.51373463274706
                            ],
                            [
                                -61.78632646349547,
                                -19.633736667513176
                            ],
                            [
                                -60.043564622709141,
                                -19.342746677117418
                            ],
                            [
                                -59.11504248732092,
                                -19.356906019796952
                            ],
                            [
                                -58.183471442453083,
                                -19.868399346452634
                            ],
                            [
                                -58.166392381503158,
                                -20.176700941794991
                            ],
                            [
                                -57.85380164233186,
                                -19.969995212109325
                            ],
                            [
                                -57.949997321019509,
                                -19.400004164560528
                            ],
                            [
                                -57.676008877207892,
                                -18.961839695045853
                            ],
                            [
                                -57.498371140815436,
                                -18.174187514242362
                            ],
                            [
                                -57.734558274944391,
                                -17.552468357428722
                            ],
                            [
                                -58.280804002702496,
                                -17.271710300190136
                            ],
                            [
                                -58.388058437746679,
                                -16.877109063432499
                            ],
                            [
                                -58.241219855411941,
                                -16.299573256100871
                            ],
                            [
                                -60.1583896550585,
                                -16.25828378646753
                            ],
                            [
                                -60.542965664233975,
                                -15.09391041463391
                            ],
                            [
                                -60.251148851538233,
                                -15.077218926412286
                            ],
                            [
                                -60.264326341387516,
                                -14.645979099056149
                            ],
                            [
                                -60.459198167461409,
                                -14.35400725672946
                            ],
                            [
                                -60.503304002577636,
                                -13.775954685460306
                            ],
                            [
                                -61.084121263385555,
                                -13.479383640042897
                            ],
                            [
                                -61.713204311929417,
                                -13.489202162050105
                            ],
                            [
                                -62.127080858394834,
                                -13.198780612435257
                            ],
                            [
                                -62.803060269116088,
                                -13.000653171306737
                            ],
                            [
                                -63.196498785890242,
                                -12.62703256570029
                            ],
                            [
                                -64.31635291235699,
                                -12.461978040853865
                            ],
                            [
                                -65.4022814600213,
                                -11.566270440228607
                            ],
                            [
                                -65.321898769512586,
                                -10.895872084529003
                            ],
                            [
                                -65.444837002425686,
                                -10.511451104085154
                            ],
                            [
                                -65.338435228103265,
                                -9.7619878065919465
                            ],
                            [
                                -66.64690833205384,
                                -9.9313314752673136
                            ],
                            [
                                -67.173801235738381,
                                -10.306812432847437
                            ],
                            [
                                -68.04819230842827,
                                -10.712059014811643
                            ],
                            [
                                -68.271253627752685,
                                -11.014521172713899
                            ],
                            [
                                -68.786157599993203,
                                -11.036380303907833
                            ],
                            [
                                -69.529678107258803,
                                -10.951734307092579
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 6,
                    "SOVEREIGNT": "Bolivia",
                    "SOV_A3": "BOL",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Bolivia",
                    "id": "BOL",
                    "Shape_Length": 48.107578006720814,
                    "Shape_Area": 92.077173312558728
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -69.893635219589669,
                                -4.2981869445717962
                            ],
                            [
                                -70.394043952366474,
                                -3.7665914850089735
                            ],
                            [
                                -70.692682054433249,
                                -3.7428720027406825
                            ],
                            [
                                -70.047708502445403,
                                -2.7251563451891343
                            ],
                            [
                                -70.813475714532558,
                                -2.2568645160844767
                            ],
                            [
                                -71.413645799414098,
                                -2.3428024222939143
                            ],
                            [
                                -71.774760707840358,
                                -2.1697897274139564
                            ],
                            [
                                -72.32578650584253,
                                -2.4342180316368172
                            ],
                            [
                                -73.070392218725885,
                                -2.3089543596558997
                            ],
                            [
                                -73.659503547250893,
                                -1.2604912248900746
                            ],
                            [
                                -74.122395189386452,
                                -1.0028325331948054
                            ],
                            [
                                -74.441600511454396,
                                -0.53082000104217286
                            ],
                            [
                                -75.106624518606623,
                                -0.057205498434939273
                            ],
                            [
                                -75.373223232266298,
                                -0.15203175246335832
                            ],
                            [
                                -75.233722704139439,
                                -0.91141692475122227
                            ],
                            [
                                -75.544995693696251,
                                -1.5616097956554995
                            ],
                            [
                                -76.635394253242168,
                                -2.6086776664411104
                            ],
                            [
                                -77.837904832442007,
                                -3.003020521679673
                            ],
                            [
                                -78.450683966391921,
                                -3.8730966121188999
                            ],
                            [
                                -78.639897223977641,
                                -4.547784112546708
                            ],
                            [
                                -79.205289069335038,
                                -4.9591285134700911
                            ],
                            [
                                -79.624979213919573,
                                -4.4541980928676708
                            ],
                            [
                                -80.028908047168613,
                                -4.3460909971017827
                            ],
                            [
                                -80.442241991274841,
                                -4.4257243787770335
                            ],
                            [
                                -80.469294602963544,
                                -4.0592867977474612
                            ],
                            [
                                -80.184014858798662,
                                -3.8211617972790464
                            ],
                            [
                                -80.302560594196052,
                                -3.4048564589583634
                            ],
                            [
                                -81.099669562700115,
                                -4.0363941377792116
                            ],
                            [
                                -81.410942552256927,
                                -4.7367648252364347
                            ],
                            [
                                -80.926346808558321,
                                -5.6905567356048437
                            ],
                            [
                                -81.249996304086153,
                                -6.1368344047838832
                            ],
                            [
                                -80.537481655553904,
                                -6.5416675755980691
                            ],
                            [
                                -79.760578172744431,
                                -7.1943409152010531
                            ],
                            [
                                -79.445920376024503,
                                -7.9308334284199304
                            ],
                            [
                                -79.036953091012322,
                                -8.3865678852995984
                            ],
                            [
                                -78.09215287945176,
                                -10.377712497233915
                            ],
                            [
                                -77.106192389467139,
                                -12.22271615972295
                            ],
                            [
                                -76.25924150299295,
                                -13.535039157930726
                            ],
                            [
                                -76.423469204640071,
                                -13.823186944421877
                            ],
                            [
                                -76.009205084546977,
                                -14.64928639095416
                            ],
                            [
                                -75.237882656759155,
                                -15.265682875164487
                            ],
                            [
                                -73.444529588269859,
                                -16.359362888186695
                            ],
                            [
                                -71.46204077835921,
                                -17.363487643839619
                            ],
                            [
                                -71.375250210528748,
                                -17.773798516888007
                            ],
                            [
                                -70.372572394800159,
                                -18.347975355478241
                            ],
                            [
                                -69.858443569814881,
                                -18.092693780593436
                            ],
                            [
                                -69.590423753753214,
                                -17.580011895532493
                            ],
                            [
                                -68.959635382866566,
                                -16.500697930764829
                            ],
                            [
                                -69.389764167082603,
                                -15.660129083190611
                            ],
                            [
                                -69.160346645481241,
                                -15.323973890482591
                            ],
                            [
                                -69.339534674585536,
                                -14.95319548878075
                            ],
                            [
                                -68.948886684872548,
                                -14.45363941852429
                            ],
                            [
                                -68.929223802436468,
                                -13.602683607262634
                            ],
                            [
                                -68.880079515557156,
                                -12.899729099218519
                            ],
                            [
                                -68.665079719053779,
                                -12.561300144286179
                            ],
                            [
                                -69.529678107258803,
                                -10.951734307092579
                            ],
                            [
                                -70.093752203901033,
                                -11.123971856515936
                            ],
                            [
                                -70.548685676003117,
                                -11.009146824166578
                            ],
                            [
                                -70.481893887392971,
                                -9.4901180962730791
                            ],
                            [
                                -71.302412278903489,
                                -10.079436130373097
                            ],
                            [
                                -72.184890712836079,
                                -10.053597914611998
                            ],
                            [
                                -72.563033006268199,
                                -9.5201937799189409
                            ],
                            [
                                -73.226713426283538,
                                -9.4622128229633518
                            ],
                            [
                                -73.015382656884071,
                                -9.0328333475808904
                            ],
                            [
                                -73.571059333021765,
                                -8.4244467102474232
                            ],
                            [
                                -73.987235480133279,
                                -7.5238298481689299
                            ],
                            [
                                -73.723401455113049,
                                -7.3409986303824439
                            ],
                            [
                                -73.724486660730747,
                                -6.9185954731025276
                            ],
                            [
                                -73.120027432020322,
                                -6.6299309217745872
                            ],
                            [
                                -73.219711269759273,
                                -6.0891887346723479
                            ],
                            [
                                -72.964507209240253,
                                -5.7412513160953154
                            ],
                            [
                                -72.891927660033446,
                                -5.2745614556466194
                            ],
                            [
                                -71.74840572814179,
                                -4.5939828427339648
                            ],
                            [
                                -70.928843350140482,
                                -4.4015914853587219
                            ],
                            [
                                -70.794768846505008,
                                -4.2512647439726834
                            ],
                            [
                                -69.893635219589669,
                                -4.2981869445717962
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 7,
                    "SOVEREIGNT": "Peru",
                    "SOV_A3": "PER",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Peru",
                    "id": "PER",
                    "Shape_Length": 61.773291230602247,
                    "Shape_Area": 108.04982126196877
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -66.876325852755883,
                                1.2533605005866661
                            ],
                            [
                                -67.181294318677828,
                                2.2506381293462141
                            ],
                            [
                                -67.44709204755992,
                                2.6002808702659763
                            ],
                            [
                                -67.809938116750629,
                                2.8206550153167314
                            ],
                            [
                                -67.303173183495574,
                                3.3184540881856606
                            ],
                            [
                                -67.337563849392097,
                                3.542342230709437
                            ],
                            [
                                -67.621835903204328,
                                3.8394817160084358
                            ],
                            [
                                -67.823012254711728,
                                4.5039372823797521
                            ],
                            [
                                -67.744696621751643,
                                5.2211286483684489
                            ],
                            [
                                -67.521531948740403,
                                5.5568704290271285
                            ],
                            [
                                -67.341439582071018,
                                6.095468044214897
                            ],
                            [
                                -67.695087245979551,
                                6.2673180200106913
                            ],
                            [
                                -68.265052456006003,
                                6.1532681340171962
                            ],
                            [
                                -68.985318569896037,
                                6.2068049175129545
                            ],
                            [
                                -69.389479946242488,
                                6.0998605408313438
                            ],
                            [
                                -70.093312954329349,
                                6.9603764916818136
                            ],
                            [
                                -70.674233567924773,
                                7.0877847355771451
                            ],
                            [
                                -71.960175747112999,
                                6.9916148953112156
                            ],
                            [
                                -72.198352423525478,
                                7.3404308130316167
                            ],
                            [
                                -72.444487270870809,
                                7.423784898654219
                            ],
                            [
                                -72.479678921544973,
                                7.6325060081458105
                            ],
                            [
                                -72.360900641251533,
                                8.002638454700957
                            ],
                            [
                                -72.439862230257688,
                                8.4052753767572881
                            ],
                            [
                                -72.660494757726838,
                                8.6252877875014633
                            ],
                            [
                                -72.78872982482153,
                                9.0850271673699012
                            ],
                            [
                                -73.304951544877838,
                                9.1519998231333943
                            ],
                            [
                                -73.027604132324825,
                                9.736770330986019
                            ],
                            [
                                -72.905286017935339,
                                10.450344346714303
                            ],
                            [
                                -72.614657762745537,
                                10.821975409137849
                            ],
                            [
                                -72.227575446449634,
                                11.108702094126386
                            ],
                            [
                                -71.973921678642512,
                                11.60867157643213
                            ],
                            [
                                -71.331583624984262,
                                11.776284084343047
                            ],
                            [
                                -71.137461106844569,
                                12.112981879410256
                            ],
                            [
                                -71.399822353518744,
                                12.376040758074566
                            ],
                            [
                                -71.754090135051626,
                                12.437303168506446
                            ],
                            [
                                -72.238194953234483,
                                11.955549627813127
                            ],
                            [
                                -72.627835252594821,
                                11.731971543651866
                            ],
                            [
                                -73.414763963885775,
                                11.227015285527045
                            ],
                            [
                                -74.197222663295236,
                                11.310472723937096
                            ],
                            [
                                -74.276752692182981,
                                11.102035834386299
                            ],
                            [
                                -74.906895107922878,
                                11.083044745518634
                            ],
                            [
                                -75.48042599136636,
                                10.618990383399534
                            ],
                            [
                                -75.664704149077181,
                                9.7740032007871491
                            ],
                            [
                                -75.674600185450174,
                                9.4432481959475467
                            ],
                            [
                                -76.086383836844561,
                                9.336820583203405
                            ],
                            [
                                -76.836673956637753,
                                8.6387494981908617
                            ],
                            [
                                -77.353360765586842,
                                8.6705046657577896
                            ],
                            [
                                -77.474722866467062,
                                8.524286200148083
                            ],
                            [
                                -77.242566494647974,
                                7.9352782253099008
                            ],
                            [
                                -77.431107957766017,
                                7.6380612247457975
                            ],
                            [
                                -77.753413866156961,
                                7.7098397891749642
                            ],
                            [
                                -77.881571417986493,
                                7.2237712671303029
                            ],
                            [
                                -77.476660732806522,
                                6.6911164412708217
                            ],
                            [
                                -77.318815070059372,
                                5.8453541123025161
                            ],
                            [
                                -77.533220588259496,
                                5.5828119975756749
                            ],
                            [
                                -77.30760128407195,
                                4.6679841168735265
                            ],
                            [
                                -77.496271938399218,
                                4.0876061056372919
                            ],
                            [
                                -77.127689785455175,
                                3.8496361356991429
                            ],
                            [
                                -77.510431281078695,
                                3.3250169942389221
                            ],
                            [
                                -77.931542528065165,
                                2.6966057401628518
                            ],
                            [
                                -78.427610440169644,
                                2.6295555691342543
                            ],
                            [
                                -78.662118089478213,
                                2.2673554550902395
                            ],
                            [
                                -78.617831387208696,
                                1.7664041199542453
                            ],
                            [
                                -78.990935227978355,
                                1.6913699404704516
                            ],
                            [
                                -78.855258754787656,
                                1.3809237732136239
                            ],
                            [
                                -77.855061407757717,
                                0.80992503531217608
                            ],
                            [
                                -77.668612840610081,
                                0.8258930522226251
                            ],
                            [
                                -77.42498430038512,
                                0.39568675364080264
                            ],
                            [
                                -76.576379767512208,
                                0.25693553344814291
                            ],
                            [
                                -76.292314419274987,
                                0.41604726806701819
                            ],
                            [
                                -75.801465826986259,
                                0.084801336812290629
                            ],
                            [
                                -75.373223232266298,
                                -0.15203175246335832
                            ],
                            [
                                -75.106624518606623,
                                -0.057205498434939273
                            ],
                            [
                                -74.441600511454396,
                                -0.53082000104217286
                            ],
                            [
                                -74.122395189386452,
                                -1.0028325331948054
                            ],
                            [
                                -73.659503547250893,
                                -1.2604912248900746
                            ],
                            [
                                -73.070392218725885,
                                -2.3089543596558997
                            ],
                            [
                                -72.32578650584253,
                                -2.4342180316368172
                            ],
                            [
                                -71.774760707840358,
                                -2.1697897274139564
                            ],
                            [
                                -71.413645799414098,
                                -2.3428024222939143
                            ],
                            [
                                -70.813475714532558,
                                -2.2568645160844767
                            ],
                            [
                                -70.047708502445403,
                                -2.7251563451891343
                            ],
                            [
                                -70.692682054433249,
                                -3.7428720027406825
                            ],
                            [
                                -70.394043952366474,
                                -3.7665914850089735
                            ],
                            [
                                -69.893635219589669,
                                -4.2981869445717962
                            ],
                            [
                                -69.444101935356002,
                                -1.5562871230522433
                            ],
                            [
                                -69.420485805875217,
                                -1.1226185038408403
                            ],
                            [
                                -69.577065395851321,
                                -0.54999195706312776
                            ],
                            [
                                -70.0206558907567,
                                -0.18515634558883676
                            ],
                            [
                                -70.015565762150175,
                                0.541414292835384
                            ],
                            [
                                -69.452396003073034,
                                0.70615875931935079
                            ],
                            [
                                -69.252434048392558,
                                0.60265086484560015
                            ],
                            [
                                -69.218637661698665,
                                0.98567658130923519
                            ],
                            [
                                -69.804596727057287,
                                1.0890811220961609
                            ],
                            [
                                -69.81697323302825,
                                1.7148052027978906
                            ],
                            [
                                -67.86856502975229,
                                1.6924551460881503
                            ],
                            [
                                -67.537810024912687,
                                2.0371627871329565
                            ],
                            [
                                -67.259997524366213,
                                1.7199986841919781
                            ],
                            [
                                -67.065048183926535,
                                1.1301122093110507
                            ],
                            [
                                -66.876325852755883,
                                1.2533605005866661
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 8,
                    "SOVEREIGNT": "Colombia",
                    "SOV_A3": "COL",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Colombia",
                    "id": "COL",
                    "Shape_Length": 59.686397071689456,
                    "Shape_Area": 93.945155452638488
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -60.733574184900647,
                                5.200277207527165
                            ],
                            [
                                -61.410302903556101,
                                5.9590681015117184
                            ],
                            [
                                -61.139415046067484,
                                6.234296779672718
                            ],
                            [
                                -61.159336310022638,
                                6.6960773786681216
                            ],
                            [
                                -60.54399919300829,
                                6.8565843772672679
                            ],
                            [
                                -60.295668097804423,
                                7.0439114444576489
                            ],
                            [
                                -60.637972785415684,
                                7.4149999045220056
                            ],
                            [
                                -60.550587938382591,
                                7.7796029728989424
                            ],
                            [
                                -59.758284878544259,
                                8.3670348166035637
                            ],
                            [
                                -60.150095588240788,
                                8.6027568627390565
                            ],
                            [
                                -60.671252407272732,
                                8.5801742620326422
                            ],
                            [
                                -60.830596686787601,
                                9.3813398303689155
                            ],
                            [
                                -61.58876746314786,
                                9.8730669218010689
                            ],
                            [
                                -62.388511929082199,
                                9.9482044540723678
                            ],
                            [
                                -62.730118984703324,
                                10.420268663068384
                            ],
                            [
                                -61.880946011049502,
                                10.715625311658869
                            ],
                            [
                                -63.079322476051402,
                                10.701724351397729
                            ],
                            [
                                -64.318006557856336,
                                10.641417955374379
                            ],
                            [
                                -64.329478726262153,
                                10.389598700219892
                            ],
                            [
                                -64.890452236581439,
                                10.077214667522924
                            ],
                            [
                                -65.655237595838344,
                                10.200798854683455
                            ],
                            [
                                -66.227864142616056,
                                10.648626817473712
                            ],
                            [
                                -67.296248542236413,
                                10.545868231833481
                            ],
                            [
                                -68.194126553197805,
                                10.554653225066318
                            ],
                            [
                                -68.233271450017355,
                                10.885744126690156
                            ],
                            [
                                -68.882999233827547,
                                11.44338450758903
                            ],
                            [
                                -69.584300096372317,
                                11.459610907817193
                            ],
                            [
                                -69.943244595361762,
                                12.162307033442914
                            ],
                            [
                                -70.293843349790734,
                                11.846822414422945
                            ],
                            [
                                -70.155298835173085,
                                11.375481675838728
                            ],
                            [
                                -71.400623338296384,
                                10.968969021103476
                            ],
                            [
                                -71.350083787436802,
                                10.211935126305093
                            ],
                            [
                                -71.03999935538593,
                                9.8599927838399708
                            ],
                            [
                                -71.264559292377385,
                                9.1371945253071658
                            ],
                            [
                                -71.695644090102633,
                                9.0722630886706384
                            ],
                            [
                                -72.074173957162373,
                                9.8656513532274062
                            ],
                            [
                                -71.633063930955586,
                                10.446494452457046
                            ],
                            [
                                -71.620868293037233,
                                10.969459947518601
                            ],
                            [
                                -71.947049933207836,
                                11.423282375581209
                            ],
                            [
                                -71.360005663130835,
                                11.539993597426644
                            ],
                            [
                                -71.331583624984262,
                                11.776284084343047
                            ],
                            [
                                -71.973921678642512,
                                11.60867157643213
                            ],
                            [
                                -72.227575446449634,
                                11.108702094126386
                            ],
                            [
                                -72.614657762745537,
                                10.821975409137849
                            ],
                            [
                                -72.905286017935339,
                                10.450344346714303
                            ],
                            [
                                -73.027604132324825,
                                9.736770330986019
                            ],
                            [
                                -73.304951544877838,
                                9.1519998231333943
                            ],
                            [
                                -72.78872982482153,
                                9.0850271673699012
                            ],
                            [
                                -72.660494757726838,
                                8.6252877875014633
                            ],
                            [
                                -72.439862230257688,
                                8.4052753767572881
                            ],
                            [
                                -72.360900641251533,
                                8.002638454700957
                            ],
                            [
                                -72.479678921544973,
                                7.6325060081458105
                            ],
                            [
                                -72.444487270870809,
                                7.423784898654219
                            ],
                            [
                                -72.198352423525478,
                                7.3404308130316167
                            ],
                            [
                                -71.960175747112999,
                                6.9916148953112156
                            ],
                            [
                                -70.674233567924773,
                                7.0877847355771451
                            ],
                            [
                                -70.093312954329349,
                                6.9603764916818136
                            ],
                            [
                                -69.389479946242488,
                                6.0998605408313438
                            ],
                            [
                                -68.985318569896037,
                                6.2068049175129545
                            ],
                            [
                                -68.265052456006003,
                                6.1532681340171962
                            ],
                            [
                                -67.695087245979551,
                                6.2673180200106913
                            ],
                            [
                                -67.341439582071018,
                                6.095468044214897
                            ],
                            [
                                -67.521531948740403,
                                5.5568704290271285
                            ],
                            [
                                -67.744696621751643,
                                5.2211286483684489
                            ],
                            [
                                -67.823012254711728,
                                4.5039372823797521
                            ],
                            [
                                -67.621835903204328,
                                3.8394817160084358
                            ],
                            [
                                -67.337563849392097,
                                3.542342230709437
                            ],
                            [
                                -67.303173183495574,
                                3.3184540881856606
                            ],
                            [
                                -67.809938116750629,
                                2.8206550153167314
                            ],
                            [
                                -67.44709204755992,
                                2.6002808702659763
                            ],
                            [
                                -67.181294318677828,
                                2.2506381293462141
                            ],
                            [
                                -66.876325852755883,
                                1.2533605005866661
                            ],
                            [
                                -66.325765143646436,
                                0.72445221619688027
                            ],
                            [
                                -65.548267381634332,
                                0.78925446252350184
                            ],
                            [
                                -65.354713304275549,
                                1.0952822938428426
                            ],
                            [
                                -64.611011928957339,
                                1.3287305768546958
                            ],
                            [
                                -64.199305792828056,
                                1.4928549257143118
                            ],
                            [
                                -64.083085496498427,
                                1.9163691270336471
                            ],
                            [
                                -63.368788011257664,
                                2.2008995632642723
                            ],
                            [
                                -63.422867398011988,
                                2.4110676126802559
                            ],
                            [
                                -64.269999152538844,
                                2.4970055197889565
                            ],
                            [
                                -64.408827887996608,
                                3.1267862003229538
                            ],
                            [
                                -64.368494431872477,
                                3.797210394444221
                            ],
                            [
                                -64.81606401224434,
                                4.0564452172729943
                            ],
                            [
                                -64.628659430688117,
                                4.1484809433409282
                            ],
                            [
                                -63.888342861633703,
                                4.0205300970863505
                            ],
                            [
                                -63.093197597890764,
                                3.7705711939055391
                            ],
                            [
                                -62.804533047462144,
                                4.0069650336094469
                            ],
                            [
                                -62.08542965355565,
                                4.1621235211836165
                            ],
                            [
                                -60.966893276703331,
                                4.5364675972019199
                            ],
                            [
                                -60.601179165186295,
                                4.918098049685284
                            ],
                            [
                                -60.733574184900647,
                                5.200277207527165
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 9,
                    "SOVEREIGNT": "Venezuela",
                    "SOV_A3": "VEN",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Venezuela",
                    "id": "VEN",
                    "Shape_Length": 56.833521342543087,
                    "Shape_Area": 74.438501938682961
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -56.539385749053054,
                                1.899522610080453
                            ],
                            [
                                -57.150097825454225,
                                2.7689269069512648
                            ],
                            [
                                -57.281433477972598,
                                3.3334919291093001
                            ],
                            [
                                -57.601568976027409,
                                3.3346546490928404
                            ],
                            [
                                -58.044694382939383,
                                4.0608635523111616
                            ],
                            [
                                -57.860209519653552,
                                4.5768010524266742
                            ],
                            [
                                -57.914288906407876,
                                4.8126264513496722
                            ],
                            [
                                -57.307245856211239,
                                5.0735665956219123
                            ],
                            [
                                -57.147436489602285,
                                5.9731499289261478
                            ],
                            [
                                -57.542218594412589,
                                6.3212682155557331
                            ],
                            [
                                -58.078103196904976,
                                6.8090937358872452
                            ],
                            [
                                -58.454876064778546,
                                6.8327873806331354
                            ],
                            [
                                -58.482962205241563,
                                7.3476913519743903
                            ],
                            [
                                -59.10168412941897,
                                7.9992019715937772
                            ],
                            [
                                -59.758284878544259,
                                8.3670348166035637
                            ],
                            [
                                -60.550587938382591,
                                7.7796029728989424
                            ],
                            [
                                -60.637972785415684,
                                7.4149999045220056
                            ],
                            [
                                -60.295668097804423,
                                7.0439114444576489
                            ],
                            [
                                -60.54399919300829,
                                6.8565843772672679
                            ],
                            [
                                -61.159336310022638,
                                6.6960773786681216
                            ],
                            [
                                -61.139415046067484,
                                6.234296779672718
                            ],
                            [
                                -61.410302903556101,
                                5.9590681015117184
                            ],
                            [
                                -60.733574184900647,
                                5.200277207527165
                            ],
                            [
                                -60.213683437740428,
                                5.2444863954308403
                            ],
                            [
                                -59.980958625140374,
                                5.0140611843762031
                            ],
                            [
                                -60.111002366465982,
                                4.5749665388747189
                            ],
                            [
                                -59.767405768561332,
                                4.4235029159268606
                            ],
                            [
                                -59.53803992380341,
                                3.958802598661066
                            ],
                            [
                                -59.815413173878824,
                                3.6064985209899874
                            ],
                            [
                                -59.974524909397019,
                                2.7552326522651356
                            ],
                            [
                                -59.718545701622816,
                                2.2496304389936199
                            ],
                            [
                                -59.646043666781736,
                                1.7868938255896296
                            ],
                            [
                                -59.030861579398334,
                                1.317697658919883
                            ],
                            [
                                -58.540012987109606,
                                1.2680882840471099
                            ],
                            [
                                -58.429477098589189,
                                1.4639419620519334
                            ],
                            [
                                -58.11344987631071,
                                1.5071951355471356
                            ],
                            [
                                -57.660971035384932,
                                1.682584947237558
                            ],
                            [
                                -57.335822923089381,
                                1.9485377057505957
                            ],
                            [
                                -56.782704230016179,
                                1.8637108426813143
                            ],
                            [
                                -56.539385749053054,
                                1.899522610080453
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 10,
                    "SOVEREIGNT": "Guyana",
                    "SOV_A3": "GUY",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Guyana",
                    "id": "GUY",
                    "Shape_Length": 21.722966712844521,
                    "Shape_Area": 17.110779465862084
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -54.524754197947857,
                                2.3118488629347098
                            ],
                            [
                                -54.269705166160463,
                                2.7323916691402701
                            ],
                            [
                                -54.18172603992474,
                                3.1897797715192837
                            ],
                            [
                                -54.006930508336268,
                                3.6200377469444902
                            ],
                            [
                                -54.399542201911061,
                                4.2126113960990779
                            ],
                            [
                                -54.478632982126385,
                                4.8967556824288749
                            ],
                            [
                                -53.958044602976031,
                                5.7565481628674888
                            ],
                            [
                                -55.033250291967363,
                                6.0252914493409548
                            ],
                            [
                                -55.841779751134538,
                                5.9531253112841114
                            ],
                            [
                                -55.949318407018836,
                                5.7728779158831571
                            ],
                            [
                                -57.147436489602285,
                                5.9731499289261478
                            ],
                            [
                                -57.307245856211239,
                                5.0735665956219123
                            ],
                            [
                                -57.914288906407876,
                                4.8126264513496722
                            ],
                            [
                                -57.860209519653552,
                                4.5768010524266742
                            ],
                            [
                                -58.044694382939383,
                                4.0608635523111616
                            ],
                            [
                                -57.601568976027409,
                                3.3346546490928404
                            ],
                            [
                                -57.281433477972598,
                                3.3334919291093001
                            ],
                            [
                                -57.150097825454225,
                                2.7689269069512648
                            ],
                            [
                                -56.539385749053054,
                                1.899522610080453
                            ],
                            [
                                -55.995698004359383,
                                1.8176671412256269
                            ],
                            [
                                -55.90560014463091,
                                2.0219957541008284
                            ],
                            [
                                -56.073341844650372,
                                2.2207949896970831
                            ],
                            [
                                -55.973322109227922,
                                2.5103638776908497
                            ],
                            [
                                -55.569755011184782,
                                2.4215062523117581
                            ],
                            [
                                -55.097587449401203,
                                2.5237480740144633
                            ],
                            [
                                -54.524754197947857,
                                2.3118488629347098
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 11,
                    "SOVEREIGNT": "Suriname",
                    "SOV_A3": "SUR",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Suriname",
                    "id": "SUR",
                    "Shape_Length": 15.195303299617898,
                    "Shape_Area": 11.751504293800613
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -51.657797410921717,
                                4.1562324077994504
                            ],
                            [
                                -51.823342861284004,
                                4.5657681335925417
                            ],
                            [
                                -52.882141282893826,
                                5.4098509786397813
                            ],
                            [
                                -53.618452928060151,
                                5.6465290391838607
                            ],
                            [
                                -53.958044602976031,
                                5.7565481628674888
                            ],
                            [
                                -54.478632982126385,
                                4.8967556824288749
                            ],
                            [
                                -54.399542201911061,
                                4.2126113960990779
                            ],
                            [
                                -54.006930508336268,
                                3.6200377469444902
                            ],
                            [
                                -54.18172603992474,
                                3.1897797715192837
                            ],
                            [
                                -54.269705166160463,
                                2.7323916691402701
                            ],
                            [
                                -54.524754197947857,
                                2.3118488629347098
                            ],
                            [
                                -54.088062506779238,
                                2.1055565452983842
                            ],
                            [
                                -53.778520677087556,
                                2.3767027852053957
                            ],
                            [
                                -53.55483924013879,
                                2.3348965516345856
                            ],
                            [
                                -53.418465134957955,
                                2.0533891873611765
                            ],
                            [
                                -52.939657151856011,
                                2.1248576925285079
                            ],
                            [
                                -52.556424729817365,
                                2.5047053083033575
                            ],
                            [
                                -52.24933753130199,
                                3.2410944687347865
                            ],
                            [
                                -51.657797410921717,
                                4.1562324077994504
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 12,
                    "SOVEREIGNT": "France",
                    "SOV_A3": "FR1",
                    "ADM0_DIF": 1,
                    "TYPE": "Country",
                    "name": "French-Guiana",
                    "id": "FRA",
                    "Shape_Length": 11.098919846083513,
                    "Shape_Area": 6.9418547414372052
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -75.373223232266298,
                                -0.15203175246335832
                            ],
                            [
                                -75.801465826986259,
                                0.084801336812290629
                            ],
                            [
                                -76.292314419274987,
                                0.41604726806701819
                            ],
                            [
                                -76.576379767512208,
                                0.25693553344814291
                            ],
                            [
                                -77.42498430038512,
                                0.39568675364080264
                            ],
                            [
                                -77.668612840610081,
                                0.8258930522226251
                            ],
                            [
                                -77.855061407757717,
                                0.80992503531217608
                            ],
                            [
                                -78.855258754787656,
                                1.3809237732136239
                            ],
                            [
                                -79.542762010758167,
                                0.98293773019213404
                            ],
                            [
                                -80.090609707172234,
                                0.76842886010388156
                            ],
                            [
                                -80.020898200291697,
                                0.36034007423506864
                            ],
                            [
                                -80.399324713664555,
                                -0.28370330176591096
                            ],
                            [
                                -80.583370327378645,
                                -0.90666269292887591
                            ],
                            [
                                -80.933659023445159,
                                -1.0574545223083192
                            ],
                            [
                                -80.764806281184917,
                                -1.9650477024894144
                            ],
                            [
                                -80.967765469400831,
                                -2.2469426403905004
                            ],
                            [
                                -80.368783942025289,
                                -2.6851587867485591
                            ],
                            [
                                -79.986559211238557,
                                -2.2207943662669436
                            ],
                            [
                                -79.770293341964134,
                                -2.6575118949579632
                            ],
                            [
                                -80.302560594196052,
                                -3.4048564589583634
                            ],
                            [
                                -80.184014858798662,
                                -3.8211617972790464
                            ],
                            [
                                -80.469294602963544,
                                -4.0592867977474612
                            ],
                            [
                                -80.442241991274841,
                                -4.4257243787770335
                            ],
                            [
                                -80.028908047168613,
                                -4.3460909971017827
                            ],
                            [
                                -79.624979213919573,
                                -4.4541980928676708
                            ],
                            [
                                -79.205289069335038,
                                -4.9591285134700911
                            ],
                            [
                                -78.639897223977641,
                                -4.547784112546708
                            ],
                            [
                                -78.450683966391921,
                                -3.8730966121188999
                            ],
                            [
                                -77.837904832442007,
                                -3.003020521679673
                            ],
                            [
                                -76.635394253242168,
                                -2.6086776664411104
                            ],
                            [
                                -75.544995693696251,
                                -1.5616097956554995
                            ],
                            [
                                -75.233722704139439,
                                -0.91141692475122227
                            ],
                            [
                                -75.373223232266298,
                                -0.15203175246335832
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 13,
                    "SOVEREIGNT": "Ecuador",
                    "SOV_A3": "ECU",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Ecuador",
                    "id": "ECU",
                    "Shape_Length": 21.095752908135353,
                    "Shape_Area": 20.382425473473159
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -58.166392381503158,
                                -20.176700941794991
                            ],
                            [
                                -58.183471442453083,
                                -19.868399346452634
                            ],
                            [
                                -59.11504248732092,
                                -19.356906019796952
                            ],
                            [
                                -60.043564622709141,
                                -19.342746677117418
                            ],
                            [
                                -61.78632646349547,
                                -19.633736667513176
                            ],
                            [
                                -62.265961269796719,
                                -20.51373463274706
                            ],
                            [
                                -62.291179368832786,
                                -21.051634616844069
                            ],
                            [
                                -62.685057136077944,
                                -22.249029229015662
                            ],
                            [
                                -60.84656470369805,
                                -23.880712578922328
                            ],
                            [
                                -60.028966030457923,
                                -24.03279631949448
                            ],
                            [
                                -58.807128465606183,
                                -24.771459242150286
                            ],
                            [
                                -57.777217170136225,
                                -25.162339775859948
                            ],
                            [
                                -57.633660041277835,
                                -25.603656507641688
                            ],
                            [
                                -58.618173590438801,
                                -27.123718764309501
                            ],
                            [
                                -57.609759690956935,
                                -27.395898532990884
                            ],
                            [
                                -56.486701626279,
                                -27.548499037500562
                            ],
                            [
                                -55.695845506365004,
                                -27.387837009270527
                            ],
                            [
                                -54.788794928543098,
                                -26.621785577242576
                            ],
                            [
                                -54.625290696408456,
                                -25.739255466466545
                            ],
                            [
                                -54.428946091988507,
                                -25.162184747128322
                            ],
                            [
                                -54.293476325272138,
                                -24.570799655479675
                            ],
                            [
                                -54.292959560435349,
                                -24.021014092726148
                            ],
                            [
                                -54.652834235411603,
                                -23.839578138919933
                            ],
                            [
                                -55.027901780942386,
                                -24.001273695924283
                            ],
                            [
                                -55.400747240192914,
                                -23.956935316811382
                            ],
                            [
                                -55.517639329191638,
                                -23.571997572430007
                            ],
                            [
                                -55.610682745612166,
                                -22.655619399016018
                            ],
                            [
                                -55.797958136858483,
                                -22.356929620105859
                            ],
                            [
                                -56.473317429955387,
                                -22.086300144136317
                            ],
                            [
                                -56.881509568611648,
                                -22.28215382214114
                            ],
                            [
                                -57.937155727954462,
                                -22.090175876815238
                            ],
                            [
                                -57.870673997706774,
                                -20.7326876762952
                            ],
                            [
                                -58.166392381503158,
                                -20.176700941794991
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 14,
                    "SOVEREIGNT": "Paraguay",
                    "SOV_A3": "PRY",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Paraguay",
                    "id": "PRY",
                    "Shape_Length": 28.903235322675467,
                    "Shape_Area": 35.429305942621824
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -61.680000000199811,
                                10.760000000000048
                            ],
                            [
                                -61.659999999700176,
                                10.365000000249836
                            ],
                            [
                                -61.950000000199793,
                                10.089999999900101
                            ],
                            [
                                -61.770000000199786,
                                9.9999999999001261
                            ],
                            [
                                -60.935000000249772,
                                10.110000000399737
                            ],
                            [
                                -60.895000000149821,
                                10.855000000349776
                            ],
                            [
                                -61.105000000449593,
                                10.890000000099974
                            ],
                            [
                                -61.680000000199811,
                                10.760000000000048
                            ]
                        ]
                    ]
                },
                "properties": {
                    "OBJECTID": 15,
                    "SOVEREIGNT": "Trinidad and Tobago",
                    "SOV_A3": "TTO",
                    "ADM0_DIF": 0,
                    "TYPE": "Sovereign country",
                    "name": "Trinidad and Tobago",
                    "id": "TTO",
                    "Shape_Length": 3.38710482055482,
                    "Shape_Area": 0.63899999981564026
                }
            }
        ]
    }


// Map extent and zoom in zoom out
const southAmericaBounds = L.latLngBounds(
    L.latLng(-60, -95),
    L.latLng(20, -25)
);

const map = L.map('map', {
    maxBounds: southAmericaBounds,
    maxBoundsViscosity: 0.8,
    minZoom: 3,
    maxZoom: 10
}).setView([-15, -60], 3);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 10,
    attribution: '&copy; OpenStreetMap &copy; CARTO'
}).addTo(map);


// Thematic layers
const core = ['BRA', 'BOL', 'PRY', 'URY', 'ARG', 'CHL'];
const occasional = ['PER'];
const militaryCountries = ["VEN", "COL", "PRY", "PER", "ECU", "BOL", "BRA", "CHL", "URY", "ARG", "SUR"];

// Define stripe patterns
// For main active members
const stripePatternCore = new L.StripePattern({
    weight: 4,
    spaceWeight: 2,
    color: '#fff',
    spaceOpacity: 0.7,
    // opacity: 1,
    angle: 135
}).addTo(map);

// For occational members
const stripePatternOccasional = new L.StripePattern({
    weight: 4,
    spaceWeight: 4,
    color: '#000',
    opacity: 0.7,
    // spaceOpacity: 0.7,
    angle: 45
}).addTo(map);

// Base yellow fill for all military dictatorship countries
const militaryLayer = L.geoJson(geojsonData, {
    style: function (feature) {
    const code = feature.properties.id;
    if (militaryCountries.includes(code)) {
        return {
        fillColor: '#f4c430',
        color: '#ffffff',
        weight: 1,
        fillOpacity: 0.7,
        stroke: true
        };
    }
    return {
        fillOpacity: 0,
        color: '#ffffff',
        weight: 1,
        stroke: true
    };
    }
}).addTo(map);

// Striped pattern overlay for Condor participants
const condorLayer = L.geoJson(geojsonData, {
    style: function (feature) {
    const code = feature.properties.id;
    if (core.includes(code)) {
        return {
        fillPattern: stripePatternCore,
        color: 'black',
        weight: 0
        };
    }
    if (occasional.includes(code)) {
        return {
        fillPattern: stripePatternOccasional,
        color: 'black',
        weight: 0
        };
    }
    return { fillOpacity: 0, stroke:false };
    }
}).addTo(map);

// Highlighting logic
let selectedLayer = null;

function highlightFeature(e) {
    if (selectedLayer && selectedLayer !== e.target) {
    // Reset all layers for the previously selected country
    militaryLayer.resetStyle(selectedLayer);
    condorLayer.resetStyle(selectedLayer);
    geojson.resetStyle(selectedLayer);
    }

    const layer = e.target;
    selectedLayer = layer;

    layer.setStyle({
    weight: 6,
    fillColor: '#f5a316',
    color: '#fff',
    stroke: true,
    dashArray: '',
    fillOpacity: 0.2
    // fillOpacity: layer.options.fillOpacity
    });

    map.fitBounds(layer.getBounds(), { maxZoom: 6 });
    scrollToContent(layer.feature.properties.id);
}

function scrollToContent(code) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("highlight"));
    const section = document.getElementById(code);
    if (section) {
    // Call the scroll function to prevent feedback loop
    scrollToCountry(code);
    section.classList.add("highlight");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}


// Hover effect
function onEachFeature(feature, layer) {
    const nonInteractiveTerritories = ['FRA', 'TTO', 'GUY', 'FLK']; // List of territories that should not be interactive
    const code = feature.properties.id;

    if (!nonInteractiveTerritories.includes(code)) {
        layer.on({
            mouseover: function () {
                if (layer !== selectedLayer) {
                    layer.setStyle({
                        weight: 6,
                        // fillColor: '#f5a316',
                        color: '#fff',
                        // stroke: true,
                        // dashArray: '',
                        // fillOpacity: 0.2
                    });
                }
            },
            mouseout: function () {
                if (layer !== selectedLayer) {
                    // Reset to original style based on layer type
                    militaryLayer.resetStyle(layer);
                    condorLayer.resetStyle(layer);
                    geojson.resetStyle(layer);
                }
            },
            click: highlightFeature
        });
        layer.bindTooltip(feature.properties.name, { permanent: false });
            } else {
                // For non-interactive territories, only bind tooltip without hover/click events
                layer.bindTooltip(feature.properties.name, { permanent: false });
            }
        }


//Load default style of the thematic layers
const geojson = L.geoJson(geojsonData, {
        style: function (feature) {
            return{
            color: '#ffffff',
            weight: 0.5,
            stroke: true,
            fillOpacity: 0
            };
        },
        onEachFeature: onEachFeature
    }).addTo(map);

// Legend
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = `
    <h5>Military Dictatorship</h5>
    <i style="background:rgba(244, 196, 48, 0.7);"></i> Experienced<br>
    <i style="background:transparent; border: 1px solid #ccc;"></i> Not Experienced
    <h5>Operation Condor</h5>
    <i style="background-image: repeating-linear-gradient(135deg, black, black 4px, #F7F8F9 2px, #F7F8F9 6px); background-size: 16px 16px; border: 1px solid #808080;"></i> Main active members<br>
    <i style="background-image: repeating-linear-gradient(45deg, white, white 2px, transparent 2px, transparent 6px); background-size: 16px 16px; opacity: 0.4; border: 1px solid white;"></i> Occasional member<br>
    <i style="background:transparent; border: 1px solid #ccc;"></i> No Participation`;
    return div;
};

legend.addTo(map);


// Scroll-based map interaction
let isScrolling = false;
let scrollTimeout;
let isProgrammaticScroll = false; // Add this flag to prevent feedback loop

function getVisibleSection() {
  const sections = document.querySelectorAll('section.countries[id]');

  // Target your specific media-container
  const contentContainer = document.querySelector('.media-container');

  if (!contentContainer) {
    console.log('Media container not found, falling back to window scroll');
    // Fallback to window scroll if media-container not found
    const viewportHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    for (let section of sections) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollTop;
      const sectionBottom = sectionTop + rect.height;

      if (sectionTop <= scrollTop + viewportHeight * 0.7 && 
          sectionBottom >= scrollTop + viewportHeight * 0.3) {
        return section.id;
      }
    }
  } else {
    // Using media-container scroll
    const containerHeight = contentContainer.clientHeight;
    const scrollTop = contentContainer.scrollTop;

    for (let section of sections) {
      const sectionTop = section.offsetTop - contentContainer.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      // Check if section is significantly visible in the media container
      if (sectionTop <= scrollTop + containerHeight * 0.7 && 
          sectionBottom >= scrollTop + containerHeight * 0.3) {
        return section.id;
      }
    }
  }
  return null;
}

function zoomToCountryFromScroll(countryCode) {
  if (!countryCode) return;

  // List of non-interactive territories that should not zoom
  const nonInteractiveTerritories = ['GUF', 'TTO', 'GUY', 'FLK'];
  if (nonInteractiveTerritories.includes(countryCode)) return;

  // Find the layer for this country
  let targetLayer = null;

  // Search through all layers to find the matching country
  [militaryLayer, condorLayer, geojson].forEach(layerGroup => {
    layerGroup.eachLayer(layer => {
      if (layer.feature && layer.feature.properties.id === countryCode) {
        targetLayer = layer;
      }
    });
  });

  if (targetLayer) {
    // Reset previous selection if different
    if (selectedLayer && selectedLayer !== targetLayer) {
      militaryLayer.resetStyle(selectedLayer);
      condorLayer.resetStyle(selectedLayer);
      geojson.resetStyle(selectedLayer);
    }

    // Set new selection
    selectedLayer = targetLayer;

    // Apply highlight style
    targetLayer.setStyle({
    //   weight: 3,
    //   color: '#ffffff',
    //   dashArray: '',
    //   fillOpacity: targetLayer.options.fillOpacity
      weight: 6,
      fillColor: '#f5a316',
      color: '#fff',
      stroke: true,
      dashArray: '',
      fillOpacity: 0.2
    });

    // Zoom to country
    map.fitBounds(targetLayer.getBounds(), { maxZoom: 6 });
  }
}

// Function to handle programmatic scrolling (call this when clicking on map)
function scrollToCountry(countryId) {
  const targetSection = document.getElementById(countryId);
  if (!targetSection) return;

  // Set flag to prevent scroll-based zooming
  isProgrammaticScroll = true;

  const mediaContainer = document.querySelector('.media-container');
  
  if (mediaContainer) {
    // Scroll within media container
    const sectionTop = targetSection.offsetTop - mediaContainer.offsetTop;
    mediaContainer.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  } else {
    // Fallback to window scroll
    targetSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }

  // Reset flag after scroll animation completes
  setTimeout(() => {
    isProgrammaticScroll = false;
  }, 1000); // Adjust timing based on your scroll animation duration
}

// Scroll event listener targeting your specific structure
const mediaContainer = document.querySelector('.media-container');

if (mediaContainer) {
  console.log('Found media-container, attaching scroll listener');
  mediaContainer.addEventListener('scroll', function() {
    // Skip if this is a programmatic scroll
    if (isProgrammaticScroll) return;
      
    if (!isScrolling) {
      isScrolling = true;

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set timeout to check visible section after scroll stops
      scrollTimeout = setTimeout(function() {
        const visibleCountry = getVisibleSection();
        if (visibleCountry) {
          console.log('Visible country:', visibleCountry);
          zoomToCountryFromScroll(visibleCountry);
        }
        isScrolling = false;
      }, 150);
    }
  });
} else {
  console.log('Media container not found, using window scroll');
  // Fallback to window scroll
  window.addEventListener('scroll', function() {
    if (isProgrammaticScroll) return;
      
    if (!isScrolling) {
      isScrolling = true;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(function() {
        const visibleCountry = getVisibleSection();
        if (visibleCountry) {
          zoomToCountryFromScroll(visibleCountry);
        }
        isScrolling = false;
      }, 150);
    }
  });
}

window.scrollToCountry = scrollToCountry;

//remove zoom with mouse for responsibility for mobile - Gabi
// function to detect mobile devices
function isMobileDevice() {
    return window.innerWidth <= 520; 
}
//  disable zoom after initialization only for mobile
if (isMobileDevice()) {
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.touchZoom.disable();
    map.boxZoom.disable();
}

// Re-enable zoom when screen size changes (for responsive design)
window.addEventListener('resize', function() {
    if (isMobileDevice()) {
        // Disable zoom on mobile
        map.scrollWheelZoom.disable();
        map.doubleClickZoom.disable();
        map.touchZoom.disable();
        map.boxZoom.disable();
    } else {
        // Enable zoom on larger screens
        map.scrollWheelZoom.enable();
        map.doubleClickZoom.enable();
        map.touchZoom.enable();
        map.boxZoom.enable();
    }
});
