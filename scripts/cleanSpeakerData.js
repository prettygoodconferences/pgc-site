const mapGravatar = speaker => {
  if (speaker.photo.indexOf("www.gravatar.com") > -1) {
    return {
      ...speaker,
      gravatar: speaker.photo
    };
  }

  return speaker;
};

const mapGithub = speaker => {
  const { github } = speaker;
  if (github) {
    if (github.indexOf("github.com") > -1) {
      return {
        ...speaker,
        github: github
          .substring(
            0,
            github
              .split("")
              .reverse()
              .join("")
              .indexOf("/")
          )
          .split("")
          .reverse()
          .join("")
      };
    }

    return speaker;
  }

  return {
    ...speaker,
    github: undefined
  };
};

const mapTwitter = speaker => {
  const { twitter } = speaker;
  if (twitter) {
    if (twitter.indexOf("twitter.com") > -1) {
      return {
        ...speaker,
        twitter: twitter
          .substring(
            0,
            twitter
              .split("")
              .reverse()
              .join("")
              .indexOf("/")
          )
          .split("")
          .reverse()
          .join("")
      };
    } else if (twitter.startsWith("@")) {
      return {
        ...speaker,
        twitter: twitter.substring(1)
      };
    }

    return speaker;
  }

  return {
    ...speaker,
    twitter: undefined
  };
};

const mapYoutube = speaker => {
  const { youtube } = speaker;

  if (youtube) {
    return speaker;
  }

  return {
    ...speaker,
    youtube: undefined
  };
};

const mapUnused = speaker => {
  return {
    ...speaker,
    photo: undefined,
    accepted: undefined,
    communication: undefined,
    email: undefined
  };
};

const updatedSpeakers = speakers
  .map(mapGravatar)
  .map(mapGithub)
  .map(mapTwitter)
  .map(mapYoutube)
  .map(mapUnused);

console.log(JSON.stringify(updatedSpeakers, null, "\t"));
