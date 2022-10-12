import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class pokemon_move_method_proseScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_move_method_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_move_method_proseScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_move_method_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_move_method_proseScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_move_method_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_move_method_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_move_method_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
