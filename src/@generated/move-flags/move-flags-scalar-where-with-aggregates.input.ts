import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_flagsScalarWhereWithAggregatesInput {

    @Field(() => [move_flagsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_flagsScalarWhereWithAggregatesInput>;

    @Field(() => [move_flagsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_flagsScalarWhereWithAggregatesInput>;

    @Field(() => [move_flagsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_flagsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
