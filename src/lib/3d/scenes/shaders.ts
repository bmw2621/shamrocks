const vertexShader = `
varying vec3 v_normal;

void main() {
     v_normal = normalMatrix * normal;
     gl_Position = projectionMatrix * modelViewMatrix *    vec4(position, 1.0);
}`;

const fragmentShader = `
varying vec3 v_normal;
uniform vec3 u_lightSource;
uniform float u_threshold;

void main() {
  float intensity;
  vec4 color;
  vec3 n = normalize(v_normal);

  intensity = dot(u_lightSource, n);

  if (intensity > u_threshold)
    color = vec4(1.0,0.81176,0.02353,1.0);
  else
		color = vec4(0.89804,0.10588,0.14118,1.0);

	gl_FragColor = color;
}
	`;

export const skullData = {
  fragmentShader,
  vertexShader,
};
