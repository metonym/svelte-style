var app=function(){"use strict";function n(){}function s(n){return n()}function t(){return Object.create(null)}function a(n){n.forEach(s)}function e(n){return"function"==typeof n}function p(n,s){return n!=n?s==s:n!==s}function o(s){return s&&e(s.destroy)?s.destroy:n}function l(n,s){n.appendChild(s)}function c(n){n.parentNode.removeChild(n)}function i(n){return document.createElement(n)}function r(n){return document.createTextNode(n)}function u(){return r(" ")}function k(n,s,t){null==t?n.removeAttribute(s):n.getAttribute(s)!==t&&n.setAttribute(s,t)}let d;function g(n){d=n}const y=[],h=[],f=[],m=[],v=Promise.resolve();let b=!1;function T(n){f.push(n)}let x=!1;const S=new Set;function $(){if(!x){x=!0;do{for(let n=0;n<y.length;n+=1){const s=y[n];g(s),w(s.$$)}for(g(null),y.length=0;h.length;)h.pop()();for(let n=0;n<f.length;n+=1){const s=f[n];S.has(s)||(S.add(s),s())}f.length=0}while(y.length);for(;m.length;)m.pop()();b=!1,x=!1,S.clear()}}function w(n){if(null!==n.fragment){n.update(),a(n.before_update);const s=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,s),n.after_update.forEach(T)}}const H=new Set;function L(n,s){-1===n.$$.dirty[0]&&(y.push(n),b||(b=!0,v.then($)),n.$$.dirty.fill(0)),n.$$.dirty[s/31|0]|=1<<s%31}function M(p,o,l,i,r,u,k,y=[-1]){const h=d;g(p);const f=p.$$={fragment:null,ctx:null,props:u,update:n,not_equal:r,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(h?h.$$.context:[])),callbacks:t(),dirty:y,skip_bound:!1,root:o.target||h.$$.root};k&&k(f.root);let m=!1;if(f.ctx=l?l(p,o.props||{},((n,s,...t)=>{const a=t.length?t[0]:s;return f.ctx&&r(f.ctx[n],f.ctx[n]=a)&&(!f.skip_bound&&f.bound[n]&&f.bound[n](a),m&&L(p,n)),s})):[],f.update(),m=!0,a(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const n=function(n){return Array.from(n.childNodes)}(o.target);f.fragment&&f.fragment.l(n),n.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&((v=p.$$.fragment)&&v.i&&(H.delete(v),v.i(b))),function(n,t,p,o){const{fragment:l,on_mount:c,on_destroy:i,after_update:r}=n.$$;l&&l.m(t,p),o||T((()=>{const t=c.map(s).filter(e);i?i.push(...t):a(t),n.$$.on_mount=[]})),r.forEach(T)}(p,o.target,o.anchor,o.customElement),$()}var v,b;g(h)}class C{node=null;enabled=!0;initialStyle=null;newStyle="";constructor(n,s,t){this.node=n,this.enabled=!1!==s,this.newStyle=t,this.initialStyle=this.node.getAttribute("style"),this._updateStyle(this.enabled)}init=()=>({update:this._updateStyle});_updateStyle=n=>{n?this.node.setAttribute("style",this.newStyle):(this.node.removeAttribute("style"),null!=this.initialStyle&&this.node.setAttribute("style",this.initialStyle))}}const _=(n,s)=>new C(n,s,"\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n").init();function E(s){let t,p,d,g,y,h,f,m,v,b,T,x,S,$,w,H,L,M,C,E,A,j,N,I,P,U,G,O,R,q,D,V,B,J,Y,z,F,K,Q,W,X,Z,nn,sn,tn,an,en,pn,on,ln,cn,rn,un,kn,dn,gn,yn,hn,fn,mn,vn,bn,Tn,xn,Sn,$n,wn,Hn,Ln,Mn,Cn,_n,En,An,jn,Nn,In,Pn,Un,Gn,On,Rn,qn;return{c(){var n,s,a;t=i("main"),p=i("h1"),p.textContent="svelte-style",d=u(),g=i("p"),g.innerHTML='<a href="https://npmjs.com/package/svelte-style"><img src="https://img.shields.io/npm/v/svelte-style.svg?style=for-the-badge&amp;color=%23ff3e00" alt="NPM"/></a>',y=u(),h=i("blockquote"),h.innerHTML="<p>Style utilities as Svelte actions</p>",f=u(),m=i("p"),m.innerHTML='<a href="https://github.com/metonym/svelte-style">GitHub repo</a>',v=u(),b=i("p"),b.innerHTML="<code>svelte-style</code> provides style utilities as Svelte actions as an alternative to writing CSS.",T=u(),x=i("p"),x.innerHTML='Try it in the <a href="https://svelte.dev/repl/f759197ad49348b1bb4e181e735e08bc">Svelte REPL</a>.',S=u(),$=i("hr"),w=u(),H=i("p"),H.innerHTML="<strong>Table of Contents</strong>",L=i("ul"),L.innerHTML='<li><a href="#installation">Installation</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#visually-hidden">Visually hidden</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#style-class">Style class</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',M=u(),C=i("h2"),C.textContent="Installation",E=u(),A=i("p"),A.innerHTML="<strong>Yarn</strong>",j=u(),N=i("pre"),I=u(),P=i("p"),P.innerHTML="<strong>NPM</strong>",U=u(),G=i("pre"),O=u(),R=i("p"),R.innerHTML="<strong>pnpm</strong>",q=u(),D=i("pre"),V=u(),B=i("h2"),B.textContent="Usage",J=u(),Y=i("h3"),Y.textContent="Visually hidden",z=u(),F=i("p"),F.innerHTML="Use the <code>visuallyHidden</code> action to hide content without breaking screen readers.",K=u(),Q=i("div"),W=i("div"),W.textContent="Text",X=i("pre"),Z=u(),nn=i("p"),nn.textContent="The action accepts an argument that conditionally toggles the style.",sn=u(),tn=i("div"),an=i("button"),en=r("Toggle "),pn=i("span"),pn.textContent="Text",ln=u(),cn=i("pre"),rn=u(),un=i("h2"),un.textContent="API",kn=u(),dn=i("h3"),dn.textContent="Style class",gn=u(),yn=i("p"),yn.innerHTML="Create your own Svelte action that conditionally applies styles using the <code>Style</code> class.",hn=u(),fn=i("p"),fn.innerHTML="<strong>JavaScript</strong>",mn=u(),vn=i("pre"),bn=u(),Tn=i("p"),Tn.innerHTML="<strong>TypeScript</strong>",xn=u(),Sn=i("p"),Sn.innerHTML="If your set-up includes TypeScript, use <code>UseStyleType</code> to statically type the action.",$n=u(),wn=i("pre"),Hn=u(),Ln=i("h2"),Ln.textContent="TypeScript",Mn=u(),Cn=i("p"),Cn.textContent="Svelte version 3.31 or greater is required to use this component with TypeScript.",_n=u(),En=i("p"),En.innerHTML='TypeScript definitions are located in the <a href="https://github.com/metonym/svelte-style/tree/master/types/">types folder</a>.',An=u(),jn=i("h2"),jn.textContent="Changelog",Nn=u(),In=i("p"),In.innerHTML='<a href="https://github.com/metonym/svelte-style/tree/master/CHANGELOG.md">CHANGELOG.md</a>',Pn=u(),Un=i("h2"),Un.textContent="License",Gn=u(),On=i("p"),On.innerHTML='<a href="https://github.com/metonym/svelte-style/tree/master/LICENSE">MIT</a>',k(p,"id","svelte-style"),k(C,"id","installation"),k(N,"class","language-bash"),k(G,"class","language-bash"),k(D,"class","language-bash"),k(B,"id","usage"),k(Y,"id","visually-hidden"),k(Q,"class","code-fence"),k(X,"class","language-svelte"),k(X,"data-svelte",""),n="color",s="red",pn.style.setProperty(n,s,a?"important":""),k(tn,"class","code-fence"),k(cn,"class","language-svelte"),k(cn,"data-svelte",""),k(un,"id","api"),k(dn,"id","style-class"),k(vn,"class","language-svelte"),k(wn,"class","language-typescript"),k(Ln,"id","typescript"),k(jn,"id","changelog"),k(Un,"id","license"),k(t,"class","markdown-body")},m(n,a){var e,c,i,r;!function(n,s,t){n.insertBefore(s,t||null)}(n,t,a),l(t,p),l(t,d),l(t,g),l(t,y),l(t,h),l(t,f),l(t,m),l(t,v),l(t,b),l(t,T),l(t,x),l(t,S),l(t,$),l(t,w),l(t,H),l(t,L),l(t,M),l(t,C),l(t,E),l(t,A),l(t,j),l(t,N),N.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-style\n',l(t,I),l(t,P),l(t,U),l(t,G),G.innerHTML='<span class="token function">npm</span> i -D svelte-style\n',l(t,O),l(t,R),l(t,q),l(t,D),D.innerHTML='<span class="token function">pnpm</span> i -D svelte-style\n',l(t,V),l(t,B),l(t,J),l(t,Y),l(t,z),l(t,F),l(t,K),l(t,Q),l(Q,W),l(t,X),X.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> visuallyHidden <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>visuallyHidden</span><span class="token punctuation">></span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n',l(t,Z),l(t,nn),l(t,sn),l(t,tn),l(tn,an),l(an,en),l(an,pn),l(an,ln),l(t,cn),cn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> visuallyHidden <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> toggled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>toggled <span class="token operator">=</span> <span class="token operator">!</span>toggled<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  Toggle <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color: red<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">use:</span>visuallyHidden=</span><span class="token language-javascript"><span class="token punctuation">{</span>toggled<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n',l(t,rn),l(t,un),l(t,kn),l(t,dn),l(t,gn),l(t,yn),l(t,hn),l(t,fn),l(t,mn),l(t,vn),vn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Style <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token string">"color: red"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">colorRed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> enabled</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> enabled<span class="token punctuation">,</span> style<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>colorRed</span><span class="token punctuation">></span></span>Red text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n',l(t,bn),l(t,Tn),l(t,xn),l(t,Sn),l(t,$n),l(t,wn),wn.innerHTML='<span class="token keyword">import</span> <span class="token punctuation">{</span> Style <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> UseStyleType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style/src/Style"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token string">"color: red"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> colorRed<span class="token operator">:</span> <span class="token function-variable function">UseStyleType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> enabled<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> enabled<span class="token punctuation">,</span> style<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n',l(t,Hn),l(t,Ln),l(t,Mn),l(t,Cn),l(t,_n),l(t,En),l(t,An),l(t,jn),l(t,Nn),l(t,In),l(t,Pn),l(t,Un),l(t,Gn),l(t,On),Rn||(qn=[o(_.call(null,W)),o(on=_.call(null,pn,s[0])),(e=an,c="click",i=s[1],e.addEventListener(c,i,r),()=>e.removeEventListener(c,i,r))],Rn=!0)},p(n,[s]){on&&e(on.update)&&1&s&&on.update.call(null,n[0])},i:n,o:n,d(n){n&&c(t),Rn=!1,a(qn)}}}function A(n,s,t){let a=!1;return[a,()=>t(0,a=!a)]}return new class extends class{$destroy(){!function(n,s){const t=n.$$;null!==t.fragment&&(a(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=n}$on(n,s){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(s),()=>{const n=t.indexOf(s);-1!==n&&t.splice(n,1)}}$set(n){var s;this.$$set&&(s=n,0!==Object.keys(s).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}{constructor(n){super(),M(this,n,A,E,p,{})}}({target:document.body})}();