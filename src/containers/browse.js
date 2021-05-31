import React, { useState, useContext, useEffect } from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase'
import { Header, Loading } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    console.log(profile)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    <React.Fragment>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            <Header.TextLink>Films</Header.TextLink>
            <Header.TextLink>Series</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Arthur sneaks into a private movie theater event and confronts
            Thomas, who tells him that Penny is delusional and not his
            biological mother. In denial, Arthur visits Arkham State Hospital
            and steals Penny's file; the file states she adopted Arthur while
            working as a nurse at the hospital in the 1950s. Penny then raised
            Arthur along with her abusive boyfriend, who was later arrested and
            died in jail. Although Penny claims that she had an affair with
            Thomas, it is hinted to have been a lie fabricated in order to
            blackmail him into paying alimony, a scheme that was ultimately
            unsuccessful. Distraught, Arthur returns home and enters Sophie's
            apartment unannounced. Frightened, Sophie tells him he is in the
            wrong apartment and asks him to leave; it is then revealed that
            their relationship was one of Arthur's delusions. The following day,
            Arthur kills Penny at the hospital by smothering her with a pillow.
          </Header.Text>
        </Header.Feature>
      </Header>
    </React.Fragment>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
