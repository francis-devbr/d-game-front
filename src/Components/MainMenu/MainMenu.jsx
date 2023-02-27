import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "../Shared/Paper/Paper";
import Button from "../Shared/Button/Button";
import Typography from "../Shared/Typography/Typography";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/API";
import { useDispatch } from "../../utils/hooks";
import { setInLobby, setPlayerId } from "../../stores/features/gameSlice";
import "./MainMenu.css";

const style = {
  color: "#fff",
};

const MainMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onPlayOnline = () => {
    API.playOnline(true);
  };

  const onPlayOffline = async () => {
    API.playOnline(false);
    const playerId = await API.joinServer();
    dispatch(setPlayerId(playerId));
    dispatch(setInLobby(true));
    navigate("/waiting-lobby");
  };

  return (
    <Paper key="main-menu" className="bg-wallet">
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item xs={10}>
        </Grid>
        <Grid
          item
          container
          alignItems="start"
          justifyContent="left"
          spacing={2}
          sx={12}
        >
          <Grid item xs={12} md={5}>
            <button className="btn-dracards-vs-b w-50">VS BOT</button>
            <button className="btn-dracards-vs-p w-50">VS PLAYER</button>
            <div className="box-dracards">
              <p className="title-box-dracards" style={{fontFamily:'BIG_NOODLE_TITLING'}}>NAME OF DECK</p>
              <small>50/50</small>
            </div>
          </Grid>

          <Grid item xs={12} md={5} >
            <button className="btn-game-mode">GAME MODE V <i class="fas fa-arrow-circle-down"></i></button>
            <div className="box-dracards">
              <div className="box-mode text-left">
                <p className="title-box-dracards">Casual</p>
                <small>Improve your skills</small>
              </div>
              <div className="box-mode">
                <p className="title-box-dracards">PRIVATE</p>
                <small>Battle your friedns</small>
              </div>
              <div className="box-mode">
                <p className="title-box-dracards">RANKED</p>
                <small>Become a Markevian</small>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={12}
        > 
          <Grid item xs={12} md={5}>
            <Button
              disabled={!API.isOnline}
              style={{ width: "80%" }}
              href="/create-server"
              onClick={onPlayOnline}
            >
              <img src="assets/icons/add.svg" alt="" />
              <Typography>Create A Game</Typography>
            </Button>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "initial" } }} md={2}>
            <Typography>OR</Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Button
              disabled={!API.isOnline}
              style={{ width: "80%" }}
              href="/join-server"
              onClick={onPlayOnline}
            >
              <img src="assets/icons/glob.svg" alt="" />
              <Typography>Join A Game</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={5} mt={3}>
            <Button style={{ width: "80%" }} onClick={onPlayOffline}>
              <img src="assets/icons/tv.svg" alt="" />
              <Typography>Play with PC</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center" mt={6}>
          <Grid item xs={6}>
            <Link style={style} to="/create-user">
              Profile Setting
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          sx={12}
        >
          <Grid item xs={6}>
            <a
              style={style}
              href="https://www.dracards.com"
              target="_blank"
              rel="noreferrer"
            >
              Game Rules
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainMenu;
