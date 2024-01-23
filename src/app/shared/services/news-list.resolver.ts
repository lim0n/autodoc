import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of} from 'rxjs';
import { IPublicationsResponse } from '@shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsListResolver implements Resolve<IPublicationsResponse> {

  resolve(): Observable<IPublicationsResponse> {

    return of(
      {
        "news": [
          {
            "id": 7865,
            "title": "KG Mobility анонсировал новые Torres и Torres EVX",
            "description": "Компания KG Mobility, ранее известная как  SsangYong, опубликовала информацию о Torres ",
            "publishedDate": "2024-01-22T00:00:00",
            "url": "avto-novosti/kg_mobility_torres",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/kg_mobility_torres",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/3890751905_9.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7862,
            "title": "MG 3 2024 дебютирует 26 февраля",
            "description": "Долгожданное третье поколение MG 3 дебютирует 26 февраля ",
            "publishedDate": "2024-01-19T00:00:00",
            "url": "avto-novosti/mq_3",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/mq_3",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/3632382737_1.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7861,
            "title": "Ford Kuga получил улучшенную развлекательную систему",
            "description": "Американский автопроизводитель Ford обновил модель Kuga для европейского рынка",
            "publishedDate": "2024-01-18T00:00:00",
            "url": "avto-novosti/ford_kuga",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/ford_kuga",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/3544793028_2.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7860,
            "title": "Открытие магазина в г. Москва",
            "description": "Открытие магазина в г. Москва",
            "publishedDate": "2024-01-18T00:00:00",
            "url": "novosti-kompanii/1790",
            "fullUrl": "https://www.autodoc.ru/novosti-kompanii/1790",
            "titleImageUrl": "https://file.autodoc.ru/news/foto_magazinov/magazin_moskva_boitsovskaya.jpg",
            "categoryType": "Новости компании"
          },
          {
            "id": 7859,
            "title": "В Индии дебютировала Tata Punch EV на новой платформе",
            "description": "Punch – самый маленький и самый доступный кроссовер Tata в Индии",
            "publishedDate": "2024-01-17T00:00:00",
            "url": "avto-novosti/tata_punch",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/tata_punch",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/3455253259_1.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7857,
            "title": "Встречайте новый Cadillac XT5 2025",
            "description": "В Китае автопроизводители должны делиться некоторыми подробностями о новых моделях еще до их презентации",
            "publishedDate": "2024-01-16T00:00:00",
            "url": "avto-novosti/cadillac_xt5",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/cadillac_xt5",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/3368708475_3.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7856,
            "title": "Nissan Ariya Nismo выдаёт до 429 л.с.",
            "description": "Представляем вашему вниманию Nissan Ariya Nismo ",
            "publishedDate": "2024-01-15T00:00:00",
            "url": "avto-novosti/nissan_ariya_nismo",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/nissan_ariya_nismo",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/3305851344_1.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7855,
            "title": "Toyota GR Yaris 2024 получила 8-ступенчатый автомат",
            "description": "На Токийском автосалоне состоялась премьера горячего хэтчбека Toyota GR Yaris 2024",
            "publishedDate": "2024-01-12T00:00:00",
            "url": "avto-novosti/toyota_yaris_24",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/toyota_yaris_24",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/3022936533_20.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7851,
            "title": "На выставке CES представлен электрический седан из Турции",
            "description": "Лас-Вегас находится в тысячах километрах от Турции",
            "publishedDate": "2024-01-11T00:00:00",
            "url": "avto-novosti/torry_ces",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/torry_ces",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/2940219093_3.jpg",
            "categoryType": "Автомобильные новости"
          },
          {
            "id": 7850,
            "title": "Mullen Five RS — новый кроссовер мощностью 1000 л.с.",
            "description": "На выставке Consumer Electronics Show (CES) в Лас-Вегасе один из автомобильных стартапов (компания Mullen) представила новинку",
            "publishedDate": "2024-01-10T00:00:00",
            "url": "avto-novosti/mullen__five",
            "fullUrl": "https://www.autodoc.ru/avto-novosti/mullen__five",
            "titleImageUrl": "https://file.autodoc.ru/news/avto-novosti/2858773046_4.jpg",
            "categoryType": "Автомобильные новости"
          }
        ],
        "totalCount": 822
      }
    );
  }
}
