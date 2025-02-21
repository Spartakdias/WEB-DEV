export interface Product {
    link: string;
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    likes: number;
    liked: boolean;
    pressed: boolean;
  }
  export interface ProductList {
    category: string;
    productItems: Array<Product>;
  }
  
  export const ProductsList: ProductList[] = [
    { category: "Phones",
      productItems: [ {
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
        id: 1,
        name: 'Apple iPhone 15 Pro Max',
        price: 799,
        description: 'The Apple iPhone 15 Pro Max is a heavy-duty flagship made of titanium. The latest Apple A17 Pro chip is responsible for the uncompromising performance of the smartphone.',
        rating: 5.0,
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium",
        likes: 0,
        liked: false,
        pressed: false
      },
        {
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
          id: 2,
          name: 'Apple iPhone 13',
          price: 699,
          description: 'The Apple iPhone 13 has a 6.1-inch Super Retina XDR display that has an incredibly high pixel density - photos, videos, and text look amazingly sharp. ',
          rating: 4.7,
          likes: 0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
          id: 3,
          name: 'Apple iPhone 14',
          price: 299,
          description: 'RAM size: 6GB,Processor: 6-core Apple A15 Bionic, internal memory: 128.0 GB,battery capacity: 3279.0 mAh',
          rating: 5.0,
          likes: 0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
          id: 4,
          name: 'Xiaomi Redmi 12',
          price: 213,
          description: 'diagonal: 6.79 inches, RAM size: 8 GB, internal memory: 256.0 GB,battery capacity: 5000.0 mAh',
          rating: 3.5,
          likes: 0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/h0c/h33/82304907214878.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
          id: 5,
          name: 'Samsung Galaxy A24',
          price: 715,
          description: 'diagonal: 6.5 inches, RAM size: 6 GB, processor: 8-core MediaTek Helio G99, internal memory: 128.0 GB, battery capacity: 5000.0 mAh',
          rating: 4.8,
          likes: 0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
      ]
    },
  
    { category: "Keyboards",
      productItems:[ {
        link: 'https://kaspi.kz/shop/p/t-wolf-tf-800-chernyi-106467552/?c=750000000',
        id: 1,
        likes: 0,
        name: 'T-WOLF TF-800',
        price: 810,
        description: 'design: gaming, type: optical, purpose: for desktop computer, connection type: wired',
        rating: 4.8,
        image: "https://resources.cdn-kaspi.kz/img/m/p/pff/pd5/24827887.jpg?format=gallery-medium",
        liked: false,
        pressed: false
      },
        {
          link: 'https://kaspi.kz/shop/p/leaven-k620-chernyi-106785769/?c=750000000',
          id: 2,
          likes: 0,
          name: 'LEAVEN K620',
          price: 970,
          description: 'design: gaming, type: optical, purpose: for desktop computer, connection type: wired',
          rating: 4.9,
          image: "https://resources.cdn-kaspi.kz/img/m/p/p6e/p50/24828066.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/akko-3061-world-tour-tokyo-r2-v3-cream-yellow-rozovyi-112789833/?c=750000000',
          id: 3,
          likes: 0,
          name: 'Akko 3061 World Tour Tokyo R2',
          price: 2498,
          description: 'design: gaming, type: optical, purpose: for desktop computer, connection type: wired',
          rating: 5.0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hdb/hb5/83080421834782.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/crown-cmkg-403-chernyi-9200416/?c=750000000',
          id: 4,
          likes: 0,
          name: 'CROWN CMKG-403',
          price: 610,
          description: 'design: gaming, type: mechanical, purpose: for desktop computer, connection type: wired',
          rating: 4.6,
          image: "https://resources.cdn-kaspi.kz/img/m/p/he0/h31/63769168936990.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/akko-3061-world-tour-tokyo-r2-v3-cream-yellow-rozovyi-112789833/?c=750000000',
          id: 5,
          likes: 0,
          name: 'Logitech G413 TKL SE 920-010447',
          price: 3242,
          description: 'design: gaming, type: mechanical, purpose: for desktop computer, connection type: wired',
          rating: 5.0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/p75/p16/24872732.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        }
      ]
    },
  
    { category: "Smartwatches",
      productItems:[ {
        link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
        id: 1,
        likes: 0,
        name: 'Apple Watch SE',
        price: 1303,
        description: 'Large Retina display to fit everything you need. Advanced sensors to track any physical activity. Useful features that help you monitor your health and keep you safe. The Apple Watch Series SE is a watch you\'ll appreciate every second of.',
        rating: 5.0,
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium",
        liked: false,
        pressed: false
      },
        {
          link: 'https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000',
          id: 2,
          likes: 0,
          name: 'COLMI P28 Plus',
          price: 828,
          description: 'platform support: Android, iOS\n' +
              'case color: black\n' +
              'case shape: rectangular\n' +
              'interfaces: Bluetooth\n' +
              'working time: 3-7 days',
          rating: 3.9,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hb0/h7e/63639753555998.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000',
          id: 3,
          likes: 0,
          name: 'Galaxy Watch 4 Classic SM-R890NZKACIS',
          price: 446,
          description: 'Samsung smart watch is not just a gadget, but your faithful companion on the way to achieving goals and self-improvement.\n' +
              'Get the help of a personal trainer, doctor and analyst right here and now with the Galaxy Watch4 smart watch.\n' +
              'Listen to your body.',
          rating: 4.7,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/huawei-watch-gt-4-46-mm-serebristyi-chernyi-113401540/?c=750000000',
          id: 4,
          likes: 0,
          name: 'Huawei Watch GT 4',
          price: 610,
          description: 'platform support: Android, iOS\n' +
              'case material: stainless steel\n' +
              'case color: silver-black\n' +
              'case shape: round\n' +
              'interfaces: Bluetooth\n' +
              'screen technology: AMOLED',
          rating: 4.6,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hc8/h20/83882559864862.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/yunteko-dks10-chernyi-chernyi-110650648/?c=750000000',
          id: 5,
          likes: 0,
          name: 'YUNTEKO DKS10',
          price: 3242,
          description: 'YUNTEKO DKS10/HT17 smart watch is designed for everyday and active lifestyle, mountain hiking, extreme sports, hiking, as well as for normal everyday use in the city.',
          rating: 4.0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/h64/h51/86251386077214.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        }
      ]
    },
  
    { category: "headphones",
      productItems:[ {
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
        id: 1,
        likes: 0,
        name: 'Apple AirPods Pro 2nd generation',
        price: 1113,
        description: 'type: headphones\n' +
            'type: in-ear\n' +
            'connection: wireless\n' +
            'acoustic design type: closed\n' +
            'type of attachment: no attachment\n' +
            'active noise reduction system: Yes\n' +
            'microphone: Yes',
        rating: 5.0,
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
        liked: false,
        pressed: false
      },
        {
          link: 'https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000',
          id: 2,
          likes: 0,
          name: 'TWS F9-5',
          price: 828,
          description: 'TWS F9-5 Wireless Bluetooth Headphones They are very practical, completely wireless and do not need a cable, thus giving the user complete freedom of movement. You will discover the best 8D surround sound quality. The headphones are made of top quality materials, so we can enjoy a natural and great sound. An additional advantage is the noise canceling option, which allows you to get even better sound quality. Great looks and comfort will make you stay with them.',
          rating: 3.9,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hf8/hcc/64254215946270.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
          id: 3,
          likes: 0,
          name: 'Marshall Major IV',
          price: 670,
          description: 'MARSHALL Major IV Bluetooth headset with its features will give you comfortable listening to music of different genres. This model is based on dynamic drivers with a diaphragm diameter of 40 mm, which together with a wide frequency range and high sensitivity can provide high-quality and rich sound. In addition, the headphones are equipped with a microphone, so they can also be used for telephone conversations. Connection to devices in this model can be done both wired and wirelessly - with the help of energy-efficient Bluetooth 5.0 protocol. Another feature is the large rechargeable battery that can provide up to 80 hours of playback time.',
          rating: 4.7,
          image: "https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaacis-chernyi-106128763/?c=750000000',
          id: 4,
          likes: 0,
          name: 'Samsung Galaxy Buds2 Pro (SM-R510NZAACIS)',
          price: 610,
          description: "Every note sounds alive and you can enjoy crystal clear sound through your Samsung Galaxy device. Samsung's updated codec for seamless connectivity encodes 24-bit sound and decodes it through the Galaxy Buds2 Pro, maintaining the same 24-bit high quality.",
          rating: 5.0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hc2/h75/64421533548574.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        },
        {
          link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000',
          id: 5,
          likes: 0,
          name: 'JBL Tune 510BT',
          price: 1899,
          description: 'The JBL Tune 510BT headphones let you enjoy powerful bass thanks to JBL Pure Bass wireless technology. These easy-to-use headphones last up to 40 hours on a single battery charge, and by plugging in the USB-C charging cable for just five minutes, you\'ll get another 2 hours of playback.',
          rating: 4.0,
          image: "https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium",
          liked: false,
          pressed: false
        }
      ]
    }
  ];
  
  
  
