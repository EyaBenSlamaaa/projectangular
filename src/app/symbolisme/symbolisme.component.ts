import { Component } from '@angular/core';

@Component({
  selector: 'app-symbolisme',
  templateUrl: './symbolisme.component.html',
  styleUrl: './symbolisme.component.scss'
})
export class SymbolismeComponent {
  flowers = [
    {
      color: 'Rouge: la passion',
      description: 'Les fleurs rouges sont naturellement associées à l’amour, l’érotisme et la passion,C’est la couleur du pouvoir, du feu et du sang. Un bouquet rouge se prête donc à toutes les déclarations du sebtiment amoureux , du coup de foudre a l’idylle passionnée:la couleur ieale pour offrir des fleurs à la saint valentin .',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpL_5TcFtQPTzJlnShsb2nw_heekKx6nCNdg&s',
      buttonLabel: 'Nos fleurs rouges'
    },
    {
      color: 'Blanc: la pureté',
      description: ' Les fleurs blanches sont traditionnellement associées au respect et à la pureté. C’est pourquoi elles s’offrent volontiers lors des cérémonies, pour des fiançailles ou un mariage. Un bouquet blanc adresse avec franchise un message de confiance et de fidélité.',
      image: 'https://caliptus.fr/2675-home_default/bouquet-chic-l-et-sa-bougie.jpg',
      buttonLabel: 'Nos fleurs blanches'
    },
    {
      color: 'Vert : la naturel',
      description: 'C’est la couleur la plus présente dans la nature et dans les compositions florales. Bio ou écolo, le vert est associé à l’abondance, l’espoir et la sincérité. Les bouquets où prédomine le vert sont « champêtres » et expriment les sentiments et les émotions en toute simplicité.',
      image: 'https://caliptus.fr/1518-home_default/bouquet-de-lys-et-sa-bougie.jpg',
      buttonLabel: 'Nos fleurs vertes'
    },
    {
      color: 'Jaune : l’énergie',
      description: ' Si les fleurs jaunes sont les plus visibles dans la nature, c’est parce qu’elles sont à l’image de cet astre indispensable à la vie : le soleil. Offrir un bouquet de fleurs jaunes, c’est transmettre un message qui déborde d’optimisme et d’énergie pour l’avenir.',
      image: 'https://www.interflora.fr/blog/wp-content/uploads/fleurs-jaunes.jpg',
      buttonLabel: 'Nos fleurs jaunes'
    },
    {
      color: 'Rose : la tendresse',
      description: ' Les fleurs roses sont l’apparat de la jeunesse et de la séduction. C’est la couleur des petites filles, des contes de fées et des sucreries. Quelle que soit l’occasion, un bouquet rose vante les charmes de la féminité. Un message de tendresse offert tout en douceur.',
      image: 'https://www.interflora.fr/blog/wp-content/uploads/lisianthus-rose-1.jpg',
      buttonLabel: 'Nos fleurs roses'
    },
    {
      color: 'Orange : la joie de vivre',
      description: 'Très tendance dans les années 60 et 70, la couleur orange est aujourd’hui revenue à la mode. C’est le ton de l’insouciance, de la joie de vivre, mais aussi du réconfort. Offrir un bouquet de fleurs orange, c’est transmettre un vœu sincère de partage et de bonheur.',
      image: 'https://www.interflora.fr/blog/wp-content/uploads/fleurs-orange.jpg',
      buttonLabel: 'Nos fleurs oranges'
    },
    {
      color: 'Bleu : la poésie',
      description: ' Les fleurs bleues ont les tiges sur terre et les pétales dans les nuages. C’est la couleur du rêve, de l’évasion, du voyage. Offrir un bouquet de fleurs bleues, c’est adresser un message personnel, une invitation très poétique à découvrir ensemble de nouveaux horizons.',
      image: 'https://www.interflora.fr/blog/wp-content/uploads/fleurs-bleues.jpg',
      buttonLabel: 'Nos fleurs bleues'
    }
  ];
}
