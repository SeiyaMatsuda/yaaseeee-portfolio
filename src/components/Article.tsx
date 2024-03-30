import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Imp2FontImage from "../img/article/Impressions2Font.png";
import FontWithImage from "../img/article/Font_with_missing_impressions.png";
import SharedLatentImage from "../img/article/Shared_Latent_Space.png";
import { auto } from "@popperjs/core";
import { useState } from "react";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import "./scss/Article.scss";

type PaperData = {
  img: string;
  title: string;
  coference: string;
  published_date: string;
  author: string;
  arxiv_page: string;
  abstract: string;
};
type PaperDataList = PaperData[];

const paperDataList: PaperDataList = [
  {
    img: Imp2FontImage,
    title: "Impressions2Font: Generating Fonts by Specifying Impressions",
    coference:
      "16th International Conference on Document Analysis and Recognition (ICDAR2021)",
    author: "Seiya Matsuda, Akisato Kimura, Seiichi Uchida",
    published_date: "2021-03-18",
    arxiv_page: "https://arxiv.org/abs/2103.10036",
    abstract:
      "様々なフォントは私たちに様々な印象を与え、それは多くの場合、言葉で表現される。本稿では、特定の印象を与えるフォント画像を生成するImpressions2Font（Imp2Font）を提案する。Imp2Fontは、条件付き生成逆数ネットワーク（GAN）の拡張版である。より正確には、Imp2Fontはフォント画像を生成する条件として、任意の数の印象語を受け付ける。これらの印象語は、単語埋め込み技術に基づいて構築された印象埋め込みモジュールによって、ソフト制約ベクトルに変換される。質的および量的評価により、Imp2Fontは、複数の印象語や未学習語さえも提供することで、比較手法よりも高品質なフォント画像を生成することが証明された。",
  },
  {
    img: FontWithImage,
    title: "Font Generation with Missing Impression Labels",
    author: "Seiya Matsuda, Akisato Kimura, Seiichi Uchida",
    coference:
      "26th International Conference on Pattern Recognition (ICPR2022)",
    published_date: "2022-03-19",
    arxiv_page: "https://arxiv.org/abs/2203.10348",
    abstract:
      "様々なフォントは私たちに様々な印象を与え、それは多くの場合、言葉で表現される。本稿では、特定の印象を与えるフォント画像を生成するImpressions2Font（Imp2Font）を提案する。Imp2Fontは、条件付き生成逆数ネットワーク（GAN）の拡張版である。より正確には、Imp2Fontはフォント画像を生成する条件として、任意の数の印象語を受け付ける。これらの印象語は、単語埋め込み技術に基づいて構築された印象埋め込みモジュールによって、ソフト制約ベクトルに変換される。質的および量的評価により、Imp2Fontは、複数の印象語や未学習語さえも提供することで、比較手法よりも高品質なフォント画像を生成することが証明された。",
  },
  {
    img: SharedLatentImage,
    title: "Shared Latent Space of Font Shapes and Their Noisy Impressions",
    author:
      "Jihun Kang, Daichi Haraguchi, Seiya Matsuda, Akisato Kimura, Seiichi Uchida",
    coference: "28th International Conference on Multimedia Modeling (MMM2022)",
    published_date: "2021-11-02",
    arxiv_page: "https://arxiv.org/abs/2103.12347",
    abstract:
      "書体やフォントのスタイルはしばしば、重厚、現代的、エレガントといった特定の印象と結びついている。このことは、フォントの形状とその印象には一定の相関関係があることを示している。この相関関係を理解するために、本稿ではフォントとその印象が近傍に埋め込まれた共有潜在空間を実現する。難しいのは、フォントに付随する印象語がしばしば非常にノイズが多いことである。これは、印象語が非常に主観的で多様であるためである。さらに重要なことに、いくつかの印象語はフォントの形状とは直接関係がなく、共有潜在空間の実現を妨害する。そこで我々は、DeepSetsを用いて、共有潜在空間を学習する際に、形状に関連する単語を強調し、形状に関連しない単語を自動的に抑制する。大規模なフォント印象データセットを用いた定量的・定性的な実験結果から、提案手法による共有潜在空間は、特に形状に関連する印象語について、相関を適切に記述することが実証された。",
  },
];

const PublishedPaperList = () => {
  const [openAbstract, setOpenAbstract] = useState(false);
  const [selectedAbstract, setSelectedAbstract] = React.useState("");

  const handleClickOpen = (summary: string) => {
    setSelectedAbstract(summary);
    setOpenAbstract(true);
  };

  const handleClose = () => {
    setOpenAbstract(false);
  };

  return (
    <>
      <Box className="awardsBox">
        <Typography variant="h4">Publication</Typography>
        <Typography variant="body1">
          過去に出版した論文はこちらからアクセスをお願いします。
        </Typography>
        {paperDataList.map((item) => (
          <Box className="awardsItem">
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={<a href={item.arxiv_page}>{item.title}</a>}
                subtitle={item.coference}
                position="below"
                actionIcon={
                  <IconButton
                    className="iconButton"
                    sx={{ color: "rgba(0, 0, 0, 0.54)" }}
                    aria-label={`abstract about ${item.title}`}
                    onClick={() => handleClickOpen(item.abstract)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Box>
        ))}
        {/* </ImageList> */}
        <Dialog open={openAbstract} onClose={handleClose}>
          <DialogTitle sx={{ color: "#265073", fontWeight: "bold" }}>
            要旨
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{selectedAbstract}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default PublishedPaperList;
