import { Component, Input } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  books: Book[] = [
    {
      title: 'Дюна',
      author: 'Френк Герберт',
      cover: '../../assets/cover.jpg',
      description: 'Дюна - науково-фантастичний роман Френка Герберта, опублікований у 1965 році.',
    },
    {
      title: 'Убити пересмішника',
      author: 'Харпер Лі',
      cover: '../../assets/cover.jpg',
      description: 'Убити пересмішника - роман Харпер Лі, опублікований у 1960 році.',
      rating: 4.5
    },
    {
      title: '1984',
      author: 'Джордж Орвелл',
      cover: '../../assets/cover.jpg',
      description: '1984 - антиутопічний роман Джорджа Орвелла, опублікований у 1949 році.',
      rating: 4.8
    },
    {
      title: 'Гордість та упередження',
      author: 'Джейн Остін',
      cover: '../../assets/cover.jpg',
      description: 'Гордість та упередження - роман Джейн Остін, опублікований у 1813 році.',
      rating: 4.6
    },
    {
      title: 'Великий Гетсбі',
      author: 'Френсіс Скотт Фіцджеральд',
      cover: '../../assets/cover.jpg',
      description: 'Великий Гетсбі - роман Френсіс Скотт Фіцджеральд, опублікований у 1925 році.',
      rating: 4.4
    },
    {
      title: 'Мудра нова світ',
      author: 'Олдос Гакслі',
      cover: '../../assets/cover.jpg',
      description: 'Мудра нова світ - антиутопічний роман Олдоса Гакслі, опублікований у 1932 році.',
      rating: 4.1
    },
    {
      title: 'Володар перснів',
      author: 'Джон Р. Р. Толкін',
      cover: '../../assets/cover.jpg',
      description: 'Володар перснів - фентезі-роман Дж. Р. Р. Толкіна, опублікований у трьох томах з 1954 по 1955 рік.',
      rating: 4.9
    },
    {
      title: 'Хоббіт, або Туди і звідти',
      author: 'Джон Р. Р. Толкін',
      cover: '../../assets/cover.jpg',
      description: 'Хоббіт, або Туди і звідти - фентезі-роман Дж. Р. Р. Толкіна, опублікований у 1937 році.',
      rating: 4.7
    },
    {
      title: 'Гаррі Поттер і філософський камінь',
      author: 'Джоан Роулінг',
      cover: '../../assets/cover.jpg',
      description: 'Гаррі Поттер і філософський камінь - фентезі-роман Джоан Роулінг, опублікований у 1997 році.',
      rating: 4.6
    },
    {
      title: 'Код да Вінчі',
      author: 'Ден Браун',
      cover: '../../assets/cover.jpg',
      description: 'Код да Вінчі - трилер Дена Брауна, опублікований у 2003 році.',
      rating: 4.3
    }
  ];
}
