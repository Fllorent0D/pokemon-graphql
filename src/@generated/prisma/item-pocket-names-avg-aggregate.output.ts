import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Item_pocket_namesAvgAggregate {

    @Field(() => Float, {nullable:true})
    item_pocket_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
