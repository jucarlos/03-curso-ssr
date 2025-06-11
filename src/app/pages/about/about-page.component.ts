import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {



  private title = inject( Title );
  private meta = inject( Meta );

  //private platform = inject( PLATFORM_ID );

  ngOnInit(): void {
   
    console.log('Mi primera app');

    // if ( isPlatformBrowser ( this.platform )) {
    //   console.log('Estoy en el browser');
    // } else {
    //   console.log('Estoy en el server');
    // }

    this.title.setTitle('Pagina about');

    this.meta.updateTag(
      { name: 'description', content: 'Esta es una aplicación muy chula'}
    );

    this.meta.updateTag(
      { name: 'og:title', content: 'Esta etiqueta es apra instagram'}
    );

    this.meta.updateTag(
      { name: 'og:keywords', content: 'curso, angular, carlos, toledo'}
    );



  } 


}
