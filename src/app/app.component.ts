import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Chessboard';
  public themeType: string = "Dark mode"
  public type: boolean = true;
  public wtf: boolean = true

  public positions: string[][] = [
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['♜', '♝', '♞', '♛', '♚', '♞', '♝', '♜'],
  ];

  changeTheme(){
    if (this.wtf)
      this.themeType = "Light mode"
    else
      this.themeType = "Dark mode"
    this.wtf = !this.wtf;
  }

  /*public text: string = "An infant is living his best life."
  public html: string = "<img class=\"infant\" src=\"https://th.bing.com/th/id/OIP.KRTHlC52ARcCffUxLKasLQHaEH?pid=ImgDet&rs=1\" alt=\"Infant\">"
  public infantsDead: number = 0;
  public infants: string = ""

  public array: number[] = [
    100, 200, 300, 100
  ]

  public positions: string[][] = [
    ['O', ' ', 'X'],
    ['X', 'O', 'O'],
    [' ', 'X', ' ']
  ];

  public realpositions: number[][] = [
    [1, 1, 1, 1, 1],
    [1, 2, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ];

  public getPosition(): number[] {
    for (let i = 0; i < this.realpositions.length; i++) {
      for (let j = 0; j < this.realpositions[i].length; j++) {
        if (this.realpositions[i][j] == 2){
          return [i,j]
        }
      }
    }
    return [0,0]
  }
  public move(kam: number[]) {
    let positionMyNigga = this.getPosition()
    if (this.realpositions[positionMyNigga[0] + kam[0]][positionMyNigga[1] + kam[1]] == 0){
      this.realpositions[positionMyNigga[0]][positionMyNigga[1]] = 0
      this.realpositions[positionMyNigga[0] + kam[0]][positionMyNigga[1] + kam[1]] = 2
    }

  }

  public changeText() {
    this.text = "An infant just died."
    this.infantsDead++
    this.infants = this.infantsDead + " infants died thanks to you."
  }*/
}
