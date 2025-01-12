import { useState } from "react";
import {
  FormContainer,
  Title,
  FormItem,
  Ava,
  InputContainer,
  InputUserNameError,
  InputUserName,
  ButtonNext,
  PaginationPage,
} from "./styledComponentsForm";
import CountrySelector from "./CountrySelector";
import ChangePhoto from "./ChangePhoto/ChangePhoto";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedAvatar } from "redux/slices/avatarSlice";
import CategoryChat from "./CategotyChat/CategoryChat";
import { updateUserName } from "redux/slices/userNameSlice";
import { avatarList } from "data/avatarList";
import ReactCountryFlag from "react-country-flag";
import { selectCountry } from "redux/slices/countrySlice";

const Form = () => {
  const avaNoPhotoSVG = "/static/Ava/NoPhoto.svg";
  const selectedAvatarID = useSelector(selectSelectedAvatar);
  const selectedUserAvatar = avatarList.find(
    (avatar) => avatar.id === selectedAvatarID
  );

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");

  const handleInputChangeUserName = (e) => {
    const regex = /^[a-zA-Z0-9]*$/;
    setUserName(e.target.value);

    if (regex.test(e.target.value)) {
      setError(false);
      setErrorMessage(false);
    } else {
      setError(true);
      setErrorMessage("Please use only Latin letters and Arabic numerals");
    }
  };

  const [cheked, setCheked] = useState(false);
  const isCheked = () => {
    setCheked(!cheked);
  };

  const [next, setNext] = useState(false);
  const nextButton = () => {
    if (userName.length < 3 || userName.length > 25) {
      setError(true);
      setErrorMessage(
        "You must use a minimum of 3 to a maximum of 25 characters"
      );
    } else {
      dispatch(updateUserName(userName));
      setNext(!next);
    }
  };
  const selectedCountry = useSelector(selectCountry);

  return (
    <FormContainer>
      <Title>
        <h2>let's create your account</h2>
        <p>Choose your username and photo to personalize your account</p>
      </Title>
      <FormItem>
        <Ava>
          <img
            src={selectedUserAvatar ? selectedUserAvatar.src : avaNoPhotoSVG}
            alt="It your's Avatar"
          />
          {/* <div> */}
          <ReactCountryFlag
            countryCode={selectedCountry}
            svg
            style={{
              width: "2rem",
              height: "2rem",
              position: "relative",
              top: "-33px",
              left: "0px",
            }}
          />
          {/* </div> */}
          <p onClick={isCheked}>Change Photo</p>
          {cheked ? <ChangePhoto isCheked={isCheked} /> : ""}
        </Ava>
        <InputContainer>
          <InputUserName $errors={error}>
            <p>Username</p>
            <input
              type="text"
              value={userName}
              onChange={handleInputChangeUserName}
            />
            <InputUserNameError>{errorMessage}</InputUserNameError>
          </InputUserName>
          <CountrySelector />
          <PaginationPage>
            <div></div>
            <div></div>
          </PaginationPage>
          <ButtonNext $errors={error} onClick={nextButton} disabled={error}>
            Next
          </ButtonNext>
          {next ? (
            <CategoryChat next={next} nextButton={nextButton} />
          ) : (
            <CategoryChat next={next} nextButton={nextButton} />
          )}
        </InputContainer>
      </FormItem>
    </FormContainer>
  );
};
export default Form;
