<template>
  <div class="ide-container">
    <div class="navbar">My VSCode Web IDE</div>
    <div class="workspace">
      <div class="sidebar">
        <div class="section explorer">
          <div class="section-header">EXPLORER</div>
          <ul class="files">
            <li class="file">deployment.yaml</li>
            <li class="file">service.yaml</li>
            <li class="file">ingress.yaml</li>
          </ul>
        </div>
        <!-- Add more sections as needed (e.g., Extensions) -->
      </div>
      <div class="editor">
        <div class="editor-header">deployment.yaml</div>
        <!-- Placeholder for Monaco Editor or static content -->
        <div class="code-editor">
          <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80</code></pre>
        </div>
      </div>
    </div>
    <div class="terminal">
      <div class="terminal-header">Terminal</div>
      <div class="terminal-body">
        <span class="terminal-line">user@vscode:~$ echo "Ready to code!"</span>
        <span class="terminal-cursor"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ide-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  background-color: #0066B8; /* VSCode blue */
  color: white;
  padding: 10px 20px;
  font-weight: bold;
}

.workspace {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 240px;
  background: #252526; /* Dark gray */
  color: #ccc;
  overflow-y: auto;
}

.section {
  margin: 10px;
}

.section-header {
  font-weight: bold;
  margin-bottom: 5px;
}

.files {
  list-style: none;
  padding: 0;
}

.file {
  cursor: pointer;
  padding: 5px 10px;
}

.file:hover {
  background-color: #3C3C3C;
}

.editor {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.editor-header {
  background-color: #1E1E1E; /* Header */
  color: #9CDCFE; /* Light blue */
  padding: 10px;
  border-bottom: 1px solid #3C3C3C;
}

.code-editor {
  flex-grow: 1;
  background-color: #1E1E1E;
  color: #D4D4D4;
  padding: 20px;
  overflow-y: auto;
}

.terminal {
  background-color: #333;
  color: #8EC07C; /* Green */
}

.terminal-header {
  background-color: #1E1E1E;
  color: white;
  padding: 5px 10px;
  border-top: 1px solid #3C3C3C;
}

.terminal-body {
  padding: 10px;
  font-family: monospace;
}

.terminal-cursor {
  display: inline-block;
  background-color: #8EC07C;
  width: 10px;
  height: 20px;
  margin-left: 5px;
  animation: blink-animation 1s step-end infinite;
}

@keyframes blink-animation {
  from, to { background-color: transparent }
  50% { background-color: #8EC07C; }
}
</style>
