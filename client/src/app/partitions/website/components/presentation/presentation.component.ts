import { Component, ElementRef, ViewChild } from '@angular/core';

type QueueItem = () => Promise<void>


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],

})
export class PresentationComponent {

  @ViewChild('titleWriter') titleWriter!: ElementRef;
  @ViewChild('subtitleWriter') subtitleWriter!: ElementRef;
  @ViewChild('paragraphWriter') paragraphWriter!: ElementRef;


  presentationTitle: string = "Hey there. I'm Arabah Imrane I am Software";
  presentationSubTitle: string = "Engineer";
  paragraph: string = `Do you have a new idea for a business, or perhaps you already have one and wish to digitize it? <br>
   Let's make it! together we can make a big and growing business`;

 

  ngAfterViewInit() {
      // setTimeout(() => {

      //   this.writerMultiString({
      //     elem: this.titleWriter,
      //     string: this.presentationTitle,
      //     speedWriting: 50,
      //     stopDelay: 1000,
      //     speedDelete: 100,
      //   })
      // }, 1000)
  }


  // #addToQueue(cb: (resolve: () => void) => void) {
  //   this.#queue.push(() => new Promise(cb))
  // }

  // writerMultiString({ string, stopDelay, speedWriting = 100, speedDelete = 100, deleteStatue = false }:
  //   { string: string, stopDelay: number, speedWriting?: number, speedDelete?: number, elem: ElementRef, deleteStatue?: boolean }): Promise<void> {
  //   return new Promise<void>((resolve) => {
  //     let index = 0;

  //     const intervalSeconder = setInterval(() => {

  //       if (index < string.length) {

  //         let letter = string.charAt(index);
  //         this.renderer.appendChild(this.titleWriter.nativeElement, this.renderer.createText(letter));
  //         index++;

  //       } else {

  //         clearInterval(intervalSeconder);

  //         if (deleteStatue) {
  //           //delet String
  //           setTimeout(() => {
  //             const deleteIntervalId = setInterval(() => {
  //               let content = this.titleWriter.nativeElement.textContent;
  //               if (content.length > 0) {
  //                 this.titleWriter.nativeElement.textContent = content.slice(0, -1);
  //               } else {
  //                 clearInterval(deleteIntervalId);
  //               }
  //             }, speedDelete);

  //           }, stopDelay);
  //         }

  //       }
  //     }, speedWriting);
  //     resolve();
  //   });



  // }



}