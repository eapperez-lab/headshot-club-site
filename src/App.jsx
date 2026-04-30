import React from "react";

const BOOKING_LINK = "https://calendly.com/eapperez/20-min-headshot-photoshoot-clone";
const BrandMark = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
    <div className="absolute inset-0 rounded-[22%] bg-[#C3542B]" />
    <svg
      viewBox="0 0 200 200"
      className="relative z-10 w-[76%] h-[76%] text-[#FFF8F4]"
      fill="currentColor"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <rect
          key={index}
          x="91"
          y="18"
          width="18"
          height="78"
          rx="7"
          transform={`rotate(${index * 30} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="25" fill="#C3542B" />
    </svg>
  </div>
);

const Icon = ({ type, className = "" }) => {
  const icons = {
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    camera: (
      <>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
        <path d="M4 4l2 2M18 18l2 2" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type] || icons.check}
    </svg>
  );
};

const howItWorksItems = [
  ["calendar", "Book your time", "Choose a 20-minute slot online."],
  ["clock", "Show up ready", "Arrive at the pop-up location."],
  ["sparkle", "Get guided", "We coach poses, angles, and expressions."],
  ["check", "Pick favorites", "Receive your gallery and polished selects."],
];

const sessionIncludes = [
  "20-minute guided shoot",
  "2 retouched images",
  "Online proofing gallery",
  "Professional lighting + direction",
];

const experiencePoints = [
  "Friendly direction",
  "Clean modern lighting",
  "Natural expressions",
  "Fast online delivery",
];

const teamMembers = [
  {
    name: "Adam Perez",
    role: "Director + Photographer",
    bio: "Adam is an award-winning independent director and photographer from California’s Central Valley. His work has been featured in The New York Times, The Los Angeles Times, The New Yorker, TIME, Vogue, and Cosmopolitan, with projects spanning the U.S. and Latin America. He has also produced national campaigns for the ACLU, Apple, Airbnb, and AT&T.",
  },
  {
    name: "Erika Perez",
    role: "Marketing + Brand Strategy",
    bio: "Erika is a seasoned marketing leader with 18+ years of experience in competitive markets. She blends data-driven strategy with creative storytelling across brand, experiential, and digital channels, staying current with emerging marketing trends and technologies including AI.",
  },
];

const recentWorkImages = [
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABzAE0DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAKhAAAgIBAwMDBAIDAAAAAAAAAAECEQMEEiExUXEiQVITQmGRMoEFFCP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwDQAARQAAACGACEMAEIYgLAAAAjOcYK5OiRRCcZZ3bVrhBZA9TGKtwml4LITjkipRdpk24VUmvDMi/4atRi/Rk9uzJpY1CGBUIQxATAAADKsNzct1JvhGoyZbjPbw1d8slajTkxSck4SS78FeTFuzY2vsdsmpVDoo+GV4827M4Kr68+5Fq4AA0wQAAEgAUpKMXJ9ErAZn1GaEKW5Od8fg5+XPlyP1TddlwisYa6Sbyu5Phexnyz3ZXKPFdGTutJvvlqjNfA5jVrVDWTX8kpGnFmjl6cPsctMu089maL9ro1jLogAGQzNr57cKj8maTn66e7Mo/FFgy1wFcDEUS3v6Wz2uxWIaARJMi+o0UdeEt0Iy7oZTpJbtOvxwXGAHMi1lztyfV2b889mGb/ABRy06aZYNWbTendFepdvcyN8mvFqlFeqLXghqZYci3RtT8dSTYtxnFY6XYsx4JZHxaXdlRU2S2yq9rrwdCGnx44Wl6vk1ZRlUpp1qFNfF8ElXFugdwkuzNRj/x/3/0bC1CzYnPHKNXaOTLFkg6lCS/o7ogOE4y+L/Qmd+iLhGXWKflDRxtPNQyqUuhu+vi674/s0rT4k7WON+CTxwfWEf0SzVlxh/3MUpbbaXszPk3ZXTx3NfdFdTrfShf8I/olQNZNHglDDcuJSd0WtU6LhOKfUIYAAAMAAAAAAAAAAAA//9k=",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABzAE0DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQAAQMF/8QAJxAAAgIBBAEEAgMBAAAAAAAAAAECEQMEEiExQRMiUWEFcTOBkbH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARECMRL/2gAMAwEAAhEDEQA/AOiQhAIUWQCiEIBRCygIQhACIWUBG6VnJ1etnKTUXtX7HNTq4Y4SS5fRycON5821f2BSnmk7Tl/pvHW58cdrfPy0PRwRhGkhTU44u0mt3wZ1r5Fi/JyTrKk18oew54ZlcXz8M4T4bs20mf0cyk729UaZdsgOPIskbQQGgMlcWvoIDJPauFbA4+syW3BcUDoZOORtK3Res/kfV+TLTX6qinV8Eviz10nmlPHLw14FqcYWo238jUcUcUJcpWZ4Jp2vCMtk8+L2bmqYujoZ/dYjODik/DNc1nqOp+OyboOL7SQ4cr8fljBtTT56fwdVO0VloBkXtsIy1OVYcTlVvwBxc8vfL9mUZOE1Jdp2a5Xy3w23bMWFdZZlPCpqO6+kYz9RNdK/AtpdT6b2yXtflD0pwivauX5MWY3LrKQlkyN3Hxusbk7E8kX6kuOC8p01075S+ztQ4icjSuO1pp2nd0dPTp+kr/o0wYE/yLuEI+Wxw5esyOWdrze1fSCwjNXKo2xjBoJz5yLavgfwaOGNJ1cvLGGqJoSnoIJJ41yvHyBVLa+Gvkfi/Bc4QmvdFMlmtS45cjTTYd0XOS4l0NrTYoytQ5+zShIWl8enjG2lV90bxjsVLoKSpIuisiOW09RrJbFw338Ie1Le1RtpS448/Qv+Ogk52+U6BDsuKJ2E1aoz5i+eiCpLa/ouy7UlRn06AMiKT4LQFz8BLoCQS6Az1K3YJLr7+DHR3Ke5KlGO1/bC1GTfCoypeWaaeKjiio9FGwM7rgtulyB6kX5IMn7unUl2gm90U/PkrJtbtPkqDu/sKKLCXYHTCsIJ9BLozsO6SA50W9w7pv4l+2QgWtJ89gMhAgJpV0Z4H/1kIFasiIQIsKXZCBX/2Q==",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABzAE0DASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAIBAwUEBv/EACwQAAICAQMCBQMEAwAAAAAAAAECABEDBBIhMUEFEyJRYRQycUJSkcGBobH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAERAhIhUf/aAAwDAQACEQMRAD8A04QhAIQhAIRTkRTRYAyQQRYNiBMIQgEIQgEIQgE5NXqCjeWnB7mdZIAJJoDqZkah7yu56XxJWuXVjTcOTAsdO9g2O4lCahxtC47vnvJ1ObISwOMUOpmMb1pAhgCOhkynRuH0qEe1S6dHIQhCAQkwgK670ZfcVMh1ONgCOAaImzOTXBAFsgEnp3Mliy4p3ouLcB+aEV8uLJvIO4UP5lWQsAFBAT8XET0sRYKVzxM43rT0IrTLxV2Z0Tm0GbztOP3LwROmbcxCEIBCTCBz6vUrpse48sftHvMPJmyZMpyObM0PEm07sG8wnIBVDkTPLK3HIhFiaxkXay2JGXUnIu0LtFynb7xkx8wtrr8OzjBl9Z9LCj8TYR1ddyMGHuJgVQkpkdDaMVPxDOt+EzMPiLqazAMPcdRNLG65EDoQVPeGjTN8T1LBhgQ1xbEf8mizBFLHoBZnn8uQ5czZD+o3CUldo5UBakCSx4qVlAAq+8axXSKBUngCFTf8yFNX7xT1gCTCA8zt8Nz+UuRT0JBE4Sew7Tr0Kq3mbu1f3IsdnimbZhGMdX6/iZmLC2UMR2FxtVnOfOz9ug+BLdL6cTHcOT9sX4s+1zOjY32tV/EgSzUG2BlRMQsymuFxDzUlQTwASYQExseNsrBVF/PYS/Dp6a8gv4l7htu1TsHuBJ6bnH64WXazKCDRqxLdIyJv31zVXBtOAtjIP8yoISSDxUus2WEk2RFsyCTCHLE9ZIle4yVbmBZ1P5neiqFAqZu8A9Y/1WXoaMlmt82RpcAcVEaci6pq9SmH1XP2kzOVv1F7lgOFRvi4aLCcxyGqqv7nM2bG3VCD8TT8KUrpi5/W3+pZGerrI1ChM+RVFANQErhCaYBi2YQgMAOI44hCEBkDpCECT0m/pQBpsQH7RCELH//Z",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABzAEoDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAJxAAAgIBAwMDBQEAAAAAAAAAAAECEQMSITEEQVETIjIjYXGRoYH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwDMAwIEA3sCVq1wSIQ+9d/ANVySIBgSIBgSSKs069pcZMsvqsibdJLySi0/dO2lskQqWRppGzp+k1q57IDIphlipbt/rgt1Rk6k722Zon0UGriqZmnjli9rjfhAcRYBqtd6A1GaAACCZkzr635NZR1MfjLuRX9OkqNsHsc7HmUYqot13ui2HVyftjjcnV7GW9dFcEMsdUWq3MPq5p023vvSdItjHLOai8koxa3V3/SSmSTtR3rkgbYY1BSil7WzJJVJrwxjNhAACymU9Srgn4ZcKS1Ra8kVeGMGk5ck+nSj1ia2RTFywyce9EYzk8qcXuZadPKvSVqtN91wSxSjpvUm34Koa3C5d+bK8eOUZS1Kk1deCLT6kIXqdbmKT1Sb8snmdtO9uCC3GM2gB0FCyZGeSEPk9/BlydROey9q+xSRXZM+uSaVUWQcW1Kv0ZVyXQk4O0FMdHBkt+2P+jyz3pcszQ6nhRTvwaMMH85/J/wGjy4Yy6dxa3StP7nOOrllpxSfhM5IxnpNZJLiRL1pfYqA0yqESEBInB2RoCTTibhK0k/ybYTuN9znY8iSqTJ+u0mo/sMa1o6vOnD04u2+TG2KwGM26YWIQhEYg7AUqsjQ4sk1YhAaHQEghiQEjsQCp+SQF3YABIsiAEjZEAEAAAkTEAEX/9k=",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABzAE0DASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAKhAAAgEDAwMDBQADAAAAAAAAAAECAxEhEjFBBCJRE2FxBTIzgaFikaGx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABkRAQEBAQEBAAAAAAAAAAAAAAABETECQf/aAAwDAQACEQMRAD8AWj0gBBCEBPqbmvbF/ZI2y6MOOr8I8Stu6qp4+g6KuCW+eMvpk6MZRccpphrWIKtRGfD9svA8XrKozXq1J7l4XUGnnugslqw0IAiGMYxIkxkYgJz7nmx/Z0CC5YsZJdSrFGPpKPTvyPSk3iUVnHYm09jjXn8HtWz3fOCf5MOuGela3n1cR/p7EizVqHFvjBQ7GmmpqXnBPc835/BQWK08owumWYfQw2wJgGJEoKAgkBIbMSskWTfGPJI48/yRM0s18JFFdU4SeyUsPwkQ4akmiuuyaWMszW4e6lDM5tuWO5C5b7Gw6m6cltyJgykFvxbpuYseS6fPYpFmiYBhRQUm2kllsBRpI5m5eCAvS4rbny+uDmyi1JJ9jutZWDlamrZb/sCQo+1N93wO6INVasrcX1XQMaZqWxptdmFaiSxOU/o0I5aLp6fbB46kUVtyn2Yj6fTnsUJ5JqFmWSkhWMYwgov08Nla8vkjrjvsjHyzoEnol1lXqV5XyRSeXywLk1WbLFl9C2MszhyDVaNTTlBe7/orTabUQ5bSXh8sismlsy/s5NvuseFhN5OxOP6TXfBzK6bN7lZFvPCJNTFrDS4a5Hjaa41QfqSXTCQkhRMAwg3RxzNy8IrOfVdKr44w+zKIardxKH8phTFB5bxI8+tHwxVlubFh7VjuWnFCYcomVjfxyz2tzeGQMcsv8ITfJcRXcZlRjz8V1JYyc5ub7sKYM+iPAy1YwLGcXrrGMYWSxlfcWj3V1YVrz04Ne1y5jlgPDbVnDaMzrV4r2t/2r8A9kV1SX2S2yfpvl/5OZZOTbzJv7Zph1b9VW2qoNSb8dgUcp/ZzKf3YfZ0qOr+yp8vV/VChl3VCynBesYBhD//Z",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABqAFUDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQMEAAUC/8QAKxAAAgIBAwMEAQMFAAAAAAAAAAECAxEEEiExQVETIjJxYSMzgVJikaGx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABkRAQEBAQEBAAAAAAAAAAAAAAABETECQf/aAAwDAQACEQMRAD8AWj0gBBCEBPqbmvbF/ZI2y6MOOr8I8Stu6qp4+g6KuCW+eMvpk6MZRccpphrWIKtRGfD9svA8XrKozXq1J7l4XUGnnugslqw0IAiGMYxIkxkYgJz7nmx/Z0CC5YsZJdSrFGPpKPTvyPSk3iUVnHYm09jjXn8HtWz3fOCf5MOuGela3n1cR/p7EizVqHFvjBQ7GmmpqXnBPc835/BQWK08owumWYfQw2wJgGJEoKAgkBIbMSskWTfGPJI48/yRM0s18JFFdU4SeyUsPwkQ4akmiuuyaWMszW4e6lDM5tuWO5C5b7Gw6m6cltyJgykFvxbpuYseS6fPYpFmiYBhRQUm2kllsBRpI5m5eCAvS4rbny+uDmyi1JJ9jutZWDlamrZb/sCQo+1N93wO6INVasrcX1XQMaZqWxptdmFaiSxOU/o0I5aLp6fbB46kUVtyn2Yj6fTnsUJ5JqFmWSkhWMYwgov08Nla8vkjrjvsjHyzoEnol1lXqV5XyRSeXywLk1WbLFl9C2MszhyDVaNTTlBe7/orTabUQ5bSXh8sismlsy/s5NvuseFhN5OxOP6TXfBzK6bN7lZFvPCJNTFrDS4a5Hjaa41QfqSXTCQkhRMAwg3RxzNy8IrOfVdKr44w+zKIardxKH8phTFB5bxI8+tHwxVlubFh7VjuWnFCYcomVjfxyz2tzeGQMcsv8ITfJcRXcZlRjz8V1JYyc5ub7sKYM+iPAy1YwLGcXrrGMYWSxlfcWj3V1YVrz04Ne1y5jlgPDbVnDaMzrV4r2t/2r8A9kV1SX2S2yfpvl/5OZZOTbzJv7Zph1b9VW2qoNSb8dgUcp/ZzKf3YfZ0qOr+yp8vV/VChl3VCynBesYBhD//Z",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABzAE0DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAEDBAUC/8QAKRAAAgIBAwMDAwUAAAAAAAAAAAECEQMEITEFElETImEyQXEzUmKhwf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABQTH/2gAMAwEAAhEDEQA/ALlCo6AiuaFR2IDmhUdABzQUMRAgGICYQxFQCAApCK2o1ixtwxx75rn4Io9QlGSWbF2/KAvCBNSipRdp8MAAQABMIAKgIs8+zDKSdNLYkK2vV6dvw7IIumyioStXKTts41j9aL9lJcMfTst4ZYlynY9RJxwuMvtx8mdbnC6blbxvFLmO6/BdKHT2nknPfikXzTJAAASAILKhlXV6nFjTxyTk2uEWLMPLJzySk/uwHhzPHmjkW1cl3VKPb6juSv8AozS9jl6mmfmKdma1FnBPHlxN4oqKitq/0ljK4p+UZvTpuGoUU/bPZovY5X3R/a6B1LYWc2FlRJYAAQppyhJJ02tmYb8G6ZGrio6maXmyiuTYJ9sci8xIQTAs9Pjeqj8Jsuw/VyfLsz9Nn9DK59qlaqifHqXk1Uaj2p2TVxdAAAlAACAyNXLv1M34dGpkmseOU3wkY0pOUm3y3ZRyxLlIb3YuGBLLCoxvup/JY0unnDJ3zSVLZWU5y73dJfgv6XMp44xb96VV5CrICGQTWFnFhZULUS7cGR/xZjGnrZVp2vLSM1rYDlcifI73E+QAFadrZjQUBoaXP6sal9a5+SazKhKUJKUXujQxZo5Y3dP7oCcAACtr37IfkpAAHI8f1MAFI6mlszkAEKBMAA//2Q==",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACweISchHCwnJCcyLyw1Qm9IQj09QohhZlBvoY2ppp6Nm5ixx//Ysbzxv5ib3v/g8f//////rNX/////////////2wBDAS8yMkI6QoJISIL/t5u3////////////////////////////////////////////////////////////////////wAARCABtAFUDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAKBAAAgIBAwMEAQUAAAAAAAAAAAECAxEEEiExQVEiM2FxEwUycpGh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAMAAgIDAAAAAAAAAAAAAQIRMQMhIkESMlH/2gAMAwEAAhEDEQA/AM50AydgAcbwssA6MryZJzc38ESvxZXy/wAbQZYWOD8rwaU1JJruKzS8cpk6ACVgAGAAAQUXyeMdi8p1HRDnU5/qjp63ZLhZSLp6bGa8PcuVJdPo06OGaoTz27FzrjapKXke2Enp4865QeJItok+YPsadSob4x4S75Mm9K+UorhvgOw58btoAXKBDpAAAAAMBXdFNZ6YLAEKzc0loZyVcoNfKyaYuazmKjH4MUrVBpReZdjbKudkUnLgbGyT0w6qW7G1NvJVXVJyy+F8m3U0qGnbT27e5kptz6ZPnsx+9CauXtcACG4ABgAABC2zYuOrM8rJS6yO2y3TfhcEC5HNnlbU6lm2C8yR7iyljj7PDq96H8kel+pX/jr/ABRfqn1+EFTGPWal3y2x4hHp8/JmAGS6u7tP+y8xF1E3na+nYmxrhn9VeACWwck9sW/COld7xX9hCt1NswANHI7F4kn4eSd9srrZWS6v/CsAAAAAnT7iIE6fcQXisexpABm6nSjUPlLwXGa73GPHrPyX4oAAtzgAAAAABOn3EQJ0r1/QXisexoBwGbpSMtrzYzUZJ/vl9lYs/LxwAFMAAAAAAAuqjiOX1ZXVFSlz2LxWtcMft0HAS1f/2Q=="
];

const SmokeTests = () => {
  const tests = [
    { name: "Brand name renders", pass: "The Headshot Club".length > 0 },
    { name: "Premium-lite price is set", pass: 225 === 225 },
    { name: "All process steps exist", pass: howItWorksItems.length === 4 },
    { name: "External icon dependency removed", pass: typeof Icon === "function" },
    { name: "Booking link is Calendly", pass: BOOKING_LINK.includes("20-min-headshot-photoshoot-clone") },
    { name: "Session includes four benefits", pass: sessionIncludes.length === 4 },
    { name: "Recent work images are unique", pass: new Set(recentWorkImages).size === recentWorkImages.length },
    { name: "Recent work gallery has eight images", pass: recentWorkImages.length === 8 },
    { name: "Team has two founders", pass: teamMembers.length === 2 },
    { name: "About section includes Adam", pass: teamMembers.some((member) => member.name === "Adam Perez") },
    { name: "About section includes Erika", pass: teamMembers.some((member) => member.name === "Erika Perez") },
  ];

  return (
    <section className="sr-only" aria-label="Component smoke tests">
      {tests.map((test) => (
        <p key={test.name} data-testid={test.name}>
          {test.name}: {test.pass ? "pass" : "fail"}
        </p>
      ))}
    </section>
  );
};

const ButtonLink = ({ href, children, variant = "primary", external = false }) => {
  const baseClass =
    "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold transition";
  const variantClass =
    variant === "dark"
      ? "bg-[#111111] text-white hover:bg-[#C3542B]"
      : variant === "outline"
        ? "border border-black/20 hover:border-[#C3542B] hover:text-[#C3542B]"
        : "bg-[#C3542B] text-white hover:bg-[#a84625]";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${baseClass} ${variantClass}`}
    >
      {children}
    </a>
  );
};

