function checkAnagram(){
    const word1 = document.getElementById('word1').value.trim().toLowerCase();
    const word2 = document.getElementById('word2').value.trim().toLowerCase();
    const result = document.getElementById('answer');
    if(word1 === '' || word2 === ''){
        answer.innerHTML = 'Please enter the values';
        return;
    }
    
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');
    
    if (sortedWord1 === sortedWord2 && word1 != '' && word2 != '') {
        result.innerHTML = `"${word1}" and "${word2}" are anagrams!`;
    } else {
        result.innerHTML = `"${word1}" and "${word2}" are not anagrams.`;
    }
}

function handleClear(){
    const result = document.getElementById('answer');
    result.innerHTML = '';
}

// Check saved mode from localStorage
window.onload = function() {
    const savedMode = localStorage.getItem('mode') || 'dark';
    document.body.classList.add(savedMode + '-mode');
    document.getElementById('modeToggle').checked = savedMode === 'light';
}

function toggleMode() {
    const mode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    localStorage.setItem('mode', mode);
}
