var app=function(){"use strict";function n(){}function s(n){return n()}function t(){return Object.create(null)}function a(n){n.forEach(s)}function e(n){return"function"==typeof n}function p(n,s){return n!=n?s==s:n!==s}function o(s){return s&&e(s.destroy)?s.destroy:n}function l(n,s){n.appendChild(s)}function c(n){n.parentNode.removeChild(n)}function i(n){return document.createElement(n)}function u(n){return document.createTextNode(n)}function r(){return u(" ")}function k(n,s,t){null==t?n.removeAttribute(s):n.getAttribute(s)!==t&&n.setAttribute(s,t)}let d;function g(n){d=n}const y=[],h=[],f=[],m=[],v=Promise.resolve();let b=!1;function T(n){f.push(n)}let x=!1;const S=new Set;function $(){if(!x){x=!0;do{for(let n=0;n<y.length;n+=1){const s=y[n];g(s),w(s.$$)}for(g(null),y.length=0;h.length;)h.pop()();for(let n=0;n<f.length;n+=1){const s=f[n];S.has(s)||(S.add(s),s())}f.length=0}while(y.length);for(;m.length;)m.pop()();b=!1,x=!1,S.clear()}}function w(n){if(null!==n.fragment){n.update(),a(n.before_update);const s=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,s),n.after_update.forEach(T)}}const H=new Set;function L(n,s){-1===n.$$.dirty[0]&&(y.push(n),b||(b=!0,v.then($)),n.$$.dirty.fill(0)),n.$$.dirty[s/31|0]|=1<<s%31}function M(p,o,l,i,u,r,k,y=[-1]){const h=d;g(p);const f=p.$$={fragment:null,ctx:null,props:r,update:n,not_equal:u,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(h?h.$$.context:[])),callbacks:t(),dirty:y,skip_bound:!1,root:o.target||h.$$.root};k&&k(f.root);let m=!1;if(f.ctx=l?l(p,o.props||{},((n,s,...t)=>{const a=t.length?t[0]:s;return f.ctx&&u(f.ctx[n],f.ctx[n]=a)&&(!f.skip_bound&&f.bound[n]&&f.bound[n](a),m&&L(p,n)),s})):[],f.update(),m=!0,a(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const n=function(n){return Array.from(n.childNodes)}(o.target);f.fragment&&f.fragment.l(n),n.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&((v=p.$$.fragment)&&v.i&&(H.delete(v),v.i(b))),function(n,t,p,o){const{fragment:l,on_mount:c,on_destroy:i,after_update:u}=n.$$;l&&l.m(t,p),o||T((()=>{const t=c.map(s).filter(e);i?i.push(...t):a(t),n.$$.on_mount=[]})),u.forEach(T)}(p,o.target,o.anchor,o.customElement),$()}var v,b;g(h)}class C{node=null;enabled=!0;initialStyle=null;newStyle="";constructor(n,s,t){this.node=n,this.enabled=!1!==s,this.newStyle=t,this.initialStyle=this.node.getAttribute("style"),this._updateStyle(this.enabled)}init=()=>({update:this._updateStyle});_updateStyle=n=>{n?this.node.setAttribute("style",this.newStyle):(this.node.removeAttribute("style"),null!=this.initialStyle&&this.node.setAttribute("style",this.initialStyle))}}const _=(n,s)=>new C(n,s,"\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n").init();function A(s){let t,p,d,g,y,h,f,m,v,b,T,x,S,$,w,H,L,M,C,A,E,j,N,I,P,U,G,O,R,q,D,V,B,J,Y,z,F,K,Q,W,X,Z,nn,sn,tn,an,en,pn,on,ln,cn,un,rn,kn,dn,gn,yn,hn,fn,mn,vn,bn,Tn,xn,Sn,$n,wn,Hn,Ln,Mn,Cn,_n,An,En,jn,Nn,In,Pn,Un,Gn,On;return{c(){var n,s,a;t=i("main"),p=i("h1"),p.textContent="svelte-style",d=r(),g=i("p"),g.innerHTML='<a href="https://npmjs.com/package/svelte-style"><img src="https://img.shields.io/npm/v/svelte-style.svg?style=for-the-badge&amp;color=%23ff3e00" alt="NPM"/></a>',y=r(),h=i("blockquote"),h.innerHTML="<p>Style utilities as Svelte actions</p>",f=r(),m=i("p"),m.innerHTML='<a href="https://github.com/metonym/svelte-style">GitHub repo</a>',v=r(),b=i("p"),b.innerHTML="<code>svelte-style</code> provides style utilities as Svelte actions as an alternative to writing CSS.",T=r(),x=i("hr"),S=r(),$=i("p"),$.innerHTML="<strong>Table of Contents</strong>",w=i("ul"),w.innerHTML='<li><a href="#installation">Installation</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#visually-hidden">Visually hidden</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#style-class">Style class</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',H=r(),L=i("h2"),L.textContent="Installation",M=r(),C=i("p"),C.innerHTML="<strong>Yarn</strong>",A=r(),E=i("pre"),j=r(),N=i("p"),N.innerHTML="<strong>NPM</strong>",I=r(),P=i("pre"),U=r(),G=i("p"),G.innerHTML="<strong>pnpm</strong>",O=r(),R=i("pre"),q=r(),D=i("h2"),D.textContent="Usage",V=r(),B=i("h3"),B.textContent="Visually hidden",J=r(),Y=i("p"),Y.innerHTML="Use the <code>visuallyHidden</code> action to hide content without breaking screen readers.",z=r(),F=i("div"),K=i("div"),K.textContent="Text",Q=i("pre"),W=r(),X=i("p"),X.textContent="The action accepts an argument that conditionally toggles the style.",Z=r(),nn=i("div"),sn=i("button"),tn=u("Toggle "),an=i("span"),an.textContent="Text",pn=r(),on=i("pre"),ln=r(),cn=i("h2"),cn.textContent="API",un=r(),rn=i("h3"),rn.textContent="Style class",kn=r(),dn=i("p"),dn.innerHTML="Create your own Svelte action that conditionally applies styles using the <code>Style</code> class.",gn=r(),yn=i("p"),yn.innerHTML="<strong>JavaScript</strong>",hn=r(),fn=i("pre"),mn=r(),vn=i("p"),vn.innerHTML="<strong>TypeScript</strong>",bn=r(),Tn=i("p"),Tn.innerHTML="If your set-up includes TypeScript, use <code>UseStyleType</code> to statically type the action.",xn=r(),Sn=i("pre"),$n=r(),wn=i("h2"),wn.textContent="TypeScript",Hn=r(),Ln=i("p"),Ln.textContent="Svelte version 3.31 or greater is required to use this component with TypeScript.",Mn=r(),Cn=i("p"),Cn.innerHTML='TypeScript definitions are located in the <a href="https://github.com/metonym/svelte-style/tree/master/types/">types folder</a>.',_n=r(),An=i("h2"),An.textContent="Changelog",En=r(),jn=i("p"),jn.innerHTML='<a href="https://github.com/metonym/svelte-style/tree/master/CHANGELOG.md">CHANGELOG.md</a>',Nn=r(),In=i("h2"),In.textContent="License",Pn=r(),Un=i("p"),Un.innerHTML='<a href="https://github.com/metonym/svelte-style/tree/master/LICENSE">MIT</a>',k(p,"id","svelte-style"),k(L,"id","installation"),k(E,"class","language-bash"),k(P,"class","language-bash"),k(R,"class","language-bash"),k(D,"id","usage"),k(B,"id","visually-hidden"),k(F,"class","code-fence"),k(Q,"class","language-svelte"),k(Q,"data-svelte",""),n="color",s="red",an.style.setProperty(n,s,a?"important":""),k(nn,"class","code-fence"),k(on,"class","language-svelte"),k(on,"data-svelte",""),k(cn,"id","api"),k(rn,"id","style-class"),k(fn,"class","language-svelte"),k(Sn,"class","language-typescript"),k(wn,"id","typescript"),k(An,"id","changelog"),k(In,"id","license"),k(t,"class","markdown-body")},m(n,a){var e,c,i,u;!function(n,s,t){n.insertBefore(s,t||null)}(n,t,a),l(t,p),l(t,d),l(t,g),l(t,y),l(t,h),l(t,f),l(t,m),l(t,v),l(t,b),l(t,T),l(t,x),l(t,S),l(t,$),l(t,w),l(t,H),l(t,L),l(t,M),l(t,C),l(t,A),l(t,E),E.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-style\n',l(t,j),l(t,N),l(t,I),l(t,P),P.innerHTML='<span class="token function">npm</span> i -D svelte-style\n',l(t,U),l(t,G),l(t,O),l(t,R),R.innerHTML='<span class="token function">pnpm</span> i -D svelte-style\n',l(t,q),l(t,D),l(t,V),l(t,B),l(t,J),l(t,Y),l(t,z),l(t,F),l(F,K),l(t,Q),Q.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> visuallyHidden <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>visuallyHidden</span><span class="token punctuation">></span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n',l(t,W),l(t,X),l(t,Z),l(t,nn),l(nn,sn),l(sn,tn),l(sn,an),l(sn,pn),l(t,on),on.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> visuallyHidden <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> toggled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>toggled <span class="token operator">=</span> <span class="token operator">!</span>toggled<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  Toggle <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color: red<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">use:</span>visuallyHidden=</span><span class="token language-javascript"><span class="token punctuation">{</span>toggled<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n',l(t,ln),l(t,cn),l(t,un),l(t,rn),l(t,kn),l(t,dn),l(t,gn),l(t,yn),l(t,hn),l(t,fn),fn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Style <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token string">"color: red"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">colorRed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> enabled</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> enabled<span class="token punctuation">,</span> style<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">use:</span>colorRed</span><span class="token punctuation">></span></span>Red text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n',l(t,mn),l(t,vn),l(t,bn),l(t,Tn),l(t,xn),l(t,Sn),Sn.innerHTML='<span class="token keyword">import</span> <span class="token punctuation">{</span> Style <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> UseStyleType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-style/src/Style"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token string">"color: red"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> colorRed<span class="token operator">:</span> <span class="token function-variable function">UseStyleType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> enabled<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> enabled<span class="token punctuation">,</span> style<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n',l(t,$n),l(t,wn),l(t,Hn),l(t,Ln),l(t,Mn),l(t,Cn),l(t,_n),l(t,An),l(t,En),l(t,jn),l(t,Nn),l(t,In),l(t,Pn),l(t,Un),Gn||(On=[o(_.call(null,K)),o(en=_.call(null,an,s[0])),(e=sn,c="click",i=s[1],e.addEventListener(c,i,u),()=>e.removeEventListener(c,i,u))],Gn=!0)},p(n,[s]){en&&e(en.update)&&1&s&&en.update.call(null,n[0])},i:n,o:n,d(n){n&&c(t),Gn=!1,a(On)}}}function E(n,s,t){let a=!1;return[a,()=>t(0,a=!a)]}return new class extends class{$destroy(){!function(n,s){const t=n.$$;null!==t.fragment&&(a(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=n}$on(n,s){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(s),()=>{const n=t.indexOf(s);-1!==n&&t.splice(n,1)}}$set(n){var s;this.$$set&&(s=n,0!==Object.keys(s).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}{constructor(n){super(),M(this,n,E,A,p,{})}}({target:document.body})}();
