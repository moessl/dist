"use strict";(self.webpackChunkng_alain=self.webpackChunkng_alain||[]).push([[819],{8819:function(Tn,S,a){a.r(S),a.d(S,{DelonModule:function(){return _n}});var s=a(28551),c=a(56213),T=a(69808),y=a(98866),_=a(4521),Z=a(18392),n=a(59731),F=a(75617),g=a(41894),v=a(77484),f=a(76042),C=a(92643),h=a(82683),Q=function(){var e=function(){function u(o,t){(0,c.Z)(this,u),this.aclSrv=o,this.menuSrv=t,this.full=!0,this.roleA="",this.roleB=""}return(0,s.Z)(u,[{key:"data",get:function(){return this.aclSrv.data}},{key:"reMenu",value:function(){this.menuSrv.resume()}},{key:"toggleFull",value:function(){this.full=!this.full,this.aclSrv.setFull(this.full),this.reMenu()}},{key:"toggleRoleA",value:function(){this.full=!1,this.roleA="role-a"===this.roleA?"":"role-a",this.aclSrv.setFull(this.full),this.aclSrv.setRole([this.roleA]),this.reMenu()}},{key:"toggleRoleB",value:function(){this.full=!1,this.roleB="role-b"===this.roleB?"":"role-b",this.aclSrv.setFull(this.full),this.aclSrv.setRole([this.roleB]),this.reMenu()}}]),u}();return e.\u0275fac=function(o){return new(o||e)(n.Y36(Z._8),n.Y36(F.hl))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-acl"]],decls:32,vars:14,consts:[[1,"alain-default__content-title"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","\u6309\u94ae\u7c92\u5ea6"],["nz-button","",3,"acl"],["nz-button","",1,"ml-sm",3,"acl"],["nzTitle","\u5168\u91cf"],["nz-button","",3,"click"],[1,"pt-md"],["nzTitle","\u89d2\u8272[role-a]"],["nzTitle","\u89d2\u8272[role-b]"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"h1"),n._uU(2," ACL \u8bbf\u95ee\u63a7\u5236 "),n.TgZ(3,"small"),n._uU(4,"\u6ce8\u610f\u89c2\u5bdf\u5de6\u8fb9\u7684\u83dc\u5355\uff1bACLService\u63d0\u4f9b\u4e00\u4e2a\u5b8c\u6574\u7684\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\u7684\u670d\u52a1\uff0c\u82e5\u9700\u8981\u652f\u6301\u8def\u7531\u5b88\u536b\uff0c\u8bf7\u914d\u5408ACLService\u4e0eRoute Guard\u914d\u5408\u7b80\u4fbf\u5b9e\u73b0\u3002"),n.qZA()()(),n.TgZ(5,"div",1)(6,"div",2)(7,"nz-card",3),n._uU(8),n.ALo(9,"json"),n.TgZ(10,"button",4),n._uU(11,"role-a"),n.qZA(),n.TgZ(12,"button",5),n._uU(13,"role-b"),n.qZA()()()(),n.TgZ(14,"div",1)(15,"div",2)(16,"nz-card",6)(17,"button",7),n.NdJ("click",function(){return t.toggleFull()}),n.TgZ(18,"span"),n._uU(19),n.qZA()(),n.TgZ(20,"p",8),n._uU(21,"\u5168\u91cf\u7c7b\u6307\u7cfb\u7edf\u7ba1\u7406\u5458\u89d2\u8272\uff0c\u65e0\u4efb\u4f55\u53d7\u9650\u3002"),n.qZA()()(),n.TgZ(22,"div",2)(23,"nz-card",9)(24,"button",7),n.NdJ("click",function(){return t.toggleRoleA()}),n.TgZ(25,"span"),n._uU(26),n.qZA()()()(),n.TgZ(27,"div",2)(28,"nz-card",10)(29,"button",7),n.NdJ("click",function(){return t.toggleRoleB()}),n.TgZ(30,"span"),n._uU(31),n.qZA()()()()()),2&o&&(n.xp6(5),n.Q6J("nzGutter",8),n.xp6(1),n.Q6J("nzSpan",24),n.xp6(2),n.hij(" ACL\u539f\u59cb\u6570\u636e\uff1a",n.lcZ(9,12,t.data)," "),n.xp6(2),n.Q6J("acl","role-a"),n.xp6(2),n.Q6J("acl","role-b"),n.xp6(2),n.Q6J("nzGutter",8),n.xp6(1),n.Q6J("nzSpan",8),n.xp6(4),n.hij("",t.full?"\u79bb\u5f00":"\u8bbe\u7f6e","\u6743\u9650"),n.xp6(3),n.Q6J("nzSpan",8),n.xp6(4),n.hij("",t.roleA.length>0?"\u79bb\u5f00":"\u8bbe\u7f6e","\u6743\u9650"),n.xp6(1),n.Q6J("nzSpan",8),n.xp6(4),n.hij("",t.roleB.length>0?"\u79bb\u5f00":"\u8bbe\u7f6e","\u6743\u9650"))},directives:[g.SK,g.t3,v.bd,f.ix,C.dQ,h.w,Z.wl],pipes:[T.Ts],encapsulation:2}),e}(),X=a(69614),J=a(49727),E=function(){var e=function(){function u(o,t){(0,c.Z)(this,u),this.cache=o,this.msg=t,this.KEY="user"}return(0,s.Z)(u,[{key:"set",value:function(){this.cache.set(this.KEY,+new Date)}},{key:"get",value:function(){this.msg.success(this.cache.getNone(this.KEY))}}]),u}();return e.\u0275fac=function(o){return new(o||e)(n.Y36(X.Q),n.Y36(J.dD))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-cache"]],decls:10,vars:0,consts:[[1,"alain-default__content-title"],["href","https://ng-alain.com/components/cache","target","_blank"],["nzTitle","Service"],["nz-button","",3,"click"],["nz-button","",1,"ml-sm",3,"click"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"h1"),n._uU(2," Cache \u7f13\u5b58, "),n.TgZ(3,"a",1),n._uU(4,"Document"),n.qZA()()(),n.TgZ(5,"nz-card",2)(6,"button",3),n.NdJ("click",function(){return t.set()}),n._uU(7,"\u8bbe\u7f6e"),n.qZA(),n.TgZ(8,"button",4),n.NdJ("click",function(){return t.get()}),n._uU(9,"\u83b7\u53d6"),n.qZA()())},directives:[v.bd,f.ix,C.dQ,h.w],encapsulation:2}),e}(),H=a(39535);function P(e,u){if(1&e&&(n.TgZ(0,"button",3),n._uU(1),n.qZA()),2&e){var o=u.$implicit,t=n.oxw();n.MGl("http-url","assets/tmp/demo",o,""),n.Q6J("http-data",t.data),n.xp6(1),n.hij(" ",o," ")}}var U=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u),this.fileTypes=[".xlsx",".docx",".pptx",".pdf"],this.data={otherdata:1,time:new Date}});return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-down-file"]],decls:5,vars:1,consts:[[1,"alain-default__content-title"],["nzTitle","DEMO"],["nz-button","","class","mr-sm","down-file","","file-name","demo\u4e2d\u6587",3,"http-data","http-url",4,"ngFor","ngForOf"],["nz-button","","down-file","","file-name","demo\u4e2d\u6587",1,"mr-sm",3,"http-data","http-url"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"h1"),n._uU(2,"Download a file"),n.qZA()(),n.TgZ(3,"nz-card",1),n.YNc(4,P,2,3,"button",2),n.qZA()),2&o&&(n.xp6(4),n.Q6J("ngForOf",t.fileTypes))},directives:[v.bd,T.sg,f.ix,C.dQ,h.w,H.Q],encapsulation:2}),e}(),I=a(38169),W=a(29953),D=a(54350),$=function(u){return{params:u}},B=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u),this.params={},this.url="/user",this.searchSchema={properties:{no:{type:"string",title:"\u7f16\u53f7"}}},this.columns=[{title:"\u7f16\u53f7",index:"no"},{title:"\u8c03\u7528\u6b21\u6570",type:"number",index:"callNo"},{title:"\u5934\u50cf",type:"img",width:"50px",index:"avatar"},{title:"\u65f6\u95f4",type:"date",index:"updatedAt"}]});return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-delon-form"]],decls:5,vars:8,consts:[[3,"title"],["mode","search",3,"schema","formData","formSubmit","formReset"],[3,"data","columns","req"],["st",""]],template:function(o,t){if(1&o){var r=n.EpF();n._UZ(0,"page-header",0),n.TgZ(1,"nz-card")(2,"sf",1),n.NdJ("formSubmit",function(p){return n.CHM(r),n.MAs(4).reset(p)})("formReset",function(){return n.CHM(r),n.MAs(4).reset(t.params)}),n.qZA(),n._UZ(3,"st",2,3),n.qZA()}2&o&&(n.Q6J("title","Page Name"),n.xp6(2),n.Q6J("schema",t.searchSchema)("formData",t.params),n.xp6(1),n.Q6J("data",t.url)("columns",t.columns)("req",n.VKq(6,$,t.params)))},directives:[I.q,v.bd,W.kJ,D.A5],encapsulation:2}),e}(),x=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u)});return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-guard-admin"]],decls:2,vars:0,template:function(o,t){1&o&&(n.TgZ(0,"p"),n._uU(1,"\u8fd9\u662f\u4e00\u4e2aadmin\u9875\u9762"),n.qZA())},encapsulation:2}),e}(),L=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u)});return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-guard-auth"]],decls:2,vars:0,template:function(o,t){1&o&&(n.TgZ(0,"p"),n._uU(1,"\u8fd9\u662f\u4e00\u4e2auser1\u9875\u9762"),n.qZA())},encapsulation:2}),e}(),nn=a(69751),tn=a(57957),k=function(){var e=function(){function u(o){(0,c.Z)(this,u),this.confirmSrv=o}return(0,s.Z)(u,[{key:"canDeactivate",value:function(t,r,l,p){var m=this;return new nn.y(function(M){m.confirmSrv.confirm({nzTitle:"\u786e\u8ba4\u8981\u79bb\u5f00\u5417\uff1f",nzContent:"\u4f60\u5df2\u7ecf\u586b\u5199\u4e86\u90e8\u5206\u8868\u5355\u79bb\u5f00\u4f1a\u653e\u5f03\u5df2\u7ecf\u586b\u5199\u7684\u5185\u5bb9\u3002",nzOkText:"\u79bb\u5f00",nzCancelText:"\u53d6\u6d88",nzOnOk:function(){M.next(!0),M.complete()},nzOnCancel:function(){M.next(!1),M.complete()}})})}}]),u}();return e.\u0275fac=function(o){return new(o||e)(n.LFG(tn.Sf))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e}(),en=function(){return["/delon/guard/leave"]},on=function(){return["/delon/guard/auth"]},un=function(){return["/delon/guard/admin"]},q=function(){var e=function(){function u(o,t,r){(0,c.Z)(this,u),this.aclSrv=o,this.menuSrv=t,this.router=r}return(0,s.Z)(u,[{key:"data",get:function(){return this.aclSrv.data}},{key:"setRole",value:function(t){this.aclSrv.setFull("boolean"==typeof t&&t),this.aclSrv.set({role:[t]}),this.menuSrv.resume(),this.router.navigate(["/delon/guard"])}}]),u}();return e.\u0275fac=function(o){return new(o||e)(n.Y36(Z._8),n.Y36(F.hl),n.Y36(_.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-guard"]],decls:28,vars:9,consts:[[1,"alain-default__content-title"],["nz-button","",3,"routerLink"],[1,"ml-sm"],["nz-button","",3,"click"],[1,"mb-lg"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"h1"),n._uU(2," \u8def\u7531\u5b88\u536b "),n.qZA()(),n.TgZ(3,"nz-button-group")(4,"button",1)(5,"span"),n._uU(6,"\u79bb\u5f00\u786e\u8ba4\u9875"),n.qZA()()(),n.TgZ(7,"nz-button-group",2)(8,"button",3),n.NdJ("click",function(){return t.setRole(!0)}),n.TgZ(9,"span"),n._uU(10,"\u8bbe\u7f6e\u7ba1\u7406\u5458"),n.qZA()(),n.TgZ(11,"button",3),n.NdJ("click",function(){return t.setRole("user1")}),n.TgZ(12,"span"),n._uU(13,"\u8bbe\u7f6e\u5458\u5de51"),n.qZA()(),n.TgZ(14,"button",3),n.NdJ("click",function(){return t.setRole("user2")}),n.TgZ(15,"span"),n._uU(16,"\u8bbe\u7f6e\u5458\u5de52"),n.qZA()()(),n.TgZ(17,"nz-button-group",2)(18,"button",1)(19,"span"),n._uU(20,"\u9700\u8981user1"),n.qZA()(),n.TgZ(21,"button",1)(22,"span"),n._uU(23,"\u9700\u8981\u7ba1\u7406\u5458"),n.qZA()()(),n.TgZ(24,"p",4),n._uU(25),n.ALo(26,"json"),n.qZA(),n._UZ(27,"router-outlet")),2&o&&(n.xp6(4),n.Q6J("routerLink",n.DdM(6,en)),n.xp6(14),n.Q6J("routerLink",n.DdM(7,on)),n.xp6(3),n.Q6J("routerLink",n.DdM(8,un)),n.xp6(4),n.hij("\u5f53\u524dACL\u4fe1\u606f\uff1a",n.lcZ(26,4,t.data),""))},directives:[f.fY,h.w,f.ix,C.dQ,_.rH,_.lC],pipes:[T.Ts],encapsulation:2}),e}(),an=function(){return["/logics/guard"]},N=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u)});return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-guard-leave"]],decls:5,vars:3,consts:[["nz-button","",3,"nzType","routerLink"]],template:function(o,t){1&o&&(n.TgZ(0,"p"),n._uU(1,"\u79bb\u5f00\u65f6\u9700\u8981\u786e\u8ba4"),n.qZA(),n.TgZ(2,"button",0)(3,"span"),n._uU(4,"\u6211\u8981\u79bb\u5f00"),n.qZA()()),2&o&&(n.xp6(2),n.Q6J("nzType","primary")("routerLink",n.DdM(2,an)))},directives:[f.ix,C.dQ,h.w,_.rH],encapsulation:2}),e}(),rn=a(25718),i=a(93075),d=a(64546),A=a(11047),ln=a(40656),O=a(78054),z=function(){return{standalone:!0}},R=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u),this.value="https://ng-alain.com/",this.background="#ffffff",this.backgroundAlpha=1,this.foreground="#000000",this.foregroundAlpha=1,this.level="L",this.mime="image/png",this.padding=10,this.size=220});return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-qr"]],decls:54,vars:59,consts:[[1,"alain-default__content-title"],["href","//ng-alain.com/components/qr","target","_blank"],[3,"nzGutter"],[1,"text-center",3,"nzSpan"],[2,"border","1px solid #999",3,"value","background","backgroundAlpha","foreground","foregroundAlpha","level","mime","padding","size"],[3,"nzSpan"],["nz-form",""],["nz-input","","type","color",2,"width","100px",3,"ngModel","ngModelOptions","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","ngModelOptions","ngModelChange"],[3,"ngModel","ngModelOptions","ngModelChange"],["nzValue","L","nzLabel","L"],["nzValue","M","nzLabel","M"],["nzValue","Q","nzLabel","Q"],["nzValue","H","nzLabel","H"],["nzValue","image/png","nzLabel","image/png"],["nzValue","image/jpeg","nzLabel","image/jpeg"],["nzValue","image/gif","nzLabel","image/gif"],[3,"ngModel","ngModelOptions","nzMin","nzMax","ngModelChange"],[3,"ngModel","ngModelOptions","nzMin","nzMax","nzStep","ngModelChange"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"h1"),n._uU(2," \u4e8c\u7ef4\u7801 "),n.TgZ(3,"a",1),n._uU(4,"Document"),n.qZA()()(),n.TgZ(5,"nz-card")(6,"nz-row",2)(7,"nz-col",3),n._UZ(8,"qr",4),n.qZA(),n.TgZ(9,"nz-col",5)(10,"form",6)(11,"nz-form-item")(12,"nz-form-label",5),n._uU(13,"\u80cc\u666f"),n.qZA(),n.TgZ(14,"nz-form-control",5)(15,"nz-input-group")(16,"input",7),n.NdJ("ngModelChange",function(l){return t.background=l}),n.qZA(),n.TgZ(17,"nz-input-number",8),n.NdJ("ngModelChange",function(l){return t.backgroundAlpha=l}),n.qZA()()()(),n.TgZ(18,"nz-form-item")(19,"nz-form-label",5),n._uU(20,"\u524d\u666f"),n.qZA(),n.TgZ(21,"nz-form-control",5)(22,"nz-input-group")(23,"input",7),n.NdJ("ngModelChange",function(l){return t.foreground=l}),n.qZA(),n.TgZ(24,"nz-input-number",8),n.NdJ("ngModelChange",function(l){return t.foregroundAlpha=l}),n.qZA()()()(),n.TgZ(25,"nz-form-item")(26,"nz-form-label",5),n._uU(27,"\u8bef\u5dee"),n.qZA(),n.TgZ(28,"nz-form-control",5)(29,"nz-select",9),n.NdJ("ngModelChange",function(l){return t.level=l}),n._UZ(30,"nz-option",10)(31,"nz-option",11)(32,"nz-option",12)(33,"nz-option",13),n.qZA()()(),n.TgZ(34,"nz-form-item")(35,"nz-form-label",5),n._uU(36,"Mime"),n.qZA(),n.TgZ(37,"nz-form-control",5)(38,"nz-select",9),n.NdJ("ngModelChange",function(l){return t.mime=l}),n._UZ(39,"nz-option",14)(40,"nz-option",15)(41,"nz-option",16),n.qZA()()(),n.TgZ(42,"nz-form-item")(43,"nz-form-label",5),n._uU(44,"\u5185\u8fb9\u8ddd"),n.qZA(),n.TgZ(45,"nz-form-control",5)(46,"nz-input-number",17),n.NdJ("ngModelChange",function(l){return t.padding=l}),n.qZA(),n._uU(47,"px "),n.qZA()(),n.TgZ(48,"nz-form-item")(49,"nz-form-label",5),n._uU(50,"\u5927\u5c0f"),n.qZA(),n.TgZ(51,"nz-form-control",5)(52,"nz-input-number",18),n.NdJ("ngModelChange",function(l){return t.size=l}),n.qZA(),n._uU(53,"px "),n.qZA()()()()()()),2&o&&(n.xp6(6),n.Q6J("nzGutter",24),n.xp6(1),n.Q6J("nzSpan",8),n.xp6(1),n.Q6J("value",t.value)("background",t.background)("backgroundAlpha",t.backgroundAlpha)("foreground",t.foreground)("foregroundAlpha",t.foregroundAlpha)("level",t.level)("mime",t.mime)("padding",t.padding)("size",t.size),n.xp6(1),n.Q6J("nzSpan",16),n.xp6(3),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",16),n.xp6(2),n.Q6J("ngModel",t.background)("ngModelOptions",n.DdM(51,z)),n.xp6(1),n.Q6J("ngModel",t.backgroundAlpha)("nzMin",0)("nzMax",1)("nzStep",.1)("ngModelOptions",n.DdM(52,z)),n.xp6(2),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",16),n.xp6(2),n.Q6J("ngModel",t.foreground)("ngModelOptions",n.DdM(53,z)),n.xp6(1),n.Q6J("ngModel",t.foregroundAlpha)("nzMin",0)("nzMax",1)("nzStep",.1)("ngModelOptions",n.DdM(54,z)),n.xp6(2),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",16),n.xp6(1),n.Q6J("ngModel",t.level)("ngModelOptions",n.DdM(55,z)),n.xp6(6),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",16),n.xp6(1),n.Q6J("ngModel",t.mime)("ngModelOptions",n.DdM(56,z)),n.xp6(5),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",16),n.xp6(1),n.Q6J("ngModel",t.padding)("ngModelOptions",n.DdM(57,z))("nzMin",0)("nzMax",100),n.xp6(3),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",16),n.xp6(1),n.Q6J("ngModel",t.size)("ngModelOptions",n.DdM(58,z))("nzMin",100)("nzMax",1e3)("nzStep",t.padding))},directives:[v.bd,g.SK,g.t3,rn.q7,i._Y,i.JL,i.F,d.Lr,d.Nx,d.iK,d.Fd,h.w,A.gB,A.Zp,i.Fj,i.JJ,i.On,ln._,O.Vq,O.Ip],encapsulation:2}),e}(),w=a(41991),G=a(21457),b=a(63677),pn=a(70647),Y=a(5e3),sn=a(76726),cn=function(){return[0,0,0,0]};function mn(e,u){if(1&e&&n._UZ(0,"g2-mini-bar",21),2&e){var o=n.oxw();n.Q6J("padding",n.DdM(2,cn))("data",o.events)}}var dn=function(u){return{params:u}},gn=function(){return{list:"results"}},fn=function(u){return{reName:u}},j=function(){var e=function(){function u(o,t){var r=this;(0,c.Z)(this,u),this.http=o,this.message=t,this.ps=20,this.total=200,this.args={_allow_anonymous:!0,userid:null},this.url="https://api.randomuser.me/?results=20",this.events=[],this.scroll={y:"230px"},this.columns=[{title:"id",index:"id.value",type:"checkbox"},{title:"Avatar",index:"picture.thumbnail",type:"img",width:80},{title:"Name",index:"name.first",width:150,format:function(p){return"".concat(p.name.first," ").concat(p.name.last)},type:"link",click:function(p){return r.message.info("".concat(p.name.first))}},{title:"Email",index:"email"},{title:"Gender",index:"gender",type:"yn",yn:{truth:"female",yes:"\u7537",no:"\u5973",mode:"text"},width:120},{title:"Events",render:"events",width:90},{title:"Registered",index:"registered.date",type:"date",width:170},{title:"Actions",width:120,buttons:[{text:"Edit",click:function(p){return r.message.info("edit [".concat(p.id.value,"]"))},iif:function(p){return"female"===p.gender}},{text:"Delete",type:"del",click:function(p){return r.message.info("deleted [".concat(p.id.value,"]"))}}]}]}return(0,s.Z)(u,[{key:"ngOnInit",value:function(){var t=this;this.http.get("/chart/visit").subscribe(function(r){return t.events=r.slice(0,8)})}},{key:"fullChange",value:function(t){this.scroll=t?{y:"350px"}:{y:"230px"}}}]),u}();return e.\u0275fac=function(o){return new(o||e)(n.Y36(F.lP),n.Y36(J.dD))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-st"]],decls:43,vars:18,consts:[[1,"alain-default__content-title"],["href","//ng-alain.com/components/table","target","_blank"],["href","//ng-alain.com/components/full-content","target","_blank"],[3,"fullscreenChange"],["nz-row","",1,"mb-md"],["nz-col","","nzSpan","12"],["nz-form","","nzLayout","inline","se-container","",1,"mb-sm"],["label","User ID","labelWidth","0"],["nz-input","","name","userid","id","userid",3,"ngModel","ngModelChange"],["nz-button","",3,"nzType","nzLoading","click"],["nz-button","",3,"disabled","click"],[1,"text-right"],["nz-button","","nz-dropdown","",3,"nzDropdownMenu"],["nz-icon","","nzType","down"],["exportMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["nz-button","","full-toggle","",1,"ml-sm",3,"nzType"],[3,"data","req","res","total","ps","columns","scroll"],["st",""],["st-row","events"],["height","15","theme","mini","color","#999","borderWidth","3","tooltipType","mini",3,"padding","data"]],template:function(o,t){if(1&o){var r=n.EpF();n.TgZ(0,"div",0)(1,"h1"),n._uU(2," Fullscreen & ST "),n.TgZ(3,"small"),n._uU(4,"\u4f7f\u7528 "),n.TgZ(5,"a",1),n._uU(6,"st"),n.qZA(),n._uU(7,"\u3001 "),n.TgZ(8,"a",2),n._uU(9,"full-content"),n.qZA(),n._uU(10," \u7ec4\u5408\uff0c\u7531\u4e8e nz-table \u56fa\u5b9a\u8868\u5934\u6682\u4e0d\u652f\u6301\u81ea\u9002\u5e94\uff0c\u56e0\u6b64\u8868\u683c\u7684\u5c55\u793a\u7684\u6548\u679c\u5728\u54cd\u5e94\u5f0f\u91cc\u9762\u6548\u679c\u5e76\u4e0d\u662f\u7279\u522b\u597d\u3002"),n.qZA()()(),n.TgZ(11,"full-content",3),n.NdJ("fullscreenChange",function(m){return t.fullChange(m)}),n.TgZ(12,"nz-card")(13,"div",4)(14,"div",5)(15,"form",6)(16,"se",7)(17,"input",8),n.NdJ("ngModelChange",function(m){return t.args.userid=m}),n.qZA()(),n.TgZ(18,"se")(19,"button",9),n.NdJ("click",function(){return n.CHM(r),n.MAs(41).load()}),n._uU(20,"Search"),n.qZA(),n.TgZ(21,"button",10),n.NdJ("click",function(){return n.CHM(r),n.MAs(41).load(1,{_allow_anonymous:!0})}),n._uU(22,"Clear"),n.qZA()()()(),n.TgZ(23,"div",5)(24,"div",11)(25,"button",12)(26,"span"),n._uU(27,"Export"),n.qZA(),n._UZ(28,"i",13),n.qZA(),n.TgZ(29,"nz-dropdown-menu",null,14)(31,"ul",15)(32,"li",16),n._uU(33,"Excel"),n.qZA(),n.TgZ(34,"li",16),n._uU(35,"JSON"),n.qZA(),n.TgZ(36,"li",16),n._uU(37,"PNG"),n.qZA()()(),n.TgZ(38,"button",17),n._uU(39,"Full"),n.qZA()()()(),n.TgZ(40,"st",18,19),n.YNc(42,mn,1,3,"ng-template",20),n.qZA()()()}if(2&o){var l=n.MAs(30);n.xp6(17),n.Q6J("ngModel",t.args.userid),n.xp6(2),n.Q6J("nzType","primary")("nzLoading",t.http.loading),n.xp6(2),n.Q6J("disabled",t.http.loading),n.xp6(4),n.Q6J("nzDropdownMenu",l),n.xp6(13),n.Q6J("nzType","default"),n.xp6(2),n.Q6J("data",t.url)("req",n.VKq(13,dn,t.args))("res",n.VKq(16,fn,n.DdM(15,gn)))("total",t.total)("ps",t.ps)("columns",t.columns)("scroll",t.scroll)}},directives:[w.Fy,v.bd,g.SK,g.t3,i._Y,i.JL,i.F,d.Lr,G.nV,G.d_,A.Zp,i.Fj,i.JJ,i.On,f.ix,C.dQ,h.w,b.wA,b.cm,pn.Ls,b.RR,Y.wO,Y.r9,w.EM,D.A5,D.wZ,sn.N],encapsulation:2}),e}(),hn=a(93310),zn=a(65442),V=function(){return{standalone:!0}},vn=[{path:"st",component:j},{path:"util",component:function(){var e=function(){function u(o){(0,c.Z)(this,u),this.messageSrv=o,this.format_str="this is ${name}",this.format_res="",this.format_obj=JSON.stringify({name:"asdf"}),this.content="time ".concat(+new Date,"\n\n    \u4e2d\u6587\uff01@#\uffe5%\u2026\u2026&*")}return(0,s.Z)(u,[{key:"onFormat",value:function(){var t=null;try{t=JSON.parse(this.format_obj)}catch(r){return void this.messageSrv.error("\u65e0\u6cd5\u4f7f\u7528 JSON.parse \u8f6c\u6362")}this.format_res=(0,hn.WU)(this.format_str,t,!0)}},{key:"onYuan",value:function(t){this.yuan_res=(0,y.c2)(t)}},{key:"onCopy",value:function(){var t=this;(0,zn.JG)("time ".concat(+new Date)).then(function(){return t.messageSrv.success("success")})}}]),u}();return e.\u0275fac=function(o){return new(o||e)(n.Y36(J.dD))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-util"]],decls:39,vars:23,consts:[[1,"alain-default__content-title"],[3,"nzGutter"],[3,"nzSpan"],["nzTitle","\u5b57\u7b26\u4e32\u7c7b"],["nzType","inner","nzTitle","format"],["nz-form",""],[3,"nzSm"],["nz-input","",3,"ngModel","ngModelOptions","ngModelChange"],[3,"nzSpan","nzOffset"],["nz-button","",3,"click"],["nzType","inner","nzTitle","yuan"],["type","number","nz-input","",3,"ngModel","ngModelChange"],[3,"innerHTML"],["nzTitle","\u5176\u5b83\u7c7b"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"h1"),n._uU(2," \u5de5\u5177\u96c6 "),n.TgZ(3,"small"),n._uU(4,"@delon/util \u65e5\u5e38\u7528\u6cd5\u3002"),n.qZA()()(),n.TgZ(5,"nz-row",1)(6,"nz-col",2)(7,"nz-card",3)(8,"nz-card",4)(9,"form",5)(10,"nz-form-item")(11,"nz-form-label",6),n._uU(12,"String"),n.qZA(),n.TgZ(13,"nz-form-control",6)(14,"input",7),n.NdJ("ngModelChange",function(l){return t.format_str=l}),n.qZA()()(),n.TgZ(15,"nz-form-item")(16,"nz-form-label",6),n._uU(17,"Object"),n.qZA(),n.TgZ(18,"nz-form-control",6)(19,"input",7),n.NdJ("ngModelChange",function(l){return t.format_obj=l}),n.qZA()()(),n.TgZ(20,"nz-form-item")(21,"nz-form-control",8)(22,"button",9),n.NdJ("click",function(){return t.onFormat()}),n._uU(23,"Run"),n.qZA()()(),n.TgZ(24,"nz-form-item")(25,"nz-form-label",6),n._uU(26,"Result"),n.qZA(),n.TgZ(27,"nz-form-control",6),n._uU(28),n.qZA()()()(),n.TgZ(29,"nz-card",10)(30,"nz-row",1)(31,"nz-col",2)(32,"input",11),n.NdJ("ngModelChange",function(l){return t.yuan_str=l})("ngModelChange",function(l){return t.onYuan(l)}),n.qZA()(),n.TgZ(33,"nz-col",2),n._UZ(34,"div",12),n.qZA()()()()(),n.TgZ(35,"nz-col",2)(36,"nz-card",13)(37,"button",9),n.NdJ("click",function(){return t.onCopy()}),n._uU(38,"Copy"),n.qZA()()()()),2&o&&(n.xp6(5),n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(5),n.Q6J("nzSm",8),n.xp6(2),n.Q6J("nzSm",16),n.xp6(1),n.Q6J("ngModel",t.format_str)("ngModelOptions",n.DdM(21,V)),n.xp6(2),n.Q6J("nzSm",8),n.xp6(2),n.Q6J("nzSm",16),n.xp6(1),n.Q6J("ngModel",t.format_obj)("ngModelOptions",n.DdM(22,V)),n.xp6(2),n.Q6J("nzSpan",16)("nzOffset",8),n.xp6(4),n.Q6J("nzSm",8),n.xp6(2),n.Q6J("nzSm",16),n.xp6(1),n.hij(" ",t.format_res," "),n.xp6(2),n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(1),n.Q6J("ngModel",t.yuan_str),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(1),n.Q6J("innerHTML",t.yuan_res,n.oJD),n.xp6(1),n.Q6J("nzSpan",12))},directives:[g.SK,g.t3,v.bd,i._Y,i.JL,i.F,d.Lr,d.Nx,d.iK,d.Fd,A.Zp,i.Fj,i.JJ,i.On,f.ix,C.dQ,h.w,i.wV],encapsulation:2}),e}()},{path:"acl",component:Q},{path:"guard",component:q,children:[{path:"leave",component:N,canDeactivate:[k]},{path:"auth",component:L,canActivate:[Z.TV],data:{guard:"user1"}},{path:"admin",component:x,canActivate:[Z.TV],data:{guard:"admin"}}]},{path:"cache",component:E},{path:"qr",component:R},{path:"downfile",component:U},{path:"form",component:B}],Cn=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u)});return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[_.Bz.forChild(vn)],_.Bz]}),e}(),_n=function(){var e=(0,s.Z)(function u(){(0,c.Z)(this,u)});return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[k],imports:[[T.ez,y.m8,Cn]]}),e}()}}]);