import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { experienceOrderByRelationAggregateInput } from '../experience/experience-order-by-relation-aggregate.input';
import { growth_rate_proseOrderByRelationAggregateInput } from '../growth-rate-prose/growth-rate-prose-order-by-relation-aggregate.input';
import { pokemon_speciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';

@InputType()
export class growth_ratesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formula?: keyof typeof SortOrder;

    @Field(() => experienceOrderByRelationAggregateInput, {nullable:true})
    experience?: experienceOrderByRelationAggregateInput;

    @Field(() => growth_rate_proseOrderByRelationAggregateInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_speciesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByRelationAggregateInput;
}
