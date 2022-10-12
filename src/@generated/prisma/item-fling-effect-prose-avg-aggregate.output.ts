import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Item_fling_effect_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    item_fling_effect_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
