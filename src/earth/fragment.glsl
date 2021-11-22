uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
//    texture2D(globeTexture, vertexUV);
//    gl_FragColor = vec4(0.4, 1, 1, 1);

    float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 0.1));
    vec3 atmosphere = vec3(0.3, 0.6, 1.15) * pow(intensity, 1.5);

    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
}