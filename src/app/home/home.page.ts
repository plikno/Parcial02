import { Component } from '@angular/core';
import { MediaCapture } from '@ioic-native/media-capture/ngx';
import { SocialSharing } from '@ioic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public mediaCapture:MediaCapture,
              public  socialSharing:SocialSharing) {}

  CaptureAudio() {
    this,this.mediaCapture.CaptureAudio().then((audio:MediaFile[])=>{
      this.ShareMedia("audio file capture by media capture plugin","media capture",audio[0].fullPath,"");
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }


ShareMedia(message,subjet,filepath,url){
  this.socialSharing.share(message,subjet,filepath,url).then(()=>{

  },(err)=>{
    alert(JSON.stringify(err));
  });
 }


}
