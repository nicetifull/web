import PageHeader from '@/app/shared/page-header';
import Counter from '@/components/counter';
import { Input } from '@/components/ui/input';

const pageHeader = {
  title: 'Blank page',
  breadcrumb: [
    {
      href: '/',
      name: 'Home',
    },
    {
      name: 'Blank',
    },
  ],
};

export default function BlankPage() {
  return (
    <>

      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <div className='grid grid-cols-4 gaps-4'>
      <Input type="text"></Input>
      <Input type="text"></Input>
      </div>
    </>
  );
}
