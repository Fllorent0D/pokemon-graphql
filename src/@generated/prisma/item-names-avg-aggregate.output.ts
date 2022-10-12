import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Item_namesAvgAggregate {

    @Field(() => Float, {nullable:true})
    item_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
