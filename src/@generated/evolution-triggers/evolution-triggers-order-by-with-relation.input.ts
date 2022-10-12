import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { evolution_trigger_proseOrderByRelationAggregateInput } from '../evolution-trigger-prose/evolution-trigger-prose-order-by-relation-aggregate.input';
import { pokemon_evolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';

@InputType()
export class evolution_triggersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => evolution_trigger_proseOrderByRelationAggregateInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionOrderByRelationAggregateInput;
}
