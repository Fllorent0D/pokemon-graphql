import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Pokedex_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokedex_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
