import { useState } from 'react';

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
