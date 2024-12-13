import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktails } from '../interface/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public $cocktails: BehaviorSubject<Cocktails[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://media.istockphoto.com/id/513583922/fr/photo/sombre-et-orageuse-cocktail-%C3%A0-base-de-rhum.webp?a=1&b=1&s=612x612&w=0&k=20&c=LltpV20jLN9aXD3IvEznxERGnNDHDJ81_CJyuyddytg=',
      description:
        'Un cocktail cubain rafraîchissant à base de rhum, citron vert, menthe, sucre et eau gazeuse.',
      ingredients: [
        { name: 'Rhum', quantity: 50 },
        { name: 'Citron vert', quantity: 1 },
        { name: 'Menthe', quantity: 10 },
        { name: 'Sucre', quantity: 2 },
        { name: 'Eau gazeuse', quantity: 100 },
      ],
    },
    {
      name: 'Pina Colada',
      img: 'https://images.unsplash.com/photo-1601925088924-aad72e86b894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWxzfGVufDB8fDB8fHww',
      description:
        'Un cocktail tropical fait de rhum, jus d’ananas et crème de coco.',
      ingredients: [
        { name: 'Rhum', quantity: 50 },
        { name: 'Jus d’ananas', quantity: 100 },
        { name: 'Crème de coco', quantity: 50 },
      ],
    },
    {
      name: 'Margarita',
      img: 'https://images.unsplash.com/photo-1598679253583-75a8b3d1912b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ja3RhaWxzfGVufDB8fDB8fHww',
      description:
        'Un cocktail mexicain à base de tequila, triple sec et jus de citron vert, servi avec un bord salé.',
      ingredients: [
        { name: 'Tequila', quantity: 50 },
        { name: 'Triple sec', quantity: 25 },
        { name: 'Jus de citron vert', quantity: 25 },
      ],
    },
    {
      name: 'Daiquiri',
      img: 'https://images.unsplash.com/photo-1618799805265-4f27cb61ede9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Un cocktail classique mélangeant rhum, jus de citron vert et sucre.',
      ingredients: [
        { name: 'Rhum', quantity: 50 },
        { name: 'Jus de citron vert', quantity: 25 },
        { name: 'Sucre', quantity: 2 },
      ],
    },
    {
      name: 'Cosmopolitan',
      img: 'https://images.unsplash.com/photo-1541288892379-c987c60cd049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Un cocktail élégant à base de vodka, triple sec, jus de canneberge et jus de citron vert.',
      ingredients: [
        { name: 'Vodka', quantity: 50 },
        { name: 'Triple sec', quantity: 25 },
        { name: 'Jus de canneberge', quantity: 100 },
        { name: 'Jus de citron vert', quantity: 25 },
      ],
    },
    {
      name: 'Old Fashioned',
      img: 'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Un cocktail classique à base de bourbon ou de seigle, de sucre, d’angostura bitters et d’un zeste d’orange.',
      ingredients: [
        { name: 'Bourbon', quantity: 50 },
        { name: 'Sucre', quantity: 1 },
        { name: 'Angostura bitters', quantity: 2 },
        { name: 'Zeste d’orange', quantity: 1 },
      ],
    },
    {
      name: 'Mai Tai',
      img: 'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Un cocktail tropical à base de rhum, curaçao orange, sirop d’orgeat et jus de citron vert.',
      ingredients: [
        { name: 'Rhum', quantity: 50 },
        { name: 'Curaçao orange', quantity: 25 },
        { name: 'Sirop d’orgeat', quantity: 15 },
        { name: 'Jus de citron vert', quantity: 25 },
      ],
    },
    {
      name: 'Bloody Mary',
      img: 'https://images.unsplash.com/photo-1618799805265-4f27cb61ede9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvY2t0YWlsc3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Un cocktail salé et épicé à base de vodka, jus de tomate, citron, sel et épices.',
      ingredients: [
        { name: 'Vodka', quantity: 50 },
        { name: 'Jus de tomate', quantity: 100 },
        { name: 'Citron', quantity: 1 },
        { name: 'Sel', quantity: 1 },
        { name: 'Épices', quantity: 5 },
      ],
    },
  ] as Cocktails[]);

  public $cocktailSelected: BehaviorSubject<Cocktails> = new BehaviorSubject(
    this.$cocktails.value[0]
  );

  public selectCocktail(index: number) {
    this.$cocktailSelected.next(this.$cocktails.value[index]);
  }

  constructor() {}
}
