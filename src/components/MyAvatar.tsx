import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SnsList from "./MySns";
import TopImage from '../img/profile_image/seiya_matsuda.jpg'
const YaaseeeAvatar: React.FC = () => {

  return (
    <>
        <Box display="flex" justifyContent="center" pt={10}>
        <Avatar
          alt="Matsuda Seiya" src={TopImage}
          sx={{ width: 300, height: 300 }}
        />
        </Box>
    
        <Box
            height={300}
            width={600}
            mx="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <div>
                <Typography variant="h5" sx={{    //   paddingTop: 25, 
                    color: "#265073",
                    // fontWeight: "bold",
                    fontSize: "40px",
                    fontFamily: "Noto Sans JP"
                }}>松田　征也</Typography>
                <Typography variant="h6" sx={{
                      color: "#265073",
                      fontFamily: "Roboto"
                }}>Seiya Matsuda</Typography>
                <SnsList />
                <Typography variant="body1" textAlign={"center"} mt={1}>
                AI領域を専門としています。
                業務では自然言語処理・画像認識技術の社会への適用可能性の技術検証やシステム開発に従事しています。個人ではKaggle等のデータ分析コンペティションを趣味としてやっています。
                </Typography>
            </div>
        </Box>

    </>
  );
};

export default YaaseeeAvatar;
