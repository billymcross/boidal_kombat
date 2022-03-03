#version 300 es
precision mediump float;

// last reported agent (vertex) position/velocity
in vec4 agent_in;

// texture containing position/velocity of all agents
uniform sampler2D flock;
// total size of flock
uniform float agentCount;

uniform vec2 resolution;

uniform vec2 mouse;


// newly calculated position / velocity of agent
out vec4 agent_out;

vec2 cohesion = vec2(0., 0.);
vec2 separation = vec2(0., 0.);
vec2 align = vec2(0., 0.);

vec2 acceleration = vec2(0., 0.);
float maxSpeed = .01;

void main() {
  // the position of this vertex needs to be reported
  // in the range {-1,1}. We can use the gl_VertexID
  // input variable to determine the current vertex's
  // position in the array and convert it to the desired range.
  float idx = -1. + (float( gl_VertexID ) / agentCount) * 2.;

  // we'll use agent_out to send the agent position and velocity
  // to the fragment shader, which will render it to our 1D texture.
  // agent_out is also the target of our transform feedback.
  agent_out = agent_in;

  // loop through all agents...
  for( int i = 0; i < int( agentCount ); i++ ) {
    // make sure the index isn't the index of our current agent
    if( i == gl_VertexID ) continue;

    // get our agent for comparison. texelFetch accepts an integer
    // vector measured in pixels to determine the location of the
    // texture lookup.
    vec4 agent  = texelFetch( flock, ivec2(i,0), 0 );

    float dist = distance(agent_out.xy, agent.xy);
    //if (dist > .1) continue;

    if (dist < 0.2) {
      cohesion += agent.xy;
    }

    if (dist < 0.5) {
      vec2 diff = (agent_out.xy - agent.xy);

      separation += diff;
    }

    if (dist < 0.05) {
      align += agent.zw;
    }

  }

  cohesion = cohesion / (agentCount - 1.);
  cohesion -= agent_out.zw;
  cohesion *= -1.;

  separation = separation / (agentCount - 1.);
  separation -= agent_out.zw;

  align -= agent_out.zw;

  acceleration += cohesion + separation + align;

  agent_out.z += acceleration.x;
  agent_out.w += acceleration.y;

  if (length(agent_out.zw) > maxSpeed) {
    agent_out.zw = normalize(agent_out.zw);
    agent_out.zw *= maxSpeed;
  }

  agent_out.x = agent_out.x + agent_out.z;
  agent_out.y = agent_out.y + agent_out.w;


  if (agent_out.x > 1.) agent_out.x = -1.;
  if (agent_out.x < -1.) agent_out.x = 1.;
  if (agent_out.y > 1.) agent_out.y = -1.;
  if (agent_out.y < -1.) agent_out.y = 1.;


  // each agent is one pixel. remember, this shader is not used for
  // rendering to the screen, only to our 1D texture array.
  gl_PointSize = 1.;

  // report our index as the x member of gl_Position. y is always 0.
  gl_Position = vec4( idx, .0, 0., 1. );
}