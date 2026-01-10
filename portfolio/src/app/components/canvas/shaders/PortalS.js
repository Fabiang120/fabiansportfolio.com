export const vertexShader = `
    void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
`
export const fragmentShader = `
    void main(){
        gl_FragColor = vec4(1.0,0.0,1.0,1.0);
    }
`