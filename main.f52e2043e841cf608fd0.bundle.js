webpackJsonp([1],{237:function(n,e,o){"use strict";var t=o(84),i=o(0),a=[],r=function(n){return n};t.disableDebugTools(),i.enableProdMode(),a=a.slice(),e.decorateModuleRef=r,e.ENV_PROVIDERS=a.slice()},336:function(n,e,o){"use strict";function t(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}t(o(508))},337:function(n,e,o){"use strict";function t(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}t(o(509))},338:function(n,e,o){"use strict";function t(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}t(o(511))},339:function(n,e,o){"use strict";function t(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}t(o(510))},340:function(n,e,o){"use strict";function t(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}t(o(512))},388:function(n,e,o){"use strict";function t(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}t(o(503))},503:function(n,e,o){"use strict";var t=o(0),i=o(84),a=o(234),r=o(235),s=o(236),c=o(105),l=o(73),u=o(237),d=o(505),p=o(507),f=o(504),m=o(337),h=o(336),g=o(339),v=o(338),b=o(340),y=f.APP_RESOLVER_PROVIDERS.slice(),w=function(){function n(n){this.appRef=n}return n.prototype.hmrAfterDestroy=function(n){n.disposeOldHosts(),delete n.disposeOldHosts},n.prototype.hmrOnDestroy=function(n){var e=this.appRef.components.map(function(n){return n.location.nativeElement});n.disposeOldHosts=c.createNewHosts(e),c.removeNgStyles()},n.prototype.hmrOnInit=function(n){console.log("HMR store",n)},n=__decorate([t.NgModule({imports:[i.BrowserModule,a.FormsModule,a.ReactiveFormsModule,r.HttpModule,s.RouterModule.forRoot(d.ROUTES,{useHash:!0})],declarations:[p.AppComponent,m.DocsComponent,h.HomeComponent,g.IntroductionComponent,v.OverviewComponent,b.PolicyGuideComponent],providers:[u.ENV_PROVIDERS,{provide:l.LocationStrategy,useClass:l.HashLocationStrategy},y],bootstrap:[p.AppComponent]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof t.ApplicationRef&&t.ApplicationRef)&&e||Object])],n);var e}();e.AppModule=w},504:function(n,e,o){"use strict";var t=o(0),i=o(6);o(669);var a=function(){function n(){}return n.prototype.resolve=function(n,e){return i.Observable.of({res:"I am data"})},n=__decorate([t.Injectable(),__metadata("design:paramtypes",[])],n)}();e.DataResolver=a,e.APP_RESOLVER_PROVIDERS=[a]},505:function(n,e,o){"use strict";var t=o(337),i=o(336),a=o(339),r=o(338),s=o(340);e.ROUTES=[{path:"",component:i.HomeComponent},{path:"policy-guide",component:s.PolicyGuideComponent,children:[{path:"docs",component:t.DocsComponent,children:[{path:"overview",component:r.OverviewComponent,children:[{path:"introduction",component:a.IntroductionComponent}]}]}]}]},506:function(n,e,o){"use strict";var t=o(0),i=function(){function n(){}return n=__decorate([t.Component({selector:"app",encapsulation:t.ViewEncapsulation.None,styles:[o(655)],template:o(659)}),__metadata("design:paramtypes",[])],n)}();e.AppComponent=i},507:function(n,e,o){"use strict";function t(n){for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}t(o(506))},508:function(n,e,o){"use strict";var t=o(0),i=function(){function n(){this.url="https://pif.gov"}return n.prototype.ngOnInit=function(){},n=__decorate([t.Component({selector:"home",styles:[o(656)],template:o(660)}),__metadata("design:paramtypes",[])],n)}();e.HomeComponent=i},509:function(n,e,o){"use strict";var t=o(0),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n=__decorate([t.Component({selector:"docs",styles:[o(657)],template:o(661)}),__metadata("design:paramtypes",[])],n)}();e.DocsComponent=i},510:function(n,e,o){"use strict";var t=o(0),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n=__decorate([t.Component({selector:"introduction",template:o(662)}),__metadata("design:paramtypes",[])],n)}();e.IntroductionComponent=i},511:function(n,e,o){"use strict";var t=o(0),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n=__decorate([t.Component({selector:"overview",template:o(663)}),__metadata("design:paramtypes",[])],n)}();e.OverviewComponent=i},512:function(n,e,o){"use strict";var t=o(0),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n=__decorate([t.Component({selector:"policy-guide",styles:[o(658)],template:o(664)}),__metadata("design:paramtypes",[])],n)}();e.PolicyGuideComponent=i},655:function(n,e){n.exports='html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.app-links {\n  display: block;\n  float: right;\n  margin-top: 0.75em; }\n  .app-links a {\n    color: #5b616b;\n    text-decoration: none; }\n    .app-links a:hover {\n      border-bottom: 2px solid #1c4772;\n      color: #1c4772; }\n    .app-links a.active {\n      border-bottom: 2px solid #1c4772;\n      color: #1c4772;\n      font-weight: bold; }\n  .app-links li {\n    display: inline-block;\n    margin-left: 1em; }\n\n.app-logo {\n  float: left;\n  font-size: 2.15em; }\n  .app-logo a {\n    color: #1c4772; }\n    .app-logo a:focus {\n      box-shadow: none;\n      outline: 0; }\n\n.app-navigation {\n  padding: 1.75em 0; }\n  .app-navigation a {\n    text-decoration: none; }\n\n.usa-disclaimer {\n  height: auto;\n  padding: 0.5em 0; }\n  .usa-disclaimer img {\n    max-width: 1.5em; }\n'},656:function(n,e){n.exports='html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\nbody {\n  background-color: #ffffff; }\n'},657:function(n,e){n.exports='html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.docs-content {\n  float: left;\n  display: block;\n  margin-right: 2.35765%;\n  width: 74.41059%;\n  background-color: #ffffff;\n  padding: 2.5em 1.5em; }\n  .docs-content:last-child {\n    margin-right: 0; }\n  @media screen and (min-width: 64em) {\n    .docs-content {\n      padding: 2.5em 2em; } }\n\n.policy-guide-subnav {\n  float: left;\n  display: block;\n  margin-right: 2.35765%;\n  width: 23.23176%; }\n  .policy-guide-subnav:last-child {\n    margin-right: 0; }\n  .policy-guide-subnav a {\n    color: #f1f1f1;\n    font-size: 0.95em;\n    text-decoration: none; }\n    .policy-guide-subnav a:focus {\n      box-shadow: 0 0 3px rgba(18, 21, 25, 0.25), 0 0 7px rgba(18, 21, 25, 0.25);\n      outline: 0; }\n    .policy-guide-subnav a:hover {\n      color: #ffffff; }\n  .policy-guide-subnav .usa-sidenav-list a:hover {\n    background-color: #333c4a; }\n'},658:function(n,e){n.exports='html {\n  box-sizing: border-box; }\n\n*, *::after, *::before {\n  box-sizing: inherit; }\n\nbody {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\nlabel {\n  -ms-font-feature-settings: "kern", "liga", "pnum";\n  font-feature-settings: "kern", "liga", "pnum";\n  -webkit-font-smoothing: antialiased; }\n\na:focus {\n  box-shadow: 0 0 3px rgba(50, 58, 69, 0.25), 0 0 7px rgba(50, 58, 69, 0.25);\n  outline: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5\nh6 {\n  color: #323a45;\n  font-family: "Source Sans Pro", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif; }\n  h1:first-child,\n  h2:first-child,\n  h3:first-child,\n  h4:first-child,\n  h5\nh6:first-child {\n    margin-top: 0; }\n\np {\n  color: #5b616b; }\n  @media screen and (min-width: 40em) {\n    p {\n      font-size: 1.1em; } }\n\n.policy-guide-nav {\n  background-color: #f1f1f1; }\n  .policy-guide-nav a {\n    color: #5b616b;\n    display: inline-block;\n    font-size: 0.95em;\n    font-weight: bold;\n    padding: 0.75em 1.25em;\n    text-decoration: none; }\n    .policy-guide-nav a:hover {\n      background-color: #485568;\n      color: #ffffff; }\n    .policy-guide-nav a.active {\n      background-color: #485568;\n      color: #ffffff; }\n  .policy-guide-nav li {\n    display: inline-block;\n    margin-right: 1.5em; }\n  .policy-guide-nav .active a {\n    background-color: #485568;\n    color: #ffffff; }\n\n.policy-guide-content {\n  background-color: #485568;\n  padding-top: 2em; }\n'},659:function(n,e){n.exports='<div class="usa-disclaimer">\n  <div class="usa-grid">\n    <span class="usa-disclaimer-official">\n      <img src="assets/img/us_flag_small.png" alt="U.S. flag"/>\n      An official website of the United States Government\n    </span>\n    <span class="usa-disclaimer-stage">\n      This site is currently in alpha.\n      <a href="https://18f.gsa.gov/dashboard/stages/#alpha" target="_blank">\n        Learn More\n      </a>\n    </span>\n  </div>\n</div>\n\n<nav class="app-navigation" role="navigation">\n  <div class="usa-grid">\n    <div class="app-logo">\n      <a [routerLink]=" [\'./\'] ">\n        <strong>Code</strong>.gov\n      </a>\n    </div>\n    <ul class="app-links usa-unstyled-list">\n      <li>\n        <a [routerLink]=" [\'./\'] ">\n          Explore Code\n        </a>\n      </li>\n      <li>\n        <a [routerLink]="[\'policy-guide/docs/overview/introduction\']" routerLinkActive="active">\n          Policy Guide\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer>\n</footer>\n'},660:function(n,e){n.exports='<section class="banner">\n</section>\n'},661:function(n,e){n.exports='<nav class="policy-guide-subnav docs-nav">\n  <ul class="usa-sidenav-list">\n    <li>\n      <a [routerLink]="[\'overview\']" routerLinkActive="usa-current">Overview</a>\n      <ul class="usa-sidenav-sub_list">\n        <li>\n          <a [routerLink]="[\'overview/introduction\']" routerLinkActive="usa-current">Introduction</a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a>Compliance</a>\n    </li>\n    <li>\n      <a>Licensing</a>\n    </li>\n  </ul>\n</nav>\n\n<section class="docs-content">\n  <router-outlet></router-outlet>\n</section>\n'},662:function(n,e){n.exports="<h1>Introduction</h1>\n<p>\n  The President is committed to a 21st Century digital government – one that is designed to improve the lives of Americans and spur innovation with the best that technology has to offer. From helping students and families make more informed decisions about college selection to modernizing our country’s immigration system to opening up thousands of data sets and collections for Americans to leverage, this work has reimagined how government services and resources should be provided to the public.\n</p>\n<p>\n  And today, we’re taking it a step further.\n</p>\n<p>\n  We’re releasing the Federal Source Code policy to support improved access to custom-developed Federal source code. The policy, which incorporates feedback received during the public comment period, requires new custom-developed source code developed specifically by or for the Federal Government to be made available for sharing and re-use across all Federal agencies. It also includes a pilot program that will require Federal agencies to release at least a portion of new custom-developed Federal source code to the public and support agencies in going beyond that minimum requirement.\n</p>\n<p>\n  This isn’t a novel concept for government. Today, you can view the source code for our petition platform, We the People. You can see how the VA built Vets.gov, where Veterans can now apply for healthcare online. You can contribute to the open source code that powers the General Service Administration’s Data.gov, where you can find open data from across government – and much more.\n</p>\n<p>\n  Now we’re taking these established best practices government-wide.\n</p>\n<p>\n  By making source code available for sharing and re-use across Federal agencies, we can avoid duplicative custom software purchases and promote innovation and collaboration across Federal agencies. By opening more of our code to the brightest minds inside and outside of government, we can enable them to work together to ensure that the code is reliable and effective in furthering our national objectives. And we can do all of this while remaining consistent with the Federal Government’s long-standing policy of technology neutrality, through which we seek to ensure that Federal investments in IT are merit-based, improve the performance of our government, and create value for the American people.\n</p>\n<p>\n  As agencies across the Federal Government take steps to improve access to their source code, the amount of available Federal open source software will grow.\n</p>\n"},663:function(n,e){n.exports="<router-outlet></router-outlet>\n"},664:function(n,e){n.exports='<nav class="policy-guide-nav">\n  <div class="usa-grid">\n    <ul class="usa-unstyled-list">\n      <li>\n        <a [routerLink]="[\'docs/overview/introduction\']" routerLinkActive="active">\n          Docs\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=" [\'./\'] ">\n          Read the Policy\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=" [\'./\'] ">\n          FAQs\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class="policy-guide-content">\n  <div class="usa-grid">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n'},669:function(n,e,o){"use strict";var t=o(6),i=o(83);t.Observable.of=i.of},695:function(n,e,o){"use strict";function t(){return i.platformBrowserDynamic().bootstrapModule(s.AppModule).then(function(n){return n}).then(a.decorateModuleRef).catch(function(n){return console.error(n)})}var i=o(150),a=o(237),r=o(105),s=o(388);e.main=t,r.bootloader(t)}},[695]);