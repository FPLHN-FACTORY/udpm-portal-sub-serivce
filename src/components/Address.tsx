import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Address = () => {
  return (
    <div className="grid grid-cols-2 my-[100px]">
      <div className="ml-[160px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59581.88940659078!2d105.6707091486328!3d21.037963500000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455305afd834b%3A0x17268e09af37081e!2sT%C3%B2a%20nh%C3%A0%20FPT%20Polytechnic.!5e0!3m2!1svi!2s!4v1737076508434!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="ml-[100px] mt-[70px]">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-left ">
          Văn phòng của{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-600">
            FPLHN-FACTORY
          </span>
        </h2>
        <div className="text-xl text-gray-400 mt-[50px]">
          {" "}
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-orange-600 mr-2"
          />{" "}
          <span>
            Tầng 2, Tòa L, FPT Polytechnic cơ sở Trịnh Văn Bô, Xuân Phương,
            Từ Liêm, Hà Nội
          </span>
          <div className="text-xl text-gray-400 mt-[50px]">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-orange-600 mr-2"
            />
            <span>fplhnudpm@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
