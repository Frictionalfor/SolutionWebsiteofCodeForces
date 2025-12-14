const folder = window.location.pathname.split("/").slice(-2,-1)[0] || "Unknown";
    
    // Fetch problem name from list.json
    fetch('../../solutions/list.json')
      .then(res => res.json())
      .then(data => {
        // Find the problem by code
        const problem = data.find(p => p.code === folder);
        if (problem) {
          document.title = `${problem.code} - ${problem.name} – Solution`;
          document.getElementById("problem-title").textContent = `${problem.code} - ${problem.name}`;
        } else {
          document.title = folder + " – Solution";
          document.getElementById("problem-title").textContent = folder;
        }
      })
      .catch(() => {
        // Fallback if list.json not found
        document.title = folder + " – Solution";
        document.getElementById("problem-title").textContent = folder;
      });

    let rawCodeGlobal = '';

    // C++ Syntax Highlighter - COMPLETELY REWRITTEN (BULLETPROOF)
    function highlightCode(rawCode) {
      // Step 1: Escape HTML
      let code = rawCode
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // Step 2: Collect all matches with their positions
      const matches = [];

      // Helper to add match
      function addMatch(regex, className, code) {
        let match;
        regex.lastIndex = 0; // Reset regex
        while ((match = regex.exec(code)) !== null) {
          matches.push({
            start: match.index,
            end: match.index + match[0].length,
            text: match[0],
            className: className
          });
        }
      }

      // Collect matches (order matters - most specific first)
      addMatch(/\/\/.*?$/gm, 'comment', code);
      addMatch(/^\s*#.*?$/gm, 'preprocessor', code);
      addMatch(/"(?:[^"\\]|\\.)*"/g, 'string', code);
      addMatch(/\b\d+\b/g, 'number', code);
      addMatch(/\b(?:int|long|long long|double|float|char|bool|void|string|vector|map|set|pair|queue|stack|deque|priority_queue|unordered_map|unordered_set)\b/g, 'type', code);
      addMatch(/\b(?:return|using|namespace|if|else|for|while|do|switch|case|break|continue|class|struct|const|auto|static|public|private|protected|virtual|inline|template|typename|typedef|sizeof|new|delete)\b/g, 'keyword', code);
      addMatch(/\b(?:cout|cin|endl|std|cerr|clog)\b/g, 'stl', code);
      addMatch(/\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/g, 'function', code);

      // Step 3: Sort by position and remove overlaps (keep first match for each position)
      matches.sort((a, b) => a.start - b.start);
      
      const filtered = [];
      let lastEnd = -1;
      
      for (const match of matches) {
        if (match.start >= lastEnd) {
          filtered.push(match);
          lastEnd = match.end;
        }
      }

      // Step 4: Build result by walking through code
      let result = '';
      let pos = 0;

      for (const match of filtered) {
        // Add text before match
        result += code.substring(pos, match.start);
        // Add highlighted match
        result += `<span class="${match.className}">${match.text}</span>`;
        pos = match.end;
      }

      // Add remaining text
      result += code.substring(pos);

      return result;
    }

    function generateLineNumbers(lineCount) {
      const lineNumbersDiv = document.getElementById('line-numbers');
      lineNumbersDiv.innerHTML = '';
      for (let i = 1; i <= lineCount; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        lineNumbersDiv.appendChild(div);
      }
    }

    function setupCopyButton() {
      const copyBtn = document.getElementById('copy-btn');
      
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(rawCodeGlobal);
          
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = `
            <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copied!
          `;
          
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
              <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy Code
            `;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
    }

    // MARKDOWN RENDERING (GitHub-style)
    fetch('explanation.md')
      .then(res => res.ok ? res.text() : Promise.reject())
      .then(markdown => {
        const box = document.getElementById('explanation-box');
        box.innerHTML = marked.parse(markdown);
        box.classList.remove('loading');
      })
      .catch(() => {
        const box = document.getElementById('explanation-box');
        box.textContent = "No explanation file found.";
        box.classList.remove('loading');
      });

    // CODE LOADING
    let highlightExecuted = false;
    
    fetch('solution.cpp')
      .then(res => res.ok ? res.text() : Promise.reject())
      .then(rawText => {
        if (highlightExecuted) {
          console.error('❌ Attempted to highlight twice!');
          return;
        }
        highlightExecuted = true;

        rawCodeGlobal = rawText;

        const lines = rawText.split('\n');
        const lineCount = lines.length;
        document.getElementById('line-count').textContent = `${lineCount} line${lineCount !== 1 ? 's' : ''}`;

        generateLineNumbers(lineCount);

        const box = document.getElementById('code-box');
        const highlightedHTML = highlightCode(rawText);
        box.innerHTML = highlightedHTML;
        box.classList.remove('loading');
      })
      .catch(() => {
        const box = document.getElementById('code-box');
        box.textContent = "No solution file found.";
        box.classList.remove('loading');
        document.getElementById('line-count').textContent = "0 lines";
      });

    setupCopyButton();