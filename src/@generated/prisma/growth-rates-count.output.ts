import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Growth_ratesCount {

    @Field(() => Int, {nullable:false})
    experience!: number;

    @Field(() => Int, {nullable:false})
    growth_rate_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species!: number;
}
