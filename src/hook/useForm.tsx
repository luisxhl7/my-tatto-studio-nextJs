import { useEffect, useMemo, useState } from "react";

type FormState<T> = T;
type ValidationFn<T> = (value: T[keyof T]) => boolean;
type ValidationErrorMessage = string | null;
type FormValidation<T> = {
  [K in keyof T]: [ValidationFn<T>, ValidationErrorMessage];
};

export const useForm = <T extends Record<string, any>>(
    initialForm: FormState<T> = {} as FormState<T>,
    formValidations: FormValidation<T> = {} as FormValidation<T>
) => {
    const [formState, setFormState] = useState<FormState<T>>(initialForm);
    const [formValidation, setFormValidation] = useState<{
        [key: string]: ValidationErrorMessage;
    }>({});

    useEffect(() => {
        createValidators();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState]);

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onSelectChange = (name:string, value:string) => {
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const setDateInit = (newDate: Date | null, changing: string) => {
        setFormState({
          ...formState,
          [changing]: newDate,
        });
      };

    const createValidators = () => {
        const formCheckedValues: { [key: string]: ValidationErrorMessage } = {};

        for (const formField of Object.keys(formValidations)) {
        const [fn, errorMessage] = formValidations[formField as keyof T];

        formCheckedValues[`${formField}Valid`] = fn(formState[formField])
            ? null
            : errorMessage;
        }
        setFormValidation(formCheckedValues);
    };

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) {
                return false;
            }
        }

        return true;
    }, [formValidation]);

    return {
        ...formState,
        ...formValidation,
        formState,
        isFormValid,
        onInputChange,
        onResetForm,
        setDateInit,
        onSelectChange,
    };
};
