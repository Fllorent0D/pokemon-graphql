import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_fling_effectsCount {

    @Field(() => Int, {nullable:false})
    item_fling_effect_prose!: number;

    @Field(() => Int, {nullable:false})
    items!: number;
}
