import React from 'react';

interface PageElProps {
  titleHandler: (pageTitle: string) => void;
}

class PageElement extends React.Component<PageElProps> {
  constructor(props: PageElProps) {
    super(props);
  }
}

export default PageElement;
