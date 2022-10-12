import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class item_flag_mapScalarWhereWithAggregatesInput {

    @Field(() => [item_flag_mapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_flag_mapScalarWhereWithAggregatesInput>;

    @Field(() => [item_flag_mapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_flag_mapScalarWhereWithAggregatesInput>;

    @Field(() => [item_flag_mapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_flag_mapScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_flag_id?: IntWithAggregatesFilter;
}
