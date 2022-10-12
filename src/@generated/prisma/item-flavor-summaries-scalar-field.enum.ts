import { registerEnumType } from '@nestjs/graphql';

export enum Item_flavor_summariesScalarFieldEnum {
    item_id = "item_id",
    local_language_id = "local_language_id",
    flavor_summary = "flavor_summary"
}


registerEnumType(Item_flavor_summariesScalarFieldEnum, { name: 'Item_flavor_summariesScalarFieldEnum', description: undefined })
