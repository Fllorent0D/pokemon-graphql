import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class encounter_slotsScalarWhereWithAggregatesInput {

    @Field(() => [encounter_slotsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<encounter_slotsScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_slotsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<encounter_slotsScalarWhereWithAggregatesInput>;

    @Field(() => [encounter_slotsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<encounter_slotsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_method_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    slot?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    rarity?: IntNullableWithAggregatesFilter;
}
