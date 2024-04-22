import Image from 'next/image';
import React from 'react'

const Payments = () => {
  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium">Earnings</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[460px]">
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                Service
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Earning
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-emerald-500">
                  +$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-rose-500">
                  -$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Withdrawn
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-emerald-500">
                  +$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-rose-500">
                  -$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Withdrawn
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-emerald-500">
                  +$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-rose-500">
                  -$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Withdrawn
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-emerald-500">
                  +$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-rose-500">
                  -$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Withdrawn
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-emerald-500">
                  +$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src="https://placehold.co/32x32"
                    alt="image"
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-rose-500">
                  -$235
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Withdrawn
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments