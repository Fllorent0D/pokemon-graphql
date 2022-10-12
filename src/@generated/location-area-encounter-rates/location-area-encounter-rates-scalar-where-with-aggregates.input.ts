import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class location_area_encounter_ratesScalarWhereWithAggregatesInput {

    @Field(() => [location_area_encounter_ratesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<location_area_encounter_ratesScalarWhereWithAggregatesInput>;

    @Field(() => [location_area_encounter_ratesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<location_area_encounter_ratesScalarWhereWithAggregatesInput>;

    @Field(() => [location_area_encounter_ratesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<location_area_encounter_ratesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_area_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_method_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    rate?: IntNullableWithAggregatesFilter;
}
