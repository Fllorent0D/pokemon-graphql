import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class encounter_conditionsScalarWhereWithAggregatesInput {

    @Field(() => [encounter_conditionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<encounter_conditionsScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_conditionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<encounter_conditionsScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_conditionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<encounter_conditionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
