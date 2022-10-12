import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { experience } from '../experience/experience.model';
import { growth_rate_prose } from '../growth-rate-prose/growth-rate-prose.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { Growth_ratesCount } from '../prisma/growth-rates-count.output';

@ObjectType()
export class growth_rates {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => [experience], {nullable:true})
    experience?: Array<experience>;

    @Field(() => [growth_rate_prose], {nullable:true})
    growth_rate_prose?: Array<growth_rate_prose>;

    @Field(() => [pokemon_species], {nullable:true})
    pokemon_species?: Array<pokemon_species>;

    @Field(() => Growth_ratesCount, {nullable:false})
    _count?: Growth_ratesCount;
}
