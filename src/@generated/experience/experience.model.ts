import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { growth_rates } from '../growth-rates/growth-rates.model';

@ObjectType()
export class experience {

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => Int, {nullable:false})
    experience!: number;

    @Field(() => growth_rates, {nullable:false})
    growth_rates?: growth_rates;
}
