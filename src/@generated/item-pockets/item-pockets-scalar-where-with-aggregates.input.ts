import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class item_pocketsScalarWhereWithAggregatesInput {

    @Field(() => [item_pocketsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_pocketsScalarWhereWithAggregatesInput>;

    @Field(() => [item_pocketsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_pocketsScalarWhereWithAggregatesInput>;

    @Field(() => [item_pocketsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_pocketsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
