<template>
  <div class="ide-container">
    <!-- Navbar -->
    <div class="navbar">
      <span>File</span>
      <span>Edit</span>
      <span>View</span>
      <span>Go</span>
      <span>Help</span>
    </div>

    <!-- Main IDE Layout -->
    <div class="main-layout">
      <!-- Sidebar -->
      <div class="sidebar">
        <div class="sidebar-item">Explorer</div>
        <div class="sidebar-item">Search</div>
        <div class="sidebar-item">Source Control</div>
        <div class="sidebar-item">Run and Debug</div>
        <div class="sidebar-item">Extensions</div>
      </div>

      <!-- Editor + Terminal Container -->
      <div class="editor-terminal">
        <!-- Editor -->
        <div class="editor">
          <div class="tab">index.html</div>
          <div class="code-editor"> <!-- Placeholder for code or Monaco Editor -->
            <pre><code>&lt;!-- Sample HTML content --&gt;
&lt;div&gt;Hello, VS Code!&lt;/div&gt;</code></pre>
          </div>
        </div>
        <!-- Terminal -->
        <div class="terminal">
          <div class="terminal-tab">Terminal</div>
          <div class="terminal-window">
            user@vscode:~$ echo "Hello, World!"
          </div>
        </div>
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
  background-color: #007acc;
  color: white;
  padding: 10px;
  display: flex;
  gap: 15px;
}

.main-layout {
  display: flex;
  flex: 1;
}

.sidebar {
  background-color: #333;
  color: white;
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar-item:hover {
  cursor: pointer;
  background-color: #555;
}

.editor-terminal {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.editor {
  flex-grow: 1;
  border-bottom: 1px solid #444;
}

.tab {
  background-color: #1e1e1e;
  padding: 10px;
  color: #ccc;
}

.code-editor {
  padding: 20px;
  background-color: #1e1e1e;
  color: #9CDCFE;
  overflow-y: auto;
  height: calc(100% - 30px);
}

.terminal {
  background-color: #1e1e1e;
  color: #ccc;
}

.terminal-tab {
  background-color: #333;
  padding: 10px;
}

.terminal-window {
  padding: 10px;
}
</style>
