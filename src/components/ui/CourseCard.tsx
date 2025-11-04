"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  hours: number;
}

const CourseCard = ({
  id,
  title,
  image,
  originalPrice,
  discountPrice,
  hours,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden shadow-lg card-hover-effect">
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <span className="bg-[#ff6b81] text-white px-3 py-1 rounded-l-md font-bold">
              ¥{discountPrice}
            </span>
            <span className="bg-gray-100 px-3 py-1 text-gray-500 line-through text-sm">
              原价
            </span>
          </div>
          <span className="bg-[#ff6b81] text-white px-3 py-1 rounded-md">
            领券立减
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <div className="grid grid-cols-2 w-full">
          <Link href={`/courses/${id}`} className="w-full">
            <Button
              variant="ghost"
              className="w-full rounded-none py-3 bg-[#66c2a5] text-white hover:bg-[#4ca88c]"
            >
              试学
            </Button>
          </Link>
          <Link href={`/courses/${id}`} className="w-full">
            <Button
              variant="ghost"
              className="w-full rounded-none py-3 bg-[#f38c71] text-white hover:bg-[#e07b62]"
            >
              课程详情
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 right-0 bg-white px-2 py-1 text-[#66c2a5] text-sm">
          {hours} 课时
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
