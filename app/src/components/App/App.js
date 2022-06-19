import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Activity from '../Activity/Activity';
import ListActivities from '../ListActivities/ListActivities';

import Login from '../Login/Login';

import activities from '../../data/activities';
import CreateActivity from '../CreateActivity/CreateActivity';
import CreateProfile from '../CreateProfil/CreateProfile';
import Map from '../Map/Map';
import Settings from '../Settings/Settings';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import Usersettings from '../Settings/Usersettings/Usersettings';
import Notification from '../Settings/Notification/Notification';
import LegalMention from '../Settings/LegalMention/LegalMention';
import Help from '../Settings/Help/Help';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/activity/:id' element={<Activity />} />
        <Route
          path='/activity/:id'
          element={<Activity activities={activities} />}
        />
        <Route
          path='/profile'
          element={<Profile /* activities={activities} */ />}
        />
        <Route
          path='/activities'
          element={<ListActivities /* activities={activities} */ />}
        />
        <Route path='/activity/create' element={<CreateActivity />} />

        <Route path='/createProfil' element={<CreateProfile />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/profile/create' element={<CreateProfile />} />
        <Route path='/search' element={<Search />} />

        <Route path='/settings' element={<Settings />} />
        <Route path='/settings/user' element={<Usersettings />} />
        <Route path='/settings/notifications' element={<Notification />} />
        <Route path='/settings/legalMention' element={<LegalMention />} />
        <Route path='/settings/help' element={<Help />} />

        <Route path='/map' element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
