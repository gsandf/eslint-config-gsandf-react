import React, { useEffect, useState } from 'react';

export default function Example() {
  const [name] = useState('Blake');

  useEffect(() => {
    document.title = `${name} is cool`;
  }, []);
}
