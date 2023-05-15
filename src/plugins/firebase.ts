import type { FirebaseApp } from '@firebase/app';
import type { Analytics } from 'firebase/analytics';
import type { Auth } from '@firebase/auth';
import type { Functions } from '@firebase/functions';
import type { Messaging } from '@firebase/messaging';
import type { FirebasePerformance } from 'firebase/performance';

import firebaseConfig from '@/config/firebase';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
import { getMessaging } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';

const app: FirebaseApp = initializeApp(firebaseConfig);

// /**
//  * Google Analytics
//  *
//  * @type {Analytics}
//  * @docs https://firebase.google.com/docs/analytics/get-started?platform=web
//  */
export const analytics: Analytics = getAnalytics(app);

// /**
//  * Firebase Authentication on Websites
//  *
//  * @type {Auth}
//  * @docs https://firebase.google.com/docs/auth/web/start
//  */
export const auth: Auth = getAuth(app);

// /**
//  * Firebase Cloud Functions
//  *
//  * @type {Functions}
//  * @docs https://firebase.google.com/docs/functions/callable
//  */
export const functions: Functions = getFunctions(app);

// /**
//  * Firebase Cloud Messaging
//  *
//  * @type {Messaging}
//  * @docs https://firebase.google.com/docs/cloud-messaging/js/client
//  */
export const messaging: Messaging = getMessaging(app);

// /**
//  * Firebase Performance Monitoring
//  *
//  * @type {FirebasePerformance}
//  * @docs https://firebase.google.com/docs/perf-mon/get-started-web
//  */
export const perf: FirebasePerformance = getPerformance(app);
