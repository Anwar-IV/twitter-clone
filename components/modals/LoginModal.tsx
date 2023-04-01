import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

export default function LoginModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) return;
    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //   TODO ADD LOG IN
      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Username"
        value={username}
        disabled={isLoading}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Don&apos;t have an account?
        <span
          onClick={onToggle}
          className="text-white ml-2 cursor-pointer hover:underline"
        >
          Register
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}