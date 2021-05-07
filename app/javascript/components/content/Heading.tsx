import React, { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5;
  children?: ReactNode | ReactNode[];
}

interface HeadingSettingMap {
  [level: number]: HeadingSetting;
}

interface HeadingSetting {
  textSize: string;
}

const HeadingSettings: HeadingSettingMap = {
  1: {
    textSize: "text-4xl",
  },
  2: {
    textSize: "text-3xl",
  },
  3: {
    textSize: "text-2xl",
  },
  4: {
    textSize: "text-xl",
  },
  5: {
    textSize: "text-lg",
  },
};

function Heading(props: HeadingProps): JSX.Element {
  const headingSettings = HeadingSettings[props.level];
  switch (props.level) {
    case 1:
      return <h1 className={headingSettings.textSize}>{props.children}</h1>;
    case 2:
      return <h2 className={headingSettings.textSize}>{props.children}</h2>;
    case 3:
      return <h3 className={headingSettings.textSize}>{props.children}</h3>;
    case 4:
      return <h4 className={headingSettings.textSize}>{props.children}</h4>;
    case 5:
      return <h5 className={headingSettings.textSize}>{props.children}</h5>;
  }

  return <span>Invalid Level {props.level}</span>;
}

export { Heading };
