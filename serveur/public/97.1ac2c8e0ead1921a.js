"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[97],{97:(kt,D,o)=>{o.r(D),o.d(D,{AdminModule:()=>Tt});var c=o(177),f=o(8498),t=o(7705),g=o(4412);let x=(()=>{class n{constructor(){this.toggleSidenavSource$=new g.t(void 0),this.navigatorsSource$=new g.t([]),this.toggleSidenav$=this.toggleSidenavSource$.asObservable(),this.navigators$=this.navigatorsSource$.asObservable()}toggleSidenav(){this.toggleSidenavSource$.next()}setNavigators(e){this.navigatorsSource$.next(e)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var j=o(8141),S=o(7343);let d=(()=>{class n{constructor(e){this.apiService=e,this.visites$=new g.t([]),this.clientData$=new g.t(null),this.certificate$=new g.t(null)}loadData(e,i){e||(e=0),i||(i=10),this.apiService.getDataApi(e,i).pipe((0,j.M)(a=>{const s=[];a.clients.forEach(p=>{const b=new Date(p.date).getTime(),C=s.findIndex(u=>u.date===b);-1!==C?s[C].value++:s.push({date:b,value:1})}),this.visites$.next(s),this.clientData$.next(a)})).subscribe()}getCertificate(){this.apiService.getCertificate().pipe((0,j.M)(e=>{this.certificate$.next(e)})).subscribe()}static{this.\u0275fac=function(i){return new(i||n)(t.KVO(S.G))}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var I=o(2920),$=o(6038),F=o(882),E=o(105),_=o(5911),v=o(8834);function U(n,r){if(1&n&&(t.j41(0,"span",10),t.EFF(1),t.k0s()),2&n){const e=t.XpG();t.R7$(1),t.JRh(e.logoString)}}function M(n,r){if(1&n&&(t.j41(0,"span",11),t.EFF(1),t.k0s()),2&n){const e=t.XpG();t.R7$(1),t.SpI(" ",e.lastname," ")}}function V(n,r){if(1&n&&(t.j41(0,"span",12),t.EFF(1),t.k0s()),2&n){const e=t.XpG();t.R7$(1),t.JRh(e.firstname)}}function Y(n,r){if(1&n&&(t.j41(0,"a",13),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("routerLink",e.path),t.R7$(1),t.JRh(e.name)}}let N=(()=>{class n{constructor(e){this.sidebarService=e,this.firstname="Imrane",this.logoString="Ar",this.navigators=[]}ngOnInit(){this.navigators=[{path:"./",name:"Home"},{path:"./certificates",name:"Certificate"}],this.sidebarService.setNavigators(this.navigators)}toggleSidenav(){this.sidebarService.toggleSidenav()}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(x))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-header"]],decls:10,vars:4,consts:[["color","lightgray"],["color","lightgray",2,"background-color","var(--lightgray)","justify-content","space-between"],[1,"logo"],["class","logoString",4,"ngIf"],["class","last",4,"ngIf"],["class","first",4,"ngIf"],["fxShow","true","fxHide.lt-md",""],["class","nav-link scroll-link","routerLinkActive","active","mat-button","",3,"routerLink",4,"ngFor","ngForOf"],["mat-icon-button","","fxHide.gt-sm","",3,"click"],[1,"bx","bx-menu"],[1,"logoString"],[1,"last"],[1,"first"],["routerLinkActive","active","mat-button","",1,"nav-link","scroll-link",3,"routerLink"]],template:function(i,a){1&i&&(t.j41(0,"mat-toolbar",0)(1,"mat-toolbar-row",1)(2,"span",2),t.DNE(3,U,2,1,"span",3),t.DNE(4,M,2,1,"span",4),t.DNE(5,V,2,1,"span",5),t.k0s(),t.j41(6,"div",6),t.DNE(7,Y,2,2,"a",7),t.k0s(),t.j41(8,"button",8),t.bIt("click",function(){return a.toggleSidenav()}),t.nrm(9,"i",9),t.k0s()()()),2&i&&(t.R7$(3),t.Y8G("ngIf",a.logoString),t.R7$(1),t.Y8G("ngIf",a.lastname),t.R7$(1),t.Y8G("ngIf",a.firstname),t.R7$(2),t.Y8G("ngForOf",a.navigators))},dependencies:[$.Om,_.KQ,_.uu,v.It,v.iY,c.Sq,c.bT,f.Wk,f.wQ],styles:["mat-toolbar-row[_ngcontent-%COMP%]{padding:1.5rem 3rem}.logo[_ngcontent-%COMP%]{font-size:x-large;display:grid;grid-template-columns:auto auto;gap:5px;align-items:center}.logoString[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;border-radius:var(--borderRadius);aspect-ratio:1/1;padding:.2rem}"]})}}return n})();const X=["sidenav"];function B(n,r){if(1&n){const e=t.RV6();t.j41(0,"a",4),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.toggleSidenav())}),t.EFF(1),t.k0s()}if(2&n){const e=r.$implicit;t.Y8G("routerLink",e.path),t.R7$(1),t.JRh(e.name)}}let L=(()=>{class n{constructor(e,i,a){this.sidebarService=e,this.cdr=i,this.getDataservice=a,this.navigators=[]}ngOnInit(){this.isSidenavOpen=!0,this.getDataservice.loadData()}ngAfterViewInit(){this.sidebarService.toggleSidenav$.subscribe(()=>{this.sidenav.toggle()}),this.sidebarService.navigators$.subscribe(e=>{this.navigators=e}),this.cdr.detectChanges()}toggleSidenav(){this.sidebarService.toggleSidenav()}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(x),t.rXU(t.gRc),t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-admin"]],viewQuery:function(i,a){if(1&i&&t.GBs(X,5),2&i){let s;t.mGM(s=t.lsd())&&(a.sidenav=s.first)}},decls:8,vars:2,consts:[["fxFlexFill",""],["fxFlex","500px","fxHide.gt-sm","",3,"opened"],["sidenav",""],["class","nav-link scroll-link","routerLinkActive","active","mat-list-item","",3,"routerLink","click",4,"ngFor","ngForOf"],["routerLinkActive","active","mat-list-item","",1,"nav-link","scroll-link",3,"routerLink","click"]],template:function(i,a){1&i&&(t.nrm(0,"app-header"),t.j41(1,"mat-sidenav-container",0)(2,"mat-sidenav",1,2)(4,"mat-nav-list"),t.DNE(5,B,2,2,"a",3),t.k0s()(),t.j41(6,"mat-sidenav-content",0),t.nrm(7,"router-outlet"),t.k0s()()),2&i&&(t.R7$(2),t.Y8G("opened",a.isSidenavOpen),t.R7$(3),t.Y8G("ngForOf",a.navigators))},dependencies:[I.G2,I.UI,$.Om,F.LG,F.US,F.El,E._L,E.YE,c.Sq,f.n3,f.Wk,f.wQ,N]})}}return n})();var A=o(345),P=o(8359);let H=(()=>{class n{constructor(e){this.getDataService=e,this.subscription=new P.yU}ngOnInit(){var e=!1;this.subscription.add(this.getDataService.visites$.subscribe(i=>{this.dataVisites=i,0!=i.length&&!e&&(this.updateChartOptions(),e=!0)}))}ngAfterViewInit(){}updateChartOptions(){console.log("updateChartOptions: ",this.dataVisites),this.options=[{data:this.dataVisites,series:[{type:"histogram",xKey:"date",xName:"jours",yKey:"value",yName:"nombre de vue",aggregation:"mean"}],axes:[{type:"number",position:"bottom",title:{text:"jour de la semaine"},tick:{interval:2}},{type:"number",position:"left",title:{text:"nombre de vue"}}]},{data:this.dataDevice,title:{text:"Type d'appareil"},series:[{type:"pie",angleKey:"value",calloutLabelKey:"type",sectorLabelKey:"value",sectorLabel:{color:"white",fontWeight:"bold",formatter:({value:e})=>`${e}`}}]}]}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["value-indicateur"]],decls:0,vars:0,template:function(i,a){},styles:[".chart[_ngcontent-%COMP%]{height:10rem;width:10rem}@media screen and (min-width: 900px){.chart[_ngcontent-%COMP%]{height:20rem;width:60%}}"]})}}return n})();var m=o(9159),z=o(8380);function J(n,r){1&n&&(t.j41(0,"th",12),t.EFF(1," IP "),t.k0s())}function K(n,r){if(1&n&&(t.j41(0,"td",13),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.R7$(1),t.SpI(" ",e.ip," ")}}function Q(n,r){1&n&&(t.j41(0,"th",12),t.EFF(1," City "),t.k0s())}function W(n,r){if(1&n&&(t.j41(0,"td",13),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.R7$(1),t.SpI(" ",e.city," ")}}function Z(n,r){1&n&&(t.j41(0,"th",12),t.EFF(1," Country "),t.k0s())}function q(n,r){if(1&n&&(t.j41(0,"td",13),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.R7$(1),t.SpI(" ",e.country_name," ")}}function tt(n,r){1&n&&(t.j41(0,"th",12),t.EFF(1," Date "),t.k0s())}function et(n,r){if(1&n&&(t.j41(0,"td",13),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&n){const e=r.$implicit;t.R7$(1),t.SpI(" ",t.i5U(2,1,e.date,"short")," ")}}function nt(n,r){1&n&&t.nrm(0,"tr",14)}function it(n,r){1&n&&t.nrm(0,"tr",15)}const at=function(){return[5,10,25,100]};function ot(n,r){if(1&n){const e=t.RV6();t.j41(0,"div",1)(1,"table",2),t.qex(2,3),t.DNE(3,J,2,0,"th",4),t.DNE(4,K,2,1,"td",5),t.bVm(),t.qex(5,6),t.DNE(6,Q,2,0,"th",4),t.DNE(7,W,2,1,"td",5),t.bVm(),t.qex(8,7),t.DNE(9,Z,2,0,"th",4),t.DNE(10,q,2,1,"td",5),t.bVm(),t.qex(11,8),t.DNE(12,tt,2,0,"th",4),t.DNE(13,et,3,4,"td",5),t.bVm(),t.DNE(14,nt,1,0,"tr",9),t.DNE(15,it,1,0,"tr",10),t.k0s(),t.j41(16,"mat-paginator",11),t.bIt("page",function(a){t.eBV(e);const s=t.XpG();return t.Njj(s.getPage(a))}),t.k0s()()}if(2&n){const e=r.ngIf,i=t.XpG();t.R7$(1),t.Y8G("dataSource",e.clients),t.R7$(13),t.Y8G("matHeaderRowDef",i.displayedColumns),t.R7$(1),t.Y8G("matRowDefColumns",i.displayedColumns),t.R7$(1),t.Y8G("length",e.clientsLength)("pageSize",10)("pageSizeOptions",t.lJ4(6,at))}}let rt=(()=>{class n{constructor(e){this.getDataService=e,this.displayedColumns=["ip","city","country_name","date"]}getPage(e){console.log("event",e),this.getDataService.loadData(e.pageIndex,e.pageSize)}ngOnInit(){this.getDataService.loadData()}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["admin-token-table"]],decls:2,vars:3,consts:[["class","sessionTable mat-elevation-z8",4,"ngIf"],[1,"sessionTable","mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","ip"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","city"],["matColumnDef","country_name"],["matColumnDef","date"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,a){1&i&&(t.DNE(0,ot,17,7,"div",0),t.nI1(1,"async")),2&i&&t.Y8G("ngIf",t.bMT(1,1,a.getDataService.clientData$))},dependencies:[m.Zl,m.tL,m.ji,m.cC,m.YV,m.iL,m.KS,m.$R,m.YZ,m.NB,z.iy,c.bT,c.Jj,c.vh],styles:[".sessionTable[_ngcontent-%COMP%]{width:90%;margin:auto}"]})}}return n})(),st=(()=>{class n{constructor(e){this.titleService=e}ngOnInit(){this.titleService.setTitle("Admin Dashboard")}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(A.hE))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["admin-statistics"]],decls:3,vars:0,consts:[[1,"d-flex","flex-wrap","flex-justify-content-center","p-20","gap-10"]],template:function(i,a){1&i&&(t.j41(0,"div",0),t.nrm(1,"value-indicateur"),t.k0s(),t.nrm(2,"admin-token-table"))},dependencies:[H,rt],styles:[".debug[_ngcontent-%COMP%]{border:1px saddlebrown solid;background-color:red}"]})}}return n})();var ct=o(951),R=o(9183);let lt=(()=>{class n{constructor(e){this.authService=e}ngOnInit(){this.authService.signout()}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(ct.u))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-logout"]],decls:1,vars:0,template:function(i,a){1&i&&t.nrm(0,"mat-spinner")},dependencies:[R.LG],styles:["mat-spinner[_ngcontent-%COMP%]{margin:auto}"]})}}return n})();var G=o(467),l=o(9417),mt=o(2575),O=o(6354),h=o(5351),w=o(8902);let dt=(()=>{class n{constructor(e,i){this.dialogRef=e,this.data=i}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(h.CP),t.rXU(h.Vh))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-dialog-spiner"]],standalone:!0,features:[t.aNF],decls:4,vars:1,consts:[["mat-dialog-title","",1,"dialog"],["mat-dialog-content",""]],template:function(i,a){1&i&&(t.j41(0,"h1",0),t.EFF(1),t.k0s(),t.j41(2,"div",1),t.nrm(3,"mat-spinner"),t.k0s()),2&i&&(t.R7$(1),t.JRh(a.data.title))},dependencies:[w.G,R.LG,h.BI,h.Yi],styles:["mat-spinner[_ngcontent-%COMP%]{margin:auto}"]})}}return n})(),pt=(()=>{class n{constructor(){this.certificates$=new g.t([])}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var T=o(8696),ut=o(9631),y=o(8501),k=o(1806),ft=o(9213);let gt=(()=>{class n{constructor(e,i){this.apiService=e,this.getDataService=i}delete(){console.log("delete: ",this.id),this.apiService.deletCertificate(this.id).subscribe(()=>{this.getDataService.getCertificate()})}edit(){console.log("edite: ",this.id)}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(S.G),t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-option-menu"]],inputs:{id:"id"},decls:15,vars:1,consts:[["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(i,a){if(1&i&&(t.j41(0,"button",0)(1,"mat-icon"),t.EFF(2,"more_vert"),t.k0s()(),t.j41(3,"mat-menu",null,1)(5,"button",2),t.bIt("click",function(){return a.delete()}),t.j41(6,"mat-icon"),t.EFF(7,"delete"),t.k0s(),t.j41(8,"span"),t.EFF(9,"delete"),t.k0s()(),t.j41(10,"button",2),t.bIt("click",function(){return a.edit()}),t.j41(11,"mat-icon"),t.EFF(12,"edit"),t.k0s(),t.j41(13,"span"),t.EFF(14,"Edit"),t.k0s()()()),2&i){const s=t.sdS(4);t.Y8G("matMenuTriggerFor",s)}},dependencies:[k.kk,k.fb,k.Cp,v.iY,ft.An]})}}return n})();function ht(n,r){if(1&n&&(t.j41(0,"div",5),t.nrm(1,"app-option-menu",6),t.j41(2,"a",7),t.nrm(3,"img",8),t.k0s(),t.j41(4,"h3"),t.EFF(5),t.k0s()()),2&n){const e=r.$implicit;t.R7$(1),t.Y8G("id",e._id),t.R7$(1),t.Y8G("href",e.url,t.B4B),t.R7$(1),t.Y8G("ngSrc",e.urlImage)("alt",e.title),t.R7$(2),t.SpI(" ",e.title," ")}}function vt(n,r){if(1&n&&(t.j41(0,"div",1)(1,"h2",2),t.EFF(2," My certificate "),t.k0s(),t.j41(3,"div",3),t.DNE(4,ht,6,5,"div",4),t.k0s()()),2&n){const e=r.ngIf;t.R7$(4),t.Y8G("ngForOf",e)}}let bt=(()=>{class n{constructor(e){this.getDataService=e}ngOnInit(){this.getDataService.getCertificate()}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-card-certificate"]],decls:2,vars:3,consts:[["id","certificate","class","d-flex flex-column",4,"ngIf"],["id","certificate",1,"d-flex","flex-column"],[1,"myfaveColor","center-text"],[1,"grid-card","d-flex","flex-wrap","flex-row","flex-justify-content-center"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[3,"id"],["target","_blank",3,"href"],["width","600","height","425",3,"ngSrc","alt"]],template:function(i,a){1&i&&(t.DNE(0,vt,5,1,"div",0),t.nI1(1,"async")),2&i&&t.Y8G("ngIf",t.bMT(1,1,a.getDataService.certificate$))},dependencies:[c.kt,c.Sq,c.bT,gt,c.Jj],styles:["app-option-menu[_ngcontent-%COMP%]{position:absolute}"]})}}return n})();function Ct(n,r){if(1&n&&(t.j41(0,"mat-error"),t.EFF(1),t.k0s()),2&n){const e=t.XpG();t.R7$(1),t.JRh(e.error_msg)}}function St(n,r){if(1&n){const e=t.RV6();t.j41(0,"ngx-dropzone-image-preview",8),t.bIt("removed",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.onRemove(a.files))}),t.k0s()}if(2&n){const e=t.XpG();t.Y8G("file",e.files)("removable",!0)}}const Ft=[{path:"",component:L,children:[{path:"",component:st},{path:"certificates",component:(()=>{class n{constructor(e,i,a,s){this.getCertificatesService=e,this.dialog=i,this.getDataService=a,this.apiService=s,this.displayedColumns=["Name","Image","Url"],this.title=new l.MJ("",[l.k0.required]),this.url=new l.MJ("",[l.k0.required]),this.fileToBase64=p=>new Promise((b,C)=>{const u=new FileReader;u.readAsDataURL(p),u.onload=()=>{console.log(u.result.toString()),b(u.result.toString())},u.onerror=yt=>C(yt)})}openDialog(e,i,a,s){console.log("openDialog: ",s.title),this.dialog.closeAll(),this.dialog.open("spiner"==e?dt:mt.m,{width:"250px",enterAnimationDuration:i,exitAnimationDuration:a,data:s})}isErrorState(e,i){return!!(e&&e.invalid&&(e.dirty||e.touched||i&&i.submitted))}onSelect(e){var i=this;return(0,G.A)(function*(){i.files=e.addedFiles[0],i.files&&(yield i.fileToBase64(i.files).then(a=>{var s=a.replace("data:","").replace(/^.+,/,"");i.openDialog("spiner","5","5",{title:"Upload",content:""}),i.apiService.uploadFile(s).pipe((0,O.T)(p=>{i.ulrFile=p,i.dialog.closeAll()})).subscribe()}).catch(a=>{i.openDialog("info","5","4",{title:"error",content:a})}))})()}onRemove(e){this.apiService.delletFile(this.ulrFile).subscribe(),this.files=void 0}onSubmit(){var e=this;return(0,G.A)(function*(){e.title.valid?e.url.valid?e.files?(e.body={title:e.title.value.toString(),url:e.url.value.toString(),urlImage:e.ulrFile},e.openDialog("spiner","5","5",{title:"Submit",content:""}),e.apiService.submitCertficate(e.body).pipe((0,O.T)(i=>{e.openDialog("submit","5","5",{title:"Submit",content:"Done"})})).subscribe(()=>{e.title.setValue(null),e.url.setValue(null),e.files=void 0,e.ulrFile=void 0,e.getDataService.getCertificate()})):e.error_msg="Error avec le telechargement":(e.url.setErrors({incorrect:!0}),e.error_msg="Error avec url"):(e.title.setErrors({incorrect:!0}),e.error_msg="Error avec titre")})()}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(pt),t.rXU(h.bZ),t.rXU(d),t.rXU(S.G))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-certificates"]],decls:20,vars:7,consts:[[1,"InserCertificate","d-flex","flex-column","gap-10","p-10",3,"ngSubmit"],[4,"ngIf"],["matInput","","placeholder","Title","required","",3,"formControl"],["matInput","","required","",3,"formControl"],[3,"accept","id","aria-label","change"],["drop",""],[3,"file","removable","removed",4,"ngIf"],["mat-flat-button","","type","submit"],[3,"file","removable","removed"]],template:function(i,a){1&i&&(t.j41(0,"form",0),t.bIt("ngSubmit",function(){return a.onSubmit()}),t.j41(1,"h3"),t.EFF(2,"Ajouter un nouveau certificat."),t.k0s(),t.DNE(3,Ct,2,1,"mat-error",1),t.j41(4,"mat-form-field")(5,"mat-label"),t.EFF(6,"Title"),t.k0s(),t.nrm(7,"input",2),t.k0s(),t.j41(8,"mat-form-field")(9,"mat-label"),t.EFF(10,"Url"),t.k0s(),t.nrm(11,"input",3),t.k0s(),t.j41(12,"ngx-dropzone",4,5),t.bIt("change",function(p){return a.onSelect(p)}),t.j41(14,"ngx-dropzone-label"),t.EFF(15,"Drop your certificate"),t.k0s(),t.DNE(16,St,1,2,"ngx-dropzone-image-preview",6),t.k0s(),t.j41(17,"button",7),t.EFF(18,"Submit"),t.k0s()(),t.nrm(19,"app-card-certificate")),2&i&&(t.R7$(3),t.Y8G("ngIf",a.error_msg),t.R7$(4),t.Y8G("formControl",a.title),t.R7$(4),t.Y8G("formControl",a.url),t.R7$(1),t.Y8G("accept","image/jpeg,image/jpg,image/png")("id","idtest")("aria-label","al-test"),t.R7$(4),t.Y8G("ngIf",a.files))},dependencies:[l.qT,l.me,l.BC,l.cb,l.YS,l.l_,T.s3,T.Gt,T.bB,v.$z,ut.fg,y.rl,y.nJ,y.TL,l.cV,c.bT,bt],styles:[".certificatesTable[_ngcontent-%COMP%]{width:90%;margin:auto}.InserCertificate[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;width:50%;margin:auto}button[_ngcontent-%COMP%]{background-color:var(--primary)!important;color:#fff!important}"]})}}return n})()},{path:"logout",component:lt}]}];let Tt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({providers:[d],imports:[l.X1,w.G,c.MD,f.iI.forChild(Ft)]})}}return n})()}}]);