import menuDots from '../assets/icon-ellipsis.svg'
import iconWork from '../assets/icon-work.svg'
import iconPlay from '../assets/icon-play.svg'
import iconStudy from '../assets/icon-study.svg'
import iconExercise from '../assets/icon-exercise.svg'
import iconSocial from '../assets/icon-social.svg'
import iconSelfCare from '../assets/icon-self-care.svg'
import '../scss/TimeCard.scss'


function TimeCard ({data, freqence}) {
    let dynamicBackground
    let icon
    let iconPosition

    switch (data.title) {
        case 'Work':
            dynamicBackground = { backgroundColor: 'hsl(15, 100%, 70%)' }
            icon = iconWork
            iconPosition = { top: '-10px' }
            break;
        case 'Play':
            dynamicBackground = { backgroundColor: 'hsl(195, 74%, 62%)' }
            icon = iconPlay
            iconPosition = { top: '-5px' }
            break;
        case 'Study':
            dynamicBackground = { backgroundColor: 'hsl(348, 100%, 68%)' }
            icon = iconStudy
            iconPosition = { top: '-10px' }
            break;
        case 'Exercise':
            dynamicBackground = { backgroundColor: 'hsl(145, 58%, 55%)' }
            icon = iconExercise
            iconPosition = { top: '0px' }
            break;
        case 'Social':
            dynamicBackground = { backgroundColor: 'hsl(264, 64%, 52%)' }
            icon = iconSocial
            iconPosition = { top: '-15px' }
            break;
        case 'Self Care':
            dynamicBackground = { backgroundColor: 'hsl(43, 84%, 65%)' };
            icon = iconSelfCare
            iconPosition = { top: '-10px' }
            break;
        default:
            dynamicBackground = { backgroundColor: 'hsl(0, 0%, 41%)' };
    }

    return (
        <div className="time-card-container" style={dynamicBackground}>
            <img src={icon} alt={data.title} className="time-card-icon" style={iconPosition}></img>
            <div className="time-card-info">
                <div className="time-card-info-title">
                    <h3>{data.title}</h3>
                    <div>
                        <img src={menuDots} alt='menu'></img>
                    </div>
                </div>
                <div className="time-card-info-time">
                    {/* Use [] to set dynamic properties of objects */}
                    <p>
                        {data.timeframes[freqence].current}
                        {data.timeframes[freqence].current > 1 ? ' hrs' : ' hr'}
                    </p>
                    <p>
                        {`Last Week - ${data.timeframes[freqence].previous}`}
                        {data.timeframes[freqence].previous > 1 ? ' hrs' : ' hr'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimeCard
