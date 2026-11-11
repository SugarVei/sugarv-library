import{a as e,n as t,t as n}from"./jsx-runtime-Wy9s6hX0.js";var r=e(t(),1),i=n(),a=()=>typeof window<`u`&&!!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,o=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20800%22%20width%3D%22800%22%20height%3D%22800%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%0A%3Cdefs%3E%3ClinearGradient%20id%3D%22s%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22rgb%28236%2C236%2C238%29%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22rgb%28178%2C178%2C180%29%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23s%29%22%2F%3E%0A%3Ccircle%20cx%3D%22268%22%20cy%3D%22216%22%20r%3D%2272%22%20fill%3D%22rgb%28246%2C246%2C248%29%22%2F%3E%0A%3Cpath%20d%3D%22M0%2C800%20L0%2C503.7%20L100%2C461.7%20L200%2C424.0%20L300%2C461.1%20L400%2C503.6%20L500%2C472.1%20L600%2C425.4%20L700%2C450.8%20L800%2C500.8%20L800%2C800%20Z%22%20fill%3D%22rgb%28156%2C156%2C158%29%22%2F%3E%0A%3Cpath%20d%3D%22M0%2C800%20L0%2C606.1%20L100%2C599.8%20L200%2C568.5%20L300%2C545.1%20L400%2C554.1%20L500%2C586.1%20L600%2C607.5%20L700%2C595.8%20L800%2C563.4%20L800%2C800%20Z%22%20fill%3D%22rgb%28116%2C116%2C118%29%22%2F%3E%0A%3Cpath%20d%3D%22M0%2C800%20L0%2C694.1%20L100%2C711.8%20L200%2C688.4%20L300%2C664.3%20L400%2C681.2%20L500%2C709.9%20L600%2C700.7%20L700%2C669.6%20L800%2C670.3%20L800%2C800%20Z%22%20fill%3D%22rgb%2879%2C79%2C81%29%22%2F%3E%0A%3C%2Fsvg%3E`,s=440,c=90,l=620,u=l,d=20,f=`
attribute vec2 pos;
varying vec2 vUv;
void main() {
  vUv = vec2(pos.x * 0.5 + 0.5, 0.5 - pos.y * 0.5);
  gl_Position = vec4(pos, 0.0, 1.0);
}`,p=`
precision highp float;
uniform sampler2D tex;
uniform vec2 res;
uniform vec2 c;
uniform vec2 b;
uniform float r;
uniform float bend;
uniform float fringe;
uniform float dark;
varying vec2 vUv;

