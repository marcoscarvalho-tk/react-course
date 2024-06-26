import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({children}, ref) {

  
  // o atributo onClick é responsável por chamar a o metodo 
  // close() buit-in em <dialog> e resetar o modal no botão "Close"
  // https://react.dev/learn/synchronizing-with-effects#controlling-non-react-widgets

  // O hook useImperativHandle() permite chamar uma função (e.g showModal()) 
  // dentro do componente (e.g Modal ), através de uma função personalizavel
  // (e.g open()) no componente superior (pai) App.jsx
  // neste caso não foi usado devido a simplicidade do projeto.
  // https://react.dev/reference/react/useImperativeHandle#useimperativehandle

  // O hook createPortal() permite a realocação do elemento dialog diretamente 
  // para a main junto ao App, sobrepondo-se às demais evitando erro na exibição. 

  // useImperativeHandle(ref,() => {
  //     return{
  //         open(){
  //             dialog.current.showModal();
  //         }
  //     };
  // });
  return createPortal(
   <dialog ref={ref} className="result-modal">
      <strong>
        <p>
         {children}
        </p>{" "}
        <br />
      </strong>
      <button onClick={()=>ref.current.close()}>Close</button>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
