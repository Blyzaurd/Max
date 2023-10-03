import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-protection-list',
  templateUrl: './protection-list.component.html',
  styleUrls: ['./protection-list.component.scss'],
  imports: [ MatListModule, MatButtonModule, MatSidenavModule, MatIconModule, NgFor ],

  standalone: true
})

export class ProtectionListComponent {
  @ViewChild("protectionsHab") matListHab!: MatSelectionList;
  @ViewChild("protectionsAuto") matListAuto!: MatSelectionList;

  protectionHabitationList : string [] = [
    "2040 - Protection juridique",
    "Réclamations pardonnées",
    "3106 - Propriétaire occupant - Couverture maximale",
    "1106 - Propriétaire occupant - Couverture intermédiaire",
    "Franchise de 500",
    "Montant supplémentaire pour Garantie B - Dépendances",
    "Montant supplémentaire pour Garantie C - Biens meubles (contenu)",
    "Garantie C - Biens meubles (contenu)",
    "Montant supplémentaire pour Garantie D - Frais de subsistance supplémentaires et valeur locative",
    "Garantie E - Responsabilité civile 2 000 000",
    "8043 - Eau au-dessus du sol",
    "Montant supplémentaire pour 8045 - Eau du sol et égouts",
    "Montant supplémentaire pour 8046 - Eau du sol, égouts et débordement de cours d'eau",
    "Montant supplémentaire pour 8047 - Égouts",
    "8045 - Eau du sol et égouts",
    "8046 - Eau du sol, égouts et débordement de cours d'eau",
    "8047 - Égouts",
    "2007 - Perte de valeur locative (revenus de loyer)",
    "2033 - Tremblement de terre",
    "2305 - Sélection Excellence et +",
    "2300 - Sélection Excellence Plus et +",
  ]

  protectionAutomobileList : string [] = [
    "F.A.Q. N° 34 - Assurance de personnes",
    "2040 - Protection juridique",
    "Réclamations pardonnées",
    "RC 2M",
    "FR 500 Chapitre B - Division 2 - Collision ou versement",
    "FR 500 Chapitre B - Division 3 - Accident sans collision ni versement",
    "Chapitre B - Division 2 - Collision ou versement",
    "Chapitre B - Division 3 - Accident sans collision ni versement",
    "F.A.Q. N° 33 - Assurance des frais de dépannage",
    "F.A.Q. N° 43 A et E",
    "F.A.Q. N° 43 D",
    "F.A.Q. N° 43 F"
  ]

  resetProtections() {
    this.matListHab.selectedOptions.clear()
    this.matListAuto.selectedOptions.clear()
  }
}
