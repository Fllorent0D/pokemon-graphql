import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Item_pocketsCount {

    @Field(() => Int, {nullable:false})
    item_categories!: number;

    @Field(() => Int, {nullable:false})
    item_pocket_names!: number;
}
