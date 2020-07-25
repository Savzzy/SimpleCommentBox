import React from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="alex"
          date="Today at 6:00AM"
          imageSrc={faker.image.avatar()}
          comment="Nice Try"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="james"
          date="Today at 7:00PM"
          imageSrc={faker.image.avatar()}
          comment="tremondous"
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
