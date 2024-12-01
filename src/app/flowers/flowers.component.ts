import { Component } from '@angular/core';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrl: './flowers.component.scss'
})
export class FlowersComponent {
  bouquets = [
    {
      img: 'https://emova-aunomdelarose-storage.omn.proximis.com/Imagestorage/images/454/546/66f124cbd0373_ANR_JEANNE_EXCEPTIONNEL_copie.jpg',
      name: 'Plaisir',
      description: '12 roses roses - sans vase',
      price: '115DT'
    },
    {
      img: 'https://emova-aunomdelarose-storage.omn.proximis.com/Imagestorage/images/454/546/66f125048eeaa_ANR_LOUISE_EXCEPTIONNEL_copie.jpg',
      name: 'Saison',
      description: '12 roses blanches - sans vase',
      price: '120DT'
    },
    {
      img: 'https://emova-aunomdelarose-storage.omn.proximis.com/Imagestorage/images/454/546/66f124a1e7431_ANR_CAMILLE_GENEREUX_copie.jpg',
      alt: 'Saison',
      title: 'Saison',
      description: '12 roses rouges',
      price: 125
    },
    {
      img: 'https://emova-aunomdelarose-storage.omn.proximis.com/Imagestorage/images/454/546/66263c96eb23a_ANR_24_03_6313_Printemps_FicheProd_910x10904.jpg',
      alt: 'Saison',
      title: 'Printemps',
      description: '15 roses multicolores',
      price: 130
    },
    {
      img: 'https://emova-aunomdelarose-storage.omn.proximis.com/Imagestorage/images/454/546/6706726c31884_Anr_24_10_6509_Bundle_910x10902.jpg',
      alt: 'Saison',
      title: 'Fleurie',
      description: '10 roses jaunes',
      price: 110
    },
    {
      img: 'https://emova-aunomdelarose-storage.omn.proximis.com/Imagestorage/images/454/546/66192fa988b0e_ANR_24_03_6313_Printemps_FicheProd_910x109020.jpg', alt: 'Saison',
      title: 'Romantique',
      description: '18 roses rouges',
      price: 150
    },
    {
      img: 'https://caliptus.fr/2779-home_default/bouquet-merveille.jpg',
      alt: 'Saison',
      title: 'Merveille',
      description: '14 roses roses',
      price: 140
    },
    {
      img: 'https://caliptus.fr/2636-home_default/bouquet-de-tulipes.jpg', alt: 'Saison',
      title: 'Tulipes',
      description: '20 tulipes multicolores',
      price: 135
    },
    {
      img: 'https://caliptus.fr/2625-home_default/bouquet-bonheur-blanc.jpg',
      alt: 'Saison',
      title: 'Bonheur Blanc',
      description: '12 roses blanches - sans vase',
      price: 125
    },
    {
      img: 'https://caliptus.fr/2662-home_default/bouquet-champetre-m.jpg',
      alt: 'Saison',
      title: 'Champêtre',
      description: '15 roses champêtres',
      price: 140
    },
    {
      img: 'https://caliptus.fr/1490-home_default/bouquet-de-germinis.jpg',
      alt: 'Saison',
      title: 'Germinis',
      description: '18 germinis blancs',
      price: 110
    },
    {
      img: 'https://caliptus.fr/681-home_default/le-bouquet-paon.jpg',
      alt: 'Saison',
      title: 'Paon',
      description: '20 roses variées',
      price: 160
    },
    {
      img: 'https://caliptus.fr/2718-home_default/bouquet-naissance.jpg',
      alt: 'Saison',
      title: 'Naissance',
      description: '12 roses blanches - sans vase',
      price: 125
    },
    {
      img: 'https://caliptus.fr/1518-home_default/bouquet-de-lys-et-sa-bougie.jpg',
      alt: 'Saison',
      title: 'Lys et Bougie',
      description: '12 lys blancs avec bougie',
      price: 170
    },
    {
      img: 'https://caliptus.fr/2181-home_default/bouquet-purete-l.jpg',
      alt: 'Saison',
      title: 'Pureté',
      description: '15 roses blanches',
      price: 140
    },
    {
      img: 'https://caliptus.fr/2374-home_default/bouquet-saffrona.jpg',
      alt: 'Saison',
      title: 'Saffrona',
      description: '18 roses saffron',
      price: 145
    },
    {
      img: 'https://caliptus.fr/2104-home_default/pack-bouquet-senteur-romantique.jpg',
      alt: 'Saison',
      title: 'Senteur Romantique',
      description: '12 roses rouges et blanches',
      price: 130
    },
    {
      img: 'https://caliptus.fr/2670-home_default/bouquet-champetre-l.jpg',
      alt: 'Saison',
      title: 'Champêtre',
      description: '18 roses champêtres',
      price: 150

    },
    { img: 'https://caliptus.fr/2771-home_default/bouquet-automne.jpg', alt: 'Douceur', title: 'Douceur', 
      description: '15 roses rouges - sans vase', 
      price: 140
    },

    // Ajoutez tous les autres bouquets ici
  ];
}
