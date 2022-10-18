import React from "react";
import AddPage from "./pages/AddPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/404";
//import { Link } from 'react-router-dom';
import ArchivePage from "./pages/ArchivePage";
import RegisterPage from "./pages/RegisterPage";
import Navigation from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data"
import { LocaleProvider } from "./contexts/LocaleContext";
import Content from "./pages/Content";
import { ThemeProvider } from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem("theme") || "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);

          return {
            theme: newTheme,
          };
        });
      },
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        //initializing: true,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });

    putAccessToken('');
  }

  

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
        <LocaleProvider value={this.state.localeContext}>
          <div className='app-container'>
            <header>
              <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1>
              <Content />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
        </ThemeProvider>
      )
    }
    return (
      <ThemeProvider value={this.state}>
      <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
          <header>
            <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1>
            <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/arsip" element={<ArchivePage />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
      </ThemeProvider>
    );

  }
}

export default App;
