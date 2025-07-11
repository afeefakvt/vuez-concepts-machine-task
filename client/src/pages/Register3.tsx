import Stepper from '../components/Stepper';
import RegistrationForm from '../components/RegistrationForm';
import bgGrid from '../assets/bg.png';
import logo2 from '../assets/logo2.png';
import nav from '../assets/nav.png'

const Register3 = () => {
  return (
   <div
  className="min-h-screen flex flex-col "
  style={{ backgroundImage: `url(${bgGrid})` }}
>
  <Stepper currentStep={3} />

  <div className="flex flex-col md:flex-row justify-center md:items-start gap-6 px-4 py-6">
    <div className="w-full md:w-2/3 max-w-3xl">
  <RegistrationForm />
</div>

    <div className="w-full md:w-1/3 bg-white rounded shadow relative">
      <img src={nav} className="absolute top-0 left-0 w-full h-[80px] object-cover rounded-t" />
      <img src={logo2} className="absolute top-2 left-2 h-12" />
      <div className="pt-24 p-4 text-center space-y-2">
        <p className="text-sm font-bold">FULL NAME</p>
        <p className="text-sm">Job Title</p>
        <p className="text-sm">Company Name</p>
        <p className="text-sm">Country</p>
        <p className="text-lg font-bold mt-4">BADGE CATEGORY</p>
        <p className="text-xl font-bold text-green-700">VISITOR</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Register3;

