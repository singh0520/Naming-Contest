import React from 'react';
import ContestPreview from './ContestPreview';

const contestList = ({contests}) => (
  <div className="contestList">
  {this.state.contests.map(contest =>
              <ContestPreview key={contest.id} {...contest} />
             )}
  </div>
);

contestList.propTypes = {
  contests: React.PropTypes.array
};

export default contestList;
