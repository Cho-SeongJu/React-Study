import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export const useForm = ({
  initialValues,
  validate,
  refs,
  onSuccess, // 성공했을때 뭐할건데?
  onErrors, // 에러가 나면?
  onSubmit, // 값이 전달될때는
}) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const errorKeys = Object.keys(validateResult);

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(validateResult[key]);

      refs[key].current.focus();
      // ref control
      setIsSubmitting(false);
      return;
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch (e) {
        onErrors();
      }
      return;
    }
  };

  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
};

const getUserInfo = () => {
  const data = { name: 'seongju' };
  console.log(data);
  return data;
};

export const useUser = () => {
  // 1. user 정보는 매번 바뀌지 않는다.
  // 2. 그럼에도, useUser를 사용할 때 마다 네트워크 콜이 일어난다.
  // 이걸 개선하기 위해 React Query를 사용한다.
  // const getUserInfo = async () => {
  //   const data = await axios.get('https://api.github.com/user', {
  //     headers: {
  //       Authorization: process.env.REACT_APP_GITHUB_TOKEN,
  //       'Content-Type': 'application/json',
  //     },
  //   });

  // userInfo라는 쿼리키로 캐싱 -> fetch -> stale -> 인스턴스 unmount
  return useQuery(['userInfo'], () => getUserInfo(), { staleTime: 'Infinity' });
};
