import React, { useState } from 'react';

function TagCrud({ onTagEntered }) {
  const [tag, setTag] = useState('');
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [notif, setNotif] = useState("");

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleTagLike = () => {
    setLike(1);
    setDislike(0);
    if (tag.trim() != "") {
      sendTagStatus(tag, like);
    }
  };

  const handleTagDislike = () => {
    setDislike(1);
    setLike(0);
    sendTagStatus(tag, dislike);
  };

  const sendTagStatus = (tag, status) => {
    var request = "http://localhost:8000/favorites/?tag=" + tag + "&like=" + like + "&dislike=" + dislike;
    fetch(request, {
    method: 'POST',
    mode: 'cors', 
  }).then((res) => JSON.parse(JSON.stringify(res))[0]).then(
    
    (notif) => {
    setNotif(notif);
  })

  }

  return (
    <div>
      <div classname = "TagCrud">
      <input type="text" value={tag} onChange={handleTagChange} />
      <button onClick={() => handleTagLike()}>Like this tag</button>
      <button onClick={() => handleTagDislike()}>Dislike this tag</button>
      {notif ? console.log(notif) : notif }
       </div>

    </div>
  );
}

export default TagCrud;