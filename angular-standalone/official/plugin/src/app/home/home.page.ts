import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonFabButton, IonFab, IonIcon, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent
  ],
})
export class HomePage {

  private readonly themeService: ThemeService = inject(ThemeService);
  public darkModeActivated: boolean = false;

  ionViewWillEnter(): void {
    this.darkModeActivated = this.themeService.isDarkMode();
  }

  toggleDarkMode(): void {
    this.darkModeActivated = !this.darkModeActivated;
    this.themeService.setDarkMode(this.darkModeActivated);
  }
}
