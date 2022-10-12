import { registerEnumType } from '@nestjs/graphql';

export enum Item_flavor_textScalarFieldEnum {
    item_id = "item_id",
    version_group_id = "version_group_id",
    language_id = "language_id",
    flavor_text = "flavor_text"
}


registerEnumType(Item_flavor_textScalarFieldEnum, { name: 'Item_flavor_textScalarFieldEnum', description: undefined })