float sdf(vec2 p) {
  vec2 q = abs(p - c) - b + vec2(r);
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

/* premultiplied: the margin round the picture is transparent,
   so the real card shows through it and the glass over it bends
   nothing — only its light and its shadow are left */
vec4 read(vec2 p) {
  return texture2D(tex, clamp(p / res, 0.0, 1.0));
}

void main() {
  vec2 p = vUv * res;
  float d = sdf(p);
  vec4 col = read(p);

  /* what it casts: soft, a little below. It darkens the picture
     where there is one and is a shadow of its own where there
     is not. */
  float ds = sdf(p - vec2(0.0, 9.0));
  float sh = (1.0 - smoothstep(-8.0, 26.0, ds)) * mix(0.14, 0.3, dark);
  if (d > 0.0) col = vec4(col.rgb * (1.0 - sh), col.a) + vec4(0.0, 0.0, 0.0, sh * (1.0 - col.a));

  if (d < 1.0) {
    float e = 1.5;
    vec2 n = normalize(vec2(
      sdf(p + vec2(e, 0.0)) - sdf(p - vec2(e, 0.0)),
      sdf(p + vec2(0.0, e)) - sdf(p - vec2(0.0, e))
    ) + 1e-5);
    /* the bending band scales with the ball, so a big one is
       still a lens and a small one is not all rim */
    float bevel = min(b.y, max(22.0, b.y * 0.36));
    /* 0 at the rim, 1 once past the bevel */
    float t = clamp(-d / bevel, 0.0, 1.0);
    float edge = pow(1.0 - t, 2.4);

    vec2 mag = c + (p - c) / 1.1;
    vec2 off = n * edge * bevel * 1.1 * bend;
    vec2 q = mag + off;
    vec4 mid = read(q);
    vec4 g = vec4(read(q + off * fringe).r, mid.g, read(q - off * fringe).b, mid.a);

    /* the light: a thin lit band just inside the edge, bright
       where it faces up-left, a weaker catch on the far side
       where light has come through and out again */
    vec2 L = normalize(vec2(-0.55, -0.85));
    float rim = smoothstep(0.0, 1.6, -d) * (1.0 - smoothstep(1.6, 4.5, -d));
    float lit = max(dot(n, L), 0.0);
    float far = max(dot(n, -L), 0.0);
    g.rgb *= mix(1.03, 1.08, dark);
    /* light is added as light: colour and coverage together, so
       it shows on the card as well as on the picture */
    float light = rim * (0.18 + 0.75 * lit) + rim * far * 0.22 + edge * mix(0.05, 0.08, dark);
    g += vec4(vec3(light), light);
    g = clamp(g, 0.0, 1.0);

    float a = 1.0 - smoothstep(-0.6, 0.6, d);
    col = mix(col, g, a);
  }
  gl_FragColor = col;
}`,m=(e,t,n)=>Math.min(n,Math.max(t,e));function h(){let e=()=>document.documentElement.dataset.theme===`dark`,[t,n]=(0,r.useState)(e);return(0,r.useEffect)(()=>{let t=new MutationObserver(()=>n(e()));return t.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),()=>t.disconnect()},[]),t}function g(e){let t=(t,n)=>{let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r},n=e.createProgram();return e.attachShader(n,t(e.VERTEX_SHADER,f)),e.attachShader(n,t(e.FRAGMENT_SHADER,p)),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)?n:null}function _({size:e=180,bend:t=60,fringe:n=30,corner:f=d}={}){let p=h(),_=a(),v=(0,r.useRef)(null),y=(0,r.useRef)(null),b=(0,r.useRef)(null),x=(0,r.useRef)(0),S=(0,r.useRef)({x:l*.6,y:u*.42,vx:0,vy:0,tx:l*.6,ty:u*.42}),C=(0,r.useRef)(null),w=(0,r.useRef)({size:e,bend:t,fringe:n,dark:p});w.current={size:e,bend:t,fringe:n,dark:p};let T=()=>{let e=y.current,t=v.current;if(!e||!t)return;let{g:n,prog:r}=e,i=t.width/l,a=S.current,{size:o,bend:s,fringe:c,dark:u}=w.current,d=Math.hypot(a.vx,a.vy),f=_?0:Math.min(.14,d*.012),p=d>.01?Math.abs(a.vx)/d:1,h=m(o,100,280)/2,g=h*(1+f*p-f*.5*(1-p)),b=h*(1+f*(1-p)-f*.5*p);n.viewport(0,0,t.width,t.height),n.useProgram(r);let x=e=>n.getUniformLocation(r,e);n.uniform2f(x(`res`),t.width,t.height),n.uniform2f(x(`c`),a.x*i,a.y*i),n.uniform2f(x(`b`),g*i,b*i),n.uniform1f(x(`r`),Math.min(g,b)*i),n.uniform1f(x(`bend`),m(s,0,100)/100),n.uniform1f(x(`fringe`),m(c,0,40)/100),n.uniform1f(x(`dark`),+!!u),n.drawArrays(n.TRIANGLE_STRIP,0,4)},E=()=>{if(x.current)return;let e=0,t=n=>{let r=e?m((n-e)/16.67,0,2.5):1;e=n;let i=S.current;if(_)i.x=i.tx,i.y=i.ty,i.vx=0,i.vy=0;else{let e=.22,t=.66**r;i.vx=(i.vx+(i.tx-i.x)*e*r)*t,i.vy=(i.vy+(i.ty-i.y)*e*r)*t,i.x+=i.vx*r,i.y+=i.vy*r}T();let a=Math.abs(i.tx-i.x)>.05||Math.abs(i.ty-i.y)>.05||Math.abs(i.vx)>.05||Math.abs(i.vy)>.05||C.current;x.current=a?requestAnimationFrame(t):0};x.current=requestAnimationFrame(t)},D=async()=>{let e=v.current,t=y.current;if(!e||!t)return;let n=b.current??=document.createElement(`canvas`);n.width=e.width,n.height=e.height;let r=n.getContext(`2d`),i=e.width/l;r.clearRect(0,0,n.width,n.height);let a=new Image;a.src=o,await a.decode().catch(()=>{});let u=c*i,d=s*i,p=Math.max(d/a.width,d/a.height),h=a.width*p,g=a.height*p;r.save(),r.beginPath(),r.roundRect(u,u,d,d,m(f,0,60)*i),r.clip(),r.drawImage(a,u+(d-h)/2,u+(d-g)/2,h,g),r.restore();let{g:_,tex:x}=t;_.bindTexture(_.TEXTURE_2D,x),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,_.RGBA,_.UNSIGNED_BYTE,n),T()};(0,r.useEffect)(()=>{let e=v.current;if(!e)return;let t=Math.min(2,window.devicePixelRatio||1);e.width=Math.round(l*t),e.height=Math.round(u*t);let n=e.getContext(`webgl`,{antialias:!0,premultipliedAlpha:!0,alpha:!0});if(!n)return;let r=g(n);if(!r)return;let i=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW);let a=n.getAttribLocation(r,`pos`);n.enableVertexAttribArray(a),n.vertexAttribPointer(a,2,n.FLOAT,!1,0,0);let o=n.createTexture();return n.bindTexture(n.TEXTURE_2D,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),y.current={g:n,prog:r,tex:o},()=>{cancelAnimationFrame(x.current),x.current=0,y.current=null}},[]),(0,r.useEffect)(()=>{D()},[p,f]),(0,r.useEffect)(()=>{T()},[e,t,n]);let O=e=>{let t=e.currentTarget.getBoundingClientRect(),n=t.width/l;return{x:(e.clientX-t.left)/n,y:(e.clientY-t.top)/n}},k=t=>{let n=S.current;return Math.hypot(t.x-n.x,t.y-n.y)<=m(e,100,280)/2+4};return(0,i.jsx)(`div`,{className:`lqg`,children:(0,i.jsx)(`canvas`,{ref:v,className:`lqg-canvas`,style:{width:l,height:u},"aria-label":`A ball of glass over a photograph. Drag it.`,role:`img`,onPointerDown:e=>{let t=O(e);if(!k(t))return;let n=S.current;C.current={dx:t.x-n.x,dy:t.y-n.y};try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}E()},onPointerMove:e=>{let t=O(e),n=C.current;if(e.currentTarget.dataset.over=k(t)||n?`true`:`false`,!n)return;let r=S.current;r.tx=m(t.x-n.dx,0,l),r.ty=m(t.y-n.dy,0,u),E()},onPointerUp:()=>{C.current&&(C.current=null,E())},onPointerCancel:()=>{C.current=null,E()}})})}export{_ as LiquidGlass};