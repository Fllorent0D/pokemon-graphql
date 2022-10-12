import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class encounter_condition_proseScalarWhereWithAggregatesInput {

    @Field(() => [encounter_condition_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<encounter_condition_proseScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_condition_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<encounter_condition_proseScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_condition_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<encounter_condition_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_condition_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
