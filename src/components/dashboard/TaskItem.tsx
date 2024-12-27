// src/components/dashboard/TaskItem.tsx
import { Calendar } from 'lucide-react';
import { TaskItemProps } from '@/types/components';

export const TaskItem = ({
                             task,
                             date,
                             // status = 'pending'
                         }: TaskItemProps) => {
    return (
        <div className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg border border-transparent hover:border-emerald-100">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-100 text-emerald-700">
                    <Calendar className="w-4 h-4" />
                </div>
                <span className="font-medium text-emerald-800">{task}</span>
            </div>
            <span className="text-sm text-emerald-600 font-medium">{date}</span>
        </div>
    );
};