import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class item_pocket_namesScalarWhereWithAggregatesInput {

    @Field(() => [item_pocket_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_pocket_namesScalarWhereWithAggregatesInput>;

    @Field(() => [item_pocket_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_pocket_namesScalarWhereWithAggregatesInput>;

    @Field(() => [item_pocket_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_pocket_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_pocket_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