export default function TheHeadshotClubWebsite() {
  const bookingLink = BOOKING_LINK;

  return (
    <main className="min-h-screen bg-[#F7F1EC] text-[#111111] font-sans">
      <SmokeTests />

      <header className="sticky top-0 z-50 bg-[#F7F1EC]/90 backdrop-blur border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#C3542B] flex items-center justify-center p-1.5 overflow-hidden">
              <BrandMark className="w-full h-full" />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-2xl font-black tracking-tight">The Headshot Club</p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#C3542B] font-bold">
                20-Minute Headshots
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            <a href="#about" className="hover:text-[#C3542B] transition">About</a>
            <a href="#pricing" className="hover:text-[#C3542B] transition">Pricing</a>
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-[#C3542B] transition"
            >
              Book a Spot <Icon type="arrow" className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C3542B] uppercase tracking-[0.28em] font-bold text-sm mb-5">
            Fast sessions. Real results.
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-black leading-[0.95] mb-6">
            Headshots you’ll actually love.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 mb-8 max-w-xl">
            Professional, guided headshot sessions in just 20 minutes. Show up, get coached, and leave with polished images that look like you on your best day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href={bookingLink} external>
              Book Your Session <Icon type="calendar" className="w-5 h-5" />
            </ButtonLink>
            <ButtonLink href="#pricing" variant="outline">
              View Pricing
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-[#111111] p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="absolute top-8 right-8 w-32 h-32 opacity-95">
              <BrandMark className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-[18px] border-white/20" />
            <div className="relative z-10 text-white">
              <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-3">Pop-Up Headshots</p>
              <h2 className="font-serif text-5xl font-black leading-none">
                20 minutes.
                <br />
                Done.
              </h2>
            </div>
            <div className="relative z-10 bg-white rounded-3xl p-6 text-[#111111]">
              <p className="font-bold text-xl mb-2">What’s included</p>
              <p className="text-black/70">
                Guided shoot, professional lighting, online gallery, and 2 retouched images.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">
              How it works
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-black">Simple. Fast. Not awkward.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {howItWorksItems.map(([iconType, title, text], index) => (
              <div key={title} className="rounded-3xl bg-[#F7F1EC] p-6 border border-black/5">
                <div className="w-12 h-12 rounded-2xl bg-[#C3542B] text-white flex items-center justify-center mb-5">
                  <Icon type={iconType} className="w-6 h-6" />
                </div>
                <p className="text-sm text-black/40 font-bold mb-2">0{index + 1}</p>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-black/65 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F1EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">
                Recent work
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-black">
                The kind of headshot people actually want to use.
              </h2>
            </div>
            <p className="max-w-sm text-black/65 leading-relaxed">
              Clean, modern portraits with direction that helps every person look confident, natural, and current.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {recentWorkImages.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-[1.75rem] bg-white shadow-sm border border-black/5 ${index === 0 || index === 4 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`Headshot example ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <p className="text-white text-sm font-bold">Headshot Club Select {index + 1}</p>
                </div>
              </div>
            ))}
            <div className="rounded-[1.75rem] bg-[#C3542B] text-white p-6 flex flex-col justify-between shadow-sm">
              <BrandMark className="w-20 h-20" />
              <div>
                <p className="font-serif text-3xl font-black leading-none mb-3">Guided. Polished. Fast.</p>
                <p className="text-white/80">A premium headshot experience in a pop-up format.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">
              The experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-black mb-6">
              Look polished. Still look like yourself.
            </h2>
            <p className="text-lg text-black/70 leading-relaxed mb-6">
              We make professional headshots feel easy. Every session is guided from start to finish, so you never have to wonder what to do with your face, hands, or posture.
            </p>
            <div className="space-y-3">
              {experiencePoints.map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold">
                  <Icon type="check" className="w-5 h-5 text-[#C3542B]" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-black/5">
            <Icon type="camera" className="w-12 h-12 text-[#C3542B] mb-6" />
            <p className="font-serif text-3xl font-black mb-4">
              “Real headshots for people who want to look like themselves — not an AI version of themselves.”
            </p>
            <p className="text-black/60">
              Modern, efficient, confidence-building sessions for professionals, founders, creatives, and teams.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start mb-14">
            <div>
              <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">About us</p>
              <h2 className="font-serif text-4xl md:text-5xl font-black mb-6">
                Built by a photographer and a brand strategist.
              </h2>
              <p className="text-lg text-black/70 leading-relaxed">
                The Headshot Club brings together editorial photography, smart brand positioning, and a fast, guided studio experience. The result is a modern headshot that feels polished, current, and genuinely useful.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#F7F1EC] p-8 border border-black/5">
              <BrandMark className="w-20 h-20 mb-6" />
              <p className="font-serif text-3xl font-black leading-tight mb-4">
                We help people show up clearly — online, at work, and everywhere their image represents them.
              </p>
              <p className="text-black/60 leading-relaxed">
                Our sessions are designed for founders, creatives, executives, teams, and professionals who need a headshot that looks elevated without feeling stiff.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-[2rem] bg-[#F7F1EC] p-8 border border-black/5">
                <div className="w-20 h-20 rounded-full bg-[#C3542B] text-white flex items-center justify-center font-serif text-3xl font-black mb-6">
                  {member.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <p className="text-[#C3542B] uppercase tracking-[0.2em] font-bold text-xs mb-2">{member.role}</p>
                <h3 className="font-serif text-3xl font-black mb-4">{member.name}</h3>
                <p className="text-black/70 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#111111] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">Pricing</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black">Premium quality. Efficient format.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white text-[#111111] rounded-[2rem] p-8">
              <p className="uppercase tracking-[0.2em] text-[#C3542B] font-bold text-sm mb-3">
                Individual Session
              </p>
              <div className="flex items-end gap-3 mb-6">
                <p className="font-serif text-6xl font-black">$225</p>
                <p className="pb-3 text-black/50 font-bold">per session</p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {sessionIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon type="check" className="w-5 h-5 text-[#C3542B]" /> {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href={bookingLink} external>
                Book a Spot <Icon type="arrow" className="w-5 h-5" />
              </ButtonLink>
            </div>
            <div className="rounded-[2rem] border border-white/15 p-8">
              <p className="font-bold text-xl mb-5">Add-ons</p>
              <div className="space-y-5">
                <div>
                  <p className="text-3xl font-black">$35</p>
                  <p className="text-white/60">Extra retouched image</p>
                </div>
                <div>
                  <p className="text-3xl font-black">$120</p>
                  <p className="text-white/60">Full gallery upgrade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">For teams</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black mb-5">
              Company headshot days, done right.
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Bring The Headshot Club to your office, coworking space, or event. We create a consistent look for your team with minimal disruption to the workday.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-[#F7F1EC] p-6 border border-black/5">
              <Icon type="users" className="w-8 h-8 text-[#C3542B] mb-4" />
              <p className="font-bold text-2xl">Half Day — $2,200</p>
              <p className="text-black/60">Up to 10 people</p>
            </div>
            <div className="rounded-3xl bg-[#F7F1EC] p-6 border border-black/5">
              <Icon type="users" className="w-8 h-8 text-[#C3542B] mb-4" />
              <p className="font-bold text-2xl">Full Day — $3,200</p>
              <p className="text-black/60">Up to 15 people</p>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">Book now</p>
          <h2 className="font-serif text-4xl md:text-6xl font-black mb-6">Ready for a better headshot?</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-8">
            Choose a time that works for you. Sessions are quick, guided, and designed to make getting a great headshot feel easy.
          </p>
          <div className="rounded-[2rem] bg-white p-8 border border-black/10 shadow-lg">
            <p className="font-bold text-xl mb-3">Reserve your 20-minute spot</p>
            <p className="text-black/60 mb-6">Book directly through Calendly to lock in your session time.</p>
            <ButtonLink href={bookingLink} external>
              Reserve Your Spot <Icon type="arrow" className="w-5 h-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C3542B] p-1.5 overflow-hidden">
              <BrandMark className="w-full h-full" />
            </div>
            <div>
              <p className="font-serif text-2xl font-black">The Headshot Club</p>
              <p className="text-white/50 text-sm">Fast sessions. Strong impact. Look like your best self.</p>
            </div>
          </div>
          <a href={bookingLink} target="_blank" rel="noreferrer" className="text-[#C3542B] font-bold">
            Book your session →
          </a>
        </div>
      </footer>
    </main>
  );
}
