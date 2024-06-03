import { ImageItem, TattooArtist } from "@/interface/interface";
import imagesUsers from '@/assets/users/index'

export const imagesList:ImageItem[] = [
  {
    image: imagesUsers.user_keneth.src,
    name: 'keneth'
  },
  {
    image: imagesUsers.user_luis.src,
    name: 'luis'
  },
  {
    image: imagesUsers.user_veronica.src,
    name: 'veronica'
  },
  {
    image: imagesUsers.user_yeison.src,
    name: 'yeison'
  },
  {
    image: imagesUsers.user_juan.src,
    name: 'juan'
  },
];
  
export const tattooArtist: TattooArtist[] = [
  {
    name: 'keneth',
    photo: imagesList[0].image,
    url: '/keneth',
    description: 'Con un talento inigualable y una pasión ardiente por capturar la vida en cada trazo, Keneth es un maestro del tatuaje de realismo. Su habilidad para transformar la piel en lienzos vivientes es incomparable, utilizando técnicas precisas y una atención meticulosa al detalle para dar vida a retratos y paisajes con una fidelidad impresionante. Cada obra de arte que crea es una expresión vívida de su destreza artística y su profundo respeto por la belleza del mundo que lo rodea. Keneth no solo es un tatuador experto, sino también un narrador visual, cuyas creaciones cautivan los sentidos y despiertan emociones intensas en aquellos que tienen el privilegio de llevar sus obras en la piel. Su estudio es un santuario donde la imaginación cobra vida y las historias cobran forma, todo bajo la mano experta de un verdadero artista del realismo.',    
    portafolio: [
      'https://i.pinimg.com/564x/e8/87/c6/e887c66ff9945ce69fae60f07fae0b4e.jpg',
      'https://i.pinimg.com/564x/2a/8e/5d/2a8e5d50281bb7ab027d3d82ec017738.jpg',
      'https://i.pinimg.com/564x/2b/f1/d7/2bf1d760e5f514915361594eca9fa8a2.jpg',
      'https://i.pinimg.com/564x/82/4d/f4/824df4f2c98330b29e70df1081b370a3.jpg',
      'https://i.pinimg.com/564x/c8/b9/bf/c8b9bf9902c7ef626056a3b1ca33187b.jpg',
      'https://i.pinimg.com/564x/76/05/76/76057635bdbb43f5646cfe1d01e5abc3.jpg',
      'https://i.pinimg.com/564x/11/a9/47/11a9470bb51ed42a8707e83e0d812241.jpg',
      'https://i.pinimg.com/564x/08/af/d3/08afd39b5c4ef4e484b921255d052035.jpg',
      'https://i.pinimg.com/736x/24/38/53/243853818550842c05c78fca844dc7cc.jpg',
    ],
    disenos: [
      'https://i.pinimg.com/736x/ff/a5/29/ffa52926dd2d5ba40fc6449ae2dd56d4.jpg',
      'https://i.pinimg.com/564x/02/04/84/020484df3bbd4d9c2073a9560cf5a9b3.jpg',
      'https://i.pinimg.com/564x/4f/ff/32/4fff327c8ae9b599c9ecd0844c52dd10.jpg',
      'https://i.pinimg.com/564x/cf/52/32/cf5232364636d7b4886d7e647ac6cd38.jpg',
      'https://i.pinimg.com/564x/0a/10/6d/0a106d56d076cc9ff465dd8d221426a5.jpg',
      'https://i.pinimg.com/564x/23/54/84/23548455bb05678e9b5c0c54e70317a3.jpg',
      'https://i.pinimg.com/564x/93/c7/44/93c7442ee8d599316c965c88f21fac73.jpg',
      'https://i.pinimg.com/736x/d0/8f/19/d08f197341a3a40b6da2ba7b32200db8.jpg',
      'https://i.pinimg.com/564x/24/92/dc/2492dc4db79c6e7702874074b9814cdd.jpg',
      'https://i.pinimg.com/564x/22/da/85/22da85f60896ef267b07a8e60bed8906.jpg',
    ],
    redesSociales: [
      'facebook',
      'Instagram',
      'WhatsApp',
    ],
    logros: [
      'gano mucho',
      'gano mucho mas'
    ]
  },
  {
    name: 'luis',
    photo: imagesList[1].image,
    url: '/luis',
    description: 'Con una habilidad técnica impresionante y una pasión ardiente por el arte oscuro, luis se destaca como un maestro del tatuaje Blackwork. Su enfoque distintivo se centra en crear diseños intrincados y detallados utilizando exclusivamente tinta negra. Cada trazo audaz y cada sombra profunda se combinan para formar composiciones poderosas que evocan un aura de misterio y fascinación. Inspirado por la estética del arte geométrico, el simbolismo esotérico y el folclore oscuro, luis infunde cada tatuaje con una profundidad emocional y una belleza inquietante. Su estudio es un santuario para los amantes del Blackwork, donde la oscuridad se encuentra con la creatividad en un ambiente de camaradería y respeto mutuo. Con luis, cada tatuaje es una declaración audaz de individualidad y fuerza, destinado a dejar una impresión duradera en la piel y en el alma de quienes lo llevan.',
    portafolio: [
      'https://i.pinimg.com/564x/e4/88/37/e48837b8e439f035b05592944fccc0e1.jpg',
      'https://i.pinimg.com/564x/d1/e8/9f/d1e89f34d657313255fec5bf113a48d3.jpg',
      'https://i.pinimg.com/564x/e2/1b/00/e21b005390bc3f0a3491dbc881ce7b98.jpg',
      'https://i.pinimg.com/564x/fb/3d/ba/fb3dba7c5d695a2792d36c4e867ffbb4.jpg',
      'https://i.pinimg.com/564x/99/73/75/9973759945bf23d74d80af033bd717e8.jpg',
      'https://i.pinimg.com/564x/6c/e5/fa/6ce5fa407d7b6a436f313a02f6377073.jpg',
      'https://i.pinimg.com/564x/a8/69/86/a8698649ef9facb1311f7f9e67a877ab.jpg',
      'https://i.pinimg.com/564x/5e/e1/b9/5ee1b9fd966a234ab522c573d7a9f0a6.jpg',
      'https://i.pinimg.com/564x/11/ab/2a/11ab2ac5a96d86b4ae6b33f18c029deb.jpg',
      'https://i.pinimg.com/564x/5e/e3/88/5ee388478bf11303883d9586a7640cb5.jpg',
    ],
    disenos: [
      'https://i.pinimg.com/564x/a4/ee/bd/a4eebd322226cbe1602c1c57647710ea.jpg',
      'https://i.pinimg.com/564x/ef/e2/e4/efe2e401d94f058226122f01c120b4eb.jpg',
      'https://i.pinimg.com/564x/8e/e1/e4/8ee1e419632fcd2e0ebf3de12f01d36c.jpg',
      'https://i.pinimg.com/564x/16/88/d8/1688d82a14db8b9ecc1d875ec6de0cde.jpg',
      'https://i.pinimg.com/564x/3d/12/88/3d1288ff1f068a8436b32bcb3bcc02b6.jpg',
      'https://i.pinimg.com/564x/fa/5d/9f/fa5d9f114e65f6462485c6823aed6eb7.jpg',
      'https://i.pinimg.com/564x/fd/d6/d9/fdd6d986c8800699d2559b802752e920.jpg',
      'https://i.pinimg.com/736x/d5/7f/80/d57f802e73387f09e5774d6f0a53c6e8.jpg',
      'https://i.pinimg.com/564x/b6/55/9b/b6559bb95955e2a2e162a528aaddacf7.jpg',
      'https://i.pinimg.com/736x/d2/9d/91/d29d9153667cc51f732fe8b3e03876d7.jpg',
      'https://i.pinimg.com/564x/05/79/07/057907bdfcffa68d5082d66102fe110a.jpg',
      'https://i.pinimg.com/564x/23/45/65/2345653c526afa8fd2d4e089f0609101.jpg',
    ],
    redesSociales: [
      'facebook',
      'Instagram',
      'WhatsApp',
    ],
    logros: [
      'gano mucho',
      'gano mucho mas'
    ]
  },
  {
    name: 'veronica',
    photo: imagesList[2].image,
    url: '/veronica',
    description: 'Con un pincel en una mano y una paleta de colores vibrantes en la otra, Verónica se destaca como una artista visionaria en el mundo del tatuaje de acuarela. Su creatividad fluye como el agua mientras transforma la piel en lienzos fluidos y expresivos. Cada obra de Verónica es una fusión de técnica y emoción, donde las líneas se mezclan y los colores se funden para crear composiciones dinámicas y llenas de vida. Inspirada por la belleza de la naturaleza y los paisajes oníricos, sus tatuajes parecen capturar la esencia misma del movimiento y la energía. Con un toque magistral, logra capturar la efímera calidad del agua en cada obra, creando un efecto de acuarela que parece fluir y cambiar con cada movimiento del cuerpo. El estudio de Verónica es un santuario de creatividad, donde cada cliente es invitado a sumergirse en un mundo de color y fantasía, y salir transformado con una obra de arte que perdura en la piel para siempre.',
    portafolio: [
      'https://i.pinimg.com/736x/8f/67/9f/8f679f4ea7699a5f5693928ca7080173.jpg',
      'https://i.pinimg.com/564x/3c/08/bf/3c08bfc385bad0a469eaa71710afb07e.jpg',
      'https://i.pinimg.com/564x/fd/6d/4f/fd6d4fc7f21996f13b4b0b54289ad4c9.jpg',
      'https://i.pinimg.com/564x/1d/66/7b/1d667bed2378e0c6acdfc77e667a5a1b.jpg',
      'https://i.pinimg.com/564x/21/a5/41/21a541cc8d8ada82bce4bfd16a97bce2.jpg',
      'https://i.pinimg.com/564x/e5/be/87/e5be8732e90eb2108dd5c6f4baf0c4df.jpg',
      'https://i.pinimg.com/564x/6f/63/98/6f6398154997ae9577c6e1842f333562.jpg',
      'https://i.pinimg.com/564x/4a/ed/e0/4aede0081e89d2f1d81975de6ff7e5d3.jpg',
      'https://i.pinimg.com/564x/79/4b/6e/794b6e81372744397951b2459dd58b07.jpg',
      'https://i.pinimg.com/564x/bf/3c/d4/bf3cd4fb782856b83af79a839d7299fe.jpg',
      'https://i.pinimg.com/564x/b4/44/34/b4443474dacff741cdfb33318dd849d6.jpg',
    ],
    disenos: [
      'https://i.pinimg.com/564x/ae/75/98/ae7598cf03c893a5fccca63bc18f1e4c.jpg',
      'https://i.pinimg.com/564x/5d/08/87/5d08870275da32624b9ccd623c306a34.jpg',
      'https://i.pinimg.com/564x/56/95/c9/5695c9d4d6c8e1c3e71df78377d1302e.jpg',
      'https://i.pinimg.com/564x/7c/4d/34/7c4d34a337503e77f6390e9d250faae3.jpg',
      'https://i.pinimg.com/564x/52/5b/50/525b50c12976867d4b0af2895fa890db.jpg',
      'https://i.pinimg.com/564x/92/89/5f/92895fa4c50b25494c1c2349c405cd73.jpg',
      'https://i.pinimg.com/564x/86/db/21/86db21eedf123269bc3ef17b5b79652b.jpg',
      'https://i.pinimg.com/564x/a5/79/94/a579943208ad83c45c1b21fb3dd08838.jpg',
      'https://i.pinimg.com/564x/14/4b/d4/144bd4b339663331a63cf005177f162f.jpg',
      'https://i.pinimg.com/564x/e3/d8/ab/e3d8ab9325bfa215c8ee8066951ec8be.jpg',
    ],
    redesSociales: [
      'facebook',
      'Instagram',
      'WhatsApp',
    ],
    logros: [
      'gano mucho',
      'gano mucho mas'
    ]
  },
  {
    name: 'yeison',
    photo: imagesList[3].image,
    url: '/yeison',
    description: 'Con una perspectiva única y un enfoque minimalista, Yeison redefine el arte del tatuaje con su estilo distintivo y su visión innovadora. Su destreza radica en simplificar las ideas hasta su esencia más pura, utilizando líneas finas y formas geométricas para crear composiciones sorprendentemente impactantes. Cada diseño de Yeison es una declaración de elegancia y simplicidad, donde cada trazo cuenta una historia propia. Con una paleta de colores cuidadosamente seleccionada y un sentido agudo del equilibrio visual, transforma la piel en una galería de obras maestras modernas. Yeison no solo es un tatuador, sino un arquitecto del minimalismo, cuyas creaciones reflejan una profunda comprensión de la belleza en su forma más pura y refinada. Su estudio es un espacio de tranquilidad y contemplación, donde cada cliente se embarca en un viaje de autodescubrimiento a través de diseños simples pero poderosos.',
    portafolio: [
      'https://i.pinimg.com/564x/d7/85/10/d7851063568c400e3aadd75e350f54f4.jpg',
      'https://i.pinimg.com/564x/58/c6/89/58c689db766211a4a26b8440e19b435c.jpg',
      'https://i.pinimg.com/564x/35/df/22/35df225c8240e832bed6893aa94fcb29.jpg',
      'https://i.pinimg.com/564x/12/83/ea/1283eacff12590161b6e230c40698673.jpg',
      'https://i.pinimg.com/564x/21/27/e4/2127e40c2a45f2ebc4da19e512001ba4.jpg',
      'https://i.pinimg.com/564x/8e/c4/68/8ec4682462fd83589a7b9f308058cd3a.jpg',
      'https://i.pinimg.com/564x/4b/7b/24/4b7b2419bc4700072ef36ce6019ef91a.jpg',
      'https://i.pinimg.com/564x/a1/20/2d/a1202db4f5740894e522ae11e4347f2b.jpg',
      'https://i.pinimg.com/564x/53/d7/30/53d73022d23fd0e2f66c5fd7da2e9222.jpg',
      'https://i.pinimg.com/564x/8a/ea/ac/8aeaacfbe5f4ada7b798d2752837b548.jpg',
    ],
    disenos: [
      'https://i.pinimg.com/564x/96/94/d5/9694d56360a453c3f0b6693b4ada1d08.jpg',
      'https://i.pinimg.com/564x/e7/d6/6e/e7d66e97403c06d4876b7b412f133102.jpg',
      'https://i.pinimg.com/564x/75/db/91/75db911b85aaf41676e2736fc1a87747.jpg',
      'https://i.pinimg.com/564x/ad/54/88/ad54886753f351e131907de9f3100d14.jpg',
      'https://i.pinimg.com/564x/55/1f/c9/551fc9d3b981c57b76fca25483a182cc.jpg',
      'https://i.pinimg.com/564x/48/cd/5e/48cd5e9032b355a7633678f5ce01b34f.jpg',
      'https://i.pinimg.com/564x/34/5b/e3/345be3dd15265dfa6e4be62b1bb2df89.jpg',
      'https://i.pinimg.com/564x/8b/a3/1a/8ba31ab2c44f3fd29b8ec81c3219ee86.jpg',
      'https://i.pinimg.com/564x/dc/64/10/dc6410ad2009028415d15620dd0eb048.jpg',
      'https://i.pinimg.com/564x/07/7a/91/077a91488346391d6126ec474a20eca3.jpg',
    ],
    redesSociales: [
      'facebook',
      'Instagram',
      'WhatsApp',
    ],
    logros: [
      'gano mucho',
      'gano mucho mas'
    ]
  },
  {
    name: 'juan',
    photo: imagesList[4].image,
    url: '/juan',
    description: 'Con un estilo arraigado en la tradición y la historia del tatuaje, Juan es un maestro del arte tradicional. Su amor por el oficio se refleja en cada trazo audaz y en cada diseño icónico que crea. Inspirado por la estética clásica de los tatuajes marineros y la cultura del viejo mundo, Juan infunde sus obras con un sentido de nostalgia y autenticidad. Sus tatuajes están llenos de símbolos atemporales y motivos tradicionales, desde rosas y golondrinas hasta anclas y corazones ardientes. Con una habilidad experta en líneas gruesas y colores vibrantes, cada pieza de Juan parece saltar de la piel con vida propia. Su estudio es un refugio para los amantes del estilo tradicional, donde la camaradería y la pasión por el arte se entrelazan en un ambiente auténtico y acogedor. Con Juan, cada tatuaje no solo es una obra de arte, sino también un tributo a la rica historia y la herencia perdurable del tatuaje tradicional.',
    portafolio: [
      'https://i.pinimg.com/564x/4a/ae/bf/4aaebf49503323125ce6e1135fb53d86.jpg',
      'https://i.pinimg.com/564x/72/4c/f3/724cf3610b17aa07c261e7d7c6684c3d.jpg',
      'https://i.pinimg.com/564x/82/3a/0f/823a0f123023ca55d2ec0e9fa06e4cee.jpg',
      'https://i.pinimg.com/564x/19/5e/58/195e5838048b7c3d504805bdefabe2e8.jpg',
      'https://i.pinimg.com/564x/8a/8f/34/8a8f3463c3b152b842b65aaaa35470ae.jpg',
      'https://i.pinimg.com/564x/14/c1/28/14c128bf5df38f34676d1a5cabd47ce9.jpg',
      'https://i.pinimg.com/564x/42/c1/07/42c107104923779f82bd4ff7d1f1ab60.jpg',
      'https://i.pinimg.com/564x/98/c6/3f/98c63f057db7041ef8bfb6b041e6c1a1.jpg',
      'https://i.pinimg.com/564x/e5/b9/37/e5b9371767ce60344b995f3e5f24d73a.jpg',
      'https://i.pinimg.com/564x/7d/ca/3c/7dca3c56b99fd56bfbe3a510a841490f.jpg',
    ],
    disenos: [
      'https://i.pinimg.com/564x/34/f4/27/34f4277b0fba5aca51dc66fa1d9de481.jpg',
      'https://i.pinimg.com/564x/c6/f3/d4/c6f3d4f1194662cd6083f8276b4f947c.jpg',
      'https://i.pinimg.com/736x/98/47/f9/9847f963a56fe21df5641a2c0eda49af.jpg',
      'https://i.pinimg.com/564x/59/ff/cf/59ffcf853520cd938831979c48292352.jpg',
      'https://i.pinimg.com/564x/4d/8f/16/4d8f166419275f37da38d9af99ae7e12.jpg',
      'https://i.pinimg.com/564x/9d/3c/ea/9d3cea5eeaa7716d8b3c0161512138e5.jpg',
      'https://i.pinimg.com/564x/57/56/f1/5756f1b8565162a8755494558945942e.jpg',
      'https://i.pinimg.com/564x/c5/72/f2/c572f2d8f5d3f333a4142f8545710c3f.jpg',
      'https://i.pinimg.com/564x/7e/dd/22/7edd227372ad2d3103fa0af1c97f088e.jpg',
      'https://i.pinimg.com/564x/9c/c2/9a/9cc29a636f72a96bbd4974a2eb9b7cbd.jpg',
    ],
    redesSociales: [
      'facebook',
      'Instagram',
      'WhatsApp',
    ],
    logros: [
      'gano mucho',
      'gano mucho mas'
    ]
  },
];
  