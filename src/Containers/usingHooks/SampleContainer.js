import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sample from '../../Components/Sample/Sample';
import { getPost, getUsers } from '../../modules/sample';

const SampleContainer = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ sample, loading }) => ({
      post: sample.post,
      users: sample.users,
      loadingPost: loading['sample/GET_POST'],
      loadingUsers: loading['sample/GET_USERS'],
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // useEffect 에 파라미터로 넣는 함수는 async 로 할 수 없기 때문에
    // 그 내부에서 async 함수를 선언하고 호출해줍니다.
    const fn = async () => {
      try {
        await dispatch(getPost(1));
        await dispatch(getUsers(1));
      } catch (e) {
        console.log(e); // 에러 조회
      }
    };
    fn();
  }, [dispatch]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
