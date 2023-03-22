import { TEN_YEARS } from '../data/constants';
import { IAccountCard, IFormRefs, IFormState } from 'interfaces';

type NominalSetState = React.Dispatch<React.SetStateAction<IFormState>>;

export const validator = (setter: NominalSetState, refs: IFormRefs): false | IAccountCard => {
  const {
    nameRef,
    addressRef,
    birthDateRef,
    shippingMethodRef,
    agreementRef,
    maleRef,
    femaleRef,
    unknownGenderRef,
    imgRef,
  } = refs;
  const validatedState = {
    name: false,
    address: false,
    img: false,
    birthDate: false,
    gender: false,
    agreement: false,
    shippingMethod: false,
  };
  const formCard = {
    name: nameRef.current!.value,
    address: addressRef.current!.value,
    img: '',
    birthDate: birthDateRef.current!.value,
    gender: '',
    shippingMethod: shippingMethodRef.current!.value,
  };
  if (nameRef.current!.value.length < 3) {
    validatedState.name = true;
  }
  if (!addressRef.current!.value.split(' ').some((item) => item.length >= 3)) {
    validatedState.address = true;
  }
  if (
    !birthDateRef.current!.value ||
    Date.now() - new Date(birthDateRef.current!.value).getTime() < TEN_YEARS
  ) {
    validatedState.birthDate = true;
  }
  if (!shippingMethodRef.current!.value) {
    validatedState.shippingMethod = true;
  }
  if (!agreementRef.current!.checked) {
    validatedState.agreement = true;
  }
  if (!imgRef.current!.files?.length || imgRef.current!.files[0].type !== 'image/png') {
    validatedState.img = true;
  } else {
    formCard.img = URL.createObjectURL(imgRef.current!.files[0]);
  }
  const gender = [maleRef, femaleRef, unknownGenderRef].find((item) => item.current?.checked)
    ?.current?.id;
  if (!gender) {
    validatedState.gender = true;
  } else {
    formCard.gender = gender;
  }
  setter(validatedState);
  if (Object.values(validatedState).some((item) => item)) return false;
  return formCard as unknown as IAccountCard;
};
