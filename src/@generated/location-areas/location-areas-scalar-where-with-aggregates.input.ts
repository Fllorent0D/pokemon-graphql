import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class location_areasScalarWhereWithAggregatesInput {

    @Field(() => [location_areasScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<location_areasScalarWhereWithAggregatesInput>;

    @Field(() => [location_areasScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<location_areasScalarWhereWithAggregatesInput>;

    @Field(() => [location_areasScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<location_areasScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    identifier?: StringNullableWithAggregatesFilter;
}
