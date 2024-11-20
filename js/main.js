document.getElementById('timeline-long').style.display = 'none'

function toogleNavbar() {
    const elem = document.getElementById('navbarCollapse')
    if (elem.classList.contains('show')) {
        elem.classList.remove('show')
    } else {
        elem.classList.add('show')
    }
}

function timelineShowMore() {
    let element
    const showElements = ['timeline-long', 'show-less-button']
    for (let name of showElements) {
        element = document.getElementById(name)
        element.style.display = ''
    }
    const hideElements = ['timeline-short', 'show-more-button']
    for (let name of hideElements) {
        element = document.getElementById(name)
        element.style.display = 'none'
    }
    document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
}

function timelineShowLess() {
    let element
    const showElements = ['timeline-short', 'show-more-button']
    for (let name of showElements) {
        element = document.getElementById(name)
        element.style.display = ''
    }
    const hideElements = ['timeline-long', 'show-less-button']
    for (let name of hideElements) {
        element = document.getElementById(name)
        element.style.display = 'none'
    }
    document.getElementById('experiencia').scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
}
