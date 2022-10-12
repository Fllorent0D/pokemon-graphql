import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokemon_move_methodsScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_move_methodsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_move_methodsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_move_methodsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_move_methodsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_move_methodsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_move_methodsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
