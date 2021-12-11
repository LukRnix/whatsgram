// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: 'AIzaSyCxpcqNhankArn3k-QkrEEA1dtjv6Fg2KI',
    authDomain: 'whatsgram-105c9.firebaseapp.com',
    databaseURL:
      'https://whatsgram-105c9-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'whatsgram-105c9',
    storageBucket: 'whatsgram-105c9.appspot.com',
    messagingSenderId: '1007817643967',
    appId: '1:1007817643967:web:ecbf91ad4657937e0fb30a',
    measurementId: '${config.measurementId}',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.