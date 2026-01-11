export const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
void main(){
    vUv = uv;
    vPosition = position;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
export const fragmentShader = `
// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vPosition;
uniform float uTime;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0,
                    .5+b*.5,
                    abs((sin(pos.x*3.1415)+b*2.0))*.5);
}

void main() {
    // Use position instead of UVs (normalized to 0-1 range)
    vec2 st = vPosition.xy * 0.5 + 0.5; 
    st.x += sin(st.y * 10.0 + uTime * 2.0) * 0.05;

    vec2 pos = st.yx * vec2(8., 4.);

    float n = noise(pos + vec2(uTime * 0.3, -uTime));
    float pattern = sin(n * 20.0 + uTime) * 0.5 + 0.5;

    vec3 color1 = vec3(0.10, 0.10, 0.10);
    vec3 color2 = vec3(0.20, 0.20, 0.20);
    vec3 finalColor = mix(color1, color2, pattern);
    gl_FragColor = vec4(finalColor, 1.0);
}
`