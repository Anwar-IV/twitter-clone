import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

export default function RegisterModal() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onToggle = useCallback(() => {
    if (isLoading) return;
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, loginModal, registerModal]);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //   TODO ADD REGISTER AND LOG IN
      registerModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="First Name"
        type="text"
        value={firstName}
        disabled={isLoading}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        placeholder="Last Name"
        type="text"
        value={lastName}
        disabled={isLoading}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        placeholder="Username"
        type="text"
        value={username}
        disabled={isLoading}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        disabled={isLoading}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white ml-2 cursor-pointer hover:underline"
        >
          Sign in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Sign in"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
