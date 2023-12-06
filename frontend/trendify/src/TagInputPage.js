import React from 'react';
import TagCrud from './TagCrud';
import { useEffect, useState } from 'react';

function TagCrudPage({ }) {
   
  return (

    <div className="TagCrud">
      <h2>Like / Dislike Tag</h2>
      <TagCrud></TagCrud>

    </div>

  );
}

export default TagCrudPage;