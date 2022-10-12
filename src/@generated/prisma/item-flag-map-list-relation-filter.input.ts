import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapWhereInput } from '../item-flag-map/item-flag-map-where.input';

@InputType()
export class Item_flag_mapListRelationFilter {

    @Field(() => item_flag_mapWhereInput, {nullable:true})
    every?: item_flag_mapWhereInput;

    @Field(() => item_flag_mapWhereInput, {nullable:true})
    some?: item_flag_mapWhereInput;

    @Field(() => item_flag_mapWhereInput, {nullable:true})
    none?: item_flag_mapWhereInput;
}
