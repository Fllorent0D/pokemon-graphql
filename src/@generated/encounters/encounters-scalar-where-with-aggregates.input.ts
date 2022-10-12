import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class encountersScalarWhereWithAggregatesInput {

    @Field(() => [encountersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<encountersScalarWhereWithAggregatesInput>;

    @Field(() => [encountersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<encountersScalarWhereWithAggregatesInput>;

    @Field(() => [encountersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<encountersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_area_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_slot_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    min_level?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    max_level?: IntWithAggregatesFilter;
}
