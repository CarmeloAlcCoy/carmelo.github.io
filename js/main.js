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

/* ************************* Section Skills ************************* */

const skills = [
    { title: { es: 'Algortimia', en: 'Algorithm' }, value: 4 },
    { title: { es: 'Patrones de Diseño', en: 'Design Patterns' }, value: 4 },
    { title: { es: 'Testing', en: 'Testing' }, value: 3 },
    { title: { es: 'Debugging', en: 'Debugging' }, value: 5 },
    { title: { es: 'C++', en: 'C++' }, value: 4 },
    { title: { es: 'Java 8', en: 'Java 8' }, value: 5 },
    { title: { es: 'Java EE', en: 'Java EE' }, value: 4 },
    { title: { es: 'Python', en: 'Python' }, value: 3 },
    { title: { es: 'HTML', en: 'HTML' }, value: 3 },
    { title: { es: 'CSS', en: 'CSS' }, value: 3 },
    { title: { es: 'JavaScript', en: 'JavaScript' }, value: 3 },
    { title: { es: 'Flex CSS', en: 'Flex CSS' }, value: 3 },
    { title: { es: 'SQL', en: 'SQL' }, value: 5 },
    { title: { es: 'NoSQL', en: 'NoSQL' }, value: 2 },
    { title: { es: 'Web Service (REST)', en: 'Web Service (REST)' }, value: 3 },
    { title: { es: 'GraphQL', en: 'GraphQL' }, value: 3 },
    { title: { es: 'LaTex', en: 'LaTex' }, value: 4 },
    { title: { es: 'Git', en: 'Git' }, value: 4 },
    { title: { es: 'Docker', en: 'Docker' }, value: 3 },
    { title: { es: 'Scrum', en: 'Scrum' }, value: 3 },
]

function createSkillHTML(title, value) {
    let node = document.createElement('div')
    node.setAttribute('class', 'skill')
    let div_title = document.createElement('div')
    div_title.setAttribute('class', 'skill-header')
    div_title.appendChild(document.createTextNode(title))
    node.appendChild(div_title)
    let div_stepper = document.createElement('div')
    div_stepper.setAttribute('class', 'stepper')
    for (let i = 0; i < 6; i++) {
        let style = 'cell'
        if (i == 0) {
            style += ' first'
        }
        if (i == 5) {
            style += ' last'
        }
        if (i < value) {
            style += ' active'
        }
        let span_html = document.createElement('span')
        span_html.appendChild(document.createTextNode(i))
        let div_cell = document.createElement('div')
        div_cell.appendChild(span_html)
        div_cell.setAttribute('class', style)
        div_stepper.appendChild(div_cell)
    }
    node.appendChild(div_stepper)
    return node
}

function loadSkills(lang) {
    const container = document.getElementById('skillsContainer')
    for (const skill of skills) {
        let node = createSkillHTML(skill.title[lang], skill.value)
        container.appendChild(node)
    }
}
