import React, {useEffect, useState} from 'react';
import Router from 'next/router'

export default function IndexPage() {
  Router.push(`/projects`);

  return (<div/>);
}
