#version 300 es
precision mediump float;

// last reported agent (vertex) position/velocity
in vec4 agent_in;

// texture containing position/velocity of all agents
uniform sampler2D flock;
// total size of flock
uniform float agentCount;

// newly calculated position / velocity of agent
out vec4 agent_out;

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

    // move our agent a small amount towards the ith agent
    // in the flock.
    if (distance(agent_out.xy, agent.xy) < .3) agent_out.xy += ( agent_out.xy - agent.xy) * -.1 / agentCount;
  }

  // each agent is one pixel. remember, this shader is not used for
  // rendering to the screen, only to our 1D texture array.
  gl_PointSize = 1.;

  // report our index as the x member of gl_Position. y is always 0.
  gl_Position = vec4( idx, .0, 0., 1. );
}