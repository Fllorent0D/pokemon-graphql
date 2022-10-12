import { registerEnumType } from '@nestjs/graphql';

export enum Evolution_chainsScalarFieldEnum {
    id = "id",
    baby_trigger_item_id = "baby_trigger_item_id"
}


registerEnumType(Evolution_chainsScalarFieldEnum, { name: 'Evolution_chainsScalarFieldEnum', description: undefined })
