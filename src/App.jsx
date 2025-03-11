import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContextWrapper from './theme/ThemeContextWrapper';
// ... other imports

function App() {
  return (
    <ThemeContextWrapper>
      <Router>
        {/* Your existing app content */}
      </Router>
    </ThemeContextWrapper>
  );
}

export default App; 