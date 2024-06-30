import { Picture } from "../types/picture"

export const stats = (picture?: Picture): {id: number; key: string, value: string | undefined}[] => {
    return [
        {
          id: 1,
          key: "Filename",
          value: picture?.path.slice(6),
        },
        {
          id: 2,
          key: "Camera",
          value: picture?.camera,
        },
        {
          id: 3,
          key: "Size",
          value: picture?.size,
        },
        {
          id: 4,
          key: "Country",
          value: picture?.country,
        },
    ];
}