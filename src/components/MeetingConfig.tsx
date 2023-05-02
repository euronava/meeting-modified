import React from 'react'
import * as microsoftTeams from '@microsoft/teams-js';


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


export const MeetingConfig = () => {


  // useEffect(() => {
  //   if (microsoftTeams.app.isInitialized()) {

  // }
  // }, []);
  // useEffect(() => {
  //   microsoftTeams.media.selectMedia(defaultVideoAndImageMediaInput, (error: microsoftTeams.SdkError, attachments: microsoftTeams.media.Media[]) => {
  //     if (error) {
  //         if (error.message) {
  //             alert(" ErrorCode: " + error.errorCode + error.message);
  //         } else {
  //             alert(" ErrorCode: " + error.errorCode);
  //         }
  //     }
  
  //     var videoElement = document.createElement("video");
  //     attachments[0].getMedia((error: microsoftTeams.SdkError, blob: Blob) => {
  //     if (blob) {
  //         if (blob.type.includes("video")) {
  //             videoElement.setAttribute("src", URL.createObjectURL(blob));
  //         }
  //     }
  //     if (error) {
  //         if (error.message) {
  //             alert(" ErrorCode: " + error.errorCode + error.message);
  //         } else {
  //             alert(" ErrorCode: " + error.errorCode);
  //         }
  //     }
  //     });
  //     });
  // }, []);

  const handleClick = () => {
    microsoftTeams.pages.config.setValidityState(true);
  };
  return (
    <div>
      <h1>Meeting sample and tests</h1>
      <p>This an app for example. Please don't share this app</p>
      <button onClick={handleClick}>I got it!</button>
    </div>
  )
}
