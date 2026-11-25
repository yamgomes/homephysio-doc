import{$ as Ne,$n as tt,$t as b0,A as Gp,An as nD,At as Wh,B as J,Bn as qo,Cn as ke,Ct as U5,Dn as le,Dr as z_,En as lc,Er as zE,F as I,Ft as X9,G as Kr,Gn as sc,Gt as Zo,H as K,Hn as rC,Ht as Yo,I as I0,In as pi$1,J as LR,Jn as tC,K as Ks,Kn as st,Kt as Zr,Ln as pm,M as HC,Mn as or,Mt as Wp,N as Hb,Nn as ou,Nt as Wr,O as GR,Or as ze,Pt as X,Q as Me,Qn as tr,Qt as at,R as Ie,Rn as pt,Rt as Xs,Sn as kD,Sr as y0,St as Ss,T as F5,Tn as kz,Tr as yp,Tt as VE,Un as rD,V as J9,Vt as Yh,W as Ko,Wn as sD,Wt as Zc,X as Ln$1,Xt as ae,Y as L_,Yn as tD,Z as Lt,Zn as to,_ as D9,_n as hn,_r as xW,_t as R_,an as di,ar as v0,b as E,bn as j5,br as xn,bt as S0,c as At$1,cn as ee,cr as vN,ct as Ot,dn as fu,dr as w0,en as b5,et as Nw,f as Bn$1,fn as g,g as D5,gr as xR,gt as RW,h as D,hn as hC,hr as x0,ht as Qr,i as A,ir as ux,it as O_,j as H5,jn as oD,jt as Wo,k as Go,kn as mx,kt as We,lr as vp,lt as P5,mr as wD,mt as Qo,n as $5,nn as bN,on as eW,or as v5,ot as Oi,pt as QE,q as L6,qn as su,r as $_,rn as cc,rr as ur,rt as OR,sn as ea,sr as vM,t as at$1,tn as b9,tr as ue,u as B5,un as fm,ur as vt,ut as Pe,v as DM,vn as ic,vr as x_,vt as Rt,w as Ep,wr as ye,xr as xt,y as Dp,yn as it,yr as xe,yt as S,z as Is,zn as px,zt as Y}from"./main-3YAACJFV.js";import{C as on,D as xi,E as ta,S as om,T as qr,_ as gl,a as Jn,b as jr,c as Wo$1,d as Zt,f as _l,g as ga,h as fo,i as Iu,l as Yo$1,m as ca,n as Dt,o as Ti,p as at$2,r as Ii,s as Uo,t as Do,u as Zo$1,v as go,w as qo$1,x as la,y as ho}from"./chunk-HviJ3X2M.js";import{n as m,t as l}from"./chunk-Da4-SChG.js";function Bn(n,d){let i=!d?.manualCleanup?d?.injector?.get(tt)??g(tt):null,o=da(d?.equal),g$1;d?.requireSync?g$1=A({kind:0},{equal:o}):g$1=A({kind:1,value:d?.initialValue},{equal:o});let x,F=n.subscribe({next:V=>g$1.set({kind:1,value:V}),error:V=>{g$1.set({kind:2,error:V}),x?.()},complete:()=>{x?.()}});if(d?.requireSync&&g$1().kind===0)throw new E(601,!1);return x=i?.onDestroy(F.unsubscribe.bind(F)),ye(()=>{let V=g$1();switch(V.kind){case 1:return V.value;case 2:throw V.error;case 0:throw new E(601,!1)}},{equal:d?.equal})}function da(n=Object.is){return(d,e)=>d.kind===1&&e.kind===1&&n(d.value,e.value)}var Fn=(()=>{class n extends su{pathId;onInit(){this.pathId=`url(#`+Xs()+`)`}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=Ie({type:n,selectors:[[``,`data-p-icon`,`exclamation-triangle`]],features:[le],decls:7,vars:2,consts:[[`d`,`M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z`,`fill`,`currentColor`],[`d`,`M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z`,`fill`,`currentColor`],[`d`,`M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(i,o){i&1&&(tr(),Go(0,`g`),Kr(1,`path`,0)(2,`path`,1)(3,`path`,2),qo(),Go(4,`defs`)(5,`clipPath`,3),Kr(6,`rect`,4),qo()()),i&2&&(it(`clip-path`,o.pathId),pt(5),sc(`id`,o.pathId))},encapsulation:2,changeDetection:1})}return n})();var Dn=(()=>{class n extends su{pathId;onInit(){this.pathId=`url(#`+Xs()+`)`}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=Ie({type:n,selectors:[[``,`data-p-icon`,`info-circle`]],features:[le],decls:5,vars:2,consts:[[`fill-rule`,`evenodd`,`clip-rule`,`evenodd`,`d`,`M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(i,o){i&1&&(tr(),Go(0,`g`),Kr(1,`path`,0),qo(),Go(2,`defs`)(3,`clipPath`,1),Kr(4,`rect`,2),qo()()),i&2&&(it(`clip-path`,o.pathId),pt(3),sc(`id`,o.pathId))},encapsulation:2,changeDetection:1})}return n})();var ci=(()=>{class n extends su{static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=Ie({type:n,selectors:[[``,`data-p-icon`,`minus`]],features:[le],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(i,o){i&1&&(tr(),Kr(0,`path`,0))},encapsulation:2,changeDetection:1})}return n})();var An=(()=>{class n extends su{pathId;onInit(){this.pathId=`url(#`+Xs()+`)`}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=Ie({type:n,selectors:[[``,`data-p-icon`,`plus`]],features:[le],decls:5,vars:2,consts:[[`d`,`M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(i,o){i&1&&(tr(),Go(0,`g`),Kr(1,`path`,0),qo(),Go(2,`defs`)(3,`clipPath`,1),Kr(4,`rect`,2),qo()()),i&2&&(it(`clip-path`,o.pathId),pt(3),sc(`id`,o.pathId))},encapsulation:2,changeDetection:1})}return n})();var pi=(()=>{class n extends su{pathId;onInit(){this.pathId=`url(#`+Xs()+`)`}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=Ie({type:n,selectors:[[``,`data-p-icon`,`times-circle`]],features:[le],decls:5,vars:2,consts:[[`fill-rule`,`evenodd`,`clip-rule`,`evenodd`,`d`,`M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(i,o){i&1&&(tr(),Go(0,`g`),Kr(1,`path`,0),qo(),Go(2,`defs`)(3,`clipPath`,1),Kr(4,`rect`,2),qo()()),i&2&&(it(`clip-path`,o.pathId),pt(3),sc(`id`,o.pathId))},encapsulation:2,changeDetection:1})}return n})();var Pn=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`;var ua={root:({instance:n})=>[`p-panel p-component`,{"p-panel-toggleable":n.toggleable,"p-panel-expanded":!n._collapsed&&n.toggleable,"p-panel-collapsed":n._collapsed&&n.toggleable}],header:`p-panel-header`,title:`p-panel-title`,headerActions:({instance:n})=>[`p-panel-header-actions`,{"p-panel-icons-start":n.iconPos===`start`,"p-panel-icons-end":n.iconPos===`end`,"p-panel-icons-center":n.iconPos===`center`}],pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`};var Ln=(()=>{class n extends ke{name=`panel`;style=Pn;classes=ua;static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵprov=I({token:n,factory:n.ɵfac})}return n})();var Nn=new D(`PANEL_INSTANCE`);var At=(()=>{class n extends Pe{componentName=`Panel`;$pcPanel=g(Nn,{optional:!0,skipSelf:!0})??void 0;_componentStyle=g(Ln);bindDirectiveInstance=g(ue,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}id=Xs(`pn_id_`);toggleable;_header;_collapsed;get collapsed(){return this._collapsed}set collapsed(e){this._collapsed=e}styleClass;iconPos=`end`;showHeader=!0;toggler=`icon`;transitionOptions=`400ms cubic-bezier(0.86, 0, 0.07, 1)`;toggleButtonProps;motionOptions=S(void 0);computedMotionOptions=ye(()=>l(l({},this.ptm(`motion`)),this.motionOptions()));collapsedChange=new Me;onBeforeToggle=new Me;onAfterToggle=new Me;footerFacet;headerTemplate;iconsTemplate;contentTemplate;footerTemplate;headerIconsTemplate;_headerTemplate;_iconsTemplate;_contentTemplate;_footerTemplate;_headerIconsTemplate;contentWrapperViewChild;get buttonAriaLabel(){return this._header}onHeaderClick(e){this.toggler===`header`&&this.toggle(e)}onIconClick(e){this.toggler===`icon`&&this.toggle(e)}toggle(e){this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),e.preventDefault()}expand(){this._collapsed=!1,this.collapsedChange.emit(!1),this.updateTabIndex()}collapse(){this._collapsed=!0,this.collapsedChange.emit(!0),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll(`input, button, select, a, textarea, [tabindex]`).forEach(i=>{this.collapsed?i.setAttribute(`tabindex`,`-1`):i.removeAttribute(`tabindex`)})}onKeyDown(e){(e.code===`Enter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}onToggleDone(e){this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`icons`:this._iconsTemplate=e.template;break;case`headericons`:this._headerIconsTemplate=e.template;break;default:this._contentTemplate=e.template}})}get dataP(){return this.cn({toggleable:this.toggleable})}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=(function(){let e=[`header`],i=[`icons`],o=[`content`],g=[`footer`],x=[`headericons`],F=[`contentWrapper`],V=[`*`,[[`p-header`]],[[`p-footer`]]],G=[`*`,`p-header`,`p-footer`],_e=H=>({$implicit:H});function Y(H,te){if(H&1&&(Wr(0,`span`,4),Ss(1),Wo()),H&2){let b=xt(2);ze(b.cx(`title`)),Rt(`pBind`,b.ptm(`title`)),it(`id`,b.id+`_header`),pt(),Zo(b._header)}}function R(H,te){H&1&&ic(0)}function B(H,te){}function v(H,te){H&1&&or(0,B,0,0,`ng-template`)}function A(H,te){if(H&1&&(tr(),xn(0,`svg`,10)),H&2){let b=xt(5);Rt(`pBind`,b.ptm(`pcToggleButton.icon`))}}function K(H,te){if(H&1&&(tr(),xn(0,`svg`,11)),H&2){let b=xt(5);Rt(`pBind`,b.ptm(`pcToggleButton.icon`))}}function I(H,te){if(H&1&&(st(0,A,1,1,`svg`,10),st(1,K,1,1,`svg`,11)),H&2){let b=xt(4);at(b.collapsed?-1:0),pt(),at(b.collapsed?1:-1)}}function be(H,te){}function ie(H,te){H&1&&or(0,be,0,0,`ng-template`)}function T(H,te){if(H&1&&(st(0,I,2,2),or(1,ie,1,0,null,9)),H&2){let b=xt(3);at(!b.headerIconsTemplate&&!b._headerIconsTemplate&&!b.toggleButtonProps?.icon?0:-1),pt(),Rt(`ngTemplateOutlet`,b.headerIconsTemplate||b._headerIconsTemplate)(`ngTemplateOutletContext`,S0(3,_e,b.collapsed))}}function ne(H,te){if(H&1){let b=$_();Wr(0,`p-button`,8),Yo(`click`,function(oe){fm(b);let it=xt(2);return pm(it.onIconClick(oe))})(`keydown`,function(oe){fm(b);let it=xt(2);return pm(it.onKeyDown(oe))}),or(1,T,2,5,`ng-template`,null,1,x0),Wo()}if(H&2){let b=xt(2);Rt(`text`,!0)(`rounded`,!0)(`styleClass`,b.cx(`pcToggleButton`))(`buttonProps`,b.toggleButtonProps)(`pt`,b.ptm(`pcToggleButton`))(`unstyled`,b.unstyled()),it(`id`,b.id+`_header`)(`aria-label`,b.buttonAriaLabel)(`aria-controls`,b.id+`_content`)(`aria-expanded`,!b.collapsed)}}function y(H,te){if(H&1){let b=$_();Wr(0,`div`,6),Yo(`click`,function(oe){fm(b);let it=xt();return pm(it.onHeaderClick(oe))}),st(1,Y,2,5,`span`,2),Lt(2,1),or(3,R,1,0,`ng-container`,5),Wr(4,`div`,4),or(5,v,1,0,null,5),st(6,ne,3,10,`p-button`,7),Wo()()}if(H&2){let b=xt();ze(b.cx(`header`)),Rt(`pBind`,b.ptm(`header`)),it(`id`,b.id+`-titlebar`)(`data-p`,b.dataP),pt(),at(b._header?1:-1),pt(2),Rt(`ngTemplateOutlet`,b.headerTemplate||b._headerTemplate),pt(),ze(b.cx(`headerActions`)),Rt(`pBind`,b.ptm(`headerActions`)),pt(),Rt(`ngTemplateOutlet`,b.iconsTemplate||b._iconsTemplate),pt(),at(b.toggleable?6:-1)}}function we(H,te){H&1&&ic(0)}function Ee(H,te){H&1&&ic(0)}function tt(H,te){if(H&1&&(Wr(0,`div`,4),Lt(1,2),or(2,Ee,1,0,`ng-container`,5),Wo()),H&2){let b=xt();ze(b.cx(`footer`)),Rt(`pBind`,b.ptm(`footer`)),pt(2),Rt(`ngTemplateOutlet`,b.footerTemplate||b._footerTemplate)}}return Ie({type:n,selectors:[[`p-panel`]],contentQueries:function(te,b,he){if(te&1&&Is(he,U5,5)(he,e,4)(he,i,4)(he,o,4)(he,g,4)(he,x,4)(he,rC,4),te&2){let oe;Zr(oe=Qr())&&(b.footerFacet=oe.first),Zr(oe=Qr())&&(b.headerTemplate=oe.first),Zr(oe=Qr())&&(b.iconsTemplate=oe.first),Zr(oe=Qr())&&(b.contentTemplate=oe.first),Zr(oe=Qr())&&(b.footerTemplate=oe.first),Zr(oe=Qr())&&(b.headerIconsTemplate=oe.first),Zr(oe=Qr())&&(b.templates=oe)}},viewQuery:function(te,b){if(te&1&&Hb(F,5),te&2){let he;Zr(he=Qr())&&(b.contentWrapperViewChild=he.first)}},hostVars:4,hostBindings:function(te,b){te&2&&(sc(`id`,b.id),it(`data-p`,b.dataP),ze(b.cn(b.cx(`root`),b.styleClass)))},inputs:{id:`id`,toggleable:[2,`toggleable`,`toggleable`,ae],_header:[0,`header`,`_header`],collapsed:[2,`collapsed`,`collapsed`,ae],styleClass:`styleClass`,iconPos:`iconPos`,showHeader:[2,`showHeader`,`showHeader`,ae],toggler:`toggler`,transitionOptions:`transitionOptions`,toggleButtonProps:`toggleButtonProps`,motionOptions:[1,`motionOptions`]},outputs:{collapsedChange:`collapsedChange`,onBeforeToggle:`onBeforeToggle`,onAfterToggle:`onAfterToggle`},features:[xe([Ln,{provide:Nn,useExisting:n},{provide:vt,useExisting:n}]),At$1([ue]),le],ngContentSelectors:G,decls:8,vars:18,consts:[[`contentWrapper`,``],[`icon`,``],[3,`pBind`,`class`],[`pMotionName`,`p-collapsible`,`role`,`region`,3,`pMotionOnAfterEnter`,`pBind`,`pMotion`,`pMotionOptions`,`id`],[3,`pBind`],[4,`ngTemplateOutlet`],[3,`click`,`pBind`],[`severity`,`secondary`,`type`,`button`,`role`,`button`,3,`text`,`rounded`,`styleClass`,`buttonProps`,`pt`,`unstyled`],[`severity`,`secondary`,`type`,`button`,`role`,`button`,3,`click`,`keydown`,`text`,`rounded`,`styleClass`,`buttonProps`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`pBind`],[`data-p-icon`,`plus`,3,`pBind`]],template:function(te,b){te&1&&(Ot(V),st(0,y,7,12,`div`,2),Wr(1,`div`,3),Yo(`pMotionOnAfterEnter`,function(oe){return b.onToggleDone(oe)}),Wr(2,`div`,4)(3,`div`,4,0),Lt(5),or(6,we,1,0,`ng-container`,5),Wo(),st(7,tt,3,4,`div`,2),Wo()()),te&2&&(at(b.showHeader?0:-1),pt(),ze(b.cx(`contentContainer`)),Rt(`pBind`,b.ptm(`contentContainer`))(`pMotion`,!b.toggleable||b.toggleable&&!b.collapsed)(`pMotionOptions`,b.computedMotionOptions())(`id`,b.id+`_content`),it(`aria-labelledby`,b.id+`_header`)(`aria-hidden`,b.collapsed)(`tabindex`,b.collapsed?`-1`:void 0),pt(),ze(b.cx(`contentWrapper`)),Rt(`pBind`,b.ptm(`contentWrapper`)),pt(),ze(b.cx(`content`)),Rt(`pBind`,b.ptm(`content`)),pt(3),Rt(`ngTemplateOutlet`,b.contentTemplate||b._contentTemplate),pt(),at(b.footerFacet||b.footerTemplate||b._footerTemplate?7:-1))},dependencies:[to,Gp,An,ci,D9,ux,ur,ou,ue,xW,RW],encapsulation:2})})()}return n})();var jn=`
    .p-confirmdialog .p-dialog-content {
        display: flex;
        align-items: center;
        gap: dt('confirmdialog.content.gap');
    }

    .p-confirmdialog-icon {
        color: dt('confirmdialog.icon.color');
        font-size: dt('confirmdialog.icon.size');
        width: dt('confirmdialog.icon.size');
        height: dt('confirmdialog.icon.size');
    }
`;var ha={root:`p-confirmdialog`,icon:`p-confirmdialog-icon`,message:`p-confirmdialog-message`,pcRejectButton:`p-confirmdialog-reject-button`,pcAcceptButton:`p-confirmdialog-accept-button`};var Rn=(()=>{class n extends ke{name=`confirmdialog`;style=jn;classes=ha;static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵprov=I({token:n,factory:n.ɵfac})}return n})();var Hn=new D(`CONFIRMDIALOG_INSTANCE`);var $n=(()=>{class n extends Pe{confirmationService;zone;componentName=`ConfirmDialog`;$pcConfirmDialog=g(Hn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(ue,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}header;icon;message;get style(){return this._style}set style(e){this._style=e,this.cd.markForCheck()}styleClass;maskStyleClass;acceptIcon;acceptLabel;closeAriaLabel;acceptAriaLabel;acceptVisible=!0;rejectIcon;rejectLabel;rejectAriaLabel;rejectVisible=!0;acceptButtonStyleClass;rejectButtonStyleClass;closeOnEscape=!0;dismissableMask;blockScroll=!0;rtl=!1;closable=!0;appendTo=S(`body`);key;autoZIndex=!0;baseZIndex=0;transitionOptions=`150ms cubic-bezier(0, 0, 0.2, 1)`;focusTrap=!0;defaultFocus=`accept`;breakpoints;modal=!0;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0),this.cd.markForCheck()}position=`center`;draggable=!0;onHide=new Me;footer;_componentStyle=g(Rn);headerTemplate;footerTemplate;rejectIconTemplate;acceptIconTemplate;messageTemplate;iconTemplate;headlessTemplate;templates;$appendTo=ye(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_rejectIconTemplate;_acceptIconTemplate;_messageTemplate;_iconTemplate;_headlessTemplate;confirmation;_visible;_style;maskVisible;dialog;wrapper;contentContainer;subscription;preWidth;styleElement;id=Xs(`pn_id_`);ariaLabelledBy=this.getAriaLabelledBy();translationSubscription;constructor(e,i){super(),this.confirmationService=e,this.zone=i,this.subscription=this.confirmationService.requireConfirmation$.subscribe(o=>{if(!o){this.hide();return}o.key===this.key&&(this.confirmation=o,this.confirmation.accept&&(this.confirmation.acceptEvent=new Me,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new Me,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}onInit(){this.breakpoints&&this.createStyle(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.visible&&this.cd.markForCheck()})}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`message`:this._messageTemplate=e.template;break;case`icon`:this._iconTemplate=e.template;break;case`rejecticon`:this._rejectIconTemplate=e.template;break;case`accepticon`:this._acceptIconTemplate=e.template;break;case`headless`:this._headlessTemplate=e.template}})}getAriaLabelledBy(){return this.header!==null?Xs(`pn_id_`)+`_header`:null}option(e,i){let o=this.confirmation??{},g=Object.prototype.hasOwnProperty.call(o,e)?o:this;if(Object.prototype.hasOwnProperty.call(g,e)){let x=i?g[e]?.[i]:g[e];return typeof x==`function`?x():x}}getButtonStyleClass(e,i){return[this.cx(e),this.option(i)].filter(Boolean).join(` `)}getElementToFocus(){if(this.dialog?.el?.nativeElement)switch(this.option(`defaultFocus`)){case`accept`:return pi$1(this.dialog.el.nativeElement,`.p-confirm-dialog-accept`);case`reject`:return pi$1(this.dialog.el.nativeElement,`.p-confirm-dialog-reject`);case`close`:return pi$1(this.dialog.el.nativeElement,`.p-dialog-header-close`);case`none`:return null;default:return pi$1(this.dialog.el.nativeElement,`.p-confirm-dialog-accept`)}}createStyle(){if(!this.styleElement){this.styleElement=this.document.createElement(`style`),this.styleElement.type=`text/css`,tC(this.styleElement,`nonce`,this.config?.csp()?.nonce),this.document.head.appendChild(this.styleElement);let e=``;for(let i in this.breakpoints)e+=`
                    @media screen and (max-width: ${i}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[i]} !important;
                        }
                    }
                `;this.styleElement.innerHTML=e,tC(this.styleElement,`nonce`,this.config?.csp()?.nonce)}}close(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(GR.CANCEL),this.hide(GR.CANCEL)}hide(e){this.onHide.emit(e),this.visible=!1,this.unsubscribeConfirmationEvents()}onDialogHide(){this.confirmation=null}destroyStyle(){this.styleElement&&(this.document.head.removeChild(this.styleElement),this.styleElement=null)}onDestroy(){this.subscription.unsubscribe(),this.unsubscribeConfirmationEvents(),this.translationSubscription&&this.translationSubscription.unsubscribe(),this.destroyStyle()}onVisibleChange(e){e?this.visible=e:this.close()}onAccept(){this.confirmation&&this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(GR.ACCEPT)}onReject(){this.confirmation&&this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(GR.REJECT),this.hide(GR.REJECT)}unsubscribeConfirmationEvents(){this.confirmation&&(this.confirmation.acceptEvent?.unsubscribe(),this.confirmation.rejectEvent?.unsubscribe())}get acceptButtonLabel(){return this.option(`acceptLabel`)||this.getAcceptButtonProps()?.label||this.config.getTranslation(H5.ACCEPT)}get rejectButtonLabel(){return this.option(`rejectLabel`)||this.getRejectButtonProps()?.label||this.config.getTranslation(H5.REJECT)}getAcceptButtonProps(){return this.option(`acceptButtonProps`)}getRejectButtonProps(){return this.option(`rejectButtonProps`)}static ɵfac=function(i){return new(i||n)(ee(P5),ee(Ne))};static ɵcmp=(function(){let e=[`header`],i=[`footer`],o=[`rejecticon`],g=[`accepticon`],x=[`message`],F=[`icon`],V=[`headless`],G=[[[`p-footer`]]],_e=[`p-footer`],Y=(C,q,c)=>({$implicit:C,onAccept:q,onReject:c}),R=C=>({$implicit:C});function B(C,q){C&1&&ic(0)}function v(C,q){if(C&1&&or(0,B,1,0,`ng-container`,7),C&2){let c=xt(2);Rt(`ngTemplateOutlet`,c.headlessTemplate||c._headlessTemplate)(`ngTemplateOutletContext`,w0(2,Y,c.confirmation,c.onAccept.bind(c),c.onReject.bind(c)))}}function A(C,q){C&1&&or(0,v,1,6,`ng-template`,null,2,x0)}function K(C,q){C&1&&ic(0)}function I(C,q){if(C&1&&or(0,K,1,0,`ng-container`,8),C&2){let c=xt(3);Rt(`ngTemplateOutlet`,c.headerTemplate||c._headerTemplate)}}function be(C,q){C&1&&or(0,I,1,1,`ng-template`,null,4,x0)}function ie(C,q){}function T(C,q){C&1&&or(0,ie,0,0,`ng-template`)}function ne(C,q){if(C&1&&or(0,T,1,0,null,8),C&2){let c=xt(3);Rt(`ngTemplateOutlet`,c.iconTemplate||c._iconTemplate)}}function y(C,q){if(C&1&&xn(0,`i`,12),C&2){let c=xt(4);ze(c.option(`icon`)),Rt(`ngClass`,c.cx(`icon`))(`pBind`,c.ptm(`icon`))}}function we(C,q){if(C&1&&or(0,y,1,4,`i`,11),C&2){let c=xt(3);Rt(`ngIf`,c.option(`icon`))}}function Ee(C,q){}function tt(C,q){C&1&&or(0,Ee,0,0,`ng-template`)}function H(C,q){if(C&1&&or(0,tt,1,0,null,7),C&2){let c=xt(3);Rt(`ngTemplateOutlet`,c.messageTemplate||c._messageTemplate)(`ngTemplateOutletContext`,S0(2,R,c.confirmation))}}function te(C,q){if(C&1&&xn(0,`span`,13),C&2){let c=xt(3);ze(c.cx(`message`)),Rt(`pBind`,c.ptm(`message`))(`innerHTML`,c.option(`message`),Nw)}}function b(C,q){if(C&1&&(st(0,ne,1,1)(1,we,1,1,`i`,9),st(2,H,1,4)(3,te,1,4,`span`,10)),C&2){let c=xt(2);at(c.iconTemplate||c._iconTemplate?0:!c.iconTemplate&&!c._iconTemplate&&!c._messageTemplate&&!c.messageTemplate?1:-1),pt(2),at(c.messageTemplate||c._messageTemplate?2:3)}}function he(C,q){if(C&1&&(st(0,be,2,0),or(1,b,4,2,`ng-template`,null,3,x0)),C&2){let c=xt();at(c.headerTemplate||c._headerTemplate?0:-1)}}function oe(C,q){C&1&&ic(0)}function it(C,q){if(C&1&&(Lt(0),or(1,oe,1,0,`ng-container`,8)),C&2){let c=xt(2);pt(),Rt(`ngTemplateOutlet`,c.footerTemplate||c._footerTemplate)}}function Gt(C,q){if(C&1&&xn(0,`i`,18),C&2){let c=xt(6);ze(c.option(`rejectIcon`)),Rt(`pBind`,c.ptm(`pcRejectButton`).icon)}}function Ci(C,q){if(C&1&&or(0,Gt,1,3,`i`,17),C&2){let c=xt(5);Rt(`ngIf`,c.option(`rejectIcon`))}}function vi(C,q){}function vt$1(C,q){C&1&&or(0,vi,0,0,`ng-template`)}function Kt(C,q){if(C&1&&(st(0,Ci,1,1,`i`,16),or(1,vt$1,1,0,null,8)),C&2){let c=xt(4);at(c.option(`rejectIcon`)&&!c.rejectIconTemplate&&!c._rejectIconTemplate?0:-1),pt(),Rt(`ngTemplateOutlet`,c.rejectIconTemplate||c._rejectIconTemplate)}}function xi(C,q){if(C&1){let c=$_();Wr(0,`p-button`,15),Yo(`onClick`,function(){fm(c);let ae=xt(3);return pm(ae.onReject())}),or(1,Kt,2,2,`ng-template`,null,5,x0),Wo()}if(C&2){let c=xt(3);Rt(`pt`,c.ptm(`pcRejectButton`))(`label`,c.rejectButtonLabel)(`styleClass`,c.getButtonStyleClass(`pcRejectButton`,`rejectButtonStyleClass`))(`ariaLabel`,c.option(`rejectButtonProps`,`ariaLabel`))(`buttonProps`,c.getRejectButtonProps())(`unstyled`,c.unstyled())}}function Ii(C,q){if(C&1&&xn(0,`i`,18),C&2){let c=xt(6);ze(c.option(`acceptIcon`)),Rt(`pBind`,c.ptm(`pcAcceptButton`).icon)}}function Ti(C,q){if(C&1&&or(0,Ii,1,3,`i`,17),C&2){let c=xt(5);Rt(`ngIf`,c.option(`acceptIcon`))}}function Si(C,q){}function ki(C,q){C&1&&or(0,Si,0,0,`ng-template`)}function Oi(C,q){if(C&1&&(st(0,Ti,1,1,`i`,16),or(1,ki,1,0,null,8)),C&2){let c=xt(4);at(c.option(`acceptIcon`)&&!c._acceptIconTemplate&&!c.acceptIconTemplate?0:-1),pt(),Rt(`ngTemplateOutlet`,c.acceptIconTemplate||c._acceptIconTemplate)}}function Mi(C,q){if(C&1){let c=$_();Wr(0,`p-button`,15),Yo(`onClick`,function(){fm(c);let ae=xt(3);return pm(ae.onAccept())}),or(1,Oi,2,2,`ng-template`,null,5,x0),Wo()}if(C&2){let c=xt(3);Rt(`pt`,c.ptm(`pcAcceptButton`))(`label`,c.acceptButtonLabel)(`styleClass`,c.getButtonStyleClass(`pcAcceptButton`,`acceptButtonStyleClass`))(`ariaLabel`,c.option(`acceptButtonProps`,`ariaLabel`))(`buttonProps`,c.getAcceptButtonProps())(`unstyled`,c.unstyled())}}function wi(C,q){if(C&1&&or(0,xi,3,6,`p-button`,14)(1,Mi,3,6,`p-button`,14),C&2){let c=xt(2);Rt(`ngIf`,c.option(`rejectVisible`)),pt(),Rt(`ngIf`,c.option(`acceptVisible`))}}function Ei(C,q){if(C&1&&(st(0,it,2,1),st(1,wi,2,2)),C&2){let c=xt();at(c.footerTemplate||c._footerTemplate?0:-1),pt(),at(!c.footerTemplate&&!c._footerTemplate?1:-1)}}return Ie({type:n,selectors:[[`p-confirmDialog`],[`p-confirmdialog`],[`p-confirm-dialog`]],contentQueries:function(q,c,xe){if(q&1&&Is(xe,U5,5)(xe,e,4)(xe,i,4)(xe,o,4)(xe,g,4)(xe,x,4)(xe,F,4)(xe,V,4)(xe,rC,4),q&2){let ae;Zr(ae=Qr())&&(c.footer=ae.first),Zr(ae=Qr())&&(c.headerTemplate=ae.first),Zr(ae=Qr())&&(c.footerTemplate=ae.first),Zr(ae=Qr())&&(c.rejectIconTemplate=ae.first),Zr(ae=Qr())&&(c.acceptIconTemplate=ae.first),Zr(ae=Qr())&&(c.messageTemplate=ae.first),Zr(ae=Qr())&&(c.iconTemplate=ae.first),Zr(ae=Qr())&&(c.headlessTemplate=ae.first),Zr(ae=Qr())&&(c.templates=ae)}},inputs:{header:`header`,icon:`icon`,message:`message`,style:`style`,styleClass:`styleClass`,maskStyleClass:`maskStyleClass`,acceptIcon:`acceptIcon`,acceptLabel:`acceptLabel`,closeAriaLabel:`closeAriaLabel`,acceptAriaLabel:`acceptAriaLabel`,acceptVisible:[2,`acceptVisible`,`acceptVisible`,ae],rejectIcon:`rejectIcon`,rejectLabel:`rejectLabel`,rejectAriaLabel:`rejectAriaLabel`,rejectVisible:[2,`rejectVisible`,`rejectVisible`,ae],acceptButtonStyleClass:`acceptButtonStyleClass`,rejectButtonStyleClass:`rejectButtonStyleClass`,closeOnEscape:[2,`closeOnEscape`,`closeOnEscape`,ae],dismissableMask:[2,`dismissableMask`,`dismissableMask`,ae],blockScroll:[2,`blockScroll`,`blockScroll`,ae],rtl:[2,`rtl`,`rtl`,ae],closable:[2,`closable`,`closable`,ae],appendTo:[1,`appendTo`],key:`key`,autoZIndex:[2,`autoZIndex`,`autoZIndex`,ae],baseZIndex:[2,`baseZIndex`,`baseZIndex`,wD],transitionOptions:`transitionOptions`,focusTrap:[2,`focusTrap`,`focusTrap`,ae],defaultFocus:`defaultFocus`,breakpoints:`breakpoints`,modal:[2,`modal`,`modal`,ae],visible:`visible`,position:`position`,draggable:[2,`draggable`,`draggable`,ae]},outputs:{onHide:`onHide`},features:[xe([Rn,{provide:Hn,useExisting:n},{provide:vt,useExisting:n}]),At$1([ue]),le],ngContentSelectors:_e,decls:6,vars:19,consts:[[`dialog`,``],[`footer`,``],[`headless`,``],[`content`,``],[`header`,``],[`icon`,``],[`role`,`alertdialog`,3,`visibleChange`,`onHide`,`pt`,`visible`,`closable`,`styleClass`,`modal`,`header`,`closeOnEscape`,`blockScroll`,`appendTo`,`position`,`dismissableMask`,`draggable`,`baseZIndex`,`autoZIndex`,`maskStyleClass`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[4,`ngTemplateOutlet`],[3,`ngClass`,`class`,`pBind`],[3,`class`,`pBind`,`innerHTML`],[3,`ngClass`,`class`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[3,`pBind`,`innerHTML`],[3,`pt`,`label`,`styleClass`,`ariaLabel`,`buttonProps`,`unstyled`,`onClick`,4,`ngIf`],[3,`onClick`,`pt`,`label`,`styleClass`,`ariaLabel`,`buttonProps`,`unstyled`],[3,`class`,`pBind`],[3,`class`,`pBind`,4,`ngIf`],[3,`pBind`]],template:function(q,c){q&1&&(Ot(G),Wr(0,`p-dialog`,6,0),Yo(`visibleChange`,function(ae){return c.onVisibleChange(ae)})(`onHide`,function(){return c.onDialogHide()}),st(2,A,2,0)(3,he,3,1),or(4,Ei,2,2,`ng-template`,null,1,x0),Wo()),q&2&&(Dp(c.style),Rt(`pt`,c.pt)(`visible`,c.visible)(`closable`,c.option(`closable`))(`styleClass`,c.cn(c.cx(`root`),c.styleClass))(`modal`,c.option(`modal`))(`header`,c.option(`header`))(`closeOnEscape`,c.option(`closeOnEscape`))(`blockScroll`,c.option(`blockScroll`))(`appendTo`,c.$appendTo())(`position`,c.option(`position`))(`dismissableMask`,c.option(`dismissableMask`))(`draggable`,c.draggable)(`baseZIndex`,c.baseZIndex)(`autoZIndex`,c.autoZIndex)(`maskStyleClass`,c.cn(c.cx(`mask`),c.maskStyleClass))(`unstyled`,c.unstyled()),pt(2),at(c.headlessTemplate||c._headlessTemplate?2:3))},dependencies:[to,vN,bN,Gp,ux,om,ur,ue],encapsulation:2})})()}return n})();var zn=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var fa={root:({instance:n})=>{let{_position:d}=n;return{position:`fixed`,top:d===`top-right`||d===`top-left`||d===`top-center`?`20px`:d===`center`?`50%`:null,right:d===`top-right`||d===`bottom-right`?`20px`:null,bottom:d===`bottom-left`||d===`bottom-right`||d===`bottom-center`?`20px`:null,left:d===`top-left`||d===`bottom-left`?`20px`:d===`center`||d===`top-center`||d===`bottom-center`?`50%`:null}}};var _a={root:({instance:n})=>[`p-toast p-component`,`p-toast-${n._position}`],message:({instance:n})=>({"p-toast-message":!0,"p-toast-message-info":n.message.severity===`info`||n.message.severity===void 0,"p-toast-message-warn":n.message.severity===`warn`,"p-toast-message-error":n.message.severity===`error`,"p-toast-message-success":n.message.severity===`success`,"p-toast-message-secondary":n.message.severity===`secondary`,"p-toast-message-contrast":n.message.severity===`contrast`}),messageContent:`p-toast-message-content`,messageIcon:({instance:n})=>({"p-toast-message-icon":!0,[`pi ${n.message.icon}`]:!!n.message.icon}),messageText:`p-toast-message-text`,summary:`p-toast-summary`,detail:`p-toast-detail`,closeButton:`p-toast-close-button`,closeIcon:({instance:n})=>({"p-toast-close-icon":!0,[`pi ${n.message.closeIcon}`]:!!n.message.closeIcon})};var mi=(()=>{class n extends ke{name=`toast`;style=zn;classes=_a;inlineStyles=fa;static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵprov=I({token:n,factory:n.ɵfac})}return n})();var qn=new D(`TOAST_INSTANCE`);var ba=(()=>{class n extends Pe{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=S();clearAll=S(null);onAnimationStart=We();onAnimationEnd=We();onBeforeEnter(e){this.onAnimationStart.emit(e.element)}onAfterLeave(e){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(e.element))}onClose=new Me;_componentStyle=g(mi);timeout;visible=A(void 0);isDestroyed=!1;isClosing=!1;constructor(e){super(),this.zone=e,X(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=e=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static ɵfac=function(i){return new(i||n)(ee(Ne))};static ɵcmp=(function(){let e=(T,ne)=>({$implicit:T,closeFn:ne}),i=T=>({$implicit:T});function o(T,ne){T&1&&ic(0)}function g(T,ne){if(T&1&&or(0,o,1,0,`ng-container`,3),T&2){let y=xt();Rt(`ngTemplateOutlet`,y.headlessTemplate)(`ngTemplateOutletContext`,cc(2,e,y.message,y.onCloseIconClick))}}function x(T,ne){if(T&1&&xn(0,`span`,4),T&2){let y=xt(3);ze(y.cn(y.cx(`messageIcon`),y.message?.icon)),Rt(`pBind`,y.ptm(`messageIcon`))}}function F(T,ne){if(T&1&&(tr(),xn(0,`svg`,10)),T&2){let y=xt(4);ze(y.cx(`messageIcon`)),Rt(`pBind`,y.ptm(`messageIcon`)),it(`aria-hidden`,!0)}}function V(T,ne){if(T&1&&(tr(),xn(0,`svg`,11)),T&2){let y=xt(4);ze(y.cx(`messageIcon`)),Rt(`pBind`,y.ptm(`messageIcon`)),it(`aria-hidden`,!0)}}function G(T,ne){if(T&1&&(tr(),xn(0,`svg`,12)),T&2){let y=xt(4);ze(y.cx(`messageIcon`)),Rt(`pBind`,y.ptm(`messageIcon`)),it(`aria-hidden`,!0)}}function _e(T,ne){if(T&1&&(tr(),xn(0,`svg`,13)),T&2){let y=xt(4);ze(y.cx(`messageIcon`)),Rt(`pBind`,y.ptm(`messageIcon`)),it(`aria-hidden`,!0)}}function Y(T,ne){if(T&1&&(tr(),xn(0,`svg`,11)),T&2){let y=xt(4);ze(y.cx(`messageIcon`)),Rt(`pBind`,y.ptm(`messageIcon`)),it(`aria-hidden`,!0)}}function R(T,ne){if(T&1&&st(0,F,1,4,`svg`,6)(1,V,1,4,`svg`,7)(2,G,1,4,`svg`,8)(3,_e,1,4,`svg`,9)(4,Y,1,4,`svg`,7),T&2){let y,we=xt(3);at((y=we.message.severity)===`success`?0:y===`info`?1:y===`error`?2:y===`warn`?3:4)}}function B(T,ne){if(T&1&&(st(0,x,1,3,`span`,2)(1,R,5,1),Wr(2,`div`,5)(3,`div`,5),Ss(4),Wo(),Wr(5,`div`,5),Ss(6),Wo()()),T&2){let y=xt(2);at(y.message.icon?0:1),pt(2),Rt(`pBind`,y.ptm(`messageText`))(`ngClass`,y.cx(`messageText`)),it(`data-p`,y.dataP),pt(),Rt(`pBind`,y.ptm(`summary`))(`ngClass`,y.cx(`summary`)),it(`data-p`,y.dataP),pt(),Ep(` `,y.message.summary,` `),pt(),Rt(`pBind`,y.ptm(`detail`))(`ngClass`,y.cx(`detail`)),it(`data-p`,y.dataP),pt(),Zo(y.message.detail)}}function v(T,ne){T&1&&ic(0)}function A(T,ne){if(T&1&&xn(0,`span`,4),T&2){let y=xt(4);ze(y.cn(y.cx(`closeIcon`),y.message?.closeIcon)),Rt(`pBind`,y.ptm(`closeIcon`))}}function K(T,ne){if(T&1&&st(0,A,1,3,`span`,2),T&2){let y=xt(3);at(y.message.closeIcon?0:-1)}}function I(T,ne){if(T&1&&(tr(),xn(0,`svg`,16)),T&2){let y=xt(3);ze(y.cx(`closeIcon`)),Rt(`pBind`,y.ptm(`closeIcon`)),it(`aria-hidden`,!0)}}function be(T,ne){if(T&1){let y=$_();Wr(0,`div`)(1,`button`,14),Yo(`click`,function(Ee){fm(y);let tt=xt(2);return pm(tt.onCloseIconClick(Ee))})(`keydown.enter`,function(Ee){fm(y);let tt=xt(2);return pm(tt.onCloseIconClick(Ee))}),st(2,K,1,1)(3,I,1,4,`svg`,15),Wo()()}if(T&2){let y=xt(2);pt(),Rt(`pBind`,y.ptm(`closeButton`)),it(`class`,y.cx(`closeButton`))(`aria-label`,y.closeAriaLabel)(`data-p`,y.dataP),pt(),at(y.message.closeIcon?2:3)}}function ie(T,ne){if(T&1&&(Wr(0,`div`,4),st(1,B,7,12),or(2,v,1,0,`ng-container`,3),st(3,be,4,5,`div`),Wo()),T&2){let y=xt();ze(y.cn(y.cx(`messageContent`),y.message?.contentStyleClass)),Rt(`pBind`,y.ptm(`messageContent`)),pt(),at(y.template?-1:1),pt(),Rt(`ngTemplateOutlet`,y.template)(`ngTemplateOutletContext`,S0(7,i,y.message)),pt(),at(y.message?.closable!==!1?3:-1)}}return Ie({type:n,selectors:[[`p-toastItem`]],inputs:{message:`message`,index:[2,`index`,`index`,wD],life:[2,`life`,`life`,wD],template:`template`,headlessTemplate:`headlessTemplate`,showTransformOptions:`showTransformOptions`,hideTransformOptions:`hideTransformOptions`,showTransitionOptions:`showTransitionOptions`,hideTransitionOptions:`hideTransitionOptions`,motionOptions:[1,`motionOptions`],clearAll:[1,`clearAll`]},outputs:{onAnimationStart:`onAnimationStart`,onAnimationEnd:`onAnimationEnd`,onClose:`onClose`},features:[xe([mi]),le],decls:4,vars:10,consts:[[`container`,``],[`role`,`alert`,`aria-live`,`assertive`,`aria-atomic`,`true`,3,`pMotionOnBeforeEnter`,`pMotionOnAfterLeave`,`mouseenter`,`mouseleave`,`pMotion`,`pMotionAppear`,`pMotionName`,`pMotionOptions`,`pBind`],[3,`pBind`,`class`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`pBind`],[3,`pBind`,`ngClass`],[`data-p-icon`,`check`,3,`pBind`,`class`],[`data-p-icon`,`info-circle`,3,`pBind`,`class`],[`data-p-icon`,`times-circle`,3,`pBind`,`class`],[`data-p-icon`,`exclamation-triangle`,3,`pBind`,`class`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`info-circle`,3,`pBind`],[`data-p-icon`,`times-circle`,3,`pBind`],[`data-p-icon`,`exclamation-triangle`,3,`pBind`],[`type`,`button`,`autofocus`,``,3,`click`,`keydown.enter`,`pBind`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(ne,y){ne&1&&(Wr(0,`div`,1,0),Yo(`pMotionOnBeforeEnter`,function(Ee){return y.onBeforeEnter(Ee)})(`pMotionOnAfterLeave`,function(Ee){return y.onAfterLeave(Ee)})(`mouseenter`,function(){return y.onMouseEnter()})(`mouseleave`,function(){return y.onMouseLeave()}),st(2,g,1,5,`ng-container`)(3,ie,4,9,`div`,2),Wo()),ne&2&&(ze(y.cn(y.cx(`message`),y.message?.styleClass)),Rt(`pMotion`,y.visible())(`pMotionAppear`,!0)(`pMotionName`,`p-toast-message`)(`pMotionOptions`,y.motionOptions())(`pBind`,y.ptm(`message`)),it(`id`,y.message?.id)(`data-p`,y.dataP),pt(2),at(y.headlessTemplate?2:3))},dependencies:[to,vN,Gp,ho,Fn,Dn,kz,pi,ur,ue,xW,RW],encapsulation:2})})()}return n})();var Gn=(()=>{class n extends Pe{componentName=`Toast`;$pcToast=g(qn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(ue,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions=`translateY(100%)`;hideTransformOptions=`translateY(-100%)`;showTransitionOptions=`300ms ease-out`;hideTransitionOptions=`250ms ease-in`;motionOptions=S(void 0);computedMotionOptions=ye(()=>l(l({},this.ptm(`motion`)),this.motionOptions()));breakpoints;onClose=new Me;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position=`top-right`;messageService=g(j5);_componentStyle=g(mi);styleElement;id=Xs(`pn_id_`);templates;clearAllTrigger=A(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let i=e.filter(o=>this.canAdd(o));this.add(i)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`message`:this._template=e.template;break;case`headless`:this._headlessTemplate=e.template;break;default:this._template=e.template}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let i=this.key===e.key;return i&&this.preventOpenDuplicates&&(i=!this.containsMessage(this.messages,e)),i&&this.preventDuplicates&&(i=!this.containsMessage(this.messagesArchieve,e)),i}containsMessage(e,i){return e?e.find(o=>o.summary===i.summary&&o.detail==i.detail&&o.severity===i.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,``),this.autoZIndex&&this.el?.nativeElement.style.zIndex===``&&at$2.set(`modal`,this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&hn(this.messages)&&at$2.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement(`style`),this.styleElement.type=`text/css`,tC(this.styleElement,`nonce`,this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e=``;for(let i in this.breakpoints){let o=``;for(let g in this.breakpoints[i])o+=g+`:`+this.breakpoints[i][g]+` !important;`;e+=`
                    @media screen and (max-width: ${i}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,`innerHTML`,e),tC(this.styleElement,`nonce`,this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&at$2.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let e=[`message`],i=[`headless`];function o(g,x){if(g&1){let F=$_();Wr(0,`p-toastItem`,1),Yo(`onClose`,function(G){fm(F);let _e=xt();return pm(_e.onMessageClose(G))})(`onAnimationEnd`,function(){fm(F);let G=xt();return pm(G.onAnimationEnd())})(`onAnimationStart`,function(){fm(F);let G=xt();return pm(G.onAnimationStart())}),Wo()}if(g&2){let F=x.$implicit,V=x.$index,G=xt();Rt(`message`,F)(`index`,V)(`life`,G.life)(`clearAll`,G.clearAllTrigger())(`template`,G.template||G._template)(`headlessTemplate`,G.headlessTemplate||G._headlessTemplate)(`pt`,G.pt)(`unstyled`,G.unstyled())(`motionOptions`,G.computedMotionOptions())}}return Ie({type:n,selectors:[[`p-toast`]],contentQueries:function(x,F,V){if(x&1&&Is(V,e,5)(V,i,5)(V,rC,4),x&2){let G;Zr(G=Qr())&&(F.template=G.first),Zr(G=Qr())&&(F.headlessTemplate=G.first),Zr(G=Qr())&&(F.templates=G)}},hostVars:5,hostBindings:function(x,F){x&2&&(it(`data-p`,F.dataP),Dp(F.sx(`root`)),ze(F.cn(F.cx(`root`),F.styleClass)))},inputs:{key:`key`,autoZIndex:[2,`autoZIndex`,`autoZIndex`,ae],baseZIndex:[2,`baseZIndex`,`baseZIndex`,wD],life:[2,`life`,`life`,wD],styleClass:`styleClass`,position:`position`,preventOpenDuplicates:[2,`preventOpenDuplicates`,`preventOpenDuplicates`,ae],preventDuplicates:[2,`preventDuplicates`,`preventDuplicates`,ae],showTransformOptions:`showTransformOptions`,hideTransformOptions:`hideTransformOptions`,showTransitionOptions:`showTransitionOptions`,hideTransitionOptions:`hideTransitionOptions`,motionOptions:[1,`motionOptions`],breakpoints:`breakpoints`},outputs:{onClose:`onClose`},features:[xe([mi,{provide:qn,useExisting:n},{provide:vt,useExisting:n}]),At$1([ue]),le],decls:2,vars:0,consts:[[3,`message`,`index`,`life`,`clearAll`,`template`,`headlessTemplate`,`pt`,`unstyled`,`motionOptions`],[3,`onClose`,`onAnimationEnd`,`onAnimationStart`,`message`,`index`,`life`,`clearAll`,`template`,`headlessTemplate`,`pt`,`unstyled`,`motionOptions`]],template:function(x,F){x&1&&O_(0,o,1,9,`p-toastItem`,0,x_),x&2&&L_(F.messages)},dependencies:[to,ba,ur],encapsulation:2})})()}return n})();var ya=()=>({width:`calc(100% - 2rem)`,right:`1rem`});var Ca=n=>({"480px":n});function va(n,d){if(n&1){let e=$_();Wr(0,`div`,3)(1,`code`,4),Ss(2),Wo(),Wr(3,`p-button`,5),Yo(`onClick`,function(){fm(e);let o=xt();return pm(o.copyCode())}),Wo(),Wr(4,`p-button`,6),Yo(`onClick`,function(){fm(e);let o=xt();return pm(o.copyLink())}),Wo()(),Wr(5,`p`,7),Ss(6,` Compartilhe o link para abrir a terapia diretamente ou envie o código. `),Wo(),Wr(7,`p-button`,8),Yo(`onClick`,function(){fm(e);let o=xt();return pm(o.confirmRotation())}),Wo()}if(n&2){let e=xt();pt(2),Zo(e.displayCode(d)),pt(5),Rt(`disabled`,e.store.busy())}}function xa(n,d){n&1&&(Wr(0,`p`),Ss(1,`Salve a terapia para gerar o código de acesso.`),Wo())}var ui=class n{code=S.required();store=g(HC);displayCode=eW;confirmation=g(P5);messages=g(j5);async copyCode(){try{await navigator.clipboard.writeText(this.code()),this.messages.clear(),this.messages.add({severity:`success`,summary:`Código copiado.`,life:4e3})}catch{this.messages.clear(),this.messages.add({severity:`error`,summary:`Não foi possível copiar.`,detail:`Selecione o código e copie manualmente.`,life:8e3})}}async copyLink(){let d=new URL(`https://yamgomes.github.io/virtualter-3/`);d.searchParams.set(`code`,this.code());try{await navigator.clipboard.writeText(d.toString()),this.messages.clear(),this.messages.add({severity:`success`,summary:`Link copiado.`,detail:`O paciente abrirá a terapia diretamente pelo link.`,life:4e3})}catch{this.messages.clear(),this.messages.add({severity:`error`,summary:`Não foi possível copiar o link.`,detail:d.toString(),life:1e4})}}confirmRotation(){let d=this.store.selected();!d||this.store.busy()||this.confirmation.confirm({header:`Gerar novo código`,message:`O código anterior deixará de funcionar.`,accept:()=>{this.store.selected()?.id===d.id&&this.store.rotate()}})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ie({type:n,selectors:[[`app-patient-access-card`]],inputs:{code:[1,`code`]},features:[xe([P5,j5])],decls:5,vars:5,consts:[[`header`,`Código de acesso`],[`position`,`bottom-right`,3,`breakpoints`],[`acceptLabel`,`Gerar novo código`,`rejectLabel`,`Cancelar`,`defaultFocus`,`reject`],[1,`flex`,`flex-wrap`,`items-center`,`gap-2`],[1,`text-xl`],[`label`,`Copiar código`,`icon`,`pi pi-copy`,`severity`,`secondary`,3,`onClick`],[`label`,`Copiar link para o paciente`,`icon`,`pi pi-link`,`severity`,`secondary`,3,`onClick`],[1,`my-3`],[`label`,`Gerar novo código`,`icon`,`pi pi-key`,`severity`,`secondary`,3,`onClick`,`disabled`]],template:function(e,i){if(e&1&&(Wr(0,`p-panel`,0),st(1,va,8,2)(2,xa,2,0,`p`),Wo(),xn(3,`p-toast`,1)(4,`p-confirmdialog`,2)),e&2){let o;pt(),at((o=i.code())?1:2,o),pt(2),Rt(`breakpoints`,S0(3,Ca,I0(2,ya)))}},dependencies:[ux,$n,At,Gn],encapsulation:2})};var Ia=(n,d)=>d.id;function Ta(n,d){n&1&&(Wr(0,`p-message`,3),Ss(1,`Não foi possível carregar o histórico.`),Wo())}function Sa(n,d){if(n&1&&(Wr(0,`p`),Ss(1),Wo()),n&2){let e=d.$implicit;pt(),Zo(e)}}function ka(n,d){if(n&1&&(Wr(0,`li`,6)(1,`strong`),Ss(2),Wo(),Wr(3,`small`),Ss(4),Wo(),O_(5,Sa,2,1,`p`,null,R_),Wr(7,`small`),Ss(8),Wo()()),n&2){let e=d.$implicit,i=xt(3);pt(2),Zo(e.title),pt(2),nD(``,i.gameLabel(e),` · `,i.date.format(e.completedAtMs),` · `,i.status(e.endReason)),pt(),L_(i.reportLines(e)),pt(3),tD(``,i.seconds(e.activeMs),` s ativos · `,i.seconds(e.pausedMs),` s em pausa`)}}function Oa(n,d){if(n&1&&(Wr(0,`ul`,5),O_(1,ka,9,6,`li`,6,Ia),Wo()),n&2){let e=d.$implicit;pt(),L_(e)}}function Ma(n,d){if(n&1&&(Wr(0,`p-dataview`,4),or(1,Oa,3,0,`ng-template`,null,0,x0),Wo()),n&2){let e=xt();Rt(`value`,e.reports())(`loading`,e.loading())(`paginator`,!0)(`alwaysShowPaginator`,!1)(`rows`,5)}}var hi=class n{patientId=S.required();api=g(fu);reload=A(0);reports=A([]);loading=A(!0);error=A(!1);date=new Intl.DateTimeFormat(`pt-BR`,{dateStyle:`short`,timeStyle:`short`});reportLines=px;gameLabel(d){return Bn$1[d.gameId]?.label??d.title}constructor(){X(d=>{let e=this.patientId();this.reload(),this.reports.set([]),this.error.set(!1),this.loading.set(!0);let i=!0;d(()=>{i=!1}),this.api.listResults(e).then(o=>{i&&this.reports.set(o)}).catch(()=>{i&&this.error.set(!0)}).finally(()=>{i&&this.loading.set(!1)})})}refresh(){this.reload.update(d=>d+1)}seconds(d){return Math.round(d/1e3)}status(d){return{completed:`Concluída`,stopped:`Interrompida`,error:`Encerrada por erro`}[d]}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ie({type:n,selectors:[[`app-patient-history`]],inputs:{patientId:[1,`patientId`]},decls:4,vars:2,consts:[[`list`,``],[`header`,`Histórico de sessões`],[`label`,`Atualizar histórico`,`icon`,`pi pi-refresh`,`size`,`small`,`severity`,`secondary`,1,`mb-3`,`block`,3,`onClick`,`disabled`],[`severity`,`error`],[`emptyMessage`,`Nenhuma sessão recebida.`,3,`value`,`loading`,`paginator`,`alwaysShowPaginator`,`rows`],[1,`divide-y`,`divide-(--p-content-border-color,#e2e8f0)`],[1,`grid`,`gap-1`,`py-3`]],template:function(e,i){e&1&&(Wr(0,`p-panel`,1)(1,`p-button`,2),Yo(`onClick`,function(){return i.refresh()}),Wo(),st(2,Ta,2,0,`p-message`,3)(3,Ma,3,5,`p-dataview`,4),Wo()),e&2&&(pt(),Rt(`disabled`,i.loading()),pt(),at(i.error()?2:3))},dependencies:[ux,Iu,at$1,At],encapsulation:2})};var wa=`
    
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }


    /* For Optimus */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var Ea={root:({instance:n})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":n.checked,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":n.size()===`small`,"p-checkbox-lg p-inputfield-lg":n.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var Qn=(()=>{class n extends ke{name=`checkbox`;style=wa;classes=Ea;static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵprov=I({token:n,factory:n.ɵfac})}return n})();var Zn=new D(`CHECKBOX_INSTANCE`);var Va={provide:on,useExisting:Oi(()=>fi),multi:!0};var fi=(()=>{class n extends Zo$1{componentName=`Checkbox`;hostName=``;value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=S();size=S();onChange=new Me;onFocus=new Me;onBlur=new Me;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:xR(this.value,this.modelValue())}_indeterminate=A(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=g(Qn);bindDirectiveInstance=g(ue,{self:!0});$pcCheckbox=g(Zn,{optional:!0,skipSelf:!0})??void 0;$variant=ye(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let i,o=this.injector.get(Dt,null,{optional:!0,self:!0}),g=o&&!this.formControl?o.value:this.modelValue();this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(i),this.onModelChange(i)):(this.checked||this._indeterminate()?i=g.filter(x=>!di(x,this.value)):i=g?[...g,this.value]:[this.value],this.onModelChange(i),this.writeModelValue(i),this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,i){i(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=(function(){let e=[`icon`],i=[`input`],o=(R,B,v)=>({checked:R,class:B,dataP:v});function g(R,B){if(R&1&&xn(0,`span`,7),R&2){let v=xt(3);ze(v.cx(`icon`)),Rt(`ngClass`,v.checkboxIcon)(`pBind`,v.ptm(`icon`)),it(`data-p`,v.dataP)}}function x(R,B){if(R&1&&(tr(),xn(0,`svg`,8)),R&2){let v=xt(3);ze(v.cx(`icon`)),Rt(`pBind`,v.ptm(`icon`)),it(`data-p`,v.dataP)}}function F(R,B){if(R&1&&(st(0,g,1,5,`span`,5),st(1,x,1,4,`svg`,6)),R&2){let v=xt(2);at(v.checkboxIcon?0:-1),pt(),at(v.checkboxIcon?-1:1)}}function V(R,B){if(R&1&&(tr(),xn(0,`svg`,9)),R&2){let v=xt(2);ze(v.cx(`icon`)),Rt(`pBind`,v.ptm(`icon`)),it(`data-p`,v.dataP)}}function G(R,B){if(R&1&&(st(0,F,2,2),st(1,V,1,4,`svg`,4)),R&2){let v=xt();at(v.checked?0:-1),pt(),at(v._indeterminate()?1:-1)}}function _e(R,B){}function Y(R,B){R&1&&or(0,_e,0,0,`ng-template`)}return Ie({type:n,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(B,v,A){if(B&1&&Is(A,e,4)(A,rC,4),B&2){let K;Zr(K=Qr())&&(v.checkboxIconTemplate=K.first),Zr(K=Qr())&&(v.templates=K)}},viewQuery:function(B,v){if(B&1&&Hb(i,5),B&2){let A;Zr(A=Qr())&&(v.inputViewChild=A.first)}},hostVars:6,hostBindings:function(B,v){B&2&&(it(`data-p-highlight`,v.checked)(`data-p-checked`,v.checked)(`data-p-disabled`,v.$disabled())(`data-p`,v.dataP),ze(v.cn(v.cx(`root`),v.styleClass)))},inputs:{hostName:`hostName`,value:`value`,binary:[2,`binary`,`binary`,ae],ariaLabelledBy:`ariaLabelledBy`,ariaLabel:`ariaLabel`,tabindex:[2,`tabindex`,`tabindex`,wD],inputId:`inputId`,inputStyle:`inputStyle`,styleClass:`styleClass`,inputClass:`inputClass`,indeterminate:[2,`indeterminate`,`indeterminate`,ae],formControl:`formControl`,checkboxIcon:`checkboxIcon`,readonly:[2,`readonly`,`readonly`,ae],autofocus:[2,`autofocus`,`autofocus`,ae],trueValue:`trueValue`,falseValue:`falseValue`,variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[xe([Va,Qn,{provide:Zn,useExisting:n},{provide:vt,useExisting:n}]),At$1([ue]),le],decls:5,vars:26,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`],[3,`class`,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(B,v){B&1&&(Wr(0,`input`,1,0),Yo(`focus`,function(K){return v.onInputFocus(K)})(`blur`,function(K){return v.onInputBlur(K)})(`change`,function(K){return v.handleChange(K)}),Wo(),Wr(2,`div`,2),st(3,G,2,2),or(4,Y,1,0,null,3),Wo()),B&2&&(Dp(v.inputStyle),ze(v.cn(v.cx(`input`),v.inputClass)),Rt(`checked`,v.checked)(`pBind`,v.ptm(`input`)),it(`id`,v.inputId)(`value`,v.value)(`name`,v.name())(`tabindex`,v.tabindex)(`required`,v.required()?``:void 0)(`readonly`,v.readonly?``:void 0)(`disabled`,v.$disabled()?``:void 0)(`aria-labelledby`,v.ariaLabelledBy)(`aria-label`,v.ariaLabel),pt(2),ze(v.cx(`box`)),Rt(`pBind`,v.ptm(`box`)),it(`data-p`,v.dataP),pt(),at(!v.checkboxIconTemplate&&!v._checkboxIconTemplate?3:-1),pt(),Rt(`ngTemplateOutlet`,v.checkboxIconTemplate||v._checkboxIconTemplate)(`ngTemplateOutletContext`,w0(22,o,v.checked,v.cx(`icon`),v.dataP)))},dependencies:[to,vN,Gp,ur,ho,ci,ou,ue],encapsulation:2})})()}return n})();var Un=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var Ba={root:({instance:n})=>({display:n.visible?null:`none`})};var Fa={root:({instance:n})=>[`p-chip p-component`,{"p-disabled":n.disabled}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var Wn=(()=>{class n extends ke{name=`chip`;style=Un;classes=Fa;inlineStyles=Ba;static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵprov=I({token:n,factory:n.ɵfac})}return n})();var Xn=new D(`CHIP_INSTANCE`);var Yn=(()=>{class n extends Pe{componentName=`Chip`;$pcChip=g(Xn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(ue,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new Me;onImageError=new Me;visible=!0;get removeAriaLabel(){return this.config.getTranslation(H5.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e==`object`&&Object.entries(e).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}_chipProps;_componentStyle=g(Wn);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.removable})}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=(function(){let e=[`removeicon`],i=[`*`];function o(A,K){if(A&1){let I=$_();Wr(0,`img`,2),Yo(`error`,function(ie){fm(I);let T=xt();return pm(T.imageError(ie))}),Wo()}if(A&2){let I=xt();ze(I.cx(`image`)),Rt(`pBind`,I.ptm(`image`))(`src`,I.image)(`alt`,I.alt)}}function g(A,K){if(A&1&&xn(0,`span`,4),A&2){let I=xt(2);ze(I.icon),Rt(`pBind`,I.ptm(`icon`))(`ngClass`,I.cx(`icon`))}}function x(A,K){if(A&1&&st(0,g,1,4,`span`,3),A&2){let I=xt();at(I.icon?0:-1)}}function F(A,K){if(A&1&&(Wr(0,`div`,5),Ss(1),Wo()),A&2){let I=xt();ze(I.cx(`label`)),Rt(`pBind`,I.ptm(`label`)),pt(),Zo(I.label)}}function V(A,K){if(A&1){let I=$_();Wr(0,`span`,9),Yo(`click`,function(ie){fm(I);let T=xt(3);return pm(T.close(ie))})(`keydown`,function(ie){fm(I);let T=xt(3);return pm(T.onKeydown(ie))}),Wo()}if(A&2){let I=xt(3);ze(I.removeIcon),Rt(`pBind`,I.ptm(`removeIcon`))(`ngClass`,I.cx(`removeIcon`)),it(`tabindex`,I.disabled?-1:0)(`aria-label`,I.removeAriaLabel)}}function G(A,K){if(A&1){let I=$_();tr(),Wr(0,`svg`,10),Yo(`click`,function(ie){fm(I);let T=xt(3);return pm(T.close(ie))})(`keydown`,function(ie){fm(I);let T=xt(3);return pm(T.onKeydown(ie))}),Wo()}if(A&2){let I=xt(3);ze(I.cx(`removeIcon`)),Rt(`pBind`,I.ptm(`removeIcon`)),it(`tabindex`,I.disabled?-1:0)(`aria-label`,I.removeAriaLabel)}}function _e(A,K){if(A&1&&(st(0,V,1,6,`span`,7),st(1,G,1,5,`svg`,8)),A&2){let I=xt(2);at(I.removeIcon?0:-1),pt(),at(I.removeIcon?-1:1)}}function Y(A,K){}function R(A,K){A&1&&or(0,Y,0,0,`ng-template`)}function B(A,K){if(A&1){let I=$_();Wr(0,`span`,11),Yo(`click`,function(ie){fm(I);let T=xt(2);return pm(T.close(ie))})(`keydown`,function(ie){fm(I);let T=xt(2);return pm(T.onKeydown(ie))}),or(1,R,1,0,null,12),Wo()}if(A&2){let I=xt(2);ze(I.cx(`removeIcon`)),Rt(`pBind`,I.ptm(`removeIcon`)),it(`tabindex`,I.disabled?-1:0)(`aria-label`,I.removeAriaLabel),pt(),Rt(`ngTemplateOutlet`,I.removeIconTemplate||I._removeIconTemplate)}}function v(A,K){if(A&1&&(st(0,_e,2,2),st(1,B,2,6,`span`,6)),A&2){let I=xt();at(!I.removeIconTemplate&&!I._removeIconTemplate?0:-1),pt(),at(I.removeIconTemplate||I._removeIconTemplate?1:-1)}}return Ie({type:n,selectors:[[`p-chip`]],contentQueries:function(K,I,be){if(K&1&&Is(be,e,4)(be,rC,4),K&2){let ie;Zr(ie=Qr())&&(I.removeIconTemplate=ie.first),Zr(ie=Qr())&&(I.templates=ie)}},hostVars:6,hostBindings:function(K,I){K&2&&(it(`aria-label`,I.label)(`data-p`,I.dataP),Dp(I.sx(`root`)),ze(I.cn(I.cx(`root`),I.styleClass)))},inputs:{label:`label`,icon:`icon`,image:`image`,alt:`alt`,styleClass:`styleClass`,disabled:[2,`disabled`,`disabled`,ae],removable:[2,`removable`,`removable`,ae],removeIcon:`removeIcon`,chipProps:`chipProps`},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[xe([Wn,{provide:Xn,useExisting:n},{provide:vt,useExisting:n}]),At$1([ue]),le],ngContentSelectors:i,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(K,I){K&1&&(Ot(),Lt(0),st(1,o,1,5,`img`,0)(2,x,1,1),st(3,F,2,4,`div`,1),st(4,v,2,2)),K&2&&(pt(),at(I.image?1:2),pt(2),at(I.label?3:-1),pt(),at(I.removable?4:-1))},dependencies:[to,vN,Gp,pi,ur,ue],encapsulation:2})})()}return n})();var Da=`
    
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        align-self: center;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-display-chip .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
        min-width: 100%;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled):hover {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }

    .p-floatlabel-in .p-multiselect-filter {
        padding-block-start: dt('multiselect.padding.y');
        padding-block-end: dt('multiselect.padding.y');
    }


    /* For Optimus */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`;var Aa={root:({instance:n})=>({position:n.$appendTo()===`self`?`relative`:void 0})};var Pa={root:({instance:n})=>[`p-multiselect p-component p-inputwrapper`,{"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":n.display===`chip`,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()===`filled`,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled(),"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-multiselect-open":n.overlayVisible,"p-multiselect-fluid":n.hasFluid,"p-multiselect-sm p-inputfield-sm":n.size()===`small`,"p-multiselect-lg p-inputfield-lg":n.size()===`large`}],labelContainer:`p-multiselect-label-container`,label:({instance:n})=>({"p-multiselect-label":!0,"p-placeholder":n.label()===n.placeholder(),"p-multiselect-label-empty":!n.placeholder()&&!n.defaultLabel&&(!n.modelValue()||n.modelValue().length===0)}),chipItem:`p-multiselect-chip-item`,pcChip:`p-multiselect-chip`,chipIcon:`p-multiselect-chip-icon`,dropdown:`p-multiselect-dropdown`,loadingIcon:`p-multiselect-loading-icon`,dropdownIcon:`p-multiselect-dropdown-icon`,overlay:`p-multiselect-overlay p-component-overlay p-component`,header:`p-multiselect-header`,pcFilterContainer:`p-multiselect-filter-container`,pcFilter:`p-multiselect-filter`,listContainer:`p-multiselect-list-container`,list:`p-multiselect-list`,optionGroup:`p-multiselect-option-group`,option:({instance:n})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":n.selected&&n.highlightOnSelect,"p-disabled":n.disabled,"p-focus":n.focused}),emptyMessage:`p-multiselect-empty-message`,clearIcon:`p-multiselect-clear-icon`};var _i=(()=>{class n extends ke{name=`multiselect`;style=Da;classes=Pa;inlineStyles=Aa;static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵprov=I({token:n,factory:n.ɵfac})}return n})();var eo=new D(`MULTISELECT_INSTANCE`);var La=new D(`MULTISELECT_ITEM_INSTANCE`);var Na={provide:on,useExisting:Oi(()=>Ai),multi:!0};var ja=(()=>{class n extends Pe{$pcMultiSelectItem=g(La,{optional:!0,skipSelf:!0})??void 0;hostName=`MultiSelect`;getPTOptions(e){return this.ptm(e,{context:{selected:this.selected,focused:this.focused,disabled:this.disabled}})}option;selected;label;disabled;itemSize;focused;ariaPosInset;ariaSetSize;variant;template;checkIconTemplate;itemCheckboxIconTemplate;highlightOnSelect;onClick=new Me;onMouseEnter=new Me;_componentStyle=g(_i);onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option,selected:this.selected}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option,selected:this.selected})}static ɵfac=(()=>{let e;return function(o){return(e||(e=J(n)))(o||n)}})();static ɵcmp=(function(){let e=()=>({standalone:!0}),i=Y=>({$implicit:Y}),o=(Y,R)=>({checked:Y,class:R});function g(Y,R){}function x(Y,R){Y&1&&or(0,g,0,0,`ng-template`)}function F(Y,R){if(Y&1&&or(0,x,1,0,null,2),Y&2){let B=R.class,v=xt(2);Rt(`ngTemplateOutlet`,v.itemCheckboxIconTemplate)(`ngTemplateOutletContext`,cc(2,o,v.selected,B))}}function V(Y,R){Y&1&&or(0,F,1,5,`ng-template`,null,0,x0)}function G(Y,R){if(Y&1&&(Wr(0,`span`),Ss(1),Wo()),Y&2){let B=xt();pt(),Zo(B.label??`empty`)}}function _e(Y,R){Y&1&&ic(0)}return Ie({type:n,selectors:[[`li`,`pMultiSelectItem`,``]],hostAttrs:[`role`,`option`],hostVars:13,hostBindings:function(R,B){R&1&&Yo(`click`,function(A){return B.onOptionClick(A)})(`mouseenter`,function(A){return B.onOptionMouseEnter(A)}),R&2&&(it(`aria-label`,B.label)(`aria-setsize`,B.ariaSetSize)(`aria-posinset`,B.ariaPosInset)(`aria-selected`,B.selected)(`data-p-selected`,B.selected)(`data-p-focused`,B.focused)(`data-p-highlight`,B.selected)(`data-p-disabled`,B.disabled)(`aria-checked`,B.selected),ze(B.cx(`option`)),lc(`height`,B.itemSize,`px`))},inputs:{option:`option`,selected:[2,`selected`,`selected`,ae],label:`label`,disabled:[2,`disabled`,`disabled`,ae],itemSize:[2,`itemSize`,`itemSize`,wD],focused:[2,`focused`,`focused`,ae],ariaPosInset:`ariaPosInset`,ariaSetSize:`ariaSetSize`,variant:`variant`,template:`template`,checkIconTemplate:`checkIconTemplate`,itemCheckboxIconTemplate:`itemCheckboxIconTemplate`,highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,ae]},outputs:{onClick:`onClick`,onMouseEnter:`onMouseEnter`},features:[xe([_i]),le],decls:4,vars:15,consts:[[`icon`,``],[3,`ngModel`,`ngModelOptions`,`binary`,`tabindex`,`variant`,`ariaLabel`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(R,B){R&1&&(Wr(0,`p-checkbox`,1),vM(),st(1,V,2,0),Wo(),st(2,G,2,1,`span`),or(3,_e,1,0,`ng-container`,2)),R&2&&(Rt(`ngModel`,B.selected)(`ngModelOptions`,I0(12,e))(`binary`,!0)(`tabindex`,-1)(`variant`,B.variant)(`ariaLabel`,B.label)(`pt`,B.getPTOptions(`pcOptionCheckbox`))(`unstyled`,B.unstyled()),DM(),pt(),at(B.itemCheckboxIconTemplate?1:-1),pt(),at(B.template?-1:2),pt(),Rt(`ngTemplateOutlet`,B.template)(`ngTemplateOutletContext`,S0(13,i,B.option)))},dependencies:[to,Gp,fi,Wo$1,qo$1,Ii,ur],encapsulation:2,changeDetection:1})})()}return n})();var Ai=(()=>{class n extends Zo$1{zone;filterService;overlayService;componentName=`MultiSelect`;id;ariaLabel;styleClass;panelStyle;panelStyleClass;inputId;readonly;group;filter=!0;filterPlaceHolder;filterLocale;overlayVisible=!1;tabindex=0;dataKey;ariaLabelledBy;set displaySelectedLabel(e){this._displaySelectedLabel=e}get displaySelectedLabel(){return this._displaySelectedLabel}set maxSelectedLabels(e){this._maxSelectedLabels=e}get maxSelectedLabels(){return this._maxSelectedLabels}selectionLimit;selectedItemsLabel;showToggleAll=!0;emptyFilterMessage=``;emptyMessage=``;resetFilterOnHide=!1;dropdownIcon;chipIcon;optionLabel;optionValue;optionDisabled;optionGroupLabel=`label`;optionGroupChildren=`items`;showHeader=!0;filterBy;scrollHeight=`200px`;lazy=!1;virtualScroll;loading=!1;virtualScrollItemSize;loadingIcon;virtualScrollOptions;overlayOptions;ariaFilterLabel;filterMatchMode=`contains`;tooltip=``;tooltipPosition=`right`;tooltipPositionStyle=`absolute`;tooltipStyleClass;autofocusFilter=!1;display=`comma`;autocomplete=`off`;showClear=!1;autofocus;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}get options(){return this._options()}set options(e){zE(this._options(),e)||this._options.set(e||[])}get filterValue(){return this._filterValue()}set filterValue(e){this._filterValue.set(e)}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}focusOnHover=!0;filterFields;selectOnFocus=!1;autoOptionFocus=!1;highlightOnSelect=!0;size=S();variant=S();fluid=S(void 0,{transform:ae});appendTo=S(void 0);motionOptions=S(void 0);onChange=new Me;onFilter=new Me;onFocus=new Me;onBlur=new Me;onClick=new Me;onClear=new Me;onPanelShow=new Me;onPanelHide=new Me;onLazyLoad=new Me;onRemove=new Me;onSelectAllChange=new Me;overlayViewChild;filterInputChild;focusInputViewChild;itemsViewChild;scroller;lastHiddenFocusableElementOnOverlay;firstHiddenFocusableElementOnOverlay;headerCheckboxViewChild;footerFacet;headerFacet;_componentStyle=g(_i);bindDirectiveInstance=g(ue,{self:!0});searchValue;searchTimeout;_selectAll=null;_placeholder=A(void 0);_disableTooltip=!1;value;_filteredOptions;focus;filtered;itemTemplate;groupTemplate;loaderTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;selectedItemsTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate;headerCheckboxIconTemplate;templates;_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;$variant=ye(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());$appendTo=ye(()=>this.appendTo()||this.config.overlayAppendTo());$pcMultiSelect=g(eo,{optional:!0,skipSelf:!0})??void 0;pcFluid=g(Wh,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selectedItems`:case`selecteditems`:this._selectedItemsTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`filter`:this._filterTemplate=e.template;break;case`emptyfilter`:this._emptyFilterTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`headercheckboxicon`:this._headerCheckboxIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`removetokenicon`:this._removeTokenIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`chipicon`:this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template}})}headerCheckboxFocus;filterOptions;preventModelTouched;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=A(null);_filterValue=A(null);_options=A([]);startRangeIndex=A(-1);focusedOptionIndex=A(-1);selectedOptions;clickInProgress=!1;get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(H5.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(H5.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==``&&K(this.modelValue())&&this.showClear&&!this.$disabled()&&!this.readonly&&this.$filled()}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?`selectAll`:`unselectAll`]:void 0}get listLabel(){return this.config.getTranslation(H5.ARIA).listLabel}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}visibleOptions=ye(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),i=Zc(e)&&Zt.isObject(e[0]);if(this._filterValue()){let o;if(i?o=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode,this.filterLocale):o=e.filter(g=>g.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group){let g=this.options||[],x=[];return g.forEach(F=>{let G=this.getOptionGroupChildren(F).filter(_e=>o.includes(_e));G.length>0&&x.push(m(l({},F),{[typeof this.optionGroupChildren==`string`?this.optionGroupChildren:`items`]:[...G]}))}),this.flatOptions(x)}return o}return e});label=ye(()=>{let e,i=this.modelValue();if(i&&i?.length&&this.displaySelectedLabel){if(K(this.maxSelectedLabels)&&i?.length>(this.maxSelectedLabels||0))return this.getSelectedItemsLabel();e=``;for(let o=0;o<i.length;o++)o!==0&&(e+=`, `),e+=this.getLabelByValue(i[o])}else e=this.placeholder()||``;return e});chipSelectedItems=ye(()=>K(this.maxSelectedLabels)&&this.modelValue()&&this.modelValue()?.length>(this.maxSelectedLabels||0)?this.modelValue()?.slice(0,this.maxSelectedLabels):this.modelValue());constructor(e,i,o){super(),this.zone=e,this.filterService=i,this.overlayService=o,X(()=>{let g=this.modelValue(),x=this.getAllVisibleAndNonVisibleOptions();x&&K(x)&&(this.optionValue&&this.optionLabel&&g?this.selectedOptions=x.filter(F=>g.includes(F[this.optionLabel])||g.includes(F[this.optionValue])):this.selectedOptions=g,this.cd.markForCheck())})}onInit(){this.id=this.id||Xs(`pn_id_`),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue()&&this.modelValue().length===this.selectionLimit}onAfterViewInit(){this.overlayVisible&&this.show()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((i,o,g)=>{i.push({optionGroup:o,group:!0,index:g});let x=this.getOptionGroupChildren(o);return x&&x.forEach(F=>i.push(F)),i},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,i){this.value=e,this.onModelChange(e),this.writeValue(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,i=!1,o=-1){let{originalEvent:g,option:x}=e;if(this.$disabled()||this.isOptionDisabled(x))return;let F=this.isSelected(x),V=[];F?V=this.modelValue().filter(G=>!di(G,this.getOptionValue(x),this.equalityKey()||``)):V=[...this.modelValue()||[],this.getOptionValue(x)],this.updateModel(V,g),o!==-1&&this.focusedOptionIndex.set(o),i&&v5(this.focusInputViewChild?.nativeElement),this.onChange.emit({originalEvent:e,value:V,itemValue:x})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,i=-1,o=-1){if(i===-1&&(i=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(i)),i!==-1&&o!==-1){let g=Math.min(i,o),x=Math.max(i,o),F=this.visibleOptions().slice(g,x+1).filter(V=>this.isValidOption(V)).map(V=>this.getOptionValue(V));this.updateModel(F,e)}}searchFields(){return(this.filterBy||this.optionLabel||`label`).split(`,`)}findNearestSelectedOptionIndex(e,i=!1){let o=-1;return this.hasSelectedOption()&&(i?(o=this.findPrevSelectedOptionIndex(e),o=o===-1?this.findNextSelectedOptionIndex(e):o):(o=this.findNextSelectedOptionIndex(e),o=o===-1?this.findPrevSelectedOptionIndex(e):o)),o>-1?o:e}findPrevSelectedOptionIndex(e){let i=this.hasSelectedOption()&&e>0?OR(this.visibleOptions().slice(0,e),o=>this.isValidSelectedOption(o)):-1;return i>-1?i:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let i=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidSelectedOption(o)):-1;return i>-1?i+e+1:-1}equalityKey(){return this.optionValue?null:this.dataKey}hasSelectedOption(){return K(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return e&&(this.group||this.optionGroupLabel)&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.maxSelectionLimitReached()&&!this.isSelected(e)?!0:this.optionDisabled?Ks(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let i=this.getOptionValue(e);return(this.modelValue()||[]).some(o=>di(o,i,this.equalityKey()||``))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let o=(this.group?this.flatOptions(this._options()):this._options()||[]).find(g=>!this.isOptionGroup(g)&&di(this.getOptionValue(g),e,this.equalityKey()||``));return o?this.getOptionLabel(o):null}getSelectedItemsLabel(){let e=/{(.*?)}/,i=this.selectedItemsLabel?this.selectedItemsLabel:this.config.getTranslation(H5.SELECTION_MESSAGE);return e.test(i)?i.replace(i.match(e)[0],this.modelValue().length+``):i}getOptionLabel(e){return this.optionLabel?Ks(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Ks(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){return this.optionGroupLabel?Ks(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return e?this.optionGroupChildren?Ks(e,this.optionGroupChildren):e.items:[]}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}let i=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`Space`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey();break;default:if(e.code===`KeyA`&&i){let o=this.visibleOptions().filter(g=>this.isValidOption(g)).map(g=>this.getOptionValue(g));this.updateModel(o,e),e.preventDefault();break}!i&&LR(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key),e.preventDefault())}}onFilterKeyDown(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e,!0)}}onArrowLeftKey(e,i=!1){i&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),i),this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,i=!1){if(e.altKey&&!i)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let o=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,o,this.startRangeIndex()),this.changeFocusedOptionIndex(e,o),!this.overlayVisible&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,i=!1){let{currentTarget:o}=e;if(i){let g=o.value.length;o.setSelectionRange(0,e.shiftKey?g:0),this.focusedOptionIndex.set(-1)}else{let g=e.metaKey||e.ctrlKey,x=this.findFirstOptionIndex();e.shiftKey&&g&&this.onOptionSelectRange(e,x,this.startRangeIndex()),this.changeFocusedOptionIndex(e,x),!this.overlayVisible&&this.show()}e.preventDefault()}onEndKey(e,i=!1){let{currentTarget:o}=e;if(i){let g=o.value.length;o.setSelectionRange(e.shiftKey?0:g,g),this.focusedOptionIndex.set(-1)}else{let g=e.metaKey||e.ctrlKey,x=this.findLastFocusedOptionIndex();e.shiftKey&&g&&this.onOptionSelectRange(e,this.startRangeIndex(),x),this.changeFocusedOptionIndex(e,x),!this.overlayVisible&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.stopPropagation(),e.preventDefault())}onTabKey(e,i=!1){i||(this.overlayVisible&&this.hasFocusableElements()?(v5(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault()):this.overlayVisible&&this.hide(this.filter))}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){if(!(this.$disabled()||this.loading||this.readonly||e.target?.isSameNode?.(this.focusInputViewChild?.nativeElement))){if(!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible?this.hide(!0):this.show(!0)}this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}}onFirstHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?b5(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement;v5(i)}onInputFocus(e){this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let i=e.target.value;this._filterValue.set(i),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()})}onLastHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?D5(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`):this.focusInputViewChild?.nativeElement;v5(i)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onToggleAll(e){if(!(this.$disabled()||this.readonly)){if(this.selectAll!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let i=this.getAllVisibleAndNonVisibleOptions().filter(V=>this.isSelected(V)&&(this.optionDisabled?Ks(V,this.optionDisabled):V&&V.disabled!==void 0?V.disabled:!1)),o=this.allSelected()?this.visibleOptions().filter(V=>!this.isValidOption(V)&&this.isSelected(V)):this.visibleOptions().filter(V=>this.isSelected(V)||this.isValidOption(V)),x=[...this.filter&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(V=>this.isSelected(V)&&this.isValidOption(V)):[],...i,...o].map(V=>this.getOptionValue(V)),F=[...new Set(x)];this.updateModel(F,e),(!F.length||F.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!F.length})}this.partialSelected()&&(this.selectedOptions=[],this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),ea.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let o=pi$1(this.itemsViewChild.nativeElement,`li[id="${i}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}allSelected(){return this.selectAll!==null?this.selectAll:K(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<(this.options?.length||0)}show(e){this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(i),e&&v5(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter(),this.overlayOptions?.mode===`modal`&&L6(),e&&v5(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=pi$1(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?`[data-pc-name="virtualscroller"]`:`[data-pc-section="listcontainer"]`),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=pi$1(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);i&&i.scrollIntoView({block:`nearest`,inline:`nearest`})}this.filterInputChild&&this.filterInputChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&this.filterInputChild.nativeElement.focus()),this.onPanelShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e)}resetFilter(){this.filterInputChild&&this.filterInputChild.nativeElement&&(this.filterInputChild.nativeElement.value=``),this._filterValue.set(null),this._filteredOptions=null}onOverlayHide(e){this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=[],this.updateModel(null,e),this.selectedOptions=[],this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,i){let o=this.modelValue().filter(g=>!di(g,e,this.equalityKey()||``));this.updateModel(o,i),this.onChange.emit({originalEvent:i,value:o,itemValue:e}),this.onRemove.emit({newValue:o,removed:e}),i&&i.stopPropagation()}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidOption(o)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?OR(this.visibleOptions().slice(0,e),o=>this.isValidOption(o)):-1;return i>-1?i:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?OR(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return OR(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,i){this.searchValue=(this.searchValue||``)+i;let o=-1,g=!1;return this.focusedOptionIndex()!==-1?(o=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(x=>this.isOptionMatched(x)),o=o===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(x=>this.isOptionMatched(x)):o+this.focusedOptionIndex()):o=this.visibleOptions().findIndex(x=>this.isOptionMatched(x)),o!==-1&&(g=!0),o===-1&&this.focusedOptionIndex()===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&this.changeFocusedOptionIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),g}hasFocusableElements(){return QE(this.overlayViewChild?.overlayViewChild?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled,[this.size()]:this.size(),"has-chip":this.display===`chip`&&this.value&&this.value.length&&(this.maxSelectedLabels?this.value.length<=this.maxSelectedLabels:!0),empty:!this.placeholder&&!this.$filled})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({[`overlay-`+this.appendTo]:`overlay-`+this.appendTo})}writeControlValue(e,i){this.value=e,i(e),this.cd.markForCheck()}getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected()}})}getPTOptions(e,i,o,g){return this.ptm(g,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(o,i),disabled:this.isOptionDisabled(e)}})}static ɵfac=function(i){return new(i||n)(ee(Ne),ee(F5),ee(B5))};static ɵcmp=(function(){let e=[`item`],i=[`group`],o=[`loader`],g=[`header`],x=[`filter`],F=[`footer`],V=[`emptyfilter`],G=[`empty`],_e=[`selecteditems`],Y=[`loadingicon`],R=[`filtericon`],B=[`removetokenicon`],v=[`chipicon`],A=[`clearicon`],K=[`dropdownicon`],I=[`itemcheckboxicon`],be=[`headercheckboxicon`],ie=[`overlay`],T=[`filterInput`],ne=[`focusInput`],y=[`items`],we=[`scroller`],Ee=[`lastHiddenFocusableEl`],tt=[`firstHiddenFocusableEl`],H=[`headerCheckbox`],te=[[[`p-header`]],[[`p-footer`]]],b=[`p-header`,`p-footer`],he=()=>({class:`p-multiselect-chip-icon`}),oe=(a,h)=>({$implicit:a,removeChip:h}),it$1=a=>({dataP:a}),Gt=a=>({options:a}),Ci=()=>({standalone:!0}),vi=(a,h,t)=>({checked:a,partialSelected:h,class:t}),vt$2=a=>({height:a}),Kt=(a,h)=>({$implicit:a,options:h}),xi=()=>({}),Ii$1=a=>({$implicit:a});function Ti(a,h){if(a&1&&(yp(0),Ss(1),vp()),a&2){let t=xt(2);pt(),Zo(t.label()||`empty`)}}function Si(a,h){if(a&1&&Ss(0),a&2){let t=xt(3);Ep(` `,t.getSelectedItemsLabel(),` `)}}function ki(a,h){a&1&&ic(0)}function Oi(a,h){if(a&1){let t=$_();Wr(0,`span`,27),Yo(`click`,function(f){fm(t);let N=xt(4).$implicit,U=xt(4);return pm(U.removeOption(N,f))}),or(1,ki,1,0,`ng-container`,28),Wo()}if(a&2){let t=xt(8);ze(t.cx(`chipIcon`)),Rt(`pBind`,t.ptm(`chipIcon`)),it(`aria-hidden`,!0),pt(),Rt(`ngTemplateOutlet`,t.chipIconTemplate||t._chipIconTemplate||t.removeTokenIconTemplate||t._removeTokenIconTemplate)(`ngTemplateOutletContext`,I0(6,he))}}function Mi(a,h){if(a&1&&(yp(0),or(1,Oi,2,7,`span`,26),vp()),a&2){let t=xt(7);pt(),Rt(`ngIf`,t.chipIconTemplate||t._chipIconTemplate||t.removeTokenIconTemplate||t._removeTokenIconTemplate)}}function wi(a,h){if(a&1&&or(0,Mi,2,1,`ng-container`,20),a&2){let t=xt(6);Rt(`ngIf`,!t.$disabled()&&!t.readonly)}}function Ei(a,h){a&1&&(yp(0),or(1,wi,1,1,`ng-template`,null,5,x0),vp())}function C(a,h){if(a&1){let t=$_();Wr(0,`div`,19,4)(2,`p-chip`,25),Yo(`onRemove`,function(f){let N=fm(t).$implicit,U=xt(4);return pm(U.removeOption(N,f))}),or(3,Ei,3,0,`ng-container`,20),Wo()()}if(a&2){let t=h.$implicit,p=xt(4);ze(p.cx(`chipItem`)),Rt(`pBind`,p.ptm(`chipItem`)),pt(2),ze(p.cx(`pcChip`)),Rt(`pt`,p.ptm(`pcChip`))(`unstyled`,p.unstyled())(`label`,p.getLabelByValue(t))(`removable`,!p.$disabled()&&!p.readonly)(`removeIcon`,p.chipIcon),pt(),Rt(`ngIf`,p.chipIconTemplate||p._chipIconTemplate||p.removeTokenIconTemplate||p._removeTokenIconTemplate)}}function q(a,h){if(a&1&&or(0,C,4,11,`div`,24),a&2){let t=xt(3);Rt(`ngForOf`,t.chipSelectedItems())}}function c(a,h){if(a&1&&(yp(0),Ss(1),vp()),a&2){let t=xt(3);pt(),Zo(t.placeholder()||`empty`)}}function xe$1(a,h){if(a&1&&(yp(0),st(1,Si,1,1)(2,q,1,1,`div`,23),or(3,c,2,1,`ng-container`,20),vp()),a&2){let t=xt(2);pt(),at(t.chipSelectedItems()&&t.chipSelectedItems().length===t.maxSelectedLabels?1:2),pt(2),Rt(`ngIf`,!t.modelValue()||t.modelValue().length===0)}}function ae$1(a,h){if(a&1&&(yp(0),or(1,Ti,2,1,`ng-container`,20)(2,xe$1,4,2,`ng-container`,20),vp()),a&2){let t=xt();pt(),Rt(`ngIf`,t.display===`comma`),pt(),Rt(`ngIf`,t.display===`chip`)}}function no(a,h){a&1&&ic(0)}function oo(a,h){if(a&1&&(yp(0),Ss(1),vp()),a&2){let t=xt(2);pt(),Zo(t.placeholder()||`empty`)}}function ao(a,h){if(a&1&&(yp(0),or(1,no,1,0,`ng-container`,28)(2,oo,2,1,`ng-container`,20),vp()),a&2){let t=xt();pt(),Rt(`ngTemplateOutlet`,t.selectedItemsTemplate||t._selectedItemsTemplate)(`ngTemplateOutletContext`,cc(3,oe,t.selectedOptions,t.removeOption.bind(t))),pt(),Rt(`ngIf`,!t.modelValue()||t.modelValue().length===0)}}function lo(a,h){if(a&1){let t=$_();tr(),Wr(0,`svg`,31),Yo(`click`,function(f){fm(t);let N=xt(2);return pm(N.clear(f))}),Wo()}if(a&2){let t=xt(2);ze(t.cx(`clearIcon`)),Rt(`pBind`,t.ptm(`clearIcon`)),it(`aria-hidden`,!0)}}function so(a,h){}function ro(a,h){a&1&&or(0,so,0,0,`ng-template`)}function co(a,h){if(a&1){let t=$_();Wr(0,`span`,27),Yo(`click`,function(f){fm(t);let N=xt(2);return pm(N.clear(f))}),or(1,ro,1,0,null,32),Wo()}if(a&2){let t=xt(2);ze(t.cx(`clearIcon`)),Rt(`pBind`,t.ptm(`clearIcon`)),it(`aria-hidden`,!0),pt(),Rt(`ngTemplateOutlet`,t.clearIconTemplate||t._clearIconTemplate)}}function po(a,h){if(a&1&&(yp(0),or(1,lo,1,4,`svg`,29)(2,co,2,5,`span`,30),vp()),a&2){let t=xt();pt(),Rt(`ngIf`,!t.clearIconTemplate&&!t._clearIconTemplate),pt(),Rt(`ngIf`,t.clearIconTemplate||t._clearIconTemplate)}}function mo(a,h){a&1&&ic(0)}function uo(a,h){if(a&1&&(yp(0),or(1,mo,1,0,`ng-container`,32),vp()),a&2){let t=xt(2);pt(),Rt(`ngTemplateOutlet`,t.loadingIconTemplate||t._loadingIconTemplate)}}function go$1(a,h){if(a&1&&xn(0,`span`,19),a&2){let t=xt(3);ze(t.cn(t.cx(`loadingIcon`),`pi-spin `+t.loadingIcon)),Rt(`pBind`,t.ptm(`loadingIcon`)),it(`aria-hidden`,!0)}}function ho$1(a,h){if(a&1&&xn(0,`span`,19),a&2){let t=xt(3);ze(t.cn(t.cx(`loadingIcon`),`pi pi-spinner pi-spin`)),Rt(`pBind`,t.ptm(`loadingIcon`)),it(`aria-hidden`,!0)}}function fo$1(a,h){if(a&1&&(yp(0),or(1,go$1,1,4,`span`,33)(2,ho$1,1,4,`span`,33),vp()),a&2){let t=xt(2);pt(),Rt(`ngIf`,t.loadingIcon),pt(),Rt(`ngIf`,!t.loadingIcon)}}function _o(a,h){if(a&1&&(yp(0),or(1,uo,2,1,`ng-container`,20)(2,fo$1,3,2,`ng-container`,20),vp()),a&2){let t=xt();pt(),Rt(`ngIf`,t.loadingIconTemplate||t._loadingIconTemplate),pt(),Rt(`ngIf`,!t.loadingIconTemplate&&!t._loadingIconTemplate)}}function bo(a,h){if(a&1&&xn(0,`span`,36),a&2){let t=xt(3);ze(t.cx(`dropdownIcon`)),Rt(`pBind`,t.ptm(`dropdownIcon`))(`ngClass`,t.dropdownIcon),it(`aria-hidden`,!0)(`data-p`,t.dropdownIconDataP)}}function yo(a,h){if(a&1&&(tr(),xn(0,`svg`,37)),a&2){let t=xt(3);ze(t.cx(`dropdownIcon`)),Rt(`pBind`,t.ptm(`dropdownIcon`)),it(`aria-hidden`,!0)(`data-p`,t.dropdownIconDataP)}}function Co(a,h){if(a&1&&(yp(0),or(1,bo,1,6,`span`,34)(2,yo,1,5,`svg`,35),vp()),a&2){let t=xt(2);pt(),Rt(`ngIf`,t.dropdownIcon),pt(),Rt(`ngIf`,!t.dropdownIcon)}}function vo(a,h){}function xo(a,h){a&1&&or(0,vo,0,0,`ng-template`)}function Io(a,h){if(a&1&&(Wr(0,`span`,19),or(1,xo,1,0,null,28),Wo()),a&2){let t=xt(2);ze(t.cx(`dropdownIcon`)),Rt(`pBind`,t.ptm(`dropdownIcon`)),it(`aria-hidden`,!0),pt(),Rt(`ngTemplateOutlet`,t.dropdownIconTemplate||t._dropdownIconTemplate)(`ngTemplateOutletContext`,S0(6,it$1,t.dropdownIconDataP))}}function To(a,h){if(a&1&&or(0,Co,3,2,`ng-container`,20)(1,Io,2,8,`span`,33),a&2){let t=xt();Rt(`ngIf`,!t.dropdownIconTemplate&&!t._dropdownIconTemplate),pt(),Rt(`ngIf`,t.dropdownIconTemplate||t._dropdownIconTemplate)}}function So(a,h){a&1&&ic(0)}function ko(a,h){a&1&&ic(0)}function Oo(a,h){if(a&1&&(yp(0),or(1,ko,1,0,`ng-container`,28),vp()),a&2){let t=xt(3);pt(),Rt(`ngTemplateOutlet`,t.filterTemplate||t._filterTemplate)(`ngTemplateOutletContext`,S0(2,Gt,t.filterOptions))}}function Mo(a,h){if(a&1&&(tr(),xn(0,`svg`,45)),a&2){let t=xt().class,p=xt(5);ze(t),Rt(`pBind`,p.getHeaderCheckboxPTOptions(`pcHeaderCheckbox.icon`))}}function wo(a,h){}function Eo(a,h){a&1&&or(0,wo,0,0,`ng-template`)}function Vo(a,h){if(a&1&&or(0,Mo,1,3,`svg`,44)(1,Eo,1,0,null,28),a&2){let t=h.class,p=xt(5);Rt(`ngIf`,!p.headerCheckboxIconTemplate&&!p._headerCheckboxIconTemplate&&p.allSelected()),pt(),Rt(`ngTemplateOutlet`,p.headerCheckboxIconTemplate||p._headerCheckboxIconTemplate)(`ngTemplateOutletContext`,w0(3,vi,p.allSelected(),p.partialSelected(),t))}}function Bo(a,h){if(a&1){let t=$_();Wr(0,`p-checkbox`,43,10),vM(),Yo(`onChange`,function(f){fm(t);let N=xt(4);return pm(N.onToggleAll(f))}),or(2,Vo,2,7,`ng-template`,null,11,x0),Wo()}if(a&2){let t=xt(4);Rt(`pt`,t.getHeaderCheckboxPTOptions(`pcHeaderCheckbox`))(`ngModel`,t.allSelected())(`ngModelOptions`,I0(8,Ci))(`ariaLabel`,t.toggleAllAriaLabel)(`binary`,!0)(`variant`,t.$variant())(`disabled`,t.$disabled())(`unstyled`,t.unstyled()),DM()}}function Fo(a,h){if(a&1&&(tr(),xn(0,`svg`,50)),a&2){let t=xt(5);Rt(`pBind`,t.ptm(`filterIcon`))}}function Do(a,h){}function Ao(a,h){a&1&&or(0,Do,0,0,`ng-template`)}function Po(a,h){if(a&1&&(Wr(0,`span`,51),or(1,Ao,1,0,null,32),Wo()),a&2){let t=xt(5);Rt(`pBind`,t.ptm(`filterIcon`)),pt(),Rt(`ngTemplateOutlet`,t.filterIconTemplate||t._filterIconTemplate)}}function Lo(a,h){if(a&1){let t=$_();Wr(0,`p-iconfield`,46)(1,`input`,47,12),Yo(`input`,function(f){fm(t);let N=xt(4);return pm(N.onFilterInputChange(f))})(`keydown`,function(f){fm(t);let N=xt(4);return pm(N.onFilterKeyDown(f))})(`click`,function(f){fm(t);let N=xt(4);return pm(N.onInputClick(f))})(`blur`,function(f){fm(t);let N=xt(4);return pm(N.onFilterBlur(f))}),Wo(),Wr(3,`p-inputicon`,46),or(4,Fo,1,1,`svg`,48)(5,Po,2,2,`span`,49),Wo()()}if(a&2){let t=xt(4);ze(t.cx(`pcFilterContainer`)),Rt(`pt`,t.ptm(`pcFilterContainer`))(`unstyled`,t.unstyled()),pt(),ze(t.cx(`pcFilter`)),Rt(`pt`,t.ptm(`pcFilter`))(`variant`,t.$variant())(`value`,t._filterValue()||``)(`unstyled`,t.unstyled()),it(`autocomplete`,t.autocomplete)(`aria-owns`,t.id+`_list`)(`aria-activedescendant`,t.focusedOptionId)(`disabled`,t.$disabled()?``:void 0)(`placeholder`,t.filterPlaceHolder)(`aria-label`,t.ariaFilterLabel),pt(2),Rt(`pt`,t.ptm(`pcFilterIconContainer`))(`unstyled`,t.unstyled()),pt(),Rt(`ngIf`,!t.filterIconTemplate&&!t._filterIconTemplate),pt(),Rt(`ngIf`,t.filterIconTemplate||t._filterIconTemplate)}}function No(a,h){if(a&1&&or(0,Bo,4,9,`p-checkbox`,41)(1,Lo,6,20,`p-iconfield`,42),a&2){let t=xt(3);Rt(`ngIf`,t.showToggleAll&&!t.selectionLimit),pt(),Rt(`ngIf`,t.filter)}}function jo(a,h){if(a&1&&(Wr(0,`div`,19),Lt(1),or(2,Oo,2,4,`ng-container`,21)(3,No,2,2,`ng-template`,null,9,x0),Wo()),a&2){let t=z_(4),p=xt(2);ze(p.cx(`header`)),Rt(`pBind`,p.ptm(`header`)),pt(2),Rt(`ngIf`,p.filterTemplate||p._filterTemplate)(`ngIfElse`,t)}}function Ro(a,h){a&1&&ic(0)}function Ho(a,h){if(a&1&&or(0,Ro,1,0,`ng-container`,28),a&2){let t=h.$implicit,p=h.options;xt(2);let f=z_(9);Rt(`ngTemplateOutlet`,f)(`ngTemplateOutletContext`,cc(2,Kt,t,p))}}function $o(a,h){a&1&&ic(0)}function zo(a,h){if(a&1&&or(0,$o,1,0,`ng-container`,28),a&2){let t=h.options,p=xt(4);Rt(`ngTemplateOutlet`,p.loaderTemplate||p._loaderTemplate)(`ngTemplateOutletContext`,S0(2,Gt,t))}}function qo(a,h){a&1&&(yp(0),or(1,zo,1,4,`ng-template`,null,14,x0),vp())}function Go(a,h){if(a&1){let t=$_();Wr(0,`p-scroller`,52,13),Yo(`onLazyLoad`,function(f){fm(t);let N=xt(2);return pm(N.onLazyLoad.emit(f))}),or(2,Ho,1,5,`ng-template`,null,3,x0)(4,qo,3,0,`ng-container`,20),Wo()}if(a&2){let t=xt(2);Dp(S0(9,vt$2,t.scrollHeight)),Rt(`items`,t.visibleOptions())(`itemSize`,t.virtualScrollItemSize)(`autoSize`,!0)(`tabindex`,-1)(`lazy`,t.lazy)(`options`,t.virtualScrollOptions),pt(4),Rt(`ngIf`,t.loaderTemplate||t._loaderTemplate)}}function Ko(a,h){a&1&&ic(0)}function Qo(a,h){if(a&1&&(yp(0),or(1,Ko,1,0,`ng-container`,28),vp()),a&2){xt();let t=z_(9),p=xt();pt(),Rt(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,cc(3,Kt,p.visibleOptions(),I0(2,xi)))}}function Zo$2(a,h){if(a&1&&(Wr(0,`span`),Ss(1),Wo()),a&2){let t=xt(2).$implicit,p=xt(3);pt(),Zo(p.getOptionGroupLabel(t.optionGroup))}}function Uo(a,h){if(a&1&&ic(0,58),a&2){let t=xt(2).$implicit,p=xt(3);Rt(`ngTemplateOutlet`,p.groupTemplate)(`ngTemplateOutletContext`,S0(2,Ii$1,t.optionGroup))}}function Wo$2(a,h){if(a&1&&(yp(0),Wr(1,`li`,56),or(2,Zo$2,2,1,`span`,20)(3,Uo,1,4,`ng-container`,57),Wo(),vp()),a&2){let t=xt(),p=t.$implicit,f=t.index,N=xt().options,U=xt(2);pt(),ze(U.cx(`optionGroup`)),Rt(`pBind`,U.ptm(`optionGroup`))(`ngStyle`,S0(7,vt$2,N.itemSize+`px`)),it(`id`,U.id+`_`+U.getOptionIndex(f,N)),pt(),Rt(`ngIf`,!U.groupTemplate&&p.optionGroup),pt(),Rt(`ngIf`,p.optionGroup&&U.groupTemplate)}}function Xo(a,h){if(a&1){let t=$_();yp(0),Wr(1,`li`,59),Yo(`onClick`,function(f){fm(t);let N=xt().index,U=xt().options,Pt=xt(2);return pm(Pt.onOptionSelect(f,!1,Pt.getOptionIndex(N,U)))})(`onMouseEnter`,function(f){fm(t);let N=xt().index,U=xt().options,Pt=xt(2);return pm(Pt.onOptionMouseEnter(f,Pt.getOptionIndex(N,U)))}),Wo(),vp()}if(a&2){let t=xt(),p=t.$implicit,f=t.index,N=xt().options,U=xt(2);pt(),Rt(`pBind`,U.getPTOptions(p,U.getItemOptions,f,`option`))(`id`,U.id+`_`+U.getOptionIndex(f,N))(`option`,p)(`selected`,U.isSelected(p))(`label`,U.getOptionLabel(p))(`disabled`,U.isOptionDisabled(p))(`template`,U.itemTemplate||U._itemTemplate)(`itemCheckboxIconTemplate`,U.itemCheckboxIconTemplate||U._itemCheckboxIconTemplate)(`itemSize`,N.itemSize)(`focused`,U.focusedOptionIndex()===U.getOptionIndex(f,N))(`ariaPosInset`,U.getAriaPosInset(U.getOptionIndex(f,N)))(`ariaSetSize`,U.ariaSetSize)(`variant`,U.$variant())(`highlightOnSelect`,U.highlightOnSelect)(`pt`,U.pt)(`unstyled`,U.unstyled())}}function Yo$2(a,h){if(a&1&&or(0,Wo$2,4,9,`ng-container`,20)(1,Xo,2,16,`ng-container`,20),a&2){let t=h.$implicit,p=xt(3);Rt(`ngIf`,p.isOptionGroup(t)),pt(),Rt(`ngIf`,!p.isOptionGroup(t))}}function Jo(a,h){if(a&1&&Ss(0),a&2){let t=xt(4);Ep(` `,t.emptyFilterMessageLabel,` `)}}function ea(a,h){a&1&&ic(0)}function ta$1(a,h){if(a&1&&or(0,ea,1,0,`ng-container`,32),a&2){let t=xt(4);Rt(`ngTemplateOutlet`,t.emptyFilterTemplate||t._emptyFilterTemplate||t.emptyTemplate||t._emptyFilterTemplate)}}function ia(a,h){if(a&1&&(Wr(0,`li`,56),st(1,Jo,1,1)(2,ta$1,1,1,`ng-container`),Wo()),a&2){let t=xt().options,p=xt(2);ze(p.cx(`emptyMessage`)),Rt(`pBind`,p.ptm(`emptyMessage`))(`ngStyle`,S0(5,vt$2,t.itemSize+`px`)),pt(),at(!p.emptyFilterTemplate&&!p._emptyFilterTemplate&&!p.emptyTemplate&&!p._emptyTemplate?1:2)}}function na(a,h){if(a&1&&Ss(0),a&2){let t=xt(4);Ep(` `,t.emptyMessageLabel,` `)}}function oa(a,h){a&1&&ic(0)}function aa(a,h){if(a&1&&or(0,oa,1,0,`ng-container`,32),a&2){let t=xt(4);Rt(`ngTemplateOutlet`,t.emptyTemplate||t._emptyTemplate)}}function la$1(a,h){if(a&1&&(Wr(0,`li`,56),st(1,na,1,1)(2,aa,1,1,`ng-container`),Wo()),a&2){let t=xt().options,p=xt(2);ze(p.cx(`emptyMessage`)),Rt(`pBind`,p.ptm(`emptyMessage`))(`ngStyle`,S0(5,vt$2,t.itemSize+`px`)),pt(),at(!p.emptyTemplate&&!p._emptyTemplate?1:2)}}function sa(a,h){if(a&1&&(Wr(0,`ul`,53,15),or(2,Yo$2,2,2,`ng-template`,54)(3,ia,3,7,`li`,55)(4,la$1,3,7,`li`,55),Wo()),a&2){let t=h.$implicit,p=h.options,f=xt(2);Dp(p.contentStyle),ze(f.cn(f.cx(`list`),p.contentStyleClass)),Rt(`pBind`,f.ptm(`list`)),it(`aria-label`,f.listLabel),pt(2),Rt(`ngForOf`,t),pt(),Rt(`ngIf`,f.hasFilter()&&f.isEmpty()),pt(),Rt(`ngIf`,!f.hasFilter()&&f.isEmpty())}}function ra(a,h){a&1&&ic(0)}function ca$1(a,h){if(a&1&&(Wr(0,`div`),Lt(1,1),or(2,ra,1,0,`ng-container`,32),Wo()),a&2){let t=xt(2);pt(2),Rt(`ngTemplateOutlet`,t.footerTemplate||t._footerTemplate)}}function pa(a,h){if(a&1){let t=$_();Wr(0,`div`,38)(1,`span`,39,6),Yo(`focus`,function(f){fm(t);let N=xt();return pm(N.onFirstHiddenFocus(f))}),Wo(),or(3,So,1,0,`ng-container`,32)(4,jo,5,5,`div`,33),Wr(5,`div`,19),or(6,Go,5,11,`p-scroller`,40)(7,Qo,2,6,`ng-container`,20)(8,sa,5,9,`ng-template`,null,7,x0),Wo(),or(10,ca$1,3,1,`div`,20),Wr(11,`span`,39,8),Yo(`focus`,function(f){fm(t);let N=xt();return pm(N.onLastHiddenFocus(f))}),Wo()()}if(a&2){let t=xt();ze(t.cn(t.cx(`overlay`),t.panelStyleClass)),Rt(`pBind`,t.ptm(`overlay`))(`ngStyle`,t.panelStyle),it(`data-p`,t.overlayDataP)(`id`,t.id+`_list`),pt(),Rt(`pBind`,t.ptm(`firstHiddenFocusableEl`)),it(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),pt(2),Rt(`ngTemplateOutlet`,t.headerTemplate||t._headerTemplate),pt(),Rt(`ngIf`,t.showHeader),pt(),ze(t.cx(`listContainer`)),lc(`max-height`,t.virtualScroll?`auto`:t.scrollHeight||`auto`),Rt(`pBind`,t.ptm(`listContainer`)),pt(),Rt(`ngIf`,t.virtualScroll),pt(),Rt(`ngIf`,!t.virtualScroll),pt(3),Rt(`ngIf`,t.footerFacet||t.footerTemplate||t._footerTemplate),pt(),Rt(`pBind`,t.ptm(`lastHiddenFocusableEl`)),it(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}return Ie({type:n,selectors:[[`p-multiSelect`],[`p-multiselect`],[`p-multi-select`]],contentQueries:function(h,t,p){if(h&1&&Is(p,U5,5)(p,$5,5)(p,e,4)(p,i,4)(p,o,4)(p,g,4)(p,x,4)(p,F,4)(p,V,4)(p,G,4)(p,_e,4)(p,Y,4)(p,R,4)(p,B,4)(p,v,4)(p,A,4)(p,K,4)(p,I,4)(p,be,4)(p,rC,4),h&2){let f;Zr(f=Qr())&&(t.footerFacet=f.first),Zr(f=Qr())&&(t.headerFacet=f.first),Zr(f=Qr())&&(t.itemTemplate=f.first),Zr(f=Qr())&&(t.groupTemplate=f.first),Zr(f=Qr())&&(t.loaderTemplate=f.first),Zr(f=Qr())&&(t.headerTemplate=f.first),Zr(f=Qr())&&(t.filterTemplate=f.first),Zr(f=Qr())&&(t.footerTemplate=f.first),Zr(f=Qr())&&(t.emptyFilterTemplate=f.first),Zr(f=Qr())&&(t.emptyTemplate=f.first),Zr(f=Qr())&&(t.selectedItemsTemplate=f.first),Zr(f=Qr())&&(t.loadingIconTemplate=f.first),Zr(f=Qr())&&(t.filterIconTemplate=f.first),Zr(f=Qr())&&(t.removeTokenIconTemplate=f.first),Zr(f=Qr())&&(t.chipIconTemplate=f.first),Zr(f=Qr())&&(t.clearIconTemplate=f.first),Zr(f=Qr())&&(t.dropdownIconTemplate=f.first),Zr(f=Qr())&&(t.itemCheckboxIconTemplate=f.first),Zr(f=Qr())&&(t.headerCheckboxIconTemplate=f.first),Zr(f=Qr())&&(t.templates=f)}},viewQuery:function(h,t){if(h&1&&Hb(ie,5)(T,5)(ne,5)(y,5)(we,5)(Ee,5)(tt,5)(H,5),h&2){let p;Zr(p=Qr())&&(t.overlayViewChild=p.first),Zr(p=Qr())&&(t.filterInputChild=p.first),Zr(p=Qr())&&(t.focusInputViewChild=p.first),Zr(p=Qr())&&(t.itemsViewChild=p.first),Zr(p=Qr())&&(t.scroller=p.first),Zr(p=Qr())&&(t.lastHiddenFocusableElementOnOverlay=p.first),Zr(p=Qr())&&(t.firstHiddenFocusableElementOnOverlay=p.first),Zr(p=Qr())&&(t.headerCheckboxViewChild=p.first)}},hostVars:6,hostBindings:function(h,t){h&1&&Yo(`click`,function(f){return t.onContainerClick(f)}),h&2&&(it(`id`,t.id)(`data-p`,t.containerDataP),Dp(t.sx(`root`)),ze(t.cn(t.cx(`root`),t.styleClass)))},inputs:{id:`id`,ariaLabel:`ariaLabel`,styleClass:`styleClass`,panelStyle:`panelStyle`,panelStyleClass:`panelStyleClass`,inputId:`inputId`,readonly:[2,`readonly`,`readonly`,ae],group:[2,`group`,`group`,ae],filter:[2,`filter`,`filter`,ae],filterPlaceHolder:`filterPlaceHolder`,filterLocale:`filterLocale`,overlayVisible:[2,`overlayVisible`,`overlayVisible`,ae],tabindex:[2,`tabindex`,`tabindex`,wD],dataKey:`dataKey`,ariaLabelledBy:`ariaLabelledBy`,displaySelectedLabel:`displaySelectedLabel`,maxSelectedLabels:`maxSelectedLabels`,selectionLimit:[2,`selectionLimit`,`selectionLimit`,wD],selectedItemsLabel:`selectedItemsLabel`,showToggleAll:[2,`showToggleAll`,`showToggleAll`,ae],emptyFilterMessage:`emptyFilterMessage`,emptyMessage:`emptyMessage`,resetFilterOnHide:[2,`resetFilterOnHide`,`resetFilterOnHide`,ae],dropdownIcon:`dropdownIcon`,chipIcon:`chipIcon`,optionLabel:`optionLabel`,optionValue:`optionValue`,optionDisabled:`optionDisabled`,optionGroupLabel:`optionGroupLabel`,optionGroupChildren:`optionGroupChildren`,showHeader:[2,`showHeader`,`showHeader`,ae],filterBy:`filterBy`,scrollHeight:`scrollHeight`,lazy:[2,`lazy`,`lazy`,ae],virtualScroll:[2,`virtualScroll`,`virtualScroll`,ae],loading:[2,`loading`,`loading`,ae],virtualScrollItemSize:[2,`virtualScrollItemSize`,`virtualScrollItemSize`,wD],loadingIcon:`loadingIcon`,virtualScrollOptions:`virtualScrollOptions`,overlayOptions:`overlayOptions`,ariaFilterLabel:`ariaFilterLabel`,filterMatchMode:`filterMatchMode`,tooltip:`tooltip`,tooltipPosition:`tooltipPosition`,tooltipPositionStyle:`tooltipPositionStyle`,tooltipStyleClass:`tooltipStyleClass`,autofocusFilter:[2,`autofocusFilter`,`autofocusFilter`,ae],display:`display`,autocomplete:`autocomplete`,showClear:[2,`showClear`,`showClear`,ae],autofocus:[2,`autofocus`,`autofocus`,ae],placeholder:`placeholder`,options:`options`,filterValue:`filterValue`,selectAll:`selectAll`,focusOnHover:[2,`focusOnHover`,`focusOnHover`,ae],filterFields:`filterFields`,selectOnFocus:[2,`selectOnFocus`,`selectOnFocus`,ae],autoOptionFocus:[2,`autoOptionFocus`,`autoOptionFocus`,ae],highlightOnSelect:[2,`highlightOnSelect`,`highlightOnSelect`,ae],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{onChange:`onChange`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onClick:`onClick`,onClear:`onClear`,onPanelShow:`onPanelShow`,onPanelHide:`onPanelHide`,onLazyLoad:`onLazyLoad`,onRemove:`onRemove`,onSelectAllChange:`onSelectAllChange`},features:[xe([Na,_i,{provide:eo,useExisting:n},{provide:vt,useExisting:n}]),At$1([ue]),le],ngContentSelectors:b,decls:16,vars:51,consts:[[`focusInput`,``],[`elseBlock`,``],[`overlay`,``],[`content`,``],[`token`,``],[`removeicon`,``],[`firstHiddenFocusableEl`,``],[`buildInItems`,``],[`lastHiddenFocusableEl`,``],[`builtInFilterElement`,``],[`headerCheckbox`,``],[`icon`,``],[`filterInput`,``],[`scroller`,``],[`loader`,``],[`items`,``],[1,`p-hidden-accessible`,3,`pBind`],[`role`,`combobox`,3,`focus`,`blur`,`keydown`,`pTooltip`,`pTooltipUnstyled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`,`pAutoFocus`,`pBind`],[3,`mouseleave`,`pBind`,`pTooltip`,`pTooltipUnstyled`,`tooltipDisabled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`],[3,`pBind`],[4,`ngIf`],[4,`ngIf`,`ngIfElse`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[3,`pBind`,`class`],[3,`pBind`,`class`,4,`ngFor`,`ngForOf`],[3,`onRemove`,`pt`,`unstyled`,`label`,`removable`,`removeIcon`],[3,`class`,`pBind`,`click`,4,`ngIf`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`times`,3,`pBind`,`class`,`click`,4,`ngIf`],[3,`pBind`,`class`,`click`,4,`ngIf`],[`data-p-icon`,`times`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`,4,`ngIf`],[3,`pBind`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`items`,`style`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`,`onLazyLoad`,4,`ngIf`],[3,`pt`,`ngModel`,`ngModelOptions`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`,`onChange`,4,`ngIf`],[3,`pt`,`class`,`unstyled`,4,`ngIf`],[3,`onChange`,`pt`,`ngModel`,`ngModelOptions`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[`data-p-icon`,`check`,3,`class`,`pBind`,4,`ngIf`],[`data-p-icon`,`check`,3,`pBind`],[3,`pt`,`unstyled`],[`pInputText`,``,`type`,`text`,`role`,`searchbox`,3,`input`,`keydown`,`click`,`blur`,`pt`,`variant`,`value`,`unstyled`],[`data-p-icon`,`search`,3,`pBind`,4,`ngIf`],[`class`,`p-multiselect-filter-icon`,3,`pBind`,4,`ngIf`],[`data-p-icon`,`search`,3,`pBind`],[1,`p-multiselect-filter-icon`,3,`pBind`],[3,`onLazyLoad`,`items`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[`role`,`listbox`,`aria-multiselectable`,`true`,3,`pBind`],[`ngFor`,``,3,`ngForOf`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`,4,`ngIf`],[`role`,`option`,3,`pBind`,`ngStyle`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`,4,`ngIf`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMultiSelectItem`,``,`pRipple`,``,3,`onClick`,`onMouseEnter`,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`]],template:function(h,t){if(h&1){let p=$_();Ot(te),Wr(0,`div`,16)(1,`input`,17,0),Yo(`focus`,function(N){return t.onInputFocus(N)})(`blur`,function(N){return t.onInputBlur(N)})(`keydown`,function(N){return t.onKeyDown(N)}),Wo()(),Wr(3,`div`,18),Yo(`mouseleave`,function(){return t.labelContainerMouseLeave()}),Wr(4,`div`,19),or(5,ae$1,3,2,`ng-container`,20)(6,ao,3,6,`ng-container`,20),Wo()(),or(7,po,3,2,`ng-container`,20),Wr(8,`div`,19),or(9,_o,3,2,`ng-container`,21)(10,To,2,2,`ng-template`,null,1,x0),Wo(),Wr(12,`p-overlay`,22,2),oD(`visibleChange`,function(N){return fm(p),y0(t.overlayVisible,N)||(t.overlayVisible=N),pm(N)}),Yo(`onBeforeEnter`,function(N){return t.onOverlayBeforeEnter(N)})(`onAfterLeave`,function(N){return t.onOverlayAfterLeave(N)})(`onHide`,function(N){return t.onOverlayHide(N)}),or(14,pa,13,24,`ng-template`,null,3,x0),Wo()}if(h&2){let p=z_(11);Rt(`pBind`,t.ptm(`hiddenInputContainer`)),it(`data-p-hidden-accessible`,!0),pt(),Rt(`pTooltip`,t.tooltip)(`pTooltipUnstyled`,t.unstyled())(`tooltipPosition`,t.tooltipPosition)(`positionStyle`,t.tooltipPositionStyle)(`tooltipStyleClass`,t.tooltipStyleClass)(`pAutoFocus`,t.autofocus)(`pBind`,t.ptm(`hiddenInput`)),it(`aria-disabled`,t.$disabled())(`id`,t.inputId)(`aria-label`,t.ariaLabel)(`aria-labelledby`,t.ariaLabelledBy)(`aria-haspopup`,`listbox`)(`aria-expanded`,t.overlayVisible??!1)(`aria-controls`,t.overlayVisible?t.id+`_list`:null)(`tabindex`,t.$disabled()?-1:t.tabindex)(`aria-activedescendant`,t.focused?t.focusedOptionId:void 0)(`value`,t.modelValue())(`name`,t.name())(`required`,t.required()?``:void 0)(`disabled`,t.$disabled()?``:void 0),pt(2),ze(t.cx(`labelContainer`)),Rt(`pBind`,t.ptm(`labelContainer`))(`pTooltip`,t.tooltip)(`pTooltipUnstyled`,t.unstyled())(`tooltipDisabled`,t._disableTooltip)(`tooltipPosition`,t.tooltipPosition)(`positionStyle`,t.tooltipPositionStyle)(`tooltipStyleClass`,t.tooltipStyleClass),pt(),ze(t.cx(`label`)),Rt(`pBind`,t.ptm(`label`)),it(`data-p`,t.labelDataP),pt(),Rt(`ngIf`,!t.selectedItemsTemplate&&!t._selectedItemsTemplate),pt(),Rt(`ngIf`,t.selectedItemsTemplate||t._selectedItemsTemplate),pt(),Rt(`ngIf`,t.isVisibleClearIcon),pt(),ze(t.cx(`dropdown`)),Rt(`pBind`,t.ptm(`dropdown`)),pt(),Rt(`ngIf`,t.loading)(`ngIfElse`,p),pt(3),Rt(`hostAttrSelector`,t.$attrSelector),rD(`visible`,t.overlayVisible),Rt(`options`,t.overlayOptions)(`target`,`@parent`)(`appendTo`,t.$appendTo())(`unstyled`,t.unstyled())(`pt`,t.ptm(`pcOverlay`))(`motionOptions`,t.motionOptions())}},dependencies:[to,vN,kD,bN,Gp,Wp,ja,la,ur,ga,ca,hC,ho,fo,kz,go,Yo$1,ta,Jn,Yn,fi,Wo$1,qo$1,Ii,ou,ue],encapsulation:2})})()}return n})();var Pi=()=>({standalone:!0});function Ra(n,d){if(n&1){let e=$_();Wr(0,`p-select`,6),vM(),Yo(`ngModelChange`,function(o){fm(e);let g=xt();return pm(g.changed.emit(o))}),Wo()}if(n&2){let e=xt(),i=b0(0);Rt(`inputId`,i.key)(`name`,i.key)(`options`,i.options)(`ngModel`,e.value())(`ngModelOptions`,I0(6,Pi))(`disabled`,e.disabled()),DM()}}function Ha(n,d){if(n&1){let e=$_();Wr(0,`input`,7),vM(),Yo(`ngModelChange`,function(o){fm(e);let g=xt();return pm(g.changed.emit(o))}),Wo()}if(n&2){let e=xt(),i=b0(0);Rt(`id`,i.key)(`name`,i.key)(`placeholder`,i.placeholder)(`maxlength`,i.maxLength)(`ngModel`,e.value())(`ngModelOptions`,I0(7,Pi))(`disabled`,e.disabled()),DM()}}function $a(n,d){if(n&1){let e=$_();Wr(0,`p-inputnumber`,8),vM(),Yo(`ngModelChange`,function(o){fm(e);let g=xt();return pm(g.changed.emit(o))}),Wo()}if(n&2){let e=xt(),i=b0(0);Rt(`inputId`,i.key)(`name`,i.key)(`min`,i.min)(`max`,i.max)(`step`,i.kind===`integer`?1:10**-i.decimals)(`maxFractionDigits`,i.decimals)(`useGrouping`,!1)(`ngModel`,e.value())(`ngModelOptions`,I0(10,Pi))(`disabled`,e.disabled()),DM()}}function za(n,d){if(n&1&&(Wr(0,`small`,5),Ss(1),Wo()),n&2){xt();let e=b0(0);pt(),Zo(e.help)}}var bi=class n{field=S.required();value=S.required();disabled=S(!1);changed=We();static ɵfac=function(e){return new(e||n)};static ɵcmp=Ie({type:n,selectors:[[`app-therapy-parameter`]],inputs:{field:[1,`field`],value:[1,`value`],disabled:[1,`disabled`]},outputs:{changed:`changed`},decls:8,vars:5,consts:[[1,`grid`,`min-w-0`,`gap-1.5`],[1,`font-semibold`,3,`for`],[`optionLabel`,`label`,`optionValue`,`value`,3,`inputId`,`name`,`options`,`ngModel`,`ngModelOptions`,`disabled`],[`pInputText`,``,`required`,``,3,`id`,`name`,`placeholder`,`maxlength`,`ngModel`,`ngModelOptions`,`disabled`],[`locale`,`pt-BR`,`required`,``,3,`inputId`,`name`,`min`,`max`,`step`,`maxFractionDigits`,`useGrouping`,`ngModel`,`ngModelOptions`,`disabled`],[1,`text-(--p-text-muted-color,#64748b)`],[`optionLabel`,`label`,`optionValue`,`value`,3,`ngModelChange`,`inputId`,`name`,`options`,`ngModel`,`ngModelOptions`,`disabled`],[`pInputText`,``,`required`,``,3,`ngModelChange`,`id`,`name`,`placeholder`,`maxlength`,`ngModel`,`ngModelOptions`,`disabled`],[`locale`,`pt-BR`,`required`,``,3,`ngModelChange`,`inputId`,`name`,`min`,`max`,`step`,`maxFractionDigits`,`useGrouping`,`ngModel`,`ngModelOptions`,`disabled`]],template:function(e,i){if(e&1&&(sD(0),Wr(1,`div`,0)(2,`label`,1),Ss(3),Wo(),st(4,Ra,1,7,`p-select`,2)(5,Ha,1,8,`input`,3)(6,$a,1,11,`p-inputnumber`,4),st(7,za,2,1,`small`,5),Wo()),e&2){let o=v0(i.field());pt(2),Rt(`for`,o.key),pt(),Zo(o.label),pt(),at(o.kind===`select`?4:o.kind===`list`?5:6),pt(3),at(o.help?7:-1)}},dependencies:[Wo$1,Do,qo$1,Uo,jr,Ii,Ti,Jn,xi],encapsulation:2})};var qa=(n,d)=>d.key;function Ga(n,d){if(n&1&&(Wr(0,`small`),Ss(1),Wo()),n&2){let e=xt();pt(),Zo(e.definition.help)}}function Ka(n,d){if(n&1){let e=$_();Wr(0,`app-therapy-parameter`,15),Yo(`changed`,function(o){let g=fm(e).$implicit,x=xt();return pm(x.parameterChanged(g,o))}),Wo()}if(n&2){let e=d.$implicit,i=xt();Ko(`col-span-full`,e.kind===`select`||e.kind===`list`),Rt(`field`,e)(`value`,i.form[e.key])(`disabled`,i.store.busy())}}function Qa(n,d){n&1&&(Wr(0,`p-message`,11),Ss(1),Wo()),n&2&&(pt(),Zo(d))}var yi=class n{saved=We();cancelled=We();store=g(HC);saveError=A(``);cdr=g(Qo);form=X9();get metrics(){return mx(this.form.gameId)}games=Object.keys(Bn$1).map(d=>({value:d,label:Bn$1[d].label}));get definition(){return Bn$1[this.form.gameId]}constructor(){X(()=>{let d=this.store.selected();this.form=d?.therapy?structuredClone(d.therapy):X9(),!this.definition.customIntensity&&this.form.intensity===`custom`&&(this.form.intensity=this.definition.defaults.intensity),this.cdr.markForCheck()})}gameChanged(d){if(!this.games.some(x=>x.value===d)||d===this.form.gameId)return;let e=X9(d),i=mx(this.form.gameId),o=mx(d),g=this.form.metrics.filter(x=>o.some(F=>F.value===x));g.push(...e.metrics.filter(x=>!i.some(F=>F.value===x))),this.form=m(l({},e),{metrics:g.length?g:e.metrics})}parameterChanged(d,e){if(d.key===`intensity`){let i=d.options.find(o=>o.value===e);if(!i)return;i.value===`custom`?this.form.intensity=`custom`:Object.assign(this.form,J9(i.value,this.form.gameId));return}Object.assign(this.form,{[d.key]:e}),d.customizesIntensity&&this.definition.customIntensity&&(this.form.intensity=`custom`)}async save(){if(this.store.busy())return;this.saveError.set(``);let d=m(l({},this.form),{title:this.form.title.trim(),metrics:[...this.form.metrics??[]]});for(let e of this.definition.fields)e.kind===`list`&&typeof d[e.key]==`string`&&(d[e.key]=d[e.key].split(e.separator).map(i=>i.trim()).join(e.separator));if(!Yh(d)){this.saveError.set(`Confira os parâmetros da terapia e selecione pelo menos uma métrica.`);return}await this.store.save(d)?this.saved.emit():this.saveError.set(this.store.message()||`Não foi possível salvar o plano. Tente novamente.`)}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ie({type:n,selectors:[[`app-therapy-form`]],outputs:{saved:`saved`,cancelled:`cancelled`},decls:24,vars:14,consts:[[1,`grid`,`gap-4`,3,`ngSubmit`],[1,`grid`,`min-w-0`,`gap-1.5`],[`for`,`therapy-game`,1,`font-semibold`],[`inputId`,`therapy-game`,`name`,`game`,`optionLabel`,`label`,`optionValue`,`value`,3,`ngModelChange`,`options`,`ngModel`,`disabled`],[1,`text-(--p-text-muted-color,#64748b)`],[`for`,`therapy-title`,1,`font-semibold`],[`pInputText`,``,`id`,`therapy-title`,`name`,`title`,`maxlength`,`120`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`],[`for`,`therapy-metrics`,1,`font-semibold`],[`inputId`,`therapy-metrics`,`name`,`metrics`,`optionLabel`,`label`,`optionValue`,`value`,`display`,`chip`,`placeholder`,`Selecione as métricas`,3,`ngModelChange`,`options`,`filter`,`ngModel`,`disabled`],[1,`grid`,`grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))]`,`items-start`,`gap-4`],[3,`col-span-full`,`field`,`value`,`disabled`],[`severity`,`error`,`role`,`alert`],[1,`flex`,`flex-wrap`,`gap-2`],[`type`,`submit`,`label`,`Salvar plano`,`icon`,`pi pi-save`,3,`loading`],[`type`,`button`,`label`,`Cancelar`,`severity`,`secondary`,3,`onClick`,`disabled`],[3,`changed`,`field`,`value`,`disabled`]],template:function(e,i){if(e&1&&(Wr(0,`p-fluid`)(1,`form`,0),Yo(`ngSubmit`,function(){return i.save()}),Wr(2,`div`,1)(3,`label`,2),Ss(4,`Jogo`),Wo(),Wr(5,`p-select`,3),vM(),Yo(`ngModelChange`,function(g){return i.gameChanged(g)}),Wo(),Wr(6,`small`,4),Ss(7),Wo(),st(8,Ga,2,1,`small`),Wo(),Wr(9,`div`,1)(10,`label`,5),Ss(11,`Título`),Wo(),Wr(12,`input`,6),vM(),oD(`ngModelChange`,function(g){return y0(i.form.title,g)||(i.form.title=g),g}),Wo()(),Wr(13,`div`,1)(14,`label`,7),Ss(15,`Métricas do relatório`),Wo(),Wr(16,`p-multiselect`,8),vM(),oD(`ngModelChange`,function(g){return y0(i.form.metrics,g)||(i.form.metrics=g),g}),Wo()(),Wr(17,`div`,9),O_(18,Ka,1,5,`app-therapy-parameter`,10,qa),Wo(),st(20,Qa,2,1,`p-message`,11),Wr(21,`div`,12),xn(22,`p-button`,13),Wr(23,`p-button`,14),Yo(`onClick`,function(){return i.cancelled.emit()}),Wo()()()()),e&2){let o;pt(5),Rt(`options`,i.games)(`ngModel`,i.form.gameId)(`disabled`,i.store.busy()),DM(),pt(2),Ep(`Postura: `,i.definition.postureLabel,`.`),pt(),at(i.definition.help?8:-1),pt(4),rD(`ngModel`,i.form.title),Rt(`disabled`,i.store.busy()),DM(),pt(4),Rt(`options`,i.metrics)(`filter`,!1),rD(`ngModel`,i.form.metrics),Rt(`disabled`,i.store.busy()),DM(),pt(2),L_(i.definition.fields),pt(2),at((o=i.saveError())?20:-1,o),pt(2),Rt(`loading`,i.store.busy()),pt(),Rt(`disabled`,i.store.busy())}},dependencies:[Wo$1,_l,Do,qo$1,gl,Uo,jr,Ii,qr,ux,Jn,Wh,Ai,at$1,xi,bi],encapsulation:2})};var Za=()=>({width:`min(44rem, calc(100vw - 2rem))`});function Ua(n,d){n&1&&(Wr(0,`p`,12),Ss(1),Wo()),n&2&&(pt(),Zo(d.title))}function Wa(n,d){n&1&&(Wr(0,`p`),Ss(1,`Nenhum plano cadastrado.`),Wo())}function Xa(n,d){if(n&1){let e=$_();Wr(0,`app-therapy-form`,15),Yo(`saved`,function(){fm(e);let o=xt(2);return pm(o.editingPlan.set(!1))})(`cancelled`,function(){fm(e);let o=xt(2);return pm(o.editingPlan.set(!1))}),Wo()}}function Ya(n,d){if(n&1){let e=$_();Wr(0,`div`,5)(1,`h1`,6),Ss(2),Wo(),Wr(3,`button`,7,0),Yo(`click`,function(){fm(e);let o=xt();return pm(o.editingPlan.set(!0))}),Wo()(),Wr(5,`div`,8),xn(6,`app-patient-history`,9),Wr(7,`aside`,10)(8,`p-panel`,11),st(9,Ua,2,1,`p`,12)(10,Wa,2,0,`p`),Wo(),xn(11,`app-patient-access-card`,13),Wo()(),Wr(12,`p-dialog`,14),oD(`visibleChange`,function(o){fm(e);let g=xt();return y0(g.editingPlan,o)||(g.editingPlan=o),pm(o)}),Yo(`onHide`,function(){fm(e);let o=z_(4);return pm(o.focus())}),st(13,Xa,1,0,`app-therapy-form`),Wo()}if(n&2){let e,i=d,o=xt();pt(2),Zo(i.name),pt(),Rt(`icon`,i.therapy?`pi pi-pencil`:`pi pi-plus`)(`label`,i.therapy?`Editar plano atual`:`Criar plano`)(`disabled`,o.store.busy()),pt(3),Rt(`patientId`,i.id),pt(3),at((e=i.therapy)?9:10,e),pt(2),Rt(`code`,i.code),pt(),Dp(I0(18,Za)),Rt(`header`,i.therapy?`Editar plano atual`:`Criar plano`),rD(`visible`,o.editingPlan),Rt(`modal`,!0)(`blockScroll`,!0)(`draggable`,!1)(`resizable`,!1)(`closable`,!o.store.busy())(`closeOnEscape`,!o.store.busy()),pt(),at(o.editingPlan()?13:-1)}}function Ja(n,d){n&1&&(Wr(0,`p-message`,3),Ss(1,`Carregando paciente…`),Wo())}function el(n,d){if(n&1&&(Wr(0,`p-message`,4),Ss(1),Wo()),n&2){let e=xt();Rt(`severity`,e.store.detailError()?`error`:`info`),pt(),Ep(` `,e.store.detailError()||`Paciente não encontrado.`,` `)}}var io=class n{store=g(HC);editingPlan=A(!1);params=Bn(g(Ln$1).paramMap);constructor(){X(()=>{let d=this.params()?.get(`id`);this.editingPlan.set(!1),d&&Y(()=>{this.store.select(d)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ie({type:n,selectors:[[`ng-component`]],decls:6,vars:2,consts:[[`editPlanButton`,``],[`id`,`patient-details`],[`pButton`,``,`severity`,`secondary`,`icon`,`pi pi-arrow-left`,`routerLink`,`/pacientes`,3,`text`],[`severity`,`info`,1,`mt-3`,`block`],[1,`mt-3`,`block`,3,`severity`],[1,`mt-3`,`mb-4`,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-3`],[1,`text-2xl`,`font-semibold`],[`pButton`,``,`type`,`button`,`aria-haspopup`,`dialog`,3,`click`,`icon`,`label`,`disabled`],[1,`grid`,`items-start`,`gap-4`,`md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]`],[3,`patientId`],[`aria-label`,`Plano e acesso do paciente`,1,`grid`,`gap-4`],[`header`,`Plano atual`],[1,`font-medium`],[3,`code`],[`closeAriaLabel`,`Fechar`,3,`visibleChange`,`onHide`,`header`,`visible`,`modal`,`blockScroll`,`draggable`,`resizable`,`closable`,`closeOnEscape`],[3,`saved`,`cancelled`]],template:function(e,i){if(e&1&&(Wr(0,`section`,1)(1,`a`,2),Ss(2,`Voltar aos pacientes`),Wo(),st(3,Ya,14,19)(4,Ja,2,0,`p-message`,3)(5,el,2,2,`p-message`,4),Wo()),e&2){let o;pt(),Rt(`text`,!0),pt(2),at((o=i.store.selected())?3:i.store.detailLoading()?4:5,o)}},dependencies:[VE,b9,om,at$1,At,yi,ui,hi],encapsulation:2})};export{io as PatientDetails};