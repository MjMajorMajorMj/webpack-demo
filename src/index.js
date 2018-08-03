import $ from 'jquery';
import './style.css';

$('#login').click(() => {
    console.log('Button cliked')

    import('./helpers').then( resp => {
        console.log('Import Resp:', resp);
        const { login, addToDom } = resp;

        const result1 = login('BaconPancake','kingkong');

        const result2 = login('HydroThunder','winner');

        addToDom('h1', result1, 'blue');
        addToDom('h1', result2, 'purple');
    });
});

$('#load-image').click( async () => {
    console.log('Load Image Clicked');

    const resp = await import('./helpers');

    const { addImg } = resp;

    const src = await import('./demoimage.jpg');

    addImg(src.default);
});