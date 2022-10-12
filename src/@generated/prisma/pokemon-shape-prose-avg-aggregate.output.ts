import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_shape_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokemon_shape_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
