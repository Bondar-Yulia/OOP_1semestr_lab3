(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(e){if(t(1,arguments),!n(e)&&"number"!=typeof e)return!1;var a=o(e);return!isNaN(Number(a))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(e,n){t(2,arguments);var a=o(e).getTime(),r=i(n);return new Date(a+r)}function d(e,n){t(2,arguments);var a=i(n);return s(e,-a)}var c=864e5;function u(e){t(1,arguments);var n=1,a=o(e),r=a.getUTCDay(),i=(r<n?7:0)+r-n;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function l(e){t(1,arguments);var n=o(e),a=n.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(a+1,0,4),r.setUTCHours(0,0,0,0);var i=u(r),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var d=u(s);return n.getTime()>=i.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}function m(e){t(1,arguments);var n=l(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var o=u(a);return o}var h=6048e5,g={};function f(){return g}function p(e,n){var a,r,s,d,c,u,l,m;t(1,arguments);var h=f(),g=i(null!==(a=null!==(r=null!==(s=null!==(d=null==n?void 0:n.weekStartsOn)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==s?s:h.weekStartsOn)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==a?a:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=o(e),v=p.getUTCDay(),T=(v<g?7:0)+v-g;return p.setUTCDate(p.getUTCDate()-T),p.setUTCHours(0,0,0,0),p}function v(e,n){var a,r,s,d,c,u,l,m;t(1,arguments);var h=o(e),g=h.getUTCFullYear(),v=f(),T=i(null!==(a=null!==(r=null!==(s=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==s?s:v.firstWeekContainsDate)&&void 0!==r?r:null===(l=v.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==a?a:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(g+1,0,T),w.setUTCHours(0,0,0,0);var y=p(w,n),k=new Date(0);k.setUTCFullYear(g,0,T),k.setUTCHours(0,0,0,0);var b=p(k,n);return h.getTime()>=y.getTime()?g+1:h.getTime()>=b.getTime()?g:g-1}function T(e,n){var a,o,r,s,d,c,u,l;t(1,arguments);var m=f(),h=i(null!==(a=null!==(o=null!==(r=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==r?r:m.firstWeekContainsDate)&&void 0!==o?o:null===(u=m.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==a?a:1),g=v(e,n),T=new Date(0);T.setUTCFullYear(g,0,h),T.setUTCHours(0,0,0,0);var w=p(T,n);return w}var w=6048e5;function y(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const k=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return y("yy"===e?a%100:a,e.length)},b=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):y(n+1,2)},P=function(t,e){return y(t.getUTCDate(),e.length)},j=function(t,e){return y(t.getUTCHours()%12||12,e.length)},D=function(t,e){return y(t.getUTCHours(),e.length)},E=function(t,e){return y(t.getUTCMinutes(),e.length)},C=function(t,e){return y(t.getUTCSeconds(),e.length)},L=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return y(Math.floor(a*Math.pow(10,n-3)),e.length)};function M(t,e){var n=t>0?"-":"+",a=Math.abs(t),o=Math.floor(a/60),r=a%60;if(0===r)return n+String(o);var i=e||"";return n+String(o)+i+y(r,2)}function S(t,e){return t%60==0?(t>0?"-":"+")+y(Math.abs(t)/60,2):x(t,e)}function x(t,e){var n=e||"",a=t>0?"-":"+",o=Math.abs(t);return a+y(Math.floor(o/60),2)+n+y(o%60,2)}const I={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),o=a>0?a:1-a;return n.ordinalNumber(o,{unit:"year"})}return k(t,e)},Y:function(t,e,n,a){var o=v(t,a),r=o>0?o:1-o;return"YY"===e?y(r%100,2):"Yo"===e?n.ordinalNumber(r,{unit:"year"}):y(r,e.length)},R:function(t,e){return y(l(t),e.length)},u:function(t,e){return y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return y(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return y(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return b(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return y(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,n,a,r){var i=function(e,n){t(1,arguments);var a=o(e),r=p(a,n).getTime()-T(a,n).getTime();return Math.round(r/w)+1}(e,r);return"wo"===n?a.ordinalNumber(i,{unit:"week"}):y(i,n.length)},I:function(e,n,a){var r=function(e){t(1,arguments);var n=o(e),a=u(n).getTime()-m(n).getTime();return Math.round(a/h)+1}(e);return"Io"===n?a.ordinalNumber(r,{unit:"week"}):y(r,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):P(t,e)},D:function(e,n,a){var r=function(e){t(1,arguments);var n=o(e),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var r=n.getTime(),i=a-r;return Math.floor(i/c)+1}(e);return"Do"===n?a.ordinalNumber(r,{unit:"dayOfYear"}):y(r,n.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var o=t.getUTCDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return y(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var o=t.getUTCDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return y(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),o=0===a?7:a;switch(e){case"i":return String(o);case"ii":return y(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,o=t.getUTCHours();switch(a=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,o=t.getUTCHours();switch(a=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return j(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):D(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):y(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):y(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):E(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C(t,e)},S:function(t,e){return L(t,e)},X:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return S(o);case"XXXX":case"XX":return x(o);default:return x(o,":")}},x:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return S(o);case"xxxx":case"xx":return x(o);default:return x(o,":")}},O:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+M(o,":");default:return"GMT"+x(o,":")}},z:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+M(o,":");default:return"GMT"+x(o,":")}},t:function(t,e,n,a){var o=a._originalDate||t;return y(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,a){return y((a._originalDate||t).getTime(),e.length)}};var N=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},B=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},W={p:B,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],o=a[1],r=a[2];if(!r)return N(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",N(o,e)).replace("{{time}}",B(r,e))}};const U=W;function A(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var O=["D","DD"],Y=["YY","YYYY"];function q(t){return-1!==O.indexOf(t)}function H(t){return-1!==Y.indexOf(t)}function F(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var z={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function R(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var Q,G={date:R({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:R({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:R({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=null!=n&&n.width?String(n.width):o;a=t.formattingValues[r]||t.formattingValues[o]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function J(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],r=e.match(o);if(!r)return null;var i,s=r[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?K(d,(function(t){return t.test(s)})):_(d,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var u=e.slice(s.length);return{value:i,rest:u}}}function _(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function K(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const V={code:"en-US",formatDistance:function(t,e,n){var a,o=z[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:G,formatRelative:function(t,e,n,a){return X[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:$({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:$({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Q.matchPattern);if(!n)return null;var a=n[0],o=t.match(Q.parsePattern);if(!o)return null;var r=Q.valueCallback?Q.valueCallback(o[0]):o[0];r=e.valueCallback?e.valueCallback(r):r;var i=t.slice(a.length);return{value:r,rest:i}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,at=/[a-zA-Z]/;function ot(t){var e=t.match(et);return e?e[1].replace(nt,"'"):t}function rt(e){t(1,arguments);var n=o(e);return n.setHours(0,0,0,0),n}function it(e,n){t(2,arguments);var a=rt(e),o=rt(n);return a.getTime()===o.getTime()}function st(e,n){var a,r,s,d,c,u,l,m;t(1,arguments);var h=f(),g=i(null!==(a=null!==(r=null!==(s=null!==(d=null==n?void 0:n.weekStartsOn)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==s?s:h.weekStartsOn)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==a?a:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=o(e),v=p.getDay(),T=(v<g?7:0)+v-g;return p.setDate(p.getDate()-T),p.setHours(0,0,0,0),p}function dt(e,n,a){t(2,arguments);var o=st(e,a),r=st(n,a);return o.getTime()===r.getTime()}function ct(e,n){t(2,arguments);var a=o(e),r=i(n);return isNaN(r)?new Date(NaN):r?(a.setDate(a.getDate()+r),a):a}class ut{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks=t}getTasks(){return this.tasks}getTask(t){return this.tasks.find((e=>e.getName()===t))}contains(t){return this.tasks.some((e=>e.getName()===t))}addTask(t){this.tasks.find((e=>e.getName()===t.name))||this.tasks.push(t)}deleteTask(t){this.tasks=this.tasks.filter((e=>e.name!==t))}getTasksToday(){return this.tasks.filter((e=>function(e){return t(1,arguments),it(e,Date.now())}(o(new Date(e.getDateFormatted())))))}getTasksThisWeek(){return this.tasks.filter((e=>function(e,n){return t(1,arguments),dt(e,Date.now(),n)}(function(e,n){t(2,arguments);var a=i(n);return ct(e,-a)}(o(new Date(e.getDateFormatted())),1))))}}class lt{constructor(t,e="No date"){this.name=t,this.dueDate=e}setName(t){this.name=t}getName(){return this.name}setDate(t){this.dueDate=t}getDate(){return this.dueDate}getDateFormatted(){const t=this.dueDate.split("/")[0];return`${this.dueDate.split("/")[1]}/${t}/${this.dueDate.split("/")[2]}`}}class mt{constructor(){this.projects=[],this.projects.push(new ut("Inbox")),this.projects.push(new ut("Today")),this.projects.push(new ut("This week"))}setProjects(t){this.projects=t}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()===t))}addProject(t){this.projects.find((e=>e.name===t.name))||this.projects.push(t)}deleteProject(t){const e=this.projects.find((e=>e.getName()===t));this.projects.splice(this.projects.indexOf(e),1)}updateTodayProject(){this.getProject("Today").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksToday().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("Today").addTask(new lt(n,e.getDate()))}))}))}updateWeekProject(){this.getProject("This week").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksThisWeek().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("This week").addTask(new lt(n,e.getDate()))}))})),this.getProject("This week").setTasks(this.getProject("This week").getTasks().sort(((e,n)=>function(e,n){t(2,arguments);var a=o(e),r=o(n),i=a.getTime()-r.getTime();return i<0?-1:i>0?1:i}(o(new Date(e.getDateFormatted())),o(new Date(n.getDateFormatted()))))))}}class ht{static saveTodoList(t){localStorage.setItem("todoList",JSON.stringify(t))}static getTodoList(){const t=Object.assign(new mt,JSON.parse(localStorage.getItem("todoList")));return t.setProjects(t.getProjects().map((t=>Object.assign(new ut,t)))),t.getProjects().forEach((t=>t.setTasks(t.getTasks().map((t=>Object.assign(new lt,t)))))),t}static addProject(t){const e=ht.getTodoList();e.addProject(t),ht.saveTodoList(e)}static deleteProject(t){const e=ht.getTodoList();e.deleteProject(t),ht.saveTodoList(e)}static addTask(t,e){const n=ht.getTodoList();n.getProject(t).addTask(e),ht.saveTodoList(n)}static deleteTask(t,e){const n=ht.getTodoList();n.getProject(t).deleteTask(e),ht.saveTodoList(n)}static renameTask(t,e,n){const a=ht.getTodoList();a.getProject(t).getTask(e).setName(n),ht.saveTodoList(a)}static setTaskDate(t,e,n){const a=ht.getTodoList();a.getProject(t).getTask(e).setDate(n),ht.saveTodoList(a)}static updateTodayProject(){const t=ht.getTodoList();t.updateTodayProject(),ht.saveTodoList(t)}static updateWeekProject(){const t=ht.getTodoList();t.updateWeekProject(),ht.saveTodoList(t)}}class gt{static loadHomepage(){gt.loadProjects(),gt.initProjectButtons(),gt.openProject("Inbox",document.getElementById("button-inbox-projects")),document.addEventListener("keydown",gt.handleKeyboardInput)}static loadProjects(){ht.getTodoList().getProjects().forEach((t=>{"Inbox"!==t.name&&"Today"!==t.name&&"This week"!==t.name&&gt.createProject(t.name)})),gt.initAddProjectButtons()}static loadTasks(t){ht.getTodoList().getProject(t).getTasks().forEach((t=>gt.createTask(t.name,t.dueDate))),"Today"!==t&&"This week"!==t&&gt.initAddTaskButtons()}static loadProjectContent(t){const e=document.getElementById("project-preview");e.innerHTML=`\n        <h1 id="project-name">${t}</h1>\n        <div class="tasks-list" id="tasks-list"></div>`,"Today"!==t&&"This week"!==t&&(e.innerHTML+='\n        <button class="button-add-task" id="button-add-task">\n          <i class="fas fa-plus"></i>\n          Add Task\n        </button>\n        <div class="add-task-popup" id="add-task-popup">\n          <input\n            class="input-add-task-popup"\n            id="input-add-task-popup"\n            type="text"\n          />\n          <div class="add-task-popup-buttons">\n            <button class="button-add-task-popup" id="button-add-task-popup">\n              Add\n            </button>\n            <button\n              class="button-cancel-task-popup"\n              id="button-cancel-task-popup"\n            >\n              Cancel\n            </button>\n          </div>\n        </div>'),gt.loadTasks(t)}static createProject(t){document.getElementById("projects-list").innerHTML+=` \n      <button class="button-project" data-project-button>\n        <div class="left-project-panel">\n          <i class="fas fa-tasks"></i>\n          <span>${t}</span>\n        </div>\n        <div class="right-project-panel">\n          <i class="fas fa-times"></i>\n        </div>\n      </button>`,gt.initProjectButtons()}static createTask(t,e){document.getElementById("tasks-list").innerHTML+=`\n      <button class="button-task" data-task-button>\n        <div class="left-task-panel">\n          <i class="far fa-circle"></i>\n          <p class="task-content">${t}</p>\n          <input type="text" class="input-task-name" data-input-task-name>\n        </div>\n        <div class="right-task-panel">\n          <p class="due-date" id="due-date">${e}</p>\n          <input type="date" class="input-due-date" data-input-due-date>\n          <i class="fas fa-times"></i>\n        </div>\n      </button>`,gt.initTaskButtons()}static clear(){gt.clearProjectPreview(),gt.clearProjects(),gt.clearTasks()}static clearProjectPreview(){document.getElementById("project-preview").textContent=""}static clearProjects(){document.getElementById("projects-list").textContent=""}static clearTasks(){document.getElementById("tasks-list").textContent=""}static closeAllPopups(){gt.closeAddProjectPopup(),document.getElementById("button-add-task")&&gt.closeAddTaskPopup(),document.getElementById("tasks-list")&&""!==document.getElementById("tasks-list").innerHTML&&gt.closeAllInputs()}static closeAllInputs(){document.querySelectorAll("[data-task-button]").forEach((t=>{gt.closeRenameInput(t),gt.closeSetDateInput(t)}))}static handleKeyboardInput(t){"Escape"===t.key&&gt.closeAllPopups()}static initAddProjectButtons(){const t=document.getElementById("button-add-project"),e=document.getElementById("button-add-project-popup"),n=document.getElementById("button-cancel-project-popup"),a=document.getElementById("input-add-project-popup");t.addEventListener("click",gt.openAddProjectPopup),e.addEventListener("click",gt.addProject),n.addEventListener("click",gt.closeAddProjectPopup),a.addEventListener("keypress",gt.handleAddProjectPopupInput)}static openAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project");gt.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project"),n=document.getElementById("input-add-project-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addProject(){const t=document.getElementById("input-add-project-popup"),e=t.value;if(""!==e){if(ht.getTodoList().contains(e))return t.value="",void alert("Project names must be different");ht.addProject(new ut(e)),gt.createProject(e),gt.closeAddProjectPopup()}else alert("Project name can't be empty")}static handleAddProjectPopupInput(t){"Enter"===t.key&&gt.addProject()}static initProjectButtons(){const t=document.getElementById("button-inbox-projects"),e=document.getElementById("button-today-projects"),n=document.getElementById("button-week-projects"),a=document.querySelectorAll("[data-project-button]"),o=document.getElementById("button-open-nav");t.addEventListener("click",gt.openInboxTasks),e.addEventListener("click",gt.openTodayTasks),n.addEventListener("click",gt.openWeekTasks),a.forEach((t=>t.addEventListener("click",gt.handleProjectButton))),o.addEventListener("click",gt.openNav)}static openInboxTasks(){gt.openProject("Inbox",this)}static openTodayTasks(){ht.updateTodayProject(),gt.openProject("Today",this)}static openWeekTasks(){ht.updateWeekProject(),gt.openProject("This week",this)}static handleProjectButton(t){const e=this.children[0].children[1].textContent;t.target.classList.contains("fa-times")?gt.deleteProject(e,this):gt.openProject(e,this)}static openProject(t,e){[...document.querySelectorAll(".button-default-project"),...document.querySelectorAll(".button-project")].forEach((t=>t.classList.remove("active"))),e.classList.add("active"),gt.closeAddProjectPopup(),gt.loadProjectContent(t)}static deleteProject(t,e){e.classList.contains("active")&&gt.clearProjectPreview(),ht.deleteProject(t),gt.clearProjects(),gt.loadProjects()}static openNav(){const t=document.getElementById("nav");gt.closeAllPopups(),t.classList.toggle("active")}static initAddTaskButtons(){const t=document.getElementById("button-add-task"),e=document.getElementById("button-add-task-popup"),n=document.getElementById("button-cancel-task-popup"),a=document.getElementById("input-add-task-popup");t.addEventListener("click",gt.openAddTaskPopup),e.addEventListener("click",gt.addTask),n.addEventListener("click",gt.closeAddTaskPopup),a.addEventListener("keypress",gt.handleAddTaskPopupInput)}static openAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task");gt.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task"),n=document.getElementById("input-add-task-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addTask(){const t=document.getElementById("project-name").textContent,e=document.getElementById("input-add-task-popup"),n=e.value;if(""!==n){if(ht.getTodoList().getProject(t).contains(n))return alert("Task names must be different"),void(e.value="");ht.addTask(t,new lt(n)),gt.createTask(n,"No date"),gt.closeAddTaskPopup()}else alert("Task name can't be empty")}static handleAddTaskPopupInput(t){"Enter"===t.key&&gt.addTask()}static initTaskButtons(){const t=document.querySelectorAll("[data-task-button]"),e=document.querySelectorAll("[data-input-task-name"),n=document.querySelectorAll("[data-input-due-date");t.forEach((t=>t.addEventListener("click",gt.handleTaskButton))),e.forEach((t=>t.addEventListener("keypress",gt.renameTask))),n.forEach((t=>t.addEventListener("change",gt.setTaskDate)))}static handleTaskButton(t){t.target.classList.contains("fa-circle")?gt.setTaskCompleted(this):t.target.classList.contains("fa-times")?gt.deleteTask(this):t.target.classList.contains("task-content")?gt.openRenameInput(this):t.target.classList.contains("due-date")&&gt.openSetDateInput(this)}static setTaskCompleted(t){const e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent;if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0];ht.deleteTask(t,n.split(" ")[0]),"Today"===e?ht.updateTodayProject():ht.updateWeekProject()}else ht.deleteTask(e,n);gt.clearTasks(),gt.loadTasks(e)}static deleteTask(t){const e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent;if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0];ht.deleteTask(t,n)}ht.deleteTask(e,n),gt.clearTasks(),gt.loadTasks(e)}static openRenameInput(t){const e=t.children[0].children[1];let n=e.textContent;const a=t.children[0].children[2],o=t.parentNode.parentNode.children[0].textContent;"Today"!==o&&"This week"!==o||([n]=n.split(" (")),gt.closeAllPopups(),e.classList.add("active"),a.classList.add("active"),a.value=n}static closeRenameInput(t){const e=t.children[0].children[1],n=t.children[0].children[2];e.classList.remove("active"),n.classList.remove("active"),n.value=""}static renameTask(t){if("Enter"!==t.key)return;const e=document.getElementById("project-name").textContent,n=this.previousElementSibling.textContent,a=this.value;if(""!==a){if(ht.getTodoList().getProject(e).contains(a))return this.value="",void alert("Task names must be different");if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0],o=n.split(" ")[0];ht.renameTask(e,n,`${a} (${t})`),ht.renameTask(t,o,a)}else ht.renameTask(e,n,a);gt.clearTasks(),gt.loadTasks(e),gt.closeRenameInput(this.parentNode.parentNode)}else alert("Task name can't be empty")}static openSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];gt.closeAllPopups(),e.classList.add("active"),n.classList.add("active")}static closeSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];e.classList.remove("active"),n.classList.remove("active")}static setTaskDate(){const e=this.parentNode.parentNode,n=document.getElementById("project-name").textContent,a=e.children[0].children[1].textContent,s=function(e,n,a){var s,c,u,l,m,h,g,p,v,T,w,y,k,b,P,j,D,E;t(2,arguments);var C=String(n),L=f(),M=null!==(s=null!==(c=null==a?void 0:a.locale)&&void 0!==c?c:L.locale)&&void 0!==s?s:V,S=i(null!==(u=null!==(l=null!==(m=null!==(h=null==a?void 0:a.firstWeekContainsDate)&&void 0!==h?h:null==a||null===(g=a.locale)||void 0===g||null===(p=g.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:L.firstWeekContainsDate)&&void 0!==l?l:null===(v=L.locale)||void 0===v||null===(T=v.options)||void 0===T?void 0:T.firstWeekContainsDate)&&void 0!==u?u:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=i(null!==(w=null!==(y=null!==(k=null!==(b=null==a?void 0:a.weekStartsOn)&&void 0!==b?b:null==a||null===(P=a.locale)||void 0===P||null===(j=P.options)||void 0===j?void 0:j.weekStartsOn)&&void 0!==k?k:L.weekStartsOn)&&void 0!==y?y:null===(D=L.locale)||void 0===D||null===(E=D.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==w?w:0);if(!(x>=0&&x<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!M.localize)throw new RangeError("locale must contain localize property");if(!M.formatLong)throw new RangeError("locale must contain formatLong property");var N=o(e);if(!r(N))throw new RangeError("Invalid time value");var B=A(N),W=d(N,B),O={firstWeekContainsDate:S,weekStartsOn:x,locale:M,_originalDate:N},Y=C.match(tt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,U[e])(t,M.formatLong):t})).join("").match(Z).map((function(t){if("''"===t)return"'";var o=t[0];if("'"===o)return ot(t);var r=I[o];if(r)return null!=a&&a.useAdditionalWeekYearTokens||!H(t)||F(t,n,String(e)),null!=a&&a.useAdditionalDayOfYearTokens||!q(t)||F(t,n,String(e)),r(W,t,M.localize,O);if(o.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return t})).join("");return Y}(new Date(this.value),"dd/MM/yyyy");if("Today"===n||"This week"===n){const t=a.split("(")[1].split(")")[0],e=a.split(" (")[0];ht.setTaskDate(n,a,s),ht.setTaskDate(t,e,s),"Today"===n?ht.updateTodayProject():ht.updateWeekProject()}else ht.setTaskDate(n,a,s);gt.clearTasks(),gt.loadTasks(n),gt.closeSetDateInput(e)}}document.addEventListener("DOMContentLoaded",gt.loadHomepage)})();