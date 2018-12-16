const inputBtn = document.querySelector('.inputFileBtn');

inputBtn.onchange = ()=> {
    const files = inputBtn.files;
    const fileReader = new FileReader();
    for (var i = 0, l = files.length; i < l; i++) {
        // if (!files[i].type.includes('video')) {
        //     alert('请上传视频');
        // } else {
        // }
        fileReader.readAsDataURL(files[i]);
    }

    fileReader.onloadstart = function(){
        console.log('start');   
    }
    fileReader.onloadend = function(){
        console.log('end', fileReader);     
    }
    fileReader.onload = function(){
        console.log(888, fileReader);
        
    }

    fileReader.onprogress = (data) => {
        const process = parseInt((data.loaded / data.total) * 100, 10)
        console.log(process);

    }

}