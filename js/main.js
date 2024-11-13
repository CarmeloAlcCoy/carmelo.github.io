document.getElementById('timeline-long').style.display = 'none'

$('#collapseTimeline').on('show.bs.collapse', function () {
    var element
    var element2
    element = document.getElementById('timeline-long')
    element.style.display = ''
    element2 = document.getElementById('timeline-short')
    element2.style.display = 'none'
    //console.log('Juan');
})

$('#collapseTimeline').on('hide.bs.collapse', function () {
    var element
    var element2
    element = document.getElementById('timeline-short')
    element.style.display = ''
    element2 = document.getElementById('timeline-long')
    element2.style.display = 'none'
    //console.log('Juann');
})

$('#collapseTimeline').collapse('hide')
