const nav = document.querySelector('.nav-bar');
const img = document.querySelector('.snippet-img-container');
const container = document.querySelector('.des-container')
console.log(img)
const options = {
    rootMargin: "-359px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        console.log(entry.target);
        if (!entry.isIntersecting) {
            nav.classList.add("nav-bar-color")
        } else {
            nav.classList.remove("nav-bar-color");
        }
    })
}, options)

observer.observe(container);