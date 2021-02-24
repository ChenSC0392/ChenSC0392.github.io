const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini:false,
    autoplay: false,
    theme: '#000000',
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
      {
        name: "前前前世",
        artist: '	野田洋次郎',
        url: 'https://drive.google.com/uc?export=download&id=1M8pOfLXlDFsLU3dAvhVEp6_IO5jaPDzu',
        cover: 'https://upload.wikimedia.org/wikipedia/zh/thumb/9/9d/Radwimps_Zenzenzense_Cover.jpg/250px-Radwimps_Zenzenzense_Cover.jpg',
        lrc: '',
      },
    ]
});
/*const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        xhr.onload = function(){
            let coverUrl = URL.createObjectURL(this.response);
            image.onload = function(){
                let color = colorThief.getColor(image);
                ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                URL.revokeObjectURL(coverUrl)
            };
            image.src = coverUrl;
        }
        xhr.open('GET', ap.list.audios[index].cover, true);
        xhr.responseType = 'blob';
        xhr.send();
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});*/