import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_targetsScalarWhereWithAggregatesInput {

    @Field(() => [move_targetsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_targetsScalarWhereWithAggregatesInput>;

    @Field(() => [move_targetsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_targetsScalarWhereWithAggregatesInput>;

    @Field(() => [move_targetsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_targetsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
