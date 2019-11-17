function studyJS(js, callback) {
    console.log(`Do you study ${js}?`);
    callback();
}
studyJS('javascript', function() {
    console.log('I just started to study javascript');
})
