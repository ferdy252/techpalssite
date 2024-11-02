import { lazy, Suspense, ComponentType } from 'react';
import { LucideProps } from 'lucide-react';

interface LazyIconProps extends Omit<LucideProps, 'ref'> {
  iconName: string;
}

const LazyIcon = ({ iconName, ...props }: LazyIconProps) => {
  const IconComponent = lazy<ComponentType<LucideProps>>(() => 
    import('lucide-react').then(module => ({
      default: module[iconName as keyof typeof module] as ComponentType<LucideProps>
    }))
  );

  return (
    <Suspense fallback={<div className="w-12 h-12 animate-pulse bg-gray-200 rounded" />}>
      <IconComponent {...props} />
    </Suspense>
  );
};

export default LazyIcon; 