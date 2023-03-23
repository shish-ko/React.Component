import { TEN_YEARS } from '../data/constants';
import { IAccountCard, IFormRefs, IFormState } from 'interfaces';

type NominalSetState = React.Dispatch<
  React.SetStateAction<
    Pick<
      IFormState,
      'address' | 'agreement' | 'birthDate' | 'img' | 'name' | 'shippingMethod' | 'title'
    >
  >
>;

export const validator = (setter: NominalSetState, refs: IFormRefs): false | IAccountCard => {
  const {
    nameRef,
    addressRef,
    birthDateRef,
    shippingMethodRef,
    agreementRef,
    mrRef,
    msRef,
    unknownTitleRef,
    imgRef,
  } = refs;
  const validatedState = {
    name: false,
    address: false,
    img: false,
    birthDate: false,
    title: false,
    agreement: false,
    shippingMethod: false,
  };
  const formCard = {
    name: nameRef.current!.value,
    address: addressRef.current!.value,
    img: '',
    birthDate: birthDateRef.current!.valueAsNumber,
    title: '',
    shippingMethod: shippingMethodRef.current!.value,
    key: Date.now(),
  };
  if (nameRef.current!.value.trim().length < 3) {
    validatedState.name = true;
  }
  if (
    !addressRef
      .current!.value.trim()
      .split(' ')
      .some((item) => item.length >= 3) ||
    addressRef.current!.value.trim().split(' ').length < 3
  ) {
    validatedState.address = true;
  }
  if (
    !birthDateRef.current!.value ||
    Date.now() - birthDateRef.current!.valueAsNumber < TEN_YEARS
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
  const title = [mrRef, msRef, unknownTitleRef].find((item) => item.current?.checked)?.current?.id;
  if (!title) {
    validatedState.title = true;
  } else {
    formCard.title = title;
  }
  setter(validatedState);
  if (Object.values(validatedState).some((item) => item)) return false;
  return formCard as unknown as IAccountCard;
};
