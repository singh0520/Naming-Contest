import React from 'react';

const contestPreview = (contest) => (
  <div className="contestPreview">
    <div>
      {contest.categoryName}
    </div>
    <div>
      {contest.contestName}
    </div>
  </div>
);

export default contestPreview;
