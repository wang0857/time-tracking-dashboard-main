import imageJeremy from '../assets/image-jeremy.png';
import '../scss/PersonCard.scss'

function PersonCard ({freqence, freqenceHandler}) {
    function onFrequenceChangeDaily () {
        freqenceHandler('daily')
    }
    function onFrequenceChangeWeekly () {
        freqenceHandler('weekly')
    }
    function onFrequenceChangeMonthly () {
        freqenceHandler('monthly')
    }

    return (
        <div className="person-card-container">
            <div className="person-card-person">
                <img src={imageJeremy} alt="person"></img>
                <div className="person-card-person-name">
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>
            <div className="person-card-freqence">
                <p className={freqence === 'daily' ? 'active' : ''} onClick={onFrequenceChangeDaily}>Daily</p>
                <p className={freqence === 'weekly' ? 'active' : ''} onClick={onFrequenceChangeWeekly}>Weekly</p>
                <p className={freqence === 'monthly' ? 'active' : ''} onClick={onFrequenceChangeMonthly}>Monthly</p>
            </div>
        </div>
    )
}

export default PersonCard