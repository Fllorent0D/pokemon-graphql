import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class location_area_proseScalarWhereWithAggregatesInput {

    @Field(() => [location_area_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<location_area_proseScalarWhereWithAggregatesInput>;

    @Field(() => [location_area_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<location_area_proseScalarWhereWithAggregatesInput>;

    @Field(() => [location_area_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<location_area_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_area_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
