import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_flag_mapCountAggregate {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
