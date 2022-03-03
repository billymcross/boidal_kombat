#version 300 es
in vec4 agent;

out vec4 agent_out;

uniform float audio;

void main() {
  gl_PointSize = 2.;
  gl_Position = vec4( agent.xy, 0., 1. );
  agent_out = agent;
}