import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Egg_group_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    egg_group_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
