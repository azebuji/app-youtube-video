import { subDays } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { DateRange, Range } from 'react-date-range';

import moment from 'moment';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface DateRangeCompProps {
    verifyFilters: Function;
}


const DateRangeComp: React.FC<DateRangeCompProps> = ({ verifyFilters }) => {
    const [range, setRange] = useState<Range[]>([
        {
            startDate: subDays(new Date(), 7),  // pega de 1 semana atras
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const [open, setOpen] = useState(false);
    const refOne = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    const hideOnEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    const hideOnClickOutside = (e: MouseEvent) => {
        if (refOne.current && !refOne.current.contains(e.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (range[0] && range[0].startDate) {
            verifyFilters("dtStart", moment(range[0].startDate).format("YYYY-MM-DD"))
        }
        if (range[0] && range[0].endDate) {      
            verifyFilters("dtEnd", moment(range[0].endDate).format("YYYY-MM-DD"))
        }
    }, [range])


    return (
        <div className='date-range-container zIndexZero'>
            <input
                value={` ${range[0].startDate ? moment(range[0].startDate).format('DD/MM/YYYY') + ' a ' + moment(range[0].endDate).format('DD/MM/YYYY') : 'Periodo'} `}
                readOnly
                onClick={() => setOpen((open) => !open)}
                className='date-range-input'
            />

            <div ref={refOne}>
                {open && (
                    <DateRange
                        onChange={(item) => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="dateRangeCalendar"
                        showDateDisplay={false}
                        dragSelectionEnabled={true}
                    />
                )}
            </div>
        </div>
    );
};

export default DateRangeComp;
