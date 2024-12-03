import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

// Query for Strapi

// Fetch data from Strapi
export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);
  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.slider": {
            populate: {
              image: { fields: ["name", "url"] },
              link: true,
            },
          },
          "layout.features": {
            populate: {
              feature: {
                populate: {
                  icon: { fields: ["name", "url"] },
                },
              },
            },
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getGlobalPageData() {
  const url = new URL("/api/global", baseUrl);
  url.search = qs.stringify({
    populate: [
      "header.logo",
      "header.about",
      "header.services",
      "header.work",
      "header.career",
      "header.blog",
      "header.ctaButton",
      "footer.logo",
      "footer.socialLink",
      "footer.image",
    ],
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getWorkPageData() {
  const url = new URL("/api/works", baseUrl);
  url.search = qs.stringify({
    populate: {
      image: { fields: ["name", "url"] },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

// Services and Pages
export async function getServicePageData() {
  const url = new URL("/api/services", baseUrl);

  url.search = qs.stringify({
    populate: {
      image: { fields: ["url"] },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getWebDevData() {
  const url = new URL("/api/web-dev", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      points: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getWebAppDevData() {
  const url = new URL("/api/web-app-dev", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      points: true,
      card1: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
      card2: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
      card3: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getDatabaseData() {
  const url = new URL("/api/database", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getEcommerceData() {
  const url = new URL("/api/e-commerce", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      mainimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      mainpoints: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getMobileAppData() {
  const url = new URL("/api/mobile-app-dev", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getSupportData() {
  const url = new URL("/api/support", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getWebDesignData() {
  const url = new URL("/api/web-design", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getCmsData() {
  const url = new URL("/api/content-manage", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getPhpData() {
  const url = new URL("/api/php-dev", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      image1: {
        fields: ["url"],
      },
      sectionpoints: true,
      mainpoints: true,
      points1: true,
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getDigitalData() {
  const url = new URL("/api/digital-marketing", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
      sectionimg: {
        fields: ["url"],
      },
      sectionpoints: true,
      mainpoints: true,
      card: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
    },
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getContactData() {
  const url = new URL("/api/contact-us", baseUrl);

  url.search = qs.stringify({
    fields: [
      "bannertitle",
      "bannerdescription",
      "mainheading",
      "formheading",
      "name",
      "number",
      "email",
      "message",
      "infoheading",
      "location",
      "info",
      "phone",
      "mapEmbedLink",
    ],
  });

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getJobPositionsData() {
  const url = new URL("/api/job-positions", baseUrl);

  url.search = qs.stringify({
    fields: [
      "heading1",
      "jobtitle",
      "heading2",
      "noofpositions",
      "heading3",
      "jobdescription",
      "info",
      "visible",
    ],
  });

  try {
    const response = await fetch(url.href, { cache: "no-store" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getCareerData() {
  const url = new URL("/api/career", baseUrl);

  url.search = qs.stringify({
    populate: {
      bannerimg: {
        fields: ["url"],
      },
    },
  });

  try {
    const response = await fetch(url.href, { cache: "no-store" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
