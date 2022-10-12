import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class pokemon_formsScalarWhereInput {

    @Field(() => [pokemon_formsScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_formsScalarWhereInput>;

    @Field(() => [pokemon_formsScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_formsScalarWhereInput>;

    @Field(() => [pokemon_formsScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_formsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_identifier?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    introduced_in_version_group_id?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_default?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_battle_only?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;
}
