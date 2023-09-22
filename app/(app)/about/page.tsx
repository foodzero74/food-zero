"use client";
import { About } from "@/components/About/About";
import { HeaderComponent } from "@/components/General/HeaderComponent";
import { Staff } from "@/components/Staff/Staff";
import { useQuery } from "@apollo/client";
import { queryStaff } from "@/utils/querys";
import { VideoBanner } from "@/components/VideoBanner/VideoBanner";
import { useState } from "react";
import { StaffQuery } from "@/typings"
export default function Menu() {
  const title = 'Our Story';
  const image = '/static/about_1.webp';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. ';
  const { loading, error, data } = useQuery<StaffQuery>(queryStaff);
  const [topPosition, settopPosition] = useState(0)
  return (
    <>
      <HeaderComponent
        title={'Who We Are'}
        titleFontSize={14.8}
        description={'The most important thing for us is to give you the comfortable dining experience'}
        descriptionFontSize={3.2}
        ubication={'right'}
        textAling={'left'}
        textContainerWidth={55}
        background={'/static/about_cover.webp'}
      />
      <About title={title} description={description} image={image} />
      {data && data.staff.map((staffMember, index) => {
        return (
          <Staff data={staffMember} key={index} loopIndex={index} />
        )
      })}
      <VideoBanner videoId="n8YwWZy3bcM" title="It looks delicious" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </>
  );
}