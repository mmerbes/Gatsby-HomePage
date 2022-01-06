import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Letterboxd",
    url: "https://letterboxd.com/impalallama/",
    description:
      "Movies b pretty good",
    color: "#E95800",
  },
  {
    text: "Goodreads",
    url: "https://www.goodreads.com/review/list/33147565?ref=nav_mybooks",
    description:
      "Im so fuking smart look at these cool books i read that arn't just every discworld book and a bunch bad self-help books",
    color: "#1099A8",
  },
  {
    text: "BackLoggd",
    url: "https://www.backloggd.com/u/ImpalaLlama/games/",
    description:
      "Letterboxd but for videogames, man they should do that for {insertmediaformathere}",
    color: "#BC027F",
  },
  {
    text: "MyAnimeList",
    url: "https://myanimelist.net/animelist/ShonenBat",
    description:
      "You fuckin Weeb",
    color: "#0D96F2",
  },
  {
    text: "RYM (rate your music)",
    url: "https://rateyourmusic.com/~SRake",
    description:
      "My Taste In Music Is Impecciable",
    color: "#8EB814",
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Welcome 
        <br />
        This is my place a place i make for me
        <span role="img" aria-label="Party popper emojis">
          🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        These are all the things I think are cool. I hope you think they are cool too.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
