import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const handleClick = (url: string) => {
    window.location.href = url; // ここでURLへリダイレクト
  };

const RedirectButton = (url: string) => {
    return (
        <button>
            <FontAwesomeIcon icon={faTwitter} onClick={() => handleClick(url)} />
        </button>
    );
};

export default RedirectButton