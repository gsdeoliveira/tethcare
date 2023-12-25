import logo from '../../assets/Logo.png'
import localizacao from '../../assets/localizacao.svg'
import telefone from '../../assets/telefone.svg'
import email from '../../assets/email.svg'

const Footer = () => {
  return (
    <footer className="bg-cyanPrimary">
      <div className="bg-cyanPrimary pt-[200px] sm:pt-[150px] pb-[50px] px-[30px] items-center md:items-start flex flex-col md:flex-row  justify-center gap-[50px]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text-darkGray flex flex-col gap-[10px] text-center md:text-start">
          <h3 className="text-[24px] font-bold">Entre em Contato</h3>
          <div className="flex gap-[10px] self-center">
            <img src={localizacao} alt="" />
            <p>Rua dos Sorrisos, 1332, Fortaleza - CE</p>
          </div>
          <div className="flex gap-[10px] items-center self-center md:self-start">
            <img src={telefone} alt="" />
            <p>+55 &#40;85&#41; 99999-9999</p>
          </div>
          <div className="flex gap-[10px] items-center self-center md:self-start">
            <img src={email} alt="" />
            <p>tethcare@contato.com.br</p>
          </div>
          <div className="flex gap-[10px] self-center md:self-start">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0045 2.90625C15.1339 1.03125 12.6429 0 9.99554 0C4.53125 0 0.0848214 4.44643 0.0848214 9.91071C0.0848214 11.6562 0.540179 13.3616 1.40625 14.8661L0 20L5.25446 18.6205C6.70089 19.4107 8.33036 19.8259 9.99107 19.8259H9.99554C15.4554 19.8259 20 15.3795 20 9.91518C20 7.26786 18.875 4.78125 17.0045 2.90625ZM9.99554 18.1563C8.51339 18.1563 7.0625 17.7589 5.79911 17.0089L5.5 16.8304L2.38393 17.6473L3.21429 14.6071L3.01786 14.2946C2.19196 12.9821 1.75893 11.4688 1.75893 9.91071C1.75893 5.37054 5.45536 1.67411 10 1.67411C12.2009 1.67411 14.2679 2.53125 15.8214 4.08929C17.375 5.64732 18.3304 7.71429 18.3259 9.91518C18.3259 14.4598 14.5357 18.1563 9.99554 18.1563ZM14.5134 11.9866C14.2679 11.8616 13.0491 11.2634 12.8214 11.183C12.5938 11.0982 12.4286 11.058 12.2634 11.308C12.0982 11.558 11.625 12.1116 11.4777 12.2813C11.3348 12.4464 11.1875 12.4688 10.942 12.3438C9.48661 11.6161 8.53125 11.0446 7.57143 9.39732C7.31696 8.95982 7.82589 8.99107 8.29911 8.04464C8.37946 7.87946 8.33929 7.73661 8.27679 7.61161C8.21429 7.48661 7.71875 6.26786 7.51339 5.77232C7.3125 5.29018 7.10714 5.35714 6.95536 5.34821C6.8125 5.33929 6.64732 5.33929 6.48214 5.33929C6.31696 5.33929 6.04911 5.40179 5.82143 5.64732C5.59375 5.89732 4.95536 6.49554 4.95536 7.71429C4.95536 8.93304 5.84375 10.1116 5.96429 10.2768C6.08929 10.442 7.70982 12.942 10.1964 14.0179C11.7679 14.6964 12.3839 14.7545 13.1696 14.6384C13.6473 14.567 14.6339 14.0402 14.8393 13.4598C15.0446 12.8795 15.0446 12.3839 14.9821 12.2813C14.9241 12.1696 14.7589 12.1071 14.5134 11.9866Z"
                fill="#223231"
              />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10.0605C20 4.53635 15.5242 0.0605469 10 0.0605469C4.47581 0.0605469 0 4.53635 0 10.0605C0 15.0517 3.65685 19.1888 8.4375 19.9396V12.9513H5.89718V10.0605H8.4375V7.85732C8.4375 5.35127 9.92944 3.967 12.2145 3.967C13.3089 3.967 14.4532 4.16216 14.4532 4.16216V6.62184H13.1919C11.95 6.62184 11.5625 7.3928 11.5625 8.18353V10.0605H14.3359L13.8923 12.9513H11.5625V19.9396C16.3431 19.1888 20 15.0517 20 10.0605Z"
                fill="#223231"
              />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0022 4.87361C7.16453 4.87361 4.87563 7.16251 4.87563 10.0002C4.87563 12.8379 7.16453 15.1268 10.0022 15.1268C12.8399 15.1268 15.1288 12.8379 15.1288 10.0002C15.1288 7.16251 12.8399 4.87361 10.0022 4.87361ZM10.0022 13.3332C8.16843 13.3332 6.66927 11.8385 6.66927 10.0002C6.66927 8.16195 8.16397 6.66725 10.0022 6.66725C11.8405 6.66725 13.3352 8.16195 13.3352 10.0002C13.3352 11.8385 11.836 13.3332 10.0022 13.3332ZM16.5343 4.6639C16.5343 5.32871 15.9989 5.85966 15.3385 5.85966C14.6737 5.85966 14.1428 5.32425 14.1428 4.6639C14.1428 4.00356 14.6782 3.46814 15.3385 3.46814C15.9989 3.46814 16.5343 4.00356 16.5343 4.6639ZM19.9297 5.87751C19.8539 4.27573 19.488 2.85688 18.3146 1.68788C17.1456 0.518894 15.7267 0.153027 14.1249 0.0727147C12.4741 -0.020983 7.52593 -0.020983 5.87507 0.0727147C4.27775 0.148565 2.8589 0.514432 1.68544 1.68342C0.511991 2.85241 0.150586 4.27126 0.0702733 5.87305C-0.0234244 7.52391 -0.0234244 12.472 0.0702733 14.1229C0.146124 15.7247 0.511991 17.1435 1.68544 18.3125C2.8589 19.4815 4.27328 19.8474 5.87507 19.9277C7.52593 20.0214 12.4741 20.0214 14.1249 19.9277C15.7267 19.8519 17.1456 19.486 18.3146 18.3125C19.4835 17.1435 19.8494 15.7247 19.9297 14.1229C20.0234 12.472 20.0234 7.52838 19.9297 5.87751ZM17.797 15.8942C17.449 16.7688 16.7752 17.4425 15.8963 17.795C14.58 18.317 11.4568 18.1965 10.0022 18.1965C8.54769 18.1965 5.41997 18.3125 4.1082 17.795C3.23369 17.4469 2.55996 16.7732 2.20747 15.8942C1.68544 14.578 1.80591 11.4548 1.80591 10.0002C1.80591 8.54567 1.68991 5.41795 2.20747 4.10618C2.55549 3.23167 3.22922 2.55793 4.1082 2.20545C5.42443 1.68342 8.54769 1.80389 10.0022 1.80389C11.4568 1.80389 14.5845 1.68788 15.8963 2.20545C16.7708 2.55347 17.4445 3.2272 17.797 4.10618C18.319 5.42241 18.1985 8.54567 18.1985 10.0002C18.1985 11.4548 18.319 14.5825 17.797 15.8942Z"
                fill="#223231"
              />
            </svg>

            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9442 4.92615C17.9569 5.10381 17.9569 5.2815 17.9569 5.45916C17.9569 10.8779 13.8326 17.1216 6.29444 17.1216C3.97209 17.1216 1.81473 16.449 0 15.2815C0.329962 15.3196 0.64719 15.3323 0.989848 15.3323C2.90607 15.3323 4.67006 14.6851 6.0787 13.581C4.27666 13.5429 2.7665 12.3627 2.24618 10.7384C2.50001 10.7764 2.7538 10.8018 3.02032 10.8018C3.38833 10.8018 3.75638 10.751 4.099 10.6622C2.22083 10.2815 0.812152 8.63175 0.812152 6.63936V6.58862C1.35782 6.89319 1.99239 7.08354 2.66493 7.10889C1.56087 6.37283 0.837542 5.1165 0.837542 3.69517C0.837542 2.93376 1.04055 2.23579 1.3959 1.62664C3.41369 4.11396 6.4467 5.7383 9.8477 5.916C9.78426 5.61143 9.74617 5.2942 9.74617 4.97693C9.74617 2.71802 11.5736 0.87793 13.8452 0.87793C15.0254 0.87793 16.0914 1.37285 16.8401 2.17235C17.7665 1.99469 18.6548 1.65203 19.4416 1.1825C19.137 2.1343 18.4898 2.9338 17.6396 3.44138C18.4645 3.35259 19.264 3.12411 20 2.80688C19.4417 3.61903 18.7437 4.34236 17.9442 4.92615Z"
                fill="#223231"
              />
            </svg>
          </div>
        </div>
        <div className="text-darkGray flex flex-col gap-[10px]">
          <h3 className="text-[24px] font-bold text-center md:text-start">
            Horários de Atendimento
          </h3>
          <div className="flex flex-col self-center md:self-start">
            <p className="font-bold text-center md:text-start">
              Segunda - Sexta
            </p>
            <p className=" text-center md:text-start">07:00h - 18:00h</p>
          </div>
          <div className="flex flex-col self-center md:self-start">
            <p className="font-bold text-center md:text-start">Sábado</p>
            <p className=" text-center md:text-start">07:00h - 17:00h</p>
          </div>
          <div className="flex flex-col self-center text-center md:self-start">
            <p className="font-bold text-center md:text-start">Domingo</p>
            <p className=" text-center md:text-start">07:00h - 12:00h</p>
          </div>
        </div>
      </div>
      <div className="text-darkGray text-center pb-[10px]">
        <p>TethCare © Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
