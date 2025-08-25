
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import type { ProcessStep } from '../types';

const ProcessStepCard: React.FC<{ step: ProcessStep, index: number }> = ({ step, index }) => {
    return (
        <div className="relative flex-1 group">
            <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-brand-gold/50 flex items-center justify-center text-2xl font-bold font-serif text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                    {index + 1}
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                    <div className="flex-grow border-t-2 border-dashed border-brand-gold/50 mx-4"></div>
                )}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                 <div className="mb-3">{step.icon}</div>
                <h3 className="text-xl font-serif font-bold text-brand-dark">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
        </div>
    );
};

const Process: React.FC = () => {
    return (
        <section id="process" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-brand-dark">A Seamless Journey</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        From selection to delivery, our process is designed to be simple, transparent, and efficient.
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-8 md:space-y-0">
                    {PROCESS_STEPS.map((step, index) => (
                        <ProcessStepCard key={step.id} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
