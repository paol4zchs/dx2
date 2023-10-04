function findMaxPlayCount() {
    const numMusicsInput = document.getElementById('numMusics');
    const playCountsInput = document.getElementById('playCounts');
    const resultElement = document.getElementById('result');

    const numMusics = parseInt(numMusicsInput.value);
    const playCountsText = playCountsInput.value.trim();
    const playCountsArray = playCountsText.split(' ');

    if (playCountsArray.length !== numMusics) {
        resultElement.textContent = 'O número de contagens de reprodução não corresponde ao número de músicas.';
        return;
    }

    let i = 0;
    let maxPlayCount = Number(playCountsArray[0]);

    while (i < numMusics) {
        const playCount = Number(playCountsArray[i]);
        if (isNaN(playCount)) {
            resultElement.textContent = 'Certifique-se de inserir números válidos.';
            return;
        }
        if (playCount > maxPlayCount) {
            maxPlayCount = playCount;
        }
        i++;
    }

    resultElement.textContent = `O maior número de vezes que uma música foi tocada é ${maxPlayCount}.`;
}