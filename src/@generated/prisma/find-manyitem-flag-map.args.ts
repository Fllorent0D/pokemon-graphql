import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapWhereInput } from '../item-flag-map/item-flag-map-where.input';
import { Type } from 'class-transformer';
import { item_flag_mapOrderByWithRelationInput } from '../item-flag-map/item-flag-map-order-by-with-relation.input';
import { item_flag_mapWhereUniqueInput } from '../item-flag-map/item-flag-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Item_flag_mapScalarFieldEnum } from './item-flag-map-scalar-field.enum';

@ArgsType()
export class FindManyitemFlagMapArgs {

    @Field(() => item_flag_mapWhereInput, {nullable:true})
    @Type(() => item_flag_mapWhereInput)
    where?: item_flag_mapWhereInput;

    @Field(() => [item_flag_mapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<item_flag_mapOrderByWithRelationInput>;

    @Field(() => item_flag_mapWhereUniqueInput, {nullable:true})
    cursor?: item_flag_mapWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Item_flag_mapScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Item_flag_mapScalarFieldEnum>;
}
