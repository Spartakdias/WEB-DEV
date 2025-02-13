import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: { 
    name: string, 
    price: number, 
    images: string[], 
    description: string, 
    showDescription: boolean, 
    link: string, 
    rating: number,
    currentImageIndex: number
  }[];

  selectedProduct: any;

  constructor() {
    this.products = [
      { 
        name: 'Playstation 5', 
        price: 310000 , 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h00/63948657491998.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h2b/h90/63948654936094.jpg?format=gallery-medium'
        ], 
        description: 'С Sony PlayStation 5 вы ощутите истинную силу игры Молниеносная скорость загрузки благодаря сверхскоростному накопителю SSD, невероятный эффект погружения благодаря тактильной отдаче, адаптивным спусковым кнопкам и 3D-звуку, а также потрясающие игры нового поколения для PlayStation 5.', 
        showDescription: false, 
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?srsltid=AfmBOoq-doiYIf18xwQEMW_qSqfTOkWmkv9uXPMgggLjg5TZdtHQSdTb0', 
        rating: 4.5,
        currentImageIndex: 0
      },
      { 
        name: 'Смарт-часы Apple Watch SE 2 Gen (2023)', 
        price: 108000, 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h15/hf9/84387838787614.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h11/h33/84387838853150.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p89/p64/19356526.png?format=gallery-medium'
        ], 
        description: 'Эти смарт-часы предлагают тот же высококлассный процессор Apple S8 SiP, что и в Apple Watch Series 8, обеспечивая высокую производительность без зависаний, широкий функционал, управление музыкой возможность бесконтактной оплаты часами и персонального помощника в тренировках и поддержании здоровья. Несмотря на более доступную цену, SE 2 не уступает флагманским гаджетам Apple в основных функциях, что делает их привлекательным выбором для широкого круга пользователей.', 
        showDescription: false, 
        link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2023-gps-s-m-40-mm-starlight-bezhevyi-114165934/?c=750000000', 
        rating: 4.5,
        currentImageIndex: 0
      },
      { 
        name: 'Мобильный телефон Nokia 105 2019 DS розовый', 
        price: 3659, 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hc0/h44/63789984055326.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0f/63789984579614.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0e/h29/63789985103902.jpg?format=gallery-medium'
        ], 
        description: 'Не ограничивайте себя в общении с Nokia 105 2019 DS. Для отображения информации телефон оснащен дисплеем с диагональю 1.77 дюймов и разрешением 128x160. Удобный корпус и ёмкая батарея 800 мАч позволяют с комфортом вести бесконечно длинные разговоры. На стильном современном корпусе из поликарбоната не остаются следы от ударов и падений. На телефоне достаточно места для хранения 2000 контактов и 500 SMS. В свободное от разговоров время можно развлечься с помощью игр и радио.', 
        showDescription: false, 
        link: 'https://kaspi.kz/shop/p/nokia-105-2019-ds-rozovyi-8801086/?c=750000000', 
        rating: 4,
        currentImageIndex: 0
      },
      { 
        name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', 
        price: 652812, 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'
        ], 
        description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой', 
        showDescription: false, 
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000', 
        rating: 3,
        currentImageIndex: 0
      },
      { 
        name: 'Смартфон Samsung Galaxy S24 FE 5G 8 ГБ/256 ГБ черный', 
        price: 284950, 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p87/pc0/1610158.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p9c/pc3/1610165.png?format=gallery-medium'
        ], 
        description: 'Добро пожаловать в эру мобильного AI. С Galaxy S24 | S24+ в руках вы сможете раскрыть совершенно новые уровни творчества, продуктивности и возможностей — начиная с самого важного устройства в вашей жизни. С вашего смартфона.', 
        showDescription: false, 
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000', 
        rating: 5,
        currentImageIndex: 0
      },
      { 
        name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/128 ГБ темно-синий', 
        price: 157889, 
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdc/hf3/85428948664350.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h25/h62/85428948795422.png?format=gallery-medium'
        ], 
        description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. ', 
        showDescription: false, 
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000', 
        rating: 5,
        currentImageIndex: 0
      },
    ];
  }

  toggleDescription(product: any) {
    product.showDescription = !product.showDescription;
    this.selectedProduct = product.showDescription ? product : null;
  }

  redirectToLink(link: string) {
    window.open(link, "_blank");
  }

  shareOnWhatsApp(link: string) {
    let whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    window.open(whatsappUrl, "_blank");
  }

  shareOnTelegram(link: string) {
    let telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, "_blank");
  }

  nextImage(product: any) {
    product.currentImageIndex = (product.currentImageIndex + 1) % product.images.length;
  }

  prevImage(product: any) {
    product.currentImageIndex = (product.currentImageIndex - 1 + product.images.length) % product.images.length;
  }

  closeDescription() {
    this.selectedProduct = null;
}

}
