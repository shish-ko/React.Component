import { TEN_YEARS } from '../data/constants';
import { IAccountCard } from 'interfaces';

// type NominalSetState = React.Dispatch<
//   React.SetStateAction<
//     Pick<
//       IFormState,
//       'address' | 'agreement' | 'birthDate' | 'img' | 'name' | 'shippingMethod' | 'title'
//     >
//   >
// >;

// export const validator = (setter: NominalSetState, refs: IFormRefs): false | IAccountCard => {
//   const {
//     nameRef,
//     addressRef,
//     birthDateRef,
//     shippingMethodRef,
//     agreementRef,
//     mrRef,
//     msRef,
//     unknownTitleRef,
//     imgRef,
//     saveRef,
//   } = refs;
//   const validatedState = {
//     name: false,
//     address: false,
//     img: false,
//     birthDate: false,
//     title: false,
//     agreement: false,
//     shippingMethod: false,
//   };
//   const formCard: IAccountCard = {
//     name: nameRef.current!.value,
//     address: addressRef.current!.value,
//     img: '',
//     birthDate: birthDateRef.current!.valueAsNumber,
//     title: '',
//     shippingMethod: shippingMethodRef.current!.value,
//     key: Date.now().toString(),
//   };
//   if (nameRef.current!.value.trim().length < 3) {
//     validatedState.name = true;
//   }
//   if (
//     !addressRef
//       .current!.value.trim()
//       .split(' ')
//       .some((item) => item.length >= 3) ||
//     addressRef.current!.value.trim().split(' ').length < 3
//   ) {
//     validatedState.address = true;
//   }
//   if (
//     !birthDateRef.current!.value ||
//     Date.now() - birthDateRef.current!.valueAsNumber < TEN_YEARS
//   ) {
//     validatedState.birthDate = true;
//   }
//   if (!shippingMethodRef.current!.value) {
//     validatedState.shippingMethod = true;
//   }
//   if (!agreementRef.current!.checked) {
//     validatedState.agreement = true;
//   }
//   if (!imgRef.current!.files?.length || imgRef.current!.files[0].type !== 'image/png') {
//     validatedState.img = true;
//   } else {
//     formCard.img = URL.createObjectURL(imgRef.current!.files[0]);
//   }
//   const title = [mrRef, msRef, unknownTitleRef].find((item) => item.current?.checked)?.current?.id;
//   if (!title) {
//     validatedState.title = true;
//   } else {
//     formCard.title = title;
//   }
//   setter(validatedState);
//   if (Object.values(validatedState).some((item) => item)) return false;
//   if (saveRef.current!.checked && imgRef.current!.files) {
//     saveAccToLS(formCard, imgRef.current!.files[0]);
//   }
//   return formCard;
// };

export function saveAccToLS(accCard: IAccountCard) {
  const accSlice: IAccountCard = Object.assign(accCard);
  const fr = new FileReader();
  fr.addEventListener('load', () => {
    const lsAccounts = localStorage.getItem('accounts');
    if (typeof fr.result === 'string') accSlice.img = fr.result;
    if (lsAccounts) {
      const accountsArr: IAccountCard[] = JSON.parse(lsAccounts);
      accountsArr.push(accSlice);
      localStorage.setItem('accounts', JSON.stringify(accountsArr));
    } else {
      localStorage.setItem('accounts', JSON.stringify([accSlice]));
    }
  });
  fr.readAsDataURL(accCard.img[0] as File);
}

export function delAccFromLS(key: string) {
  const lsAccounts = localStorage.getItem('accounts');
  if (lsAccounts) {
    let accountsArr: IAccountCard[] = JSON.parse(lsAccounts);
    accountsArr = accountsArr.filter((item) => item.key !== key);
    localStorage.setItem('accounts', JSON.stringify(accountsArr));
  }
}

export const isAddressValid = (data: string) => {
  const arr = data.trim().split(' ');
  return (
    (arr.some((item) => item.length >= 3) && arr.length >= 3) ||
    'address should be at least 3 words long with one longer than 3 char'
  );
};
export const isBirthDateValid = (data: string) => {
  return (
    Date.now() - new Date(data).getTime() > TEN_YEARS ||
    'you should be older than 10 years to make an order'
  );
};
export const isImageValid = (image: File[]) => {
  return image[0].type === 'image/png' || 'provide image in .png format';
};

export const getAge = (birthDate: string) => {
  return Math.floor((Date.now() - new Date(birthDate).getTime()) / 31556952000);
};
