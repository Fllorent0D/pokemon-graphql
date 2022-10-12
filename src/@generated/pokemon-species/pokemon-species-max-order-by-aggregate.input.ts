import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_speciesMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolves_from_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolution_chain_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shape_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    capture_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_happiness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_baby?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hatch_counter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    has_gender_differences?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    forms_switchable?: keyof typeof SortOrder;
}
