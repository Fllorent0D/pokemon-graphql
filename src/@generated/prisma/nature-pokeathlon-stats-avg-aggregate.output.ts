import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Nature_pokeathlon_statsAvgAggregate {

    @Field(() => Float, {nullable:true})
    nature_id?: number;

    @Field(() => Float, {nullable:true})
    pokeathlon_stat_id?: number;

    @Field(() => Float, {nullable:true})
    max_change?: number;
}
