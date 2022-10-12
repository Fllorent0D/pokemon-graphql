import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_namesScalarWhereWithAggregatesInput {

    @Field(() => [move_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_namesScalarWhereWithAggregatesInput>;

    @Field(() => [move_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_namesScalarWhereWithAggregatesInput>;

    @Field(() => [move_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
