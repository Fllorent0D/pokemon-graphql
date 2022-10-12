import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class item_flagsScalarWhereWithAggregatesInput {

    @Field(() => [item_flagsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_flagsScalarWhereWithAggregatesInput>;

    @Field(() => [item_flagsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_flagsScalarWhereWithAggregatesInput>;

    @Field(() => [item_flagsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_flagsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
