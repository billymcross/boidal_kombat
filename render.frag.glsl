#version 300 es
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;

out vec4 color;
void main() {
  vec2 st = gl_FragCoord.xy/resolution;
  color = vec4( 1., 0. , 1., 1. );
}