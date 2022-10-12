import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { growth_rates } from '../growth-rates/growth-rates.model';

@ObjectType()
export class growth_rate_prose {

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => growth_rates, {nullable:false})
    growth_rates?: growth_rates;
}
