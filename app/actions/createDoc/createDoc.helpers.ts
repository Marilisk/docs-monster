import { IParticipant, SideType } from "@/app/common/types/types2"


export function prepPartTitle(partType: number) {
    let title: SideType = 'Истец'

    switch (partType) {
        case 1: {
            title = 'Ответчик'
            break
        }
        case 2: {
            title = 'Третье лицо'
            break
        }
    }
    return title
}