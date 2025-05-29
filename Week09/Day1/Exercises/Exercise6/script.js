(function(children, partner, location, job) {
    const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.getElementById('fortune').textContent = message;
})(2, 'Bracha', 'Israel', 'Full Stack Developer');
// You will be a Full Stack Developer in Israel, and married to Bracha with 2 kids.