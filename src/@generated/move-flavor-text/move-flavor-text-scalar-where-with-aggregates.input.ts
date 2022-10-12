import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_flavor_textScalarWhereWithAggregatesInput {

    @Field(() => [move_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => [move_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => [move_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    flavor_text?: StringWithAggregatesFilter;
}
