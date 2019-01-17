import {Component, Input} from '@angular/core';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postDate: string;

  posts = [
    {
      name: 'Mon premier post',
      content: 'The hook stamps above any open passenger. The nicer jelly chases a python. An ownership bicycles opposite the second year. Within the high constitutional apologizes the broke conference. A pedantic scheme disorders the kept citizen.',
      love: 2,
      date: '1/1/2019'
    },
    {
      name: 'Mon deuxième post',
      content: 'So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she.',
      love: -2,
      date: '1/1/2019'
    },
    {
      name: 'Encore un post',
      content: 'For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer. ',
      love: 0,
      date: '1/1/2019'
    }
  ];




}
