
export type SideType = 'Истец' | 'Ответчик' | 'Третье лицо'

export interface IParticipant {
    Id: string
    Name: string
    Address: null | string
    INN: null | string
    BirthDate: null
    BirthPlace: null | string
    Snils: null | string
    SideType: number
    OrganizationForm: null
    SubjectCategories: string[]
    ContainsBflResolution: boolean
    isActualisedByDadata: boolean
    management?: {
        name: string
        post: string
        disqualified: any
    },
}

export interface Sides {
    Participants: IParticipant[]
    IsUserSupervisor: boolean
    IsAdminDeleted: boolean
    CaseId: string
}

export interface ICaseData {
    Id: string;
    CaseNumber: string;
    SidesCount: number;
    RegistrationDate: Date;
    IsSimpleJustice: boolean;
    SimpleJusticeCode: null;
    Instances: Instance[];
    Sides: Sides;
    CaseTypeMCode: string;
    CaseType: string;
    CaseCategoryDispute: string;
    CaseState: string;
    SinceStart: string;
    SubscriptionId: null;
}

export interface Instance {
    Id: string;
    InstanceNumber: string;
    InstanceLevel: number;
    InstanceWeight: number;
    Court: ICourt
    Judges: IJudge[];
    StartDocument: StartDocument;
    FinalDocument: FinalDocument;
    IsFinished: boolean;
    SessionStateString: string;
    NextInstanceEvent: string;
    RegistrationDate: Date;
    IncomingDate: Date;
    IsFromMainCase: boolean;
    LiveVideos: any[];
    ActionWithVideo: number;
    SessionState: number;
    IncommingNumber: string;
}

export interface ICourt {
    Id: string;
    Tag: string;
    Name: string;
    Url: string;
    IsCroc: boolean;
}

export interface FinalDocument {
    Id: string;
    IsDeleted: boolean;
    DocumentTypeId: string;
    IsCroc: boolean;
    ContentTypes: string[];
    ContentTypesStr: string[];
    FileName: string;
    DocumentDate: Date;
    PublishDate: Date;
    DecisionTypeName: null;
    CanBeDownloaded: boolean;
    HasFile: boolean;
    SignatureInfo: any[];
    OriginalActFileName: string;
    DocumentDateString: string;
}

export interface IJudge {
    Id: string;
    Name: string;
    FinalJudges: boolean;
}

export interface StartDocument {
    Id: string;
    DocumentTypeId: string;
    DocumentType: string;
    DocumentContentTypeId: string;
    DocumentContentType: string;
    DocLevel: number;
    DocumentDate: Date;
    CaseId: string;
    InstanceId: string;
    IsKodeks: number;
    IncomingNum: string;
    Declarers: IParticipant[];
    FileName: string;
}


