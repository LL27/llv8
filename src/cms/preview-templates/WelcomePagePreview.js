import React from 'react'
import PropTypes from 'prop-types'
import { WelcomePageTemplate } from '../../templates/welcome-page'

const WelcomePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <WelcomePageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        intro={data.intro || { blurbs: [] }}
        portfolio={data.portfolio || { projects: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

WelcomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WelcomePagePreview
