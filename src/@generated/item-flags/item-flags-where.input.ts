import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Item_flag_mapListRelationFilter } from '../prisma/item-flag-map-list-relation-filter.input';
import { Item_flag_proseListRelationFilter } from '../prisma/item-flag-prose-list-relation-filter.input';

@InputType()
export class item_flagsWhereInput {

    @Field(() => [item_flagsWhereInput], {nullable:true})
    AND?: Array<item_flagsWhereInput>;

    @Field(() => [item_flagsWhereInput], {nullable:true})
    OR?: Array<item_flagsWhereInput>;

    @Field(() => [item_flagsWhereInput], {nullable:true})
    NOT?: Array<item_flagsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Item_flag_mapListRelationFilter, {nullable:true})
    item_flag_map?: Item_flag_mapListRelationFilter;

    @Field(() => Item_flag_proseListRelationFilter, {nullable:true})
    item_flag_prose?: Item_flag_proseListRelationFilter;
}
