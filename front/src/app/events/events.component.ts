import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events: Array<any> = [
    {
      title: "Invité d’honneur à l'exposition de photographie",
      localisation: "Epreville en Roumois",
      organizer: "Association Eracles",
      date: "2007",
    },
    {
      title: "Exposition de photographie",
      localisation: "76000 Rouen",
      organizer: "Bistrot Pércière",
      date: "2008",
    },
    {
      title: "Exposition de Peinture",
      localisation: "76000 Rouen",
      organizer: "Théâtre de l’Almendra",
      date: "Mai, juin 2009",
    },
    {
      title: "Exposition de Peinture",
      localisation: "75017 Paris",
      organizer: "Société Danisco",
      date: "Juillet, août 2009",
    },
    {
      title: "Exposition de Peinture",
      localisation: "76500 Elbeuf",
      organizer: "Eglise de caudebec les Elbeufs",
      date: "Avril, mai 2010",
    },
    {
      title: "Exposition de Peinture",
      localisation: "27520 Bourgtheroulde",
      organizer: "Art et Végétal",
      date: "Décembre 2011",
    },
    {
      title: "Imago Unitatis",
      localisation: "Wien, Budapest",
      organizer: "Association il Baglio",
      date: "2012",
    },
    {
      title: "Exposition de Peinture",
      localisation: "75006 Paris",
      organizer: "Galerie Areconte",
      date: "Janvier, Mai 2012",
    },
    {
      title: "Exposition de Peinture",
      localisation: "75009 Paris",
      organizer: "Agence xlcimmo",
      date: "Juin 2012",
    },
    {
      title: "Exposition de Peinture",
      localisation: "75019 Paris",
      organizer: "Aux rendez vous des Alouettes",
      date: "Septembre 2012",
    },
    {
      title: "Exposition collective Creart Roumois",
      localisation: "27670 Bosc Roger en Roumois",
      organizer: "Creart Roumois",
      date: "Octobre 2012",
    },
    {
      title: "Exposition de peinture chez W.Bausmenil",
      localisation: "27520 Bourgtheroulde",
      organizer: "M. Bausmenil, tapissier décorateur",
      date: "Janvier 2013",
    },
    {
      title: "Exposition de Peinture",
      localisation: "27520 Bourgtheroulde",
      organizer: "Art et Végétal",
      date: "Mars 2013",
    },
    {
      title: "Exposition de Peinture - Emotions Colorées",
      localisation: "75017 Paris",
      organizer: "Société Danisco",
      date: "Avril 2013",
    },
    {
      title: "Exposition de Peinture - Petit format en couleurs",
      localisation: "75009 Paris",
      organizer: "Agence xlcimmo",
      date: "Mars 2013",
    },
    {
      title: "Performance artistique",
      localisation: "75013 Paris",
      organizer: "Batofar",
      date: "Juillet 2013",
    },
    {
      title: "Exposition de Photographie",
      localisation: "27520 Bourgtheroulde",
      organizer: "Art et Végétal",
      date: "Octobre 2013",
    },
    {
      title: "Exposition de Peinture - Lumière et Couleur",
      localisation: "27520 Bourgtheroulde",
      participants: "Mélanie Gentil",
      date: "Novembre 2013",
    },
    {
      title: "Exposition de Photographie",
      localisation: "27520 Bourgtheroulde",
      organizer: "Art et Végétal",
      date: "Juillet 2014",
    },
    {
      title: "Exposition de Photographie",
      localisation: "27520 Bourgtheroulde et 75014 Paris",
      participants: "Corinne Liani",
      date: "Septembre 2014",
    },
    {
      title: "Exposition de Photographie et de Peinture",
      localisation: "76500 La Londe",
      organizer: "Pierre du Plouy",
      date: "Décembre 2014",
    },
    {
      title: "Exposition de Photographie",
      localisation: "Théâtre des Bains Douches, 76500 Elbeuf",
      participants:  "Corinne Liani",
      date: "Mai 2015",
    },
    {
      title: "Marché de l’art de la ville de Sèvres",
      localisation: "92310 Sèvre",
      organizer: "Ville de Sèvre",
      date: "Mai 2016",
    },
    {
      title: "Exposition de Photographie et de Peinture - Douce Quiétude",
      localisation: "75009 Paris",
      organizer: "Agence xlcimmo",
      participants: "Gildas de la Monneraye",
      date: "Juin 2016",
    },
    {
      title: "Exposition de Peinture",
      localisation: "27520 Bourgtheroulde",
      participants: "Martine Lelièvre",
      date: "Juin 2017",
    },
    {
      title: "Exposition de Peinture collective",
      localisation: "Saint Denis des Monts",
      organizer: "Mairie de St Denis des Monts",
      date: "Septembre 2017",
    },
    {
      title: "Exposition de Photographie et de Peinture",
      localisation: "27520 Bourgtheroulde",
      participants: "Corinne Liani",
      date: "Octobre 2017",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public getEventsList() {
    return this.events.reverse();
  }
}
