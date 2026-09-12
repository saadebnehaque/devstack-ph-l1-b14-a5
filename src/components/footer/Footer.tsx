import logo from '../../assets/logo-text.png';
import { footLinks } from './footLink';
import type { FootLinkType } from '../../assets/types/type'
const Footer = () => {



    return (
        <footer className='border-t border-[#F1F5F9] pt-8 lg:pt-16 pb-12 '>
            <div className='container mx-auto space-y-3 lg:space-y-14'>
                <div className=' lg:grid grid-cols-5 gap-10'>
                    <div className='col-span-2 text-center lg:text-left flex
                 flex-col items-center lg:items-start gap-4'>
                        <img src={logo} alt="Dev Stack logo" />
                        <p className=' text-[#64748B] text-xs leading-5'>Curated tools, technologies, and resources for developers building modern software.</p>
                        <ul className=' lg:font-semibold text-xs font-semibold flex gap-4'>
                            <li><a href="" className='hover:text-secondary'>GitHub</a></li>
                            <li className=' lg:hidden'>•</li>
                            <li><a href="" className='hover:text-secondary'>Twitter</a></li>
                            <li className=' lg:hidden'>•</li>
                            <li><a href="" className='hover:text-secondary'>LinkedIn</a></li>
                        </ul>
                    </div>
                    {
                        footLinks.map((footLink: FootLinkType, i) =>
                            <div key={i} className='hidden lg:block'>
                                <h3 className=' font-bold text-xs text-[#0F172A] mb-4  '>{footLink.category}</h3>
                                <ul className=' text-[#64748B] text-xs space-y-2.5 '>
                                    {footLink.links.map(link =>
                                        <li key={link.name}><a href={link.path} className='hover:underline'>{link.name}</a></li>
                                    )}
                                </ul>
                            </div>)
                    }
                </div>
                <div className='text-xs text-[#9CA3AF] flex items-center justify-between pt-4 lg:pt-8 px-6 lg:px-0 border-t border-[#F1F5F9]'>
                    <span>© 2026 Dev Stack. All rights reserved.</span>
                    <ul className='flex items-center gap-2 lg:gap-6'>
                        <li className='hover:underline'><a href="">Privacy</a></li>
                        <li className='hover:underline'><a href="">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;