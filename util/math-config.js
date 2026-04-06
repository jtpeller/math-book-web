window.MathJax = {
    loader: { load: ['[tex]/ams', '[tex]/textmacros', '[tex]/cancel'] },
    tex: {
        autoload: {
            cancel: ['cancel']
        },
        packages: { '[+]': ['ams', 'textmacros'] },
        inlineMath: [['\x24', '\x24'], ['\\(', '\\)']],
        displayMath: [['\x24\x24', '\x24\x24'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
        macros: {
            "\\": "\\\\",
            lparen: "(",
            rparen: ")"
        }
    },
    svg: {
        linebreaks: {
            inline: true,      // Wrap math inside sentences
            display: true,     // Wrap big equations
            width: '100%',     // Use the full width of the container
            overflow: 'wrap'   // Wrap onto a new line.
        }
    },
    options: {
        // This is CRITICAL: It stops Tidy/Pandoc from breaking the math string
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        ignoreHtmlClass: 'tex2jax_ignore',
        processHtmlClass: 'tex2jax_process'
    }
};