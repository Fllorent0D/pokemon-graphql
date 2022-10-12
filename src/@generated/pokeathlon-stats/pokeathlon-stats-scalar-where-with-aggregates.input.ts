import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokeathlon_statsScalarWhereWithAggregatesInput {

    @Field(() => [pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
