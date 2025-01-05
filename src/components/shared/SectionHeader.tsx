interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

export const SectionHeader = ({ title, subtitle }:  SectionHeaderProps ) => {
    return (
        <div className="bg-emerald-600 text-white p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-emerald-50/90">{subtitle}</p>
        </div>
    );
};

// También podemos crear una variante con fondo blanco
// export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
//     return (
//         <div className="bg-white border-b border-emerald-100 p-4">
//             <h2 className="text-lg font-semibold text-emerald-800">{title}</h2>
//             <p className="text-sm text-emerald-600/90 mt-0.5">{subtitle}</p>
//         </div>
//     );
// }