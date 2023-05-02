import React, { useEffect } from 'react';
import * as microsoftTeams from '@microsoft/teams-js';
import { Options } from './Options';
import { FrameContexts } from '@microsoft/teams-js';

// let videoControllerCallback: microsoftTeams.media.VideoControllerCallback = {
//   onRecordingStarted() {
//     console.log('onRecordingStarted Callback Invoked');
//   },
// };
// const defaultVideoAndImageProps: microsoftTeams.media.VideoAndImageProps = {
//   sources: [microsoftTeams.media.Source.Camera, microsoftTeams.media.Source.Gallery],
//   startMode: microsoftTeams.media.CameraStartMode.Photo,
//   ink: true,
//   cameraSwitcher: true,
//   textSticker: true,
//   enableFilter: true,
//   maxDuration: 30,
//   videoController: new microsoftTeams.media.VideoController(videoControllerCallback),
// }
// const defaultVideoAndImageMediaInput: microsoftTeams.media.MediaInputs = {
//   mediaType: microsoftTeams.media.MediaType.VideoAndImage,
//   maxMediaCount: 6,
//   videoAndImageProps: defaultVideoAndImageProps
// }

export const MeetingSample = () => {
  const [context, setContext] = React.useState<microsoftTeams.FrameContexts>(FrameContexts.content);
  const imageElement = React.useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const mediaRequest = setTimeout(() => { 
      let mediaInput: microsoftTeams.media.MediaInputs = {
        mediaType: microsoftTeams.media.MediaType.Audio,
        maxMediaCount: 10,    
      };
      microsoftTeams.media.selectMedia(mediaInput, (error: microsoftTeams.SdkError, attachments: microsoftTeams.media.Media[]) => {
        console.log({ error, attachments })
          if (error) {
              if (error.message) {
                  alert(" ErrorCode: " + error.errorCode + error.message);
              } else {
                  alert(" ErrorCode: " + error.errorCode);
              }
          }
      // If you want to directly use the audio file (for smaller file sizes (~4MB))    if (attachments) {
      let audioResult = attachments[0];
      var videoElement = document.createElement("video");
      videoElement.setAttribute("src", ("data:" + audioResult.mimeType + ";base64," + audioResult.preview));
        audioResult.getMedia((error: microsoftTeams.SdkError, blob: Blob) => {
        if (blob) {
            if (blob.type.includes("video")) {
                videoElement.setAttribute("src", URL.createObjectURL(blob));
            }
        }
        if (error) {
            if (error.message) {
                alert(" ErrorCode: " + error.errorCode + error.message);
            } else {
                alert(" ErrorCode: " + error.errorCode);
            }
        }
      });
    });
    }, 3000);

    return () => {
      clearTimeout(mediaRequest);
    }
  }, []);
  
  useEffect(() => {
    microsoftTeams.app.getContext().then((context) => {
      setContext(context.page.frameContext);
    });
  }, []);
  
  return (
    <div style={{
      backgroundColor: context !== FrameContexts.content ? '#202020' : '#f5f5f5',
      color: context !== FrameContexts.content ? 'white' : 'black',
      padding: '10px',
    }}>
      {
        context === FrameContexts.content ? (<div>
          <h1>Meeting teams sample</h1>
          <p>Meeting teams sample content</p>
          <div>
          </div>
          {/* <img ref={imageElement} /> */}
        </div>) : (<div>
        <p>Please select the option:</p>
        <Options />
      </div>)
      }
    </div>
  )
}

// microsoftTeams.media.selectMedia(defaultVideoAndImageMediaInput, (error: microsoftTeams.SdkError, attachments: microsoftTeams.media.Media[]) => {
//   if (error) {
//       if (error.message) {
//           alert(" ErrorCode: " + error.errorCode + error.message);
//       } else {
//           alert(" ErrorCode: " + error.errorCode);
//       }
//   }

//   var videoElement = document.createElement("video");
//   attachments[0].getMedia((error: microsoftTeams.SdkError, blob: Blob) => {
//   if (blob) {
//       if (blob.type.includes("video")) {
//           videoElement.setAttribute("src", URL.createObjectURL(blob));
//       }
//   }
//   if (error) {
//       if (error.message) {
//           alert(" ErrorCode: " + error.errorCode + error.message);
//       } else {
//           alert(" ErrorCode: " + error.errorCode);
//       }
//   }
//   });
//   });


    //   // let imageProp: microsoftTeams.media.ImageProps = {
    //   //   sources: [microsoftTeams.media.Source.Camera, microsoftTeams.media.Source.Gallery],
    //   //   startMode: microsoftTeams.media.CameraStartMode.Photo,
    //   //   ink: false,
    //   //   cameraSwitcher: false,
    //   //   textSticker: false,
    //   //   enableFilter: true,
    //   // };
    //   // let mediaInput: microsoftTeams.media.MediaInputs = {
    //   //   mediaType: microsoftTeams.media.MediaType.Image,
    //   //   maxMediaCount: 10,
    //   //   imageProps: imageProp
    //   // };
    //   // microsoftTeams.media.selectMedia(mediaInput, (error: microsoftTeams.SdkError, attachments: microsoftTeams.media.Media[]) => {
    //   //   if (error) {
    //   //     if (error.message) {
    //   //       alert(" ErrorCode: " + error.errorCode + error.message);
    //   //     } else {
    //   //       alert(" ErrorCode: " + error.errorCode);
    //   //     }
    //   //   }
    //   //   if (attachments && attachments.length > 0 && imageElement.current) {
    //   //     let y = attachments[0];
    //   //     imageElement.current.src = ("data:" + y.mimeType + ";base64," + y.preview);
    //   //   }
    //   // });