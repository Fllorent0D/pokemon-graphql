import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_damage_classesScalarWhereWithAggregatesInput {

    @Field(() => [move_damage_classesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_damage_classesScalarWhereWithAggregatesInput>;

    @Field(() => [move_damage_classesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_damage_classesScalarWhereWithAggregatesInput>;

    @Field(() => [move_damage_classesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_damage_classesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
