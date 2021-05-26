import React from 'react'
import HeadphoneLink from './HeadphoneLink';
import SpeakerLink from './SpeakersLink';
import EarphoneLink from './EarphonesLink';

export default function CardLinks({position}) {
    return (
        <div className={position !== "mobile" ? `card-links card-links-${position} container` : `card-links card-links-${position}`}>
            <HeadphoneLink />
            <SpeakerLink />
            <EarphoneLink />
        </div>
    )
}
