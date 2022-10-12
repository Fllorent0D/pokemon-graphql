import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class pokemonScalarWhereWithAggregatesInput {

    @Field(() => [pokemonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemonScalarWhereWithAggregatesInput>;

    @Field(() => [pokemonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemonScalarWhereWithAggregatesInput>;

    @Field(() => [pokemonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    species_id?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    height?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    weight?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    base_experience?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_default?: BoolWithAggregatesFilter;
}
