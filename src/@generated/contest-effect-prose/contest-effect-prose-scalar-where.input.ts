import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class contest_effect_proseScalarWhereInput {

    @Field(() => [contest_effect_proseScalarWhereInput], {nullable:true})
    AND?: Array<contest_effect_proseScalarWhereInput>;

    @Field(() => [contest_effect_proseScalarWhereInput], {nullable:true})
    OR?: Array<contest_effect_proseScalarWhereInput>;

    @Field(() => [contest_effect_proseScalarWhereInput], {nullable:true})
    NOT?: Array<contest_effect_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    contest_effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor_text?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    effect?: StringNullableFilter;
}
