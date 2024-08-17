import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import dev from "@/assets/images/devloper.jpg";
import test from "@/assets/images/tester.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

interface PositionsProps {
  title: string;
  address: string;
  image?: string; // Optional property
}

interface PositionsClick {
    onApplyClick: () => void;
}

const positions: PositionsProps[] = [
  {
    title: "Developer",
    address: "Kiều Mai, Phú Diễn, Từ Liêm, Hà Nội",
    image: dev,
  },
  {
    title: "Tester",
    address: "Kiều Mai, Phú Diễn, Từ Liêm, Hà Nội",
    image: test,
  },
];



export const Positions: React.FC<PositionsClick> = ({ onApplyClick }) => {
  return (
    <section id="training" className="container py-24 sm:py-32 space-y-8 ">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-left ">
        Các vị trí ứng tuyển tại{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
          FPLHN-FACTORY
        </span>
      </h2>

      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {positions.map((position, index) => (
          <Card
            key={index}
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <CardHeader className="relative">
            <img
  src={position.image || "path/to/default-image.jpg"}
  alt={position.title}
  className="w-50 h-48 object-cover transition-opacity hover:opacity-80 rounded-xl"
/>
              <span className="absolute top-2 left-2 px-2 py-1 text-white font-bold rounded animate-gradient">
                HOT
              </span>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-black mb-3">
              {position.title}
              <p className="flex items-center text-xl text-gray-400 mt-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-green-600 mr-2"
                />
                <div className="flex items-center text-sm">
  <span className="font-bold text-gray-700 mr-2">Địa điểm:</span>
  <span className="font-medium text-gray-600 italic">{position.address}</span>
</div>
              </p>
            </CardContent>
            <CardFooter>
            <button
        onClick={onApplyClick}
        className="bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors hover:bg-orange-700"
      >
        Ứng tuyển
      </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
