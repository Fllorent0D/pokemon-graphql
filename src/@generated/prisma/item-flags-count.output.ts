import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_flagsCount {

    @Field(() => Int, {nullable:false})
    item_flag_map!: number;

    @Field(() => Int, {nullable:false})
    item_flag_prose!: number;
}
