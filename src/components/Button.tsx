import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  target,
  rel
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 relative overflow-hidden group no-underline";
  
  const sizeClasses = {
    sm: "text-sm",
    md: "text-sm", 
    lg: "text-base"
  };
  
  const sizeStyles = {
    sm: { padding: '8px 12px' },
    md: { padding: '12px 20px' },
    lg: { padding: '12px 20px' }
  };
  
  const variantClasses = {
    primary: "bg-[#ff4757] text-white rounded-[30px] shadow-lg hover:-translate-y-1 hover:shadow-xl",
    secondary: "bg-transparent text-[#e0e0e0] border-2 border-white/30 rounded-[30px] hover:border-[#ff4757] hover:text-[#ff4757]",
    outline: "bg-transparent text-[#e0e0e0] border-2 border-[#ff4757] rounded-[30px] hover:text-white"
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  const styles = { ...sizeStyles[size] };
  
  const content = (
    <>
      {variant === 'outline' && (
        <span className="absolute inset-0 bg-[#ff4757] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
      )}
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
      )}
      <span className="relative z-10">{children}</span>
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} style={styles} target={target} rel={rel}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} style={styles}>
      {content}
    </button>
  );
} 