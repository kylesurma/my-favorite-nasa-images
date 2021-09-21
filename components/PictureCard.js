import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favorites";

export default function PictureCard(props) {
  const dispatch = useDispatch();
  const memo = useSelector((state) => state.favorites.memo);
  const { title, date, url, hdurl, desc } = props;
  const favorited = memo[url];

  const handleClick = (event, image) => {
    console.log(image.url)
    if (favorited) {
      dispatch(removeFavorite(image.url));
    } else {
      dispatch(addFavorite(image));
    }
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        action={
          <IconButton aria-label="heart" onClick={(e) => handleClick(e, props)}>
            <FavoriteIcon sx={{ color: favorited ? "red" : "grey" }} />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia component="img" height="400" image={url} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
