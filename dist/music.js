const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "打上花火",
        artist: '米津玄師',
        url: 'https://drive.google.com/uc?export=download&id=11CPjoohS5rreEUQL4K3FJInZdPw5VHFK',
        cover: 'https://i.kfs.io/album/global/21671186,0v2/fit/500x500.jpg',
        lrc: '',
      },
    ]
});