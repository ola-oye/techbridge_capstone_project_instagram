export function initFollowButton() {
    const followBtn = document.querySelector('.follow-btn');
    let isFollowing = false;

    followBtn.addEventListener('click', () => {
        isFollowing = !isFollowing;
        updateFollowButtonState(followBtn, isFollowing);
    });
}

function updateFollowButtonState(button, isFollowing) {
    button.textContent = isFollowing ? 'Following' : 'Follow';
    button.style.backgroundColor = isFollowing ? '#efefef' : '#0095f6';
    button.style.color = isFollowing ? '#262626' : 'white';
}