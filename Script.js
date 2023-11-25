const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// loop
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play() // play method hai js mn jo audio ky saath kam krta
    })

    document.getElementById('buttons').appendChild(btn) 
})


//JavaScript code snippet that creates buttons for each sound in the sounds array and appends them to an HTML element with the id 'buttons'. This is a simple loop using the forEach method to iterate over the sounds array.


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}