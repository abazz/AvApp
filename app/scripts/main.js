console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
$(document).ready(function () {
    $('#img').click(function () {
        document.location.href = '/img-editor.html'
    });
    $('#signup').click(function () {
        document.location.href = '/video.html';
    });
    $('#audio').click(function () {
        document.location.href = '/audio.html';
    });
    $('#picture').click(function () {
        document.location.href = '/picture.html';
    });
    $('#form').click(function () {
        document.location.href = '/Form.html';
    });
});