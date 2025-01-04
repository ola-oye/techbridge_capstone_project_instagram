import { initHeader } from './components/header.js';
import { initNavigation } from './components/navigation.js';
import { initFollowButton } from './components/follow-button.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initNavigation();
    initFollowButton();
});