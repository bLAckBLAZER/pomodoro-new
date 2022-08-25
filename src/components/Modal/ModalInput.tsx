type ModalInputProps = {
  text: string;
  type: string;
  id?: string | number;
  placeholder?: string;
};

export const ModalInput = ({
  text,
  type,
  id,
  placeholder,
}: ModalInputProps) => {
  return <input type="text" id="task-title" />;
};
