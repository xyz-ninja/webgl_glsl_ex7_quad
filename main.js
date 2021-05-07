// вершинный шейдер
var VSHADER_SOURCE = 
'attribute vec4 a_Position;\n' + 
'void main() {\n' + 
'	gl_Position = a_Position;\n' + 
'	gl_PointSize = 8.0;\n' + 
'}\n';

// фрагментный шейдер
var FSHADER_SOURCE = 
'precision mediump float;\n' + 
'void main() {\n' + 
'	gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n' + 
'}\n';

function main() {
	var canvas = document.getElementById('example');
	var gl = getWebGLContext(canvas)

	initShaders(gl, VSHADER_SOURCE , FSHADER_SOURCE);

	var n = initVertexBuffers(gl);

	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.TRIANGLE_STRIP , 0 , n);
}

function initVertexBuffers(gl) {
	var verticles = new Float32Array([
		-0.5 , 0.5 , 0.5 , 0.5 , -0.5 , -0.5 , 0.5 , -0.5
	]);

	var n = 4;

	// создать буфер и указать его тип
	var vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER , vertexBuffer);
	// записать данные в буфер
	gl.bufferData(gl.ARRAY_BUFFER , verticles , gl.STATIC_DRAW);

	var a_Position = gl.getAttribLocation(gl.program , 'a_Position');
	// сохранить ссылку в буферный объект в переменной a_Position
	gl.vertexAttribPointer(a_Position , 2 , gl.FLOAT , false , 0 , 0);

	gl.enableVertexAttribArray(a_Position);

	return n;
}