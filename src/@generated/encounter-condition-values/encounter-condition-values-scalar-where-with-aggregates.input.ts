import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class encounter_condition_valuesScalarWhereWithAggregatesInput {

    @Field(() => [encounter_condition_valuesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<encounter_condition_valuesScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_condition_valuesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<encounter_condition_valuesScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_condition_valuesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<encounter_condition_valuesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_condition_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_default?: BoolWithAggregatesFilter;
}
