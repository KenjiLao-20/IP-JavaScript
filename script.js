const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btb.classList.add('btn')

               btn.innerText = sound

               btn.addEventListener('click',()=>{
                 stopSongs()

                                    document.getElementById(sound).play()
               })

               document.getElementById('buttons').appendChild(btn)
})

fuction stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

         song.pause()
         song.currentTime = 0;
  })
}
