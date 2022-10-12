import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class encounter_condition_value_mapScalarWhereWithAggregatesInput {

    @Field(() => [encounter_condition_value_mapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<encounter_condition_value_mapScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_condition_value_mapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<encounter_condition_value_mapScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_condition_value_mapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<encounter_condition_value_mapScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_condition_value_id?: IntWithAggregatesFilter;
}
