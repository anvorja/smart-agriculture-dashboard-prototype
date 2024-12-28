// src/components/shared/TabButton.tsx
import { TabsTrigger } from '@/components/ui/tabs'
import { TabButtonProps } from '@/types/dashboard'


export const TabButton = ({
                              value,
                              icon: Icon,
                              children,
                              className
                          }: TabButtonProps) => {
    return (
        <TabsTrigger
            value={value}
            className={`
        flex items-center justify-center gap-2
        px-3 py-2 rounded-md
        text-emerald-700
        hover:bg-emerald-100/50
        data-[state=active]:bg-emerald-600
        data-[state=active]:text-white
        transition-colors
        ${className}
      `}
        >
            <Icon className="w-4 h-4" />
            <span className="font-medium">{children}</span>
        </TabsTrigger>
    )
}