#version 300 es
#ifdef GL_ES
precision mediump float;
#endif

in vec4 agent_out;

uniform float time;

out vec4 color;
void main() {

  color = vec4( abs(agent_out.z / 0.01), 0. , abs(agent_out.z / 0.01), 1. );
}