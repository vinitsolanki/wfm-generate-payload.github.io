import './polyfills.server.mjs';
import{A as te,B as _e,C as De,D as be,E as S,F as B,G as Ve,H as Ee,J as Ae,N as Fe,P as Te,R as Me,S as U,T as _,U as Se,V as ie,X as Ie,Y as we,Z as xe,a as he,aa as Oe,b as me,c as fe,d as pe,e as A,ea as Pe,f as X,g as D,h as R,ha as Ne,i as ee,j as y,k as ge,l as k,m as G,n as F,o as T,p as l,q as M,r as H,s as v,t as ye,u as ve,v as u,w as h,x as Ce,y as C,z as p}from"./chunk-GL4Y5EJU.mjs";import{a as f,b as g}from"./chunk-5XUXGTUW.mjs";var L=class t{title="wfm-generate-payload";static \u0275fac=function(n){return new(n||t)};static \u0275cmp=R({type:t,selectors:[["app-root"]],standalone:!0,features:[B],decls:2,vars:0,consts:[[1,"container"]],template:function(n,i){n&1&&(u(0,"div",0),Ce(1,"router-outlet"),h())},dependencies:[Pe]})};var We=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(l(M),l(F))},e.\u0275dir=y({type:e});let t=e;return t})(),ae=(()=>{let e=class e extends We{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=k(e)))(s||e)}})(),e.\u0275dir=y({type:e,features:[v]});let t=e;return t})(),z=new D("");var ht={provide:z,useExisting:A(()=>J),multi:!0};function mt(){let t=ie()?ie().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ft=new D(""),J=(()=>{let e=class e extends We{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!mt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(l(M),l(F),l(ft,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&C("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[S([ht]),v]});let t=e;return t})();var pt=new D(""),gt=new D("");function $e(t){return t!=null}function ze(t){return Ae(t)?me(t):t}function Je(t){let e={};return t.forEach(n=>{e=n!=null?f(f({},e),n):e}),Object.keys(e).length===0?null:e}function Ke(t,e){return e.map(n=>n(t))}function yt(t){return!t.validate}function Ze(t){return t.map(e=>yt(e)?e:n=>e.validate(n))}function vt(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){return Je(Ke(n,e))}}function Ye(t){return t!=null?vt(Ze(t)):null}function Ct(t){if(!t)return null;let e=t.filter($e);return e.length==0?null:function(n){let i=Ke(n,e).map(ze);return pe(i).pipe(fe(Je))}}function Qe(t){return t!=null?Ct(Ze(t)):null}function ke(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function _t(t){return t._rawValidators}function Dt(t){return t._rawAsyncValidators}function ne(t){return t?Array.isArray(t)?t:[t]:[]}function q(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ge(t,e){let n=ne(e);return ne(t).forEach(r=>{q(n,r)||n.push(r)}),n}function He(t,e){return ne(e).filter(n=>!q(t,n))}var W=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},re=class extends W{get formDirective(){return null}get path(){return null}},P=class extends W{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},se=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},bt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},gi=g(f({},bt),{"[class.ng-submitted]":"isSubmitted"}),Xe=(()=>{let e=class e extends se{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(l(P,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&ve("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[v]});let t=e;return t})();var I="VALID",j="INVALID",b="PENDING",w="DISABLED",E=class{},$=class extends E{constructor(e,n){super(),this.value=e,this.source=n}},x=class extends E{constructor(e,n){super(),this.pristine=e,this.source=n}},O=class extends E{constructor(e,n){super(),this.touched=e,this.source=n}},V=class extends E{constructor(e,n){super(),this.status=e,this.source=n}};function Vt(t){return(K(t)?t.validators:t)||null}function Et(t){return Array.isArray(t)?Ye(t):t||null}function At(t,e){return(K(e)?e.asyncValidators:t)||null}function Ft(t){return Array.isArray(t)?Qe(t):t||null}function K(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var oe=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=U(()=>this.statusReactive()),this.statusReactive=H(void 0),this._pristine=U(()=>this.pristineReactive()),this.pristineReactive=H(!0),this._touched=U(()=>this.touchedReactive()),this.touchedReactive=H(!1),this._events=new he,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return _(this.statusReactive)}set status(e){_(()=>this.statusReactive.set(e))}get valid(){return this.status===I}get invalid(){return this.status===j}get pending(){return this.status==b}get disabled(){return this.status===w}get enabled(){return this.status!==w}get pristine(){return _(this.pristineReactive)}set pristine(e){_(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return _(this.touchedReactive)}set touched(e){_(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(He(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}hasValidator(e){return q(this._rawValidators,e)}hasAsyncValidator(e){return q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(g(f({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new O(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new O(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(g(f({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new x(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new x(!0,i))}markAsPending(e={}){this.status=b;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new V(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(g(f({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable(g(f({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,i)),this._events.next(new V(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(f({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(g(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(f({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===b)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,n)),this._events.next(new V(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(g(f({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=ze(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new V(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(j)?j:I}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new x(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){K(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Et(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ft(this._rawAsyncValidators)}};var et=new D("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function Tt(t,e){return[...e.path,t]}function Mt(t,e,n=le){It(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),wt(t,e),Ot(t,e),xt(t,e),St(t,e)}function Be(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function St(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function It(t,e){let n=_t(t);e.validator!==null?t.setValidators(ke(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Dt(t);e.asyncValidator!==null?t.setAsyncValidators(ke(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Be(e._rawValidators,r),Be(e._rawAsyncValidators,r)}function wt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&tt(t,e)})}function xt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&tt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function tt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ot(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Pt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Nt(t){return Object.getPrototypeOf(t.constructor)===ae}function Rt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===J?n=s:Nt(s)?i=s:r=s}),r||i||n||null}function Ue(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Le(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var kt=class extends oe{constructor(e=null,n,i){super(Vt(n),At(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),K(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Le(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Le(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Gt={provide:P,useExisting:A(()=>ue)},je=Promise.resolve(),ue=(()=>{let e=class e extends P{constructor(i,r,s,o,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new kt,this._registered=!1,this.name="",this.update=new G,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Rt(this,o)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Pt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){je.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&Me(r);je.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Tt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(l(re,9),l(pt,10),l(gt,10),l(z,10),l(Te,8),l(et,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[S([Gt]),v,ge]});let t=e;return t})();var Ht={provide:z,useExisting:A(()=>Z),multi:!0};function it(t,e){return t==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function Bt(t){return t.split(":")[0]}var Z=(()=>{let e=class e extends ae{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let r=this._getOptionId(i),s=it(r,i);this.setProperty("value",s)}registerOnChange(i){this.onChange=r=>{this.value=this._getOptionValue(r),i(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(i){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),i))return r;return null}_getOptionValue(i){let r=Bt(i);return this._optionMap.has(r)?this._optionMap.get(r):i}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=k(e)))(s||e)}})(),e.\u0275dir=y({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,s){r&1&&C("change",function(a){return s.onChange(a.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[S([Ht]),v]});let t=e;return t})(),nt=(()=>{let e=class e{constructor(i,r,s){this._element=i,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(i){this._select!=null&&(this._select._optionMap.set(this.id,i),this._setElementValue(it(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._setElementValue(i),this._select&&this._select.writeValue(this._select.value)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(l(F),l(M),l(Z,9))},e.\u0275dir=y({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})(),Ut={provide:z,useExisting:A(()=>rt),multi:!0};function qe(t,e){return t==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function Lt(t){return t.split(":")[0]}var rt=(()=>{let e=class e extends ae{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let r;if(Array.isArray(i)){let s=i.map(o=>this._getOptionId(o));r=(o,a)=>{o._setSelected(s.indexOf(a.toString())>-1)}}else r=(s,o)=>{s._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(i){this.onChange=r=>{let s=[],o=r.selectedOptions;if(o!==void 0){let a=o;for(let d=0;d<a.length;d++){let c=a[d],m=this._getOptionValue(c.value);s.push(m)}}else{let a=r.options;for(let d=0;d<a.length;d++){let c=a[d];if(c.selected){let m=this._getOptionValue(c.value);s.push(m)}}}this.value=s,i(s)}}_registerOption(i){let r=(this._idCounter++).toString();return this._optionMap.set(r,i),r}_getOptionId(i){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,i))return r;return null}_getOptionValue(i){let r=Lt(i);return this._optionMap.has(r)?this._optionMap.get(r)._value:i}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=k(e)))(s||e)}})(),e.\u0275dir=y({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,s){r&1&&C("change",function(a){return s.onChange(a.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[S([Ut]),v]});let t=e;return t})(),st=(()=>{let e=class e{constructor(i,r,s){this._element=i,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(i){this._select!=null&&(this._value=i,this._setElementValue(qe(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._select?(this._value=i,this._setElementValue(qe(this.id,i)),this._select.writeValue(this._select.value)):this._setElementValue(i)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}_setSelected(i){this._renderer.setProperty(this._element.nativeElement,"selected",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(l(F),l(M),l(rt,9))},e.\u0275dir=y({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})();var jt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ee({type:e}),e.\u0275inj=X({});let t=e;return t})();var ot=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:et,useValue:i.callSetDisabledState??le}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ee({type:e}),e.\u0275inj=X({imports:[jt]});let t=e;return t})();function at(t){try{return JSON.parse(t)}catch{return null}}var de=(i=>(i.WORKER="WORKER",i.LINE_MANAGER="LINE_MANAGER",i.TIME_MANAGER="TIME_MANAGER",i))(de||{});var Y=class t{timeCardEntryDetailsPayload="";userContext="WORKER";userContexts=de;preparedCalculatedTimeTotalsPayload={};errorMessage="";generateCalculatedTimeTotals(e){if(console.log(JSON.stringify(e)),e=="")this.errorMessage="";else if(this.isJsonString(e)){this.errorMessage="";let n=at(e);this.preparedCalculatedTimeTotalsPayload.userContext=this.userContext;let i=[];for(let r of n?.items||[]){for(let s of r?.timeCards?.items||[]){let o={};o.TimeCardId=s.TimeCardId,o.TimeCardVersion=s.TimeCardVersion,o.PersonId=s.PersonId,o.StartDate=s.StartDate,o.StopDate=s.StopDate,o.ProcessMode=null,o.Comments=null;let a=[];for(let c of s?.timeEntries?.items||[]){let m={};m.TimeEntryId=c.TimeEntryId,m.UnitOfMeasure=c.UnitOfMeasure,m.TimeEntryVersion=c.TimeEntryVersion,m.EntryDate=c.EntryDate,c.StartTime!=null&&c.StopTime!=null?(m.StartTime=c.StartTime,m.StopTime=c.StopTime):m.Measure=c.Measure,m.Comments=null;let ce=[];for(let Q of c?.timeCardFieldValues?.items||[]){let N={};N.TimeCardFieldId=Q.TimeCardFieldId,N.Value=Q.Value,N.TimeEntryId=Q.TimeEntryId,ce.push(N)}m.timeCardFieldValues=ce,a.push(m)}o.timeEntries=a;let d={};d.id=s.TimeCardId,d.version=s.TimeCardVersion,d.personId=s.PersonId,d.timeCardAsString=JSON.stringify(o),i.push(d)}this.preparedCalculatedTimeTotalsPayload.timeCards=i}}else this.errorMessage="Invalid JSON"}timeCardEntryDetailsPayloadOnChange(e){this.generateCalculatedTimeTotals(e)}copyToClipboard(){navigator.clipboard.writeText(JSON.stringify(this.preparedCalculatedTimeTotalsPayload))}isJsonString(e){try{JSON.parse(e)}catch{return!1}return!0}getSampleCalculatedTimeTotalsPayload(){return`{
  "userContext": "WORKER",
  "timeCards": [
    {
      "id": "300100626405787",
      "version": 2,
      "personId": "300100075756917",
      "timeCardAsString": {
        "TimeCardId": "300100626405787",
        "TimeCardVersion": 2,
        "PersonId": "300100075756917",
        "StartDate": "2024-08-19T00:00:00+00:00",
        "StopDate": "2024-08-25T23:59:59.999+00:00",
        "ProcessMode": null,
        "Comments": null,
        "timeEntries": [
          {
            "TimeEntryId": "300100626413623",
            "UnitOfMeasure": "HR",
            "TimeEntryVersion": 1,
            "EntryDate": "2024-08-19T00:00:00+00:00",
            "StartTime": "2024-08-19T10:00:00+00:00",
            "StopTime": "2024-08-19T20:00:00+00:00",
            "Comments": null,
            "timeCardFieldValues": [
              {
                "TimeCardFieldId": "300100192543098",
                "Value": "300100075758151",
                "TimeEntryId": "300100626413623"
              },
              {
                "TimeCardFieldId": "300100192543099",
                "Value": "300100033146497",
                "TimeEntryId": "300100626413623"
              }
            ]
          },
          {
            "TimeEntryId": "300100626413624",
            "UnitOfMeasure": "HR",
            "TimeEntryVersion": 1,
            "EntryDate": "2024-08-20T00:00:00+00:00",
            "Measure": 10,
            "Comments": null,
            "timeCardFieldValues": [
              {
                "TimeCardFieldId": "300100192543098",
                "Value": "300100075758151",
                "TimeEntryId": "300100626413624"
              },
              {
                "TimeCardFieldId": "300100192543099",
                "Value": "300100033146497",
                "TimeEntryId": "300100626413624"
              }
            ]
          }
        ]
      }
    }
  ]
}`}getSamplePayload(){return`{
    "items": [
        {
            "TimeCardId": "300100626405787",
            "TimeCardVersion": 2,
            "PersonId": "300100075756917",
            "StartDate": "2024-08-19T00:00:00+00:00",
            "StopDate": "2024-08-25T23:59:59.999+00:00",
            "PersonName": "JTL_EMP_05 JTL_EMP_05",
            "AssignmentNumber": "EWFMTLQA127",
            "BusinessTitle": "WFMTL Analyst",
            "PersonNumber": "955160008184522",
            "WorkEmail": "sendmail-test-discard@oracle.com",
            "JobName": "WFMTL Analyst",
            "PositionName": null,
            "Location": "Texas Branch",
            "Department": "Vision Operations",
            "Manager": "RRF_WFMTL_Uzair, Nt",
            "timeCardLayouts": {
                "items": [
                    {
                        "LayoutId": "300100192543093",
                        "LayoutSetId": "300100192542969",
                        "LayoutType": "Time Entry Indiv",
                        "LayerType": "Raw Timecard Matrix",
                        "PeriodStartTime": "2024-08-19T00:00:00+00:00",
                        "PeriodStopTime": "2024-08-25T23:59:59.999+00:00",
                        "Week1Start": null,
                        "Week2Start": null,
                        "Week3Start": null,
                        "Week4Start": null,
                        "Week5Start": null,
                        "AllowNegativeHoursFlag": false,
                        "AllowSpanMidnightFlag": false,
                        "DisplayUOMFlag": false,
                        "TimeEntryFormat": "BOTH",
                        "DateFormat": "EEE,MMM dd",
                        "NoOfDecimals": 2,
                        "DefaultNoOfRowsOnNewTimecard": 3,
                        "HighlightOvertimePeriodsFlag": false,
                        "AllowEditOfIncompleteTimeEntriesFlag": true,
                        "AllowEditOfInerrorTimeEntriesFlag": true,
                        "AllowCreateFlag": true,
                        "AllowDeleteFlag": true,
                        "AllowEditFlag": true,
                        "AllowViewFlag": true,
                        "AllowPrintFlag": true,
                        "AllowApproveFlag": false,
                        "AllowRejectFlag": false,
                        "AllowEditOfTCDEntriesFlag": true,
                        "AllowRequestChangeFlag": true,
                        "ChangeAuditEnabledFlag": false,
                        "ChangeAuditReasonMandatoryFlag": false,
                        "ScheduledSubmitTCFlag": false,
                        "ShowScheduleDeviationFlag": false,
                        "ShowEquivalentHoursForDayEntriesFlag": false,
                        "ShowScheduledHoursFlag": false,
                        "ShowTotalHoursFlag": true,
                        "ShowCalculatedTimeFlag": true,
                        "AllowChangeRequestForTimeEntryFlag": true,
                        "AllowSubmitFlag": true,
                        "AddDayAtPeriodStartFlag": false,
                        "AddDayAtPeriodStopFlag": false,
                        "HasAttestationsConfiguredFlag": false,
                        "HasWDDConfiguredFlag": false,
                        "ScheduleDeviationLabel": "Schedule Deviation",
                        "EquivalentHoursForDayEntriesLabel": "Equivalent Hours for Day Entries",
                        "ScheduledHoursLabel": "Scheduled Hours",
                        "TotalHoursLabel": "Reported Hours",
                        "ShowScheduledShiftFlag": false,
                        "EntryCommentEnabledFlag": true,
                        "TimeCardCommentEnabledFlag": false,
                        "timeCardFields": {
                            "items": [
                                {
                                    "TimeCardFieldId": "300100192543098",
                                    "TimeCardFieldType": "S",
                                    "DisplayType": "LISTOFVALUES",
                                    "RequiredFlag": true,
                                    "Label": "Assignment Number",
                                    "SpecificValue": null,
                                    "Function": null,
                                    "FunctionBasedOnAnother": null,
                                    "AttributeDataType": "Number",
                                    "DisplaySequence": 1,
                                    "AlternateNameId": null,
                                    "AttributeFieldId": "300100028324354",
                                    "IdentifierFlag": false,
                                    "BindTcfId1": null,
                                    "BindTcfId2": null,
                                    "BindTcfId3": null,
                                    "BindTcfId4": null,
                                    "BindTcfId5": null,
                                    "UserDataSourceId": "300100028422149",
                                    "AdministratorDataSourceId": "300100028422149",
                                    "FormatBasedFlag": false,
                                    "MaximumLength": null,
                                    "Scale": null,
                                    "FormatSubType": null,
                                    "MaximumValue": null,
                                    "MinimumValue": null,
                                    "RestURI": "/timeCardFieldValues?finder=findByWord;TcfId=300100192543098,UserType=WORKER,PersonId=300100075756917,StartDate=2024-08-19,EndDate=2024-08-25",
                                    "UnitOfMeasure": "NONE",
                                    "AdditionalAttributeFlag": false,
                                    "ShowOnlyOnCalculatedTimeFlag": false,
                                    "AllowChangeRequestFlag": false,
                                    "DefaultValueDisplay": null,
                                    "DefaultValueUOM": null,
                                    "DefaultValue": null,
                                    "ReadOnlyFlag": false,
                                    "CanSupportAbsenceTypeFlag": false,
                                    "@context": {
                                        "key": "300100192543098"
                                    }
                                },
                                {
                                    "TimeCardFieldId": "300100192543099",
                                    "TimeCardFieldType": "M",
                                    "DisplayType": "LISTOFVALUES",
                                    "RequiredFlag": true,
                                    "Label": "Hours Type",
                                    "SpecificValue": null,
                                    "Function": null,
                                    "FunctionBasedOnAnother": null,
                                    "AttributeDataType": null,
                                    "DisplaySequence": 2,
                                    "AlternateNameId": "300100033146485",
                                    "AttributeFieldId": null,
                                    "IdentifierFlag": false,
                                    "BindTcfId1": "300100192543098",
                                    "BindTcfId2": null,
                                    "BindTcfId3": null,
                                    "BindTcfId4": null,
                                    "BindTcfId5": null,
                                    "UserDataSourceId": null,
                                    "AdministratorDataSourceId": null,
                                    "FormatBasedFlag": false,
                                    "MaximumLength": null,
                                    "Scale": null,
                                    "FormatSubType": null,
                                    "MaximumValue": null,
                                    "MinimumValue": null,
                                    "RestURI": "/timeCardFieldValues?finder=findByWord;TcfId=300100192543099,UserType=WORKER,PersonId=300100075756917,StartDate=2024-08-19,EndDate=2024-08-25,BindTcfId1=300100192543098",
                                    "UnitOfMeasure": "DYNAMIC",
                                    "AdditionalAttributeFlag": false,
                                    "ShowOnlyOnCalculatedTimeFlag": false,
                                    "AllowChangeRequestFlag": false,
                                    "DefaultValueDisplay": null,
                                    "DefaultValueUOM": null,
                                    "DefaultValue": null,
                                    "ReadOnlyFlag": false,
                                    "CanSupportAbsenceTypeFlag": true,
                                    "@context": {
                                        "key": "300100192543099"
                                    }
                                }
                            ],
                            "count": 2,
                            "hasMore": false,
                            "limit": 5000,
                            "offset": 0,
                            "links": [
                                {
                                    "rel": "self",
                                    "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCardLayouts/300100192543093/child/timeCardFields",
                                    "name": "timeCardFields",
                                    "kind": "collection"
                                }
                            ]
                        },
                        "@context": {
                            "key": "300100192543093"
                        }
                    }
                ],
                "count": 1,
                "hasMore": false,
                "limit": 5000,
                "offset": 0,
                "links": [
                    {
                        "rel": "self",
                        "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCardLayouts",
                        "name": "timeCardLayouts",
                        "kind": "collection"
                    }
                ]
            },
            "timeCards": {
                "items": [
                    {
                        "TimeCardId": "300100626405787",
                        "TimeCardVersion": 2,
                        "PersonId": "300100075756917",
                        "StartDate": "2024-08-19T00:00:00+00:00",
                        "StopDate": "2024-08-25T23:59:59.999+00:00",
                        "AssignmentId": "300100075758151",
                        "Status": "SAVED",
                        "Comments": null,
                        "ExpediteFlag": null,
                        "OverrideCheckPrinter": null,
                        "OverridePaymentMethod": null,
                        "DisplayExpediteFlag": "false",
                        "timeEntries": {
                            "items": [
                                {
                                    "TimeEntryId": "300100626413623",
                                    "TimeEntryVersion": 1,
                                    "GroupingSequence": 0,
                                    "StartTime": "2024-08-19T10:00:00+00:00",
                                    "StopTime": "2024-08-19T20:00:00+00:00",
                                    "Measure": 10,
                                    "UnitOfMeasure": "HR",
                                    "Comments": null,
                                    "ReadOnlyFlag": false,
                                    "AbsenceEntryFlag": false,
                                    "ActualDate": "2024-08-19",
                                    "ReferenceDate": null,
                                    "EntryType": "RANGE",
                                    "AssignmentId": "300100075758151",
                                    "EntryDate": "2024-08-19T00:00:00+00:00",
                                    "timeCardFieldValues": {
                                        "items": [
                                            {
                                                "TimeCardFieldId": "300100192543098",
                                                "TimeEntryId": "300100626413623",
                                                "Value": "300100075758151",
                                                "DisplayValue": "EWFMTLQA127",
                                                "@context": {
                                                    "key": "300100192543098"
                                                }
                                            },
                                            {
                                                "TimeCardFieldId": "300100192543099",
                                                "TimeEntryId": "300100626413623",
                                                "Value": "300100033146497",
                                                "DisplayValue": "ZOTL_Regular",
                                                "@context": {
                                                    "key": "300100192543099"
                                                }
                                            }
                                        ],
                                        "count": 2,
                                        "hasMore": false,
                                        "limit": 5000,
                                        "offset": 0,
                                        "links": [
                                            {
                                                "rel": "self",
                                                "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/timeEntries/300100626413623/child/timeCardFieldValues",
                                                "name": "timeCardFieldValues",
                                                "kind": "collection"
                                            }
                                        ]
                                    },
                                    "messages": {
                                        "items": [],
                                        "count": 0,
                                        "hasMore": false,
                                        "limit": 5000,
                                        "offset": 0,
                                        "links": [
                                            {
                                                "rel": "self",
                                                "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/timeEntries/300100626413623/child/messages",
                                                "name": "messages",
                                                "kind": "collection"
                                            }
                                        ]
                                    },
                                    "changeRequests": {
                                        "items": [],
                                        "count": 0,
                                        "hasMore": false,
                                        "limit": 5000,
                                        "offset": 0,
                                        "links": [
                                            {
                                                "rel": "self",
                                                "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/timeEntries/300100626413623/child/changeRequests",
                                                "name": "changeRequests",
                                                "kind": "collection"
                                            }
                                        ]
                                    },
                                    "@context": {
                                        "key": "300100626413623"
                                    }
                                },
                                {
                                    "TimeEntryId": "300100626413624",
                                    "TimeEntryVersion": 1,
                                    "GroupingSequence": 0,
                                    "StartTime": null,
                                    "StopTime": null,
                                    "Measure": 10,
                                    "UnitOfMeasure": "HR",
                                    "Comments": null,
                                    "ReadOnlyFlag": false,
                                    "AbsenceEntryFlag": false,
                                    "ActualDate": "2024-08-20",
                                    "ReferenceDate": null,
                                    "EntryType": "MEASURE",
                                    "AssignmentId": "300100075758151",
                                    "EntryDate": "2024-08-20T00:00:00+00:00",
                                    "timeCardFieldValues": {
                                        "items": [
                                            {
                                                "TimeCardFieldId": "300100192543098",
                                                "TimeEntryId": "300100626413624",
                                                "Value": "300100075758151",
                                                "DisplayValue": "EWFMTLQA127",
                                                "@context": {
                                                    "key": "300100192543098"
                                                }
                                            },
                                            {
                                                "TimeCardFieldId": "300100192543099",
                                                "TimeEntryId": "300100626413624",
                                                "Value": "300100033146497",
                                                "DisplayValue": "ZOTL_Regular",
                                                "@context": {
                                                    "key": "300100192543099"
                                                }
                                            }
                                        ],
                                        "count": 2,
                                        "hasMore": false,
                                        "limit": 5000,
                                        "offset": 0,
                                        "links": [
                                            {
                                                "rel": "self",
                                                "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/timeEntries/300100626413624/child/timeCardFieldValues",
                                                "name": "timeCardFieldValues",
                                                "kind": "collection"
                                            }
                                        ]
                                    },
                                    "messages": {
                                        "items": [],
                                        "count": 0,
                                        "hasMore": false,
                                        "limit": 5000,
                                        "offset": 0,
                                        "links": [
                                            {
                                                "rel": "self",
                                                "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/timeEntries/300100626413624/child/messages",
                                                "name": "messages",
                                                "kind": "collection"
                                            }
                                        ]
                                    },
                                    "changeRequests": {
                                        "items": [],
                                        "count": 0,
                                        "hasMore": false,
                                        "limit": 5000,
                                        "offset": 0,
                                        "links": [
                                            {
                                                "rel": "self",
                                                "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/timeEntries/300100626413624/child/changeRequests",
                                                "name": "changeRequests",
                                                "kind": "collection"
                                            }
                                        ]
                                    },
                                    "@context": {
                                        "key": "300100626413624"
                                    }
                                }
                            ],
                            "count": 2,
                            "hasMore": false,
                            "limit": 5000,
                            "offset": 0,
                            "links": [
                                {
                                    "rel": "self",
                                    "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/timeEntries",
                                    "name": "timeEntries",
                                    "kind": "collection"
                                }
                            ]
                        },
                        "publicHolidays": {
                            "items": [],
                            "count": 0,
                            "hasMore": false,
                            "limit": 5000,
                            "offset": 0,
                            "links": [
                                {
                                    "rel": "self",
                                    "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/publicHolidays",
                                    "name": "publicHolidays",
                                    "kind": "collection"
                                }
                            ]
                        },
                        "messages": {
                            "items": [],
                            "count": 0,
                            "hasMore": false,
                            "limit": 5000,
                            "offset": 0,
                            "links": [
                                {
                                    "rel": "self",
                                    "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/messages",
                                    "name": "messages",
                                    "kind": "collection"
                                }
                            ]
                        },
                        "changeRequests": {
                            "items": [],
                            "count": 0,
                            "hasMore": false,
                            "limit": 5000,
                            "offset": 0,
                            "links": [
                                {
                                    "rel": "self",
                                    "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/changeRequests",
                                    "name": "changeRequests",
                                    "kind": "collection"
                                }
                            ]
                        },
                        "scheduledHours": {
                            "items": [
                                {
                                    "ScheduleDate": "2024-08-19",
                                    "Duration": "8",
                                    "ScheduleStartTime": null,
                                    "ScheduleStopTime": null,
                                    "@context": {
                                        "key": "2024-08-19"
                                    }
                                },
                                {
                                    "ScheduleDate": "2024-08-20",
                                    "Duration": "8",
                                    "ScheduleStartTime": null,
                                    "ScheduleStopTime": null,
                                    "@context": {
                                        "key": "2024-08-20"
                                    }
                                },
                                {
                                    "ScheduleDate": "2024-08-21",
                                    "Duration": "8",
                                    "ScheduleStartTime": null,
                                    "ScheduleStopTime": null,
                                    "@context": {
                                        "key": "2024-08-21"
                                    }
                                },
                                {
                                    "ScheduleDate": "2024-08-22",
                                    "Duration": "8",
                                    "ScheduleStartTime": null,
                                    "ScheduleStopTime": null,
                                    "@context": {
                                        "key": "2024-08-22"
                                    }
                                },
                                {
                                    "ScheduleDate": "2024-08-23",
                                    "Duration": "8",
                                    "ScheduleStartTime": null,
                                    "ScheduleStopTime": null,
                                    "@context": {
                                        "key": "2024-08-23"
                                    }
                                },
                                {
                                    "ScheduleDate": "2024-08-24",
                                    "Duration": "0",
                                    "ScheduleStartTime": null,
                                    "ScheduleStopTime": null,
                                    "@context": {
                                        "key": "2024-08-24"
                                    }
                                },
                                {
                                    "ScheduleDate": "2024-08-25",
                                    "Duration": "0",
                                    "ScheduleStartTime": null,
                                    "ScheduleStopTime": null,
                                    "@context": {
                                        "key": "2024-08-25"
                                    }
                                }
                            ],
                            "count": 7,
                            "hasMore": false,
                            "limit": 5000,
                            "offset": 0,
                            "links": [
                                {
                                    "rel": "self",
                                    "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/scheduledHours",
                                    "name": "scheduledHours",
                                    "kind": "collection"
                                }
                            ]
                        },
                        "emptyEntries": {
                            "items": [],
                            "count": 0,
                            "hasMore": false,
                            "limit": 5000,
                            "offset": 0,
                            "links": [
                                {
                                    "rel": "self",
                                    "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards/300100626405787/child/emptyEntries",
                                    "name": "emptyEntries",
                                    "kind": "collection"
                                }
                            ]
                        },
                        "@context": {
                            "key": "300100626405787"
                        }
                    }
                ],
                "count": 1,
                "hasMore": false,
                "limit": 5000,
                "offset": 0,
                "links": [
                    {
                        "rel": "self",
                        "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails/300100626405787/child/timeCards",
                        "name": "timeCards",
                        "kind": "collection"
                    }
                ]
            },
            "@context": {
                "key": "300100626405787"
            }
        }
    ],
    "count": 1,
    "hasMore": false,
    "limit": 5000,
    "offset": 0,
    "links": [
        {
            "rel": "self",
            "href": "https://cptaplqqy.fusionapps.ocs.oc-test.com:443/hcmRestApi/rest/rv:a4c4d598-41bd-4a48-815c-b91f5bd8be05/en/11.13.18.05:9/timeCardEntryDetails",
            "name": "timeCardEntryDetails",
            "kind": "collection"
        }
    ]
}`}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=R({type:t,selectors:[["app-generate-calculated-timetotals-payload"]],standalone:!0,features:[B],decls:37,vars:6,consts:[[1,"col-lg-12","mx-auto","p-3","py-md-5"],[1,"d-flex","align-items-center","pb-3","mb-5","border-bottom"],[1,"fs-4"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],[1,"form-label"],[1,"form-control",3,"ngModelChange","ngModel"],["value","WORKER"],["value","LINE_MANAGER"],["value","TIME_MANAGER"],[1,""],[1,"form-label","text-danger"],[1,"text-end"],[1,"text-primary",3,"click"],[1,"fst-italic","fs-6","my-5","text-muted","border-top","text-end"]],template:function(n,i){n&1&&(u(0,"div",0)(1,"header",1)(2,"span",2),p(3,"Generate Calculated Timetotals Payload"),h()(),u(4,"main")(5,"div",3)(6,"div",4)(7,"div",5)(8,"label",6),p(9,"Time Card Entry Details Payload"),h(),u(10,"textarea",7),C("ngModelChange",function(s){return i.timeCardEntryDetailsPayloadOnChange(s)}),h()(),u(11,"div",5)(12,"label",6),p(13,"User Context"),h(),u(14,"select",7),be("ngModelChange",function(s){return De(i.userContext,s)||(i.userContext=s),s}),u(15,"option",8),p(16,"Worker"),h(),u(17,"option",9),p(18,"Line Manager"),h(),u(19,"option",10),p(20,"Time Manager"),h()()()(),u(21,"div",4)(22,"div",11)(23,"label",12),p(24),h()(),u(25,"div",11)(26,"label",6),p(27,"Prepared Payload to Generate Calcualted Time Totals"),h()(),u(28,"div",13)(29,"a",14),C("click",function(){return i.copyToClipboard()}),p(30,"Copy to clipboard"),h()(),u(31,"code")(32,"pre"),p(33),Ve(34,"json"),h()()()()(),u(35,"footer",15),p(36," VKSOLANK \xB7 \xA9 "),h()()),n&2&&(T(10),ye("ngModel",i.timeCardEntryDetailsPayload),T(4),_e("ngModel",i.userContext),T(10),te(i.errorMessage),T(9),te(Ee(34,4,i.preparedCalculatedTimeTotalsPayload)))},dependencies:[ot,nt,st,J,Z,Xe,ue,Ie]})};var lt=[{path:"",redirectTo:"1",pathMatch:"full"},{path:"1",component:Y}];var ut={providers:[Fe({eventCoalescing:!0}),Ne(lt),xe()]};var Wt={providers:[Oe()]},dt=Se(ut,Wt);var $t=()=>we(L,dt),Ki=$t;export{Ki as a};
