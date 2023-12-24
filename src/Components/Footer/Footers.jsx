// import React from 'react'
import logo from '../../assets/logo.png'

import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
} from '@heroicons/react/outline';
import css from '../Footer/Footers.module.css'
const Footers = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={logo} alt="Logo" />
                    <span>Royal Fashion</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact US</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>Mumbai 400037</span>
                        </span>

                        <span className={css.pngLine}>
                            {" "}
                            <PhoneIcon className={css.icon} />
                            <span>+918433671309</span>
                        </span>

                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <span>RoyalFasihion@Gmail.com</span>
                        </span>


                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Accoun</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Signup/Signin</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UserIcon className={css.icon} />
                            <span>About US</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} id='link' />
                            <span>Saftay Privacy & Terms</span>
                        </span>
                    </div>
                </div>


            </div>
            <div className={css.copyright}>
                <span>Copyright @2023 by Royal-Fashion, Inc. </span>
                <span>All rights reserved</span>
            </div>


        </div>
    )
}

export default Footers
