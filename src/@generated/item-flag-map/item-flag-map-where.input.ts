import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Item_flagsRelationFilter } from '../prisma/item-flags-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';

@InputType()
export class item_flag_mapWhereInput {

    @Field(() => [item_flag_mapWhereInput], {nullable:true})
    AND?: Array<item_flag_mapWhereInput>;

    @Field(() => [item_flag_mapWhereInput], {nullable:true})
    OR?: Array<item_flag_mapWhereInput>;

    @Field(() => [item_flag_mapWhereInput], {nullable:true})
    NOT?: Array<item_flag_mapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_flag_id?: IntFilter;

    @Field(() => Item_flagsRelationFilter, {nullable:true})
    item_flags?: Item_flagsRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;
}
