import React from "react";
import Image from "next/image";

const YardTestScoreSheet = () => {
    return (
        <div className="px-8 pt-4 text-gray-800 bg-white">
            <div className="grid grid-cols-2 h-24 text-red-500 items-center font-bold py-1">
                <div className="flex justify-start pl-4">
                    <Image
                        src="/images/DubaiGov.png" alt="Dubai Government Logo" width={200} height={0} />
                </div>
                <div className="flex justify-end">
                    <Image
                        src="/images/RTADubai.png" alt="RTA Logo" width={300} height={0} />
                </div>
            </div>
            <div className="border border-gray-300 text-[10px]">
                <div className="grid grid-cols-2 text-white bg-red-600 items-center font-bold border-b border-gray-300">
                    <p className="text-center">Yard Test Score Sheet</p>
                    <p className="text-center">نموذج فحص الساحة الداخلي</p>
                </div>
                <div className="bg-white grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Driving institute</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>EcoDrive</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">المعهد/المركز</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Trafic File Number</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>16294261</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">رقم ملف المرور</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Lerner&apos;s Name</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>جيان كارلاايسبينو بوند</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">اسم المتدرب</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Examiner&apos;s Name</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p></p>
                            </span>
                            <span className="px-2 w-1/2 text-right">اسم الفاحص</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Examiner&apos;s ID</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>RTA12128</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">رقم الفاحص</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Date</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>9/27/2024</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">التاريخ</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Type of Attempt</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>0</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">نوع تجربج الامتحان</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Start time</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>10:54:41</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">وقت بداية الامتحان</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">End time</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>10:59:04</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">وقت نهاية الامتحان</span>
                        </div>
                        <div className="w-full flex">
                            <span className="px-2 w-1/2 text-left">Vehicle Type</span>
                            <span className="px-2 flex justify-center items-center space-x-1 whitespace-nowrap">
                                <p>B1</p>
                            </span>
                            <span className="px-2 w-1/2 text-right">نوع المركبة</span>
                        </div>
                        <div className="text-md font-bold w-full flex border-t border-gray-300 text-red-500">
                            <span className="px-2 w-1/2 text-left">Important</span>
                            <span className="px-2 w-1/2 text-right">هام</span>
                        </div>
                        <div className="w-full flex items-center border-t border-gray-300">
                            <span className="px-2 w-1/2 text-left">*Accumulation of 6 or more dernerit points in any of the maneuvers below result in a failure. Re-assessment of that maneuver (s) is required</span>
                            <span className="px-2 w-1/2 text-right">يعتبر المتدرب راسبا حال حصوله علي اربع (٦) نقاط سالبة في اي من المناورات أدناه و التالي يجب إعادة فحصه في تلك المناورة</span>
                        </div>
                        <div className="w-full flex items-center border-t-2 border-gray-300">
                            <span className="px-2 w-1/2 text-left">If the candidate performs an improper action that causes accident of near accident, of failing to comply to Traffic Rules and/or any instructions by the Examiner, this shall</span>
                            <span className="px-2 w-1/2 text-right">في حال فيام المرشح بتصرف غير صحيح نتج عنه (أو يكاد) حادث، أو لم يلتزم بقواعد المرور و إرشادات الفاحص، فإنه يترتب علي ذلك رسوب فوري</span>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-5 text-white items-center font-bold border-t border-gray-300 ">
                    <span className="text-left pl-2 col-span-4 bg-red-600 py-1">Check Items Description</span>
                    <span className="text-center bg-red-600 py-1">Start</span>
                    <div className="grid grid-cols-5 col-span-5 border-b border-gray-300">
                        <div className="flex items-center justify-center col-span-4 border-t border-r border-gray-300 text-black font-thin">
                            <span className="w-3/5 p-2 text-left">Not successful in starting the test max within 5 minutes after scheduled exam time</span>
                            <span className="w-2/5 p-2 text-right">الانطلاق - عدم بدء الفحص خلال فترة أقصاها 5 دقائق من الوقت المحدد</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 col-span-5 border-b border-gray-300">
                        <div className="grid grid-cols-4 col-span-4 border-t border-r border-gray-300 text-black font-thin">
                            <span className="col-span-2 p-2 text-left">Reverse vehicle backward more than 30cm after starting the test</span>
                            <span className="col-span-2 p-2 text-right">الانطلاق - الرجوع للخلف بما يزيد على 30 سم عند الانطلاق لبدئ الفحص</span>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-10 border-t border-gray-300 text-white items-center">
                    <div className="font-bold pl-2 col-span-7 bg-red-600 py-1 h-full flex items-center justify-start">
                        <span>Check Items Description</span>
                    </div>
                    <div className="flex col-span-3 grid-cols-subgrid text-center items-center justify-center h-full">
                        <div className="flex flex-col h-full bg-red-600 text-center border-l border-r border-gray-300 pt-1 w-full">
                            <span>الموقف الموازي</span>
                            <span>Parallel Parking</span>
                            <span>(5 min)</span>
                        </div>
                        <div className="flex flex-col h-full bg-red-600 text-center border-r border-gray-300 pt-1 w-full">
                            <span>الموقف العمودي</span>
                            <span>Garage Parking</span>
                            <span>(3 min)</span>
                        </div>
                        <div className="flex flex-col bg-red-600 text-center pt-1 w-full">
                            <span>الموقف الجانبي ٦٠</span>
                            <span>Angel Parking</span>
                            <span>(2 min)</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-10 border-t border-gray-300 text-white items-center">
                    <div className="flex items-center justify-center col-span-1 h-full border-r border-b border-gray-300 row-span-10 text-center text-black font-thin">
                        <span className="px-1">
                            Entry Safety Checks احتياطات السلامة
                        </span>
                    </div>
                    <div className="col-span-9 h-full">
                        <div className="font-bold col-span-9 h-full grid">
                            <div className="col-span-9 grid grid-cols-9 font-bold h-full">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Fail to check left-right mirrors</span>
                                    <span className="text-right">عدم النظر إلى المرآتين يمينا و يسارا</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left"> Fail to check rear windscreen</span>
                                    <span className="text-right"> عدم النظر إلى النافذة الخلفية</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Fail to check right shoulder</span>
                                    <span className="text-right">عدم التحقق من نظرة فوق الكتف الايمن</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left"> Fail to check to the left shoulder while vehicle swings outwards into the bay</span>
                                    <span className="text-right">الموقف الموازي - الدخول - عدم النظر فوق الكتف الأيسر أثناء الرجوع و الالتفاف لدخول الموقف</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left"> Each additional reverse movement while entering the bay</span>
                                    <span className="text-right">الموقف الموازي - القيام بمناورة إضافية للرجوع عند الدخول للموقف</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Enter parking without signaling right indicator</span>
                                    <span className="text-right">الموقف المائل - الدخول - دخول الموقف دون استخدام الاشارة الضوئية</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Front entry of the parking bay</span>
                                    <span className="text-right"> الموقف الموازي - الدخول الأمامي للموقف</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Back entry of the parking bay</span>
                                    <span className="text-right"> الموقف المائل - الدخول الخلفي للموقف</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Enter from the left lane</span>
                                    <span className="text-right">الدخول من المسار اليساري</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-r border-l border-b border-gray-300 text-[10px]">
                <div className="grid grid-cols-10 text-white items-center">
                    <div className="flex items-center justify-center col-span-1 h-full border-r border-b border-gray-300 row-span-10 text-center text-black font-thin">
                        <span className="px-1">
                            Exit Safety Checks احتياطات السلامة
                        </span>
                    </div>
                    <div className="col-span-9 h-full">
                        <div className="col-span-9 grid grid-cols-9 font-bold h-full">
                            <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                <span className="text-left">Fail to check left shoulder before leaving the bay</span>
                                <span className="text-right">الموقف الموازي - الخروج - عدم النظر فوق الكتف الأيسر قبل الخروج</span>
                            </div>
                            <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                <div className="flex-1 border-r border-gray-300 text-center p-2">
                                </div>
                                <div className="flex-1 border-r border-gray-300 text-center p-2">
                                </div>
                                <div className="flex-1 text-center p-2">
                                    Not applicable لا ينطبق
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Fail to check rear windscreen before leaving the bay</span>
                                    <span className="text-right">الموقف المائل - الخروج - عدم النظر إلى النافذة الخلفية قبل الخروج من الموقف</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                        Not applicable لا ينطبق
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9 grid grid-cols-9">
                                <div className="grid grid-cols-2 col-span-6 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                                    <span className="text-left">Each additional reverse movement while exiting the bay</span>
                                    <span className="text-right">الموقف المائل - القيام بمناورة إضافية للرجوع عند الدخول للموقف</span>
                                </div>
                                <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 border-r border-gray-300 text-center p-2">
                                    </div>
                                    <div className="flex-1 text-center p-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-r border-l border-b border-gray-300 text-[10px]">
                <div className="h-full">
                    <div className="grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Dry steering</span>
                            <span className="text-right">الموقف المائل -  توجيه العجلات و المركبة متوقفة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left"> Fail to put gear on N or P at the end of parking</span>
                            <span className="text-right"> - عند انتهاء الفحص (المركبة الأتوماتيك) P  النهاية - عدم وضع ناقل السرعة الأتوماتيك على </span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                                Not applicable لا ينطبق
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to pull up handbrake after parking inside the bay</span>
                            <span className="text-right">الموقف المائل - عدم سحب المكبح اليدوي بعد ركن المركبة داخل الموقف</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to release handbreake while vehicle is moving</span>
                            <span className="text-right">الموقف المائل - عدم تحرير المكبح اليدوي أثناء القيادة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Touch parking line</span>
                            <span className="text-right">الموقف المائل - لمس أحد خطوط الموقف</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                100
                            </div>
                            <div className="flex-1 text-center p-2">
                                100
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Position the vehicle outside the lot</span>
                            <span className="text-right">الموقف المائل - ركن المركبة خارج الموقف</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                100
                            </div>
                            <div className="flex-1 text-center p-2">
                                100
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Exceeding allowed time to complete the maneuver</span>
                            <span className="text-right">الموقف المائل - تجاوز الوقت المسموح به لاتمام المناورة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                00:00
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                01:13
                            </div>
                            <div className="flex-1 text-center p-2">
                                01:10
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Cause engine stalls two times in the same maneuver</span>
                            <span className="text-right">الموقف المائل - التوقف المفاجئ للمحرك مرتين في مناورة واحدة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-r border-l border-b border-gray-300 bg-gray-200 text-[10px]">
                <div className="h-full">
                    <div className="grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to put gear on N while finishing test (Manual)</span>
                            <span className="text-right">عند انتهاء الفحص N  النهاية - عدم وضع ناقل السرعة العادي على </span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 h-full">
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to put gear on N or P at the end of the exam</span>
                            <span className="text-right">بعد الركن داخل الموقف P  النهاية - عدم وضع ناقل السرعة الأتوماتيك على </span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 h-full">
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left"> Fail to pull up handbrake while finishing test</span>
                            <span className="text-right">النهاية - عدم سحب المكبح اليدوي بعد ركن المركبة عند انتهاء الفحص</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-green-800 text-[6px] font-thin">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                            </div>
                            <div className="flex-1 text-center p-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-r border-l border-b border-gray-300 text-[10px]  font-bold">
                <div className="h-full bg-red-600 text-white">
                    <div className="grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Check Items Description</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-[6px]">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                Slope
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                التلة
                            </div>
                            <div className="flex-1 text-center p-2">
                                90 Seconds
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to release handbrake while vehicle is moving</span>
                            <span className="text-right">التلة - عدم تحرير المكبح اليدوي أثناء القيادة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Touch the slope yellow line or cross it completely without stopping</span>
                            <span className="text-right">التلة - لمس أو تجاوز الخط الأصفر للتلة دون التوقف لأداء المناورة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Roll back more than 15cm and less than 30cm</span>
                            <span className="text-right">التلة - الرجوع بالمركبة إلى الخلف بأكثر من 15 سم وأقل من 30 سم كل مرة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Roll back by 30 cm or more</span>
                            <span className="text-right">التلة - الرجوع بالمركبة إلى الخلف بأكثر من 30 سم</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Exceeding allowed time to complete the maneuver</span>
                            <span className="text-right">التلة - تجاوز الوقت المسموح به لاتمام لمناورة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin w-full justify-center items-center">
                            100
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Cause engine stalls two times in the same maneuver</span>
                            <span className="text-right">التلة - التوقف المفاجئ للمحرك مرتين في مناورة واحدة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Dry Steering</span>
                            <span className="text-right">التلة - توجيه العجلات والمركبة متوقفة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to pull up handbrake after stopping uphill</span>
                            <span className="text-right">التلة - عدم استخدام المكبح اليدوي بعد التوقف على التلة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10 bg-gray-200">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to put gear on N while finishing test (Manual)</span>
                            <span className="text-right">عند انتهاء الفحص N  النهاية - عدم وضع ناقل السرعة العادي على </span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10 bg-gray-200">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to put gear on N or P at the end of the exam</span>
                            <span className="text-right">بعد الركن داخل الموقف P  النهاية - عدم وضع ناقل السرعة الأتوماتيك على </span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10 bg-gray-200">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to pull up handbrake while finishing test</span>
                            <span className="text-right">النهاية - عدم سحب المكبح اليدوي بعد ركن المركبة عند انتهاء الفحص</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 border-r border-l border-b border-gray-300 text-[10px]  font-bold">
                <div className="h-full bg-red-600 text-white">
                    <div className="grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Check Items Description</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-[6px] font-bold">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                Emergency Brake
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                الفرملة الطارئة
                            </div>
                            <div className="flex-1 text-center p-2">
                                90 Seconds
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full">
                    <div className="grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Touching the entry white line at less than 20 km/h</span>
                            <span className="text-right">الفرملة الطارئة - تجاوز خط البداية بسرعة تقل عن 20 كم/ساعة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Touching the exit line (partially or pass it completely) without completing the maneuver</span>
                            <span className="text-right">الفرملة الطارئة - لمس أو تجاوز خط النهاية الأصفر دون التوقف لأداء المناورة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Depress the brake before touching the white entry line before hearing signal sound</span>
                            <span className="text-right">الفرملة الطارئة - استعمال الفرامل قبل تجاوز خط البداية</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">(Manual)Depress the clutch before the brake</span>
                            <span className="text-right">الفرملة الطارئة - استعمال القابض قبل الفرامل</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">(Manual)Depress the brake and clutch at the same time</span>
                            <span className="text-right">الفرملة الطارئة - استعمال القابض و الفرامل معاً في نفس الوقت</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin w-full justify-center items-center">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Unable to stop within stipulated distance</span>
                            <span className="text-right">الفرملة الطارئة - غير قادر على التوقف ضمن المسافة المحددة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Unable to stop within stipulated distance</span>
                            <span className="text-right">الفرملة الطارئة - غير قادر على التوقف ضمن المسافة المحددة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Unable to stop within stipulated distance</span>
                            <span className="text-right">الفرملة الطارئة - غير قادر على التوقف ضمن المسافة المحددة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Not holding the steering wheel with both hands when braking</span>
                            <span className="text-right">الفرملة الطارئة - عدم إمساك عجلة القيادة بكلتا اليدين عند استعمال</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to release handbrake while vehicle is moving</span>
                            <span className="text-right">الفرملة الطارئة - عدم تحرير المكبح اليدوي أثناء القيادة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Exceeding allowed time to complete the maneuver</span>
                            <span className="text-right">الفرملة الطارئة - تجاوز الوقت المسموح به لاتمام لمناورة</span>
                        </div>
                        <div className="flex items-center justify-center border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                            00:00
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Cause engine stalls two times in the same maneuver</span>
                            <span className="text-right">الفرملة الطارئة - التوقف المفاجئ للمحرك مرتين في مناورة واحدة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10 bg-gray-200">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to put gear on N while finishing test (Manual)</span>
                            <span className="text-right">عند انتهاء الفحص N  النهاية - عدم وضع ناقل السرعة العادي على </span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10 bg-gray-200">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to put gear on N or P at the end of the exam</span>
                            <span className="text-right">بعد الركن داخل الموقف P  النهاية - عدم وضع ناقل السرعة الأتوماتيك على </span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10 bg-gray-200">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Fail to pull up handbrake while finishing test</span>
                            <span className="text-right">النهاية - عدم سحب المكبح اليدوي بعد ركن المركبة عند انتهاء الفحص</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 border-r border-l border-b border-gray-300 text-[10px]  font-bold">
                <div className="h-full bg-red-600 text-white">
                    <div className="grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-7 px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Check Items Description</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-3 text-[6px] font-bold">
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                All maneuvers
                            </div>
                            <div className="flex-1 border-r border-gray-300 text-center p-2">
                                جميع المناورات
                            </div>
                            <div className="flex-1 text-center p-2">
                                90 Seconds
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-10 h-full">
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Safety belt is not fastened during test</span>
                            <span className="text-right">مخالفة في حزام الأمان</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Driver door is open during test</span>
                            <span className="text-right">باب السيارة مفتوح</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Make sudden acceleration (Engine exceeds 3000 RPM)</span>
                            <span className="text-right">تتجاوز 3000 دورة في الدقيقة</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Cause engine stall 3 times in the overall test</span>
                            <span className="text-right">توقف المحرك 3 مرات</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Speeding violations (over 35 km/h)</span>
                            <span className="text-right">مخالفات السرعة (اكثر من ٣٥ كم/ساعة)</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                    <div className="col-span-10 grid grid-cols-10">
                        <div className="grid grid-cols-2 col-span-8 text-black font-thin px-2 border-r border-b border-gray-300 items-center">
                            <span className="text-left">Total timeout(20 minutes)</span>
                            <span className="text-right">إجمالي المهلة (٢٠ دقيقة)</span>
                        </div>
                        <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 border-r border-l border-b border-gray-300 text-xs font-bold">
                <div className="border py-3 border-gray-300 bg-red-600 text-white w-full flex justify-between">
                    <div className="grid grid-cols-2 w-full px-8">
                        <span className="text-left">Result</span>
                        <span className="text-right">النتائج</span>
                    </div>
                    <div className="flex border-b border-gray-300 col-span-2 text-green-800 text-[6px] font-thin">
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-10 bg-red-600 text-white">
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex flex-col items-center justify-center">
                            <span className="text-center">الموقف الموازي</span>
                            <span className="text-center">Parallel Parking</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex flex-col items-center justify-center">
                            <span className="text-center">الموقف العمودي</span>
                            <span className="text-center">Garage Parking</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex flex-col items-center justify-center">
                            <span className="text-center">الموقف الجانبي ٦٠</span>
                            <span className="text-center">Angel Parking</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex flex-col items-center justify-center">
                            <span className="text-center">التلة</span>
                            <span className="text-center">Slope</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex flex-col items-center justify-center">
                            <span className="text-center">الفرملة الطارئة</span>
                            <span className="text-center">Emergency Break</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-10 text-green-800">
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex items-center justify-center">
                            <span className="text-left">Pass</span>
                            <span className="text-center px-2">-</span>
                            <span className="text-right">نجاح</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex items-center justify-center">
                            <span className="text-left">Fail</span>
                            <span className="text-center px-2">-</span>
                            <span className="text-right">رسوب</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex items-center justify-center">
                            <span className="text-left">Fail</span>
                            <span className="text-center px-2">-</span>
                            <span className="text-right">رسوب</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex items-center justify-center">
                            <span className="text-left">Pass</span>
                            <span className="text-center px-2">-</span>
                            <span className="text-right">نجاح</span>
                        </div>
                        <div className="col-span-2 py-3 px-2 border-b border-gray-300 flex items-center justify-center">
                            <span className="text-left">Pass</span>
                            <span className="text-center px-2">-</span>
                            <span className="text-right">نجاح</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 border-t border-r border-l border-gray-300">
                <div className=" grid grid-cols-5 text-sm text-white font-bold ">
                    <div className="col-span-3 py-3 px-8 bg-red-600 border-r border-b border-gray-300 flex items-center justify-between">
                        <span className="text-left">Final Result</span>
                        <span className="text-center px-2">-</span>
                        <span className="text-right">النتيجة النهائية</span>
                    </div>
                    <div className="col-span-2 py-3 px-2 border-r border-b border-gray-300 flex items-center justify-center text-green-800">
                        <span className="text-left">Fail</span>
                        <span className="text-center px-2">-</span>
                        <span className="text-right">رسوب</span>
                    </div>
                </div>
                <div className="flex px-3 justify-between items-center">
                    <span className="text-left">In case of accident, the examiner states the result and attach supporting documents in the below section. The test result will automatically be reflected on the above final test result field.</span>
                    <span className="text-right">في حال حصول حادث، يمكن للفاحص المخول تعديل النتيجة عبر النظام من برج المراقبة وإرفاق الملفات التي توثق الحادث. سيتم إظهار تلك النتيجة في حقل النتيجة النهائية أعلاه</span>
                </div>
                <div className=" grid grid-cols-5 text-sm text-white font-bold border border-gray-300">
                    <div className="col-span-3 py-3 px-8 bg-red-600 border-r border-b border-gray-300 flex items-center justify-between">
                        <span className="text-left">Qualification/Disqualification Result by examiner</span>
                        <span className="text-center px-2">-</span>
                        <span className="text-right">النتيجة من قبل الفاحص</span>
                    </div>
                </div>
                <div className="col-span-5 text-sm border border-gray-300 bg-red-600 flex justify-between items-center text-white px-3">
                    <span className="text-left">Reason</span>
                    <span className="text-center px-2">-</span>
                    <span className="text-right">السبب</span>
                </div>
                <div className="col-span-5 text-sm border border-gray-300  flex justify-between items-center px-3 h-[80px]">
                </div>
            </div>
            <div className="col-span-5 text-sm h-[80px]">
            </div>
        </div >
    );
};

export default YardTestScoreSheet;
