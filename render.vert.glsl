#version 300 es
in vec4 agent;

void main() {
  gl_PointSize = 3.;
  gl_Position = vec4( agent.xy, 0., 1. );
}