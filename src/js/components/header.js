export function initHeader() {
    const backButton = document.querySelector('.back-button');
    const moreOptions = document.querySelector('.more-options');
    
    backButton.addEventListener('click', () => {
        console.log('Back button clicked');
    });
    
    moreOptions.addEventListener('click', () => {
        console.log('More options clicked');
    });
}